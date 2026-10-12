---
title: Destinations, activities and categories
description: Organise Tourtify tours by destination, activity and category, with nested terms, landing pages, menu items and search filters.
---

# Destinations, activities and categories

Destinations, activities and categories organise your tours the way travellers search: where (Nepal › Everest Region), what (Trekking) and what kind of trip (Small group, Private). Each one gets its own landing page on your website, appears in search filters and can be linked from menus and home page blocks.

::: info Where to find it
Console › Tours › Destinations
Console › Tours › Activities
Console › Tours › Categories
:::

## The three types

| Type | Answers | Examples | Website pages |
|---|---|---|---|
| Destinations | Where? | Nepal, Everest Region, Kathmandu | `/destinations`, `/destinations/<slug>` |
| Activities | What do travellers do? | Trekking, Cycling, Cooking classes | `/activities`, `/activities/<slug>` |
| Categories | What kind of trip? | Small group, Private, Family, Luxury | `/categories`, `/categories/<slug>` |

Destinations and categories can be **nested**: Everest Region inside Nepal. A parent's page also lists its sub-destinations and their tours.

## Add a destination, activity or category

1. Go to **Tours › Destinations** (or Activities, Categories) and choose **New**.
2. Fill in the form:

| Field | Notes |
|---|---|
| Name | e.g. Everest Region |
| Inside | The parent, e.g. Nepal. **Nothing (top level)** for a top-level term. |
| Description | Shown at the top of its page. Two or three sentences work best. |
| Photo | Without one, a photo from one of its tours is used |
| Featured | Shown first in home page blocks |
| Slug | Made from the name if blank |
| SEO title / Meta description | Optional. Filled in from the name and description when left blank. |
| Order | Lower numbers are listed first |

3. Choose **Save**.

::: tip Add them while editing a tour
You can also type new destinations, activities and categories straight into a tour's **Basics** tab under **Where & what**. They're created for you.
:::

## Tag tours

1. Open a tour and go to **Basics**.
2. Under **Where & what**, add destinations, activities and categories.
3. Choose **Save classification**.

The tour then appears on each landing page, in search filters, and as linked chips on its own tour page.

## Landing pages

Each term's page includes a hero with its photo, breadcrumbs, the description, sub-destinations and the tours tagged with it (including tours in nested terms). Breadcrumb structured data is added for search engines, and every landing page is listed in your sitemap.

The list in the console shows how many tours each term has (including nested ones); click the count to see those tours.

## Show them on your website

- **Menus**: add individual terms, or **All destinations**, **All activities** and **All tour categories**, see [Menus](/website/menus).
- **Home page**: add a Destinations, Activities or Tour categories block in the [Theme Builder](/website/theme-builder), as photo tiles or a compact list.
- **Footer**: add the Destinations, Activities or Categories widget.

## Related

- [Create a tour](/tours/create-a-tour)
- [Menus](/website/menus)
- [Themes and Theme Builder](/website/theme-builder)
- [SEO](/website/seo)
