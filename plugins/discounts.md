---
title: Discounts
description: Promo codes, automatic discounts, group discounts and dynamic pricing in one plugin, shown on your website and applied at checkout.
---

# Discounts <Badge type="info" text="All plans" />

The Discounts plugin keeps every way of lowering (or raising) a price in one place. Promo codes and automatic discounts are on every plan. Group discounts and dynamic pricing are on Growth and Scale. Whatever you set up shows on your website and is applied at checkout, so travellers see the same price on the tour page, in the booking form and on their bill.

::: info At a glance
- **Plan:** Starter, Growth and Scale (group discounts and dynamic pricing: Growth and Scale)
- **Category:** Sales
- **Where:** Plugins › Discounts, and Sales › Pricing › Discounts
:::

## The four features

**Sales › Pricing › Discounts** is one page with a tab for each feature. It opens on the first tab your plan includes. Tabs outside your plan are marked **Not in your plan**.

| Tab | What it does | Plan |
|---|---|---|
| **Promo codes** | Percentage or fixed-amount codes with booking and travel windows, blackout dates, tour restrictions, usage caps, bulk single-use codes and links that apply the code. | All plans |
| **Automatic discounts** | No code needed: early bird, last minute, groups, minimum spend and travel dates, shown on your website and at checkout. | All plans |
| **Group discounts** | Tiers per tour, e.g. 4+ travellers save 5%, 8+ save 10%, with a hint on tour pages to encourage bigger groups. | <Badge type="tip" text="Growth+" /> |
| **Dynamic pricing** | Move prices with demand: early-bird savings, last-minute deals, surcharges for nearly full departures, weekday, seasonal and time-of-day prices. | <Badge type="tip" text="Growth+" /> |

Each feature has its own page with the details:

- [Promo codes](./promo-codes)
- [Group discounts](./group-discounts)
- [Dynamic pricing](./dynamic-pricing)

Automatic discounts are covered in full below.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Discounts** and flip its switch on.
3. Select **Configure** to choose what travellers see, then **Save**.
4. Open **Sales › Pricing › Discounts** to create codes, discounts, tiers and pricing rules.

## Settings

**Promo codes**

| Setting | What it does | Default |
|---|---|---|
| Show the promo code field at checkout | Turn off to keep codes private: they then only work from a promo link (yoursite.com/tours/…?promo=CODE). | On |
| Show a banner for promo links | When a visitor arrives with ?promo=CODE in the link, a small banner confirms the code will be applied at checkout. The code is remembered while they browse. | On |

**Group discounts** <Badge type="tip" text="Growth+" />

| Setting | What it does | Default |
|---|---|---|
| Show "Save X% with N+" on tour pages | A short line under the price and in the booking form, e.g. "Groups save: 4+ save 5%, 8+ save 10%". The discount applies either way. | On |
| Nudge travellers towards the next tier | In the booking form: "Add 2 more travellers to save 10%". | On |

**Dynamic pricing** <Badge type="tip" text="Growth+" />

| Setting | What it does | Default |
|---|---|---|
| Show the reason to travellers | The price line reads e.g. "Early-bird −10%". Off: it reads "Price adjustment −10%". | On |

## Automatic discounts

Automatic discounts need no code. They reward travellers who book early, book late, come as a group or spend more. A booking that matches every rule you set gets the discount by itself. Your website shows the offer in the booking form, and checkout applies it.

**What the traveller sees**

- In the booking form, a short list of the automatic discounts the tour can get, each with its name and a summary of the rule.
- When their booking matches, the discount appears as its own line on the price, with the name you gave it (for example "Early bird").

### Create an automatic discount

1. Open **Sales › Pricing › Discounts** and choose the **Automatic discounts** tab.
2. Select **New discount**.
3. Fill in the form. Leave a rule empty to skip it.
4. Select **Create discount**.

| Field | What it does |
|---|---|
| **Name** | Travellers see it on the tour page and their bill, e.g. "Early bird". |
| **Discount** | **Percentage** (percent off) or **Fixed amount** (amount off, in a currency you choose). |
| **Which tours** | **All tours**, **Chosen tours**, or **Tours in chosen categories**. |
| **Book at least (days ahead)** | For an early-bird offer, e.g. 60. |
| **Book at most (days ahead)** | For a last-minute offer, e.g. 3. |
| **Departures from** / **Departures until** | Only departures in these dates get the discount. |
| **Bookable from** / **Bookable until** | Only bookings made in these dates get the discount, for a limited-time sale. |
| **At least (travellers)** | A group size the booking must reach. |
| **Minimum spend** | The booking must be worth at least this much. |
| **Combines with other automatic discounts** | Off: when several match, only the best one applies. On: it adds to the others that combine. |

### When several discounts match

- Every live discount the booking matches is considered. The discount comes off the ticket subtotal and never takes it below zero.
- Discounts that don't combine stand alone. Discounts marked **Combines** add up. The booking gets whichever is worth more: the best single discount, or the combining ones together.
- A promo code's own setting decides whether it adds to automatic discounts. See [Promo codes](./promo-codes).

### Manage your automatic discounts

Each discount in the list shows its status: **Live**, **Off**, or **Outside its booking window**, and a **Combines** label if it adds to others. It also shows which tours it covers and how it has been used: how many times it was given in the last 90 days and how much it took off, or **Not used in the last 90 days**.

From the actions menu you can **Edit**, **Switch off** or **Switch on**, and **Delete** a discount. Bookings that already got a discount keep their price when you change or delete it.

## Good to know

- Group discounts and dynamic pricing tabs only work on Growth and Scale. On Starter you can still use promo codes and automatic discounts.
- [Abandoned checkout recovery](./abandoned-checkout) can put a promo code on its last reminder. That needs promo codes on in this plugin.
- Turning the plugin off: promo codes, automatic and group discounts and pricing rules stop applying to new bookings. Your codes, rules and history are kept.

## Related

- [Promo codes](./promo-codes)
- [Group discounts](./group-discounts)
- [Dynamic pricing](./dynamic-pricing)
- [Abandoned checkout recovery](./abandoned-checkout)
- [Pricing](/tours/pricing)
- [Checkout](/bookings/checkout)
