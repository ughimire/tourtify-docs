---
title: Costs and profit
description: Record what each departure costs, set default costs per tour, and see the real profit, margin and break-even of every departure and tour.
---

# Costs and profit <Badge type="tip" text="Growth+" />

Costs & profit records what each departure costs you: drivers, hotels, park fees, meals. Default costs per tour fill in automatically, guide pay and agent commission are counted, and you see the real profit, margin and break-even of every departure and tour. It's for owners and managers who want to know which trips make money.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Accounting
- **Where:** Plugins › Costs & profit, Finance › Reports › Costs & profit, and the costs panel on each departure's manifest
:::

## How it works

Profit is revenue minus costs:

- **Revenue**: what the bookings that go ahead paid, net of refunds, excluding tax.
- **Costs**: the tour's default costs (counted live on each departure unless you change them there), the departure's own cost lines, and guide pay.
- **Commission and fees**: agent commission, and your payment provider's fee on online payments (the percentage you set).

Each departure shows its **Profit**, **Margin** and break-even: how many travellers it needs to cover its fixed costs. Departures below your healthy margin are shown in amber, loss-making ones in red.

Travellers see nothing of this.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Costs & profit** and flip its switch on.
3. Select **Configure** to set your payment provider fee and healthy margin, then **Save**.

## Settings

| Setting | What it does | Default |
|---|---|---|
| Payment provider fee (% of online payments) | What your card or wallet provider keeps from each online payment. Payments recorded by hand are not charged. | 2.9 |
| Healthy margin (%) | Departures below this margin are shown in amber, loss-making ones in red. | 25 |

## Default costs per tour

On **Finance › Reports › Costs & profit**, under **Default costs per tour**, choose a tour and **Add default cost**. Each cost has:

- **What** (e.g. Driver, Park entry fee, Lodge) and a **Category**: Accommodation, Transport, Guide, Activity, Fees & permits, Meals or Other.
- **Cost**, **Currency** and how it's counted: **per departure**, **per traveller** or **per booking**.
- Optionally a **Supplier** and **Service**: its contract rate on each departure's date replaces the amount, for the travellers booked.
- A **Note**, such as an invoice number or who to pay.

A default cost is counted on every departure of that tour, unless you change it on a departure.

## Costs on a departure

Open a departure's manifest to see its **Costs & profit** panel: revenue, costs, profit, margin and break-even ("Breaks even at {count} travellers").

- **Add cost** for something only this departure has.
- **Edit** a default cost to change it on this departure only (marked **Changed here**), or **Remove** it from this departure; the tour's default stays for other dates. **Restore** brings it back.
- Guide pay, supplier bookings and supplier bills appear here when you use those features.

## The profit report

**Finance › Reports › Costs & profit** shows, for the dates you pick (**From**, **To**):

- **Departures**: each departure with **Travellers**, **Revenue**, **Costs, commission & fees**, **Profit** and **Margin**, and how many departures are at a loss.
- **By tour**: the same, added up per tour.
- **CSV** downloads the report.

Departures appear once they have bookings or costs.

## Good to know

- Costs in a different currency from the departure's bookings aren't added up; they're listed as "Other currency, not counted".
- Turning the plugin off: the profit report and the costs panel on manifests disappear. Cost lines and default costs are kept.

## Related

- [Suppliers](./suppliers)
- [Tour guides](./tour-guides)
- [Reports](/bookings/reports)
- [Manifests and check-in](/bookings/manifests-and-check-in)
