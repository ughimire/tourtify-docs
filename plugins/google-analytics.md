---
title: Google Analytics 4
description: Measure visits and bookings in GA4 with e-commerce events and booking value, consent-gated with Consent Mode v2 and optional server-side purchases.
---

# Google Analytics 4 <Badge type="info" text="All plans" />

The Google Analytics 4 plugin measures visits and bookings on your website. It sends e-commerce events, from tour viewed to booking purchased, with the booking value. It respects cookie consent, and can report purchases from Tourtify's server so ad blockers and payment redirects don't lose them.

::: info At a glance
- **Plan:** All plans
- **Category:** Marketing
- **Where:** Console › Plugins › Google Analytics 4
:::

## How it works

**Consent first**

The plugin uses Google Consent Mode v2. Everything starts denied, and the tag only loads after a visitor accepts cookies on your website.

**Events sent**

| GA4 event | When |
|---|---|
| `view_item` | A visitor views a tour |
| `begin_checkout` | They start checkout |
| `add_payment_info` | They choose a payment method |
| `purchase` | A booking is confirmed, with its value |

Clicks on the [WhatsApp chat button](./whatsapp-button) are also sent, for visitors who accepted cookies.

**Server-side purchases (optional)**

With **Send purchases from our server** on, each confirmed booking is reported to GA4 with the Measurement Protocol, for visitors who accepted cookies. The browser then stops sending its own purchase, so nothing is counted twice.

## What you need

- A GA4 property with a web data stream for your website.
- Your **Measurement ID** (looks like `G-XXXXXXXXXX`), from GA4 › Admin › Data streams › your website.
- For server-side purchases: a **Measurement Protocol API secret**, from the same data stream › Measurement Protocol API secrets › Create.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Google Analytics 4** and flip its switch on. The settings drawer opens.
3. Enter your **Measurement ID**.
4. Optionally switch on **Send purchases from our server** and enter the **Measurement Protocol API secret**.
5. Select **Save**.
6. Select **Run test** (**Send test event**) to check the setup.

## Settings

**Google Analytics**

| Setting | What it does | Default |
|---|---|---|
| Measurement ID | Required. Looks like `G-XXXXXXXXXX`. | Empty |
| Google Tag Manager container (optional) | Looks like `GTM-XXXXXXX`. Leave blank to use GA4 directly. With a container, Tourtify loads Tag Manager instead and pushes the same e-commerce events to its data layer; set up your GA4 tags there. | Empty |

**Server-side purchases**

| Setting | What it does | Default |
|---|---|---|
| Send purchases from our server | Reports each confirmed booking to GA4 with the Measurement Protocol, for visitors who accepted cookies. | Off |
| Measurement Protocol API secret | Needed when server-side purchases are on. Stored encrypted. | Empty |

## Test your setup

Select **Run test** in the drawer. It checks a sample purchase with Google's Measurement Protocol validator, so nothing reaches your reports.

The drawer shows:

- **Tag on your website**: the GA4 ID or Tag Manager container in use.
- **Server-side purchases**: off, or the health of recent purchases sent to GA4.

::: tip Using Tag Manager
If you already manage tags in Google Tag Manager, enter the container ID. Tourtify then pushes `view_item`, `begin_checkout`, `add_payment_info` and `purchase` to the data layer, and you configure GA4 (and any other tags) in Tag Manager.
:::

## Good to know

- Visitors who decline cookies are not tracked, in the browser or from the server.
- Turning the plugin off stops your website sending visits and bookings to Google Analytics.

## Related

- [Meta Pixel](./meta-pixel)
- [WhatsApp chat button](./whatsapp-button)
- [External booking links](./external-booking-links)
- [Checkout](/bookings/checkout)
