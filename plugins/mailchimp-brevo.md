---
title: Mailchimp & Brevo
description: Add every traveller and enquiry to your Mailchimp audience or Brevo list, tagged with the tour they booked or asked about.
---

# Mailchimp & Brevo <Badge type="tip" text="Growth+" />

If you already send newsletters with Mailchimp or Brevo (formerly Sendinblue), this plugin keeps your list up to date. Every traveller and enquiry is added to your Mailchimp audience or Brevo list, tagged with the tour they booked or asked about, so your newsletters and win-back campaigns reach the right people.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Marketing
- **Where:** Plugins › Mailchimp & Brevo
:::

## How it works

- When a booking is confirmed, the lead traveller is added to your list (or updated if they're already there).
- When someone sends an enquiry, they're added too.
- Each contact gets tags: **Traveller** or **Enquiry**, plus **Tour: (tour name)** when there is one. In Mailchimp these are contact tags. In Brevo they go into a contact attribute called `TOURTIFY_TAGS`, alongside `FIRSTNAME` and `LASTNAME`.
- Adding a contact twice doesn't create a duplicate.

Nothing changes for travellers on your website. The plugin works in the background.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Mailchimp & Brevo** and flip its switch on.
3. Select **Configure**, choose **Mailchimp** or **Brevo (Sendinblue)**, and paste your API key and list.
4. Choose what to send, then **Save**.

## Settings

**Connection**

| Setting | What it does |
|---|---|
| Send contacts to | **Mailchimp** or **Brevo (Sendinblue)**. |
| Mailchimp API key | Mailchimp › Profile › Extras › API keys. It ends in your data centre, e.g. …-us21. |
| Mailchimp audience ID | Audience › Settings › Audience name and defaults. |
| Brevo API key | Brevo › SMTP & API › API keys. |
| Brevo list ID | The number of the Brevo list to add contacts to. |

**What to send**

| Setting | What it does | Default |
|---|---|---|
| Add travellers when a booking is confirmed | Sends the lead traveller of each confirmed booking. | On |
| Add people who send an enquiry | Sends everyone who enquires. | On |
| New Mailchimp contacts are | **Transactional (not on marketing emails)**, **Subscribed (only if they agreed to marketing)** or **Pending (Mailchimp asks them to confirm)**. Only mark people as subscribed if they agreed to hear from you. | Transactional |

## Good to know

- Marketing consent is your responsibility in Mailchimp or Brevo. The safe default keeps new Mailchimp contacts as transactional, so they don't receive marketing emails until they opt in.
- Want to send newsletters from Tourtify instead, with a consent record per person? Use [Email campaigns](./campaigns).
- Turning the plugin off: new travellers and enquiries stop being sent to Mailchimp or Brevo. Contacts already sent stay there.

## Related

- [Email campaigns](./campaigns)
- [Email automations](./automations)
- [Enquiries](/bookings/enquiries)
- [Customers](/bookings/customers)
