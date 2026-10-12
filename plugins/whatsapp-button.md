---
title: WhatsApp chat button
description: Add a floating WhatsApp button to your website that opens a chat with the tour already mentioned, with office hours and click tracking.
---

# WhatsApp chat button <Badge type="info" text="All plans" />

The WhatsApp chat button adds a floating button to your website that opens a WhatsApp chat with you. On tour pages, the message already mentions the tour and its link, so you know what the visitor is looking at. You can set office hours with an away message, and clicks are tracked in your analytics.

::: info At a glance
- **Plan:** All plans
- **Category:** Communication
- **Where:** Console › Plugins › WhatsApp chat button
:::

## How it works

**What the visitor sees**

- A button in the bottom corner of your website, with your button text on larger screens.
- Tapping it opens WhatsApp (app or web) with a chat to your number and a pre-filled message.
- On tour pages the message includes the tour's name and link, e.g. "Hi! I'd like to ask about Everest Base Camp Trek: https://…".
- Outside office hours (if set), the button shows your away message, or hides.

**What you see**

A WhatsApp message from the visitor, starting with the pre-filled text. With [Google Analytics 4](./google-analytics) or [Meta Pixel](./meta-pixel) on, each click is recorded as a contact event for visitors who accepted cookies.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **WhatsApp chat button** and flip its switch on. The settings drawer opens.
3. Enter your **WhatsApp number** in international format, digits only, e.g. `9779801234567`.
4. Review the messages, look and pages, then select **Save**.

When you switch the plugin on, the time zone is set to your business's time zone.

## Settings

**Chat**

| Setting | What it does | Default |
|---|---|---|
| WhatsApp number | Required. International format, digits only, e.g. 9779801234567. | Empty |
| Pre-filled message | What the visitor's message starts with on most pages. Up to 300 characters. | Hi! I'd like to ask about a tour. |
| Pre-filled message on tour pages | `{tour}` becomes the tour's name and `{url}` the page's link. | Hi! I'd like to ask about `{tour}`: `{url}` |

**Look**

| Setting | What it does | Default |
|---|---|---|
| Button text | Shown next to the icon on larger screens. Leave empty for the icon only. Up to 30 characters. | Chat with us |
| Position | **Bottom right** or **Bottom left**. | Bottom right |
| Colour | A hex colour, e.g. `#25D366` (WhatsApp green) or your brand colour. | #25D366 |

**Where it shows**

| Setting | What it does | Default |
|---|---|---|
| Show on | Any of: Home page; Tour lists, categories and destinations; Tour pages; Blog; Other pages (about, contact…); Booking, payment and thank-you pages. | All except booking pages |

**Office hours**

| Setting | What it does | Default |
|---|---|---|
| Use office hours | Outside these hours the button shows your away message (visitors can still leave a message). | Off |
| Open on | The days you're open. | Monday to Saturday |
| Opens at | 24-hour time, e.g. 09:00. | 09:00 |
| Closes at | 24-hour time, e.g. 18:00. Earlier than "opens" means overnight. | 18:00 |
| Time zone | IANA name, e.g. `Asia/Kathmandu`. | Your business's time zone |
| Away message | `{opens}` becomes your next opening time. Up to 200 characters. | We're away right now. Leave a message and we'll reply from `{opens}`. |
| Hide the button outside office hours | Hides the button completely instead of showing the away message. | Off |

With office hours on, pick at least one day, use different opening and closing times, and set a time zone.

::: tip Keep checkout focused
Leaving the button off booking pages keeps the payment step distraction-free. Travellers can still reach you from every other page.
:::

## Good to know

- The button is separate from [WhatsApp notifications](./whatsapp-notifications). The button lets visitors message you; notifications send booking messages to travellers.
- Turning the plugin off removes the chat button from your website.

## Related

- [WhatsApp notifications](./whatsapp-notifications)
- [Google Analytics 4](./google-analytics)
- [Meta Pixel](./meta-pixel)
