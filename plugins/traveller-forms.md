---
title: Traveller details forms
description: Collect passport, date of birth, dietary needs and emergency contacts per traveller after booking, with reminders, so checkout stays short.
---

# Traveller details forms <Badge type="tip" text="Growth+" />

Traveller details forms collect everything you need for the trip after the booking is made: passport details, date of birth, dietary needs, emergency contacts and file uploads. Checkout stays short, and Tourtify chases missing details for you before departure.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Operations
- **Where:** Console › Plugins › Traveller details forms, and Settings › Travellers › Traveller details
- **Works with:** [Waivers & consent](./waivers), [WhatsApp notifications](./whatsapp-notifications)
:::

## How it works

**What the traveller sees**

- After booking, the lead traveller gets a link to a "Before you travel" form for the group.
- If **Each traveller can fill in their own details** is on, the lead traveller also gets a personal link for each person in the group to copy or email. Each link opens only that traveller's own form and waiver.
- If something is still missing, reminders arrive on the days you choose before departure.
- A passport that expires too close to the trip shows a warning.

**What your team sees**

- Answers on each booking and in the departure manifest, per traveller.
- Passport expiry warnings in the manifest.
- Uploaded files stored privately and deleted after the trip (if you choose).

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Traveller details forms** and flip its switch on.
3. Go to **Settings › Travellers › Traveller details** to build your form.
4. Select **Configure** on the plugin to set reminders and privacy, then **Save**.

## Build your form

1. Go to **Settings › Travellers › Traveller details**.
2. Select **Use suggested questions** to start from passport, date of birth, dietary needs and emergency contact. Or select **Add question** to build your own.
3. For each question, set:
   - **Question** and **Answer type**: Short text, Long text, Choice list, Date, Date of birth, Passport expiry, Country, Email, Phone or File upload.
   - **Asked**: **Per traveller** or **Per booking**.
   - **Required**, if it must be answered.
   - **Help text**, shown under the question, e.g. "As printed in your passport".
4. Under more options, you can set age limits for a date of birth (minimum and maximum age on the trip date), or show a question only when another answer equals a value.
5. Use **Move up** and **Move down** to order questions.
6. Select **Save questions**.

::: info Conditional questions
To make a question depend on another answer, move it below that question. Both must use the same **Asked** setting.
:::

## Settings

| Setting | What it does | Default |
|---|---|---|
| Chase missing details by email | Emails the lead traveller a link to finish what's missing (details and waivers). With WhatsApp messages on, they get a WhatsApp too. | On |
| Days before departure | One reminder on each of these days, only while something is still missing. Separate days with commas. | 14,7,2 |
| Each traveller can fill in their own details | The lead traveller gets a personal link for everyone in the group. Each link opens only that traveller's own form and waiver. | On |
| Warn when a passport expires within (months of the trip) | Travellers and your manifest see a warning. Set 0 to warn only when it expires before the trip. 0–24. | 6 |
| Delete uploaded files this many days after the trip | Passport scans and other files are kept privately, then deleted. Set 0 to keep them. | 90 |

## File uploads

File upload questions take a PDF or photo up to 10 MB. Files are kept privately and deleted after the trip, based on **Delete uploaded files this many days after the trip**.

::: warning Personal data
Passport scans are sensitive. Keep the retention period as short as your operations allow, and only ask for files you need.
:::

## Good to know

- Waiver signing is part of the same traveller links when [Waivers & consent](./waivers) is on, and these reminders chase unsigned waivers too.
- With [Waivers & consent](./waivers), a date of birth question is used to check the traveller's age on the trip date: under the waiver's minor age, a guardian signs for them.
- Hotel rooming lists use guest names from traveller details when collected.
- Turning the plugin off stops travellers being asked for their details. Answers already given are kept.

## Related

- [Waivers & consent](./waivers)
- [WhatsApp notifications](./whatsapp-notifications)
- [Hotel booking](./hotel-booking)
- [Tour guides](./tour-guides)
