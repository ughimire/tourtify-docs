---
title: SEO
description: How Tourtify handles SEO titles, meta descriptions, Open Graph, schema.org data, sitemap.xml and robots.txt, plus the SEO score and focus keyword.
---

# SEO

Tourtify websites are built to rank and to be understood by search engines and AI assistants. Most of the technical work is automatic: structured data, sitemap, canonical URLs and redirects. Your job is the content: a good SEO title, a meta description and a clear focus keyword on every tour, page and post.

::: info Where to find it
Tours: Console › Tours › *tour* › **SEO** tab
Pages and posts: the **Search engines** and **SEO score** panels in the editor sidebar
Destinations, activities, categories: **URL & search engines** in each item's form
:::

## Set the SEO title and meta description

1. Open a tour and go to the **SEO** tab (or open a page or post and show the settings sidebar).
2. Under **Search engines**, enter an **SEO title**. Leave it blank to use the tour or page name.
3. Enter a **Meta description**: one or two sentences on what people will find.
4. Check the **Google preview**, then save (**Save page & SEO** on tours).

::: tip Length
Aim for a title of about 50–60 characters and a description of about 120–155. The SEO score tells you when either is too short or too long.
:::

## Use the SEO score

The SEO score (0–100) shows how well a tour, page or post is set up to rank for the phrase travellers search for.

1. Enter a **Focus keyword**, for example "Everest base camp trek".
2. Read the checks. Choose **Show only what to improve** to focus on what's missing.

The checks include:

- Keyword in the SEO title, meta description, URL slug, introduction and subheadings
- SEO title and meta description length
- Word count
- Keyword density (it also flags keyword stuffing)
- Cover image present, with alt text
- Internal links
- Keyword already used as the focus of another page

Scores appear as a column in **All tours**, **All pages** and **All posts**, so you can spot weak pages quickly.

## What Tourtify does automatically

| Feature | Details |
|---|---|
| Canonical URLs | Every page declares its main address, on your main domain |
| Open Graph and Twitter cards | Title, description and image for link previews on social media and messaging apps |
| Structured data (schema.org) | `TouristTrip` with offers on tour pages, `FAQPage`, `BreadcrumbList`, `TravelAgency`, `WebSite` with site search, `ItemList` on listings, `Review` and `AggregateRating` (from verified reviews only), `VideoObject` |
| sitemap.xml | `/sitemap.xml` lists your home page, tours, destination/activity/category pages, pages and posts, with last-modified dates |
| robots.txt | `/robots.txt` allows all public pages, keeps checkout, booking and account pages out of search, and points to your sitemap |
| llms.txt | `/llms.txt`, a plain-text guide to your site for AI assistants |
| 301 redirects | Renaming a tour slug or moving a page redirects the old URL automatically |

::: warning Drafts are invisible
Draft, scheduled and trashed content is left out of the sitemap and isn't reachable by search engines. Draft previews use private links.
:::

## Changing URLs safely

When you change a tour's web address or a page's slug or parent, the old address redirects to the new one with a permanent 301. Search engines move your ranking across. For addresses from an old website, add them under [Redirects](/website/redirects).

## Submit your site to Google

1. Connect your [custom domain](/website/custom-domains) first, so Google indexes your main address.
2. In Google Search Console, add your domain and submit `https://<your domain>/sitemap.xml`.

## Tour page sections

On a tour's **SEO** tab, **Page sections** lets you choose which sections appear on the tour page and in what order (overview and highlights, itinerary, FAQs, good to know, map and more).

## Related

- [Redirects](/website/redirects)
- [Custom domains](/website/custom-domains)
- [Pages and blog](/website/pages-and-blog)
- [Create a tour](/tours/create-a-tour)
- [Reviews](/bookings/reviews)
- [Google Analytics plugin](/plugins/google-analytics)
