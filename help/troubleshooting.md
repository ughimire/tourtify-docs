---
title: Troubleshooting
description: Fix common Tourtify problems — tours not showing, no availability, payments failing, emails not arriving, domains not connecting and webhooks failing.
---

# Troubleshooting

Start with the symptom you see. If nothing here helps, [contact support](./support) and include the booking reference or page address.

## A tour doesn't appear on my website

- Check the tour's status is **Published**, not Draft.
- Check it has at least one **price** and, for instant booking, at least one future **departure**.
- If you changed its address (slug) recently, the old address redirects to the new one automatically.

## "No dates available" on a tour page

- Departures in the past, full departures and dates inside the **booking cut-off** aren't bookable.
- Check **blocked dates** on the tour.
- A departure with seats **held** by a traveller who is paying shows as full until the hold is released or the booking completes. Holds expire automatically.

## Payments fail or the Pay button is missing

- Open **Settings › Business › Payments** and check Stripe (or your other gateway) shows as connected and able to take charges. Stripe sometimes asks for extra details; finish them in Stripe.
- For PayPal and Razorpay, check the API keys and that the webhook from the plugin page is added in the provider's dashboard.
- If a payment needs review, the booking shows a warning on the dashboard; follow the steps on the booking.

## Travellers don't receive emails

- Ask them to check spam and promotions folders.
- Check the email address on the booking. You can **resend** any email from the booking page.
- If you use [your own email server](/plugins/own-email-server), run the DNS check and look at the email log on **Settings › Travellers › Own email server**.

## My domain won't connect

- The **TXT** record (name `_tourtify` or `_tourtify.www`) proves you own the domain. The **CNAME** points it at Tourtify. Both are required.
- DNS changes usually take minutes but can take up to 48 hours. Tourtify re-checks automatically.
- Root domains without `www` need a DNS provider that supports CNAME flattening (such as Cloudflare), or the A records shown in the console. Using `www` is easier.
- See [Custom domains](/website/custom-domains).

## Webhooks are failing

- Open the endpoint's delivery log to see the status code and response.
- Your endpoint must answer with a 2xx status within 15 seconds.
- Signature mismatch? Hash the **raw** request body. See [Verify signatures](/developers/verify-signatures).
- If an endpoint failed for 3 days it is switched off; switch it back on and resend missed deliveries.

## I can't see a menu item or page

Your [role](/account/team-and-roles) may not include it, or the feature comes from a [plugin](/plugins/) that isn't switched on or isn't in your plan.

## I lost my two-step sign-in device

Use one of your recovery codes on the sign-in screen. If you have none left, ask a business owner or [support](./support) to reset it. See [Two-step sign-in](/account/two-step-sign-in).
