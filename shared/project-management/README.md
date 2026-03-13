# Project Management

For a 5-person indie team, project management should be lightweight but consistent. Over-engineered processes kill momentum; no process at all causes chaos. This guide recommends a minimal, practical setup.

---

## Recommended Stack for Tznami

### Primary: GitHub Projects (built-in, free)
**URL**: https://github.com/orgs/Tznami/projects  
Since the team's technical work already lives in GitHub, GitHub Projects is the lowest-friction option. Use it for:
- Feature/task tracking for each keyboard board project
- Bug tracking for firmware and PCB issues
- Release planning for each GB

**Setup**:
1. Create one Project per active board (e.g., "KB65 Development")
2. Use board view with columns: `Backlog | In Progress | Review | Done`
3. Link Issues and PRs to Project cards automatically
4. Add custom fields: `Department` (Engineering/Design/Marketing/Sales), `Priority` (P1/P2/P3)

### Secondary: Notion (cross-department planning)
**URL**: https://notion.so  
Use Notion for documents and knowledge that live beyond the code repo:
- Meeting notes and decisions
- GB planning dashboards
- Supplier contact sheets
- Retrospective notes
- Brand/design documentation

**Recommended Notion workspace structure**:
```
Tznami Workspace
├── 📋 Projects
│   ├── KB65 — [Phase: GB Live]
│   └── Next Board — [Phase: IC]
├── 📖 Docs
│   ├── Brand Guidelines
│   ├── Supplier Contacts
│   └── Process Guides
├── 📅 Meetings
│   └── [Weekly standups, auto-sorted by date]
└── 📦 Inventory & Orders (link to Airtable embed)
```

---

## Linear (Optional — for Engineering-heavy phases)
**URL**: https://linear.app  
Linear is a superior issue tracker for engineering teams who want more structure than GitHub Issues. Excellent keyboard shortcuts, cycle/sprint planning, and roadmap view. Free for small teams.

Use Linear if:
- Engineering work becomes complex enough to need sprint planning
- You have more than one active board in development simultaneously
- The team wants velocity tracking

Not recommended if the team is comfortable in GitHub Issues — avoid tool fragmentation.

---

## Figma (Design Collaboration)
**URL**: https://figma.com  
Use Figma for all design collaboration that needs real-time co-editing: colorway mockups, marketing layout reviews, brand asset sharing. The Design and Marketing teams should share a Figma team workspace.

**Free plan** supports 3 projects and unlimited collaborators (view-only for non-editors). Upgrade to paid plan ($15/month/editor) only when needed.

---

## Miro (Brainstorming & Workshops)
**URL**: https://miro.com  
Use Miro for:
- GB planning kickoffs (brainstorm features, timeline, colorways as a virtual whiteboard)
- Retrospective boards
- IC survey analysis (affinity mapping community feedback)

Free plan is sufficient for a team of 5.

---

## Recommended Minimal Setup

For a 5-person indie team, the recommended stack is:
1. **GitHub Projects** — engineering + firmware tasks, issues, PRs
2. **Notion** — cross-department docs, meetings, GB planning
3. **Discord** — daily communication, decisions, community management
4. **Airtable** — inventory and order tracking (see `../../sales/inventory/`)

Resist adding more tools until a clear gap exists. Every tool added is a tool team members must check.
