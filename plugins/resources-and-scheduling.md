---
title: Resources & tasks
description: Assign vehicles, boats and equipment without double-booking, see every guide and resource on one schedule, catch conflicts and turn tour checklists into tasks.
---

# Resources & tasks <Badge type="info" text="All plans" />

Resources & tasks keeps guides, vehicles, boats, rooms, equipment and trek crew from being in two places at once, and shows the whole operation on one timeline. Checklists per tour become tasks when a departure gets its first booking, and each team member and vehicle can have a private calendar feed.

::: info At a glance
- **Plan:** Starter, Growth and Scale
- **Category:** Operations
- **Where:** Console › Plugins › Resources & tasks, and Operations › Resources & tasks (Operations calendar, Schedule, Conflicts, Tasks)
:::

## Turn it on

1. Go to **Console › Plugins**.
2. Find **Resources & tasks** and flip its switch on.
3. Select **Configure** to set the scheduling rules (below), then **Save**.
4. Open **Operations › Resources & tasks**, tab **Resources**, and select **Add resource** for each vehicle, boat, room or piece of equipment. Then assign resources on each departure.

The pages share one set of tabs: **Calendar**, **Schedule**, **Conflicts**, **Tasks**, **Resources**, **Task templates** and **Tour rules**.

## Settings

| Section | Setting | What it does |
|---|---|---|
| Tasks | Create tasks from templates | When a departure gets its first booking, its tour’s task templates become tasks with due dates. |
| Warnings | Warn about departures without a vehicle | Days ahead to list departures that have bookings but no vehicle or boat. |
| Scheduling | Travel buffer between trips (minutes) | A guide, vehicle or crew member needs at least this long between the end of one departure and the start of the next. Vehicles and tours can set their own. |
| Scheduling | Travellers per guide | Warn when a departure has more travellers than its guides can lead. 0 = no limit. Tours can set their own. |
| Scheduling | Qualifications every guide needs | Comma-separated, e.g. “First aid”. Warn when a guide doesn’t hold one or it lapses before the trip ends. Tours can set their own. |
| Scheduling | Check for conflicts this many days ahead | How far ahead the daily conflict check looks. |
| Scheduling | Email new conflicts every morning | To everyone who can manage the schedule, with a push notification on their devices. |

## Tasks and task templates

- On **Task templates**, select **Add task template** for a tour (or **Every tour**). It becomes a task on each departure of the tour when it gets its first booking, due **Before or after** the departure.
- On **Tasks**, select **Add task** for a one-off task on a departure, or a **General task (no departure)**. Assign it, **Mark done**, or tick several to export or delete them.

## Calendar feeds

On **Resources**, **Create calendar link** gives a vehicle or other resource a private calendar feed you can add to Google Calendar, Outlook or Apple Calendar; team members get theirs from **My calendar feed**. Copy the link straight away: it is shown only once. **Replace calendar link** stops the old one working.

## Schedule (Operations › Schedule)

One timeline of every guide, vehicle, boat, room or venue, piece of equipment and trek crew member, by **day, week or
month**. Each bar is a departure; red bars must be fixed, amber ones are warnings, hatched areas are time off or out of
service.

- **Drag a bar to another row** to give the departure to another guide, vehicle or crew member. The same checks run as
  anywhere else: if the new one is busy, you see why, and someone allowed to manage the schedule can assign anyway with a
  reason (recorded in the activity log). The guide is asked to confirm, as when assigning from Tour guides.
- **Needs staff or a vehicle** lists departures with travellers and no guide or vehicle: drag one onto a row to assign it.
- Click a bar (or tap it on a phone) to see its conflicts, move it with a list instead of dragging, or take it off.
- Filter by type (guides, vehicles, boats, equipment, rooms, crew), by name and by tour.
- **Day sheet**: a PDF of the day's departures with times, travellers, guides, vehicles, crew and open conflicts, to print
  or hand to drivers.
- On a phone the schedule is an agenda per guide or vehicle.
- A guide who signs in sees **My schedule**: only their own row, read-only.

## What counts as a conflict

| Conflict | Stops the assignment? |
|---|---|
| Double-booked: the same guide, vehicle, room, equipment or crew member on two departures whose times overlap (multi-day trips count their whole length) | Yes (override with a reason) |
| Time off (guides) or out of service (vehicles, equipment) on the departure's days | Yes (override with a reason) |
| Too little time between trips: less than the travel buffer | Warning |
| A qualification (first aid, licence, insurance) that expires before the trip **ends** | Warning |
| A qualification the tour requires that the guide doesn't hold | Warning |
| More travellers booked than seats on the vehicles and boats; places on sale above the seats | Warning |
| Too few guides for the travellers (travellers per guide) | Warning |
| Travellers booked in a language no guide on the departure speaks | Warning |
| Supplier allotment overbooked, or released while the request is still unconfirmed (Suppliers & contracts, Allotments) | Warning |

The checks run when you assign a resource on the departure page, a guide on Tour guides (the suggestions show them too),
crew on a trek, and on the schedule.

## Conflicts (Operations › Conflicts)

Every conflict on upcoming departures, checked **every morning at 06:00** (your time zone) for the next 60 days and
again whenever someone assigns or removes someone. New ones are emailed (and pushed to devices that switched on
*Scheduling conflicts*) to everyone who can manage the schedule, once each.

For each conflict you see what is wrong and what would fix it, and you can:

- **Open on the schedule** or open the departure,
- **Take the guide, vehicle or crew member off** the departure,
- **Accept with a note** (for example "the guide drives straight from the first trip"): it stays as accepted and isn't
  emailed again; if it changes, it opens again,
- **Reopen** an accepted or resolved one.

Conflicts that go away (someone was reassigned, time off was cancelled) resolve themselves as *cleared*. Tick several to
accept them together; export the list as CSV. **Check now** re-runs the scan.

## Rules and settings

- **Plugins › Resources & tasks › Scheduling**: travel buffer between trips (default 30 minutes), travellers per guide
  (0 = no limit), qualifications every guide needs, how many days ahead to check, and the morning email.
- **Operations › Resources & tasks**, tab **Tour rules**: the same per tour (travellers per guide, required qualifications, buffer). Empty fields
  use the settings.
- **Resources**: each vehicle, boat, room or piece of equipment can have its own turnaround time.

## Permissions

- *See departures and availability* (`inventory.view`): see the schedule and conflicts.
- *Reassign guides, vehicles and resources on the schedule, override scheduling conflicts and resolve them*
  (`schedule.manage`): drag and drop, assign anyway, accept or unassign from Conflicts. Owners and admins have it.
