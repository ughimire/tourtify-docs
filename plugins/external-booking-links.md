---
title: External booking links
description: Show tours you sell on Viator, GetYourGuide or a partner site on your website and send travellers to that booking page, with tracking and click counts.
---

# External booking links <Badge type="tip" text="Growth+" />

External booking links are for trips you sell somewhere else: Viator, GetYourGuide, a partner or your old booking system. The tour still appears on your website with its full content, but the booking button sends travellers to the other site's booking page. Your tracking and affiliate parameters are added to every link automatically, and every click is counted.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Sales
- **Where:** Console › Plugins › External booking links, and Tours › External booking links
:::

## How it works

**What the traveller sees**

On a tour option set to book elsewhere, the booking panel shows one button (by default "Check dates & book") instead of the checkout. It opens the other site's booking page, in a new tab if you choose.

**What gets added to the link**

- UTM parameters, so the other site's analytics shows the traffic came from your website. Parameters already in a link are kept.
- Your affiliate parameters, e.g. `partner_id=12345`.
- `rel="sponsored nofollow"` on the link, if you choose, as Google asks for on affiliate and paid links.

**What your team sees**

**Tours › External booking links** shows clicks per tour and per day for the last 7, 30 or 90 days. Bots and repeat clicks within a minute aren't counted.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **External booking links** and flip its switch on.
3. Select **Configure** to set tracking and the button, then **Save**.
4. Link a tour (below).

## Link a tour to another site

1. Open the tour in the editor and go to **Pricing & options**.
2. In the option's settings, set **How travellers book** to **Book on another website (link)**.
3. Paste the **Booking page link (https)**.
4. Save the option.

The tour now appears on **Tours › External booking links** with its clicks.

## Give a departure its own link

A partner may sell one date on a different page.

1. Go to **Tours › External booking links**.
2. Open **Departure links** for the tour.
3. Paste a link next to any upcoming date. Leave a date blank to use the tour's link.
4. Select **Save**.

## Settings

**Tracking parameters**

| Setting | What it does | Default |
|---|---|---|
| Add UTM parameters | So the other site's analytics shows the traffic came from your website. Parameters already in a link are kept. | On |
| utm_source | Leave blank to use your website's domain. | Empty (your domain) |
| utm_medium | | referral |
| utm_campaign | `{tour}` becomes the tour's web address name (e.g. `everest-base-camp`), `{option}` the option's name. | `{tour}` |
| Affiliate parameters | Added to every link, e.g. `partner_id=12345&pid=abc` (Viator, GetYourGuide and other partner programmes). | Empty |

**Button**

| Setting | What it does | Default |
|---|---|---|
| Button text | Up to 40 characters. | Check dates & book |
| Mark links as sponsored | Adds `rel="sponsored nofollow"`, which Google asks for on affiliate and paid links. | On |
| Open in a new tab | | On |

## Good to know

- Bookings made on the other site don't appear in Tourtify. Use the click counts and the other site's reports to measure results.
- The **Book on another website** choice only appears in the tour editor while this plugin is on.
- Turning the plugin off means tours linked to another booking site show your own booking form again.

## Related

- [Google Analytics 4](./google-analytics)
- [Tour pricing](/tours/pricing)
