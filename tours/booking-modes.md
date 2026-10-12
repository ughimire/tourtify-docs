---
title: Booking modes
description: Choose how travellers book each Tourtify tour option, with instant booking, request to book, enquiry only or an external booking link.
---

# Booking modes

Each tour option has a booking mode that decides what travellers can do on your website: book and pay straight away, request a booking for you to confirm, or only send an enquiry. Use different modes for different options, for example instant booking for the shared group and request to book for private trips.

::: info Where to find it
Console › Tours › *tour* › **Pricing & options** › *option* › **How travellers book**
:::

## The modes

| Mode | What travellers see | Payment | Best for |
|---|---|---|---|
| **Instant booking (pay online)** | Dates, live prices, "Continue to checkout" | Paid at checkout (in full or a deposit) | Scheduled group tours, day tours |
| **Request to book (you confirm)** | Dates and prices, "Request to book" | None until you confirm and send a payment link | Trips that need your check first: availability of guides, fitness, permits |
| **Enquiry only (no prices online)** | "Price on request", "Ask about this trip" form | None online | Private and tailor-made trips |
| **Book on another website (link)** | A button to your other booking page | Handled elsewhere | Tours sold through a partner. Needs the [External booking links](/plugins/external-booking-links) plugin. |

## Change the booking mode

1. Open the tour and go to **Pricing & options**.
2. In the option's settings, choose **How travellers book**.
3. For **Book on another website**, enter the **Booking page link (https)**.
4. Choose **Save option**.

## Instant booking

Travellers choose a date and travellers, see the full price and pay. The booking is confirmed by email straight away. You need a connected payment account, see [Payments](/bookings/payments).

::: warning No payment account
Until a payment provider is connected, travellers can't pay online. They can still send enquiries, and you can add bookings by hand.
:::

## Request to book

1. The traveller picks a date and travellers and sends the request. Nothing is charged ("No payment until the operator confirms").
2. The request arrives in **Enquiries** as a booking request.
3. Open it and choose **Confirm as booking**. Tourtify opens a new booking pre-filled with the request.
4. Create the booking and email a payment link from the booking.

The enquiry is marked as **Won** automatically. See [Enquiries](/bookings/enquiries).

## Enquiry only

Prices are hidden. Travellers send their dates, group size and a message, and you reply with a tailored quote. Enquiries land in **Enquiries**; you can turn one into a booking with [Manual bookings](/bookings/manual-bookings).

## Deposits

With the [Deposits](/plugins/deposits) plugin on, each option also has a **Deposit** setting: **Pay in full**, **Percentage deposit** or **Fixed deposit per traveller**, and **Balance due (days before)** departure.

## Related

- [Pricing](/tours/pricing)
- [Enquiries](/bookings/enquiries)
- [Checkout](/bookings/checkout)
- [Payments](/bookings/payments)
- [Deposits plugin](/plugins/deposits)
