---
title: Abandoned checkout recovery
description: Send up to three automatic reminders to travellers who started a booking but didn't pay, each with a link that restores their exact cart.
---

# Abandoned checkout recovery <Badge type="info" text="All plans" />

Abandoned checkout recovery follows up with travellers who started a booking but didn't pay. They get up to three automatic emails, each with a one-click link that restores their exact cart, and you can add a discount to the last one. You see what each reminder recovers.

::: info At a glance
- **Plan:** All plans
- **Category:** Marketing
- **Where:** Console › Plugins › Abandoned checkout recovery, and Bookings › Abandoned checkouts
- **Works with:** [Promo codes](./promo-codes) (for the offer on the last reminder)
:::

## How it works

1. A traveller enters their details at checkout but doesn't finish paying. When the checkout expires unpaid, the reminder sequence starts.
2. Each reminder goes out the number of hours after the checkout expired that you set.
3. The email contains a link back to their exact cart: same date, travellers, add-ons and hotel room. Prices are always re-quoted, so they see today's price.
4. Before every reminder, Tourtify checks the date is still available. If it sold out, reminders stop, or carry on suggesting other dates.
5. If the traveller books, the sequence stops and the booking is credited to the reminder that led to it.

Travellers can opt out with one click from the email. Their choice is remembered for your business.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Abandoned checkout recovery** and flip its switch on.
3. Select **Configure** to review the reminders and the offer, then **Save**.

## Settings

**Reminder 1, Reminder 2 and Reminder 3** each have the same four settings:

| Setting | What it does | Default |
|---|---|---|
| Send reminder 1 / 2 / 3 | Switches this reminder on or off. | On |
| Send after (hours) | Hours after the checkout expired. Each reminder must go out after the one before it. 1–336. | 1, 24 and 72 |
| Subject line (optional) | Leave empty for the default subject. You can use `{tour}` and `{name}`. | Empty |
| Your message (optional) | Shown at the top of the email. Up to 1,000 characters. | Empty |

Suggested use: reminder 1 is a friendly nudge soon after they left (best without a discount), reminder 2 goes out the next day, and reminder 3 is the last try, paired with an offer.

**Offer**

| Setting | What it does | Default |
|---|---|---|
| Offer on the last reminder | **No offer**, **A promo code I already have**, or **A unique single-use code for each traveller**. Only the last reminder that's switched on carries the offer. | A promo code I already have |
| Promo code | For "a promo code I already have": an active code from Promo codes, e.g. `COMEBACK5`. | Empty |
| Discount for single-use codes (%) | Each traveller gets their own code for this tour, usable once. 1–50. | 10 |
| Single-use codes expire after (days) | 1–30. | 3 |

**Rules**

| Setting | What it does | Default |
|---|---|---|
| If their date sells out | **Stop the reminders**, or **Keep going, suggesting other dates**. Checked again before every reminder. | Stop the reminders |

::: warning Offers need Promo codes
Both offer types use the [Promo codes](./promo-codes) plugin. A code you enter must exist and be active. Single-use codes need Promo codes switched on first.
:::

## Track recovered bookings

Open **Bookings › Abandoned checkouts** to see every abandoned checkout.

- The summary shows **Recovered revenue**, **Travellers reminded** and the recovery rate for the last 7, 30 or 90 days.
- Each row shows the traveller, tour, value and status (**In sequence**, **Recovered**, **Finished**, **Stopped**, and so on).
- **View details** shows each reminder: sent, opened, clicked, and which one led to the booking.

From a row's **Actions** menu you can **Send reminder now** or **Stop reminders** for that traveller.

::: info Open rates are approximate
Many mail apps block or pre-load images, so opens are approximate. Clicks and bookings are exact.
:::

## Good to know

- Travellers who asked not to get reminders are never emailed again by this business.
- Turning the plugin off stops recovery emails. Past checkouts and recovered bookings are kept.

## Related

- [Promo codes](./promo-codes)
- [Waitlist](./waitlist)
- [Checkout](/bookings/checkout)
