---
title: Reports
description: Track money collected, bookings, checkout conversion, lead time, cancellations and balances in Tourtify reports, and export them as CSV.
---

# Reports

Reports show how your business is doing: money collected, bookings, conversion and what's still owed, compared with the period before. Use them to spot your best tours and channels, and export everything to CSV for your accountant.

::: info Where to find it
Console › Finance › Reports
:::

## Choose a period

Pick **7 days**, **30 days**, **90 days**, **This month**, **Last month**, **This year**, **Next 30 days** or **Custom** (enter **From** and to dates and choose **Apply**). Every figure is compared with the period before of the same length. Amounts are in your main currency.

### Booking date or trip date

**Count bookings by** switches the whole report:

- **Booking date**: bookings made in the period (what was sold).
- **Trip date**: bookings whose trip runs in the period (accrual: revenue is earned when the trip happens). Use it with **Next 30 days** to see what's coming up, or with **Last month** for your accountant.

Money collected always follows the payment date.

## Revenue: booked, earned and collected

| Figure | What it measures |
|---|---|
| Booked | Sales made in the period, whatever the trip date |
| Earned | Trips that ran in the period (accrual), whenever they were booked or paid |
| Collected | Money received in the period, net of refunds (cash) |
| Received in advance | Money received by the end of the period for trips after it (a liability until the trip runs) |

Below them, the last twelve months side by side: booked, earned and collected per month.

## Key figures

| Figure | What it measures |
|---|---|
| Money collected | Payments received in the period, net of refunds |
| Bookings | Bookings made in the period |
| Travellers | Travellers on bookings made |
| Average booking | Average booking value, and the total booked |
| Checkout conversion | Online checkouts that were paid |
| Booked ahead (median) | Typical time from booking to departure |
| Cancellations | Cancelled bookings in the period |
| Balances to collect | Money still owed, across all dates |

A chart shows **Money collected per day** or **Bookings per day**, with the period before for comparison, and your best day.

## Breakdowns

| Table | Shows |
|---|---|
| By tour | Bookings, travellers and revenue per tour |
| By channel | Your website, added by staff, and other channels |
| By payment status | Paid in full, deposit or part paid, not paid yet, with what's still due |
| Add-ons sold | Quantity, collected and refunded per add-on (with the [Add-ons & extras](/plugins/add-ons-and-extras) plugin) |

Bookings in other currencies are listed separately ("Also booked in other currencies"), never converted.

## Export

Choose **Export**:

- **Report (PDF)**: the headline numbers, revenue three ways, revenue by month, and the breakdowns, to read, print or forward.
- **Bookings, one per row** (CSV): every booking in the period (by booking or trip date, as chosen): Reference, Booked at, Status, Channel, Customer, Email, Phone, Travellers, Departure, Currency, Total, Paid, Balance due, Promo code.
- **Headline numbers**, **Revenue by month**, **By tour**, **By channel** (CSV).

## Scheduled emails

Send the report automatically, to yourself, your team or your accountant (they don't need a Tourtify login).

1. At the bottom of **Reports**, choose **Schedule a report**.
2. Choose how often: **every day** (covers the day before), **every week** on a chosen day (covers the last 7 days) or **every month** on the 1st (covers the month before), and the hour, in your business's time zone.
3. Choose whether bookings count by booking date or trip date, what's in it, and the attachments: **PDF report** and/or **spreadsheets (CSV)**. The headline numbers are always in the email itself.
4. Add up to 10 email addresses.

Each schedule can be edited, paused, resumed, deleted, or sent right away (**Send now**, for the period that has just finished). If a send fails, the schedule shows **Last send failed**; it is retried automatically.

For an export of a filtered list (for example one tour, or upcoming trips only), use **Export** on the [Bookings](/bookings/bookings) list.

::: tip Dashboard
For a day-to-day view, the **Dashboard** shows what needs attention: overdue balances, payments to check, new enquiries, reviews to approve and upcoming departures.
:::

## Who can see reports

Anyone who can view bookings: owners, admins, sales agents and guides, plus access groups that include bookings.

## Related

- [Bookings](/bookings/bookings)
- [Payments](/bookings/payments)
- [Abandoned checkout plugin](/plugins/abandoned-checkout)
- [Google Analytics plugin](/plugins/google-analytics)
