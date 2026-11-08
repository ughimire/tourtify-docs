---
title: SMS notifications
description: Send booking confirmations, trip and balance reminders, cancellations and review requests by text message from your own Twilio or Sparrow SMS account.
---

# SMS notifications <Badge type="tip" text="Growth+" />

SMS notifications sends booking texts to your travellers from your own Twilio or Sparrow SMS account, in your own words: booking confirmations, trip and balance reminders, cancellations and after-trip review requests. Use Twilio worldwide, or Sparrow SMS in Nepal.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Communication
- **Where:** Plugins › SMS notifications
:::

## How it works

- When a booking event happens, the traveller gets a short text at the mobile number they gave, from your sender.
- Texts are booking updates only, never marketing.
- You choose which texts go out and write each one with tags such as `{tour}` and `{date}`.
- The plugin card shows the last 7 days: how many texts were sent (and how many SMS parts), failed and skipped.

## Turn it on

1. Create an account with Twilio or Sparrow SMS and get your sender approved.
2. Go to **Plugins** in the console.
3. Find **SMS notifications** and flip its switch on.
4. Select **Configure**, choose your provider and enter your details.
5. Choose the texts to send and edit their wording, then **Save**.
6. Select **Send test text** to send a short text to your business phone (Settings › Business details) with these settings.

## Settings

**Connection**

| Setting | What it does |
|---|---|
| SMS provider | **Twilio (worldwide)** or **Sparrow SMS (Nepal)**. |
| Twilio Account SID | Twilio Console › Account info. Not needed for Sparrow SMS. |
| Auth token | Twilio: the Auth token. Sparrow SMS: your API token. |
| Sender | Twilio: your number (+15551234567) or a Messaging Service SID (MG…). Sparrow SMS: your approved sender identity. |

**Texts**

**Texts to send** picks which of these go out. By default, **Booking confirmed** and **Trip reminder** are on.

| Text | Default wording |
|---|---|
| Booking confirmed | {business}: your booking {reference} for {tour} on {date} is confirmed. Details: {manage_url} |
| Trip reminder | {business}: see you for {tour} on {date} {time}. Meeting point: {meeting_point}. Your booking: {manage_url} |
| Balance reminder | {business}: {balance} is still to pay for {tour} on {date}. Pay securely: {pay_url} |
| Review request (after the trip) | {business}: thank you for joining {tour}! How was it? A quick review helps us a lot: {review_url} |
| Booking cancelled | {business}: your booking {reference} for {tour} on {date} has been cancelled. Questions? Reply or call us. |

Tags you can use: `{first_name}`, `{tour}`, `{date}`, `{time}`, `{reference}`, `{manage_url}`, `{pay_url}`, `{balance}`, `{meeting_point}`, `{tour_url}`, `{review_url}`, `{business}`.

## Good to know

- Keep texts short: 160 characters is one SMS (70 with non-Latin letters). Longer texts are sent in several parts, and your provider charges per part.
- Texts go only to travellers who gave a mobile number with its country code.
- Your provider bills you directly for the texts.
- With the [Inbox](./inbox) plugin, customers' replies and incoming texts arrive in the inbox, and you answer through the same account. For Sparrow SMS this needs a shortcode and keyword.
- Turning the plugin off: texts stop going out. Your provider details, messages and send log are kept.

## Related

- [Inbox](./inbox)
- [WhatsApp notifications](./whatsapp-notifications)
- [Booking emails](/bookings/emails)
