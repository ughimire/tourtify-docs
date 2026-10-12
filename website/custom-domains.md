---
title: Custom domains
description: Connect your own domain to your Tourtify website with a TXT and CNAME record, choose your main address and get automatic HTTPS.
---

# Custom domains

Every Tourtify website gets a free address, `yourname.tourtify.site`, with HTTPS from day one. Connect your own domain (like `www.yourbusiness.com`) so travellers see your brand. HTTPS is set up and renewed automatically.

::: info Where to find it
Console › Settings › Business › Domain
:::

## Your free address

Your free `{slug}.tourtify.site` address always works. Once you connect your own domain and make it the main address, the free address **redirects** to it with a permanent (301) redirect, so old links keep working.

## Connect a domain

You'll need access to where you bought the domain (GoDaddy, Namecheap, Cloudflare…).

1. Go to **Settings › Domain**.
2. Under **Connect a domain**, enter your domain, for example `www.yourbusiness.com`, and choose **Add domain**.
3. Tourtify shows the **DNS records to add**. Copy each one to your DNS provider (see below).
4. Back in Tourtify, choose **Check now**.

The domain shows **Waiting for DNS** until both records are found, then **Live**. Tourtify also re-checks pending domains every 10 minutes, so you can close the page.

::: tip Use the www version
`www.yourbusiness.com` works with every DNS provider. Root domains (without www) are trickier, see below.
:::

## DNS records

| Type | Name / host | Value / points to | Purpose |
|---|---|---|---|
| TXT | `_tourtify.<your domain>` | `tourtify-verify=…` (copy from the console) | Proves you own the domain |
| CNAME | `<your domain>` (e.g. `www`) | `sites.tourtify.site` | Sends visitors to your website |

For a **root domain** (`yourbusiness.com` without www), a CNAME isn't allowed by most providers. Either:

- add the **A records** Tourtify shows for the root (Name `@`), when they are listed, or
- use a provider that supports **CNAME flattening**, such as Cloudflare.

::: warning DNS takes time
DNS changes usually show up within an hour, rarely up to 48 hours. If the check says "We can't see the TXT record yet", wait and choose **Check again**. If it says "Ownership confirmed", the TXT record is fine and only the CNAME is still missing.
:::

## Make a domain your main address

The first domain that goes live becomes your **Main** address automatically. If you connect several:

1. Find the live domain you want.
2. Choose **Make main**.

Your other domains and the free address then redirect to the main one. A domain must be **Live** before it can be made main.

## HTTPS

There's nothing to set up. As soon as a domain is live, Tourtify issues a certificate on the first visit and renews it automatically ("Secure https, renewed automatically").

## Limits

You can connect up to **5 domains**. To add another, choose **Disconnect** on one you no longer need.

A domain can only be connected to one Tourtify website. If you see "This domain is already connected to a Tourtify site", contact support.

## Disconnect a domain

Choose **Disconnect** next to it. Visitors to that domain stop reaching your website; remove the DNS records at your provider afterwards. Only owners and admins can change domains.

## Related

- [SEO](/website/seo)
- [Redirects](/website/redirects)
- [Business settings](/account/business-settings)
- [Quick start](/get-started/quick-start)
