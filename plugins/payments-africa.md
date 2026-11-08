---
title: Payments in Africa
description: Take cards, bank transfer, USSD, mobile money and M-Pesa through Paystack and Flutterwave, paid into your own account.
---

# Payments in Africa <Badge type="info" text="All plans" />

Paystack and Flutterwave let travellers across Africa pay with cards, mobile money, bank transfer and USSD on the provider's secure page. Money goes into your own account.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Paystack or Flutterwave, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Paystack** or **Flutterwave** and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick it, choose a **Mode**, paste your secret key and choose **Check and connect**.
4. Set up the webhook (below).

See [Payment providers](./payment-providers#how-to-connect-a-provider) for the common steps.

## Paystack

**What it accepts:** cards, bank transfer, USSD, mobile money and M-Pesa.

**Countries and currencies:** Nigeria, Ghana, South Africa, Kenya and Côte d'Ivoire; NGN, GHS, ZAR, KES, XOF, EGP and USD.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | Paystack Dashboard › Settings › API Keys & Webhooks (sk_test_… or sk_live_…). |

**Webhook:** in Paystack › Settings › API Keys & Webhooks, paste the **Webhook URL** shown in Tourtify as the Webhook URL. Paystack signs it with your secret key, so there is nothing else to copy.

**Refunds:** made from Tourtify.

**Saved cards:** supported. With automatic balance payments on in [Deposits](./deposits), travellers paying by card can tick **Pay the rest automatically with this card**, and Tourtify charges the balance or instalments on the due date.

## Flutterwave

**What it accepts:** cards, mobile money (M-Pesa, MTN, Airtel and others), bank transfer and USSD.

**Currencies:** NGN, GHS, KES, ZAR, UGX, TZS, RWF, ZMW, MWK, XOF, XAF, EGP, USD, EUR and GBP.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Secret key** | Flutterwave Dashboard › Settings › API keys (FLWSECK_TEST-… or FLWSECK-…). |

**Webhook**

1. In Flutterwave › Settings › Webhooks, paste the **Webhook URL** shown in Tourtify (it's used for payment and refund webhooks).
2. Choose a secret hash (any long random text) and save.
3. Enter the same text in **Webhook secret hash** in Tourtify and choose **Save webhook**.

**Refunds:** made from Tourtify.

**Saved cards:** not supported. Balances are paid from the reminder link.

## Good to know

- Webhooks only trigger a check: every payment is confirmed with the provider before the booking is confirmed.
- Turning the plugin off means travellers can't pay with it. Your connected account is kept.
- Only the business owner can connect or change payment accounts.

## Related

- [Payment providers](./payment-providers)
- [Deposits](./deposits)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
