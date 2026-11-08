---
title: Move from another booking system
description: Import your customer list and past and upcoming bookings from FareHarbor, Rezdy, Bókun, Peek, Checkfront or any spreadsheet, with a dry run that checks every row first.
---

# Move from another booking system

Bring your customers and your booking history with you. Export a CSV from your old system, upload it, check the column matching, and Tourtify checks every row before anything is saved.

::: info Where to find it
Console › Settings › Integrations & developers › Import › **Customers & bookings** (also from **Customers › Import**)
:::

## Supported exports

| System | Recognised automatically |
|---|---|
| FareHarbor | Bookings and contacts reports |
| Rezdy | Bookings and customers reports |
| Bókun | Booking search and customer exports |
| Peek Pro | Bookings and customers reports |
| Checkfront | Booking and customer reports |
| Anything else | Any CSV (comma, semicolon or tab separated, UTF-8 or Excel): match the columns yourself |

Column names vary between accounts and versions. Tourtify matches what it recognises; you can change any column on the **Columns** step. Blank templates are on the upload page.

## The steps

1. **Upload.** Choose *Past and upcoming bookings* or *A customer list*, pick the system (or let Tourtify recognise it), and drop the file (up to 50 MB).
2. **Columns.** Check which column holds each field and how dates are written (day/month/year, month/day/year or year-month-day). Example values from your file are shown beside each field.
3. **Tours** (bookings only). Each tour or product name in the file goes onto one of your tours, onto a new **draft** tour, or is left out.
4. **Check.** A dry run reads every row: ready to import, already imported, left out (pending, abandoned or quoted bookings), and rows with problems, with the line number and what's wrong. Download the problems as a spreadsheet, fix them and import the file again later.
5. **Import.** Runs in the background (large files are imported in parts); you can leave the page.

## What happens to the data

| Imported | Becomes |
|---|---|
| A booking | A booking on the matching departure, with its own Tourtify reference; the old booking number shows on its timeline. Channel: **Imported** |
| Status | Cancelled stays cancelled; past trips are **completed**; upcoming trips are **confirmed**, or **deposit paid** when part-paid |
| Amounts paid / refunded | Ledger entries dated on the booking date (method "imported"), so balances and reports are right |
| The departure | The existing departure at that date and time, or a new **closed** departure (so it doesn't open for online sales); it grows to fit the travellers |
| A customer row | A customer with name, phone, country, tags, notes, birthday and marketing consent. Customers who haven't booked here yet still show in **Customers** |

- **No emails, texts or webhooks** are sent while importing. Past trips never get a trip reminder or review request; upcoming imported bookings get your normal trip reminders from now on.
- **Safe to repeat.** Each row is remembered by the old system's booking (or customer) ID: importing the same file, or a newer export, never duplicates a booking. For customers already here, only blank details are filled in and tags are added; what your team wrote is never overwritten.
- Accounting sync only sends records from its own start date, so last year's imported payments don't flood Xero or QuickBooks.
- The uploaded file is deleted once the import finishes.
