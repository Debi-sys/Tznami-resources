# Shared Resources

This directory contains cross-department tools, processes, and documentation used by all Tznami team members regardless of department.

---

## Contents

| Directory | Purpose |
|-----------|---------|
| `project-management/` | Task tracking, sprint planning, and team coordination tools |
| `communication/` | Discord/Slack setup, meeting templates, async communication norms |
| `version-control/` | Git workflow, branching strategy, Git LFS guide, PR process |
| `integrations/` | Fusion 360 MCP server, KiCad/KiBot CI/CD, future automation notes |

---

## Cross-Department Collaboration Principles

### Decision-Making
- **Individual decisions**: Each person owns their domain (e.g., engineer owns PCB layout decisions)
- **Two-person decisions**: Any decision affecting another department requires a quick async check-in
- **Whole-team decisions**: Pricing, new product launch, vendor agreements — bring to the weekly standup

### Documentation Standard
Every significant decision, design choice, or process change must be documented in writing — GitHub PR description, Notion doc, or a commit message. "We decided in Discord" is not sufficient. Future you will thank present you.

### Handoffs
When work passes from one department to another (e.g., Design → Engineering → Sales), the hand-off must include:
1. A clear description of what is being delivered
2. What the next department needs to do with it
3. Any open questions or dependencies

Use PR descriptions for code/CAD handoffs; use the `shared/communication/` templates for update posts.

---

## Weekly Rhythm

| Day | Event |
|-----|-------|
| Monday | Weekly standup (async or 30min sync) — see `communication/weekly-standup-template.md` |
| Wednesday | Mid-week check-in on any blockers (Discord thread) |
| Friday | End-of-week status update in Discord #team-updates |

For active GBs, add a daily 5-minute async check (morning Discord message: "What's happening today?").
