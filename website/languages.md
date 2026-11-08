---
title: Website languages
description: Show your website in more than one language, translate tours, pages, menus and the footer by hand or with AI, and let visitors switch language.
---

# Website languages

Your website can be shown in your main language plus up to 10 more. Visitors switch language on your website, each language has its own addresses (such as `/de/…`), and search engines are told which page is which language. Anything you haven't translated yet shows in your main language.

::: info Where to find it
- Choose languages: Console › Website › Appearance › Site details › **Website languages**
- Translate the home page, menus and footer: Website › Appearance › Site details › **Translate the home page, menus and footer**
- Translate a tour: the tour editor › **Translations**
- Translate a page or post: open it from Website › Pages or Website › Blog
:::

## Languages you can add

English, Spanish, French, German, Italian, Portuguese (Brazil), Portuguese (Portugal), Dutch, Polish, Swedish, Danish, Norwegian, Finnish, Czech, Russian, Ukrainian, Turkish, Arabic, Hebrew, Hindi, Nepali, Bengali, Chinese (Simplified), Japanese, Korean, Thai, Vietnamese, Indonesian and Malay.

Your website's built-in text (buttons, checkout, emails' standard wording, dates and prices) comes ready translated in these languages. Arabic and Hebrew pages are laid out right to left.

The language your team uses in the console is a separate choice for each person. See [Console languages](/account/console-languages).

## Add a language

1. Go to **Website › Appearance › Site details**.
2. Under **Website languages**, tick the languages visitors can switch to (up to 10).
3. Select **Save languages**.

Your website now offers a language switcher, and each page is available under the language prefix, e.g. `yoursite.com/de/tours/everest-base-camp`. Pages in your main language keep their addresses without a prefix.

## Translate your content

Content you write is translated piece by piece. Fields you leave empty show your main-language text on that language's website.

**Tours**

1. Open the tour and go to **Translations**. Each language shows how many fields are done, e.g. **12 of 30**.
2. Choose a language. Each field shows the main-language source next to the translation.
3. Type the translation, use **Copy from source** for text that stays the same, or select **Translate with AI**.
4. Select **Save translation**.

**Home page, menus, footer and announcement bar**

Go to **Website › Appearance › Site details** and select **Translate the home page, menus and footer**. The page is grouped by **Home page**, **Header**, **Footer**, **Menus** and **Announcement bar**.

**Pages and blog posts**

Each page and post in **Website › Pages** and **Website › Blog** shows which languages are translated (for example "German: not translated yet"). Open it to translate its title, excerpt, content, page sections and SEO.

### Translate with AI

**Translate with AI** fills only empty fields, unless you tick **Replace existing**, and counts as one AI draft from your plan's monthly allowance. Review the translation, then save: nothing is saved until you select **Save translation**. Keep the `**bold**`, `*italic*` and `[link text](address)` markers where they are.

## How visitors and search engines see it

- The switcher links to the same page in each language, so visitors stay where they are.
- Each language version has its own address and its own SEO title and description, and the pages link to each other with `hreflang`, so Google shows the right language in each country.
- Every page of your website exists in every language: the tour list, destinations, activities and categories, the blog and its categories and tags, contact, gift vouchers, the cart and checkout. Their built-in text is in that language, and destination names show translated where you've translated them. Tours, pages and blog posts get a language's address once they are translated; until then, links to them go to your main language.
- Tours, pages, blog posts, destinations, activities and categories can each have their own address in each language (`/de/reisen/everest-basislager`), set on their Translate screen. Each language can also use its own words for the sections, like `reisen` for tours. See [Permalinks](./permalinks#addresses-in-each-language).
- Links on a page lead to the same language wherever that page exists in it, so visitors don't drop back to your main language.
- The sitemap lists every language version, each with its alternates.
- Visitors are never sent to another language automatically from their browser's language or location (Google advises against it). They choose with the switcher.
- The page's language is in the HTML the server sends: the header, content and footer are marked with it (and right to left for Arabic and Hebrew). The `<html>` element gets it as the page loads. Google reads a page's language from its content and `hreflang` links, not from `<html lang>`, so this doesn't change rankings.

## Good to know

- Booking emails go out in the language the traveller booked in, where a translation exists.
- Prices and currencies don't change with the language. To let travellers pay in their own currency, use the [Currency switcher](/plugins/currency-switcher).

## Related

- [Console languages](/account/console-languages)
- [Itinerary & content](/tours/itinerary-and-content)
- [SEO](./seo)
- [AI assistant](/plugins/ai-assistant)
