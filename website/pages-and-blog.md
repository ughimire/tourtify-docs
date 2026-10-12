---
title: Pages and blog
description: Create website pages and blog posts in Tourtify with the block editor, schedule them, preview drafts and organise posts with categories and tags.
---

# Pages and blog

Pages hold everything that isn't a tour: About us, FAQs, booking policies. Blog posts bring travellers to your website with trip reports, guides and news. Both use the same block editor, with a WordPress-style settings sidebar for status, scheduling, URL and SEO.

::: info Where to find it
Console › Website › Pages (All pages, Redirects)
Console › Website › Blog (All posts, Categories, Tags)
:::

## Create a page or post

1. Go to **Website › Pages** (or **Website › Blog**) and choose **Add new**.
2. Type a title in **Add title**.
3. Write the content in the block editor (see below).
4. Open the settings sidebar (**Show settings**) and fill in the URL, featured image, excerpt and SEO.
5. Choose **Save draft**, **Preview**, then **Publish**.

The editor autosaves. The header shows **Saving…**, **Unsaved changes** or **Saved**.

## Use the block editor

The editor works like Notion:

- Type `/` on an empty line to open the block menu: headings, lists, quotes, images, tables, video and more.
- Hover a block and drag the handle on the left to move it.
- Paste or drop an image to upload it to the [Media library](/website/media-library).
- Select text to format it or add a link.

## Settings sidebar

| Setting | What it does |
|---|---|
| Status | Draft, Published, Scheduled or In trash |
| Publish date / time | **Immediately**, a future date (schedules the post) or a past date (backdated) |
| URL | The slug. Pages can sit under a **Parent page**, giving nested URLs like `/about/team` |
| Author | Who wrote it (posts) |
| Categories / Tags | Posts only |
| Featured image | With **Alt text**; used in lists and when shared |
| Excerpt | A short summary shown in lists and on social shares |
| SEO score | Focus keyword and live checks (see [SEO](/website/seo)) |
| Search engines | SEO title, meta description and a Google preview |

::: tip Put a page in your navigation
New pages don't appear in the header automatically. Use **Add it to a menu** in the sidebar, or go to [Menus](/website/menus).
:::

## Schedule a post

1. In the sidebar, set **Publish date** and **Publish time** in the future.
2. The main button changes to **Schedule**. Choose it.
3. The post shows as **Scheduled** and goes live at that time.

## Preview a draft

Choose **Preview** to open the draft on your real website through a private, signed link. You can share the link with a colleague for review; it doesn't make the page public.

## Manage the list

The **All pages** and **All posts** screens have status views: **All**, **Published**, **Drafts**, **Scheduled** and **Trash**. You can search, filter posts by category, and see each item's SEO score.

**Bulk actions**: Publish, Switch to draft, Move to Trash; in Trash, Restore or Delete permanently.

::: warning Trash
Items in Trash are off your website. **Delete permanently** can't be undone.
:::

## Categories and tags

Categories group posts by topic ("Trek guides", "News"); tags label them with keywords ("Everest", "packing"). Each one gets an archive page on your website: `/blog/category/<slug>` and `/blog/tag/<slug>`.

1. Go to **Website › Blog › Categories** (or **Tags**) and choose **New**.
2. Enter a **Name**. The **Slug** is made from the name if you leave it blank.
3. For categories, optionally choose a **Parent category** and add a **Description** shown at the top of the archive page.
4. Save.

You can also add tags directly in a post's sidebar: separate them with commas or the Enter key.

## Changing a URL

When you change a published page's slug or parent, Tourtify adds a 301 redirect from the old address automatically, so links and search rankings keep working. See [Redirects](/website/redirects).

## Related

- [Media library](/website/media-library)
- [Menus](/website/menus)
- [SEO](/website/seo)
- [Redirects](/website/redirects)
- [Themes and Theme Builder](/website/theme-builder)
