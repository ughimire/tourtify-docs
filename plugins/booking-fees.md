---
title: Booking & traveller fees
description: Add a booking fee, per-traveller fee or percentage fee such as park permits, shown as its own line and included in advertised prices.
---

# Booking & traveller fees <Badge type="tip" text="Growth+" />

Booking & traveller fees add a fee to every booking: once per booking, per traveller or as a percentage of the price. Use it for park permits, conservation fees or a service fee. The fee shows as its own line at checkout and, by default, is included in the prices you advertise, as consumer law in several markets requires.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Payments
- **Where:** Console › Plugins › Booking & traveller fees
:::

## How it works

**What the traveller sees**

- On tour pages, prices include the fee (or show "+ fee at checkout" if you turn that off).
- At checkout, the fee is a separate line in the price breakdown under your fee name, e.g. "Park permit".

**What your team sees**

- The fee line on bookings, quotes and invoices.
- If the fee isn't refundable, it is marked non-refundable on the booking and its quote, so your team knows to keep it when refunding.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Booking & traveller fees** and flip its switch on.
3. Select **Configure**, set the fee name, how it's charged and the amount, then **Save**.

## Settings

**Fee**

| Setting | What it does | Default |
|---|---|---|
| Fee name | Shown on the price breakdown, invoices and bookings, e.g. "Park permit". Up to 60 characters. | Booking fee |
| Charged | **Once per booking**, **Per traveller** or **Percentage of the price**. | Once per booking |
| Amount | In your main currency, e.g. 3.50, or a percentage like 2.5. A percentage fee can be at most 100%. | 0 |
| Amounts in other currencies | Fixed fees only. One per line, e.g. `EUR 3.00`. | Empty |

**Display**

| Setting | What it does | Default |
|---|---|---|
| Include the fee in displayed prices | Advertised prices include the fee. The fee is still shown as its own line at checkout. Off: tour pages show "+ fee at checkout". | On |

**Refunds**

| Setting | What it does | Default |
|---|---|---|
| Refund the fee when a booking is cancelled | Off: the fee line is marked non-refundable on the booking and its quote. | Off |

**Exemptions**

| Setting | What it does | Default |
|---|---|---|
| Don't charge it on bookings your team enters | Manual bookings made in the console (phone, walk-in, agent) skip the fee. | Off |

## Fees in other currencies

If you sell in more than one currency with the [Currency switcher](./currency-switcher):

- **Percentage fees** apply in every currency automatically.
- **Fixed fees** need an amount per currency. Add one line per currency under **Amounts in other currencies**, for example:

  ```
  EUR 3.00
  GBP 2.50
  ```

Bookings in a currency that isn't listed (and isn't your main currency) have no fee.

::: warning All-in pricing
Keep **Include the fee in displayed prices** on if you sell to travellers in California or the US. California's SB 478 and the FTC rule on junk fees require advertised prices to include mandatory fees.
:::

## Good to know

- The fee is calculated with the rest of the price, so it appears in quotes, the checkout total and the amount due.
- Turning the plugin off stops new bookings adding the fee. Fees on existing bookings are kept.

## Related

- [Currency switcher](./currency-switcher)
- [Deposits & balance payments](./deposits)
- [Tour pricing](/tours/pricing)
- [Checkout](/bookings/checkout)
