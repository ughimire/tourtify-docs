---
title: Refund approvals
description: Make refunds above a limit wait for a second person to approve them, with a time limit, reminders and a full record.
---

# Refund approvals <Badge type="tip" text="Growth+" />

Refund approvals make refunds above a limit you set wait for a second person to approve them. There's a time limit, reminders, and a full record of who asked, who approved and why. Package refunds still go out within the legal 14 days. It suits teams where several people can refund and owners want a check on large ones.

::: info At a glance
- **Plan:** Growth and Scale
- **Category:** Payments
- **Where:** Plugins › Refund approvals, and Finance › Payments › Refund approvals
:::

## How it works

1. Someone on your team refunds a booking or a single payment, above your limit.
2. Instead of going out, the refund waits in **Finance › Payments › Refund approvals**. Approvers are emailed and notified.
3. An approver chooses **Approve** (the refund goes out exactly as asked: same payments, same amount) or **Reject** with a reason. The person who asked is told either way.
4. If nobody decides in time, every owner is emailed and notified.

Nobody approves their own refund. Travellers see nothing different, apart from the timing of their refund.

For the full approval rules alongside disputes and exchange rates, see [Disputes, refund approvals, exchange rates and India TCS](/bookings/finance-controls#refund-approvals-plugin-growth).

## Turn it on

1. Go to **Plugins** in the console.
2. Find **Refund approvals** and flip its switch on.
3. Select **Configure** to set your limits and approvers, then **Save**.

## Settings

**When a refund needs approval**

| Setting | What it does | Default |
|---|---|---|
| Approval needed above (amount) | In your main currency. Refunds in other currencies are converted with your exchange rates. Leave empty to use only the percentage. | 500 |
| Approval needed above (share of the booking, %) | For example 50: refunding more than half of a booking needs approval, whatever the amount. | Empty |

**Approvers**

| Setting | What it does | Default |
|---|---|---|
| Who approves | **Anyone with the "Approve refunds" permission (owners always have it)** or **Owners only**. Never the person who asked for the refund. | Anyone with the permission |
| Escalate after (hours) | If nobody decides in time, every owner is emailed and notified. | 24 |
| Before a legal refund deadline | Package travel law gives you 14 days to refund a cancelled package. **Approve automatically one day before** keeps you within it; **Only escalate to owners (never approve automatically)** doesn't. | Approve automatically |

## Using the Refund approvals page

Go to **Finance › Payments › Refund approvals**.

- Each row shows the type (**Booking refund** or **One payment**), the **Amount**, who **Asked by**, and **Decide by**. A cancelled package also shows its **Legal refund deadline**.
- Filter by **Status**: **Waiting**, **Escalated**, **Approved**, **Approved, refund failed**, **Not approved** and **Withdrawn**.
- **Approve** opens "Approve the refund of {amount}?" with the reason given; choose **Approve and refund**.
- **Reject** asks **Why not**. The person who asked is told it wasn't approved, with your reason.
- The person who asked, or an approver, can **Withdraw** a request that's still waiting.
- **Export CSV** gives the full record.

Every request, approval, rejection, withdrawal and escalation is also in the booking history and the activity log.

## Good to know

- Turning the plugin off: new refunds go out without approval. Requests still waiting aren't sent, so approve or reject them first. Your limits and approval history are kept.
- Give the "Approve refunds" permission to the people who should approve in **Settings › Team & access › Team**.

## Related

- [Disputes, refund approvals, exchange rates and India TCS](/bookings/finance-controls)
- [Refunds and cancellations](/bookings/refunds-and-cancellations)
- [Team and roles](/account/team-and-roles)
