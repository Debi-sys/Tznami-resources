# Colorway Specification — [COLORWAY NAME]

**Version**: v1  
**Board**: [Board Name / "Universal"]  
**Designer**: [Designer Name]  
**Date**: [YYYY-MM-DD]  
**Status**: [ ] Concept  [ ] Internal Review  [ ] IC Published  [ ] GB Finalized

---

## 1. Overview

> Write 2–3 sentences describing the inspiration and feel of this colorway. What does it evoke? What theme does it reference?

**Inspiration**: [e.g., "Inspired by the deep blue hour just after sunset over the Pacific Northwest — cool blues, warm amber accents, and a charcoal base."]

**Target profile**: [e.g., GMK Cherry / ePBT Cherry / SA / DSA]

---

## 2. Color Palette

### Base (Alphanumerics)

| Role | Color Name | Pantone | HEX | RGB | CMYK | GMK Code |
|------|-----------|---------|-----|-----|------|----------|
| Alpha key face | Charcoal Night | Pantone 433 C | #3A3F47 | 58, 63, 71 | 0, 11, 0, 72 | N9 |
| Alpha legend | Warm White | Pantone 9181 C | #F2EFE4 | 242, 239, 228 | 0, 1, 6, 5 | WYS |

### Accent (Modifiers)

| Role | Color Name | Pantone | HEX | RGB | CMYK | GMK Code |
|------|-----------|---------|-----|-----|------|----------|
| Modifier key face | Slate Blue | Pantone 2768 C | #1B2A4A | 27, 42, 74 | 64, 43, 0, 71 | GHB |
| Modifier legend | Bright White | Pantone 11-0601 TCX | #FFFFFF | 255, 255, 255 | 0, 0, 0, 0 | WS1 |

### Accent 2 (Highlights / Enter / Esc)

| Role | Color Name | Pantone | HEX | RGB | CMYK | GMK Code |
|------|-----------|---------|-----|-----|------|----------|
| Accent key face | Amber Dusk | Pantone 130 C | #F5A623 | 245, 166, 35 | 0, 32, 86, 4 | R6 |
| Accent legend | Charcoal Night | Pantone 433 C | #3A3F47 | 58, 63, 71 | 0, 11, 0, 72 | N9 |

---

## 3. Modifier Treatment

**Style**: [e.g., Uniform accent color on all modifiers / Gradient accent / Matching alpha with different legend color]

**Modified keys receiving accent color**:
- [ ] Esc
- [ ] Enter
- [ ] Shift (L + R)
- [ ] Backspace
- [ ] Delete
- [ ] Tab
- [ ] Caps Lock
- [ ] All function keys
- [ ] Spacebar
- [ ] Arrow keys

**Special treatment notes**: [e.g., "Enter key uses Amber Dusk face with Charcoal legend — serves as the focal point of the layout."]

---

## 4. Legend / Font

**Font name**: [e.g., GMK standard font / custom "Tznami Sans" / Gorton Modified]  
**Legend style**: [e.g., Doubleshot ABS / Dye-sublimation / UV print]  
**Legend size**: [e.g., Standard GMK sizing / +10% large for readability]  
**Sublegend style**: [e.g., Secondary function legends on F-row in accent color]

**Font files attached**: [ ] Yes — see `assets/fonts/` &nbsp;&nbsp;&nbsp; [ ] No — use manufacturer default

---

## 5. Novelty Keys

| Key Position | Description | Icon/Art | File |
|-------------|-------------|----------|------|
| Esc | [e.g., Tznami wave logo] | ![wave icon] | `assets/icons/tznami-wave.svg` |
| Enter | [e.g., Stylized return arrow] | — | — |
| Fn key | [e.g., Lightning bolt] | — | — |
| 7u spacebar | [e.g., "TZNAMI" wordmark centered] | — | — |

---

## 6. Kits

| Kit | Contents | Estimated Price | Mandatory for Base? |
|-----|----------|-----------------|---------------------|
| Base kit | Full ANSI 65% + 100% + numpad legends | $[X] | Yes |
| Hiragana sub-legends | Japanese sub-legends on alphas | $[X] | No |
| Spacebars kit | 6.25u, 7u, 2.25u + 2.75u split | $[X] | No |
| Numpad kit | Full numpad set | $[X] | No |
| Colevrak / ISO | Additional layout support | $[X] | No |
| Artisan novelties | Custom artisan keycaps (3rd party collab) | TBD | No |

---

## 7. Manufacturer Compatibility

| Manufacturer | Profile | Feasibility | Notes |
|-------------|---------|-------------|-------|
| GMK | Cherry | ✅ Preferred | Colors match GMK catalogue |
| ePBT / Keyreative | Cherry | ✅ Alternative | Use dye-sub; lower MOQ |
| Signature Plastics | SA | ⚠️ Color match needed | SP color catalogue differs |
| Domikey | Cherry | ✅ Budget option | Lower prestige, faster lead time |

---

## 8. Image References

> Attach or link render files here. Renders must be in `assets/renders/colorway-<name>/`.

- [ ] KLE-Render preview: `assets/renders/colorway-[name]/kle-render.png`
- [ ] Blender full board render (top view): `assets/renders/colorway-[name]/hero-top.png`
- [ ] Blender full board render (45° angle): `assets/renders/colorway-[name]/hero-angle.png`
- [ ] Figma kit layout sheet: `assets/renders/colorway-[name]/kit-sheet.png`

---

## 9. Revision History

| Version | Date | Author | Change |
|---------|------|--------|--------|
| v1 | [YYYY-MM-DD] | [Name] | Initial draft |
