---
title: Payment providers
description: Every way travellers can pay you online in Tourtify, which countries and currencies each provider covers, and how to connect one.
---

# Payment providers <Badge type="info" text="All plans" />

Travellers pay you directly. Money goes straight into your own provider account: Tourtify never holds it and takes 0% commission. Only the provider's own fees apply. You can connect Stripe and any number of regional providers, and travellers choose how to pay at checkout.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers (Pay by bank transfer is under Payments)
- **Where:** Plugins › the provider's plugin, and Settings › Payments & tax › Payments
:::

## Which providers are available

| Provider | Countries / currencies | Methods | Page |
|---|---|---|---|
| Stripe | Worldwide | Cards, Apple Pay, Google Pay and local methods | [Payments](/bookings/payments) |
| PayPal | AUD, BRL, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, JPY, MXN, MYR, NOK, NZD, PHP, PLN, SEK, SGD, THB, TWD, USD | PayPal, cards | [PayPal](./paypal) |
| Razorpay | India; INR, USD, EUR, GBP, AUD, CAD, SGD, AED | UPI, cards, net banking, wallets | [Razorpay](./razorpay) |
| Khalti | Nepal; NPR | Khalti wallet, mobile banking, cards | [Khalti](./khalti) |
| eSewa | Nepal; NPR | eSewa wallet, linked bank accounts | [South Asia](./payments-south-asia#esewa) |
| Fonepay | Nepal; NPR | Mobile banking apps, cards | [South Asia](./payments-south-asia#fonepay) |
| Mollie | Europe; EUR, GBP, USD, CHF, SEK, NOK, DKK, PLN, CZK, HUF, RON, BGN, ISK, AUD, CAD, NZD, HKD, SGD, JPY, ZAR | Cards, iDEAL, Bancontact, SEPA, Klarna and more | [Europe and North America](./payments-europe-north-america#mollie) |
| Square | USD, CAD, GBP, EUR, AUD, JPY | Cards, Apple Pay, Google Pay, Cash App Pay | [Europe and North America](./payments-europe-north-america#square) |
| Xendit | Indonesia, the Philippines, Thailand, Vietnam, Malaysia; IDR, PHP, THB, VND, MYR, SGD, USD | Cards, e-wallets, bank transfers, QR payments | [Asia Pacific](./payments-asia-pacific#xendit) |
| PayMongo | Philippines; PHP | Cards, GCash, Maya, GrabPay, plus QR Ph, online banking and BillEase | [Asia Pacific](./payments-asia-pacific#paymongo) |
| Opn Payments (Omise) | Thailand, Malaysia, Singapore; THB, SGD, MYR, JPY, USD | Cards, PromptPay, TrueMoney, Thai mobile banking, Rabbit LINE Pay, ShopeePay | [Asia Pacific](./payments-asia-pacific#opn-payments-omise) |
| KOMOJU | Japan; JPY | Cards, PayPay, konbini, Pay-easy, bank transfer, LINE Pay, Merpay, Rakuten Pay, Paidy | [Asia Pacific](./payments-asia-pacific#komoju) |
| Mercado Pago | Brazil, Mexico, Argentina, Colombia, Chile, Peru, Uruguay; ARS, BRL, CLP, COP, MXN, PEN, UYU | Cards, Pix, boleto, OXXO, PSE, cash vouchers, Mercado Pago wallet | [Latin America](./payments-latin-america#mercado-pago) |
| Paystack | Nigeria, Ghana, South Africa, Kenya, Côte d’Ivoire; NGN, GHS, ZAR, KES, XOF, EGP, USD | Cards, bank transfer, USSD, mobile money, M-Pesa | [Africa](./payments-africa#paystack) |
| Flutterwave | Across Africa; NGN, GHS, KES, ZAR, UGX, TZS, RWF, ZMW, MWK, XOF, XAF, EGP, USD, EUR, GBP | Cards, mobile money (M-Pesa, MTN, Airtel), bank transfer, USSD | [Africa](./payments-africa#flutterwave) |
| Tap Payments | Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, Oman, Egypt; SAR, AED, KWD, BHD, QAR, OMR, EGP, JOD, USD, EUR, GBP | Cards, mada, KNET, BENEFIT, Apple Pay, STC Pay, Tabby, Tamara | [Middle East and Turkey](./payments-middle-east-turkey#tap-payments) |
| iyzico | Turkey; TRY, EUR, USD, GBP, CHF, NOK | Turkish cards with instalments, iyzico wallet, foreign cards | [Middle East and Turkey](./payments-middle-east-turkey#iyzico) |
| Pay by bank transfer | Any | Transfer to your bank account, confirmed when you record it | [Pay by bank transfer](./bank-transfer) |

## How to choose

- **Start with where your travellers are.** A local provider usually offers the wallets and bank apps travellers there already use. Stripe covers cards worldwide.
- **Check the currency.** A provider is only offered at checkout for tours priced in a currency it takes. If your website sells in another currency, the plugin's drawer warns you. Add the currency with the [Currency switcher](./currency-switcher) and give your tours a price in it.
- **Check what you need for balances.** Charging a saved card automatically for a balance or instalment works with Stripe and Paystack. With other providers, travellers pay the balance from the reminder link.
- **Check refunds.** Most providers refund straight from Tourtify. eSewa, Fonepay and Khalti refunds are made in the provider's own portal (see each page).

## How to connect a provider

Stripe is built in: go to **Settings › Payments & tax › Payments** and follow [Payments](/bookings/payments). Every other provider connects with your own API keys, once its plugin is on.

1. Go to **Plugins** in the console.
2. Find the provider and flip its switch on.
3. Go to **Settings › Payments & tax › Payments**, choose **Add a provider** and pick it. (The plugin's drawer also has a **Connect** button that takes you there.)
4. Under **Mode**, choose **Test** (sandbox keys, no real money) or **Live** (real payments from travellers).
5. Under **API keys**, paste the keys from your provider dashboard and choose **Check and connect**. Tourtify checks the keys with the provider before saving and stores them encrypted.
6. If the provider has a **Webhook** section, register the **Webhook URL** shown there in your provider dashboard, paste the secret it gives you, and choose **Save webhook**.

Only the business owner can connect or change payment accounts. To change keys later, choose **Replace keys**: the old keys keep working until the new ones pass the check.

## Test mode

Start with test keys to try a booking end to end, then switch to live. A test account shows **Test mode** on the Payments page and travellers can't pay for real. To go live, replace the keys with live ones and choose **Live**.

## Webhooks

Every payment is confirmed with the provider before a booking is confirmed: when the traveller returns, and again every few minutes in case they don't. Webhooks make payments confirm faster and bring refunds made in the provider's dashboard onto your bookings.

The plugin's drawer shows a **Last webhook** row:

| Status | Meaning |
|---|---|
| **Not set up** | Payments still work without it (Tourtify checks each one with the provider), but refunds made in the provider's dashboard won't show up on your bookings. |
| **None received yet** | Set up, waiting for the first event. |
| **Received** | The latest event arrived and was checked. |
| **Rejected** | An event failed the signature check. The row says why. |

## What travellers see at checkout

When more than one provider can take the booking's currency, the booking form shows **Pay with** and lists them, with your default account first. When only one fits, it is used without asking. With [Pay by bank transfer](./bank-transfer) on, travellers also see **How would you like to pay?** with **Pay online now** or **Pay by bank transfer**.

Choose **Make default** on the Payments page to set which account card payments go to. **Disconnect** stops new payments through that account; past bookings, payments and refunds are not affected.

## Good to know

- Turning a provider's plugin off means travellers can't pay with it. Your connected account is kept. The Payments page shows **Plugin off** on that account.
- Disconnecting your only payment account stops online checkout until you connect another. Travellers can still send enquiries, and with bank transfer on they can still book and pay by transfer.
- Each provider sends the traveller to its own secure page to pay, then back to your website.

## Related

- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
- [Refunds and cancellations](/bookings/refunds-and-cancellations)
- [Deposits](./deposits)
- [Currency switcher](./currency-switcher)
- [Pay by bank transfer](./bank-transfer)
