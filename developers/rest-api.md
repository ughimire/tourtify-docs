---
title: REST API
description: The status of Tourtify's public REST API, what it will cover, and how to integrate today using webhooks and exports.
---

# REST API <Badge type="info" text="Planned" />

A public REST API with per-business **API keys** and an **OpenAPI** description is on the Tourtify roadmap for the Scale plan. It will cover reading tours, departures and availability, and reading and creating bookings, so you can build custom front ends, connect resellers and sync with back-office systems.

## Integrate today

You don't need to wait for the API for most integrations:

| Goal | Use today |
|---|---|
| Push new bookings to a CRM, accounting or spreadsheet | [Webhooks](./webhooks) — with Zapier, Make or n8n if you prefer no code |
| Notify a team chat about enquiries | `lead.created` webhook into Slack or Microsoft Teams via your automation tool |
| Reporting and BI | CSV exports from **Reports** and **Bookings** |
| Ad and analytics attribution | [GA4](/plugins/google-analytics) and [Meta Pixel](/plugins/meta-pixel) with server-side purchase events |
| Sell on OTAs or partner sites | [External booking links](/plugins/external-booking-links) |

## Early access

If you are an operator on Scale or a partner building an integration, [contact us](/help/support) to join the early-access programme. Tell us what you want to build so we can prioritise the endpoints you need.
