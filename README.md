# Tourtify Docs

Source for [docs.tourtify.com](https://docs.tourtify.com): the help centre and developer documentation for
[Tourtify](https://tourtify.com), commission-free booking software for tour and activity operators.

Built with [VitePress](https://vitepress.dev).

## Develop

Requires Node.js 20+.

```bash
npm install
npm run dev       # local preview with search at http://localhost:5173
npm run build     # static site in .vitepress/dist (fails on dead links)
npm run preview   # serve the production build
```

## Structure

| Folder | Section |
|---|---|
| `get-started/` | Introduction, quick start, console tour, plans & billing, WordPress migration |
| `tours/` | Creating tours, itinerary, pricing, departures, booking modes, taxes |
| `bookings/` | Bookings, checkout, payments, refunds, enquiries, customers, reviews, emails, reports |
| `website/` | Theme Builder, pages & blog, media, menus, domains, SEO, redirects, consent |
| `plugins/` | One page per plugin, plus an overview |
| `account/` | Business settings, team & roles, two-step sign-in, console languages |
| `developers/` | Webhooks reference, signature verification, data model, REST API status |
| `help/` | FAQ, troubleshooting, security, changelog, support |

To add a page, create the Markdown file with `title` and `description` frontmatter, then add it to the sidebar in
`.vitepress/config.mts`.

The build also publishes every page as Markdown (`/path.md`, used by the "Copy page" button) plus `llms.txt` and
`llms-full.txt` for AI assistants.

## Deploy

**Netlify:** import the repo; `netlify.toml` sets the build command (`npm run build`), publish directory
(`.vitepress/dist`), Node 22 and security/caching headers, so no settings are needed in the Netlify UI.

**Other hosts:** build with `npm run build` and serve `.vitepress/dist` with clean URLs enabled.
