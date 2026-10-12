---
title: Webhooks
description: Send signed booking events to your CRM, accounting or automation tools like Zapier, Make and n8n, with retries for 3 days and a delivery log.
---

# Webhooks <Badge type="warning" text="Scale" />

Webhooks send booking events to your other systems the moment they happen: your CRM, accounting software, or automation tools like Zapier, Make and n8n. Each request is signed so your receiver can trust it. Failed deliveries are retried for about 3 days, and a delivery log shows every attempt with a one-click resend.

::: info At a glance
- **Plan:** Scale
- **Category:** Integrations
- **Where:** Console › Plugins › Webhooks, and Settings › Team & tools › Webhooks
:::

This page covers setting up and running webhooks in the console. For headers, signature verification and payload formats, see the [Webhooks developer reference](/developers/webhooks).

## How it works

1. You add an **endpoint**: a public `https://` address that should receive events, and the events it wants.
2. When one of those events happens, Tourtify sends a signed `POST` request to the endpoint.
3. Your endpoint must answer with a `2xx` status within 15 seconds.
4. If it doesn't, Tourtify retries with increasing gaps for about 3 days.
5. Every attempt is recorded in the **Delivery log**, with the request and the answer.

You can have up to 10 endpoints. Each has its own events and its own signing secret.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Webhooks** and flip its switch on.
3. Optionally select **Configure** and set where failure alerts go, then **Save**.
4. Open **Settings › Team & tools › Webhooks** to add your first endpoint.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Send failure alerts to | When an endpoint keeps failing for 3 days it is switched off and this address is emailed. Leave empty to email the business owners. | Empty (business owners) |

## Add an endpoint

1. Go to **Settings › Team & tools › Webhooks** and select **Add endpoint**.
2. Enter the **URL**, e.g. a Zapier or Make "catch hook", or your own server. It must be a public `https://` address.
3. Add a **Description**, e.g. "Zapier → HubSpot".
4. Choose the **Events** to send (see below).
5. Select **Save**.
6. Copy the **Signing secret** into your receiver now. It's shown only once.

::: warning Save the secret
For security the signing secret is shown only once. If you lose it, rotate the secret to get a new one.
:::

## Events

| Event | Sent when | On by default |
|---|---|---|
| Booking created (awaiting payment) | A booking is created and waiting for payment | Yes |
| Booking confirmed | A booking is confirmed | Yes |
| Booking fully paid | The booking has been paid in full | Yes |
| Booking cancelled | A booking is cancelled | Yes |
| Checkout expired unpaid | A checkout expired without payment | |
| Refund sent | A refund succeeded | |
| Balance reminder sent | A balance reminder went to the traveller | |
| Instalment reminder sent | An instalment reminder went to the traveller | |
| Trip reminder sent | A trip reminder went to the traveller | |
| Review requested | A review request went to the traveller | |
| New enquiry | A new enquiry (lead) came in | |

The event type names and payloads are listed in the [developer reference](/developers/webhooks).

## Send a test event

Select **Send test** on an endpoint. Tourtify sends a sample event, marked `"test": true`, and shows the answer in the delivery log. You can also select **Run test** (**Send test event**) in the plugin drawer to send a sample `booking.confirmed` event.

## Check the delivery log

The **Delivery log** lists every event, endpoint and attempt, newest first. Filter by endpoint, event or result. Select a row to see:

- The **Request headers** and **Request body** that were sent.
- The HTTP status, response time and **Response body (first 2 KB)**.
- Every attempt, and when the next try is due.

The summary at the top shows deliveries and failures over 30 days, the success rate and the average response time.

## Resend a delivery

Open a delivery in the log and select **Resend now**. Tourtify sends the same body and the same `webhook-id`, freshly signed, so your receiver can recognise it as a duplicate if it already processed it.

## When an endpoint fails

- **Retries:** a failed delivery is retried 9 more times over about 3 days (after 5 seconds, 5 minutes, 30 minutes, 2 hours, 5 hours, 10 hours, 14 hours, 20 hours and 20 hours).
- **Failing:** the endpoint shows **Failing since …** while retries continue.
- **Switched off:** an endpoint that receives nothing for about 3 days while events keep failing is switched off automatically, and the alert address is emailed.

To recover:

1. Fix the endpoint.
2. Select **Switch back on**.
3. Resend what it missed from the delivery log.

## Rotate the signing secret

1. On the endpoint, select **Rotate secret**.
2. Copy the new secret into your receiver.

For 24 hours after a rotation, the old secret also signs each request, so receivers using either secret keep working while you update them.

## Switch off or remove an endpoint

- **Switch off** stops events going to it. Retries still due are cancelled. Select **Switch back on** to resume.
- **Remove** deletes the endpoint.

## Good to know

- Requests are signed with the [Standard Webhooks](https://www.standardwebhooks.com/) scheme (`webhook-id`, `webhook-timestamp`, `webhook-signature` headers), so any Standard Webhooks library can verify them.
- Receivers built before October 2026 can tick **Also send the v1 signature** on the endpoint to get the older HMAC-SHA256 header as well.
- Turning the plugin off stops events being sent. Your endpoints and the delivery log are kept.

## Related

- [Webhooks developer reference](/developers/webhooks)
- [Deposits & balance payments](./deposits)
- [Instalment plans](./instalments)
- [Payments](/bookings/payments)
