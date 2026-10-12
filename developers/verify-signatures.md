---
title: Verify signatures
description: Verify Tourtify webhook signatures (Standard Webhooks, HMAC-SHA256) in Node.js, PHP and Python, with replay protection.
---

# Verify signatures

Every webhook is signed with your endpoint's secret. Always verify the signature before trusting a payload: it proves the request came from Tourtify and wasn't changed on the way.

## The algorithm

1. Take the raw request body **exactly as received** (don't parse and re-serialise it).
2. Build the signed content: `{webhook-id}.{webhook-timestamp}.{body}`.
3. Your secret looks like `whsec_<base64>`. Base64-decode the part after `whsec_` to get the key bytes.
4. Compute `HMAC-SHA256(key, signed content)` and base64-encode it.
5. The `webhook-signature` header holds one or more space-separated values like `v1,<base64>`. Accept the request if **any** `v1` value matches, using a constant-time comparison.
6. Reject the request if `webhook-timestamp` is more than **5 minutes** from your server's clock (replay protection).

::: tip Use a library
These headers follow the [Standard Webhooks](https://www.standardwebhooks.com/) spec, so official libraries for most languages work out of the box, for example `standardwebhooks` on npm and PyPI or `standard-webhooks/standard-webhooks` for PHP.
:::

## Node.js

```js
import crypto from 'node:crypto'
import express from 'express'

const secret = process.env.TOURTIFY_WEBHOOK_SECRET // whsec_...
const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64')

const app = express()
app.post('/webhooks/tourtify', express.raw({ type: 'application/json' }), (req, res) => {
  const id = req.header('webhook-id')
  const ts = req.header('webhook-timestamp')
  const sigs = (req.header('webhook-signature') ?? '').split(' ')

  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return res.status(400).end()

  const expected = crypto.createHmac('sha256', key).update(`${id}.${ts}.${req.body}`).digest()
  const ok = sigs.some((s) => {
    const [v, b64] = s.split(',')
    const given = Buffer.from(b64 ?? '', 'base64')
    return v === 'v1' && given.length === expected.length && crypto.timingSafeEqual(given, expected)
  })
  if (!ok) return res.status(401).end()

  const event = JSON.parse(req.body)
  // queue(event) — then acknowledge quickly
  res.status(200).end()
})
```

## PHP

```php
$secret = getenv('TOURTIFY_WEBHOOK_SECRET'); // whsec_...
$key = base64_decode(substr($secret, strlen('whsec_')));

$body = file_get_contents('php://input');
$id = $_SERVER['HTTP_WEBHOOK_ID'] ?? '';
$ts = (int) ($_SERVER['HTTP_WEBHOOK_TIMESTAMP'] ?? 0);

if (abs(time() - $ts) > 300) { http_response_code(400); exit; }

$expected = base64_encode(hash_hmac('sha256', "{$id}.{$ts}.{$body}", $key, true));
$valid = false;
foreach (explode(' ', $_SERVER['HTTP_WEBHOOK_SIGNATURE'] ?? '') as $sig) {
    [$version, $value] = array_pad(explode(',', $sig, 2), 2, '');
    $valid = $valid || ($version === 'v1' && hash_equals($expected, $value));
}
if (! $valid) { http_response_code(401); exit; }

$event = json_decode($body, true);
http_response_code(200);
```

## Python

```python
import base64, hashlib, hmac, os, time

key = base64.b64decode(os.environ["TOURTIFY_WEBHOOK_SECRET"].removeprefix("whsec_"))

def verify(headers: dict, body: bytes) -> bool:
    msg_id, ts = headers["webhook-id"], headers["webhook-timestamp"]
    if abs(time.time() - int(ts)) > 300:
        return False
    expected = base64.b64encode(
        hmac.new(key, f"{msg_id}.{ts}.".encode() + body, hashlib.sha256).digest()
    ).decode()
    return any(
        part.startswith("v1,") and hmac.compare_digest(part[3:], expected)
        for part in headers.get("webhook-signature", "").split(" ")
    )
```

## Rotating a secret

Rotate the secret from the endpoint in **Settings › Team & tools › Webhooks**. For the next 24 hours Tourtify signs every message with **both** the new and the old secret, so the header contains two `v1` values. Deploy the new secret to your receiver any time in that window.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| Signature never matches | The body was parsed and re-encoded before hashing. Hash the raw bytes. |
| Matches locally, fails in production | A proxy or framework changed the body (e.g. whitespace, character encoding). |
| Intermittent timestamp failures | Your server clock drifts. Enable NTP. |
| Using the wrong key | Decode the part after `whsec_` from base64; don't use the string itself. |
