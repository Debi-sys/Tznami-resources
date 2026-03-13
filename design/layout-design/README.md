# Layout Design

This directory manages keyboard layout visualization, analysis, and export — from initial concept through KLE JSON files used by plate generators and firmware tools.

---

## Keyboard Layout Editor (KLE)

**URL**: http://www.keyboard-layout-editor.com  
**Source**: https://github.com/nickcoutsos/keyswitch-layout-editor

KLE is the universal starting point for any keyboard layout. It produces a JSON format understood by nearly every keyboard tool in the ecosystem.

### Workflow
1. Open KLE → sketch your layout
2. Export JSON (*Raw data* tab → copy)
3. Save to `kle-templates/<layout-name>.json`
4. Feed JSON to: ai03 plate generator, swillkb, KiCad via Ergogen, or QMK `info.json`

### KLE JSON Tips
- Each row is an array; key properties are set via `{}` objects before each key
- `"w": 1.25` sets key width to 1.25u; `"h": 2` sets height to 2u
- `"x": 0.25` adds a gap before the key (useful for 65%/75% nav clusters)
- `"a": 4` sets label alignment to center; `"a": 7` hides labels
- `"c": "#cccccc"` sets key color; `"t": "#000000"` sets legend color

---

## KLE-Render

**URL**: https://kle-render.herokuapp.com  
Paste KLE JSON and get a high-quality, photorealistic keycap render. Useful for colorway previews and social media posts during IC/GB phases.

---

## Keyboard Layout Analyzer

**URL**: https://patorjk.com/keyboard-layout-analyzer/  
Paste a layout and sample text to get heatmap analysis, distance traveled per finger, and effort scores. Useful for validating any ergonomic or custom layout choices.

---

## Ergogen (for Non-Standard / Ergonomic Layouts)

**URL**: https://ergogen.xyz  
**Docs**: https://docs.ergogen.xyz

Ergogen uses YAML config to define key positions parametrically. It can export:
- KLE JSON (for compatibility with other tools)
- PCB outline + switch footprints (for KiCad)
- SVG plate files

Primarily used for split boards or any layout that diverges from standard grid spacing.

---

## Oryx / Wally (ZSA Boards — Reference Only)

**Oryx**: https://configure.zsa.io  
**Wally**: https://ergodox-ez.com/pages/wally  
These tools are specific to ZSA boards (Moonlander, Ergodox EZ) but are useful as reference for complex layer visualization. Not used in Tznami production builds.

---

## KLE Templates

See `kle-templates/` for pre-built KLE JSON files:

| File | Layout |
|------|--------|
| `65pct-layout.json` | Standard 65% ANSI (68 keys, arrows + nav cluster) |

To use a template:
1. Open http://www.keyboard-layout-editor.com
2. Click the *Raw data* tab
3. Delete the existing content and paste the JSON from the template file
4. Customize key labels, colors, and sizes as needed
