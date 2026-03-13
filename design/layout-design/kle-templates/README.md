# KLE Templates

Pre-built Keyboard Layout Editor JSON files for Tznami's supported layouts.

---

## Files

| File | Description | Keys |
|------|-------------|------|
| `65pct-layout.json` | Standard 65% ANSI layout with arrows and nav cluster | 68 |

---

## How to Load a Template

1. Open **Keyboard Layout Editor**: http://www.keyboard-layout-editor.com
2. Click the **Raw data** tab (bottom of the editor pane)
3. Select all existing content and delete it
4. Open the `.json` template file from this directory and copy the full contents
5. Paste into the Raw data field
6. Click **Apply** to load the layout

---

## Exporting from KLE

| Export Type | How | Used For |
|-------------|-----|----------|
| JSON (Raw data) | Copy from Raw data tab | ai03 plate gen, Ergogen, QMK info.json |
| PNG image | Top toolbar → Download PNG | Documentation, social media |
| SVG | Top toolbar → Download SVG | Vector art, print |

---

## Feeding KLE JSON to Other Tools

**ai03 Plate Generator** (https://ai03.com/generator):
- Paste JSON directly into the input field
- Set switch type and corner radius
- Download SVG/DXF plate outline

**QMK info.json**:
- KLE JSON → convert via https://qmk.fm/converter/
- Or hand-adapt key positions to QMK's `layout` array in `info.json`

**Ergogen**:
- Use KLE JSON as a reference for `points.columns` and `points.rows` values
- Ergogen uses physical mm positions, not unit-based coordinates

---

## Creating a New Template

When designing a new Tznami layout:
1. Draft in KLE, set all key labels, widths, and spacings
2. Export raw JSON
3. Save as `<layout-name>.json` in this directory
4. Update the table above in this README
5. Commit with message: `feat(design): add KLE template for <layout name>`
