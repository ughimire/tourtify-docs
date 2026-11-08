---
title: Payments in Latin America
description: Take cards, Pix, boleto, OXXO, PSE and cash vouchers through Mercado Pago, with seats held while a voucher is paid.
---

# Payments in Latin America <Badge type="info" text="All plans" />

Mercado Pago lets travellers in Brazil, Mexico, Argentina, Colombia, Chile, Peru and Uruguay pay the way they're used to, including cash vouchers paid at a shop or bank after checkout. Money goes into your own Mercado Pago account.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Payment providers
- **Where:** Plugins › Mercado Pago, and Settings › Payments & tax › Payments
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Mercado Pago** and flip its switch on.
3. Then connect it in **Settings › Payments & tax › Payments**: choose **Add a provider**, pick **Mercado Pago**, choose a **Mode**, paste your access token and choose **Check and connect**.
4. Set up the webhook (below) and choose **Save webhook**.

## Mercado Pago

**What it accepts:** cards (with instalments), the Mercado Pago wallet, Pix, PSE, and cash and bank vouchers such as boleto, OXXO, Efecty, Pago Fácil, Rapipago and PagoEfectivo.

**Currencies:** ARS, BRL, CLP, COP, MXN, PEN and UYU. Mercado Pago appears at checkout only for tours priced in one of these.

**What you enter when connecting**

| Field | Where to find it |
|---|---|
| **Access token** | Mercado Pago › Your integrations › your app › Production credentials (APP_USR-…), or Test credentials (TEST-… or a test user's APP_USR-…). |

**Webhook**

Mercado Pago is told the webhook URL on every payment. Add it under Webhooks too, so payments confirm instantly and refunds made in Mercado Pago show up on bookings:

1. In Mercado Pago › Your integrations › your app › Webhooks, paste the **Webhook URL** shown in Tourtify.
2. Tick **Payments** and save.
3. Copy the secret signature into **Webhook secret signature** in Tourtify and choose **Save webhook**.

**Refunds:** made from Tourtify. Refunds made in Mercado Pago are added to the booking once.

**Saved cards:** not supported. Balances are paid from the reminder link.

## Seats held while a voucher is paid

With a voucher such as boleto or OXXO, the traveller finishes checkout first and pays at a shop or bank afterwards. Tourtify keeps their seats while the voucher is open and confirms the booking when Mercado Pago reports the money.

- A voucher is valid for up to 3 days, and never later than the day before the trip.
- When there isn't enough time for a voucher to be paid and clear before the trip, vouchers are left out and only instant methods are offered.
- If the voucher runs out or is cancelled with nothing paid, the seats go back on sale.

## Good to know

- Mercado Pago sometimes reviews a payment before approving it. The booking waits while it does; Mercado Pago usually decides within two days.
- Mercado Pago only calls public https addresses, so webhooks don't reach a local test server.
- Turning the plugin off means travellers can't pay with Mercado Pago. Your connected account is kept.
- Only the business owner can connect or change payment accounts.

## Related

- [Payment providers](./payment-providers)
- [Currency switcher](./currency-switcher)
- [Payments](/bookings/payments)
- [Checkout](/bookings/checkout)
