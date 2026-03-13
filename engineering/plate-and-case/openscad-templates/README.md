# OpenSCAD Case Templates

This directory contains parametric OpenSCAD scripts for Tznami keyboard cases. Adjust the variables at the top of each `.scad` file and re-render to get your custom dimensions — no modeling knowledge required.

---

## Files

| File | Description |
|------|-------------|
| `65pct-case-base.scad` | Bottom case body for a standard 65% keyboard (tray-mount / bottom-mount compatible) |

---

## Prerequisites

1. Install OpenSCAD: https://openscad.org/downloads.html (version 2021.01 or later recommended)
2. Open a `.scad` file: `File → Open`
3. Adjust variables in the `/* === USER PARAMETERS === */` section at the top
4. Press **F5** (Preview) for a fast draft render, **F6** (Render) for the final mesh
5. Export: `File → Export → Export as STL` (3D printing) or `Export as DXF` (CNC)

---

## Parameter Reference (65pct-case-base.scad)

| Variable | Default | Description |
|----------|---------|-------------|
| `case_width` | 320.0 | Overall outer width in mm |
| `case_depth` | 113.5 | Overall outer depth in mm |
| `case_height` | 30.0 | Total case height (bottom to top lip) in mm |
| `wall_thickness` | 3.0 | Side and back wall thickness in mm |
| `bottom_thickness` | 3.0 | Floor thickness in mm |
| `pcb_height_from_base` | 8.0 | Z-height of PCB surface above case floor |
| `usb_cutout_w` | 10.0 | USB-C opening width in mm |
| `usb_cutout_h` | 4.0 | USB-C opening height in mm |
| `screw_hole_dia` | 3.2 | M3 screw hole diameter (3.2mm = M3 clearance) |
| `corner_radius` | 3.0 | Outer corner rounding radius |

---

## Rendering for CNC

When exporting DXF for a CNC vendor, export each profile (bottom plate, side walls, etc.) as separate DXF files. For sheet metal / aluminum extrusion cases, use the DXF profile as the base outline and specify wall height separately in the quote request.

Common CNC tolerances to request:
- Position tolerance: ±0.1mm
- Surface finish: Ra 1.6µm or better (for anodizing)
- Thread: M3 tapped holes (specify depth)

---

## 3D Printing Notes

For prototyping cases before CNC, print in PETG or ABS (better heat resistance than PLA for a keyboard in warm rooms). Recommended print settings:
- Layer height: 0.2mm
- Infill: 40% gyroid
- Wall loops: 4
- Top/bottom layers: 5
- Support: yes (for overhangs in USB cutout area)
