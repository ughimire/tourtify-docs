---
title: Accounting sync
description: Send every sale, payment, refund and credit note to Xero, QuickBooks Online, Zoho Books, Sage Accounting or MYOB as it happens.
---

# Accounting sync <Badge type="tip" text="Growth+" />

Accounting sync sends every sale, payment, refund and credit note to your accounting software as it happens, booked to the accounts and tax rates you choose. No more CSV imports. There is one plugin per accounting app: Xero, QuickBooks Online, Zoho Books, Sage Accounting and MYOB. They all work the same way.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Accounting
- **Where:** Plugins › Xero, QuickBooks Online, Zoho Books, Sage Accounting or MYOB, and Settings › Integrations & developers › Xero, QuickBooks, Zoho Books, Sage or MYOB
:::

## How it works

Once connected and mapped, each record is sent once, a minute or so after it happens:

| In Tourtify | In your accounting app |
|---|---|
| A confirmed booking (sale) | An invoice, with your own invoice number |
| A payment | A payment applied to that invoice, in the account for its payment method |
| A refund | A credit note or refund paid back out of the payment account |
| A credit note | A credit note against the original invoice |
| Payouts and supplier bills (money spent), when you choose accounts for them | Money spent or bills (accounts payable) |

Nothing syncs until the sales and money-in accounts are chosen. Nothing dated before your **Sync from** date is sent.

## Turn it on

1. Go to **Plugins** in the console.
2. Find your accounting app (for example **Xero**) and flip its switch on.
3. Select **Connect Xero and choose accounts** (or the same for your app). This opens its page under **Settings › Integrations & developers**.
4. Choose **Connect {app}**, sign in to your accounting app, allow access, and you're brought straight back.
5. Choose your accounts and tax rates (below) and save.

Only an owner or admin can connect.

## Choose accounts and tax

Under **Accounts and tax**, pick from your accounting app's chart of accounts. Choose **Reload from {app}** if you've just added an account there.

| Field | What it does |
|---|---|
| **Sales** | Tour sales, add-ons and discounts. Required. |
| **Money in (default)** | A bank or clearing account. Required. |
| **Refunds** | Empty: booked against sales. |
| **Booking fees** | Empty: same as sales. |
| **Gift vouchers sold** | Usually a liability account: the money is owed until the voucher is used. |
| **Payment links (Quick Pay)** | Optional: an account for payment-link sales. Empty: same as sales. |
| **Point of sale (retail items)** | Till sales of retail items. |
| **Commission paid to agents** | An expense account, like Commission. |
| **Money in, by payment method** | A separate account per payment method if you want one (for example card payments, **Recorded by staff (cash, bank, card machine)**, **Till: cash**, **Till: eSewa, Khalti, Fonepay**, **Collected by resellers**, **Commission kept by OTAs**). Use the default otherwise. |
| **Payouts (money spent)** and **Paid from** | Where payouts to guides and others are booked, and the account they're paid from. |
| **Trek crew pay** | An expense account, like Wages or Cost of sales. |
| **Supplier bills** and **Supplier payments from** | Sent as bills (accounts payable) on this account, like Cost of sales. |
| **Tax rates** | The tax rate or code each of your Tourtify taxes maps to, or **No tax**. |

Payments are applied to the invoice in the account for their payment method; refunds are paid back out of it.

**Customers and tracking**

| Field | What it does |
|---|---|
| **Contacts** | **Per customer** (one contact per traveller email) or **One contact** (every sale under one contact, with **Contact name**; the booking reference is on each invoice). |
| **Tracking category per tour** (**Class per tour** in QuickBooks) | Optional: each tour becomes an option, so you can report profit per tour. Or **Don't track**. |
| **Sync from** | Nothing dated before this is sent. |

## Sync log and catching up

- **Sync log** shows the latest 100 records sent, with their status: **Synced**, **Waiting** or **Failed**. Each record is sent once. If your accounting app rejects one, fix the mapping and choose **Retry**.
- **Catch up** sends everything since a date that isn't in your accounting app yet. Choose a date under **Since** and **Sync everything since then**. It runs in the background at the accounting app's pace.

## Xero

Connects to one Xero organisation. Sales go as approved sales invoices with your Tourtify invoice numbers; refunds go as credit notes paid out from the mapped bank account. Use **Tracking category per tour** to report by tour.

## QuickBooks Online

Connects to one QuickBooks Online company. QuickBooks books sales lines through items, so Tourtify creates one service item per income account you choose ("Tourtify: {account}") and reuses it. Refunds go as credit memos. Use **Class per tour** to report by tour.

## Zoho Books

Connects to your Zoho Books organisation in whichever Zoho data centre it lives in (India, EU, US, Australia and more); Tourtify keeps the data centre from the sign-in. Sales go as invoices with your own numbers, and refunds as credit notes refunded from the mapped account.

## Sage Accounting

Sage Business Cloud Accounting (UK, Ireland, Spain, France, Germany, Canada, the US and South Africa). Connects to one business through Sage ID. Sales go as sales invoices and credit notes, money as contact payments allocated to them. The money accounts offered are your Sage bank accounts, and taxes map to your VAT rates.

## MYOB

MYOB Business or AccountRight (Australia and New Zealand). Connects to one company file through MYOB's secure login. Sales go as service invoices (a credit note is a negative invoice, settled against the original), money as customer payments, and taxes map to your GST codes.

## Your own app

Tourtify's own app connects in one click. If you prefer your own limits, branding or contract, or Tourtify has no app for your region yet, choose **Connect with your own {app} app**: register an app with the provider, paste the **Redirect URI** shown into it, then paste its details and choose **Check and use**. **Use Tourtify's app instead** switches back.

## Disconnect

Choose **Disconnect**. Nothing more is sent; what was already sent stays in your accounting app.

If your accounting app stops accepting the connection, the page shows **Needs reconnecting** and owners get an email. Records wait until you choose **Connect again**: nothing is lost.

## Good to know

- Turning the plugin off: nothing more is sent. The connection, your account choices and the sync log are kept.
- Only an owner or admin can connect or disconnect.

## Related

- [Invoices and tax receipts](./invoices)
- [Gift vouchers](./gift-vouchers)
- [Pay by bank transfer](./bank-transfer)
- [Reports](/bookings/reports)
