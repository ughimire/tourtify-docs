---
title: Waivers & consent
description: Each traveller signs your waiver online before the trip or on site at a kiosk. Tourtify keeps the exact text signed, with time, IP and a seal.
---

# Waivers & consent <Badge type="tip" text="Growth+" />

Waivers & consent has each traveller sign your waiver or terms before the trip, online or on site. Tourtify keeps the exact text they signed, with the time, IP address and a tamper-evident seal. You can block check-in until a traveller has signed, and download an evidence record for any signature.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Operations
- **Where:** Console › Plugins › Waivers & consent, and Bookings › Waivers
- **Works with:** [Traveller details forms](./traveller-forms), [QR tickets & check-in](./qr-tickets), [Tour guides](./tour-guides)
:::

## How it works

**What the traveller sees**

- The full waiver text, then a signature step.
- They can sign from their booking page, their own traveller link, or the on-site kiosk.
- A parent or guardian signs for minors, recorded as signing on their behalf.

**What Tourtify records**

For each signature: the signer, time, IP address, device, the exact text and its hashes. Editing your waiver creates a new version. Existing signatures keep the version they signed.

**What your team sees**

**Bookings › Waivers** shows your main waiver, tours with their own waiver, and the latest signatures. The departure manifest shows who has signed.

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Waivers & consent** and flip its switch on.
3. Select **Configure**. Enter your **Waiver title** and **Waiver text**, review the other settings, then **Save**.

Until you add waiver text, only tours with their own waiver ask travellers to sign.

## Settings

**Waiver**

| Setting | What it does | Default |
|---|---|---|
| Waiver title | Up to 200 characters. | Release of liability and assumption of risk |
| Waiver text | Shown in full to each traveller. Editing it creates a new version; existing signatures keep the version they signed. | Empty (required) |
| Every traveller signs (not just the lead) | Each traveller signs individually. Off: only the lead traveller signs. | On |

**Minors**

| Setting | What it does | Default |
|---|---|---|
| A parent or guardian signs for minors | Travellers under the age below (by their date of birth on the trip date) can't sign themselves; the guardian signs on their behalf. | On |
| Minors are under | Age limit, 1–25. | 18 |

**On the day**

| Setting | What it does | Default |
|---|---|---|
| Block check-in until the waiver is signed | The manifest won't check in a traveller who must sign and hasn't. They can sign on the spot at the kiosk. | Off |
| On-site signing kiosk | A page (and QR code) for each departure where travellers find their booking and sign on a tablet or their own phone. | On |

**Reminders**

| Setting | What it does | Default |
|---|---|---|
| Remind unsigned travellers (days before departure) | Comma-separated days. Used when Traveller details is off. With it on, its reminders chase waivers too. | 7,2 |

## Give a tour its own waiver

Some activities need different terms, e.g. rafting or paragliding.

1. Go to **Bookings › Waivers**.
2. Find the tour under **Waiver per tour** and select **Give it its own waiver**.
3. Enter the **Title** and **Waiver text**. Plain text; blank lines start a new paragraph.
4. Select **Save tour waiver**.

A tour's own waiver replaces the main one for its bookings. To go back, select **Use main waiver**.

::: warning Editing a waiver
Saving a new version asks travellers on that tour to sign again. Signatures already given keep the version they signed.
:::

## Sign on site with the kiosk

With **On-site signing kiosk** on, each departure's manifest shows a kiosk link and QR code. At the meeting point:

1. Open the kiosk on a tablet, or let travellers scan the QR code with their own phone.
2. The traveller finds their booking with the booking reference and their surname.
3. They read and sign the waiver.

The kiosk only gives access to that one booking, never to the booking's private link.

## Download evidence

On **Bookings › Waivers**, under **Recent signatures**, select **Evidence** next to a signature. You get a PDF evidence record with the signer, time, IP, device, the exact text and its hashes.

## Good to know

- With [QR tickets & check-in](./qr-tickets), the scanner shows **Waiver not signed** for travellers who still need to sign while check-in blocking is on.
- Guides with a schedule link from [Tour guides](./tour-guides) see waiver status for their departures.
- Turning the plugin off stops travellers being asked to sign. Signed waivers are kept.

::: info Legal advice
Tourtify records and protects signatures. Whether a waiver is enforceable depends on its wording and local law, so have your waiver text reviewed by a lawyer.
:::

## Related

- [Traveller details forms](./traveller-forms)
- [QR tickets & check-in](./qr-tickets)
- [Tour guides](./tour-guides)
