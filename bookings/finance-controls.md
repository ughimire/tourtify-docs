---
title: Disputes, refund approvals, exchange rates and India TCS
description: Answer chargebacks with a ready-made evidence pack, make large refunds need a second person, measure what exchange rates did to your money, and collect India's TCS on overseas packages.
---

# Disputes, refund approvals, exchange rates and India TCS

These four controls sit next to your payments. They don't need setup until you use them.

## Disputes and chargebacks

::: info Where to find it
Console › Finance › Payments › **Disputes** (people with the *Handle disputes and chargebacks* permission: owners and admins by default)
:::

When a customer disputes a card payment, **Stripe, PayPal, Square, Razorpay and Paystack** tell Tourtify straight away. The dispute
appears with its amount, the reason, the evidence deadline and a countdown. Whoever handles disputes gets an email and a phone
notification when it opens, and again **7, 3 and 1 days** before the deadline.

1. Open the dispute. The **evidence pack** is already built from the booking: what was sold and when, the cancellation policy and
   package travel information the traveller saw before paying, every payment and refund, the booking's emails and changes,
   **check-in** (proof they turned up), the signed **waiver** and the **messages** with the traveller.
2. Choose **Respond**. Tourtify suggests an explanation for the dispute's reason; edit it (in English: card schemes review in English).
3. **Send evidence**. For Stripe, PayPal and Square it goes to the provider in one go. For the others, download the
   **Evidence pack (PDF)**, upload it in the provider's dashboard (the dispute links there) and **Mark as sent**.

Other things you can do:

- **Accept the dispute** when the charge was a mistake: the customer keeps the money.
- **Record a dispute** from a payment (Finance › Payments › *payment* › Record a dispute) when the provider or bank told you by
  letter or email. You set the deadline and, later, the outcome.
- **Notes** for your team, and **Export CSV** of every dispute.

While a dispute is open, its money can't be refunded as well (that would pay the customer twice). A lost or accepted dispute goes
on your books as money returned, so the booking shows what is really paid.

The **dispute rate per provider** (last 90 days) shows on the Payments page. Card schemes start watching a business at about
0.65–0.9%: the rate turns amber and then red before you get there.

## Refund approvals (plugin, Growth)

::: info Where to find it
Plugins › **Refund approvals** to switch it on; Console › Finance › Payments › **Refund approvals** for the queue
:::

Set when a refund needs a second person: above an **amount** (in your main currency; other currencies are converted with your
exchange rates) and/or above a **share of the booking** (for example 50%). Choose who approves: anyone with the *Approve refunds*
permission, or owners only. **Nobody can approve their own refund.**

A refund above the limit, from the booking or from a single payment, waits in the queue instead of going out. Approvers are emailed
and notified; when they approve, the refund goes out exactly as asked (same payments, same amount) and the person who asked is told.
If nobody decides within the **escalation time** (24 hours by default) every owner is told.

For a **cancelled package**, package travel law gives you 14 days to refund. Tourtify makes the request due well before that and, by
default, approves it automatically one day before the deadline (you can choose to only escalate instead).

Every request, approval, rejection (with its reason), withdrawal and escalation is in the booking history and the activity log;
**Export CSV** gives the full record.

## Exchange rates and FX gain & loss

::: info Where to find it
Settings › Payments & tax › **Exchange rates** (rate source) · Console › Finance › Reports › **FX gain & loss**
:::

- **Rate source**: the European Central Bank's daily reference rates, Nepal Rastra Bank's official rates, or only your own
  rates. Your own rate for a currency always wins.
- **Every payment and refund** in another currency than your main one is stamped with the rate of that moment and its source
  (shown in the payment's details).
- **Lock a rate** for a departure or a booking: a forward contract from your bank, or the budget rate you priced the trip at.
- **FX gain & loss** compares what money in other currencies was expected to be worth (the lock, or the rate when it was booked)
  with what it was worth when it moved: booking payments and refunds, and supplier bill payments (against the bill-date rate or the
  departure's lock). Totals per currency, and **Export CSV** for your accountant.

## India: TCS on overseas tour packages

::: info Where to find it
Settings › Taxes › **India: collect TCS on overseas packages** · Console › Finance › Reports › **TCS (India)**
:::

When it is on, overseas packages bought by residents of India get **TCS** at checkout:

| Collected | Rate |
|---|---|
| From 1 April 2026 (s. 394(1), Income-tax Act 2025) | 2% of the amount, no threshold |
| 1 April 2025 – 31 March 2026 | 5% up to ₹10 lakh per buyer a year, 20% above |
| 1 October 2023 – 31 March 2025 | 5% up to ₹7 lakh, 20% above |
| Without the buyer's PAN | twice the rate or 5%, whichever is higher (at most 20%) |

At checkout the traveller enters their **PAN** (or says they aren't resident in India, and pays none). The PAN is stored encrypted,
printed on the invoice with the TCS line, and can be added later on the booking (**TCS (India) › Change**), with a lower-rate
certificate if they have one; the TCS is worked out again.

**TCS (India)** shows each quarter: what you collected (each payment carries its share; refunds give it back), what you deposited
(add each ITNS 281 challan), what is still to deposit, buyers without a PAN, and the statement's due date. **Statement data (CSV)**
has the collectee rows for the quarterly TCS statement (Form 27EQ, numbered Form 143 under the Income-tax Rules 2026, code 6CO);
**Deposits (CSV)** has the challans. Add your TAN and the collector's details once. If the law changes before Tourtify is updated,
add your own dated rate rule.

::: warning Guidance, not tax advice
Check rates and filing with your tax adviser. Payments in another currency than INR need converting at the RBI reference rate for
the statement.
:::
