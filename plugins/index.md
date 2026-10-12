---
title: Plugins
description: Add features like deposits, promo codes, QR tickets, payment gateways and webhooks to your Tourtify business. Turn plugins on and off from Console › Plugins.
---

# Plugins

Plugins add features to your business and website. Each one is a self-contained feature, such as deposits, promo codes, QR tickets or a regional payment gateway. You switch on only what you need, so your console and checkout stay simple.

::: info At a glance
- **Where:** Console › Plugins
- **Who can switch plugins on or off:** team members with permission to manage plugins (owners and admins by default)
- **What your plan decides:** which plugins you can use. Higher plans include everything in lower plans.
:::

## How plugins work

Every plugin has three things you can see in the console:

- **A switch** that turns it on or off for your business.
- **Settings** that open in a drawer on the right side of the screen. Your page stays where it is, so you can check a setting and close the drawer without losing your place.
- **Its own page**, for plugins that need one. For example, Promo codes adds Tours › Promo codes, and QR tickets adds Bookings › Scan tickets. These menu items appear only while the plugin is on.

A plugin works only when it is **included in your plan** and **switched on**. Changing a setting while the plugin is off is fine: the settings take effect once you switch it on.

## Plans and entitlement

Each plugin is included from a minimum plan:

| Badge | Meaning |
|---|---|
| <Badge type="info" text="All plans" /> | Included on Starter, Growth and Scale |
| <Badge type="tip" text="Growth+" /> | Included on Growth and Scale |
| <Badge type="warning" text="Scale" /> | Included on Scale only |

Plugins outside your plan still appear in the catalogue with an **Upgrade to …** badge. You can open **Details** to read about the plugin and look at its settings, but you can't switch it on or change anything until you upgrade.

If you move to a lower plan, plugins that are no longer included show **Paused · needs …**. They stop working straight away, but their settings and data are kept. They resume automatically when you upgrade again.

::: tip Beta and comped plugins
Tourtify may give you early access to a plugin in private beta, or include a plugin your plan doesn't normally cover. In the drawer's **About** section, **Plan** then reads "Granted to you by Tourtify".
:::

## Find a plugin

Go to **Console › Plugins**. The page shows how many plugins are active and which plan you are on.

- **Search plugins** filters by name, description or category.
- The filter tabs show **All**, **Installed** (plugins you have switched on) and one tab per category.
- **Recommended for you** suggests up to three useful plugins you haven't switched on yet, such as the payment gateway for your currency.
- A banner at the top lists plugins that **need your attention**, for example a gateway that still needs its account connected, or a plugin whose required fields are empty.

Each plugin card shows a status badge:

| Status | Meaning |
|---|---|
| **Active** | On and working |
| **Off** | Included in your plan but switched off |
| **Needs setup** | On, but required settings are missing or the payment account isn't connected yet |
| **Paused · needs …** | On, but it can't work until something else is on again (a plugin it depends on, or a higher plan) |
| **Upgrade to …** | Not included in your plan |
| **Private beta** | Available by invitation only |

## Turn a plugin on

1. Go to **Console › Plugins**.
2. Find the plugin and flip its switch on.
3. If the plugin needs setup, its settings drawer opens straight away. Fill in the fields marked <span style="color: var(--vp-c-danger-1)">*</span> and select **Save**.
4. If the plugin has its own page, select **Open** on its card (or in the drawer) to go there.

## Change a plugin's settings

1. Go to **Console › Plugins**.
2. Select **Configure** on the plugin's card. The settings drawer opens on the right.
3. Change what you need and select **Save**. A message confirms the settings were saved, and the drawer shows when they were last updated.

Some plugins have a **Run test** button at the bottom of the drawer, for example **Send test event** for Google Analytics, Meta Pixel and Webhooks, **Test connection** for WhatsApp notifications and **Send test email** for Own email server. Save your changes before you run a test.

The drawer's **About** section shows the plugin's plan, what it requires, which other plugins use it, what happens when you switch it off, and its version.

## Turn a plugin off

1. Flip the plugin's switch off, on its card or in its drawer.
2. Confirm. The confirmation tells you exactly what stops and what is kept.

::: info Your data is kept
Switching a plugin off never deletes its data. Promo codes, add-ons, waitlist sign-ups, signed waivers, delivery logs and settings all stay in place. Switch the plugin back on and everything is where you left it.
:::

## Plugins that depend on others

Some plugins build on another plugin. **Instalment plans** splits the balance left after a deposit, so it requires **Deposits & balance payments**.

- To switch on a plugin with a requirement, switch the required plugin on first. Otherwise you see "Enable … first."
- To switch off a plugin that others depend on, switch the dependent plugin off first. Otherwise you see "Disable … first; it depends on this plugin."

The drawer's **About** section lists **Requires** and **Used by** for each plugin.

## All plugins

### Payments

| Plugin | Plan | What it does |
|---|---|---|
| [Deposits & balance payments](./deposits) | <Badge type="info" text="All plans" /> | Take a deposit at booking and collect the balance later |
| [Instalment plans](./instalments) | <Badge type="tip" text="Growth+" /> | Split the balance into scheduled payments |
| [Booking & traveller fees](./booking-fees) | <Badge type="tip" text="Growth+" /> | Add a booking, per-traveller or percentage fee |
| [Currency switcher](./currency-switcher) | <Badge type="tip" text="Growth+" /> | Sell in several currencies with your own prices |
| [PayPal](./paypal) | <Badge type="info" text="All plans" /> | Accept PayPal and card payments |
| [Razorpay](./razorpay) | <Badge type="info" text="All plans" /> | Accept UPI, cards, net banking and wallets in India |
| [Khalti](./khalti) | <Badge type="info" text="All plans" /> | Accept Khalti wallet, mobile banking and cards in Nepal |

### Sales

| Plugin | Plan | What it does |
|---|---|---|
| [Add-ons & extras](./add-ons-and-extras) | <Badge type="tip" text="Growth+" /> | Sell transfers, gear, insurance and upgrades at checkout |
| [Group discounts](./group-discounts) | <Badge type="tip" text="Growth+" /> | Automatic discounts for bigger groups |
| [Dynamic pricing](./dynamic-pricing) | <Badge type="tip" text="Growth+" /> | Early-bird, last-minute, occupancy and seasonal prices |
| [Waitlist](./waitlist) | <Badge type="tip" text="Growth+" /> | Keep selling once a date is full |
| [Hotel booking](./hotel-booking) | <Badge type="tip" text="Growth+" /> | Add hotel rooms to your tour packages |
| [External booking links](./external-booking-links) | <Badge type="tip" text="Growth+" /> | Send travellers to another booking site for some tours |

### Marketing

| Plugin | Plan | What it does |
|---|---|---|
| [Promo codes](./promo-codes) | <Badge type="info" text="All plans" /> | Discount codes, single-use batches and promo links |
| [Abandoned checkout recovery](./abandoned-checkout) | <Badge type="info" text="All plans" /> | Win back travellers who left checkout without paying |
| [Google Analytics 4](./google-analytics) | <Badge type="info" text="All plans" /> | Measure visits and bookings in GA4 |
| [Meta Pixel](./meta-pixel) | <Badge type="info" text="All plans" /> | Measure Facebook and Instagram ads |

### Operations

| Plugin | Plan | What it does |
|---|---|---|
| [QR tickets & check-in](./qr-tickets) | <Badge type="info" text="All plans" /> | QR tickets for every traveller, scanned at the meeting point |
| [Traveller details forms](./traveller-forms) | <Badge type="tip" text="Growth+" /> | Collect passport, dietary and emergency details after booking |
| [Waivers & consent](./waivers) | <Badge type="tip" text="Growth+" /> | Online and on-site waiver signing with tamper-evident records |
| [Tour guides](./tour-guides) | <Badge type="tip" text="Growth+" /> | Guide profiles, assignments and guide emails |

### Communication

| Plugin | Plan | What it does |
|---|---|---|
| [WhatsApp chat button](./whatsapp-button) | <Badge type="info" text="All plans" /> | A floating WhatsApp button on your website |
| [WhatsApp notifications](./whatsapp-notifications) | <Badge type="tip" text="Growth+" /> | Booking messages from your own WhatsApp Business number |
| [Own email server (SMTP)](./own-email-server) | <Badge type="tip" text="Growth+" /> | Send booking emails from your own address |

### Integrations

| Plugin | Plan | What it does |
|---|---|---|
| [Webhooks](./webhooks) | <Badge type="warning" text="Scale" /> | Send signed booking events to your CRM or automation tools |

## Related

- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
- [Tour pricing](/tours/pricing)
