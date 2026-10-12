---
title: Meta Pixel
description: Measure and optimise Facebook and Instagram ads with tour views, checkouts and bookings, consent-gated, plus deduplicated Conversions API purchases.
---

# Meta Pixel <Badge type="info" text="All plans" />

The Meta Pixel plugin measures your Facebook and Instagram ads. It reports tour views, checkouts started, payment info added and bookings with their value, so Meta can optimise your campaigns. It loads only after visitors accept cookies, and the Conversions API can also report each booking from Tourtify's server, deduplicated with the Pixel.

::: info At a glance
- **Plan:** All plans
- **Category:** Marketing
- **Where:** Console › Plugins › Meta Pixel
:::

## How it works

**Consent first**

The Pixel loads only after a visitor accepts cookies on your website.

**Events sent**

| Meta event | When |
|---|---|
| `PageView` | Each page view |
| `ViewContent` | A visitor views a tour |
| `InitiateCheckout` | They start checkout |
| `AddPaymentInfo` | They choose a payment method |
| `Purchase` | A booking is confirmed, with its value |

**Conversions API (optional)**

With the Conversions API on, Tourtify also sends each confirmed booking to Meta from its server, for visitors who accepted cookies. The browser Pixel and the server send the same event ID, so Meta counts each booking once.

## What you need

- A Meta dataset (Pixel) in Events Manager. Your **Pixel ID** is the 15–16 digit dataset ID in Events Manager › Data sources.
- For the Conversions API: an access token from Events Manager › your dataset › Settings › Conversions API › Generate access token.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Meta Pixel** and flip its switch on. The settings drawer opens.
3. Enter your **Pixel ID**.
4. Optionally switch on **Send purchases from our server (Conversions API)** and paste the **Conversions API access token**.
5. Select **Save**.

## Settings

**Pixel**

| Setting | What it does | Default |
|---|---|---|
| Pixel ID | Required. The 15–16 digit dataset ID from Meta Events Manager › Data sources. | Empty |

**Conversions API**

| Setting | What it does | Default |
|---|---|---|
| Send purchases from our server (Conversions API) | For visitors who accepted cookies. Browser and server send the same event ID, so Meta counts each booking once. | Off |
| Conversions API access token | Needed when the Conversions API is on. Stored encrypted. | Empty |
| Test event code (optional) | From Events Manager › Test events, e.g. `TEST12345`. While set, server events show up there instead of in your reports. | Empty |

## Test your setup

1. In Events Manager, open **Test events** and copy the test event code.
2. Paste it into **Test event code** and select **Save**.
3. Select **Run test** (**Send test event**). A sample Purchase is sent with your test event code. Check it appears under Events Manager › Test events.
4. Clear **Test event code** and select **Save**.

::: warning Clear the test code
While a test event code is set, the drawer shows **Test mode: On** and server events go to Test events, not your reports. Clear it when you're done testing.
:::

The drawer shows whether the Conversions API is off, or the health of recent events received by Meta.

## Good to know

- Visitors who decline cookies are not tracked, in the browser or from the server.
- Clicks on the [WhatsApp chat button](./whatsapp-button) are also sent, for visitors who accepted cookies.
- Turning the plugin off stops your website sending events to Meta.

## Related

- [Google Analytics 4](./google-analytics)
- [WhatsApp chat button](./whatsapp-button)
- [Checkout](/bookings/checkout)
