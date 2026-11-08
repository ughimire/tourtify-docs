---
title: Plugins
description: Switch on payments, discounts, the inbox, campaigns, OTA channels, point of sale, accounting sync and 60+ more features from the Plugins page in the Tourtify console.
---

# Plugins

Plugins add features to your business and website. Each one is a self-contained feature, such as deposits, the shared inbox, a regional payment provider or accounting sync. You switch on only what you need, so your console and checkout stay simple.

::: info At a glance
- **Where:** Console › Plugins (at the bottom of the sidebar)
- **Who can switch plugins on or off:** team members with permission to manage plugins (owners and admins by default)
- **What your plan decides:** which plugins, and which parts of a plugin, you can use. Higher plans include everything in lower plans.
:::

## How plugins work

Every plugin has three things you can see in the console:

- **A switch** that turns it on or off for your business.
- **Settings** that open in a drawer on the right side of the screen. Your page stays where it is, so you can check a setting and close the drawer without losing your place.
- **Its own page**, for plugins that need one. A plugin adds its page to the sidebar section it belongs to, never a section of its own: Discounts adds **Sales › Pricing › Discounts**, QR tickets adds **Operations › Scan tickets**, Gift vouchers adds **Finance › Payments › Gift vouchers**. These pages appear only while the plugin is on.

A plugin works only when it is **included in your plan** and **switched on**. You can set it up before you switch it on: settings take effect once it is on.

### Plugins with parts on different plans

Some plugins bundle related features, each with its own switch under **What’s included** in the drawer. For example, **Discounts** includes promo codes and automatic discounts on every plan, and group discounts and dynamic pricing on Growth. The drawer tells you which parts your plan includes; switch off any part you don't use.

| Plugin | Parts |
|---|---|
| [Deposits & instalments](./deposits) | Deposits (all plans), [Instalment plans](./instalments) (Growth+) |
| [Discounts](./discounts) | [Promo codes](./promo-codes) and automatic discounts (all plans), [Group discounts](./group-discounts) and [Dynamic pricing](./dynamic-pricing) (Growth+) |
| [Email automations](./automations) | [Abandoned checkout recovery](./abandoned-checkout) (all plans), your own automations (Growth+) |
| [WhatsApp](./whatsapp-button) | [Chat button](./whatsapp-button) (all plans), [Notifications & templates](./whatsapp-notifications) (Growth+) |
| [Suppliers & contracts](./suppliers) | Contracts, supplier bookings, bills & payables (Growth+), allotments (Scale) |
| [AI assistant](./ai-assistant) | Drafting and the website assistant (all plans, with monthly limits), your own Anthropic key (Scale) |
| [AI app connections (MCP)](./mcp) | Read-only tools (all plans, with monthly limits), write tools with approvals (Growth+, coming soon) |

## Plans

| Badge | Meaning |
|---|---|
| <Badge type="info" text="All plans" /> | Included on Starter, Growth and Scale |
| <Badge type="tip" text="Growth+" /> | Included on Growth and Scale |
| <Badge type="warning" text="Scale" /> | Included on Scale only |

During your free trial you can try every plugin.

Plugins outside your plan still appear in the catalogue with an **Upgrade to …** badge. You can open **Details** to read about the plugin and look at its settings, but you can't switch it on or change anything until you upgrade.

If you move to a lower plan, plugins that are no longer included show **Paused · needs …**. They stop working straight away, but their settings and data are kept. They resume automatically when you upgrade again.

::: tip Beta and granted plugins
Tourtify may give you early access to a plugin in private beta, or include a plugin your plan doesn't normally cover. In the drawer's **About** section, **Plan** then reads "Granted to you by Tourtify".
:::

## Find a plugin

Go to **Plugins** in the console. The page shows how many plugins are active and which plan you are on.

- **Search plugins** filters by name, description or category.
- The filter tabs show **All**, **Installed** (plugins you have switched on) and one tab per category.
- **Recommended for you** suggests useful plugins you haven't switched on yet, such as the payment provider for your currency.
- A banner at the top lists plugins that **need your attention**, for example a payment provider that still needs its account connected, or a plugin whose required fields are empty.

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

1. Go to **Plugins** in the console.
2. Find the plugin and flip its switch on.
3. If the plugin needs setup, its settings drawer opens straight away. Fill in the fields marked <span style="color: var(--vp-c-danger-1)">*</span> and select **Save**.
4. Payment providers and accounting software then need their account connected: the drawer links you to **Settings › Payments & tax › Payments** or the provider's page under **Settings › Integrations & developers**.
5. If the plugin has its own page, select **Open** on its card (or in the drawer) to go there.

## Change a plugin's settings

1. Go to **Plugins**.
2. Select **Configure** on the plugin's card. The settings drawer opens on the right.
3. Change what you need and select **Save**. A message confirms the settings were saved, and the drawer shows when they were last updated.

Secret values such as API keys are stored encrypted. They can be replaced, never shown again.

Some plugins have a **Run test** button at the bottom of the drawer, for example **Send test event** for Google Analytics, Meta Pixel and Webhooks, **Test connection** for WhatsApp, **Send test text** for SMS notifications and **Send test email** for Own email server. Save your changes before you run a test.

The drawer's **About** section shows the plugin's plan, what it requires, which other plugins use it, what happens when you switch it off, and its version, with a link to the provider's own documentation where there is one.

## Turn a plugin off

1. Flip the plugin's switch off, on its card or in its drawer.
2. Confirm. The confirmation tells you exactly what stops and what is kept.

::: info Your data is kept
Switching a plugin off never deletes its data. Promo codes, add-ons, waitlist sign-ups, signed waivers, invoices, delivery logs and settings all stay in place. Switch the plugin back on and everything is where you left it.
:::

## Plugins that depend on others

A few plugins build on another one. **Trekking & expeditions** uses the traveller details you collect (nationality, passport), so it needs **Traveller details**. Others work better together without needing each other, for example the AI website assistant answers chats in the **Inbox**.

- To switch on a plugin with a requirement, switch the required plugin on first.
- To switch off a plugin that others depend on, switch the dependent plugin off first. Otherwise you see "Turn off … first: it needs …".

The drawer's **About** section lists **Requires** and **Used by** for each plugin.

## All plugins

The categories match the filter tabs on the Plugins page.

### Payments

| Plugin | Plan | What it does |
|---|---|---|
| [Deposits & instalments](./deposits) | <Badge type="info" text="All plans" /> | Take a deposit at booking and collect the balance later (Instalment plans: Growth) |
| [Company accounts](./company-accounts) | <Badge type="tip" text="Growth+" /> | Let schools, companies and partner agencies book on account and pay later on terms such as net 30, up to a credit limit you set |
| [Refund approvals](./refund-approvals) | <Badge type="tip" text="Growth+" /> | Refunds above a limit you set wait for a second person to approve them, with a time limit, reminders and a full record of who asked, who approved and why |
| [Pay by bank transfer](./bank-transfer) | <Badge type="info" text="All plans" /> | Let travellers book now and pay by bank transfer |

### Payment providers

| Plugin | Plan | What it does |
|---|---|---|
| [PayPal](./paypal) | <Badge type="info" text="All plans" /> | Let travellers pay with PayPal or card through your own PayPal business account |
| [Razorpay](./razorpay) | <Badge type="info" text="All plans" /> | Accept UPI, cards, net banking and wallets from travellers in India, paid into your own Razorpay account |
| [Khalti](./khalti) | <Badge type="info" text="All plans" /> | Accept Khalti wallet, mobile banking and cards from travellers paying in Nepali rupees, into your own Khalti merchant account |
| [eSewa](./payments-south-asia#esewa) | <Badge type="info" text="All plans" /> | Accept eSewa wallet and bank payments from travellers paying in Nepali rupees, into your own eSewa merchant account |
| [Fonepay](./payments-south-asia#fonepay) | <Badge type="info" text="All plans" /> | Accept mobile banking and card payments through Fonepay from travellers paying in Nepali rupees, into your own Fonepay merchant account |
| [Mollie](./payments-europe-north-america#mollie) | <Badge type="info" text="All plans" /> | Accept cards, iDEAL, Bancontact, SEPA, Klarna and other European payment methods, paid into your own Mollie account |
| [Square](./payments-europe-north-america#square) | <Badge type="info" text="All plans" /> | Accept cards, Apple Pay, Google Pay and Cash App Pay through Square checkout links, paid into your own Square account |
| [Xendit](./payments-asia-pacific#xendit) | <Badge type="info" text="All plans" /> | Accept cards, e-wallets, bank transfers and QR payments from travellers in Indonesia, the Philippines, Thailand, Vietnam and Malaysia, paid into your own Xendit account |
| [Mercado Pago](./payments-latin-america#mercado-pago) | <Badge type="info" text="All plans" /> | Accept cards, Pix, boleto, OXXO, PSE, cash vouchers and the Mercado Pago wallet from travellers in Brazil, Mexico, Argentina, Colombia, Chile, Peru and Uruguay, paid into your own Mercado Pago account |
| [Paystack](./payments-africa#paystack) | <Badge type="info" text="All plans" /> | Accept cards, bank transfer, USSD, mobile money and M-Pesa from travellers in Nigeria, Ghana, South Africa, Kenya and Côte d’Ivoire, paid into your own Paystack account |
| [Flutterwave](./payments-africa#flutterwave) | <Badge type="info" text="All plans" /> | Accept cards, mobile money (M-Pesa, MTN, Airtel), bank transfer and USSD from travellers across Africa, paid into your own Flutterwave account |
| [iyzico](./payments-middle-east-turkey#iyzico) | <Badge type="info" text="All plans" /> | Accept Turkish cards (with instalments), the iyzico wallet and foreign cards in lira, euro, dollars or pounds, paid into your own iyzico account |
| [KOMOJU](./payments-asia-pacific#komoju) | <Badge type="info" text="All plans" /> | Accept cards, PayPay, konbini (convenience-store) payments, Pay-easy, bank transfer, LINE Pay, Merpay, Rakuten Pay and Paidy from travellers in Japan, paid into your own KOMOJU account |
| [PayMongo](./payments-asia-pacific#paymongo) | <Badge type="info" text="All plans" /> | Accept cards, GCash, Maya, GrabPay, QR Ph, online banking and BillEase from travellers in the Philippines, paid into your own PayMongo account |
| [Opn Payments (Omise)](./payments-asia-pacific#opn-payments-omise) | <Badge type="info" text="All plans" /> | Accept cards, PromptPay, TrueMoney, Thai mobile banking, Rabbit LINE Pay, ShopeePay and more from travellers in Thailand, Malaysia and Singapore, paid into your own Opn Payments account |
| [Tap Payments](./payments-middle-east-turkey#tap-payments) | <Badge type="info" text="All plans" /> | Accept cards, mada, KNET, BENEFIT, Apple Pay, STC Pay and buy-now-pay-later (Tabby, Tamara) from travellers in Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, Oman and Egypt, paid into your own Tap account |

### Sales

| Plugin | Plan | What it does |
|---|---|---|
| [Discounts](./discounts) | <Badge type="info" text="All plans" /> | Every discount in one place, shown on your website and applied at checkout (Group discounts: Growth; Dynamic pricing: Growth) |
| [Add-ons & extras](./add-ons-and-extras) | <Badge type="tip" text="Growth+" /> | Sell extras at checkout: airport transfers, gear rental, travel insurance, single-room upgrades |
| [Booking & traveller fees](./booking-fees) | <Badge type="tip" text="Growth+" /> | Add a fee per booking, per traveller or as a percentage, e.g |
| [Waitlist](./waitlist) | <Badge type="tip" text="Growth+" /> | Let travellers join a waitlist for full departures |
| [Gift vouchers](./gift-vouchers) | <Badge type="info" text="All plans" /> | Sell or give gift vouchers with a value |
| [Point of sale](./point-of-sale) | <Badge type="tip" text="Growth+" /> | Sell to walk-ins at the front desk, a kiosk or on the street: today’s departures and merchandise on one touch screen, split payments (cash with change, card reader, wallets, gift vouchers), cash drawers with Z-reports, printed or emailed receipts with the QR ticket, and sales that keep working offline |
| [Rentals, passes & memberships](./rentals-and-passes) | <Badge type="tip" text="Growth+" /> | Rent bikes, kayaks and gear by the hour or day from shared stock, with add-ons, security deposits held on the card, and check-out / check-in with photos |
| [Quotes & proposals](./quotes) | <Badge type="tip" text="Growth+" /> | For tailor-made and private trips: build a day-by-day itinerary from your suppliers’ rates, see your margin as you go, and send a beautiful proposal |
| [External booking links](./external-booking-links) | <Badge type="tip" text="Growth+" /> | For trips you sell elsewhere (Viator, GetYourGuide, a partner or your old system): show the tour on your website and send travellers to that booking page with one button |
| [Hotel rooms](./hotel-booking) | <Badge type="tip" text="Growth+" /> | Add hotel rooms to your tour packages so travellers book accommodation and the tour in one checkout |
| [Travel insurance](./travel-insurance) | <Badge type="tip" text="Growth+" /> | Offer cancellation and travel cover at checkout from a licensed insurer, priced for each trip and traveller |

### Marketing

| Plugin | Plan | What it does |
|---|---|---|
| [Mailchimp & Brevo](./mailchimp-brevo) | <Badge type="tip" text="Growth+" /> | Add every traveller and enquiry to your Mailchimp audience or Brevo list, tagged with the tour they booked or asked about, so your newsletters and win-back campaigns reach the right people |
| [Email automations](./automations) | <Badge type="info" text="All plans" /> | Emails that go out by themselves (Your own automations: Growth) |
| [Email campaigns](./campaigns) | <Badge type="tip" text="Growth+" /> | Send newsletters and offers to your travellers without Mailchimp: a mailing list built from your bookings, enquiries and website sign-ups with a consent record for each person, audience segments, a drag-free block editor with your tours and live prices, scheduling, and reports down to the bookings each campaign brought in |
| [Meta Pixel](./meta-pixel) | <Badge type="info" text="All plans" /> | Measure and optimise Facebook & Instagram ads: tour views, checkouts started, payment info added and bookings, with their value |
| [Google Analytics 4](./google-analytics) | <Badge type="info" text="All plans" /> | Measure visits and bookings with GA4: tour viewed, checkout started, payment method chosen and booking purchased, with its value |

### Operations

| Plugin | Plan | What it does |
|---|---|---|
| [QR tickets & check-in](./qr-tickets) | <Badge type="info" text="All plans" /> | Every confirmed traveller gets a ticket with a QR code |
| [Suppliers & contracts](./suppliers) | <Badge type="tip" text="Growth+" /> | Everything you buy in one place, used by quotes, the trip builder, departures and Costs & profit (Allotments & release dates: Scale) |
| [Self-service changes](./self-service-changes) | <Badge type="tip" text="Growth+" /> | Let travellers move their booking to another date, or cancel it, from their booking page, within the rules you set |
| [Traveller details](./traveller-forms) | <Badge type="tip" text="Growth+" /> | Collect passport, date of birth, dietary needs and emergency contacts after booking, per traveller |
| [Waivers & consent](./waivers) | <Badge type="tip" text="Growth+" /> | Each traveller signs your waiver or terms online before the trip, or on site |
| [Tour guides](./tour-guides) | <Badge type="tip" text="Growth+" /> | Create guide profiles and assign them to departures |
| [Resources & tasks](./resources-and-scheduling) | <Badge type="info" text="All plans" /> | Assign vehicles, boats, equipment and venues to departures without double-booking them |
| [Trekking & expeditions](./trekking) | <Badge type="tip" text="Growth+" /> | Run treks properly: permits and fees per traveller worked out from their nationality, document checks, the permit checklist and agency submission sheet, crew with licences, porter loads and wages, teahouse nights, an emergency plan for the crew, daily check-ins from the trail and an incident and evacuation log |

### Accounting

| Plugin | Plan | What it does |
|---|---|---|
| [Invoices & tax receipts](./invoices) | <Badge type="info" text="All plans" /> | A numbered invoice for every booking, with your legal name and tax ID, emailed to the traveller as a PDF |
| [Costs & profit](./costs-and-profit) | <Badge type="tip" text="Growth+" /> | Record what each departure costs: drivers, hotels, park fees, meals |
| [Xero](./accounting-sync#xero) | <Badge type="tip" text="Growth+" /> | Sends every sale, payment, refund and credit note to Xero as it happens, booked to the accounts and tax rates you choose |
| [Zoho Books](./accounting-sync#zoho-books) | <Badge type="tip" text="Growth+" /> | Sends every sale, payment, refund and credit note to Zoho Books as it happens, booked to the accounts and taxes you choose, in your Zoho data centre (India, EU, US, Australia and more) |
| [Sage Accounting](./accounting-sync#sage-accounting) | <Badge type="tip" text="Growth+" /> | Sends every sale, payment, refund and credit note to Sage Business Cloud Accounting as it happens, booked to the ledger accounts, bank accounts and VAT rates you choose |
| [MYOB](./accounting-sync#myob) | <Badge type="tip" text="Growth+" /> | Sends every sale, payment, refund and credit to MYOB Business or AccountRight as it happens, booked to the accounts and GST codes you choose |
| [QuickBooks Online](./accounting-sync#quickbooks-online) | <Badge type="tip" text="Growth+" /> | Sends every sale, payment, refund and credit memo to QuickBooks Online as it happens, booked to the accounts and tax codes you choose |

### Communication

| Plugin | Plan | What it does |
|---|---|---|
| [Own email server (SMTP)](./own-email-server) | <Badge type="info" text="All plans" /> | Send booking emails from your own address, like bookings@yourbusiness.com, through your email provider (Google Workspace, Microsoft 365, Zoho, Postmark, SendGrid, Mailgun…) |
| [WhatsApp](./whatsapp-button) | <Badge type="info" text="All plans" /> | Everything on WhatsApp in one place (Notifications & templates: Growth) |
| [SMS notifications](./sms-notifications) | <Badge type="tip" text="Growth+" /> | Booking confirmations, trip and balance reminders, cancellations and after-trip review requests by text message, from your own Twilio or Sparrow SMS account, in your own words |
| [Inbox](./inbox) | <Badge type="tip" text="Growth+" /> | Every customer conversation in one shared inbox: emails, WhatsApp messages, texts, website chat and enquiries, next to the customer’s bookings and balance |

### Distribution

| Plugin | Plan | What it does |
|---|---|---|
| [Channel manager (OTAs)](./channel-manager) | <Badge type="tip" text="Growth+" /> | Sell on GetYourGuide, Viator and OCTO resellers such as Klook, Headout and Tiqets from one calendar |
| [Resellers & agents](./agents) | <Badge type="tip" text="Growth+" /> | Give travel agents, hotel concierges and affiliates their own referral link and commission rate |
| [Google Things to do](./google-things-to-do) | <Badge type="info" text="All plans" /> | List your tours in Google Search and Maps (Things to do, and the "Book" button on your Business Profile) |

### Website

| Plugin | Plan | What it does |
|---|---|---|
| [AI assistant](./ai-assistant) | <Badge type="info" text="All plans" /> | Draft replies to enquiries and reviews, and write tour descriptions, highlights and SEO text from your own tour details, in your voice and the traveller’s language; drafts wait for you to check them (Your own Anthropic key: Scale) |
| [White label](./white-label) | <Badge type="warning" text="Scale" /> | Remove every “powered by Tourtify” mention from your website, emails, PDFs and proposals, so travellers only ever see your brand |
| [Currency switcher](./currency-switcher) | <Badge type="tip" text="Growth+" /> | Let travellers pay in their own currency |

### Integrations

| Plugin | Plan | What it does |
|---|---|---|
| [AI app connections (MCP)](./mcp) | <Badge type="info" text="All plans" /> | Connect ChatGPT, Claude, Cursor, VS Code or any MCP app and ask about tours, departures, bookings, balances and sales in plain words, within each person's own permissions |
| [Public API](./public-api) | <Badge type="warning" text="Scale" /> | Connect your own systems: read tours and live availability, price and create bookings, and sync every booking into your CRM, accounting or BI tools |
| [Webhooks](./webhooks) | <Badge type="warning" text="Scale" /> | Send signed booking events to your CRM, accounting or automation tools (Zapier, Make, n8n) |

## Related

- [Plans & billing](/get-started/plans-and-billing)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
- [Tour pricing](/tours/pricing)
