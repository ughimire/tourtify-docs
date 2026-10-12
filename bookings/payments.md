---
title: Payments
description: Connect Stripe or a regional gateway to take payments on Tourtify, record manual payments, send payment links and handle payments that need review.
---

# Payments

Travellers pay you directly. Money goes straight to your own payment account: Tourtify never holds it and takes 0% commission. Connect at least one provider to take bookings online, then record any money you receive in other ways.

::: info Where to find it
Console › Settings › Business › Payments
:::

## Connect Stripe

Stripe is the default card provider and is connected through Stripe Connect.

1. Go to **Settings › Payments** and choose **Connect** (or **Add a provider**).
2. Choose **Where is your business registered?**.
3. Choose **Continue to Stripe**. You finish on Stripe's secure site: business or personal details, ID and the bank account for payouts. It takes about 5 minutes.
4. You come straight back to Tourtify. The account shows **Ready for payments** once Stripe has approved it.

::: tip Setup not finished?
Your progress is saved. Choose **Continue setup** to see exactly what Stripe still needs (usually identity or bank verification). Choose **Check status again** after you've sent it.
:::

Only the business **owner** can connect or change payment accounts.

## Account statuses

| Status | Meaning |
|---|---|
| Connected / Ready for payments | Travellers can pay |
| Taking payments. Payouts are not on yet. | Payments work; the provider still needs details before paying out |
| Needs setup | Setup isn't finished |
| Plugin off | Keys are saved but the gateway's plugin is switched off |

## Regional gateways and PayPal

PayPal and regional gateways connect with your own API keys, once their plugin is on:

| Provider | Plugin |
|---|---|
| PayPal | [PayPal](/plugins/paypal) |
| Razorpay (India) | [Razorpay](/plugins/razorpay) |
| Khalti (Nepal) | [Khalti](/plugins/khalti) |

1. Switch on the plugin in **Plugins**.
2. In **Settings › Payments**, choose **Add a provider** and pick it.
3. Choose **Test** (sandbox keys, no real money) or **Live**, paste the API keys and choose **Check and connect**. Keys are checked with the provider and stored encrypted.

A gateway that only supports some currencies is only offered for tours priced in those currencies.

## Several providers

Travellers choose how to pay at checkout. Choose **Make default** to set which account card payments go to. **Disconnect** stops new payments through that account; past bookings, payments and refunds are not affected.

::: warning Your only account
Disconnecting your only payment account stops online checkout until you connect another. Travellers can still send enquiries.
:::

## Record a manual payment

For cash, bank transfers or a card terminal:

1. Open the booking and choose **Record payment**.
2. Enter the **Amount**, choose **How was it paid?** (Bank transfer, Cash, Card terminal, Other) and an optional note such as a transfer reference.
3. Save. When payments cover the total, the booking becomes fully paid.

## Send a payment link

On a booking with money owed, choose **Email payment link**. The traveller gets a branded email with a secure link to pay the balance online. You can also select several bookings in the list and send links in bulk.

## Payments that need review

Tourtify checks every payment against its booking. If something doesn't add up, the booking is kept (not expired) and owners and admins get an email alert. The dashboard shows "payments to check".

| Activity entry | What to do |
|---|---|
| Payment amount didn't match: needs review | Compare the amount and currency in your provider's dashboard; record or refund the difference |
| Paid, but the provider is holding the money: needs review | Check the payment in your provider's dashboard |
| Payment arrived after the seats were gone: refund needed | Refund the traveller, or add capacity and confirm the booking |

## Related

- [Refunds and cancellations](/bookings/refunds-and-cancellations)
- [Checkout](/bookings/checkout)
- [Deposits plugin](/plugins/deposits)
- [Instalments plugin](/plugins/instalments)
- [Reports](/bookings/reports)
