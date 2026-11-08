---
title: Pay by bank transfer
description: Let travellers book now and pay by bank transfer, then match the money to bookings by importing your bank statement.
---

# Pay by bank transfer <Badge type="info" text="All plans" />

Pay by bank transfer lets travellers book now and pay into your bank account. They get your bank details and their reference by email, the seats are kept for a few days, and the booking confirms when you record the money. Bank reconciliation then matches the transfers on your bank statement to bookings, so you don't record them one by one.

It suits businesses whose travellers prefer transfers, and businesses that don't take card payments at all.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payments
- **Where:** Plugins › Pay by bank transfer, and Finance › Payments › Bank reconciliation
:::

## How it works

**What the traveller sees**

- At checkout, the booking form asks **How would you like to pay?** with **Pay online now** and **Pay by bank transfer** (or the name you set). If you have no online payment account, bank transfer is the way to pay.
- They're told: "We hold your seats for {period} and confirm the booking when your transfer arrives. Bank details are shown next and emailed to you."
- After booking, they see your bank details and their booking reference, and get the same by email.
- About a day before the seats are released, they get one reminder.

Bank transfer is offered only when the trip is far enough away for a transfer to arrive (7 days by default). Closer to the date, only online payment is offered.

**What your team sees**

The booking waits for payment with its seats held. When the money arrives, record it on the booking, or import your bank statement and match it. If a traveller needs longer, choose **Give more time** on the booking: the deadline and the seat hold move together, never past a day before departure, and you can email the traveller the new date.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Pay by bank transfer** and flip its switch on.
3. Select **Configure**, enter your bank details, choose how long to keep the seats, then **Save**.

## Settings

**Checkout**

| Setting | What it does | Default |
|---|---|---|
| Name at checkout | What the option is called on your website. | Bank transfer |
| Keep the seats for | How long seats wait for the transfer: 1, 2, 3, 5, 7 or 14 days. | 3 days |
| Offer it only when the trip is at least (days away) | Closer to the date there isn't time for a transfer to arrive, so only card payment is offered. | 7 |

**Bank details**

| Setting | What it does |
|---|---|
| Account holder | Shown to travellers with the bank details. |
| Bank | |
| Account number or IBAN | |
| SWIFT / BIC | |
| Branch or sort code | |
| Extra instructions | Shown with the bank details, e.g. "International transfers: choose OUR so we receive the full amount." |

**Reconciliation**

| Setting | What it does | Default |
|---|---|---|
| Confirm certain matches automatically | When an imported statement line has a booking's reference and exactly the amount owed (and no other booking fits), record the payment straight away. Everything else waits for you to check. You can undo any match. | On |

## Bank reconciliation

Go to **Finance › Payments › Bank reconciliation**.

**Import a statement**

1. Choose **Import statement**.
2. Under **Statement file**, choose a CSV export or a CAMT.053 (XML) statement from your online banking, up to 5 MB. Only money in is imported.
3. For a CSV, choose the date column and the amount column, and say how the file is written: **The amount column holds** (**Money in only**, or **Money in and out (out is negative)**), the **Decimal separator** and how **Dates are written**. Optional columns help matching: **Payer name**, **Payment text** and **Payment reference**. Tourtify remembers your columns, so the next export from the same bank is set up for you.
4. Choose **Import and match**. Tourtify skips lines already imported and money going out, and tells you how many were new.

**Review the matches**

Each statement line gets suggestions, scored by what fits:

- the booking reference in the payment text (strongest),
- the amount equals what's owed, or what was due at booking,
- the payer's name is the customer's (weakest).

Suggestions are labelled **Certain**, **Likely** or **Possible**. A certain match (reference and exact amount, for one booking only) is confirmed automatically if that setting is on.

The tabs are **To review**, **Unmatched**, **Matched**, **Ignored** and **All**. For each line you can:

- **Confirm match** on a suggestion, or **Find the booking** by reference, name or email and **Match to a booking**.
- Change the **Amount to record** when a transfer pays part of a booking. If the transfer is more than the booking owes, **Match the rest** to another booking, or refund it.
- **Ignore** a line that isn't a booking payment, and **Bring back** an ignored one.
- **Undo match** if you got it wrong.

Matching records the payment exactly as **Record payment** on the booking does: the booking confirms, the confirmation email goes out, and invoices and accounting sync follow. Undoing never deletes anything: it adds a reversal so your books stay explainable, and the booking keeps its status.

When every line is matched or ignored, the page shows **All caught up**.

## Good to know

- A transfer in a different currency from the booking is flagged so you can check it before matching.
- Turning the plugin off: bank transfer leaves checkout and reminders for unpaid transfers stop. Bookings waiting for a transfer and your bank details are kept.
- **Bank reconciliation** is in the menu for people who can collect payments, while the plugin is on.

## Related

- [Payment providers](./payment-providers)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
- [Deposits](./deposits)
- [Invoices and tax receipts](./invoices)
