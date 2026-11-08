---
title: Payments in South Asia
description: Take Himalayan Bank card payments (NPR and USD), plus NPS, eSewa and Fonepay in Nepali rupees, and find Khalti and Razorpay for Nepal and India.
---

# Payments in South Asia <Badge type="info" text="All plans" />

These providers let travellers pay a business in Nepal: foreign Visa and Mastercard cards through Himalayan Bank, and Nepali wallets, bank apps and cards through NPS, eSewa and Fonepay. Money goes straight into your own merchant account. For Nepal see also [Khalti](./khalti); for India see [Razorpay](./razorpay).

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Himalayan Bank, Nepal Payment Solution (NPS), eSewa or Fonepay, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Himalayan Bank**, **Nepal Payment Solution (NPS)**, **eSewa** or **Fonepay** and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick it, choose a **Mode**, paste the keys and choose **Check and connect**.

See [Payment providers](./payment-providers#how-to-connect-a-provider) for the common steps.

## Himalayan Bank

**What it accepts:** Visa and Mastercard cards from anywhere in the world (with 3-D Secure), paid into your Himalayan Bank merchant account. This is the way for a Nepali business to take foreign cards, since Stripe and PayPal don't pay out in Nepal.

**Currency:** NPR and USD. Himalayan Bank appears at checkout only for tours priced in one of them.

**Keys:** ask Himalayan Bank for an e-commerce merchant account (it runs on 2C2P PACO). You generate two RSA key pairs and register their public halves with HBL; HBL sends its own two public keys back.

| Key | Where to find it |
|---|---|
| **Office ID** | Your merchant ID at Himalayan Bank. |
| **API key** | The access token HBL gives you with the Office ID. |
| **Encryption key ID** | The 32-character ID of HBL's encryption key. |
| **Your signing private key** / **Your decryption private key** | The private halves of the two key pairs you registered with HBL. Paste the whole key; the BEGIN and END lines are optional. |
| **HBL encryption public key** / **HBL signing public key** | From HBL. |

**How payments are confirmed:** every request to HBL is signed and encrypted, and every answer is decrypted and its signature checked. When the traveller returns (and again later, in case they closed the page), Tourtify asks HBL's transaction inquiry whether the payment went through. There is no webhook to set up.

**Refunds:** made from the booking and sent straight to HBL. HBL allows one refund per payment; if it refuses, refund the traveller from your HBL merchant portal and choose **I refunded it in the provider's dashboard**.

## Nepal Payment Solution (NPS)

**What it accepts:** whatever your NPS OnePG account offers: card checkout through Nepali banks, mobile banking and wallets. The traveller picks on the NPS page.

**Currency:** NPR only.

| Key | Where to find it |
|---|---|
| **Merchant ID** / **Merchant name** | From NPS when your OnePG merchant account is set up. |
| **API username** / **API password** | Your OnePG API login. |
| **Secret key** | For signing requests (a separate one for the sandbox). |

The keys are checked with NPS when you connect. NPS also asks for a notification URL during setup; Tourtify doesn't need it, because every payment is confirmed with NPS's transaction status check (amount included) when the traveller returns and again later.

**Refunds:** made through your NPS merchant portal. Refund the traveller there, then choose **I refunded it in the provider's dashboard** on the booking.

## eSewa

**What it accepts:** the eSewa wallet and bank accounts linked to it.

**Currency:** NPR only. eSewa appears at checkout only for tours priced in NPR. If your website sells in another currency, add NPR with the [Currency switcher](./currency-switcher) and give your tours an NPR price.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Merchant (product) code** | From eSewa when your merchant account is approved. For Test mode, use EPAYTEST. |
| **Secret key** | From eSewa with your merchant code. For Test mode, use eSewa's published UAT secret (shown in the field's help). |

**Test and live:** Test mode uses eSewa's UAT environment (rc-epay.esewa.com.np) and travellers can't pay for real. Live takes real payments on esewa.com.np.

**How payments are confirmed:** the traveller is sent to eSewa with a signed form. When they return, Tourtify checks eSewa's signature and confirms the payment with eSewa's transaction status API, and checks again every few minutes in case they don't come back. There is no webhook to set up. An unpaid eSewa checkout expires after 30 minutes, so the traveller can try again.

**Refunds:** made in your eSewa merchant portal, not from Tourtify. Refund the traveller there, then on the booking record the refund and choose **I refunded it in the provider's dashboard**.

**Saved cards:** not supported. Balances are paid from the reminder link.

## Fonepay

**What it accepts:** mobile banking apps and cards through Fonepay.

**Currency:** NPR only. Fonepay appears at checkout only for tours priced in NPR.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Merchant code (PID)** | From Fonepay when your web payment merchant account is set up. |
| **Secret key** | Fonepay sends it with your merchant code (a separate one for the test environment). |

**Test and live:** Test mode uses dev-clientapi.fonepay.com and travellers can't pay for real. Live uses clientapi.fonepay.com.

**How payments are confirmed:** when the traveller returns from Fonepay, Tourtify checks its signature and confirms the payment with Fonepay's verification API. There is no webhook to set up.

**Refunds:** made through your Fonepay merchant portal or bank. Refund the traveller there, then choose **I refunded it in the provider's dashboard** on the booking.

**Saved cards:** not supported.

::: warning Closed tabs stay pending
Fonepay can only be asked about a payment once the traveller has come back to your website. If they close the tab after paying, the payment stays pending: check it in your Fonepay portal and record it on the booking.
:::

## Good to know

- Recording a refund in Tourtify doesn't move any money. Always make the refund in NPS, eSewa or Fonepay first.
- Turning the plugin off means travellers can't pay with it. Your connected account is kept.
- Only the business owner can connect or change payment accounts.
- Tourtify takes 0% commission. The provider's own fees apply.

## Related

- [Payment providers](./payment-providers)
- [Khalti](./khalti)
- [Razorpay](./razorpay)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
