---
title: Razorpay
description: Accept UPI, cards, net banking and wallets from travellers in India, paid into your own Razorpay account, with webhook-confirmed payments and refunds.
---

# Razorpay <Badge type="info" text="All plans" />

The Razorpay plugin lets travellers in India pay with UPI, cards, net banking and wallets. Payments go straight into your own Razorpay account. Add a webhook so payments confirm instantly and refunds made in Razorpay show up on your bookings.

::: info At a glance
- **Plan:** All plans
- **Category:** Payments
- **Where:** Console › Plugins › Razorpay, and Settings › Business › Payments
:::

## How it works

**What the traveller sees**

At checkout, Razorpay appears as a payment method for tours priced in a currency it takes. They pay on Razorpay's secure payment page with UPI, a card, net banking or a wallet, then return to your website.

**What happens behind the scenes**

Razorpay's webhook tells Tourtify when a payment is made, and Tourtify checks the payment with Razorpay before confirming the booking. Refunds made in the Razorpay dashboard are brought into the booking.

**Refunds from the console**

When you refund a booking paid with Razorpay, Tourtify sends the refund to Razorpay for you.

## What you need

- A Razorpay account.
- Your API keys from Razorpay Dashboard › Account & Settings › API keys: the **Key ID** (`rzp_test_…` or `rzp_live_…`) and **Key secret**.

## Turn it on and connect

1. Go to **Console › Plugins**.
2. Find **Razorpay** and flip its switch on.
3. In the plugin's drawer, find **Connection** and select **Connect**. (You can also connect from **Settings › Business › Payments** › **Add a provider**.)
4. Choose a **Mode**: **Test (sandbox keys)** or **Live (real payments)**.
5. Paste your **Key ID** and **Key secret**, then select **Check and connect**. Tourtify checks the keys with Razorpay before saving and stores them encrypted.

## Add the webhook

1. In Tourtify, open **Console › Plugins › Razorpay** and select **Configure**. Copy the **Webhook URL** shown at the top of the drawer.
2. In Razorpay › Account & Settings › **Webhooks**, select **Add new webhook**.
3. Paste the webhook URL and choose a secret.
4. Tick these events:
   - `payment_link.paid`
   - `payment.captured`
   - `refund.processed`
5. Save the webhook in Razorpay.
6. Back in the drawer, enter the same secret under **Webhook secret** and select **Save**.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Webhook secret | The secret you chose in Razorpay. Tourtify uses it to check every webhook really came from Razorpay. Stored encrypted and never shown again. | Empty |

The drawer also shows the webhook URL and whether webhook events are arriving.

## Currencies

Razorpay appears at checkout for tours priced in INR, USD, EUR, GBP, AUD, CAD, SGD or AED.

::: warning Charging outside INR
Anything other than INR needs international payments switched on in your Razorpay account.
:::

If your main currency isn't one Razorpay takes, add one with the [Currency switcher](./currency-switcher) and price your tours in it.

## Good to know

- Only the business owner can connect or change payment accounts.
- Turning the plugin off means travellers can't pay with Razorpay. Your connected account is kept.
- Tourtify takes 0% commission. Razorpay's own fees apply.

## Related

- [PayPal](./paypal)
- [Khalti](./khalti)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
