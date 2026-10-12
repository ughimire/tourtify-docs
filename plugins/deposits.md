---
title: Deposits & balance payments
description: Take a deposit at booking and collect the balance later with automatic card charges, reminders, retries and personal payment links.
---

# Deposits & balance payments <Badge type="info" text="All plans" />

Deposits let travellers reserve a place with part of the price and pay the rest before the trip. Longer and more expensive trips sell better when travellers don't have to pay everything up front. Tourtify then collects the balance for you: by charging a saved card on the due date, or by emailing a secure payment link.

::: info At a glance
- **Plan:** All plans
- **Category:** Payments
- **Where:** Console › Plugins › Deposits & balance payments, and Bookings › Balances
- **Used by:** [Instalment plans](./instalments)
:::

## How it works

**At checkout**, for tour options with a deposit, the traveller chooses between:

- **Pay a deposit now**, and pay the rest later.
- **Pay in full**, optionally with a discount for paying everything now.

The checkout tells them whether the deposit is refundable. If automatic charges are on and your payment account supports saved cards, they can agree to keep their card on file for the balance.

**After booking**, the booking shows as deposit paid with a balance due. On the due date Tourtify either charges the saved card, or emails the traveller a reminder with a secure pay link. Bookings made close to departure skip the deposit and pay in full.

**Your team** sees every open balance on **Bookings › Balances**: what's due next, the card on file, and any charges that need a follow-up.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Deposits & balance payments** and flip its switch on.
3. Select **Configure** to set your deposit rules and how balances are collected, then **Save**.
4. Set a deposit on each tour option. In the tour editor, open **Pricing & options**, then choose a **Deposit** type and **Balance due (days before)**.

Deposit types per tour option:

- **Pay in full** (no deposit)
- **Percentage deposit**, e.g. 20% of the price
- **Fixed deposit per traveller**

## Settings

**Deposit rules**

| Setting | What it does | Default |
|---|---|---|
| Pay in full when booking within (days of departure) | Late bookings skip the deposit and pay everything at checkout. 0 = only when the tour's balance date has already passed. | 0 |
| Deposits are | **Refundable** or **Non-refundable**. Shown to travellers with the deposit and on their booking. | Refundable |
| Discount for paying in full (%) | Rewards travellers who skip the deposit and pay everything now. 0–50. 0 = no discount. | 0 |

**Automatic collection**

| Setting | What it does | Default |
|---|---|---|
| Charge the balance automatically | Travellers paying a deposit can agree to keep their card on file. The balance (or each instalment) is then charged on its due date. Needs a payment account that supports saved cards (Stripe). | Off |
| Heads-up email before each charge (days) | Tells the traveller how much will be charged to which card, and when. 0–14. 0 = no heads-up. | 3 |
| If a charge fails | Retry after 1, 3 and 5 days; after 1 and 2 days; after 2, 4 and 7 days; or don't retry and send the pay link straight away. | Retry after 1, 3 and 5 days |

**Overdue balances**

| Setting | What it does | Default |
|---|---|---|
| Grace period after the due date (days) | How long an unpaid balance or instalment may stay overdue before the action below. 0–60. | 7 |
| When the grace period ends | **Flag the booking and alert my team**, or **Cancel the booking and release the seats**. | Flag the booking and alert my team |

The drawer also shows whether your payment accounts support saved cards, how many cards are on file for open balances, and how many bookings had a failed charge in the last 30 days.

## Manage balances

Open **Bookings › Balances** to see every booking with money still to come.

- **Upcoming** lists balances by due date. **Due soon** covers the next 14 days.
- **Needs attention** shows overdue balances and failed charges.
- **Charge log** lists every automatic charge and retry, with the result.

From a balance you can:

- **Charge card now** to charge the saved card straight away.
- **Email payment link** to send the traveller a secure link to pay, or to use another card.
- **Open booking** to see the full booking.

## Failed charges

Each failure emails the traveller a secure link to pay or use another card. Tourtify then retries on the schedule you chose. Cards that need the bank's confirmation (for example 3-D Secure) are never retried: the traveller must confirm the payment through the link.

::: warning Cancelling overdue bookings
If you choose **Cancel the booking and release the seats**, the traveller is emailed when the booking is cancelled. Money already paid is **not** refunded automatically. Decide on refunds yourself from the booking.
:::

## Good to know

- Automatic charges need Stripe. With other gateways, reminders with pay links still work.
- Turning the plugin off means new bookings pay in full and saved cards stop being charged automatically. Existing balances stay as they are.
- You can't turn Deposits off while [Instalment plans](./instalments) is on. Turn Instalments off first.

::: tip Non-refundable deposits
When you refund a cancelled booking, Tourtify suggests keeping a non-refundable deposit.
:::

## Related

- [Instalment plans](./instalments)
- [Booking & traveller fees](./booking-fees)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
- [Tour pricing](/tours/pricing)
