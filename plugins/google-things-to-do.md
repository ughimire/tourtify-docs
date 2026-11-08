---
title: Google Things to do
description: List your tours in Google Search and Maps with a nightly feed, so travellers find you on Google and book on your own website.
---

# Google Things to do <Badge type="info" text="All plans" />

Google Things to do lists your tours in Google Search and Maps, and powers the "Book" button on your Google Business Profile. Your tours, prices with taxes and fees, photos, meeting points and ratings go to Google every night. Travellers click through to your own website to book, so you keep the customer and pay no commission, and every referral and booking from Google is counted.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Distribution
- **Where:** Plugins › Google Things to do, and Growth › Sales channels › Google Things to do
:::

## How it works

- Every night (at about 03:15 UTC) Tourtify builds a feed of your published tours in Google's Things to do format. You can also **Rebuild now**.
- Published tours with a photo, a location and an online price go to Google. Tours missing something are marked so you can fix them.
- Google matches your tours to your Business Profile by its name, for the "Book" button on your profile.
- Links from Google carry tracking tags (`utm_source=google`, `utm_medium=things_to_do` and your campaign name), so visits and bookings from Google are counted on the page and in Google Analytics.

::: tip On Google today, without the partner feed
While Google reviews Tourtify as a connectivity partner, the page shows how to be found on Google already: add your tours page as the booking link in your Google Business Profile (Edit profile › Bookings). Every tour page also carries complete structured data (TouristTrip, offers, prices, ratings), so Google Search can show your tours, prices and reviews. The feed is built every night and sent to Google automatically once the partnership is approved.
:::

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Google Things to do** and flip its switch on.
3. Select **Configure** and enter your business name exactly as it appears on Google Maps, then **Save**.
4. Open **Growth › Sales channels › Google Things to do** and fix any tours marked as needing attention.

## Settings

**Your business on Google**

| Setting | What it does |
|---|---|
| Name on your Google Business Profile | Exactly as it appears on Google Maps. Google matches your tours to your profile with it, for the "Book" button on your profile. |
| Phone number for Google | With the country code, e.g. +351 21 000 0000. Leave blank to use the one in your business details. |

**Delivery**

| Setting | What it does |
|---|---|
| Send your tours to Google | **Through Tourtify (recommended)**, or **From my own Google Actions Center account**. Choose your own account only if Google approved you as a direct partner. |
| Actions Center SFTP username | Only for your own account: from your Google technical account manager. Create the SSH key on the Google Things to do page and send Google its public key. |
| Google endpoint | Only for your own account: **Development (Google checks the feed, nothing goes live)** or **Production (live on Google)**. Switch to production once Google has approved your feed. |

**Tracking**

| Setting | What it does |
|---|---|
| Campaign name in your links | Added as utm_campaign to every link from Google (utm_source=google, utm_medium=things_to_do), so Google Analytics and your reports see where bookings came from. |

## The Google Things to do page

Open **Growth › Sales channels › Google Things to do**.

- **Tours ready for Google**, **Need attention** (not sent until fixed), **Visits from Google** and **Bookings from Google** for the last 30 days.
- **Before Google lists you**: what Google checks for your business as a whole.
- **Your tours on Google**: each tour is **Ready**, **Ready, could be better** or **Not sent**, with what **Blocks this tour** and any **Recommendation**. **What Google gets** shows the tour as it appears in the feed.
- **Deliveries**: each nightly feed with its status (**Built**, **Waiting for delivery**, **Sent to Google** or **Failed**).
- **Delivery to Google**: status, last built and last sent. With your own account, the SFTP username, endpoint and **SSH key for Google's SFTP server** (**Create SSH key**, **Copy public key**, **Replace key**).
- **Download feed**, **Rebuild now** and **Send to Google now**.

## Good to know

- Only published tours with a photo, a location and an online price are sent.
- Prices go to Google with taxes and fees included, so travellers see the same price they'll pay.
- Replacing your SSH key stops uploads until Google has the new public key.
- Turning the plugin off: the nightly feed to Google stops. Your settings are kept.

## Related

- [SEO](/website/seo)
- [Google Analytics 4](./google-analytics)
- [Create a tour](/tours/create-a-tour)
- [Places](/tours/places)
