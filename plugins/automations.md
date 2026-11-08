---
title: Email automations
description: Emails that go out by themselves - abandoned checkout recovery on every plan, and your own automated emails on a trigger with conditions and merge tags.
---

# Email automations <Badge type="info" text="All plans" />

Email automations send emails to travellers without anyone pressing send. The plugin has two parts:

- **Abandoned checkout recovery** (all plans): up to three follow-ups to travellers who started a booking but didn't pay, each restoring their cart, with an optional discount on the last one.
- **Your own automations** <Badge type="tip" text="Growth+" />: your own emails on a trigger, such as a welcome when someone books, a checklist before departure, review requests, balance reminders and win-backs, with your timing, tours and merge tags.

::: info At a glance
- **Plan:** Starter, Growth and Scale (your own automations: Growth and Scale)
- **Category:** Marketing
- **Where:** Plugins › Email automations, Sales › Bookings › Abandoned checkouts, and Growth › Marketing › Automations
:::

## How it works

**What the traveller sees**

Ordinary emails from your business, in your branding, at the moment you chose: straight after booking, a few days before departure, the day after the trip, before a balance is due, or some time after an enquiry that never became a booking.

**What your team sees**

- **Sales › Bookings › Abandoned checkouts** shows checkouts that weren't paid and what each recovery reminder brought back.
- **Growth › Marketing › Automations** lists your own automations with how many were sent and failed. Every message sent also shows on the booking's timeline.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Email automations** and flip its switch on.
3. Select **Configure** to set up the recovery reminders, then **Save**.
4. On Growth or Scale, open **Growth › Marketing › Automations** to build your own.

## Abandoned checkout recovery

Recovery reminders are set up in the plugin's settings drawer: up to three reminders, each with its own timing, subject line and message, an optional offer on the last one, and what happens if the date sells out. The full guide, with every setting, is on [Abandoned checkout recovery](./abandoned-checkout).

## Your own automations <Badge type="tip" text="Growth+" />

Open **Growth › Marketing › Automations**. The top of the page shows **Active automations**, **Sent in the last 30 days** and **Failed in the last 30 days**.

### Start from a template

Under **Start from a template** you'll find ready-made messages you can change before switching them on:

| Template | When it goes |
|---|---|
| **Welcome on booking** | A warm hello as soon as they book, with what happens next. |
| **Pre-trip checklist** | Three days before departure: where to meet and what to bring. |
| **Review request** | The day after the trip: thank them and ask for a review. |
| **Balance reminder** | Seven days before the balance is due, with a link to pay. |
| **Win-back after an enquiry** | Thirty days after an enquiry that never turned into a booking. |

Or select **New automation** to build one from scratch.

### Build an automation

**When**

Choose a **Trigger**, and for timed triggers **How long** and the **Unit** (hours or days):

| Trigger | Timing |
|---|---|
| **Booking confirmed** | Sent within a minute of it happening. |
| **Booking cancelled** | Sent within a minute of it happening. |
| **Enquiry received** | Sent within a minute of it happening. |
| **Before departure** | e.g. 3 days before departure. Checked every 10 minutes. |
| **After the trip** | e.g. 1 day after the trip ends. Checked every 10 minutes. |
| **Before the balance is due** | e.g. 7 days before the balance is due. Checked every 10 minutes. |
| **Enquiry with no booking (win-back)** | e.g. 30 days after an enquiry with no booking. Checked every 10 minutes. |

**Who gets it**

Leave everything open to send to every booking. Or narrow it down:

- **Tours**: only bookings for the tours you choose.
- **Booked through**: only bookings from the selected channels (any channel if empty).
- **Minimum travellers**: only bookings with at least this many travellers.
- **Only if the booking is still confirmed**: skips bookings cancelled in the meantime.
- **Only people in this segment**: a segment from **Email campaigns › Segments** (needs the [Email campaigns](./campaigns) plugin).

**Message**

Write the **Subject** and the message. Simple formatting works: `**bold**`, `*italic*`, lists starting with "- " and links. Click a tag to insert it. **Preview** shows the email with sample data from your first tour. **Send test to me** sends it to your own address.

Set it to **Active: sends automatically** or **Paused: saved but not sent**, then **Save automation**.

### Merge tags

| Tag | Fills in |
|---|---|
| `{first_name}` | Traveller's first name |
| `{tour}` | Tour name |
| `{date}` | Departure date |
| `{time}` | Departure time |
| `{reference}` | Booking reference |
| `{manage_url}` | Link to their booking page |
| `{pay_url}` | Link to pay the balance |
| `{balance}` | Balance still to pay |
| `{meeting_point}` | Meeting point |
| `{tour_url}` | Link to the tour on your site |
| `{review_url}` | Link to review their trip |
| `{business}` | Your business name |

### Manage automations

Each automation shows **Active** or **Paused**, which tours it covers, how many were sent and when the last one went. If sends failed, the row shows how many and the last error. From the actions menu you can **Edit**, **Duplicate**, **Pause** or **Switch on**, and **Delete**. Deleting stops anything more being sent; messages already sent stay on each booking's timeline.

## Good to know

- Each booking or enquiry gets each automation once.
- If you limit an automation to a segment and the Email campaigns plugin is switched off, that automation sends to nobody.
- Emails go out through your own mail server if you use [Own email server](./own-email-server).
- Turning the plugin off: recovery reminders and your automated emails stop. Your automations, history and settings are kept.

## Related

- [Abandoned checkout recovery](./abandoned-checkout)
- [Email campaigns](./campaigns)
- [Booking emails](/bookings/emails)
- [Reviews](/bookings/reviews)
- [Own email server](./own-email-server)
