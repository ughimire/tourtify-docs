---
title: Payments in the Middle East and Turkey
description: Take cards, mada, KNET, BENEFIT, Apple Pay and buy-now-pay-later through Tap Payments, and Turkish cards with instalments through iyzico.
---

# Payments in the Middle East and Turkey <Badge type="info" text="All plans" />

Tap Payments covers the Gulf and Egypt, including local debit networks and buy-now-pay-later. iyzico covers Turkey, including card instalments. Both pay into your own account.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Tap Payments or iyzico, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Tap Payments** or **iyzico** and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick it, choose a **Mode**, paste the keys and choose **Check and connect**.

See [Payment providers](./payment-providers#how-to-connect-a-provider) for the common steps.

## Tap Payments

**What it accepts:** the methods on your Tap account, such as cards, mada, KNET, BENEFIT, Apple Pay, STC Pay, Tabby and Tamara.

**Countries and currencies:** Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, Oman and Egypt; SAR, AED, KWD, BHD, QAR, OMR, EGP, JOD, USD, EUR and GBP.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | Tap dashboard › goSell › API credentials (sk_test_… or sk_live_…). |

**Webhook:** nothing to add in Tap. Tap is told the webhook URL on every payment and refund, and signs it with your secret key.

**Refunds:** made from Tourtify. If Tap can't refund a payment, the booking shows Tap's reason.

**Saved cards:** not supported. Balances are paid from the reminder link.

## iyzico

**What it accepts:** Turkish cards with instalments, the iyzico wallet and foreign cards.

**Currencies:** TRY, EUR, USD, GBP, CHF and NOK.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **API key** | iyzico merchant panel › Settings › Company settings (sandbox keys start with sandbox-). |
| **Secret key** | From the same page. |

**Webhook:** in iyzico › Settings › Merchant notifications, paste the **Webhook URL** shown in Tourtify. Ask iyzico to switch on webhook signatures (X-IYZ-SIGNATURE-V3); they are checked with your secret key.

**Refunds:** made from Tourtify.

**Saved cards:** not supported.

## Good to know

- Webhooks only trigger a check: every payment is confirmed with the provider before the booking is confirmed.
- Turning a plugin off means travellers can't pay with it. Your connected account is kept.
- Only the business owner can connect or change payment accounts.

## Related

- [Payment providers](./payment-providers)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
