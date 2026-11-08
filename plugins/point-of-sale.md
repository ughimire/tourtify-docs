---
title: Point of sale
description: Sell today's departures and merchandise to walk-ins on a touch-screen till, with split payments, cash drawers, Z-reports, receipts and offline sales.
---

# Point of sale <Badge type="tip" text="Growth+" />

Point of sale is a till for walk-in customers at the front desk, a kiosk or on the street. Today's departures and your merchandise sit on one touch screen. Take split payments (cash with change, card reader, wallets, gift vouchers), run cash drawers with Z-reports, print or email receipts with the QR ticket, and keep selling when the connection drops.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Sales
- **Where:** Plugins › Point of sale, and Sales › Point of sale › Open the till, Till sales, Cash drawers, Till reports and Registers & items
:::

## How it works

- A **register** is one till: the front desk, a kiosk counter or a guide selling on the street with a phone.
- The cashier opens the till, taps a departure or an item to start a sale, adds the customer (optional), takes payment and prints or emails the receipt.
- A departure sold at the till becomes a normal booking, with the QR ticket on the receipt. With an email, the customer gets the receipt and tickets; without one, it's a walk-in.
- Cash goes into an open cash drawer, which is counted and closed at the end of the shift with a Z-report.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Point of sale** and flip its switch on.
3. Select **Configure** to choose how people pay and how drawers work, then **Save**.
4. Open **Sales › Point of sale › Registers & items** and select **Add register**. Add the items you sell with **Add item**.
5. To use a card reader, connect Stripe in **Settings › Payments & tax › Payments**, then pair a reader to the register.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Ways to pay at the till | **Cash**, **Card reader (Stripe Terminal)**, **Card machine (recorded)**, **eSewa (recorded)**, **Khalti (recorded)**, **Fonepay QR (recorded)**, **Bank transfer (recorded)**, **Gift voucher**, **Pass or punch card**. Recorded methods are confirmed by the cashier (your card machine or wallet app shows the payment). Card reader needs Stripe connected and a reader paired to the register. | Cash, card reader, card machine, gift voucher |
| Cash drawers | **One shared drawer per register**, or **Each cashier has their own drawer**. | One per register |
| Cash sales need an open drawer | Sales queued offline still sync when the drawer has been closed since; they are flagged for review. | On |
| Largest discount a cashier can give (%) | People who can manage the till (refunds and drawer variances) can give any discount. | 10 |
| Drawer variance you accept (whole currency units) | Closes counted further off than this are flagged in the drawer history. | 0 |
| Email the booking confirmation when the customer gives an email | Sends the normal booking confirmation as well as the receipt. | On |
| Receipt header | Printed under your business name, e.g. the address, phone and tax number. | Empty |
| Receipt footer | Printed at the bottom of each receipt. | Thank you! Show the QR code at check-in. |

## Registers & items

Open **Sales › Point of sale › Registers & items**.

- **Registers**: name and location (printed on the Z-report). **Pair a reader** connects a Stripe Terminal smart reader (BBPOS WisePOS E, Stripe Reader S700/S710); the money goes to your own Stripe account. In test mode, use a simulated reader with the registration code "simulated-wpe".
- **Items**: T-shirts, water bottles, rental gear, trip photos: anything sold over the counter, with or without a booking. Set the price, tax included (%), an optional SKU, and whether to **Track stock** (the till stops selling at zero), with a low-stock warning. **Adjust stock** records stock received or written off.

## Use the till

Select **Open the till**.

1. **Open the cash drawer**: count the cash in the drawer before the first sale. That is the float.
2. Under **What to sell**, choose **Departures** (today or another day) or **Items**, and tap to add them to the sale.
3. Add a **Discount** off the whole sale (up to your cashier limit) and, optionally, the customer's name, email and mobile.
4. Select **Take payment**. Split it across several ways to pay if needed; cash shows the change to give.
5. Print the receipt, or email or text it.

Use **Cash in** and **Cash out** for money that isn't a sale, such as a float top-up or a bank drop.

**Offline**

The till shows **Online** or **Offline**. Sales rung up while offline are priced on the device and queued under **Queued sales**; they're sent as soon as there is a connection and checked again when they sync. Promo codes and extras need a connection to price.

## Drawers, sales and reports

- **Cash drawers**: open drawers with the cash expected, an **X-report** at any time, and **Count and close**. Count each note and coin, or type the total. If the count is off, add a note saying why. Each closed drawer shows expected, counted and variance, with its **Z-report**.
- **Till sales**: every sale with its receipt, register, customer and who served. Open a sale to **Reprint**, **Email** or **Text** the receipt, **Refund items** (optionally putting them back in stock), or issue a tax invoice where your region needs one. Bookings on a sale are cancelled or refunded from the booking itself.
- **Till reports**: takings, average sale, refunds and discounts given, by day, by payment method, by staff, by register and top items, with drawer variances. **Export CSV** for your records. Retail sales also appear in Accounting and your Xero or QuickBooks sync.

## Good to know

- Tap to Pay on iPhone and Android isn't available in the web till. Card machines from your bank can still be used: record those payments as "Card machine".
- Reprinted receipts are marked REPRINT.
- Passes, rentals and memberships can be sold at the till with [Rentals, passes & memberships](./rentals-and-passes).
- Turning the plugin off: the till closes. Registers, items and past sales are kept.

## Related

- [Rentals, passes & memberships](./rentals-and-passes)
- [QR tickets & check-in](./qr-tickets)
- [Manual bookings](/bookings/manual-bookings)
- [Payments](/bookings/payments)
- [Reports](/bookings/reports)
