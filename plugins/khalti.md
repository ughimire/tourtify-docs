---
title: Khalti
description: Accept Khalti wallet, mobile banking and cards from travellers paying in Nepali rupees, into your own Khalti merchant account.
---

# Khalti <Badge type="info" text="All plans" />

The Khalti plugin lets travellers pay in Nepali rupees with the Khalti wallet, mobile banking or cards. Payments go straight into your own Khalti merchant account. Every payment is confirmed with Khalti before the booking is confirmed.

::: info At a glance
- **Plan:** All plans
- **Category:** Payments
- **Where:** Console › Plugins › Khalti, and Settings › Business › Payments
:::

## How it works

**What the traveller sees**

At checkout, Khalti appears as a payment method for tours priced in NPR. They pay on Khalti's page and return to your website.

**How payments are confirmed**

Tourtify confirms every payment with Khalti's lookup API: when the traveller returns, and every few minutes for 26 hours in case they don't. Expired or cancelled payments are closed so the traveller can try again. Khalti doesn't use webhooks, so there is nothing else to set up.

## What you need

- A Khalti merchant account.
- Your **Secret key** from the Khalti merchant dashboard › Keys. For testing, use the key from a test merchant account at dev.khalti.com.

## Turn it on and connect

1. Go to **Console › Plugins**.
2. Find **Khalti** and flip its switch on.
3. In the plugin's drawer, find **Connection** and select **Connect**. (You can also connect from **Settings › Business › Payments** › **Add a provider**.)
4. Choose a **Mode**: **Test (sandbox keys)** or **Live (real payments)**.
5. Paste your **Secret key** and select **Check and connect**. Tourtify checks the key with Khalti before saving and stores it encrypted.

The plugin drawer shows the mode you're in:

| Mode | Meaning |
|---|---|
| **Not connected** | Connect a sandbox key first, then switch to live. |
| **Sandbox · test payments only (dev.khalti.com)** | Travellers can't pay for real. Update the key and choose Live to go live. |
| **Live · real payments (khalti.com)** | Taking real payments. |

## Settings

Khalti has no settings of its own. Your key and mode are managed on **Settings › Business › Payments**.

## Currency

Khalti only takes NPR. If your website sells in another currency, the drawer warns you and Khalti appears only for tours priced in NPR. Add NPR with the [Currency switcher](./currency-switcher) and give your tours an NPR price.

## Refunds

Khalti refunds are made in your Khalti merchant dashboard, not from Tourtify.

1. Refund the traveller in the Khalti merchant dashboard.
2. On the booking in Tourtify, record the refund and choose **I refunded it in the provider's dashboard**.

::: warning Refund in Khalti first
Recording the refund in Tourtify doesn't move any money. Always make the refund in Khalti first.
:::

## Good to know

- Only the business owner can connect or change payment accounts.
- Turning the plugin off means travellers can't pay with Khalti. Your connected account is kept.
- Tourtify takes 0% commission. Khalti's own fees apply.

## Related

- [PayPal](./paypal)
- [Razorpay](./razorpay)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
