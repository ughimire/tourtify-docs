---
title: Refunds and cancellations
description: Cancel a Tourtify booking to free its seats, then refund all or part of the payment to the traveller's original payment method.
---

# Refunds and cancellations

Cancelling and refunding are two separate steps in Tourtify, because cancellation policies differ. Cancelling frees the seats and tells the traveller; refunding sends money back. You decide how much, if anything, to refund.

::: info Where to find it
Console › Bookings › *booking* › **More actions** › **Cancel booking…** / **Refund…**
:::

## Cancel a booking

1. Open the booking and choose **More actions › Cancel booking…**.
2. Confirm with **Cancel booking**.

What happens:

- The status becomes **Cancelled**.
- The seats go back on sale straight away.
- The traveller receives the **Booking cancelled** email.
- No money is refunded automatically.

::: warning Cancelling is final
A cancelled booking can't be reopened. If the traveller wants another date, create a new booking.
:::

## Refund a booking

1. Open the booking and choose **More actions › Refund…**.
2. Enter the amount. You can refund up to what was paid, and the amount goes back to the original payment method.
3. Enter a **Reason (shown in history)**.
4. Choose **Send refund**.

The traveller receives the **Refund sent** email once the refund completes.

::: tip Non-refundable amounts
If your deposits are set as non-refundable, the deposit is kept by default in the suggested amount. Non-refundable booking fees are also left out. You can still change the amount.
:::

## How refunds are processed

- A refund is spread over the booking's payments, newest first, never more than each payment can give back.
- Online payments are refunded through the provider (Stripe, PayPal, Razorpay, Khalti).
- The booking's activity shows **Refund sent to the payment provider**, then **Refund completed**.

## Refund statuses

| Activity entry | Meaning |
|---|---|
| Refund sent to the payment provider | Waiting for the provider to confirm |
| Refund completed | The money is on its way to the traveller |
| Refund failed | The provider refused it. The dashboard shows "refund failed: finish it". |

If a refund fails, or you refunded the traveller directly in your provider's dashboard, use **I refunded it in the provider's dashboard: record it** on the refund request so your records match.

## Cancel and refund together

1. Cancel the booking (frees the seats, emails the traveller).
2. Refund the amount your policy allows.

## Write your cancellation policy

Tourtify doesn't enforce a cancellation policy for you. Explain it in the tour's **Good to know** section and on a policies page, so travellers know the rules before booking.

## Related

- [Payments](/bookings/payments)
- [Bookings](/bookings/bookings)
- [Emails](/bookings/emails)
- [Deposits plugin](/plugins/deposits)
