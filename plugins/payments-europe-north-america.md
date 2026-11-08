---
title: Payments in Europe and North America
description: Take payments through Mollie and Square, paid into your own account, with refunds from Tourtify and webhooks for instant confirmation.
---

# Payments in Europe and North America <Badge type="info" text="All plans" />

Mollie offers the local payment methods European travellers expect, such as iDEAL and Bancontact. Square takes cards and wallets through its own checkout. Both pay into your own account. Stripe, built in, also covers these regions: see [Payments](/bookings/payments).

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Mollie or Square, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Mollie** or **Square** and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick it, choose a **Mode**, paste the keys and choose **Check and connect**.

See [Payment providers](./payment-providers#how-to-connect-a-provider) for the common steps.

## Mollie

**What it accepts:** cards, iDEAL, Bancontact, SEPA, Klarna and other European payment methods switched on in your Mollie account.

**Currencies:** EUR, GBP, USD, CHF, SEK, NOK, DKK, PLN, CZK, HUF, RON, BGN, ISK, AUD, CAD, NZD, HKD, SGD, JPY and ZAR. Mollie appears at checkout only for tours priced in one of these.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **API key** | Mollie Dashboard › Developers › API keys (test_… or live_…). |

**Webhook:** set on every payment automatically, so there is nothing to add in Mollie. The plugin's drawer shows the **Webhook URL** for reference. Mollie only sends a payment id; Tourtify fetches the payment with your key before anything counts.

**Refunds:** made from Tourtify, and refunds made in the Mollie dashboard show up on your bookings.

**Saved cards:** not supported. Balances are paid from the reminder link.

## Square

**What it accepts:** cards, Apple Pay, Google Pay and Cash App Pay through Square checkout links.

**Currencies:** USD, CAD, GBP, EUR, AUD and JPY, and only in your Square location's own currency.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Access token** | Square Developer › your application › Credentials (Sandbox or Production access token). |
| **Location ID** | Square Developer › Locations: the location payments are taken for. Its currency must match your prices. |

**Webhook**

1. In the Square Developer Dashboard › your application › Webhooks › Add subscription, paste the **Webhook URL** shown in Tourtify.
2. Tick the events listed: payment.updated, refund.updated, dispute.created and dispute.state.updated. Save.
3. Copy the signature key into **Webhook signature key** in Tourtify and choose **Save webhook**.

With the webhook in place, payments confirm instantly and refunds and disputes made in Square show up on your bookings.

**Refunds:** made from Tourtify.

**Saved cards:** not supported.

## Good to know

- Square needs a location whose currency matches your tour prices. Square payments for another currency aren't offered.
- Turning the plugin off means travellers can't pay with it. Your connected account is kept.
- Only the business owner can connect or change payment accounts.

## Related

- [Payment providers](./payment-providers)
- [PayPal](./paypal)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Refunds and cancellations](/bookings/refunds-and-cancellations)
