---
title: Traffic, logs & protection
description: See who visits your website, what goes wrong and what was blocked, and protect it yourself with under-attack mode, bot checks, IP and country rules, maintenance mode and hotlink protection.
---

# Traffic, logs & protection

Every business sees and manages its own website's traffic, inside the safe limits Tourtify sets for the platform.

::: info Where to find it
Console › Website › Traffic & logs, and Website › Traffic & logs › Protection
:::

## Traffic & logs

| Tab | What it shows |
|---|---|
| **Overview** | Visitors (unique per day), page views, requests right now, error rate, blocked or checked requests; a chart per day (per hour for "Today"); top pages, referrers, countries and devices. |
| **Pages** | Every page with its views (filter by text); slow pages by average time to first byte. |
| **Errors** | Pages not found that visitors followed (with **Add redirect**), failing pages, booking-system errors, why checkouts failed, failed online payments by provider, and links to the email, webhook and API logs. |
| **Blocked & bots** | What was blocked, checked or slowed down and why (your rules, Tourtify's, the maintenance page, hotlinked images); the share of people and bots. |
| **Health** | Each custom domain checked hourly from outside: DNS, the security certificate (and its expiry), whether the home page answers, 30-day uptime; recent alerts. |

Choose a period (Today, 7, 30, 90 days or custom dates, within what your plan keeps). **Export** downloads any section as CSV.

### Privacy

Traffic is counted, never recorded per person:

- pages are stored as paths without their query string; private sections (payment links, bookings, the traveller's account, previews, reviews) only as `/pay/*`, `/booking/*` and so on, so no reference or token is kept;
- referrers are the other website's host name only; countries come from Cloudflare when the site is behind it;
- visitors are an approximate distinct count per hour and day of a keyed hash of the day, business, IP address and browser. The hash itself is not stored (it goes into a HyperLogLog counter) and changes every day. Visitors who send **Global Privacy Control** or **Do Not Track** are not counted as visitors at all;
- no IP address, full user agent, cookie, email address or booking reference is stored.

Counting never slows the website: counters are written after the response has gone out, in one pipelined write, and copied into the business's own database rows every five minutes. Page timing and "not found" reports come from the visitor's browser (a sample of 20% of page loads for timing); they never count against the business's request limits.

## Protection

| Control | What visitors see | Plan |
|---|---|---|
| **Under attack** | A one-time "quick check" (Cloudflare Turnstile) before the website, then strict per-visitor limits. Switches itself off after 1–72 hours. Without Turnstile on the platform, only the strict limits apply. | All |
| **Bot check on checkout** | Every booking shows the bot check, not only "pay later". Enquiry, newsletter and sign-in forms always have it. | All |
| **Bot check on your own domain** | Tourtify's bot check covers your free address (`yourname.ttfweb.com`). Cloudflare allows only 10 domains per bot check, so on your own domain add your own free Turnstile keys: in Cloudflare › Turnstile add a widget (Managed) listing your domains, then paste the site key and secret key. The secret is checked with Cloudflare, stored encrypted and never shown again. Without your own keys, forms on your own domain are protected by rate limits only. | All |
| **Per-visitor limit** | "Too many requests" past N pages a minute from one visitor (20–600). | All |
| **Always allowed** | Your office or monitoring addresses are never blocked, checked or limited by your own rules. | Starter 1, Growth 5, Scale 20 |
| **Blocked addresses** | "Can't be reached from your network". Single IPs or CIDR ranges, public addresses only, no wider than /16 (IPv4) or /32 (IPv6). You can't block your own current address. | Growth 50, Scale 500 |
| **Countries** | Block some countries, or let in only the ones you sell to. Visitors whose country is unknown are let in. | Growth, Scale |
| **Maintenance mode** | A branded "We'll be right back" page with your logo, colour, message, optional "back by" time and contact details. The team bypass link opens the real website for 12 hours; making a new link locks out the old one. | All |
| **Hotlink protection** | Images delivered through your website's address can't be shown on other websites (direct visits, search engines and apps still work). Allow partner sites by name. | All; allowed partners Growth 10, Scale 25 |

**What visitors see** previews the exact page the edge serves. Every change is checked on the server against the caps and your plan, kept in the **change history** (undo the last change or restore any earlier setting) and written to Settings › Activity log.

### Order of rules

1. Tourtify's own controls (set by our team from Super admin › Load, or automatic protection during a flood) always come first and are shown read-only on the Protection page.
2. Tourtify's allow-list, pause and blocks.
3. Your **Always allowed** addresses skip your own rules (never Tourtify's).
4. Your blocked addresses and countries.
5. Maintenance mode (the bypass link passes).
6. Tourtify's under-attack limits, then your **Under attack** check and limits, then your per-visitor limit.

Rules apply at the edge (before a page renders) through the edge check; blocked addresses and countries also apply to the booking system's API.

## Alerts

Your team hears about: traffic spikes (5× the usual level), failing pages (5% of requests in an hour), certificates expiring within 14 days or invalid, a domain whose DNS no longer points at the website, and automatic protection switching on. Each kind is sent at most once every 6 hours.

- **Email**: Settings › Notifications › Website alerts by email. Each person chooses; owners get every kind until they choose.
- **Push**: choose **Website alerts** for a device in Settings › Notifications.

## Who can do what

| Permission | Owner | Admin | Marketing group | Sales agent, Guide |
|---|---|---|---|---|
| `site.logs.view` (Traffic & logs, alerts) | Yes | Yes | Yes | No |
| `site.protection.manage` (Protection) | Yes | Yes | No | No |

Custom access groups can include either permission (Super admin › Roles & access).

## Plans

| | Starter | Growth | Scale |
|---|---|---|---|
| History kept | 7 days | 30 days | 90 days |
| Overview, pages, referrers, countries, devices, 404s, failing pages, health | Yes | Yes | Yes |
| Slow pages, bots, blocked requests by reason, checkout and payment errors | | Yes | Yes |
| CSV export | | Yes | Yes |
| Blocked IP rules / always-allowed | 0 / 1 | 50 / 5 | 500 / 20 |
| Country rules | | Yes | Yes |

The limits live in `config/traffic.php` (`site.plans`) and are enforced on the server. Settings saved on a bigger plan are kept after a downgrade, but only the plan's share applies.

## For developers and operators

- Recording: `SiteTraffic` (Redis counters, `st:*` keys, 72 h), called from `RecordTrafficMetrics::terminate`; the edge check sets the page path, the storefront's `PageBeacon` reports 404/500 pages and timing to `POST /api/storefront/v1/beacon`.
- Roll-up every 5 minutes (`site:traffic-rollup`, idempotent) into `site_traffic_hourly` and `site_traffic_dims`, alerts in the same run; domain health hourly (`site:domain-health`); retention daily (`site:traffic-retention`). All tenant tables use row-level security.
- Protection lives in `tenants.site_protection` and is read with the rest of the policy in one cached lookup (`TrafficPolicies`, `SiteRules`). The edge serves `/_tourtify/challenge` and `/_tourtify/bypass` on the business's own domain; Caddy also asks the edge check for `/_next/image` requests that carry a Referer (hotlink protection). See `infra/caddy/Caddyfile`.
- Without `EDGE_CHECK_SECRET` the edge check is off: page-level rules (maintenance, under attack, hotlink) and page counting don't run; the Protection page says so.
