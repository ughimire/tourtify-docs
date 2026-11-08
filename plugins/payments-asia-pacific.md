---
title: Payments in Asia Pacific
description: Take payments in Southeast Asia and Japan through Xendit, PayMongo, Opn Payments (Omise) and KOMOJU, paid into your own account.
---

# Payments in Asia Pacific <Badge type="info" text="All plans" />

These providers offer the e-wallets, QR payments, bank apps and convenience-store payments travellers in Southeast Asia and Japan use. Money goes into your own provider account.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Xendit, PayMongo, Opn Payments (Omise) or KOMOJU, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find the provider and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick it, choose a **Mode**, paste your secret key and choose **Check and connect**.
4. Set up the webhook (below) and choose **Save webhook**.

See [Payment providers](./payment-providers#how-to-connect-a-provider) for the common steps.

## Xendit

**What it accepts:** cards, e-wallets, bank transfers (virtual accounts), QR payments and retail outlets.

**Countries and currencies:** Indonesia, the Philippines, Thailand, Vietnam and Malaysia; IDR, PHP, THB, VND, MYR, SGD and USD.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret API key** | Xendit Dashboard › Settings › API keys (xnd_development_… or xnd_production_…), with write access to Money-in. |

**Webhook**

1. In Xendit › Settings › Webhooks, paste the **Webhook URL** shown in Tourtify for "Invoices paid" (and "Refunds").
2. Copy the verification token from that page into **Callback verification token** in Tourtify.

**Refunds:** made from Tourtify.

## PayMongo

**What it accepts:** cards, GCash, Maya and GrabPay, plus QR Ph, online banking and BillEase when you turn them on.

**Country and currency:** the Philippines; PHP only.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | PayMongo Dashboard › Developers › API keys (sk_test_… or sk_live_…). |

**Webhook:** in PayMongo › Developers › Webhooks, create a webhook for the **Webhook URL** shown in Tourtify with the events checkout_session.payment.paid, payment.paid, payment.failed and payment.refunded. Paste its signing secret (whsk_…) into **Webhook signing secret**.

**Settings**

| Setting | What it does |
|---|---|
| More payment methods | Cards, GCash, Maya and GrabPay are always offered. Tick **QR Ph**, **Online banking (BPI, UnionBank)** or **BillEase (pay later)** only after PayMongo has switched them on for your account. |

Open it from **Plugins** › PayMongo › **Configure**.

**Refunds:** made from Tourtify.

## Opn Payments (Omise)

**What it accepts:** cards and the methods switched on in your Opn account, such as PromptPay, TrueMoney, Thai mobile banking, Rabbit LINE Pay and ShopeePay.

**Countries and currencies:** Thailand, Malaysia and Singapore; THB, SGD, MYR, JPY and USD.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | Opn dashboard › Keys (skey_test_… or skey_…). |

**Webhook:** in the Opn dashboard › Webhooks, add the **Webhook URL** shown in Tourtify (for charge and refund events), then copy the webhook secret into **Webhook secret**. Opn shows the secret only once.

**Refunds:** made from Tourtify.

::: tip Set up the webhook for Opn
Opn's payment page doesn't send the traveller back to your website. The webhook, together with Tourtify's regular check, confirms the booking within moments and the confirmation email follows.
:::

## KOMOJU

**What it accepts:** cards, PayPay, konbini (convenience-store) payments, Pay-easy, bank transfer, LINE Pay, Merpay, Rakuten Pay, au PAY and Paidy.

**Country and currency:** Japan; JPY only.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | KOMOJU › Settings › API keys (sk_test_… or sk_live_…). |

**Webhook:** in KOMOJU › Settings › Webhooks, add the **Webhook URL** shown in Tourtify, choose a secret token, tick the payment events (captured, expired, cancelled, refunded), and enter the same token in **Webhook secret token**.

**Seats held while a konbini payment is made:** konbini, Pay-easy and bank transfer are paid after checkout. Tourtify keeps the seats until the payment deadline (up to 3 days, never later than the day before the trip) and confirms the booking when the money arrives. If the slip runs out, the seats go back on sale. When the trip is too close, only on-the-spot methods are offered.

**Refunds:** card and wallet payments are refunded from Tourtify. Konbini, Pay-easy and bank transfer payments can't be refunded automatically, because KOMOJU needs the traveller's bank account: create a refund request in KOMOJU (or pay it back another way) and record the refund as made outside Tourtify.

## Saved cards

None of these providers support saved cards for automatic balance payments in Tourtify. Travellers pay balances from the reminder link.

## Good to know

- Webhooks only trigger a check: every payment is confirmed with the provider before the booking is confirmed.
- Turning a plugin off means travellers can't pay with it. Your connected account is kept.
- Only the business owner can connect or change payment accounts.

## Related

- [Payment providers](./payment-providers)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Refunds and cancellations](/bookings/refunds-and-cancellations)
