---
title: Own email server (SMTP)
description: Send booking emails from your own address through Google Workspace, Microsoft 365, Zoho, Postmark, SendGrid or Mailgun, with DNS checks and a log.
---

# Own email server (SMTP) <Badge type="tip" text="Growth+" />

Own email server sends your booking emails from your own address, like `bookings@yourbusiness.com`, through your email provider. Travellers see your domain, replies come straight to you, and deliverability improves when your domain is set up correctly. Tourtify checks your domain's SPF, DKIM and DMARC records and keeps a log of every email.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Communication
- **Where:** Console › Plugins › Own email server (SMTP), and Settings › Travellers › Own email server
:::

## How it works

- Your business's emails to travellers (confirmations, reminders and so on) go out through your provider, from your address.
- You can send through an SMTP server (Google Workspace, Microsoft 365, Zoho…) or a provider API (Postmark, SendGrid or Mailgun).
- If your server refuses an email, Tourtify sends it through its own service instead and alerts you, so travellers never miss one.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Own email server (SMTP)** and flip its switch on. The settings drawer opens.
3. Enter the address to **Send from**.
4. Choose **Send through**: an SMTP server, or the Postmark, SendGrid or Mailgun API.
5. Fill in the server or API details (below) and select **Save**.
6. Select **Run test** (**Send test email**). It goes through your own server only, with no fallback, so any error shows straight away.
7. Open **Settings › Travellers › Own email server** to check your domain's DNS records.

## Settings

**Sender**

| Setting | What it does | Default |
|---|---|---|
| Send from | Required. An address your provider lets you send from. Tourtify checks its domain's SPF, DKIM and DMARC records. | Empty |
| Send through | **SMTP server**, **Postmark API**, **SendGrid API** or **Mailgun API**. | SMTP server |

**SMTP server** (when sending through SMTP)

| Setting | What it does | Default |
|---|---|---|
| SMTP server | e.g. `smtp.gmail.com`, `smtp.office365.com`, `smtp.zoho.com`. Must be a public internet address. | Empty |
| Port | 587 (STARTTLS) or 465 (SSL/TLS); 25 and 2525 also work. | 587 |
| Security | **STARTTLS (port 587)** or **SSL/TLS (port 465)**. | STARTTLS |
| Username | Usually the full email address. | Empty |
| Password or app password | With Google or Microsoft 2-step sign-in, create an app password. Stored encrypted. | Empty |

**Email provider API** (when sending through Postmark, SendGrid or Mailgun)

| Setting | What it does | Default |
|---|---|---|
| API key | Postmark: Server API token. SendGrid: an API key with Mail Send. Mailgun: a sending API key. Stored encrypted. | Empty |
| Mailgun sending domain | Mailgun only, e.g. `mg.yourbusiness.com`. | Empty |
| Mailgun region | **US (api.mailgun.net)** or **EU (api.eu.mailgun.net)**. | US |

**Domain check**

| Setting | What it does | Default |
|---|---|---|
| DKIM selector | Optional: the selector your provider gave you (e.g. `google`, `selector1`, `s1`), so the DNS check finds your DKIM key. | Empty |

## Check your domain's DNS

Open **Settings › Travellers › Own email server**. The **Sender domain** section shows SPF, DKIM and DMARC for your sending domain:

| Result | Meaning |
|---|---|
| **Pass** | The record is set up correctly. |
| **Check** | A record exists but needs a look. |
| **Missing** | No record was found. A suggested fix is shown, with a copy button. |

Gmail and Yahoo expect all three to pass. After changing DNS, select **Check again**. DNS changes can take up to an hour to show.

## Read the email log

The **Email log** lists every email sent on your behalf, newest first, and which server sent it:

- **Your server**: sent through your provider.
- **Tourtify, after your server failed**: your server refused it, so Tourtify sent it instead. The error is shown.

Search by recipient or subject, and filter by result.

::: tip App passwords
Google Workspace and Microsoft 365 accounts with 2-step sign-in need an app password, not your normal password. Create one in your account's security settings.
:::

## Good to know

- The **Send from** address must be one your provider allows you to send from, or your server will refuse the emails.
- Turning the plugin off sends emails through Tourtify again. Your server settings are kept.

## Related

- [WhatsApp notifications](./whatsapp-notifications)
- [Traveller details forms](./traveller-forms)
