# Communication

This directory documents Tznami's internal communication tools and norms — how the team stays aligned without drowning in meetings.

---

## Communication Tools

### Discord (Primary — Internal + Community)
Discord serves dual duty: internal team communication and the community server for customers/enthusiasts.

**Internal channels** (team-only, separate from community server or in a private category):
```
🔒 TEAM (private category)
  #team-general       — casual team chat
  #team-updates       — end-of-week status updates (see format below)
  #engineering        — PCB, firmware, mechanical design discussion
  #design             — colorways, renders, brand assets
  #marketing          — content, community, photography
  #sales-ops          — orders, inventory, GB coordination
  #decisions          — document significant decisions (write down what was decided)
  #action-items       — track follow-ups from meetings
```

**Weekly #team-updates format** (post every Friday, ~5 minutes):
```
📅 Week of [date]
🔧 Engineering: [1-2 sentences — what shipped / what's blocked]
🎨 Design: [1-2 sentences]
📣 Marketing: [1-2 sentences]
💰 Sales: [1-2 sentences]
⚡ Next week focus: [1-2 sentences per relevant person]
🚧 Blockers: [anything that needs team input]
```

### Async-First Culture
Given the small team size, synchronous meetings should be rare and purposeful. Default to:
- Discord message for quick questions (<2 hour response expected)
- Notion comment / PR comment for detailed feedback (no response urgency)
- Scheduled 30-minute video call for decisions that need discussion

**Never use email for internal team communication.** Email is for external communication (suppliers, customers, vendors).

### Loom (Async Video Explanations)
**URL**: https://loom.com  
Use Loom to record a quick screen-share when text explanation is insufficient:
- "Here's how I wired the matrix in this schematic revision"
- "Here's what I'm seeing in the sound test recording"
- "Walk-through of the GB announcement draft"

Free plan: 25 videos, 5-minute max. Upgrade if used heavily.

### Notion (Meeting Notes & Decisions)
All meeting notes go in Notion under the `Meetings` database. Template: see below.

**Meeting note template**:
```
Date: [YYYY-MM-DD]
Type: [Standup / Design Review / GB Kickoff / Retrospective]
Attendees: [names]
Agenda:
  1. [item]
Decisions Made:
  - [decision]
Action Items:
  - [ ] [task] — Owner: [name] — Due: [date]
```

---

## Weekly Standup Format

See `weekly-standup-template.md` for the full weekly standup template.

**Standup philosophy**: Async standups work well for small remote/hybrid teams. Post in #team-updates by Monday 10am. The standup is a planning tool — not a status report for a manager. Use it to surface blockers early.

---

## External Communication

### Customers / Community
- All customer-facing communication via **Discord #order-support**, **Shopify email**, or **direct email** (support@tznami.com)
- Community announcements: Geekhack, Reddit, Discord #announcements
- Never discuss order details in public Discord channels — direct to DM or ticket system

### Suppliers / Vendors
- Email is primary for suppliers, manufacturers, and GB vendors
- Use clear subject lines: `[Tznami] KB65 Production Order — Revision 2`
- Keep a shared email thread log in Notion or a shared Gmail label

### Press / Review Units
- Coordinate with Marketing for any press sample shipments
- Log all review unit shipments in a shared Notion doc (who received, when, expected review date)
