---
title: Dynamic pricing
description: Move tour prices with demand using early-bird savings, last-minute deals, surcharges for nearly full departures and weekday or seasonal prices.
---

# Dynamic pricing <Badge type="tip" text="Growth+" />

Dynamic pricing moves your ticket prices with timing and demand. Reward early bookers, fill the last seats with a last-minute deal, or charge more for nearly full departures and peak dates. You set the rules once and they apply automatically.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Sales
- **Where:** Console › Plugins › Dynamic pricing, and Tours › Dynamic pricing
:::

## How it works

**What the traveller sees**

- When a rule lowers the price, a discount line appears in the price breakdown, e.g. "Early-bird −10%".
- When a rule raises the price, a surcharge line appears with the other fees.
- If you turn **Show the reason to travellers** off, the line reads "Price adjustment −10%" instead.
- The "from" price on tour pages reflects the deepest active price cut for the tour. Surcharges never raise the "from" price, because not every departure carries them.

**How rules apply**

- A rule changes the **ticket price** only, not add-ons or fees.
- Rules never stack. If several rules match a departure, only the one with the highest **Priority** applies. On a tie, a tour's own rule beats an all-tours rule, then the oldest rule wins.
- A price cut is at most 50%, so the price never drops below zero.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Dynamic pricing** and flip its switch on.
3. Open **Tours › Dynamic pricing** and select **New rule**.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Show the reason to travellers | The price line reads e.g. "Early-bird −10%". Off: it reads "Price adjustment −10%". | On |

## Rule types

| Rule | Matches when | Example |
|---|---|---|
| **Early-bird** | Booked at least … days before departure | Book 60 days ahead, save 10% |
| **Last-minute** | Booked at most … days before departure | Book within 3 days, save 15% |
| **Occupancy** | The departure is at least … % full (booked plus held seats) | 80% full, +10% |
| **Weekdays / dates** | The departure is on chosen weekdays and/or between two dates | Saturdays in peak season, +5% |

## Create a pricing rule

1. Go to **Tours › Dynamic pricing** and select **New rule**.
2. Enter a **Name**, e.g. "Book 60 days ahead".
3. Choose the rule type and fill in its condition (days, occupancy, or weekdays and dates).
4. Under **Price change**, choose **Lower by** or **Raise by** and enter a **Percent**.
5. Under **Applies to**, choose **All tours** or a single tour.
6. Set a **Priority**. Higher wins when several rules match.
7. Use **Preview** to check the effect on a sample ticket price.
8. Select **Save changes**.

## Pause, edit or delete a rule

From a rule's **Actions** menu you can **Edit**, **Pause** (stop it applying without losing it), **Activate** it again, or **Delete** it.

## Good to know

- Price cuts count as automatic discounts. How they combine with a promo code depends on the code's **Stacking** rule. See [Promo codes](./promo-codes#how-codes-combine-with-other-discounts).
- Surcharges are refundable fee lines.
- Turning the plugin off returns prices to your normal rates for new bookings. Your pricing rules are kept.

::: tip One rule per situation
Because rules don't stack, plan your priorities. For example, give a peak-season surcharge a higher priority than an early-bird discount if peak dates should never be discounted.
:::

## Related

- [Group discounts](./group-discounts)
- [Promo codes](./promo-codes)
- [Waitlist](./waitlist)
- [Tour pricing](/tours/pricing)
