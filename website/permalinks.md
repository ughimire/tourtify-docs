---
title: Permalinks
description: Rename the address bases of your website's sections, such as /tours to /trips, with permanent 301 redirects from every old address.
---

# Permalinks

Permalinks set the first part of the web address for each section of your website. Change **tours** to **trips**, **treks** or **experiences**, or use a word in your own language. Every old address keeps working: it sends visitors and search engines to the new one with a permanent (301) redirect.

::: info Where to find it
Console › Website › SEO & URLs › Permalinks
:::

## What you can rename

| Section | Default address | Example |
|---|---|---|
| Tours | `/tours` | `yoursite.com/tours/everest-base-camp` |
| Destinations | `/destinations` | `yoursite.com/destinations/nepal` |
| Activities | `/activities` | `yoursite.com/activities/trekking` |
| Categories | `/categories` | `yoursite.com/categories/family` |
| Blog | `/blog` | `yoursite.com/blog/best-time-to-visit` |
| Blog categories | `/blog/category` | `yoursite.com/blog/category/travel-tips` |
| Blog tags | `/blog/tag` | `yoursite.com/blog/tag/monsoon` |

Blog categories and tags sit under the blog's base: rename the blog to `stories` and categories to `topics`, and a category page is `yoursite.com/stories/topics/travel-tips`. Permalinks are part of every plan.

The part after the base (`everest-base-camp`) is each item's own web address name. You change it in the tour, destination, category or post itself.

## Change a base

1. Go to **Website › SEO & URLs › Permalinks**.
2. Under **Address bases**, type the new base for a section, e.g. `trips`. Use lowercase letters, numbers and hyphens, up to 40 characters. Spaces become hyphens as you type.
3. The hint under each field shows the full address it gives, e.g. `yoursite.com/trips/everest-base-camp`.
4. Select **Save permalinks**.

The change applies at once. Your menus, the sitemap, emails and links in the console follow it. If your website has more than one language, the language prefix stays in front, e.g. `/de/trips/…`, unless you give that language bases of its own (below).

## Addresses in each language

With the [Multilingual website](./languages) plugin on, every website language can have its own words in its addresses, the way travellers search in it:

| | English (main) | German | Nepali |
|---|---|---|---|
| Tour | `/tours/everest-base-camp` | `/de/reisen/everest-basislager` | `/ne/yatra/everest-base-camp` |
| Page | `/about` | `/de/ueber-uns` | `/ne/about` |
| Blog post | `/blog/best-time` | `/de/blog/beste-reisezeit` | `/ne/blog/best-time` |
| Destination | `/destinations/nepal` | `/de/reiseziele/nepal` | `/ne/destinations/nepal` |
| Blog category | `/blog/category/tips` | `/de/blog/kategorie/tipps` | `/ne/blog/category/tips` |
| Contact | `/contact` | `/de/contact` | `/ne/contact` |

- **Bases per language.** On Permalinks, each language has its own column under the main one. Leave a field empty to use the main language's base. The hint shows the full address it gives.
- **Slugs per item.** A tour, page, post, destination, activity or category gets its own slug in a language on its Translate screen (**Web address**), with a suggestion in plain letters made from the translated title. Each slug is unique within its language.
- **Plain letters are safest.** Slugs in other scripts (such as `सगरमाथा`) work, but when an address is shared they turn into long codes like `%E0%A4%B8…`. The console warns you when a slug has letters outside a–z.
- **Old addresses redirect in every language.** A base or slug you change in one language keeps redirecting (301) to the new one.
- Without the plugin, the website has one language and only the bases above apply. Switch the plugin off and the per-language bases and slugs are kept for when you switch it back on.


## Old addresses keep working

Every base a section has used is remembered. The field shows **Redirects from: /tours** (and any earlier bases), and those addresses send visitors to the same page under the new base with a 301 redirect, so search rankings and links in old emails or on other sites carry over.

You can switch back to an old base at any time.

## Bases you can't use

Saving shows an error when a base:

- is an address the website uses itself, such as `account`, `booking`, `checkout`, `contact`, `search`, `reviews`, `gift-vouchers`, `rentals`, `passes`, `login` or `admin`;
- is used by two sections at once;
- is already the address of one of your top-level pages (rename that page or choose another base);
- still redirects old links of another section.

## Good to know

- Permalinks rename whole sections. To send one old address somewhere new, for example after moving from WordPress, use [Redirects](./redirects).
- Changing a base doesn't change the tour pages themselves, their SEO titles or their reviews.
- Google may take a few days to show the new addresses in search results. The redirects cover the time in between.

## Related

- [Redirects](./redirects)
- [SEO](./seo)
- [Pages & blog](./pages-and-blog)
- [Menus](./menus)
