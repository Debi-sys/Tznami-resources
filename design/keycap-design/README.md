# Keycap Design

This directory covers the full keycap design pipeline for Tznami group buys — from initial colorway conception through manufacturer-ready specifications.

---

## Design Tools

### Inkscape (Free, Open Source)
**URL**: https://inkscape.org  
Used for all vector legend artwork, icon design, and novelty key illustrations. SVG is the preferred source format; export as AI or PDF for manufacturer submission.

Key skills needed:
- Path editing (Bézier curves for smooth legends)
- Node editing for legend consistency
- Color management (convert to Pantone-equivalent swatches for manufacturer)
- Export: `File → Save a Copy → Plain SVG` for fab submission

### Adobe Illustrator
**URL**: https://adobe.com/illustrator  
The industry standard requested by most manufacturers (GMK, Signature Plastics, etc.). Convert Inkscape SVGs to `.ai` format for final submission. Use `Object → Expand` to flatten all strokes.

### Blender (Renders)
**URL**: https://www.blender.org  
Used for photorealistic keycap set renders. Pipeline:
1. Import keycap model (download base models from community: https://github.com/nickcoutsos/keyswitch-layout-editor-blender)
2. Apply material: use principled BSDF with low roughness (0.1-0.2) for ABS doubleshot
3. Apply legend textures via UV mapping
4. Use HDRI lighting for realistic environment
5. Render at 4K for marketing use

### Colorway Preview Tools
- **KLE-Render** (https://kle-render.herokuapp.com): Fastest preview — paste KLE JSON with color values
- **Keycap render Figma plugins**: Community plugins allow quick kit layout visualization
- **Blender**: Full scene with keyboard for hero renders

---

## Manufacturer Specifications

### GMK (German dye-sublimation & doubleshot)
- **Legend format**: Vector SVG/AI, doubleshot layer (legend is a separate physical layer)
- **Color system**: RAL + HKS, matched to GMK color catalogue (https://gmk.de)
- **Minimum legend size**: 0.7mm stroke width
- **Profile**: GMK Cherry profile (standard for most MK group buys)
- **Minimum order**: ~100 kits for a GB; MOQs vary by kit

### Signature Plastics (SP)
- **Profiles**: DSA, SA, DCS
- **Color system**: SP color codes (e.g., `GBA`, `WYS`) — see SP colorway guide
- **URL**: https://www.solutionsinplastic.com

### CRP (ePBT / Keyreative)
- **Profile**: Cherry clone (ePBT), compatible with GMK
- **Legend**: Dye-sublimated or doubleshot
- **Min order**: Lower MOQs than GMK, popular for budget/independent GBs

### Domikey, YMDK, Akko
Lower MOQ options suitable for small indie runs. Less prestige but accessible for first GBs.

---

## Colorway Templates

See `colorway-templates/` for the standardized colorway specification format. Fill out one spec doc per colorway per board.
