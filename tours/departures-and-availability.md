---
title: Departures and availability
description: Schedule tour departures in Tourtify, set seats and booking cut-off, block dates, stop sales and see how seat holds prevent overbooking.
---

# Departures and availability

A departure is one date and time of a tour option, with a fixed number of seats. Travellers can only book departures that are open and have seats left. Tourtify holds seats while a traveller pays, so you are never overbooked.

::: info Where to find it
Add dates: Console › Tours › *tour* › **Departures** tab
All departures across tours: Console › Bookings › Departures
:::

## Add departures

1. Open the tour and go to the **Departures** tab. You need at least one option first, see [Pricing](/tours/pricing).
2. Under the option, set:

| Field | Notes |
|---|---|
| From | The first date |
| To (optional) | The last date, to add a series |
| Weekdays | Pick the days of the week to include, e.g. Mon, Wed, Sat. Leave all off for every day. |
| Time | Start time, in the tour's time zone |
| Seats | How many travellers each departure can take |

3. Choose **Add departures**. The button shows how many dates will be created.

Example: From 1 Nov, To 31 Mar, weekdays Sat, time 07:00, seats 12 creates a Saturday departure every week of the season.

## Manage a departure

Each departure shows its start, seats booked and status (**Open** or **Closed**). From the **Departure actions** menu:

- **Passenger manifest**: who's travelling, see [Manifests and check-in](/bookings/manifests-and-check-in).
- **Download CSV**: the manifest as a spreadsheet.
- Change seats: edit the seat count. Other departures keep their own capacity.

On **Bookings › Departures**, the same menu offers **Open manifest**, **Change capacity**, **Stop sales** / **Reopen sales** and **Edit tour dates**.

::: tip Stop sales without cancelling
**Stop sales** closes a departure on your website. Existing bookings stay; nobody new can book it. Use **Reopen sales** to open it again.
:::

## The Departures overview

**Bookings › Departures** shows every departure across all tours, in a **List** or a monthly **Calendar** layout.

- **Next 7 days**: travellers booked and average load.
- **Full or nearly full**: upcoming departures 80% or more booked.
- Views: **Upcoming** and **Past 60 days**; filter by tour, or show **Only departures with bookings**.

## Block dates

Use blocked dates for holidays, closures or when a guide is unavailable.

1. On the tour's **Departures** tab, find **Blocked dates**.
2. Enter **From**, **To** and a **Reason (only you see this)**.
3. Choose **Block dates**.

Departures on blocked dates show **Closed** and stop selling. Existing bookings are never touched. Remove the block to reopen them.

## Booking cut-off

Stop online bookings shortly before departure, so you have time to prepare.

1. Go to the tour's **Policies** tab, **Booking window**.
2. Set **Online booking closes**: Until departure, 1 hour, 3 hours, 12 hours, 1 day, 2 days, 1 week or 2 weeks before.
3. Save.

The cut-off applies to online bookings on your website. To add a late booking taken by phone, see [Manual bookings](/bookings/manual-bookings).

## How seat holds prevent overbooking

1. When a traveller continues to checkout, their seats are **held** for **30 minutes**.
2. Held seats count as taken: nobody else can book them.
3. If payment succeeds, the hold becomes a confirmed booking.
4. If the traveller doesn't pay in time, the hold expires and the seats go back on sale.

Seat counts are checked inside the database at the moment of booking, so two travellers can never buy the last seat at the same time. If a payment arrives after the seats were already gone, the booking is flagged as "Payment arrived after the seats were gone: refund needed" in the booking's activity.

::: tip Sold out?
When a departure is full, travellers can send a sold-out date request to [Enquiries](/bookings/enquiries). With the [Waitlist](/plugins/waitlist) plugin <Badge type="tip" text="Growth+" />, they can join a waitlist instead and are emailed when seats free up.
:::

## Related

- [Create a tour](/tours/create-a-tour)
- [Pricing](/tours/pricing)
- [Checkout](/bookings/checkout)
- [Manifests and check-in](/bookings/manifests-and-check-in)
- [Waitlist plugin](/plugins/waitlist)
