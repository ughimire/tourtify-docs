---
title: Visual editor and widget library
description: Design your whole Tourtify website in one visual editor - site styles, header, footer, home page and any page - with almost 100 widgets, containers, per-device styles, Layers, history and keyboard shortcuts.
---

# Visual editor and widget library

Tourtify has **one editor for your whole website**. Site styles (colours, fonts, buttons, tour cards), the header and footer, the home page and every page built with the page builder are edited in the same place, on the real website, with one undo history, one autosaved draft and one **Publish**.

Each page can be a **regular page** (text and images in the page editor, like a document) or a **page built in the visual editor** (containers and widgets). Blog posts are always regular content.

::: info Where to find it
Console › Website › Appearance › **Customize** (site styles, header, footer and home page)
Console › Website › Pages › **Add new page** › **Page builder**, or an existing page › **Page layout › Use the page builder**
In the editor, the title at the top switches between the home page, your builder pages, **Edit header** and **Edit footer**.
:::

## The editor at a glance

- **Canvas**: your real website, with your theme, tours and prices. Hover shows each element's outline and name; click selects it. Click the header or footer to open their builders.
- **Panel** (beside the canvas; drag its edge to make it wider, ⌘\ hides it, ⌘⇧F is focus mode): **Widgets**, **Library** (ready-made blocks and your saved templates), **Site styles** and, on a page, **Page** settings. Selecting an element shows its settings right there, in three tabs: content, **Style** and **Advanced**.
- **Top bar**: what you're editing and a status pill (**Live**, **3 unpublished changes**, **Not published yet** or **Scheduled**), desktop / tablet / mobile, undo / redo, **History**, **Layers**, **Quick search**, preview and **Publish**.

## Start fast

- **First time in the editor?** A four-step tour shows where things are. It's skippable, and you can replay it from **More › Take the tour**.
- **Start from a template**: a gallery of whole pages (built from editable blocks, or from ready-made sections), each drawn in your site's colours. Pick one and it appears on your page straight away: **Use this template**, **Try another**, or **Cancel** to get your page back as it was.
- **Suggestions**: simple checks on the page suggest a next step, such as "Add a booking section here", "End with a call to action" or "Add testimonials". They show in the Widgets panel and as buttons under the last element, and you can dismiss them.
- **Favourites and Recently used**: star a widget and it stays at the top of the Widgets panel.

## Build with containers and widgets

- **Drag** a widget from the panel onto the page, or click it to add it after the selected element. While you drag, a line shows where it lands, the container it goes into is outlined, and a label says where ("Into Row · after Heading"). The page scrolls when you get near an edge. Added, moved, duplicated and deleted elements show on the canvas at once.
- **Containers** arrange elements in a row, a column or a **grid**, nested up to three levels: gap, alignment, wrapping, boxed or full width, minimum height and HTML tag, each per device. Ready-made layouts: one column, 2, 3 or 4 columns, a grid and 1/3 + 2/3.
- **Handles** on the canvas: hovering shows the element's name with a grip to drag it; the selected element has move, edit text, add after, duplicate and delete. The panel shows where it sits (Row › Column › Heading), and each step is one click away.
- **Select several**: Shift-click elements, then give them all the style of the first, paste a copied style, reset or delete them together.
- **Edit text in place**: click a selected heading, text or button label and type.
- **Right-click** any element: edit, duplicate, copy, paste, paste style, reset style, hide, show in Layers, save as template, delete. Copy and paste work between pages.
- **Layers** (⌘I / Ctrl+I): the page as a tree. Click to select, double-click to rename, the eye hides an element everywhere, drag to reorder or move into a container.
- **Empty containers** show a "+" placeholder; empty widgets explain what they need. Visitors never see these hints.

## Style and Advanced settings

Every element has the same settings, so pages look consistent:

| Tab | Settings |
|---|---|
| Style | Typography (your heading or text font, size, weight, line height, letter spacing, letters, italic, underline), text colour, background (colour, gradient, photo with overlay and parallax), border, rounded corners, shadow |
| Advanced | Padding and margin per side, text alignment, width (full, fit content, fill space or a %), nudge position and stacking order, hide on desktop / tablet / mobile, entrance animation with delay, anchor ID |

**Find a setting** searches every tab by name (for example "letter"). Empty settings show the value that applies on the page. Each setting has its own reset. Device dots show which devices have their own value; a device without one uses the larger one ("Same as Desktop"). Pointing at a choice (shadow size, letters, alignment, a theme preset) previews it on the page before you click. While Advanced is open, padding (green) and margin (orange) show on the selected element. Colours come from your **global colours** (Primary, Accent, Text…): change them in Site styles and every element using them follows. Any custom colour works too.

Entrance animations only play for visitors who haven't asked their device for less motion. Custom CSS or scripts can't be added to elements; every value is checked on the server.

## Site styles

**Site styles** hold everything that applies to every page: theme presets, global colours, global fonts, buttons and shapes, tour cards, the **header** and **footer** builders (docked under the canvas while open), the [announcement bar](/website/announcement-bar) and custom CSS. **Save as a theme** keeps them in My themes. Colours, fonts and shapes update the canvas instantly.

## Saving, publishing and history

- Changes **save automatically** as a draft a moment after you make them (⌘S saves at once). The top bar always says whether you're looking at the live website or an unpublished draft.
- Offline? Keep working: changes are kept and saved when the connection is back. If a teammate (or another tab) changed the same page or site styles meanwhile, the editor tells you and lets you load their version or keep yours; nothing is overwritten silently.
- **Publish** shows what goes live first: elements added, edited, moved and removed by name, and which site styles changed. Publish now, or **Schedule** a date and time (the draft goes live as it is then; the schedule can be cancelled). **Copy preview link** gives a colleague a link to the draft that works for 7 days without signing in. On a page with site style changes, both go live together.
- **History** › **This session** lists every change since you opened the editor: click one to go back to it. **Published versions** keeps the last 30 published versions of the page and of the site styles; **Load** puts one into the draft.

## Keyboard shortcuts

| Keys | Action |
|---|---|
| ⌘Z / ⇧⌘Z (Ctrl+Z / Ctrl+Y) | Undo / redo |
| ⌘C, ⌘V, ⇧⌘V | Copy, paste, paste style |
| ⌘D, Delete | Duplicate, delete |
| Esc / ⇧Enter, Enter | Select the parent container, select inside a container (or edit text) |
| ↑ / ↓, Alt+↑ / Alt+↓ | Select the previous or next element, move the element up or down |
| F2, ⇧Click | Edit text in place, select several elements |
| ⇧⌘F, ⌘\ | Focus mode, hide or show the panel |
| ⌘S, ⌘P | Save the draft now, preview in a new tab |
| ⌘E, ⌘I, ⇧⌘H | Quick search, Layers, History |
| ⌘/ | All shortcuts |

**Quick search** (⌘E) finds elements on the page, widgets to add, site styles, other pages and actions. The whole editor works with a keyboard and a screen reader. Layers is a full tree: arrows move between rows and open containers, Enter selects, F2 renames, Alt+↑/↓ moves and Delete removes. Every change is announced, the right-click menu works with arrow keys, and the editor respects reduced motion. It works in every console language, right-to-left included.

## Create a page

1. Go to **Website › Pages** and choose **Add new page**.
2. Choose **Page builder**, type the title and pick a starting point: Blank, Landing page, About us, Destination guide or Seasonal offer.
3. The editor opens with the page as a **draft**. Nothing is on your website yet.

Templates and library blocks never invent facts: numbers, quotes and people start empty (or as placeholders you replace) and empty widgets stay hidden from visitors.

## Widget library

| Group | Widgets |
|---|---|
| Layout | Container (row, column or grid; nest up to 3 levels), 2/3/4 columns, grid, spacer, divider |
| Basic | Heading, text, image, button, icon, icon box, image box, icon list |
| Media | Gallery (with lightbox), image carousel, image slider*, video, audio, before & after, hotspots, embed* |
| Navigation & site parts | Menu, breadcrumbs, table of contents, back to top, site logo, search box, social icons, contact info, opening hours, payment methods, legal links, currency switcher, bookings login |
| Forms | Enquiry form (phone, date and travellers optional), contact form, newsletter sign-up, chat / WhatsApp call to action |
| Social proof | Reviews, review badges, testimonials, featured testimonial, trust badges, awards & partners, counters, stats, star rating, team & guides |
| Interactive | Accordion, toggle, tabs*, pop-up, flip box, countdown*, progress bar, notice |
| Tours & booking | Tours, featured tour, tour carousel, upcoming departures, booking widget, search bar, destinations, activities, categories, category grid, compare tours*, gift voucher promo, passes & memberships, rentals |
| Travel info | Itinerary, what's included, packing list, key facts, map, Google map, best time to visit*, FAQ |
| Content | Rich text, text & image, columns, icon grid, quote, card grid, blog posts, featured stories, author box, share buttons, call to action, pricing cards*, page header, image banner, hero, video hero*, custom HTML* |

\* Premium: included in the Growth and Scale plans (shown with a lock on Starter). After a downgrade, premium widgets already on a page stay saved but aren't shown on the website until you upgrade again.

Widgets with live data (tours, departures, booking, reviews, vouchers, passes, rentals, blog, menus) always show what's current.

### Embeds and custom HTML

For safety, **Embed** accepts links (or embed codes) from YouTube (privacy-enhanced), Vimeo, Google Maps, Instagram posts, OpenStreetMap and Spotify only. **Custom HTML** keeps formatting, links, images and tables; scripts, styles, iframes and event handlers are removed when you save.

## Translations

On a multi-language website, **Translate** (in the editor's ⋯ menu) lists every word on the page, including inside containers: headings, texts, buttons, list items and rich text. Untranslated words show in your main language. Links, tours, numbers and map places are never translated.

## Switch between regular and builder pages

Nothing is lost: **regular → builder** turns the page's text into a rich text section under a page header; **builder → regular** shows the original text again, and the builder content comes back if you switch again. Pages built before the visual editor open with their sections and styles exactly as they were.

## Fast published pages

Visitors get plain, server-rendered pages: the editor's code never loads on your website. Element styles are one small stylesheet, photos load lazily and nothing shifts while the page loads.

## Originality & licences

Tourtify's editor, widgets, library blocks and icons are our own work. The editor is built on general, industry-standard patterns (a side panel, a canvas, drag and drop, device views, a layer tree, undo and redo, containers and widgets); it contains no code, icons, templates, styling or text from other page builders. Icons are from Lucide (ISC licence), already part of Tourtify. Library blocks were designed and written by Tourtify and contain no third-party media. The visual editor added no new third-party packages.
