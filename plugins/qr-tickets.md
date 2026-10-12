---
title: QR tickets & check-in
description: Give every confirmed traveller a QR ticket and check them in with a phone at the meeting point. Duplicates, cancellations and wrong days are caught.
---

# QR tickets & check-in <Badge type="info" text="All plans" />

QR tickets give every confirmed traveller a ticket with a QR code. At the meeting point, your team scans it with a phone to check the traveller in. The scanner catches duplicate scans, cancelled bookings, the wrong day and unpaid balances, so you know who is cleared to go.

::: info At a glance
- **Plan:** All plans
- **Category:** Operations
- **Where:** Console › Plugins › QR tickets & check-in, and Bookings › Scan tickets
:::

## How it works

**What the traveller sees**

- When a booking is confirmed, Tourtify issues a ticket for each traveller (or one for the whole booking, if you prefer).
- The traveller gets an email with a link to their ticket page. The link is signed, so only the link from the email opens it.
- Each ticket shows a QR code and an 8-character code underneath it, for example `K7F2MQ9W`.
- If a booking is cancelled, or a checkout expires unpaid, its tickets are revoked.

**What your team sees**

- **Bookings › Scan tickets** opens the scanner. It uses the phone's camera, or you can type the 8-character code.
- Each scan shows a clear result: green to go, amber to check something, red to stop.
- The page shows how many travellers have been checked in today.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **QR tickets & check-in** and flip its switch on.
3. Select **Configure** to review the settings, then **Save**.
4. Open **Bookings › Scan tickets** on the phone you'll use at the meeting point.

From now on, every newly confirmed booking gets tickets.

## Settings

| Setting | What it does | Default |
|---|---|---|
| One ticket per traveller (not one per booking) | Issues a separate ticket for each traveller. Off: one ticket covers the whole booking. | On |
| Email the tickets when a booking is confirmed | Sends the ticket link to the traveller automatically. | On |
| Tickets scan from (hours before departure) | How early a ticket can be scanned. 0–168 hours. | 24 |
| Tickets scan until (hours after departure) | How late a ticket can still be scanned. 0–336 hours. | 12 |
| Let travellers with a balance due check in | Off: the scanner warns "balance due" and staff collect it first. | Off |

## Scan a ticket

1. Open **Bookings › Scan tickets**.
2. Select **Start camera** and allow camera access.
3. Point the camera at the traveller's QR code. Or type the code into **Ticket code** and select **Check**.
4. Read the result and act on it.

| Result | What it means |
|---|---|
| **Good to go** | The traveller is checked in. |
| **Already checked in** | This ticket was scanned before. The result shows when it was first scanned. |
| **Another day** | The ticket is for a different departure date, or outside the scan window. |
| **Balance due** | The booking still owes money. The result shows the amount. |
| **Waiver not signed** | The traveller still needs to sign a waiver ([Waivers & consent](./waivers) with check-in blocking on). They can sign at the on-site kiosk. |
| **Cancelled** | The booking was cancelled. Don't let them board. |
| **Not recognised** | The code doesn't match any ticket in your business. |

For **Another day** and **Balance due**, a team member can choose **Check in anyway** after sorting out the issue, for example once the balance is collected.

A ticket can only be checked in once. A second scan always shows **Already checked in**.

::: tip Scanning on any phone
The camera scanner works in Chrome on Android and in most modern browsers. If the browser can't read QR codes, or camera access was blocked, type the 8-character code instead.
:::

## Permissions

The **Scan tickets** menu item appears for team members allowed to check travellers in. Give guides and meeting-point staff this permission in **Settings › Team**.

## Good to know

- Tickets are issued when a booking is **confirmed**. Bookings confirmed before you switched the plugin on don't get tickets retroactively.
- Turning the plugin off stops new tickets. Existing tickets and check-in records are kept.
- With [Waivers & consent](./waivers), you can block check-in until the waiver is signed.

::: warning Balance due
If you collect balances at the meeting point, leave **Let travellers with a balance due check in** off. Your team then sees the amount owed at every scan.
:::

## Related

- [Waivers & consent](./waivers)
- [Deposits & balance payments](./deposits)
- [Tour guides](./tour-guides)
- [Payments](/bookings/payments)
