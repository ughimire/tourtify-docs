---
title: Cookie consent and tracking
description: How your Tourtify website asks visitors for cookie consent before loading Google Analytics or Meta Pixel, and how custom code is handled.
---

# Cookie consent and tracking

Tourtify websites only set analytics and advertising cookies after the visitor agrees. The consent banner appears automatically as soon as you switch on a tracking plugin, and every tag waits for the visitor's choice. Booking works either way.

::: info Where to find it
Console › Plugins › Google Analytics / Meta Pixel (the banner has no separate settings)
:::

## When the banner shows

| Your setup | What visitors see |
|---|---|
| No tracking plugins on | No banner. Your website sets no analytics or ad cookies. |
| [Google Analytics](/plugins/google-analytics) or [Meta Pixel](/plugins/meta-pixel) on | A cookie banner on the first visit, until the visitor chooses |

The banner says your business uses cookies to understand how visitors use the site and to measure ads, that they're only set if the visitor agrees, and that booking works either way. **Accept** and **Decline** are equal-weight buttons, with no pre-ticked boxes or dark patterns.

## What happens after the choice

- **Accept**: Google Analytics (with Google Consent Mode v2) and Meta Pixel load and start tracking, including e-commerce events (view item, begin checkout, purchase).
- **Decline**: no tracking tags load. Existing Google Analytics and Meta cookies are cleared where possible.
- The choice is remembered for about **6 months** on that device.

Visitors can change their mind at any time with the **Cookie settings** link at the bottom of every page.

## Set up tracking

1. Go to **Plugins** and switch on **Google Analytics** or **Meta Pixel**.
2. Enter your Measurement ID or Pixel ID in the plugin settings.
3. Visit your website in a private window, accept cookies, and check your analytics dashboard for the visit.

See [Google Analytics](/plugins/google-analytics) and [Meta Pixel](/plugins/meta-pixel) for details.

## Custom code

For security and privacy, Tourtify doesn't accept arbitrary tracking scripts. Third-party tags come only through plugins, which are consent-aware. You can still adjust the look of your site with **Custom CSS** in the [Theme Builder](/website/theme-builder).

::: tip Bot protection
Enquiry and contact forms are protected by a hidden honeypot field and rate limits, so you don't need a CAPTCHA and visitors aren't asked to solve puzzles.
:::

## Your responsibilities

Tourtify provides the consent mechanism, but you are responsible for your privacy policy. Create a **Privacy policy** page under [Pages](/website/pages-and-blog) that explains what you collect and why, and link it from your footer menu.

## Related

- [Google Analytics plugin](/plugins/google-analytics)
- [Meta Pixel plugin](/plugins/meta-pixel)
- [Themes and Theme Builder](/website/theme-builder)
- [Pages and blog](/website/pages-and-blog)
