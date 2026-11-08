---
title: Invoices and tax receipts
description: Issue a numbered invoice for every booking, credit notes for changes and refunds, and e-invoices in the format your country requires.
---

# Invoices and tax receipts <Badge type="info" text="All plans" />

The Invoices plugin gives every booking a numbered invoice with your legal name and tax ID, emailed to the traveller as a PDF. Changes, refunds and cancellations get credit notes, so your numbering never has gaps. You can export everything for your accountant, and where your country requires it, send e-invoices to the tax authority or your business customers' systems.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Accounting
- **Where:** Plugins › Invoices & tax receipts, Finance › Payments › Invoices, and Settings › Payments & tax › E-invoicing
:::

## How it works

**What the traveller sees**

When the booking is confirmed (or paid in full, if you choose), the traveller gets an email with the invoice as a PDF. If the booking changes or is refunded, they get a credit note.

**What your team sees**

**Finance › Payments › Invoices** lists every invoice and credit note. Issued documents never change: a correction is always a credit note. Numbers continue from the last one issued, for example INV-00042.

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Invoices & tax receipts** and flip its switch on.
3. Select **Configure** to set your numbering, when invoices are issued and whether they're emailed, then **Save**.

Your legal name and registered address come from **Settings › Business details**, and your VAT or GST number from **Settings › Taxes**. Check them before your first invoice.

## Settings

**Your details**

| Setting | What it does |
|---|---|
| Tax ID if you have no tax registration | Use this only for another number on invoices, such as a PAN or company number. Your VAT or GST number comes from Settings › Taxes. |

**Numbering**

| Setting | What it does | Default |
|---|---|---|
| Invoice number prefix | Numbers continue from the last one issued, e.g. INV-00042. | INV- |
| Credit note prefix | | CN- |
| Issue the invoice | **When a booking is confirmed (deposit or full payment)** or **When a booking is paid in full**. | When confirmed |

**Sending**

| Setting | What it does | Default |
|---|---|---|
| Email the invoice to the traveller | Sends the PDF by email when it's issued. | On |
| Note at the bottom of every invoice | Payment terms, bank details or a thank-you. | Empty |

## Using the Invoices page

Go to **Finance › Payments › Invoices**.

- Filter by date (**From**, **To**) and type: **Invoices and credit notes**, **Invoices only** or **Credit notes only**. Search by **Number, customer or booking**.
- Columns: **Number**, **Type**, **Customer**, **Booking**, **Issued**, **Tax**, **Total**, and **E-invoice** when e-invoicing is on. The page shows what was **Invoiced (net of credits)** in the period.
- **Export CSV** downloads the list. **Download PDFs** gives every invoice and credit note in the period as PDFs in one ZIP (up to 100). You can also select documents and download just those.
- Open an invoice to see its lines, tax and **History**. From there you can **Email again**, **Issue credit note**, or **Cancel invoice** (it's cancelled with a credit note).

Invoices are issued automatically when bookings are confirmed. If the page is empty, try another date range.

## E-invoicing

E-invoicing sends your invoices to the tax authority or your business customers' systems, in the format your country requires. It appears in **Settings › Payments & tax › E-invoicing** while the Invoices plugin is on.

**Networks and countries**

| Country or network | Format |
|---|---|
| Peppol network | BIS Billing 3.0. Tourtify registers your business with its Peppol access point (Storecove), or you add your own account's key. |
| Italy | SdI (FatturaPA), through the intermediary A-Cube. |
| Spain | VERI*FACTU (AEAT). Tourtify, as the software producer, signs the declaración responsable; you don't need your own. |
| Portugal | Certified invoicing (ATCUD, QR, SAF-T). |
| Mexico | CFDI 4.0 (SAT), through Facturama as your PAC. |
| India | GST e-invoice (IRN), through your GSP. |
| Saudi Arabia | ZATCA (FATOORA phase 2). |

Options for your home country (from Settings › Taxes) are listed first.

**Set it up**

1. Go to **Settings › Payments & tax › E-invoicing**.
2. Switch on **Send e-invoices** and choose your **Country or network**.
3. Fill in **Your details** as registered with the tax authority. They're printed on the e-invoice exactly as you enter them.
4. Under **Connection**, enter the login or keys for the service. Secrets are kept encrypted and never shown again. Choose **Check connection** to sign in without sending anything.
5. Choose a **Mode**: **Test** (documents go to the test service; nothing is legally sent) or **Live** (documents are legally sent).
6. Follow the country's steps under **Before your first invoice** and **What only you can do, outside Tourtify**. For Saudi Arabia, use **ZATCA onboarding**: generate a one-time password in the FATOORA portal and choose **Onboard**.

New invoices and credit notes are sent from then on. Earlier ones are not sent.

**How it's going**

The page lists every e-invoice since you switched it on, with its state: **Waiting to send**, **Awaiting answer**, **Accepted** or **Rejected**. Open one to see what happened and **Check and send again**. Failed sends are retried automatically. For Portugal, **Download SAF-T file** gives the month's file for the AT.

**Monthly allowance**

E-invoices sent live through a paid network (Peppol, Italy, Mexico and India) count against your plan's allowance each month:

| Plan | E-invoices a month |
|---|---|
| Starter | 100 |
| Growth | 500 |
| Scale | 2,500 |

The page shows **{used} of {limit} e-invoices included this month**. Every e-invoice the law requires is always sent, even over the allowance.

## Nepal tax (IRD)

For businesses in Nepal, **Set up Nepal tax (IRD)** on the Invoices page numbers, dates and states invoices the IRD way from the next invoice on, with real-time CBMS sync and the IRD sales register. Enter your **PAN / VAT number** and your **CBMS username** and **CBMS password**, then **Check login**.

## Good to know

- Turning the plugin off: new and changed bookings stop getting invoices. Invoices already issued are kept.
- Invoices for bookings on a [company account](./company-accounts) are made out to the company.
- With accounting sync on, invoices and credit notes are sent to your accounting software. See [Accounting sync](./accounting-sync).

## Related

- [Taxes](/tours/taxes)
- [Business settings](/account/business-settings)
- [Company accounts](./company-accounts)
- [Accounting sync](./accounting-sync)
- [Payments](/bookings/payments)
