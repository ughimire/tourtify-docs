import { defineConfig, type DefaultTheme, type SiteConfig } from 'vitepress'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const SITE = 'https://docs.tourtify.com'
const WEBSITE = 'https://tourtify.com'
const APP = 'https://app.tourtify.com'
const TITLE = 'Tourtify Docs'
const DESCRIPTION =
  'Guides and reference for Tourtify, the commission-free booking platform for tour and activity operators: website, tours, bookings, payments, plugins and developer APIs.'

const plugins: DefaultTheme.SidebarItem[] = [
  { text: 'Plugins overview', link: '/plugins/' },
  {
    text: 'Payments',
    collapsed: true,
    items: [
      { text: 'Deposits & balance payments', link: '/plugins/deposits' },
      { text: 'Instalment plans', link: '/plugins/instalments' },
      { text: 'Booking & traveller fees', link: '/plugins/booking-fees' },
      { text: 'Currency switcher', link: '/plugins/currency-switcher' },
      { text: 'PayPal', link: '/plugins/paypal' },
      { text: 'Razorpay', link: '/plugins/razorpay' },
      { text: 'Khalti', link: '/plugins/khalti' },
    ],
  },
  {
    text: 'Sales',
    collapsed: true,
    items: [
      { text: 'Add-ons & extras', link: '/plugins/add-ons-and-extras' },
      { text: 'Group discounts', link: '/plugins/group-discounts' },
      { text: 'Dynamic pricing', link: '/plugins/dynamic-pricing' },
      { text: 'Hotel booking', link: '/plugins/hotel-booking' },
      { text: 'Waitlist', link: '/plugins/waitlist' },
      { text: 'External booking links', link: '/plugins/external-booking-links' },
    ],
  },
  {
    text: 'Marketing',
    collapsed: true,
    items: [
      { text: 'Promo codes', link: '/plugins/promo-codes' },
      { text: 'Abandoned checkout recovery', link: '/plugins/abandoned-checkout' },
      { text: 'Google Analytics 4', link: '/plugins/google-analytics' },
      { text: 'Meta Pixel', link: '/plugins/meta-pixel' },
    ],
  },
  {
    text: 'Operations',
    collapsed: true,
    items: [
      { text: 'QR tickets & check-in', link: '/plugins/qr-tickets' },
      { text: 'Traveller details forms', link: '/plugins/traveller-forms' },
      { text: 'Waivers & consent', link: '/plugins/waivers' },
      { text: 'Tour guides', link: '/plugins/tour-guides' },
    ],
  },
  {
    text: 'Communication & integrations',
    collapsed: true,
    items: [
      { text: 'WhatsApp chat button', link: '/plugins/whatsapp-button' },
      { text: 'WhatsApp notifications', link: '/plugins/whatsapp-notifications' },
      { text: 'Own email server (SMTP)', link: '/plugins/own-email-server' },
      { text: 'Webhooks', link: '/plugins/webhooks' },
    ],
  },
]

const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Get started',
    items: [
      { text: 'Introduction', link: '/get-started/introduction' },
      { text: 'Quick start', link: '/get-started/quick-start' },
      { text: 'Your console', link: '/get-started/console-overview' },
      { text: 'Plans & billing', link: '/get-started/plans-and-billing' },
      { text: 'Move from WordPress', link: '/get-started/import-from-wordpress' },
    ],
  },
  {
    text: 'Tours',
    items: [
      { text: 'Create a tour', link: '/tours/create-a-tour' },
      { text: 'Itinerary & content', link: '/tours/itinerary-and-content' },
      { text: 'Pricing', link: '/tours/pricing' },
      { text: 'Departures & availability', link: '/tours/departures-and-availability' },
      { text: 'Booking modes', link: '/tours/booking-modes' },
      { text: 'Destinations & categories', link: '/tours/destinations-and-categories' },
      { text: 'Taxes', link: '/tours/taxes' },
      { text: 'Import a tour from a URL', link: '/tours/import-a-tour' },
    ],
  },
  {
    text: 'Bookings & customers',
    items: [
      { text: 'Bookings', link: '/bookings/bookings' },
      { text: 'Manual bookings', link: '/bookings/manual-bookings' },
      { text: 'Checkout experience', link: '/bookings/checkout' },
      { text: 'Payments', link: '/bookings/payments' },
      { text: 'Refunds & cancellations', link: '/bookings/refunds-and-cancellations' },
      { text: 'Manifests & check-in', link: '/bookings/manifests-and-check-in' },
      { text: 'Enquiries', link: '/bookings/enquiries' },
      { text: 'Customers & traveller portal', link: '/bookings/customers' },
      { text: 'Reviews', link: '/bookings/reviews' },
      { text: 'Emails', link: '/bookings/emails' },
      { text: 'Reports', link: '/bookings/reports' },
    ],
  },
  {
    text: 'Website',
    items: [
      { text: 'Themes & Theme Builder', link: '/website/theme-builder' },
      { text: 'Pages & blog', link: '/website/pages-and-blog' },
      { text: 'Media library', link: '/website/media-library' },
      { text: 'Menus', link: '/website/menus' },
      { text: 'Announcement bar', link: '/website/announcement-bar' },
      { text: 'Custom domains', link: '/website/custom-domains' },
      { text: 'SEO', link: '/website/seo' },
      { text: 'Redirects', link: '/website/redirects' },
      { text: 'Cookie consent & tracking', link: '/website/cookie-consent-and-tracking' },
    ],
  },
  { text: 'Plugins', items: plugins },
  {
    text: 'Account & security',
    items: [
      { text: 'Business settings', link: '/account/business-settings' },
      { text: 'Team & roles', link: '/account/team-and-roles' },
      { text: 'Two-step sign-in', link: '/account/two-step-sign-in' },
      { text: 'Console languages', link: '/account/console-languages' },
    ],
  },
  {
    text: 'Developers',
    items: [
      { text: 'Developer overview', link: '/developers/' },
      { text: 'Webhooks reference', link: '/developers/webhooks' },
      { text: 'Verify signatures', link: '/developers/verify-signatures' },
      { text: 'Data model & money', link: '/developers/data-model' },
      { text: 'REST API', link: '/developers/rest-api' },
    ],
  },
  {
    text: 'Help',
    items: [
      { text: 'FAQ', link: '/help/faq' },
      { text: 'Troubleshooting', link: '/help/troubleshooting' },
      { text: 'Security & privacy', link: '/help/security' },
      { text: 'Changelog', link: '/help/changelog' },
      { text: 'Contact support', link: '/help/support' },
    ],
  },
]

/** After the build, publish every page as Markdown too (/path.md) plus llms.txt / llms-full.txt for AI assistants. */
function publishMarkdown(config: SiteConfig) {
  const index: string[] = [`# ${TITLE}`, '', `> ${DESCRIPTION}`, '']
  const full: string[] = [`# ${TITLE}`, '']
  const groups = new Map<string, string[]>()
  for (const page of [...config.pages].sort()) {
    const raw = readFileSync(join(config.srcDir, page), 'utf8')
    const out = join(config.outDir, page === 'index.md' ? 'index.md' : page.replace(/\/index\.md$/, '/index.md'))
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, raw)
    const title = /^title:\s*(.+)$/m.exec(raw)?.[1]?.trim() ?? page
    const desc = /^description:\s*(.+)$/m.exec(raw)?.[1]?.trim() ?? ''
    const section = page.includes('/') ? page.split('/')[0] : 'overview'
    if (!groups.has(section)) groups.set(section, [])
    groups.get(section)!.push(`- [${title}](${SITE}/${page})${desc ? `: ${desc}` : ''}`)
    full.push(`\n---\n\nSource: ${SITE}/${page.replace(/(index)?\.md$/, '')}\n`, raw.replace(/^---[\s\S]*?---\n/, ''))
  }
  for (const [section, lines] of groups) {
    index.push(`## ${section.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}`, '', ...lines, '')
  }
  writeFileSync(join(config.outDir, 'llms.txt'), index.join('\n'))
  writeFileSync(join(config.outDir, 'llms-full.txt'), full.join('\n'))
}

export default defineConfig({
  lang: 'en-US',
  title: TITLE,
  titleTemplate: ':title · Tourtify Docs',
  description: DESCRIPTION,
  cleanUrls: true,
  lastUpdated: true,
  // Internal engineering notes live in this folder too; they are not part of the public docs.
  srcExclude: ['[A-Z]*.md', 'research/**', 'node_modules/**'],
  sitemap: { hostname: SITE },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#5d47eb' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:image', content: `${SITE}/og.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const canonical = `${SITE}/${path}`
    const title = pageData.frontmatter.title ?? pageData.title
    const description = pageData.frontmatter.description ?? pageData.description ?? DESCRIPTION
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:title', content: `${title} · Tourtify Docs` }],
      ['meta', { property: 'og:description', content: description }],
      ['link', { rel: 'alternate', type: 'text/markdown', href: `${SITE}/${pageData.relativePath}` }],
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': path === '' ? 'WebSite' : 'TechArticle',
          headline: title,
          description,
          url: canonical,
          inLanguage: 'en',
          publisher: { '@type': 'Organization', name: 'Tourtify', url: WEBSITE, logo: `${SITE}/logo.svg` },
          ...(pageData.lastUpdated ? { dateModified: new Date(pageData.lastUpdated).toISOString() } : {}),
        }),
      ],
    )
  },
  buildEnd: publishMarkdown,
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo-dark.svg', alt: 'Tourtify' },
    siteTitle: 'Tourtify Docs',
    nav: [
      { text: 'Get started', link: '/get-started/introduction', activeMatch: '/get-started/' },
      {
        text: 'Operate',
        activeMatch: '/(tours|bookings|website|account)/',
        items: [
          { text: 'Tours', link: '/tours/create-a-tour' },
          { text: 'Bookings & customers', link: '/bookings/bookings' },
          { text: 'Website', link: '/website/theme-builder' },
          { text: 'Account & security', link: '/account/business-settings' },
        ],
      },
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      { text: 'Developers', link: '/developers/', activeMatch: '/developers/' },
      { text: 'Help', link: '/help/faq', activeMatch: '/help/' },
      {
        text: 'Tourtify',
        items: [
          { text: 'Pricing', link: `${WEBSITE}/pricing` },
          { text: 'tourtify.com', link: WEBSITE },
          { text: 'Sign in to the console', link: `${APP}/login` },
          { text: 'Start free trial', link: `${APP}/register` },
        ],
      },
    ],
    sidebar,
    outline: { level: [2, 3], label: 'On this page' },
    search: {
      provider: 'local',
      options: { detailedView: true },
    },
    lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'medium' } },
    docFooter: { prev: 'Previous', next: 'Next' },
    externalLinkIcon: true,
    footer: {
      message: 'Commission-free booking software for tour and activity operators.',
      copyright: `Copyright © ${new Date().getFullYear()} Tourtify · <a href="${WEBSITE}/legal/terms">Terms</a> · <a href="${WEBSITE}/legal/privacy">Privacy</a> · <a href="${WEBSITE}/pricing">Pricing</a>`,
    },
  },
})
