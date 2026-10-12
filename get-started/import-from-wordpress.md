---
title: Move from WordPress
description: Import WP Travel Engine trips, destinations, pages, posts and images from a WordPress export into Tourtify, with 301 redirects from your old URLs.
---

# Move from WordPress

If your current website runs on WordPress, you can bring your content into Tourtify in a few minutes. The importer understands **WP Travel Engine** trips as well as standard pages, posts and images, and it keeps your search rankings by redirecting old addresses.

::: info Where to find it
Console › Settings › Team & tools › Import
:::

## What gets imported

| From WordPress | Becomes in Tourtify |
|---|---|
| WP Travel Engine trips | **Draft** tours with overview, itinerary days, includes and excludes, FAQs, highlights, duration and price |
| Destinations, activities, trip types | Destinations, activities and tour categories, nested as they were |
| Pages | Pages, keeping the parent/child hierarchy |
| Posts | Blog posts with their categories and tags |
| Images used by the content | Copied into your media library |
| Old URLs | 301 redirects to the new pages, so links and rankings carry over |

Tours always arrive as drafts so you can check prices and departures before they go live.

## Export from WordPress

1. In WordPress, go to **Tools › Export**.
2. Choose **All content** and select **Download Export File**. You get an `.xml` file.

## Import into Tourtify

1. Open **Settings › Team & tools › Import** and drop the `.xml` file onto **Upload a WordPress export file** (up to 50 MB).
2. Tourtify reads the file and shows a **preview** of everything it found. Nothing is imported until you confirm.
3. Start the import. Images are copied in the background; you can keep working.
4. Review your imported tours, add [prices](/tours/pricing) and [departures](/tours/departures-and-availability), then publish.

Earlier imports are listed on the same page so you can see what came in and when.

## After the import

- Check **Website › Pages › Redirects** to see the redirects created from your old WordPress addresses. Add any others by hand.
- [Connect your domain](/website/custom-domains) when you're ready to switch. Your old URLs then redirect to the new pages automatically.
- Set up [menus](/website/menus) and your [home page](/website/theme-builder).

::: tip Not on WordPress?
Import single tours from any website with [Import a tour from a URL](/tours/import-a-tour).
:::

## Related

- [Redirects](/website/redirects)
- [SEO](/website/seo)
- [Quick start](./quick-start)
