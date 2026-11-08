---
title: Test a deposit booking from start to cancellation
description: Before you move real customers to Tourtify, book a tour with a deposit on your own website, pay the balance, cancel and refund it, all with test payments.
---

# Test a deposit booking from start to cancellation

Run this once before you move real customers over. It takes about 15 minutes and uses test payments, so no real money
moves. You will see exactly what your travellers see, and what your team does when a booking is cancelled.

**Do it before you go live.** A test booking is a normal booking: it counts in your reports and, with invoicing on,
gets an invoice number and a credit note. That's fine on an account with no real customers yet; once you are live, use a real low-price
booking instead.

## 1. Connect payments in test mode

1. Open **Settings › Payments & tax › Payments** and connect Stripe (or your provider) with its **test keys**
   (Stripe's start with `sk_test_` / `rk_test_`). PayPal and Square have sandbox accounts for the same purpose.
2. Stripe's payment page now shows a *Test mode* badge. Its test card `4242 4242 4242 4242`, with any future date and
   any CVC, always succeeds.

## 2. Turn on deposits

1. Open **Plugins › Deposits & instalments** and switch it on.
2. Under **Deposit rules**, choose whether **Deposits are** *Refundable* or *Non-refundable*. A non-refundable deposit
   is shown to travellers at checkout and on their booking, and the refund step later suggests keeping it.
3. Optional: under **Automatic collection**, switch on **Charge the balance automatically** so travellers can keep
   their card on file and the balance is charged on its due date (needs Stripe).

## 3. Set up a test tour

1. Create a tour called, for example, "QA test deposit tour" and publish it.
2. Under **Pricing & options**, set a **Deposit** on the option: a percentage or a fixed amount per traveller, and the
   **Balance due (days before)**.
3. On the tour's **Policies** tab, under **Cancellation policy**, choose **Free cancellation up to a time before the start**
   and set **Free until (hours before the start)**, for example 48. You can keep shared policies in **Tours › Library**.
4. Add a departure at least a few days after the balance due date, so the test booking takes the deposit route.

## 4. Book it as a traveller

1. Open your website in a private browser window, choose the test tour and book it with your own email address.
2. At checkout choose to pay the deposit and pay with the test card.
3. Check your inbox: the confirmation shows the deposit paid, the balance and its due date, and a link to the booking.

In the console, **Bookings** now shows the booking as confirmed with a balance to collect.

## 5. Collect the balance

Use one of these:

- **Traveller pays:** open the booking link from the confirmation email and pay the balance with the test card.
- **Automatic charge:** with automatic collection on, the saved card is charged on the due date. Travellers get a
  heads-up first, and a secure link to pay another way if the charge fails.
- **You record it:** on the booking, send a payment link or record a payment you received offline.

The booking's payments section shows every payment, and the balance drops to zero.

## 6. Cancel and refund

1. On the booking open the **⋯** (More actions) menu and choose **Cancel booking…**, add a reason (it's kept in the booking history) and confirm. The seats go
   back on sale and the traveller gets the cancellation email.
2. The refund step opens next. It shows the tour policy (*within the free window* or *after the free window*) and
   starts from the right amount:
   - within the free window, everything except a non-refundable deposit;
   - after the free window, what the policy refunds;
   - a non-refundable deposit and non-refundable booking fees are suggested to keep, also when you refund in parts.

   You can change the amount, or choose **Use the policy amount**. With **Refund approvals** on, a refund above its limit
   waits for a second person to approve it; nobody approves their own.
3. Confirm. The refund goes back to the test card, the traveller gets a refund email, and the invoice gets a credit
   note if **Invoices & tax receipts** is on.

Try it once more with **Plugins › Self-service changes** switched on, cancelling from the traveller's booking page. The
outcome you choose there (refund, gift voucher or nothing back) is applied for you.

## 7. Check and clean up

- **Bookings:** the booking shows *Cancelled*, with the cancellation, payments and refund in its history.
- **Reports:** the cancellation and refund appear in the period you tested.
- **Clean up:** move the test tour to **Trash**. Tours with booking history are kept in the trash instead of being
  deleted, so your records stay complete.
- **Go live:** back in **Settings › Payments & tax › Payments**, switch to your **live keys**. The payment page stops
  showing its Test mode badge.

Something not working? See [Troubleshooting](./troubleshooting).
