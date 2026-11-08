---
title: Self-service changes
description: Let travellers move their booking to another date, or cancel it, from their booking page, within the rules you set.
---

# Self-service changes <Badge type="tip" text="Growth+" />

Self-service changes let travellers move their booking to another date, or cancel it, from their booking page, within the rules you set. Seats move instantly and your team is told. It saves your team the emails and phone calls for routine changes.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Operations
- **Where:** Plugins › Self-service changes
:::

## How it works

**What the traveller sees**

Travellers open their booking page from the link in their confirmation email, or from **My bookings** on your website (they sign in with the email they booked with). While a change is allowed, the page shows **Change or cancel**:

- **Change date**: they see **Available dates** of the same tour option with enough seats (times in their own time zone), choose one and select **Move my booking**. Their seats move straight away. The page says until when they can change ("You can change the date until {date}").
- **Cancel booking**: they see what they've paid and what they'll get back, give an optional **Reason**, tick "I understand this cancels my booking and can't be undone" and confirm. The page says until when they can cancel.

If no other date has enough seats, they're asked to contact you. Outside your rules, the options don't appear and travellers contact you instead.

**What your team sees**

The booking is moved or cancelled, its history notes it was done online by the traveller (with their reason), and your team is told.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Self-service changes** and flip its switch on.
3. Select **Configure** to set what travellers may change and until when, then **Save**.

## Settings

**Date changes**

| Setting | What it does | Default |
|---|---|---|
| Travellers can change their date | Shows **Change date** on the booking page. | On |
| Up to (days before departure) | The last day a traveller can change the date themselves. | 3 |
| When the new date costs more | Matters with Dynamic pricing or seasonal rates: without it, a traveller could book a cheap date and move to a peak one. **Keep the price they paid**, **They pay the difference (cheaper dates keep the price paid)**, or **Only offer dates at the same price or lower**. | Keep the price they paid |

**Cancellations**

| Setting | What it does | Default |
|---|---|---|
| Travellers can cancel | Shows **Cancel booking** on the booking page. | Off |
| Up to (days before departure) | The last day a traveller can cancel themselves. | 14 |
| What they get back | **A refund of what can be refunded (non-refundable deposits and fees are kept)**, **A gift voucher for everything paid (needs Gift vouchers)**, or **Nothing back (cancellation only frees the seats)**. | A refund |

What the traveller is told matches your choice: "What you've paid is refunded to the card or account you paid with", "What you've paid comes back as a gift voucher you can use for another booking", or "No money is refunded when you cancel".

## Good to know

- With **They pay the difference**, dates that cost more show the difference, which the traveller pays from their booking page after moving.
- A date change moves the booking to another date of the same tour option. To change the tour, travellers contact you.
- The gift voucher outcome needs the [Gift vouchers](./gift-vouchers) plugin on.
- Turning the plugin off: travellers can no longer change or cancel from their booking page; they contact you instead. Your rules are kept.

## Related

- [Refunds and cancellations](/bookings/refunds-and-cancellations)
- [Gift vouchers](./gift-vouchers)
- [Dynamic pricing](./dynamic-pricing)
- [Bookings](/bookings/bookings)
