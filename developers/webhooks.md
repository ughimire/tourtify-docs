---
title: Webhooks reference
description: Tourtify webhook events, payload format, headers, delivery guarantees, retry schedule and automatic disabling of failing endpoints.
---

# Webhooks reference <Badge type="warning" text="Scale" />

Tourtify sends an HTTP `POST` with a JSON body to each of your endpoints when something happens in a business. This page is the technical reference; for setting up endpoints in the console, see the [Webhooks plugin](/plugins/webhooks).

## Events

| Event type | Sent when |
|---|---|
| `booking.created` | A booking is created and is awaiting payment |
| `booking.confirmed` | A booking is confirmed (paid, deposit paid, or confirmed by staff) |
| `booking.fully_paid` | The booking's balance reaches zero |
| `booking.cancelled` | A booking is cancelled |
| `booking.expired` | A checkout expired unpaid and its seats were released |
| `refund.succeeded` | A refund was sent to the traveller |
| `booking.balance_reminder` | A balance reminder was sent |
| `booking.instalment_reminder` | An instalment reminder was sent |
| `booking.trip_reminder` | A trip reminder was sent |
| `booking.review_requested` | A review request was sent after the trip |
| `lead.created` | A new enquiry, sold-out request or contact message arrived |

New endpoints subscribe to `booking.created`, `booking.confirmed`, `booking.fully_paid` and `booking.cancelled` unless you choose otherwise.

## Request

```http
POST /your/endpoint HTTP/1.1
Content-Type: application/json
User-Agent: Tourtify-Webhooks/2.0
webhook-id: 0192f4c1-7b7e-7cc4-a1f0-3d5e8b9c2a11
webhook-timestamp: 1760270400
webhook-signature: v1,K5oZfzN95Z9UVu1EsfQmfVNQhnkZ2pj9o9NDN/H/pI4=
```

Headers follow the [Standard Webhooks](https://www.standardwebhooks.com/) specification, so you can verify them with any Standard Webhooks library. See [Verify signatures](./verify-signatures).

| Header | Meaning |
|---|---|
| `webhook-id` | Unique message ID. The same across retries; use it to de-duplicate. |
| `webhook-timestamp` | Unix time (seconds) the attempt was signed. Reject messages older than 5 minutes. |
| `webhook-signature` | One or more space-separated `v1,<base64 HMAC-SHA256>` signatures. Two appear for 24 hours after a secret rotation. |

## Body

```json
{
  "id": "0192f4c1-7b7e-7cc4-a1f0-3d5e8b9c2a11",
  "type": "booking.confirmed",
  "timestamp": "2026-10-12T09:20:00+00:00",
  "created": "2026-10-12T09:20:00+00:00",
  "account": "himalayan-trails",
  "data": {
    "booking_id": "0192f4b8-55aa-7d01-9e2b-6a1c0f7d3b42",
    "booking": {
      "id": "0192f4b8-55aa-7d01-9e2b-6a1c0f7d3b42",
      "reference": "HT-24816",
      "status": "confirmed",
      "channel": "direct",
      "seats": 2,
      "total": { "amount_minor": 29800, "currency": "USD" },
      "customer": { "name": "Alex Morgan", "email": "alex@example.com" }
    }
  }
}
```

| Field | Type | Notes |
|---|---|---|
| `id` | string | Same as the `webhook-id` header |
| `type` | string | One of the event types above |
| `timestamp` | string | ISO 8601 time the event was sent (`created` is kept for older receivers) |
| `account` | string | The business the event belongs to (its Tourtify address, e.g. `himalayan-trails`) |
| `test` | boolean | Present and `true` only for events sent with **Send test event** |
| `data` | object | Event data. Booking events include `booking_id` and a `booking` summary; `lead.created` includes `lead_id` and a `lead` object |

### `lead.created`

```json
{
  "type": "lead.created",
  "data": {
    "lead_id": "0192f4d0-1c2b-7a8e-b0f1-2d3c4e5f6a7b",
    "lead": {
      "id": "0192f4d0-1c2b-7a8e-b0f1-2d3c4e5f6a7b",
      "type": "enquiry",
      "name": "Alex Morgan",
      "email": "alex@example.com",
      "phone": "+44 7700 900123",
      "message": "Is lunch included?",
      "travellers": 2,
      "preferred_date": "2026-11-14",
      "tour": { "id": "0192…", "slug": "everest-base-camp-trek", "title": "Everest Base Camp Trek" }
    }
  }
}
```

The booking summary is deliberately small. Fetch more detail from the console, or use the `booking.id` to join with your own records.

## Responding

- Return any **2xx** status within **15 seconds** to acknowledge. The body is ignored.
- Anything else (3xx, 4xx, 5xx, a timeout or a connection error) counts as a failure and is retried.
- Do heavy work asynchronously: store the event, return `200`, then process it.

## Retries

Tourtify makes up to **10 attempts over about 3 days**. Attempt 1 is immediate; later attempts wait:

| Attempt | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|
| Wait before it | 5 s | 5 min | 30 min | 2 h | 5 h | 10 h | 14 h | 20 h | 20 h |

Retries keep the same `webhook-id`, so your de-duplication works across attempts. Events can arrive out of order; use `timestamp` and the booking's current `status` rather than arrival order.

## Automatic disabling

If every delivery to an endpoint fails for **3 days**, Tourtify switches the endpoint off and emails the alert address set in the plugin settings (or the business owners). Fix the receiver, switch the endpoint back on, and resend any missed deliveries from the delivery log.

## Legacy signature

Endpoints created with the first version of webhooks also receive `Tourtify-Signature: t=<timestamp>,v1=<hex HMAC-SHA256(secret, "<timestamp>.<body>")>`. New endpoints use Standard Webhooks only.
