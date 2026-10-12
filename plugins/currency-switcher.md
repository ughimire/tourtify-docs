---
title: Currency switcher
description: Let travellers browse and pay in their own currency, using real prices you set per currency, with optional approximate converted prices.
---

# Currency switcher <Badge type="tip" text="Growth+" />

The currency switcher lets travellers browse and pay in their own currency. You set real prices per currency on each tour, so there are no surprise exchange rates at checkout. Tours you haven't priced in a currency stay in your main currency, clearly labelled, with an optional approximate converted price.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Payments
- **Where:** Console › Plugins › Currency switcher, and each tour's pricing
:::

## How it works

**What the traveller sees**

- A currency picker in your website's header, listing your main currency and the extra currencies you offer.
- Until they choose, visitors see the currency of their country (or browser language), if you offer it. Their own choice is remembered for a year.
- Tours priced in the chosen currency show and charge that price.
- Tours without a price in that currency show your main currency, labelled "Charged in …". With approximate prices on, an estimate like "≈ €92" appears next to the real price.

**What is charged**

Checkout always charges in the currency the tour is priced in. Approximate prices are for information only: nothing is charged at your exchange rates.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Currency switcher** and flip its switch on.
3. Select **Configure**, choose your **Extra currencies**, then **Save**.
4. Give each tour a price in each currency you want to charge in. In the tour editor, open **Pricing & options**.

## Settings

**Currencies**

| Setting | What it does | Default |
|---|---|---|
| Extra currencies | Up to 10. Travellers can switch to any of these; your main currency is always offered. | EUR, GBP |
| Pick a visitor's currency automatically | Until they choose one, visitors see the currency of their country (or browser language), if you offer it. | On |

**Approximate prices**

| Setting | What it does | Default |
|---|---|---|
| Show approximate prices | For tours without a price in the visitor's currency, show "≈ €92" next to the real price. Checkout says they are charged in the tour's currency. | Off |
| Exchange rates | One per line: `currency=rate` for 1 unit of your main currency, e.g. `EUR=0.92`. Nothing is charged at these rates. | Empty |
| Markup on converted prices (%) | Covers card and conversion fees, so the estimate isn't lower than what the traveller's bank will charge. 0–15. | 0 |
| Rounding | No rounding (€91.73), Whole amounts (€92), Ending in .99 (€91.99), Nearest 5 (€90) or Nearest 10 (€90). | Whole amounts |

The drawer shows which currencies are offered on your website and, if approximate prices are on, any currency without a rate.

## Enter exchange rates

To show approximate prices, add a rate for each extra currency:

```
EUR=0.92
GBP=0.79
AUD=1.52
```

Update rates when they move. Visitors choosing a currency without a rate see only the real price.

::: warning Approximate prices need rates
You can't switch **Show approximate prices** on without at least one rate.
:::

## Payment gateways and currencies

Each payment gateway takes certain currencies. A gateway only appears at checkout for tours priced in a currency it accepts. For example:

- [Khalti](./khalti) takes NPR only.
- [Razorpay](./razorpay) takes INR, USD, EUR, GBP, AUD, CAD, SGD and AED.
- [PayPal](./paypal) takes many major currencies, e.g. USD, EUR and GBP.

Add the currency with the switcher and give your tours a price in it to offer that gateway.

## Good to know

- Fixed [booking fees](./booking-fees) need an amount per currency. Percentage fees apply in every currency.
- Turning the plugin off means your website shows prices in your main currency only. Your per-currency tour prices are kept.

::: tip Price in round numbers
Real prices per currency let you set friendly amounts like €95 instead of a converted €93.47, and they don't change when exchange rates move.
:::

## Related

- [Booking & traveller fees](./booking-fees)
- [PayPal](./paypal)
- [Razorpay](./razorpay)
- [Khalti](./khalti)
- [Tour pricing](/tours/pricing)
