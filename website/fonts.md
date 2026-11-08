---
title: Fonts
description: Choose how your Tourtify website loads its fonts (hosted on Tourtify or loaded from Google Fonts), upload your own fonts, and how fonts appear in PDFs and emails.
---

# Fonts

Pick your heading and body fonts in the visual editor (**Site styles › Fonts**). This page covers the two other choices:
how your website loads those fonts, and fonts of your own.

::: info Where to find it
Console › Website › Appearance › Site details › Fonts
Console › Website › Appearance › Customize › Site styles › Fonts (the same delivery choice, next to the font pickers)
:::

## How your website loads fonts

You choose. Neither option is locked, and you can switch at any time.

| | Download and host on Tourtify | Load from Google Fonts |
|---|---|---|
| Where the files come from | Tourtify's servers, from your website's own address | Google's servers (fonts.googleapis.com, fonts.gstatic.com) |
| What visitors' browsers contact for fonts | Only your website | Google, which receives the visitor's IP address, browser and the page address |
| Where Google is blocked or slow (for example mainland China) | Fonts load normally | Fonts may be slow or missing; text shows in the fallback font |
| Privacy | No font requests to a third party | In the EU and UK, some regulators and courts have treated sending visitors' IP addresses to Google this way as needing their consent (see below) |

**Switching to "Download and host on Tourtify"** downloads your fonts in the background. The setting shows the progress,
and until the files are ready your website shows a matching system font in the same size (no layout change), never
contacting Google. It usually takes a few seconds.

**Your layout doesn't change either way.** Font sizes, line heights and spacing come from your theme's design tokens, not
from the font files. While a font loads, text shows in a fallback font that's scaled to the same size and line spacing,
so nothing jumps when the real font arrives.

### The legal background (not legal advice)

- **Germany / EU.** On 20 January 2022 the Munich Regional Court (LG München I, case 3 O 17493/20) held that a website
  that loaded Google Fonts from Google's servers without the visitor's consent passed the visitor's IP address to Google
  without a legal basis under the GDPR, granted an injunction and awarded EUR 100 damages. The court noted fonts can be
  used without contacting Google. The ruling was followed by a wave of warning letters in Germany and Austria.
  Sources: [ruling text (rewis)](https://gwern.net/doc/www/rewis.io/349d376d95f9b44a7e8119b1408f382e6f19938b.html),
  [summary (activeMind.legal)](https://www.activemind.legal/guides/ruling-google-fonts/).
- **What Google says.** Google's Fonts privacy FAQ states that the Fonts API receives the visitor's IP address, the
  requested URL and HTTP headers, sets no cookies and isn't used for ad profiles:
  [developers.google.com/fonts/faq/privacy](https://developers.google.com/fonts/faq/privacy).
- **United Kingdom.** There's no UK ruling on Google Fonts; an IP address is personal data under the UK GDPR, so loading
  fonts from Google needs a lawful basis like any other processing. Many UK sites rely on legitimate interests; others
  self-host to avoid the question.
- **Mainland China and other places where Google is blocked.** Requests to Google's font servers are blocked or very slow
  there, which delays or breaks text on pages that depend on them
  ([example report](https://appinchina.co/does-google-fonts-api-work-in-china)).

If you're unsure which applies to your business, ask your own adviser.

## Your own fonts

Upload a font your brand uses and pick it in **Site styles › Fonts** like any other font.

- **Files:** WOFF2 (best), WOFF or TTF, up to 4 MB each. Upload one file per weight and style (for example Regular 400
  and Bold 700). Up to 20 files.
- **Licence:** you confirm you have the right to use the font on your website. Many commercial fonts need a separate web
  licence.
- **Where it's served from:** always from your website's own address (whatever you chose above). Only your website can
  load your files.
- **Name:** letters, numbers, spaces and hyphens; it can't reuse a name from the font list.

## Fonts in PDFs and emails

- **PDFs** (invoices, itineraries, vouchers, statements) use your website's fonts when Tourtify has a local copy (every
  font in the font list, and TTF files you upload). Documents with text in other scripts (for example Devanagari or
  Arabic) use a font that covers them instead.
- **Emails** use standard system fonts, so they look right in every email app and never load fonts from anywhere.
