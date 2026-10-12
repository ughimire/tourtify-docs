---
title: PayPal
description: Let travellers pay with PayPal or card through your own PayPal business account, with refunds and disputes synced back to your bookings.
---

# PayPal <Badge type="info" text="All plans" />

The PayPal plugin lets travellers pay with their PayPal account or a card through PayPal. Money goes straight into your own PayPal business account: Tourtify never holds it. Add a webhook so refunds and disputes made in PayPal show up on your bookings.

::: info At a glance
- **Plan:** All plans
- **Category:** Payments
- **Where:** Console › Plugins › PayPal, and Settings › Business › Payments
:::

## How it works

**What the traveller sees**

At checkout, PayPal appears as a payment method for tours priced in a currency PayPal takes. They approve the payment on PayPal and come straight back to your website.

**What happens behind the scenes**

Tourtify captures the payment when the traveller comes back, when PayPal's webhook arrives, or on the next automatic check, so a closed browser tab doesn't lose a booking. Refunds and reversals made in PayPal arrive by webhook and are recorded on the booking.

**Refunds from the console**

When you refund a booking paid with PayPal, Tourtify sends the refund to PayPal for you.

## What you need

- A PayPal business account.
- An app in the PayPal developer dashboard (developer.paypal.com › Apps & Credentials), sandbox or live, with its **Client ID** and **Secret**.

## Turn it on and connect

1. Go to **Console › Plugins**.
2. Find **PayPal** and flip its switch on.
3. In the plugin's drawer, find **Connection** and select **Connect**. (You can also connect from **Settings › Business › Payments** › **Add a provider**.)
4. Choose a **Mode**: **Test (sandbox keys)** or **Live (real payments)**.
5. Paste your **Client ID** and **Secret**, then select **Check and connect**. Tourtify checks the keys with PayPal before saving and stores them encrypted.

::: tip Test first
Start with sandbox keys to try a booking end to end, then select **Replace keys** and switch to live. The old keys keep working until the new ones pass the check.
:::

## Add the webhook

The webhook keeps your bookings in sync with refunds and disputes made in PayPal.

1. In Tourtify, open **Console › Plugins › PayPal** and select **Configure**. Copy the **Webhook URL** shown at the top of the drawer.
2. In developer.paypal.com › Apps & Credentials › your app › **Webhooks**, add a webhook with that URL.
3. Subscribe to these events:
   - `CHECKOUT.ORDER.APPROVED`
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `PAYMENT.CAPTURE.REFUNDED`
   - `PAYMENT.CAPTURE.REVERSED`
4. Copy the **Webhook ID** PayPal shows, paste it into the drawer and select **Save**.

Use the app whose keys you connected: sandbox keys need a sandbox webhook, live keys a live one.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Webhook ID | The ID PayPal shows for your webhook. Tourtify uses it to verify every event with PayPal. | Empty |

The drawer also shows the webhook URL and whether webhook events are arriving.

## Currencies

PayPal takes AUD, BRL, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, JPY, MXN, MYR, NOK, NZD, PHP, PLN, SEK, SGD, THB, TWD and USD.

If your main currency isn't one of these, the drawer warns you. PayPal then appears only for tours priced in a currency it takes. Add one with the [Currency switcher](./currency-switcher) and price your tours in it.

## Good to know

- Only the business owner can connect or change payment accounts.
- Turning the plugin off means travellers can't pay with PayPal. Your connected account is kept.
- Tourtify takes 0% commission. PayPal's own fees apply.

## Related

- [Razorpay](./razorpay)
- [Khalti](./khalti)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
