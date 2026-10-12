---
title: Instalment plans
description: Let travellers pay the balance after their deposit in equal scheduled instalments, with reminders, pay links and automatic card charges.
---

# Instalment plans <Badge type="tip" text="Growth+" />

Instalment plans split the balance left after a deposit into equal scheduled payments. Travellers can commit to an expensive trip without paying one large balance, and you get paid on a predictable schedule. Reminders, pay links and automatic card charges are handled for you.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Payments
- **Where:** Console › Plugins › Instalment plans, and Bookings › Balances
- **Requires:** [Deposits & balance payments](./deposits)
:::

## How it works

**At checkout**, when the traveller chooses **Pay a deposit now**, the booking form tells them they can spread the rest over up to your maximum number of payments before they travel, with a secure link emailed before each one.

**After booking**, when a booking with a deposit paid is confirmed, Tourtify splits the balance into a payment schedule using your settings. Each instalment has its own due date and amount.

- With [automatic charges](./deposits#settings) on and a card on file, each instalment is charged on its due date. The traveller gets a heads-up email before each charge, and reminders only if a charge fails.
- Otherwise the traveller gets reminders with a secure pay link before and on each due date.

**Your team** sees each payment plan on **Bookings › Balances**, with the next payment and anything overdue.

## Turn it on

1. Make sure [Deposits & balance payments](./deposits) is on.
2. Go to **Console › Plugins**.
3. Find **Instalment plans** and flip its switch on.
4. Select **Configure** to set the schedule and reminders, then **Save**.

If Deposits is off, you see "Enable Deposits & balance payments first."

## Settings

**Schedule**

| Setting | What it does | Default |
|---|---|---|
| Number of instalments, at most | The balance after the deposit is split into this many equal payments. Fewer are used when the trip is close. 2–12. | 3 |
| Payment dates | **Spread evenly from the booking date to the final due date**, or **Counted back from the final due date, one every gap below**. Counting back gives everyone on a trip the same dates. | Spread evenly |
| Days between payments | Spread evenly: payments are never closer together than this. Counted back: the exact gap. 7–90. | 21 |
| Final payment due (days before departure) | 0 = each tour's own balance due date. A number can only bring the final date earlier, never later. | 0 |
| Late bookers catch up on missed payments | When dates are counted back and some have already passed, they're combined into a first payment due right away. Off: the balance is spread over the remaining dates. | On |

**Reminders**

| Setting | What it does | Default |
|---|---|---|
| Remind the traveller | Any of: 7 days before, 3 days before, on the due date, 2 days after (overdue). Each reminder has a secure pay link. | All four |
| Alert my team when a payment is late by (days) | Emails owners and admins once per instalment. 0 = no alert. 0–60. | 3 |

What happens after the grace period (flag or cancel) is set in [Deposits & balance payments](./deposits#settings).

## Example

A traveller books a 4,000 trek on 1 March with a 20% deposit (800). The tour's balance is due 30 days before the 1 September departure, so the final due date is 2 August. With the defaults (at most 3 instalments, spread evenly, at least 21 days apart), the remaining 3,200 is split into three equal payments between the booking date and 2 August.

## Good to know

- Schedules are created once, when the booking is confirmed with a deposit paid.
- Turning the plugin off means travellers can no longer get an instalment plan. Schedules already agreed are kept.
- Instalment reminders also go out on WhatsApp when [WhatsApp notifications](./whatsapp-notifications) has the balance reminder switched on.

::: tip Same dates for a group
If a whole group books the same departure at different times, choose **Counted back from the final due date**. Everyone then pays on the same dates, which makes follow-up easier.
:::

## Related

- [Deposits & balance payments](./deposits)
- [WhatsApp notifications](./whatsapp-notifications)
- [Webhooks](./webhooks)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
