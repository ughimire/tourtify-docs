---
title: Data model & money
description: How Tourtify represents IDs, money, currencies, time zones, booking statuses and channels in webhooks and exports.
---

# Data model & money

Tourtify follows a few strict rules so the numbers in your accounting tool always match the numbers in the console.

## Identifiers

- Every record has an `id`: a UUID version 7. They sort by creation time, which makes them friendly to databases and logs.
- Bookings also have a human **reference** such as `HT-24816`, printed on emails, tickets and PDFs. References are unique per business; IDs are unique everywhere.

## Money

Money is never a floating-point number. It is an integer amount in the currency's **minor unit** plus an ISO 4217 code:

```json
{ "amount_minor": 129900, "currency": "NPR" }
```

| Currency | Minor unit | `amount_minor: 29800` means |
|---|---|---|
| USD, EUR, GBP, AUD, INR, NPR | 1/100 | 298.00 |
| JPY, KRW | 1 | 29,800 |

Prices shown to travellers are **all-in**: taxes and mandatory fees are included in advertised prices, as consumer law in many places (for example California SB 478) requires.

## Time

- Timestamps are ISO 8601 with an offset, for example `2026-10-12T09:20:00+00:00`.
- Departures happen in the **tour's time zone** (an IANA name such as `Asia/Kathmandu`). Emails and the console always show local departure time with the zone labelled.
- Dates without a time, such as an enquiry's preferred date, use `YYYY-MM-DD`.

## Booking statuses

| Status | Meaning |
|---|---|
| `pending_payment` | Created; seats are held while the traveller pays |
| `deposit_paid` | A deposit is paid; the balance is still due |
| `confirmed` | Confirmed and paid, or confirmed by your team |
| `completed` | The trip has taken place |
| `cancelled` | Cancelled by the operator or traveller; seats released |
| `expired` | The checkout wasn't paid in time; seats released |

Use `booking.fully_paid` events (or the balance shown in the console) to know when nothing more is owed.

## Channels

`channel` tells you where a booking came from:

| Channel | Source |
|---|---|
| `direct` | Your own website |
| `console` | Entered by your team in the console |

More channel values are reserved for distribution partners and AI booking agents as those integrations launch; treat unknown values as "other".

## Isolation and retention

Each business's data is isolated in the database with row-level security as well as application checks. Deleting a plugin's switch never deletes its data, and a paused subscription keeps everything. See [Security & privacy](/help/security).
