---
title: Promo codes
description: Create percentage or fixed-amount promo codes with date windows, tour restrictions, usage caps, single-use batches and shareable promo links.
---

# Promo codes <Badge type="info" text="All plans" />

Promo codes let you run promotions, reward newsletter subscribers and give partners their own codes. Travellers type the code at checkout, or open a promo link that applies it for them. You control when a code works, which tours it covers, how often it can be used and how it combines with other discounts.

::: info At a glance
- **Plan:** All plans
- **Category:** Marketing
- **Where:** Console › Plugins › Promo codes, and Tours › Promo codes
:::

## How it works

**What the traveller sees**

- A promo code field at checkout. If a code can't be used, a clear reason shows under the field.
- With a promo link (`yoursite.com/tours/…?promo=CODE`), a small banner confirms the code will be applied at checkout. The code is remembered while they browse.
- The discount appears as its own line in the price breakdown.

**What your team sees**

**Tours › Promo codes** lists your codes and batches with their status (**Live**, **Scheduled**, **Paused**, **Expired**, **Used up**), uses, discount given and revenue from codes. A use is counted when the booking is confirmed.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Promo codes** and flip its switch on.
3. Open **Tours › Promo codes** to create your first code.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Show the promo code field at checkout | Turn off to keep codes private: they then only work from a promo link. | On |
| Show a banner for promo links | When a visitor arrives with `?promo=CODE` in the link, a small banner confirms the code will be applied at checkout. | On |

## Create a promo code

1. Go to **Tours › Promo codes** and select **Create code**.
2. Under **Code and discount**, enter the **Code** (letters, numbers, `-` and `_`, at least 3 characters), for example `SUMMER10`.
3. Choose the **Discount type**: **% off** or a fixed amount off in your currency, and enter the **Discount**.
4. Set the rules you need (all optional):
   - **When**: **Book from** / **Book until** (the booking window), **Departures from** / **Departures until** (the travel dates it covers) and **Blackout dates** (departures that can't use the code, e.g. holidays).
   - **Where it applies**: **Tours**, **Tour categories** and **Ticket types**. Leave a list unticked to allow everything.
   - **Limits**: **Total uses**, **Uses per customer** (matched by email address at checkout), **Minimum travellers** and **Minimum booking**.
   - **Stacking**: how the code works with automatic discounts (see below).
5. Select **Save changes**.

::: warning Codes can't be renamed
The code can't change once shared. To use a different code, create a new one.
:::

## How codes combine with other discounts

Automatic discounts are [group discounts](./group-discounts), price cuts from [dynamic pricing](./dynamic-pricing) and the pay-in-full discount from [Deposits](./deposits). Each code has a **Stacking** rule:

| Option | What happens |
|---|---|
| **Combine** | Applies on top of group and pay-in-full discounts. |
| **Replace** | Used instead of automatic discounts: they don't apply with this code. |
| **Best of** | Whichever saves the traveller more: the code, or the automatic discounts. |

## Generate single-use codes

Use a batch for unique codes that each work once, for example for a partner newsletter.

1. On **Tours › Promo codes**, select **Generate codes**.
2. Enter a **Name** (e.g. "Partner newsletter"), a **Prefix** and **How many** codes you need.
3. Set the discount and rules. They apply to every code in the batch.
4. Select **Generate**, then **Download CSV** to get the list.

Changes to a batch apply to every code in it.

## Share a promo link

Every code has a **Promo link**. Anyone who opens it gets the code applied at checkout. It works on any page of your website: add `?promo=CODE` to the address. Use **Copy** to copy it.

Promo links still work when the checkout field is hidden, so you can keep a code private to the people you send the link to.

## Pause or delete a code

- **Pause** stops a code working without losing its history. **Activate** brings it back.
- **Delete** is available only for codes that haven't been used yet.

## Good to know

- Turning the plugin off stops promo codes working at checkout. Your codes and their redemption history are kept.
- [Abandoned checkout recovery](./abandoned-checkout) can put one of your codes, or a unique single-use code, in its last reminder. It needs this plugin on.

## Related

- [Abandoned checkout recovery](./abandoned-checkout)
- [Group discounts](./group-discounts)
- [Dynamic pricing](./dynamic-pricing)
- [Checkout](/bookings/checkout)
- [Tour pricing](/tours/pricing)
