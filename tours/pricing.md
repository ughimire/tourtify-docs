---
title: Pricing
description: Set tour prices in Tourtify with options, traveller types such as adult and child, group prices, minimums, price suffix, taxes and seasonal rules.
---

# Pricing

Tourtify prices are built from **options** and **traveller types**. An option is a way to do the tour (for example "Shared group" or "Private tour"); traveller types are who's travelling (Adult, Child, Infant). Each traveller type has a price, and can have cheaper prices for bigger groups. The price travellers see on your website is always the price they pay.

::: info Where to find it
Console › Tours › *tour* › **Pricing & options** tab
:::

## Add an option

1. Open the tour and go to **Pricing & options**.
2. Under **Add your first option**, enter an **Option name**, e.g. "Shared group", and choose **Add option**.
3. Set **How travellers book**, see [Booking modes](/tours/booking-modes).
4. Choose **Save option**.

Add more options with **Add option**. Each option has its own traveller types, prices and departures.

## Add traveller types

1. Under the option, choose **Add a traveller type**.
2. Enter a **Name**, e.g. "Child".
3. Optionally set **Min age**, **Max age** and **Min per booking** (for example at least 2 adults per booking).
4. Save.

::: tip Free travellers
Set a price of 0 for traveller types who travel free, such as infants. They still count towards seats and appear on the manifest.
:::

## Set prices

1. For each traveller type, enter the price each in the tour's currency.
2. To offer a group price, choose **Add group price**, enter **from how many travellers** it applies and the lower price each.
3. Choose **Save prices**.

Example:

| Traveller type | From 1 | From 4 | From 8 |
|---|---|---|---|
| Adult | 120.00 | 105.00 | 95.00 |
| Child | 80.00 | 80.00 | 70.00 |

## Price shown (suffix)

On the **Highlights & FAQs** tab, **Price shown** sets the suffix on your website:

| Setting | Shown as |
|---|---|
| per person | "From $120 per person" |
| per group | "From $480 per group" |

## Minimum group size

Under **Trip facts**, set the **Minimum group size** and **Maximum group size** for the tour. Use **Min per booking** on a traveller type to require a minimum number of that type in each booking.

## Taxes

Taxes are set once for the whole business and apply to every tour. Each tax is either **included** in your prices or **added on top**. Your website always advertises what the traveller will pay. See [Taxes](/tours/taxes).

## Seasonal and dynamic prices <Badge type="tip" text="Growth+" />

To charge more on peak dates, less on weekdays, or reward early bookers, use the [Dynamic pricing](/plugins/dynamic-pricing) plugin. Rules can apply to specific dates or weekdays, to how far ahead someone books, or to how full a departure is.

## More pricing tools

| Need | Use |
|---|---|
| Take a deposit, collect the balance later | [Deposits](/plugins/deposits) <Badge type="tip" text="Starter+" /> |
| Split the balance into instalments | [Instalments](/plugins/instalments) <Badge type="tip" text="Growth+" /> |
| Discount codes | [Promo codes](/plugins/promo-codes) |
| Add-ons, room upgrades, insurance | [Add-ons & extras](/plugins/add-ons-and-extras) <Badge type="tip" text="Growth+" /> |
| Automatic discount for bigger groups across tours | [Group discounts](/plugins/group-discounts) <Badge type="tip" text="Growth+" /> |
| A booking fee | [Booking fees](/plugins/booking-fees) <Badge type="tip" text="Growth+" /> |
| Prices in several currencies | [Currency switcher](/plugins/currency-switcher) <Badge type="tip" text="Growth+" /> |

## Related

- [Booking modes](/tours/booking-modes)
- [Departures and availability](/tours/departures-and-availability)
- [Taxes](/tours/taxes)
- [Checkout](/bookings/checkout)
