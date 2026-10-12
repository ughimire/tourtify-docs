---
title: Manifests and check-in
description: Use Tourtify departure manifests to see who is travelling, collect balances, check travellers in and print or export passenger lists.
---

# Manifests and check-in

A manifest is the passenger list for one departure: every booking and traveller, what's still to pay, dietary and emergency details, waivers and who has arrived. Guides use it on the day to check people in from a phone.

::: info Where to find it
Console › Bookings › Departures › *departure* › **Open manifest**
Also: a tour's **Departures** tab › **Passenger manifest**, or **Departure manifest** on a booking
:::

## Open a manifest

1. Go to **Bookings › Departures**.
2. Find the departure (list or calendar) and choose **Open manifest** from its actions.

## What the manifest shows

The summary at the top:

| Card | Shows |
|---|---|
| Travellers / Checked in | How many are here, and how many still to arrive |
| To collect | Money still owed on this departure, or "Everything is paid" |
| Waivers signed | With the [Waivers](/plugins/waivers) plugin |
| Details complete | With the [Traveller forms](/plugins/traveller-forms) plugin |

Below, each booking lists its reference, lead traveller (with **Call** and email), the amount to collect, extras, and each traveller with diet, emergency contact, minor status and waiver status.

## Check travellers in

1. Search with **Find a name or reference**, or filter **Show: Not here yet**.
2. Choose **Check in** next to a traveller, or **Check in all** for a whole booking.
3. To check in the whole list, use **Check in everyone** (or **Check in shown** when filtered).

Made a mistake? Choose **Undo check-in** or **Undo all**.

::: warning Waivers first
With the Waivers plugin, travellers who must sign a waiver can't be checked in until they've signed, on the **Signing kiosk** or their own phone. The manifest tells you how many still need to sign.
:::

## Signing kiosk

Choose **Signing kiosk** to open a page for a tablet at the meeting point. Travellers look up their booking with its reference and a surname and sign there. **Copy** the kiosk link to share it: anyone with the link can look up bookings on this departure only.

## Print and export

- **Print**: a clean printable list for the guide.
- **CSV**: a spreadsheet of every traveller.

## QR tickets <Badge type="tip" text="Plugin" />

With the [QR tickets](/plugins/qr-tickets) plugin, each booking gets a QR ticket, and your team can check travellers in by scanning it at **Bookings › Scan tickets**.

## Who can check in

Owners, admins, sales agents and guides. Guides see departures and bookings read-only, and can check travellers in. With the [Tour guides](/plugins/tour-guides) plugin you can assign guides to departures.

## Related

- [Departures and availability](/tours/departures-and-availability)
- [Bookings](/bookings/bookings)
- [QR tickets plugin](/plugins/qr-tickets)
- [Waivers plugin](/plugins/waivers)
- [Traveller forms plugin](/plugins/traveller-forms)
