---
title: Redirects
description: Send visitors and search engines from old website addresses to the right Tourtify page with permanent 301 redirects.
---

# Redirects

A redirect sends anyone visiting an old address to its new home, with a permanent (301) redirect that also passes your search ranking across. Use it when you move from an old website, or when people have bookmarked or linked to an address that no longer exists.

::: info Where to find it
Console › Website › Pages › Redirects
:::

## When you don't need one

Tourtify already redirects automatically when you:

- rename a tour's web address,
- change a page's slug or parent page,
- import from WordPress (old WordPress addresses are redirected; these show **From import**).

You only need manual redirects for other addresses, such as pages on your old website.

## Add a redirect

1. Go to **Website › Pages › Redirects**.
2. Under **Add a redirect**, enter the **Old address**. You can paste the full old URL (`https://old-site.com/trip/ebc/`) or just the path (`/trip/ebc`).
3. Enter the **New address**, usually a path on your website such as `/tours/everest-base-camp-trek`.
4. Choose **Add redirect**.

Old addresses are matched ignoring upper/lower case, query strings and trailing slashes. Adding the same old address again updates its destination.

::: warning Addresses you can't redirect
Redirects never override your website's own sections, so old addresses starting with `/tours`, `/blog`, `/contact`, `/destinations`, `/activities`, `/categories`, `/search`, `/reviews`, `/account`, `/booking` and similar are refused. A redirect to the same address is refused too.
:::

## Find and delete redirects

- Use **Search redirects** to find one by old or new address.
- Choose the delete button next to a redirect to remove it.

## Moving from an old website: checklist

1. List your old site's most visited pages (your old analytics or Google Search Console help).
2. Create the matching tours and pages in Tourtify.
3. Add a redirect for each old address.
4. Connect your domain, see [Custom domains](/website/custom-domains).
5. Submit your new sitemap in Google Search Console.

## Related

- [SEO](/website/seo)
- [Custom domains](/website/custom-domains)
- [Pages and blog](/website/pages-and-blog)
- [Import a tour](/tours/import-a-tour)
