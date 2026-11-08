---
title: Email campaigns
description: Send newsletters and offers from Tourtify with a consented mailing list, segments, a block editor with live tour prices, scheduling and booking reports.
---

# Email campaigns <Badge type="tip" text="Growth+" />

Email campaigns lets you send newsletters and offers to your travellers without a separate tool such as Mailchimp. Your mailing list is built from your bookings, enquiries and website sign-ups, with a consent record for each person. You write campaigns in a block editor with your tours and live prices, send or schedule them, and see the bookings each campaign brought in.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Marketing
- **Where:** Plugins › Email campaigns, and Growth › Marketing › Email campaigns, Mailing list and Segments
:::

## How it works

**What the traveller sees**

- A newsletter sign-up box at checkout and on your enquiry and sign-up forms, plus the newsletter block or footer widget if you add it to your website.
- With double opt-in on, an email with a confirmation link. They're only added once they click it.
- Your campaigns, in your branding and in their language when you've written a version for it, with an unsubscribe link.

**What your team sees**

- **Email campaigns**: your campaigns, subscriber numbers, open and click rates over 90 days, and this month's sending allowance.
- **Mailing list**: everyone who booked, sent an enquiry or signed up, with each person's consent record.
- **Segments**: saved groups of people to send a campaign to.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Email campaigns** and flip its switch on.
3. Select **Configure** to set up sign-ups, sending and tracking, then **Save**.
4. Add a sign-up form to your website: the newsletter block or the footer widget.

## Settings

**Sign-ups**

| Setting | What it does | Default |
|---|---|---|
| Ask new subscribers to confirm by email (double opt-in) | Recommended, and required in some countries (e.g. Germany). People who sign up on your website get an email with a confirmation link and are only added once they click it. | On |
| Sign-up checkbox wording | Shown next to the newsletter box at checkout and on your enquiry and sign-up forms. Kept with each person's consent record. | |

**Sending**

| Setting | What it does | Default |
|---|---|---|
| Postal address in the email footer | Anti-spam laws (CAN-SPAM, CASL) require a postal address in marketing emails. Leave empty to use the address in Settings › Business details. | Empty |
| Emails sent per minute | Slower sending is kinder to your own mail server's limits and to new sending domains. 120 a minute sends 5,000 emails in about 40 minutes. | 120 |

**Tracking**

| Setting | What it does | Default |
|---|---|---|
| Track opens | Adds an invisible image. Apple Mail and some privacy tools load it automatically, so open rates are an estimate. | On |
| Track link clicks | Counts clicks on the links in your campaigns. | On |
| Count bookings made within this many days of a campaign | A booking by a recipient within this window is credited to the most recent campaign they received. | 7 |

## Your mailing list

Open **Growth › Marketing › Mailing list**. Only subscribed people receive campaigns. Everyone else is on the list as a customer or enquirer.

- **Add customers & enquiries** brings in the people who booked or asked about a trip. They join as "not subscribed" and only get campaigns once they sign up.
- **Add contact** adds one person. Tick **They agreed to receive our emails** only if this person asked for your newsletter (in person, by email or on a form). Your name is kept with their consent record.
- **Import CSV** takes a CSV with an email column. Name (or first and last name) and language are used when present. Exports from Mailchimp, Brevo and Klaviyo work as they are. Tick **These people agreed to receive our emails** only for a list of subscribers. Anyone who unsubscribed here stays unsubscribed.

Each contact shows where they came from (**Customer**, **Checkout**, **Enquiry**, **Newsletter sign-up**, **Added by your team** or **Imported**) and a **Consent record**: **Agreed through**, **Agreed on**, **Confirmed by email** and the **Wording they agreed to**. You can **Unsubscribe** someone (only they can subscribe again, from your website) or **Remove** them from the list.

## Segments

Open **Growth › Marketing › Segments** and select **New segment**. A segment picks who gets a campaign: past travellers of a tour, repeat customers, big spenders, people who enquired but never booked.

Add rules and choose whether people must match **all rules** or **any rule**. Rules include **Booked a tour**, **Booked a trip to a destination**, **Booked an activity**, **Travelled or travels between**, **Last trip**, **Number of bookings**, **Total spent**, **Country**, **Language**, **Customer tags**, **Has an enquiry that is** and **Signed up through**. **Preview** shows how many subscribed people match.

Segments are also used by [Email automations](./automations) to limit who gets an automated email.

## Write and send a campaign

1. Open **Growth › Marketing › Email campaigns** and select **New campaign**.
2. Give it a name (only your team sees it) and choose who to **Send to**: all subscribers or a segment.
3. Write the **Subject line** and **Preview text** (shown after the subject in most inboxes).
4. Build the email from blocks: **Heading**, **Text**, **Image**, **Button**, **Tours** and **Divider**. A Tours block shows up to 6 published tours as cards with their photo and current "from" price. Personalise text with tags such as `{first_name}`.
5. Add language versions if you like. Each person gets the version in their language, or the main version.
6. Preview it on **Desktop** and **Mobile**, and **Send a test** to yourself. The test uses sample data and no tracking.
7. Select **Send now**, or **Schedule** it for a date and time in your business's timezone.

## Reports

Each campaign moves through **Draft**, **Scheduled**, **Sending**, **Paused**, **Sent** or **Cancelled**. While it sends you can **Pause**, **Resume** or **Cancel** it.

**View report** shows how many were sent, opens (an estimate), clicks, bounces and spam reports, the **Bookings** made within your counting window and their **Revenue**, clicks per link, and every recipient with their status (for example **Delivered**, **Opened**, **Clicked**, **Bounced**, **Unsubscribed**).

## Send from your own domain

Campaigns always come from **your own domain**, never from Tourtify's: your newsletter builds your reputation, inboxes see mail signed as yours, and nobody else's sending can affect it. Before your first campaign, either verify your domain or connect your own email server.

**Verify your domain** (about 10 minutes):

1. Open **Marketing › Email campaigns** and find **Sending domain**.
2. Enter your domain (for example *everesttreks.com*) and the address before the @ (for example *news*), then select **Add domain**.
3. Tourtify shows a few DNS records: the sending service's, plus a `_tourtify` TXT record that proves the domain is yours (and no one else's) on Tourtify.
4. Sign in where your domain's DNS is managed (usually where you bought the domain, or your website host: Cloudflare, GoDaddy, Namecheap, Squarespace, Hostinger…), open the DNS settings and add each record:
   - pick the same **Type** and copy the **Name** and **Value** exactly; leave TTL on Auto;
   - if your DNS provider adds your domain to the name by itself, enter only the part before your domain;
   - on Cloudflare, set Proxy status to **DNS only** (grey cloud) for CNAME records;
   - don't change or delete the records you already have; a DMARC record, when shown, is optional (only if you have none).
   Someone else manages your website? Select **Copy all records to send them** and send them the list.
5. Back in Tourtify, select **Check now**. Most changes show within minutes, some take a few hours; Tourtify keeps checking by itself for a week.

**What happens once it's verified**

- Campaigns, Email automations and abandoned-checkout reminders come from your address (for example *news@everesttreks.com*) with your business name. Change the sender name or the part before the @ any time.
- Replies go to your contact email.
- Mail is signed for your domain, so inboxes trust it more, and your sending reputation is yours alone.
- Booking emails (confirmations, tickets, reminders) don't change.
- Tourtify checks the records every day. If they go missing for a few hours, campaigns pause and the owners get an email; they continue once the records are back.
- Start with a smaller segment for your first campaigns: inboxes learn to trust a new sender over a few weeks.

Free email domains (Gmail, Yahoo, Outlook…) can't be used: their own rules reject mail sent from them by other services.

**Or use your own email server:** connect [Own email server](./own-email-server) (your own SMTP, Postmark, Mailgun, Amazon SES or SendGrid). Campaigns then go through it from your address, with no monthly limit. Make sure the domain has SPF, DKIM and DMARC set up with that service.



## Good to know

- Campaign emails a month: 10,000 on Growth and 50,000 on Scale. The Email campaigns page shows what you've used and when it renews. When the allowance runs out, sending pauses and can be resumed after it renews.
- Sending through your own mail server with [Own email server](./own-email-server) has no monthly limit.
- Addresses that bounce or report spam are taken off your list automatically when Tourtify sends for you. If you send through your own Postmark, Mailgun, Amazon SES or SendGrid account, add the bounce and complaint webhook link shown on the Email campaigns page to that account.
- Travellers booked through OTA channels are not added to your campaign audience. See [Channel manager](./channel-manager).
- Turning the plugin off: campaigns can't be sent and the newsletter sign-up leaves your website. Campaigns, subscribers and reports are kept.

## Related

- [Email automations](./automations)
- [Mailchimp & Brevo](./mailchimp-brevo)
- [Own email server](./own-email-server)
- [Customers](/bookings/customers)
- [Cookie consent and tracking](/website/cookie-consent-and-tracking)
