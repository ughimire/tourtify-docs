---
title: Suppliers & contracts
description: Keep every hotel, driver, guide, park and restaurant you buy from in one place, with contracts and seasonal rates, allotments, supplier bookings and bills.
---

# Suppliers & contracts <Badge type="tip" text="Growth+" />

Suppliers & contracts is where you manage everyone you buy from: hotels and lodges, transport, guides, activities, restaurants, parks and permit offices. Their contracted rates fill in your quotes, your itineraries and your departure costs; each departure shows what to book with each supplier; and their bills are tracked until they are paid and synced to your accounting.

::: info At a glance
- **Plan:** Growth and Scale (allotments are on Scale)
- **Category:** Operations
- **Where:** Operations › Suppliers (Suppliers, Supplier bookings, Allotments) and Finance › Payments › Supplier bills
:::

## What's included

| Part | Plan | What it does |
|---|---|---|
| Supplier directory | Growth | Contacts, licences and insurance with expiry reminders, payment terms, tax ids, bank details (stored encrypted), ratings and notes |
| Contracts & rate seasons | Growth | Rates per season, weekday, person, room, vehicle or group, with child, infant and single rules, minimum nights and commission |
| Supplier bookings | Growth | What each departure needs from each supplier, sent as a request, confirmed, amended or cancelled, in the supplier's language |
| Bills & payables | Growth | Supplier invoices against departures, due dates, part payments, pay runs with a bank file, ageing and accounting sync |
| Allotments & release dates | Scale | Rooms and seats held per date, released automatically on the release date, stop-sell |

## Turn it on

1. Go to **Console › Plugins** and switch on **Suppliers & contracts**. (If you used Quotes & proposals before, it is already on and your suppliers are there.)
2. Select **Configure** to set your default payment terms, how early you want licence and release reminders, the email suppliers reply to, and (for SEPA pay runs) the account you pay from.
3. Open **Operations › Suppliers** and select **Add supplier**.

## Settings

| Section | Setting | What it does |
|---|---|---|
| Suppliers | Pay suppliers within (days of the bill) | The due date of a new bill, unless the supplier has its own terms. |
| Suppliers | Warn before a licence or document expires (days) | Owners and admins get one email, and the supplier is flagged in the list. |
| Supplier bookings | Supplier replies go to | Your operations inbox. Leave blank to use the business email. |
| Supplier bookings | Note on every supplier request | E.g. “Please confirm within 48 hours and quote our reference on your invoice.” |
| Supplier bookings | Request services this many days before the departure | Departures closer than this with services not yet requested are flagged on the departure and in Today. |
| Allotments | Release unused allotment automatically | On the release date, rooms or seats you haven’t used go back to the supplier and can no longer be booked. |
| Allotments | Warn before a release date (days) | Owners and admins get one email listing what will be released and how much of it is used. |
| Bills & payables | Remind me of bills due within (days) | Shown on Finance › Payments › Supplier bills and in the notifications. |
| Bills & payables | Pay runs: account holder, Pay runs: IBAN you pay from, Pay runs: BIC | For the SEPA payment file your bank imports (pain.001). Leave the three bank fields blank to export CSV only. |

## Add a supplier

On the supplier's page:

- **Details:** legal name, country, the language they read (booking requests and PDFs are written in it), currency, tax id, payment terms and your rating.
- **Contacts:** mark who gets booking requests and who gets remittances.
- **Licences & documents:** upload the operating licence, insurance or signed contract with its expiry date. Owners and admins get an email before one expires, and the supplier is flagged in the list.
- **Services & contracts:** what you buy (for example "Twin room" or "Airport transfer by van") with a standard rate, then a contract with seasons and rates. Use **Copy to next year** to roll a contract forward with a price change, and the PDF button for the rate sheet.
- **Bank details:** only people who can manage supplier payments see or change them.

## Rates in quotes, itineraries and costs

- In a quote, **Add from a supplier** prices the service from the contract for that day and the travellers, in the quote's currency.
- In the trip builder, set **Bought from** on an item (for example the hotel on day 3). Departures then know what to book.
- In Costs & profit, link a default cost to a service: each departure uses the contract rate for its date.

## Book suppliers for a departure

Open a departure: the **Suppliers** panel lists what the itinerary needs from each supplier for the travellers booked. Select **Create supplier bookings**, check each one and **Send request**. The supplier gets an email with a PDF and a link to confirm (with their confirmation number) or decline. If travellers change after a supplier confirmed, the booking is marked **Changed since sent**: check the services and **Send amendment**. Accepted quotes create draft supplier bookings automatically.

## Allotments

Under **Allotments**, enter the rooms or seats a supplier holds for you, with the release days from the contract. The calendar shows what is used by your supplier bookings. On the release date the unused part goes back to the supplier; you get an email a few days before. Use **Stop-sell** to close dates.

## Bills and pay runs

Record each supplier invoice under **Finance › Payments › Supplier bills** (or **Record the bill** from a supplier booking), with its lines against departures. The value in your currency uses the exchange rate on the bill date; payments keep their own rate, so you see the exchange gain or loss. Tick open bills and choose **Pay run** to pay several at once: download the CSV or, for euro, the SEPA file for your bank, then **Mark paid**. **Ageing** shows what is owed by how late it is.

When Xero, QuickBooks, Zoho Books, Sage or MYOB is connected, bills and payments are sent as supplier bills: choose the **Supplier bills** account in the mapping. DATEV and Tally files include them too.
