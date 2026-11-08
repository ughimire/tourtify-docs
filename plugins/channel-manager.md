---
title: Channel manager (OTAs)
description: Sell on GetYourGuide, Viator, Klook, Headout, Tiqets and other OTAs from one calendar. Availability goes out on every change, bookings come straight in, and seats never oversell.
---

# Channel manager (OTAs) <Badge type="tip" text="Growth+" />

The channel manager connects your Tourtify calendar to online travel agencies (OTAs). GetYourGuide and Viator connect through their own supplier APIs. Klook, Headout, Tiqets, Musement, Civitatis and other resellers connect through OCTO, the open standard for tours and activities.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Distribution
- **Where:** Console › Plugins › Channel manager (OTAs), and Growth › Sales channels › Channels
:::

## How it works

- Every sale on your website, every hold, cancellation, blocked date or capacity change is sent to your channels within a minute.
- A channel's booking takes seats the same way a website booking does, so the last seat can't be sold twice.
- Each booking shows which channel sold it, the channel's reference, what the traveller paid, the commission the channel keeps and what it owes you.
- **Channels › Sales by channel** compares bookings, commission and net per channel. You can export it as CSV.

## Connect a channel

1. In **Plugins**, switch on **Channel manager (OTAs)**.
2. Open **Growth › Sales channels › Channels** and choose **Connect a channel**.
3. Pick GetYourGuide, Viator or an OCTO reseller, and enter the commission (or net-rate margin) from your contract.
   - **Viator:** enter your Viator supplier ID.
   - **OCTO reseller:** copy the API key shown once and send it to the reseller with your OCTO endpoint.
4. Map your tours: open the channel, choose **Map** next to each tour option and match your traveller types to the channel's categories. Tourtify suggests a match.
5. Finish in the channel's own portal. The **Going live** list on the channel page shows what to do there (for GetYourGuide: choose Tourtify as your reservation system, enter your supplier ID, then pick the product ID shown next to each tour).

## Settings

| Section | Setting | What it does |
|---|---|---|
| Bookings | How long a channel can hold seats in its cart before confirming (minutes) | GetYourGuide always gets at least 15 minutes. |
| Bookings | Send your own emails to travellers booked by channels | Your confirmation, tickets and invoice. Marketplaces send their own voucher and receipt, and the traveller paid them; turn on only if you want yours to go too. |

The number of channels you can connect depends on your plan: 3 on Growth, 25 on Scale.

## Protect your inventory

Open **Terms & rules** on a channel:

- **Seats to hold back:** never offered to this channel (kept for your own website).
- **Most seats per departure:** an allotment for the channel.
- **Stop selling … hours before departure:** closes the channel earlier than the tour's own cut-off.
- **Send prices with availability** (GetYourGuide): your prices, including dynamic pricing, go out with availability.

**Pause** shows every departure as closed on that channel straight away. **Resume** sends the real numbers again.

## When something goes wrong

The **Problems** tab lists what needs you, in plain language:

- **Retrying:** the channel didn't answer. Tourtify sends the update again automatically with today's numbers. After several tries it stops and waits for you to press **Retry**.
- **Needs you:** for example, a channel charged a different price from yours, a booking was cancelled in Tourtify but is still booked on the channel, or GetYourGuide switched a product off. Fix the cause, then choose **Mark resolved**.

## Money and accounting

Revenue is the full price the traveller paid. The booking is marked paid by two records: what the channel owes you (net) and the commission it keeps. Commission counts as a cost in Costs & profit, and the Xero and QuickBooks sync asks you for an account for it. When a channel cancels or changes a booking, both records follow.

## Travellers' data

Travellers booked through a channel are the channel's customers. Tourtify keeps the lead traveller on the booking and the other travellers' names on the channel record. They are not added to your email campaign audience, and your own confirmation email is off unless you turn it on in the plugin settings.

## Related

- [Payments](/bookings/payments)
- [Tour pricing](/tours/pricing)
