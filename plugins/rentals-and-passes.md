---
title: Rentals, passes & memberships
description: Rent gear by the hour or day with deposits and check-out photos, sell passes and punch cards, and run monthly or annual memberships with member perks.
---

# Rentals, passes & memberships <Badge type="tip" text="Growth+" />

This plugin adds three ways to sell beyond tours:

- **Rentals**: bikes, kayaks and gear by the hour or day from shared stock, with add-ons, security deposits held on the card, and check-out and check-in with photos.
- **Passes**: punch cards and season passes used across tours.
- **Memberships**: monthly or annual plans with member prices, free entries and early booking.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Sales
- **Where:** Plugins › Rentals, passes & memberships, and Sales › Rentals & passes › Rentals, Passes, Memberships and Rentals setup
:::

## How it works

**What the traveller sees**

- A rentals page on your website: choose the gear, add-ons and the pick-up and return times within your opening hours, then pay online.
- A passes page where they can buy a pass or join a membership. The pass and its QR code are emailed to them. Members get a welcome email with their membership number and sign in to their account page with it.
- Passes can be used at checkout online, at the till, or when holders check in. Members see their member prices and can book early.

**What your team sees**

- **Rentals**: pick-ups and returns today, what's out now and what's overdue, and free units per day.
- **Passes** and **Memberships**: what's been sold, who holds what, and what's due to renew.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Rentals, passes & memberships** and flip its switch on.
3. Select **Configure** to set your hours, deposits and what you sell online, then **Save**.
4. Open **Sales › Rentals & passes › Rentals setup** to add what you rent.
5. To sell online, connect a payment account in **Settings › Payments & tax › Payments**.

## Settings

**Rentals**

| Setting | What it does | Default |
|---|---|---|
| Take rentals on your website | Customers can book rentals online. | On |
| Open on | The days you hand out and take back gear. | Every day |
| Opens at (pick-up from) | First pick-up time. | 08:00 |
| Closes at (returns by) | Last return time. | 18:00 |
| Pick-up and return times every (minutes) | 15, 30 or 60. | 30 |
| A half day is (hours) | Used for half-day prices. | 4 |
| Online rentals start at least (minutes from now) | How soon an online rental can start. | 60 |
| Security deposits | **Hold it on the customer's card**, **Take it in cash at pick-up**, or **Card hold or cash (staff choose at pick-up)**. A card hold only authorises the amount: nothing is taken unless you add a charge. Card holds last about 7 days, so they are taken at pick-up. | Card hold or cash |
| Late return grace (minutes) | Late fees start after this, per started hour, at each item's late fee. | 15 |
| Rental terms (printed on the rental agreement) | Your terms for the renter. | Standard wording |

**Passes & memberships**

| Setting | What it does | Default |
|---|---|---|
| Sell passes on your website | Passes are on sale online. | On |
| Sell memberships on your website | Memberships are on sale online. | On |
| Members book early: the public can book up to (days ahead) | 0 = off. With 60, the public books departures up to 60 days ahead; members get their plan's extra days on top. | 0 |
| Remind members before renewal (days) | An email before a membership renews. | 14 |
| Remind pass holders before a pass expires (days) | 0 = no reminder. | 7 |

## Rentals

**Set up what you rent**

Open **Rentals setup** and select **Add item**. Add each kind of gear once with how many you have, for example 12 city bikes or 4 double kayaks. For each item set:

- **Prices for one**: per hour, half day, day, each extra day and week. Fill in any you use. Customers always pay the cheapest that covers their time.
- **Rules**: shortest and longest rental, **Turnaround (minutes)** for cleaning or checks, **Security deposit (each)** and **Late fee per started hour**.
- **Shares stock with**: link it to a resource in [Resources & scheduling](./resources-and-scheduling), so it isn't rentable while that resource runs a departure or is in maintenance.
- **Rent it on your website**, or keep it desk only.

**Add add-on** for helmets, child seats or damage cover, charged once a rental or each day, with every item or chosen ones.

**Run the desk**

Open **Rentals** and use **Today**, **Upcoming**, **Out** and **All**, or **Availability** for free units per day. **New rental** books one at the desk. On a rental:

- **Check out** and **Check in**, recording the condition at pick-up and on return, with photos.
- Take the security deposit: **Hold on card** (the customer scans a QR code or opens a link to authorise it), **Email the hold link**, or **Take cash**. You can also waive it, with a reason.
- **Add a charge** for damage, late return or anything else. Charges are paid from the deposit first, or you can **Waive** them.
- **Take payment**, **Rental agreement (PDF)**, **Email the confirmation** or **Cancel rental**.

Overdue rentals are flagged with the late fee so far, which is added when you check the gear in.

## Passes

Open **Passes** and select **Add pass**: a punch card (for example 10 entries) or an unlimited season pass, for some or all of your tours, valid for a number of days or from first use.

- **Sell a pass** at the desk, taking payment into a cash drawer if you use [Point of sale](./point-of-sale).
- **Check in a pass**: scan its QR code or type the code, then **Use entries** for the people checking in. Add a booking reference to check the pass covers that tour.
- A pass can be transferred to someone else, or cancelled and refunded.

Each pass shows its status: **Active**, **Awaiting payment**, **Used up**, **Expired**, **Cancelled** or **Refunded**.

## Memberships

Open **Memberships** and select **Add plan**: a price, how often it renews (monthly or yearly), and what members get: a percentage off, free entries each period, and booking a number of days before everyone else.

- Members who join on your website are renewed by your payment provider. **Add member** signs someone up at the desk; they renew at the desk, with a reminder email before it ends.
- The page shows **Active members**, **Monthly recurring revenue** (annual plans count a twelfth) and **Renewing in 30 days**.
- You can **Record renewal** or **Cancel membership**, now or at the end of the paid period, with an optional refund. Cancelling stops the subscription at your payment provider too.

## Good to know

- Rentals, passes and memberships can also be sold at the till with [Point of sale](./point-of-sale), and passes can be a way to pay there.
- Your website can't sell passes or memberships until a payment account is connected and selling online is switched on in the plugin settings.
- Turning the plugin off: rentals, passes and memberships stop being sold on your website and at the desk. Items, rentals and passes already sold are kept.

## Related

- [Point of sale](./point-of-sale)
- [Resources & scheduling](./resources-and-scheduling)
- [QR tickets & check-in](./qr-tickets)
- [Payments](/bookings/payments)
