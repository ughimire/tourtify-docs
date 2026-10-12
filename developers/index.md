---
title: Developer overview
description: How developers integrate with Tourtify — signed webhooks, payload conventions, money and time formats, and the public REST API roadmap.
---

# Developer overview

Tourtify is designed to sit at the centre of an operator's stack. Booking events flow out to your CRM, accounting, data warehouse or automation tools in real time, signed so you can trust them.

| Integration | Status | Plan |
|---|---|---|
| [Webhooks](./webhooks) — booking, payment, refund and enquiry events | Available | <Badge type="warning" text="Scale" /> |
| No-code automations (Zapier, Make, n8n) via webhooks | Available | <Badge type="warning" text="Scale" /> |
| Analytics: GA4 and Meta Conversions API (server-side purchase events) | Available | All plans |
| [REST API](./rest-api) with API keys and OpenAPI description | Planned | Scale |

## Conventions you can rely on

These rules apply to everything Tourtify sends you. See [Data model & money](./data-model) for detail.

- **IDs** are UUIDs (version 7, time-ordered). Booking **references** such as `HT-24816` are for humans; use `id` for joins.
- **Money** is always an integer in minor units with an ISO 4217 currency: `{"amount_minor": 29800, "currency": "USD"}` is $298.00.
- **Timestamps** are ISO 8601 with an offset. Departure times also carry the tour's IANA time zone.
- **Events are delivered at least once.** Use the `webhook-id` header to ignore duplicates.
- **Payloads are additive.** We add fields over time but never remove or rename one without a new version.

## Get started with webhooks

1. Make sure your business is on the Scale plan, then switch on **Webhooks** in **Console › Plugins**.
2. Open **Settings › Team & tools › Webhooks**, add your endpoint URL and pick events.
3. Copy the signing secret (`whsec_…`) and [verify signatures](./verify-signatures) on every request.
4. Use **Send test event** to see a realistic payload arrive.

## Security

- Endpoints must use HTTPS on the public internet; private and internal addresses are refused.
- Signing secrets can be rotated; the previous secret keeps working for 24 hours so you can deploy without downtime.
- Every attempt is logged with status code, latency and response so you can debug from the console.

Read more in [Security & privacy](/help/security).
