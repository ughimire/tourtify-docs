---
title: WhatsApp notifications
description: Send booking confirmations, trip and pickup reminders, balance reminders, waitlist offers and review requests on WhatsApp from your own business number.
---

# WhatsApp notifications <Badge type="tip" text="Growth+" />

WhatsApp notifications send booking messages to travellers on WhatsApp, from your own WhatsApp Business number. Travellers read WhatsApp far more reliably than email, especially on the road. Send confirmations, trip and pickup reminders with a map pin, balance and traveller-details reminders, waitlist offers and review requests.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Communication
- **Where:** Console › Plugins › WhatsApp notifications, and Settings › Travellers › WhatsApp
:::

## How it works

**What the traveller sees**

- At checkout, a box to tick: "Send me booking updates and reminders on WhatsApp", with a field for their WhatsApp number. On the waitlist form it reads "Message me on WhatsApp if seats free up".
- Only travellers who tick the box get WhatsApp messages.
- Messages come from your own WhatsApp Business number, using templates you create and Meta approves.

**Messages you can send**

| Message | Sent when | Also emailed? |
|---|---|---|
| Booking confirmed | A booking is confirmed | Yes, as usual |
| Trip reminder | The trip reminder goes out | Yes |
| Pickup reminder with map pin | Before departure, at the time you choose | Only if WhatsApp can't deliver it |
| Balance reminder | A balance or instalment reminder goes out | Yes |
| Traveller details reminder | Details are still missing | Yes |
| Waitlist: seats free | Seats are offered from the waitlist | Yes |
| Review request | After the trip | Yes |
| Booking cancelled | A booking is cancelled | Yes |

Instalment reminders use the balance reminder template, with the instalment's amount and date.

**What your team sees**

**Settings › Travellers › WhatsApp** shows the connection, each template's approval status, pickup points per tour and a message log (sent, failed, skipped, emailed instead).

## What you need

- A WhatsApp Business Account in Meta Business Suite › WhatsApp Manager, with your business phone number added.
- A system user with the `whatsapp_business_messaging` and `whatsapp_business_management` permissions, and a permanent access token for it.
- Message templates created in WhatsApp Manager (category Utility), with the exact names and variables shown on the WhatsApp page. Meta usually approves them within minutes.

Setup takes about 15 minutes.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **WhatsApp notifications** and flip its switch on. The settings drawer opens.
3. Under **Connection**, enter the **Phone number ID**, **WhatsApp Business Account ID** and **Access token**.
4. Under **Messages**, choose the **Messages to send**.
5. Select **Save**, then **Run test** (**Test connection**) to check your phone number ID and token with WhatsApp.
6. Open **Settings › Travellers › WhatsApp**. Create each template in WhatsApp Manager with the exact name shown, then select **Check status**.
7. Select **Send test** to send yourself the "Booking confirmed" template with sample details.

## Settings

**Connection**

| Setting | What it does | Default |
|---|---|---|
| Phone number ID | Required. WhatsApp Manager › API setup › Phone number ID. | Empty |
| WhatsApp Business Account ID | WhatsApp Manager › Account tools. Needed to check your templates' approval status. | Empty |
| Access token | Required. A permanent token for a system user with the permissions above. Stored encrypted. | Empty |
| Template language | The language code your templates were approved in, e.g. `en`, `en_US`, `es`, `hi`. | en |

**Messages**

| Setting | What it does | Default |
|---|---|---|
| Messages to send | Any of the eight messages above. | Booking confirmed, Trip reminder, Balance reminder, Review request, Booking cancelled |
| Email it when WhatsApp can't | For WhatsApp-only messages (the pickup reminder): if the traveller isn't on WhatsApp or the send fails, the same message is emailed. | On |

**Pickup reminder**

| Setting | What it does | Default |
|---|---|---|
| Send the pickup reminder | 2, 6, 12 or 24 hours before departure. | 12 hours before |
| Default pickup place | Used for tours without their own pickup point. | Empty |
| Address | The pickup address. | Empty |
| Latitude / Longitude | The map pin, e.g. 27.7154 and 85.3123. In Google Maps, right-click the spot and click the numbers to copy them. Add both or neither. | Empty |

**Template names**

One field per message, with the template name in WhatsApp Manager. The defaults are `booking_confirmed`, `trip_reminder`, `pickup_reminder`, `balance_due`, `traveller_details_reminder`, `waitlist_offer`, `review_request` and `booking_cancelled`. Each field's help lists the template's variables, in order.

## Set pickup points per tour

1. Open **Settings › Travellers › WhatsApp** and find **Pickup points**.
2. Select **Edit** next to a tour.
3. Enter the pickup place, address, latitude and longitude, and the pickup time if it differs from the departure time.
4. Select **Save**.

Tours without their own pickup point use the default from the settings. The pickup reminder template uses a **Location** header, filled in with the pickup point for each booking.

## Template status

| Status | Meaning |
|---|---|
| **Approved** | Ready to send. |
| **Approved · variables differ** | Approved, but with a different number of variables than Tourtify sends. Recreate it as shown. |
| **Pending review** | Meta is still reviewing it. |
| **Rejected** | Meta rejected it. The reason is shown. |
| **Paused by Meta** | Low quality ratings: Meta paused it for a few hours. |
| **Not found** | No template with that name and language exists yet. |

::: warning Opt-in only
Tourtify sends WhatsApp messages only to travellers who ticked the box at checkout and gave a number in international format. Others keep getting emails as usual.
:::

## Good to know

- Messages are sent through Meta's WhatsApp Cloud API, directly from your own number.
- With [Traveller details forms](./traveller-forms) reminders on, travellers with WhatsApp also get a WhatsApp reminder.
- Turning the plugin off stops WhatsApp messages. Your settings and message log are kept.

## Related

- [WhatsApp chat button](./whatsapp-button)
- [Waitlist](./waitlist)
- [Traveller details forms](./traveller-forms)
- [Deposits & balance payments](./deposits)
