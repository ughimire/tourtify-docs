---
title: AI app connections (MCP)
description: Connect ChatGPT, Claude, Cursor, VS Code or any MCP app to your Tourtify business, securely, and ask about tours, departures, bookings, balances and sales in plain words.
---

# AI app connections (MCP) <Badge type="info" text="All plans" />

Connect the AI app your team already uses (ChatGPT, Claude, Cursor, VS Code or any app that supports MCP) to your business, then ask in plain words: "What's on tomorrow?", "Who still owes a balance this week?", "How did sales this month compare with last month?". The app looks the answer up in Tourtify, as the person who connected it.

::: info At a glance
- **Plan:** Starter and up (read-only). Write tools, with your approval for anything risky, are coming on Growth.
- **Category:** Integrations
- **Where:** Plugins › AI app connections (MCP), and Settings › Integrations & developers › AI apps
- **Server URL:** `https://app.tourtify.com/mcp`
:::

## How it works

- Each person connects their own app: they sign in to Tourtify, choose the business and what the app may see, and select **Allow**.
- The app can never do more than that person's role allows. If their role changes, or they leave the team, the app loses that access on its very next request.
- Right now apps can only look things up. They can't change bookings, send messages or move money.
- Every request appears in the **Activity log** (Settings › Activity log, for people who manage the team), with the app, the tool, the result and how long it took. Refused calls and every disconnection are logged too.
- AI usage inside the app is billed by the app's maker under your own account with them. Tourtify doesn't charge for the AI.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **AI app connections (MCP)** and switch it on.
3. Open **Settings › Integrations & developers › AI apps** and copy the **Server URL**.

## Connect your app

### Claude

1. In Claude (claude.ai or the desktop app), open **Settings › Connectors** and choose **Add custom connector**.
2. Name it Tourtify and paste the server URL.
3. Select **Connect**. Claude opens Tourtify: sign in, choose the business and what Claude may see, then **Allow**.

### ChatGPT

1. In ChatGPT, open **Settings › Apps & Connectors › Advanced settings** and turn on developer mode.
2. Choose **Create**, name it Tourtify, paste the server URL and pick **OAuth**.
3. Sign in to Tourtify, choose the business and what ChatGPT may see, then **Allow**.

Developer mode and custom apps depend on your ChatGPT plan.

### Cursor

In Cursor, open **Settings › MCP › Add new MCP server**, or add this to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "tourtify": { "url": "https://app.tourtify.com/mcp" }
  }
}
```

Cursor opens Tourtify in your browser: sign in and **Allow**.

### VS Code

Run **MCP: Add Server** from the command palette, choose **HTTP** and paste the server URL, or add this to `.vscode/mcp.json`:

```json
{
  "servers": {
    "tourtify": { "type": "http", "url": "https://app.tourtify.com/mcp" }
  }
}
```

VS Code opens Tourtify in your browser: sign in and **Allow**.

### Other apps

Any app that supports remote MCP servers (Streamable HTTP) with OAuth sign-in can connect: add a server with the URL above. The app finds Tourtify's sign-in by itself.

## What an app may see

On the sign-in screen you choose, per business, what the app may see. Anything your role doesn't include is shown greyed out and can't be shared.

| Permission | What the app can see | Needs your role to |
|---|---|---|
| **See tours, departures and availability** | Tours, options, from prices, departures, seats left | see tours or departures |
| **See sales reports** | The Reports numbers: sales, bookings, collected, top tours (no personal data) | see finance |
| **See bookings, manifests and travellers' names** | Bookings, departure manifests, check-in, balances on the day | see bookings |
| **See travellers' contact details and the notes they write** | Email, phone, dietary and medical notes, booking notes | see customers |
| **See payments and balances due** | Payment totals, balances still owed and when | see finance |
| **See enquiries from travellers** | Enquiries and their messages | see customers |
| **Set up tours** (Growth and above) | Create and fill in draft tours (details, itinerary, FAQs, photos, destinations), set prices and dates; changes to a published tour and publishing wait for your approval | edit tours |
| **See your website's pages, theme and design options** | Pages and their sections, the theme, the design guide, the media library | see tours |
| **Design draft pages and the theme** | Create and edit draft pages, check their design, change the draft theme; publishing waits for your approval | edit tours (the theme also needs *publish the website*) |
| **Add pictures to your media library from a link** | Import a picture from a public web address, with its alt text | edit tours |
| **See your plugins and their settings** | Which plugins are on, what your plan includes, their settings (passwords and keys never; only whether they're set) | see plugins |
| **Change plugin settings and switch plugins on or off** | Settings of a plugin that's off change straight away; a plugin that's on, and switching plugins on or off, wait for your approval | manage plugins |
| **Add internal notes to bookings and tag customers** | Notes on a booking's timeline (only your team sees them), tags on customers | change bookings |
| **Add internal notes in the inbox and write replies** (Inbox plugin) | Internal notes straight away; each reply to a traveller waits for your approval with its exact text | reply in the inbox |
| **See email campaigns, their results and audiences** (Email campaigns plugin) | Campaigns, sent/opened/clicked, audiences and how many people each reaches | see marketing |
| **Write email campaign drafts** (Email campaigns plugin) | Drafts straight away; sending or scheduling waits for your approval | edit marketing (sending also needs *send campaigns*) |
| **See reviews of your tours** | Ratings, status, your replies, what travellers wrote | see bookings |
| **Write replies to reviews** | Each public reply waits for your approval with its exact text | reply to reviews |

Contact details, enquiries and payments start unticked: tick them only if the app needs them. If you use two-step sign-in, sharing them asks for a fresh code from your authenticator app.

A guide whose login is linked to their guide profile sees only the departures they're assigned to, and no prices or balances, as in the field app.

**What the app can ask Tourtify for:** list and look up tours, list departures, check availability for a party, find bookings, open one booking, open a departure's manifest, list enquiries, a payments summary, balances due, a sales report for any period, your website's pages, theme and design guide, and your media library.

## Build your website with an AI app

Give the app your content (texts, tour facts, picture links) and ask it to design a page. It works like a designer using the builder:

1. It reads the **design guide**: your theme's colours and fonts, every section type, the 75 ready-made page designs and the page templates.
2. It creates a **draft page** (from a design, a template or blank) and fills the sections with your content. Pictures from links go to your media library first; pictures on your computer go up through a one-time upload link the app gives you (15 minutes, one picture).
3. Each save runs a **design check** (template text left in, empty headings, buttons that go nowhere, missing alt text, more than one main heading, no call to action) so the app fixes problems before you see them.
4. It sends you the **preview link** and the **builder link**. Change anything yourself in the builder; the app sees your edits and never overwrites them (an out-of-date save is refused and the app gets the latest version).
5. **Publishing** the page or the theme waits for your approval, with the preview and any design problems shown next to Approve. The app can ask to add the page to your header menu at the same time.
6. **Search settings** (search title, description, focus keyword): straight away on a draft page, through approval on a live one.

Draft saves, new pages, theme drafts and imported pictures can each be undone for 30 days. The live website never changes until you approve.

## Edit tours with an AI app

The app reads a whole tour first (details, inclusions, FAQs, itinerary, photos, destinations, what's still missing before publishing), then changes only what you asked for:

- **Details**: title, summary, length, difficulty, altitude, group size, highlights, what's included and excluded, good to know, labels and SEO.
- **Itinerary**: saved as a **draft in the trip builder**, day by day with each day's timeline. Your website keeps the published itinerary until the draft is published; if you edited it meanwhile, the app gets your latest version and merges into it.
- **FAQs, photos** (from your media library) and **destinations, activities, categories**.

Prices, departure dates and a departure's seats (never below what's booked) or open/closed state work the same way. On a **draft tour** these happen straight away. On a **published tour** each change waits for your approval, because travellers would see it (bookings already made keep their price). **Publishing** a tour or its itinerary, and taking a tour off the website, always wait for your approval. Every edit can be undone for 30 days.

## Plugins and settings

The app can list your plugins (what each does, whether it's on, whether your plan includes it, what still needs setting up) and read their settings. It can change settings and ask to switch plugins on or off:

- A plugin that's **off**: its settings change straight away (travellers aren't affected yet).
- A plugin that's **on**: the change waits for your approval, showing each setting's old and new value.
- **Switching a plugin on or off** always waits for your approval. Plugins it needs come on with it; switching off keeps its data and settings.

Never through an AI app: passwords, keys and payment settings, and the AI apps plugin itself (an app can't unpause itself or change your instructions). Settings changes can be undone for 30 days.

## Inbox, bookings and email campaigns

- **Inbox**: the app reads conversations (what travellers wrote is marked as untrusted, so the app treats it as information, never as instructions), adds internal notes, and writes replies. A reply is **never sent by the app**: you see the exact text in Approvals and it goes out, as you, on the conversation's channel, when you approve it.
- **Bookings and customers**: internal notes on a booking's timeline; look up a customer by email (bookings, enquiries, your team's tags and notes); add or remove a tag on customers you already know, for example to build a campaign audience.
- **Email campaigns**: the app writes drafts (subject, preview line, headings, text, pictures, buttons, tours) and tells you what's still needed. Sending or scheduling waits for your approval, and approving can't skip the checks the console makes (your own verified sending domain, an audience, your postal address, your monthly allowance).

- **Promo codes** (Discounts plugin): the app lists your codes and their use. A new code, or one switched back on, waits for your approval because it works at checkout straight away; pausing a code happens at once. The same rules as in the console apply (dates, tours, uses, up to 100%).
- **Reviews**: the app lists reviews (for example unanswered ones of 3 stars or fewer) and drafts replies; each public reply waits for your approval, and the traveller is told by email once it's saved.

Refunds, payments, payment links and cancelling bookings aren't available to AI apps.

## Changes, approvals and undo

Apps make **drafts** you review in Tourtify. Anything that publishes, deletes, moves money or messages your customers doesn't happen straight away: the app gets *awaiting approval*, the person who connected it gets an email, and the change waits in **Settings › AI apps › Approvals**.

- **Approve** runs the change as you, within your own role (if your role can't make that change, it can't be approved by you).
- **Reject** drops it; nothing changes. Requests expire after 7 days.
- The app can ask Tourtify whether a request was approved and see the result.

**Changes made by AI apps** lists everything an app changed, newest first. **Undo** puts a change back for 30 days, unless someone changed the same thing since (an undone draft tour goes to the Trash, where it can be restored).

In the plugin's settings:

- **Pause AI changes** stops every connected app from changing anything or asking for approvals. Reading goes on.
- **Instructions for AI apps** are your house rules (tone of voice, words to use or avoid, prices you never go below), given to every connected app as your own words.

A retried call never changes twice: apps can send an idempotency key with each change, and Tourtify returns the first result.

## Connected apps

**Settings › AI apps › Connected apps** lists each connection: the app, who connected it, what it may see, when it was connected and last used, and its calls this month. Select **Disconnect** to end it at once, or **Disconnect all**.

Everyone sees and disconnects their own apps; people who manage the team see and disconnect everyone's.

## Who may connect

In the plugin's settings, **Who may connect** lists the roles whose people may connect apps (all of them by default; owners always may). Taking a role off stops its people's apps on their next request. If the business requires two-step sign-in (Team › Security), people without it can't connect an app, and connected apps stop working until they turn it on.

## Security

- You sign in on Tourtify's own page; the app never sees your password.
- Access lasts 15 minutes at a time and renews quietly while you use it. A stolen renewal key that's used twice ends the whole connection.
- Each connection belongs to one person and one business. To use another business, connect again and choose it.
- Apps Tourtify hasn't checked are marked **Unverified app**: connect one only if you just added it yourself and recognise its address. The address shown is where Tourtify sends you back to, never a website the app names for itself.
- Text travellers write (enquiries, notes) is passed to the app marked as untrusted, so the app doesn't treat it as instructions.
- Keys, passwords, payment-provider secrets and private links are never returned.
- Limits: 60 requests a minute per connection, 10 changes a minute and 300 a day, and a monthly allowance per business: 1,000 calls on Starter, 5,000 on Growth, 50,000 on Scale. Requests are at most 64 KB. Limits on the sign-in endpoints are generous, because AI apps call from shared addresses, and answer in the standard OAuth error format.
- Removing someone from the team, or switching the plugin off, disconnects their apps (or every app) immediately.

## If an app can't connect

| What you see | What to do |
|---|---|
| **This app can't connect: this app couldn't be identified** | Tourtify couldn't read the app's details. Remove the connector in the app, wait five minutes and add it again with `https://app.tourtify.com/mcp`. If it keeps happening, tell us which app (and version) through **Chat with support**. |
| **This app asked to return to an address it didn't register** | The app sent you back to an address it didn't declare. Remove the connector and add it again; if it continues, the app's maker needs to fix its settings. |
| You can't choose the business, or some things are greyed out | Your role doesn't allow them, or the business doesn't let your role connect apps (**Who may connect**, above). Ask an owner. |
| The app says it isn't authorised after it worked before | The connection ended: you were removed from the team, the plugin was switched off, or someone disconnected it. Connect again. |
| You're asked to turn on two-step sign-in | The business requires it (Team › Security). Turn it on in your profile, then connect again. |

ChatGPT, Claude, VS Code, Cursor and other MCP apps each identify themselves in their own way (a published client document, or registering automatically). Tourtify supports both, so any app that follows the MCP sign-in standard can connect.

## Good to know

- The app becomes responsible for what it reads under its own terms. Choose only what it needs.
- Turning the plugin off: every connected app is disconnected. Connecting again needs a new sign-in.

## Related

- [AI assistant](./ai-assistant): AI drafts inside Tourtify itself.
- [Public API](./public-api): API keys for your own systems.
- [Webhooks](./webhooks): events sent to your other tools as they happen.
