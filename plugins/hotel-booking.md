---
title: Hotel booking
description: Add hotel rooms to tour packages so travellers book accommodation and the tour in one checkout, with single supplements, extra nights and rooming lists.
---

# Hotel booking <Badge type="tip" text="Growth+" />

Hotel booking adds hotel rooms to your tour packages. Travellers book accommodation and the tour in one checkout, choose a room type, and add extra nights before or after the trip. You get reservations per departure and rooming lists to send to each hotel.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Sales
- **Where:** Console › Plugins › Hotel booking, and Bookings › Hotel booking
:::

## How it works

**What the traveller sees**

- At checkout, the room types available for the tour option, with price, sleeps and description.
- The option to add extra nights before or after the tour, up to your maximum.
- A single supplement when they have a shared room to themselves.
- On the booking confirmation: their room, check-in and check-out times and your hotel policy.

**What your team sees**

- **Bookings › Hotel booking** lists your room types per tour option, with rooms on sale and booked.
- **Reservations** lists each guest's room and stay, with its status: **Reserved**, **Sent to hotel**, **Confirmed by hotel** or **Cancelled**.
- **Rooming lists** per departure, ready to download or email to each hotel.

Rooms are held at checkout and released if the booking is cancelled or the checkout expires unpaid.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Hotel booking** and flip its switch on.
3. Select **Configure** to set check-in times, your hotel policy and where summaries go, then **Save**.
4. Open **Bookings › Hotel booking** and select **Add room type**.

## Settings

**Check-in and out**

| Setting | What it does | Default |
|---|---|---|
| Default check-in time | Shown to travellers on their booking confirmation. Format HH:MM. | 14:00 |
| Default check-out time | Shown to travellers on their booking confirmation. Format HH:MM. | 11:00 |

**Travellers**

| Setting | What it does | Default |
|---|---|---|
| Hotel policy | Check-in requirements, ID policy, cancellation rules. Shown on the booking confirmation and tour page. | Empty |
| Require hotel selection at checkout | When on, travellers must choose a room before they can complete booking. When off, the hotel is optional. | Off |

**Hotels and suppliers**

| Setting | What it does | Default |
|---|---|---|
| Send hotel booking summary to | Your accommodation team gets each new hotel booking, and rooming lists for room types without their own supplier email. Leave blank to skip. | Empty |

## Add a room type

Room types belong to one tour option.

1. Go to **Bookings › Hotel booking** and select **Add room type**.
2. Choose the **Tour option**.
3. Enter the **Room name**, e.g. "Standard Twin" or "Deluxe Double", and the **Room type**: Single, Twin, Double, Triple or Family. **Sleeps** fills in automatically; change it if needed.
4. Set the **Price** and whether the **Price is** **Per room** or **Per person sharing**.
5. Set **Rooms**: how many of this type you hold per departure.
6. Optionally set a **Single supplement**, added when a traveller has a shared room to themselves (a solo traveller, or the odd one out in a group).
7. For extra nights, set **Nights before (max)**, **Nights after (max)** and the **Extra night** price (per room per night).
8. Under **Hotel / supplier**, enter the hotel name (e.g. "Hotel Yak & Yeti") and the **Supplier email** that gets the rooming list.
9. Optionally override the check-in and check-out times, and add a **Description** and **Image URL**.
10. Select **Save**.

A group gets as many rooms as it needs, based on how many guests each room sleeps.

## Send a rooming list

1. Open **Bookings › Hotel booking › Reservations**.
2. Under **Rooming lists**, find the departure.
3. Select **CSV** to download it, or **Email to hotel** to send each hotel its part.

The list is rebuilt when it's sent, so the hotel always gets the current version. Guest names come from [traveller details](./traveller-forms) when collected. Sent reservations are marked **Sent to hotel**.

## Record the hotel's confirmation

When a hotel confirms, select **Add hotel ref** on the reservation and enter their **Confirmation reference from hotel**, e.g. `HTL-2026-1234`. The reservation is marked **Confirmed by hotel**.

## Pause or delete a room type

- **Pause sales** hides a room type from checkout. Its reservations are kept. **Put back on sale** to sell it again.
- A room type with bookings can't be deleted. Pause it instead.

## Good to know

- Turning the plugin off removes hotel rooms from checkout. Rooms and reservations are kept.
- For simple room upgrades without rooming lists, you can use an upgrade in [Add-ons & extras](./add-ons-and-extras).

## Related

- [Add-ons & extras](./add-ons-and-extras)
- [Traveller details forms](./traveller-forms)
- [Checkout](/bookings/checkout)
- [Tour pricing](/tours/pricing)
