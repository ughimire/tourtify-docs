---
title: Payments
description: Connect Stripe or a regional gateway to take payments on Tourtify, record manual payments, send payment links and handle payments that need review.
---

# Payments

Travellers pay you directly. Money goes straight to your own payment account: Tourtify never holds it and takes 0% commission. Connect at least one provider to take bookings online, then record any money you receive in other ways.

::: info Where to find it
Console › Settings › Payments & tax › Payments
:::

## Connect Stripe

Stripe is the built-in card provider: cards, Apple Pay, Google Pay and local methods, with payouts straight to your bank. Choose **Connect Stripe** and pick how to connect:

**One click with Stripe Connect** <Badge type="tip" text="Recommended" />

1. Go to **Settings › Payments & tax › Payments** and choose **Connect Stripe**.
2. Choose **Where is your business registered?**.
3. Choose **Continue to Stripe**. You finish on Stripe's secure site: business or personal details, ID and the bank account for payouts. It takes about 5 minutes, and your progress is saved if you stop.
4. You come straight back to Tourtify. The account shows **Ready for payments.** once Stripe has approved it.

**Use your own Stripe key**

For an existing Stripe account you want to keep in full control of:

1. In Stripe, open **API keys**, choose **Create restricted key** and name it "Tourtify". Set the permissions the drawer lists to **Write** or **Read**, and leave everything else as **None**.
2. Paste the **Restricted key**, choose the **Mode** (test or live) and choose **Check and connect**. Tourtify checks the key with Stripe, stores it encrypted and sets up the webhook for you. The key is never shown again.

You can later **Replace key**, or **Move to one-click Stripe Connect**.

::: tip Setup not finished?
Your progress is saved. Choose **Continue setup** to see exactly what Stripe still needs (usually identity or bank verification). Choose **Check status again** after you've sent it.
:::

Only the business **owner** can connect or change payment accounts.

### Payment methods

Under **Payment methods** you see which methods your Stripe account offers (cards, wallets, bank redirects, bank debits, buy now pay later, cash vouchers and more), which ones are **Suggested** for your business, and notes such as **Can pay the balance automatically** or **Can’t be refunded through Stripe**. Turn methods on or off with **Manage in Stripe**, then choose **Refresh**.

## Account statuses

| Status | Meaning |
|---|---|
| Connected / Ready for payments | Travellers can pay |
| Taking payments. Payouts are not on yet. | Payments work; the provider still needs details before paying out |
| Needs setup | Setup isn't finished |
| Plugin off | Keys are saved but the gateway's plugin is switched off |

## Other payment providers

PayPal, regional providers and bank transfer connect with your own account, once their plugin is on. See [Payment providers](/plugins/payment-providers) for the full list by country, including Razorpay, Khalti, eSewa, Fonepay, Mollie, Square, Xendit, Mercado Pago, Paystack, Flutterwave, iyzico, KOMOJU, PayMongo, Opn Payments, Tap Payments and [Pay by bank transfer](/plugins/bank-transfer).

1. Switch on the provider's plugin in **Plugins**.
2. In **Settings › Payments & tax › Payments**, choose **Add a provider** and pick it.
3. Choose **Test** (sandbox keys, no real money) or **Live**, paste the API keys from your provider's dashboard and choose **Check and connect**. Keys are checked with the provider and stored encrypted.
4. Where the provider uses a webhook, copy the address shown and add it in the provider's dashboard, so payments, refunds and disputes made there show up in Tourtify on their own.

A provider that only takes some currencies is only offered for tours priced in those currencies. **Hide providers that don’t take …** keeps the list to the ones that fit your main currency.

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

## Reconcile payouts

**Finance › Payments › Payouts** shows every payout Stripe sent to your bank (owners, admins and access groups with finance access).
Tourtify syncs payouts every few hours and as soon as Stripe reports a payout paid or failed; **Sync now** checks straight away.

Each payout is broken down into the payments, refunds and fees it contains, and each payment or refund is matched to the
booking that recorded it. Tourtify flags:

- **Not in Tourtify**: Stripe paid out a payment or refund that no booking records (for example, one taken in the Stripe
  dashboard).
- **Amount differs**: Stripe settled a different amount than the booking recorded.
- **Doesn't add up**: the transactions don't sum to the amount paid out.
- **Failed**: your bank returned the payout.
- **Not paid out yet**: payments older than the days you choose (7 by default) that no payout includes.

Export the payout list, or one payout's transactions, as CSV for your accountant. Payouts you start by hand in Stripe aren't
broken down by Stripe, so they can't be matched line by line.

## Related

- [Refunds and cancellations](/bookings/refunds-and-cancellations)
- [Checkout](/bookings/checkout)
- [Deposits plugin](/plugins/deposits)
- [Instalments plugin](/plugins/instalments)
- [Payment providers](/plugins/payment-providers)
- [Reports](/bookings/reports)
