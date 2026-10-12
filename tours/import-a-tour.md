---
title: Import a tour
description: Create a draft Tourtify tour from any tour page on the web, with AI extracting the itinerary, highlights, inclusions, FAQs and price.
---

# Import a tour

Already have your tours on another website? Paste the link to a tour page and Tourtify creates a draft tour for you: name, description, photo, itinerary, highlights, inclusions and FAQs. You review it, add dates and publish. Nothing goes live until you say so.

::: info Where to find it
Console › Tours › All tours › **Import** (Import a tour from a website)
:::

## Import from a link

1. Go to **Tours** and choose **Import**.
2. Paste the **Tour page link**: a page on your old website, a WordPress site or a listing.
3. Choose **Import**. Tourtify shows "Reading the page…" for a few seconds.
4. The new tour opens in the editor as a **Draft**.

## What gets imported

There are two levels, depending on how Tourtify is set up:

| Mode | What it reads |
|---|---|
| **AI import** | AI reads the page and fills in the itinerary, highlights, what's included and not included, FAQs, and a starting price |
| **Basic import** | The title, description, photo and price the page publishes for search engines and social sharing |

The import dialog tells you which mode is active.

Tourtify creates a **Standard** option with an **Adult** price when the page shows a price in your business currency. Prices in other currencies are never converted; you set them yourself.

::: warning Always check the draft
Imported tours are always drafts. Check prices, inclusions and the itinerary carefully: AI can misread a page. Then add departures and publish.
:::

## After the import

1. **Basics**: check the name, type, duration and summary. Add destinations and activities.
2. **Itinerary** and **Highlights & FAQs**: tidy up the text.
3. **Pricing & options**: confirm traveller types and prices.
4. **Departures**: add dates and seats.
5. **Media**: add more photos from the [Media library](/website/media-library).
6. **Publish**.

If the old page is on your previous website, add a [redirect](/website/redirects) from its address to the new tour once you move your domain.

## Import a whole WordPress site

Moving from WordPress or WP Travel Engine? Use **Settings › Team & tools › Import** instead:

1. In WordPress, go to **Tools › Export**, choose **All content** and download the file.
2. In Tourtify, go to **Settings › Import** and upload the `.xml` file (up to 50 MB).
3. Review what Tourtify found, then import.

WP Travel Engine trips become draft tours (overview, itinerary, includes and excludes, FAQs, highlights, duration, price); destinations, activities and trip types, pages and posts are imported; images are copied to your media library; and old WordPress addresses redirect automatically. Nothing is imported until you've seen what's inside.

## Troubleshooting

| Problem | What to do |
|---|---|
| The page couldn't be read | Check the link opens in a private browser window without a login. Some sites block automated reading. |
| No price was imported | The page had no price in your currency. Add it on **Pricing & options**. |
| Itinerary is empty | Basic import doesn't read itineraries. Add the days on the **Itinerary** tab. |

## Related

- [Create a tour](/tours/create-a-tour)
- [Itinerary and content](/tours/itinerary-and-content)
- [Redirects](/website/redirects)
- [Import from WordPress](/get-started/import-from-wordpress)
- [Quick start](/get-started/quick-start)
