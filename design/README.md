# Design

This directory covers all visual and creative design resources for Tznami keyboards — from layout prototyping and keycap colorway specification through case aesthetics, brand identity, and digital asset management.

---

## Design Toolchain Overview

### Layout Design
Keyboard layout design begins with **KLE (Keyboard Layout Editor)** — a web-based tool for visualizing key positions, sizes, and labels. KLE JSON is the universal interchange format for layout data, consumed by plate generators, PCB tools, firmware configurators, and render tools.

See `layout-design/` for KLE templates and usage.

### Keycap Design
Keycap colorways are documented in `keycap-design/colorway-templates/` using a standardized spec format that includes Pantone colors, RAL equivalents, legend styles, and manufacturer compatibility notes.

Design tools:
- **Inkscape** (free): vector legend artwork, SVG exports for manufacturers
- **Adobe Illustrator**: professional legend/icon work
- **Blender**: photorealistic keycap set renders (use hard-surface materials + HDRI lighting)

### Case Aesthetics
Case color, finish, and texture decisions are documented in `case-aesthetics/`. Fusion 360's rendering engine is used for initial colorway visualization; Blender/Keyshot for final marketing renders.

### Brand & Assets
All brand guidelines, color palette standards, typography rules, and logo usage policies live in `assets/`. Binary assets (renders, photos, fonts) are tracked with Git LFS — never commit large binaries directly.

---

## Subdirectories

| Directory | Contents |
|-----------|----------|
| `layout-design/` | KLE JSON templates, layout analysis tools |
| `keycap-design/` | Colorway spec templates, manufacturer notes |
| `case-aesthetics/` | Finish specs, render guides, color variants |
| `assets/` | Brand guidelines, logo files, font docs, Git LFS notes |

---

## Design ↔ Engineering Handoff

Key outputs from Design that Engineering needs:
- **KLE JSON** → ai03 plate generator → SVG/DXF for plate fab
- **KLE JSON** → QMK `info.json` layout definition
- **Colorway spec** → Pantone references passed to case anodizing vendor
- **Case DXF/STEP** (Fusion 360 export) → CNC vendor quote
- **Logo SVG** → KiCad silkscreen import

All handoff files should be placed in the relevant board's feature branch and linked in the PR description.
