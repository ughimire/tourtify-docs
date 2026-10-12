---
title: Security & privacy
description: How Tourtify protects operator and traveller data — tenant isolation, encryption, payments, access control, audit logs and privacy.
---

# Security & privacy

Your bookings and your travellers' personal details are the heart of your business. This page explains how Tourtify protects them.

## Data isolation

Every business's data is separated at two layers: application checks **and** PostgreSQL row-level security, so a request for one business can't read another's rows even if application code makes a mistake. Automated tests check that every business table is covered.

## Encryption

- All traffic to the console, your website and the API uses HTTPS (TLS). Certificates for custom domains are issued and renewed automatically.
- Secrets you give us, such as payment gateway keys, SMTP passwords and WhatsApp tokens, are encrypted at rest and never sent back to the browser. Webhook signing secrets are shown once.

## Payments

Card details are entered on your payment provider's secure fields and never touch Tourtify's servers. Strong customer authentication (3-D Secure) is handled by the provider where required. Funds go straight to your own account.

## Access control

- Each team member has their own login. Roles and **access groups** decide exactly what each person can see and do. See [Team & roles](/account/team-and-roles).
- [Two-step sign-in](/account/two-step-sign-in) with an authenticator app and recovery codes; required for Tourtify staff.
- Sign-in attempts are rate limited.
- When Tourtify staff need to sign in as your business to help you, they must give a reason, and every such session is recorded in the platform audit log.

## Audit trail

Important changes, such as refunds, plan changes and settings, are recorded in an append-only audit log. Payments and side effects use idempotency keys and a transactional outbox, so a retry never charges twice or sends two confirmations.

## Waivers and consent

Signed waivers keep the exact text the traveller saw, the time and IP address, and a tamper-evident seal. See [Waivers & consent](/plugins/waivers).

## Cookies and tracking

Analytics and advertising tags on your website load only after a visitor accepts cookies. See [Cookie consent & tracking](/website/cookie-consent-and-tracking).

## Your data, your choice

Export bookings, customers and reports to CSV at any time. Pausing a subscription never deletes your content.

## Report a vulnerability

Found a security issue? Email **security@tourtify.com** with steps to reproduce. Please give us reasonable time to fix it before sharing details publicly.
