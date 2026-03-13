# Tznami Resources

> **Tznami** — a 5-person indie mechanical keyboard team building premium, hand-assembled keyboards in standard layouts and sizes.

This repository is the single source of truth for all internal tooling, templates, workflows, and documentation across every department: Engineering, Design, Marketing, and Sales.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Tool Summary by Department](#tool-summary-by-department)
- [Quick Start](#quick-start)
- [Existing Integrations](#existing-integrations)
- [Contributing](#contributing)

---

## Project Overview

Tznami builds mechanical keyboards the right way — small batches, tight tolerances, hand-tested units, and a community-first approach to group buys. Every keyboard we produce goes through a full design-engineering-QA pipeline before it reaches a customer.

This repo houses:
- **Engineering** templates for PCB design (KiCad), firmware (QMK/ZMK), plate/case (OpenSCAD, Fusion 360), BOM management, and QA testing protocols.
- **Design** assets including KLE layout templates, keycap colorway specs, case aesthetics guides, and brand guidelines.
- **Marketing** workflows for social media, product photography, community engagement (Geekhack/Reddit), email campaigns, and analytics.
- **Sales** tools for pricing calculators, order management, inventory tracking, and full group-buy lifecycle management.
- **Shared** cross-department resources: git workflow, project management, communications templates, and CI/CD integrations.

---

## Directory Structure

```
Tznami-resources/
├── README.md                          ← You are here
│
├── engineering/
│   ├── README.md
│   ├── firmware/
│   │   ├── README.md
│   │   └── qmk-config-template/
│   │       ├── README.md
│   │       ├── config.h
│   │       └── rules.mk
│   ├── pcb-design/
│   │   ├── README.md
│   │   └── kibot-config-template/
│   │       ├── README.md
│   │       └── kibot.yml
│   ├── plate-and-case/
│   │   ├── README.md
│   │   └── openscad-templates/
│   │       ├── README.md
│   │       └── 65pct-case-base.scad
│   ├── bom-and-sourcing/
│   │   ├── README.md
│   │   └── bom-template.csv
│   └── testing/
│       ├── README.md
│       └── qa-checklist.md
│
├── design/
│   ├── README.md
│   ├── layout-design/
│   │   ├── README.md
│   │   └── kle-templates/
│   │       ├── README.md
│   │       └── 65pct-layout.json
│   ├── keycap-design/
│   │   ├── README.md
│   │   └── colorway-templates/
│   │       ├── README.md
│   │       └── colorway-spec-template.md
│   ├── case-aesthetics/
│   │   └── README.md
│   └── assets/
│       ├── README.md
│       └── brand-guidelines-template.md
│
├── marketing/
│   ├── README.md
│   ├── social-media/
│   │   ├── README.md
│   │   └── content-calendar-template.md
│   ├── product-photography/
│   │   ├── README.md
│   │   └── shot-list-template.md
│   ├── email-and-community/
│   │   ├── README.md
│   │   └── gb-announcement-template.md
│   └── analytics/
│       └── README.md
│
├── sales/
│   ├── README.md
│   ├── pricing/
│   │   ├── README.md
│   │   └── pricing-calculator-template.md
│   ├── order-management/
│   │   ├── README.md
│   │   └── order-tracking-template.csv
│   ├── inventory/
│   │   ├── README.md
│   │   └── inventory-template.csv
│   └── group-buy/
│       ├── README.md
│       └── gb-timeline-template.md
│
└── shared/
    ├── README.md
    ├── project-management/
    │   └── README.md
    ├── communication/
    │   ├── README.md
    │   └── weekly-standup-template.md
    ├── version-control/
    │   ├── README.md
    │   └── git-workflow-guide.md
    └── integrations/
        ├── README.md
        └── github-actions-kibot.yml
```

---

## Tool Summary by Department

### 🔧 Engineering

| Tool | Purpose | Link |
|------|---------|-------|
| KiCad 7/8 | PCB schematic & layout | https://www.kicad.org |
| KiBot | Automated Gerber/BOM/iBOM generation | https://github.com/INTI-CMNB/KiBot |
| Freerouting | KiCad autorouter via Java CLI | https://github.com/freerouting/freerouting |
| EasyEDA | Quick schematic/footprint lookup | https://easyeda.com |
| QMK Firmware | Open-source keyboard firmware | https://qmk.fm |
| Via / Vial | Runtime keymap remapping | https://www.caniusevia.com / https://get.vial.today |
| ZMK | Wireless keyboard firmware (BLE) | https://zmk.dev |
| Keyberon | Rust-based keyboard firmware | https://github.com/TeXitoi/keyberon |
| OpenSCAD | Parametric case/plate modeling | https://openscad.org |
| **Fusion 360 MCP** | **CAD/CAM + MCP server integration** | *(existing integration)* |
| ai03 Plate Generator | Switch plate cutout generation | https://ai03.com/generator |
| Ergogen | Parametric ergonomic layout/PCB | https://ergogen.xyz |
| swillkb | Plate & case builder web tool | http://builder.swillkb.com |
| REW / Audacity | Acoustic / sound signature analysis | https://www.roomeqwizard.com |

### 🎨 Design

| Tool | Purpose | Link |
|------|---------|-------|
| Keyboard Layout Editor (KLE) | Visual layout design & JSON export | http://www.keyboard-layout-editor.com |
| KLE-Render | High-quality KLE renders | https://kle-render.herokuapp.com |
| Keyboard Layout Analyzer | Heatmap/efficiency analysis | https://patorjk.com/keyboard-layout-analyzer |
| Ergogen | Layout + plate SVG generation | https://ergogen.xyz |
| Inkscape | Vector keycap legends & icons | https://inkscape.org |
| Adobe Illustrator | Professional vector artwork | https://adobe.com/illustrator |
| Blender | 3D product renders & animations | https://www.blender.org |
| Figma | UI/web mockups & brand assets | https://figma.com |
| Canva | Social media graphics | https://canva.com |

### 📣 Marketing

| Tool | Purpose | Link |
|------|---------|-------|
| Buffer / Later | Social media scheduling | https://buffer.com / https://later.com |
| Hootsuite | Social media management | https://hootsuite.com |
| Canva | Post graphics & templates | https://canva.com |
| CapCut / DaVinci Resolve | Video editing (reels, TikTok) | https://capcut.com / https://blackmagicdesign.com |
| Lightroom / Darktable | Photo editing & color grading | https://adobe.com / https://darktable.org |
| Mailchimp / Kit (ConvertKit) | Email marketing | https://mailchimp.com / https://kit.com |
| Google Analytics 4 | Web traffic & conversion tracking | https://analytics.google.com |
| Meta Business Suite | Instagram/Facebook analytics | https://business.facebook.com |

### 💰 Sales

| Tool | Purpose | Link |
|------|---------|-------|
| Shopify | Primary storefront & order management | https://shopify.com |
| BigCartel | Lightweight storefront alternative | https://bigcartel.com |
| Stripe / PayPal | Payment processing | https://stripe.com / https://paypal.com |
| ShipStation / Pirateship | Shipping label generation | https://shipstation.com / https://www.pirateship.com |
| Airtable / Notion | Inventory & component tracking | https://airtable.com / https://notion.so |
| GB vendors | Vendor.ai, Keebsforall, etc. | — |

---

## Quick Start

### For Engineers
1. Clone this repo: `git clone https://github.com/Tznami/Tznami-resources.git`
2. Install KiCad 8: https://www.kicad.org/download/
3. Install QMK CLI: `pip install qmk && qmk setup`
4. Copy `engineering/firmware/qmk-config-template/` into your QMK keyboard folder.
5. Copy `engineering/pcb-design/kibot-config-template/kibot.yml` to your PCB project root.
6. See `engineering/README.md` for the full toolchain walkthrough.

### For Designers
1. Download KLE JSON from `design/layout-design/kle-templates/` and load at http://www.keyboard-layout-editor.com
2. Copy `design/keycap-design/colorway-templates/colorway-spec-template.md` when starting a new colorway.
3. See `design/assets/brand-guidelines-template.md` for color palette and typography rules.

### For Marketing
1. Copy `marketing/social-media/content-calendar-template.md` at the start of each month.
2. Use `marketing/email-and-community/gb-announcement-template.md` for IC/GB posts.
3. Follow `marketing/product-photography/shot-list-template.md` for every product shoot.

### For Sales
1. Use `sales/pricing/pricing-calculator-template.md` before setting any GB/direct prices.
2. Import `sales/order-management/order-tracking-template.csv` as a base for your order tracker.
3. Reference `sales/group-buy/gb-timeline-template.md` when planning a new GB.

---

## Existing Integrations

### Fusion 360 MCP Server
Tznami uses a **Fusion 360 MCP (Model Context Protocol) server** integration to connect Fusion 360 CAD/CAM operations with AI-assisted tooling. This allows automated parameter queries, design iteration, and manufacturing export (DXF/STEP/STL) to be triggered programmatically. Configuration and usage notes live in `shared/integrations/README.md`.

### KiCad Routing Tools
The team uses **KiCad's built-in router** (interactive + freerouter) alongside a **KiBot CI/CD pipeline** (see `shared/integrations/github-actions-kibot.yml`) that automatically generates production-ready Gerbers, BOM CSVs, and iBOM HTML on every push to `main` or `develop`. See `engineering/pcb-design/README.md` for the full workflow.

---

## Contributing

- Branch naming: `feat/`, `fix/`, `design/`, `docs/` prefixes — see `shared/version-control/git-workflow-guide.md`
- All binary assets (renders, photos, fonts) **must** use Git LFS — see `shared/version-control/README.md`
- Use conventional commits: `feat(pcb): add USB-C ESD protection footprint`
- Open a PR and request review from at least one other team member before merging to `main`
