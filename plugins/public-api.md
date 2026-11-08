---
title: Public API
description: Connect your own systems with API keys and scopes - read tours and availability, price and create bookings, and sync bookings to your CRM or accounts.
---

# Public API <Badge type="warning" text="Scale" />

The Public API connects your own systems to Tourtify. Read tours and live availability, price and create bookings, and sync every booking into your CRM, accounting or BI tools. You create API keys with scopes, and the API is described with OpenAPI. For changes as they happen, pair it with [Webhooks](./webhooks).

::: info At a glance
- **Plan:** Scale
- **Category:** Integrations
- **Where:** Plugins › Public API, and Settings › Integrations & developers › Developers
:::

## How it works

- Each system that connects gets its own API key. A key only does what its scopes allow.
- The REST API covers tours, availability, quotes and bookings: JSON over HTTPS, documented with OpenAPI.
- Bookings created through the API arrive confirmed and hold seats, like any other booking.
- Resellers and marketplaces can connect through the OCTO standard with their own key.

For the technical reference (authentication, endpoints, errors and examples), see the [REST API reference](/developers/rest-api) and the [developer docs](/developers/).

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Public API** and flip its switch on.
3. Open **Settings › Integrations & developers › Developers**.
4. Select **New API key**, give it a name and choose what it can do, then **Create key**.
5. Copy the key straight away and store it somewhere safe. For your security it won't be shown again.

## API keys

**Scopes**

| Scope | What it allows |
|---|---|
| **Read tours and availability** | Tours, options, traveller types, departures and prices. |
| **Read bookings** | Bookings with customers, items and payments, for syncing to your CRM or accounts. |
| **Create and cancel bookings** | Bookings from your own systems arrive confirmed and hold seats. |
| **Reseller channel (OCTO)** | For resellers and marketplaces connecting through the OCTO standard. |

Name each key after the system that will use it, so you know what to revoke later. Create a key for each system that connects, so you can revoke one without touching the others.

The **API keys** list shows when each key was created and last used (or **Never used**). **Revoke** a key and anything using it stops working within a minute.

**On the Developers page you'll also find**

- **REST API**: the **Base URL** (with **Copy base URL**), **Try it**, and the **OpenAPI description**.
- **Resellers (OCTO)**: give each reseller its own key with the "Reseller channel (OCTO)" scope, named after them. Their bookings show the reseller's name. **Copy OCTO URL** gives the endpoint to send them.

## Good to know

- Limits: 240 requests a minute per key.
- Send an `Idempotency-Key` header when creating bookings so retries never double-book.
- To be told about new bookings and changes instead of polling, use [Webhooks](./webhooks).
- Turning the plugin off: apps using your API keys stop working. The keys are kept.

## Related

- [REST API reference](/developers/rest-api)
- [Developer docs](/developers/)
- [Webhooks](./webhooks)
- [Channel manager (OTAs)](./channel-manager)
