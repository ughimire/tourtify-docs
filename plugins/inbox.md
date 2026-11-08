---
title: Inbox
description: One shared inbox for customer emails, WhatsApp, texts, website chat and enquiries, with assignment, internal notes, saved replies, AI drafts and overdue flags.
---

# Inbox <Badge type="tip" text="Growth+" />

The Inbox brings every customer conversation into one shared place: emails, WhatsApp messages, texts, website chat and enquiries. Each conversation sits next to the customer's bookings and balance. Your team can assign conversations, add internal notes, use saved replies and AI drafts, and see at a glance who is waiting too long for an answer.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Communication
- **Where:** Plugins › Inbox, and **Inbox** at the top of the console menu
:::

## How it works

**What customers see**

- Nothing new when they email you or send an enquiry: they get your answer as a normal reply.
- With "Message us" on, a small chat button on every page of your website. Visitors leave a message there and get your answer by email.
- WhatsApp and text replies arrive on WhatsApp or as a text, from the same number they wrote to.

**What your team sees**

- **Inbox** in the console menu, with a count of conversations that are overdue.
- A list of conversations on the left, the thread in the middle, and the customer's details, enquiry and bookings on the right.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Inbox** and flip its switch on.
3. Select **Configure** to choose which channels come in and how fast you aim to answer, then **Save**.
4. Open **Inbox**, select **Settings**, and copy **Your inbox email address**. Forward your own mailbox to it (Gmail: Settings › Forwarding; Outlook: Rules › Forward) so every customer email lands in the inbox too.

## Settings

**Channels**

| Setting | What it does | Default |
|---|---|---|
| Email | Customers' emails to your inbox address, and their replies to your answers. Forward your own mailbox to that address to catch every email. | On |
| "Message us" on your website | A small chat button on every page. Visitors leave a message here and get your answer by email. | Off |
| Website enquiries | Enquiry, date-request and contact forms start a conversation. They stay on the Enquiries page too. | On |
| WhatsApp | Needs [WhatsApp notifications](./whatsapp-notifications) with your WhatsApp Business number, and the Meta app secret. | On |
| Text messages (SMS) | Needs [SMS notifications](./sms-notifications). Incoming texts: Twilio, or Sparrow SMS with a shortcode and keyword. Replies go out through the same account. | On |

**Replies**

| Setting | What it does | Default |
|---|---|---|
| Answer within | **30 minutes**, **1 hour**, **2 hours**, **4 hours**, **8 hours** or **1 day**. Conversations without a first reply by then are flagged as overdue. | 4 hours |

**SMS from Sparrow SMS (Nepal)**

| Setting | What it does |
|---|---|
| Sparrow shortcode | Sparrow forwards incoming texts only for a shortcode and keyword set up with them. Ask Sparrow SMS for one, then paste the URL shown in the drawer into its incoming-SMS settings. |
| Sparrow keyword | The first word customers text, e.g. TREK. Without a shortcode, customers can't text you through Sparrow: use Twilio for an ordinary two-way number. |
| Automatic text reply | Sparrow texts this back at once (160 characters at most). Leave empty for no automatic reply. |

## Work in the inbox

**Find conversations**

- Views: **Mine**, **Unassigned** and **All**.
- Filter by status (**Open**, **Waiting on customer**, **Closed**), by channel (**Email**, **WhatsApp**, **SMS**, **Website chat**, **Enquiry**), or open **Snoozed** and **Spam**.
- Search by name, email, phone or text.
- Overdue conversations are marked **Reply overdue**. Priorities **Urgent** and **High** are marked too.

**Answer**

- **Reply by** the channel the customer used. Press Ctrl+Enter to send, or **Send and close**.
- **Internal note**: only your team sees notes. Mention what you checked or promised.
- **Saved replies**: answers you give often, with tags filled in for each customer.
- **Draft with AI**: a reply drafted from your tour details and real dates, for you to check before sending. Needs the [AI assistant](./ai-assistant) plugin.
- On WhatsApp, if the customer last wrote more than 24 hours ago, WhatsApp only accepts an approved template until they write again. Choose one under **Template**.

**Organise**

- **Assigned to**: give the conversation to a team member, or leave it **Unassigned**.
- **Priority**: **Urgent**, **High**, **Normal** or **Low**.
- **Snooze** for 3 hours, until tomorrow morning or for a week.
- **Close** (or press e), **Reopen**, **Mark as spam** or **Not spam**.

**Keyboard shortcuts**: j / k for next and previous, r to reply, e to close.

**The customer panel**

The right-hand panel shows the customer, any linked enquiry and their bookings with what is still to pay. From there you can **Send payment link**, **Link to this conversation** or **Unlink** a booking, **Create booking**, or **Create quote** (with [Quotes & proposals](./quotes)).

## Inbox settings

Select **Settings** in the inbox to manage:

- **Your inbox email address**, with **Copy address** and **Get a new address**. A new address stops the current one working at once, so update any forwarding that uses it.
- **Channels and setup**: opens the plugin settings and the setup steps for each channel.
- **Notifications**: **Email me about new messages** (for conversations assigned to you, at most every 10 minutes each) and **Desktop notifications** (while the inbox is open in this browser).
- **Saved replies**: add, edit and delete them.

## Good to know

- The inbox page lists any channel that is on but not connected yet, so you can finish setting it up.
- With the [AI assistant](./ai-assistant) website assistant on, website chat can be answered instantly from your published tours, and handed to your team in the inbox when needed.
- Turning the plugin off: new emails, WhatsApp messages, texts and website messages aren't collected and the inbox is hidden. Conversations so far are kept and come back when you switch it on again.

## Related

- [AI assistant](./ai-assistant)
- [SMS notifications](./sms-notifications)
- [WhatsApp notifications](./whatsapp-notifications)
- [Enquiries](/bookings/enquiries)
- [Customers](/bookings/customers)
