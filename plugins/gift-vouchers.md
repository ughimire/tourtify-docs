---
title: Gift vouchers
description: Sell or give gift vouchers with a value that travellers spend at checkout, across as many bookings as the balance allows.
---

# Gift vouchers <Badge type="info" text="All plans" />

Gift vouchers let you sell or give vouchers with a value. Travellers enter the code at checkout and it pays like money, across as many bookings as the balance allows. Unused value comes back if a booking expires or is refunded. Use them for gifts, prizes, or to make up for a cancelled trip.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Sales
- **Where:** Plugins › Gift vouchers, and Finance › Payments › Gift vouchers
:::

## How it works

**What the buyer sees**

With selling online on, your website has a **Gift vouchers** page ("Buy a gift voucher"). The buyer:

1. Chooses an amount, or **Or another amount** if you allow it.
2. Says who it's for: **Me** or **Someone else**, with their name, email and a **Message**. They can **Send it on** a date, for birthdays and holidays, or leave it empty to send it straight after payment. Leaving the recipient's email empty sends the voucher to the buyer to give in person.
3. Enters their own details and pays on your payment provider's secure page.

The voucher is emailed, ready to print or forward, and the buyer gets a receipt.

**What the traveller sees at checkout**

The booking form has **Have a gift voucher?** (or **Have a promo code or gift voucher?**). The code pays up to its balance; anything left is paid by card. The rest of the balance stays on the voucher for another booking.

**What your team sees**

**Finance › Payments › Gift vouchers** lists every voucher with its value, what's left and its status, and the vouchers bought on your website with who they're for and when they're sent.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Gift vouchers** and flip its switch on.
3. Select **Configure** to set validity and, if you want, switch on selling online. **Save**.

Selling online needs a connected payment account. Without one, the Gift vouchers page warns "Your website can't sell vouchers yet" with a **Connect payments** button.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Vouchers are valid for (months) | Check the minimum your country requires (often 1–5 years). 1–120. | 24 |
| Code prefix | Letters and numbers, up to 8. | GIFT |

**Selling online**

| Setting | What it does | Default |
|---|---|---|
| Sell gift vouchers on your website | Visitors choose an amount, pay online, and the voucher is emailed to them or straight to the person it's for. | Off |
| Amounts to offer | Comma-separated, in your main currency (e.g. 50,100,200). | 50,100,200 |
| Let buyers enter their own amount | Shows **Or another amount**. | On |
| Smallest amount | | 25 |
| Largest amount | | 500 |

## Using the Gift vouchers page

Go to **Finance › Payments › Gift vouchers**.

**Issue a voucher by hand**

Choose **Issue voucher**, for a gift sold in person, a prize, or to make up for a cancelled trip. Enter the **Value** and **Currency**, the **Recipient's name** and **Recipient's email**, **From (buyer's name)** and a **Message**, and choose the language the voucher email and printable certificate are written in. Tick **Email the voucher to the recipient now** to send it straight away.

**Manage vouchers**

- Search by **Code, recipient or buyer** and filter by status: **Active**, **Used up**, **Expired** and others.
- The page shows **Active vouchers** and **Unused value (liability)**, what you still owe in vouchers.
- From a voucher's actions: **Copy code**, **Email it again**, **Print certificate (PDF)** or **Void voucher**. Voiding means the remaining balance can no longer be used; bookings already paid with it are not affected.
- **Bought online** shows website orders, with **Awaiting payment**, **Paid**, **Sending on {date}** or **Voucher sent {date}**.

## Good to know

- If a booking paid with a voucher expires unpaid or is refunded, the value goes back on the voucher.
- [Self-service changes](./self-service-changes) can give travellers who cancel a gift voucher for everything they paid.
- With accounting sync on, choose a **Gift vouchers sold** account (usually a liability account) in the account mapping. See [Accounting sync](./accounting-sync).
- Turning the plugin off: vouchers stop being sold, and their codes can't be used at checkout while it's off. Codes and balances are kept.

## Related

- [Promo codes](./promo-codes)
- [Checkout](/bookings/checkout)
- [Self-service changes](./self-service-changes)
- [Accounting sync](./accounting-sync)
