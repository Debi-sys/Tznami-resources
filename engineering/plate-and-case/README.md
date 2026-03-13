# Plate & Case Design

This directory covers mechanical design resources for keyboard plates and cases, including parametric templates, tool guides, and material specifications.

---

## Tool Overview

### ai03 Plate Generator
**URL**: https://ai03.com/generator  
The fastest way to generate a switch plate for any KLE-based layout. Paste your KLE JSON, configure plate properties (switch type, stabilizer cutout style, plate corners), and export SVG or DXF for laser cutting or CNC.

Supported switch types: MX, Alps, MX+Alps, Kailh Choc V1/V2  
Stabilizer styles: PCB-mount, plate-mount, or none  
Format: SVG for laser cutting, DXF for CAD import

### swillkb Plate & Case Builder
**URL**: http://builder.swillkb.com  
An older but still useful web tool that generates both a plate and an open/closed case design from KLE JSON. Good for quick aluminum case dimension estimates. Export as DXF.

### Ergogen
**URL**: https://ergogen.xyz  
**Docs**: https://docs.ergogen.xyz  
Ergogen uses a YAML config to generate parametric split/ergonomic keyboard layouts, PCB outlines, and switch plates. Essential if any Tznami boards diverge from standard layout grids. Also generates KiCad footprints.

### OpenSCAD
**URL**: https://openscad.org  
**Download**: https://openscad.org/downloads.html  
Parametric solid modeling using a scripting language. Ideal for case bodies, top frames, feet, and gasket holders. All Tznami case templates are maintained as `.scad` files — see `openscad-templates/`.

Key OpenSCAD concepts:
- `module` — reusable shape definitions
- `difference()` — subtract one shape from another (for cutouts)
- `union()` — combine shapes
- `linear_extrude()` — extrude 2D profiles to 3D
- Variables at the top of each file control all dimensions

Export formats: STL (3D printing), DXF (CNC 2D paths), SVG

### Fusion 360 MCP Server *(existing integration)*
Fusion 360 is used for production-quality case modeling, realistic renders, and generating DXF/STEP files for CNC vendors and anodizing houses. The MCP server integration allows programmatic access to Fusion 360 operations from our tooling pipeline. See `shared/integrations/README.md`.

---

## Plate Material Guide

| Material | Thickness | Sound Signature | Cost | Notes |
|----------|-----------|-----------------|------|-------|
| FR4 (PCB material) | 1.5mm | Clacky, crisp | $ | Common, easy to source from PCB fabs |
| Aluminum | 1.5mm | Solid, metallic | $$ | Anodizable; most premium option |
| Polycarbonate (PC) | 1.5mm | Flexible, softer | $$ | Adds flex, reduces fatigue |
| POM / Delrin | 1.5mm | Thocky, muted | $$ | Popular for budget flex builds |
| Carbon fiber | 1.5mm | Stiff, unique | $$$ | Lightweight, premium feel |
| Brass | 1.5mm | Heavy, very stiff | $$$ | Maximum rigidity, popular for top-mount |

### Switch Cutout Dimensions (MX-compatible)
- **Standard**: 14.00mm × 14.00mm square
- **Tight tolerance**: 13.9mm × 13.9mm (for stabilized mounting)
- **Choc V1**: 13.8mm × 13.8mm

### Stabilizer PCB Cutout (2U PCB-mount)
- Main body: 14mm × 7mm
- Wire housing: varies by brand (see ai03 plate generator for exact offsets)

---

## Case Design Considerations

### Mount Styles
- **Top-mount**: Plate screws into case top half. Stiffest; least flex.
- **Bottom-mount**: Plate screws into case bottom. Slightly more flex than top-mount.
- **Gasket-mount**: Plate floats on gaskets. Most popular for premium feel; reduces harsh impact.
- **Tray-mount**: PCB screws directly into case floor. Budget option; often used for polycarbonate cases.
- **Leaf-spring**: Plate is held by spring-like clips. Newer style; very bouncy feel.

### USB Cutout
Standard USB-C: 9mm wide × 3.5mm tall opening in case wall.  
Add 0.5mm clearance per side for easy insertion: **10mm × 4mm** cutout minimum.

### PCB Standoff Heights
- Switch travel: 4.0mm (MX) — case ceiling must clear fully pressed switches
- PCB thickness: 1.6mm standard
- Hotswap socket: +1.8mm below PCB
- Minimum bottom clearance for components: 3mm from PCB bottom to case floor

---

## OpenSCAD Templates

See `openscad-templates/` for the parametric case base file. To render:
```bash
openscad -o output/case-base.stl openscad-templates/65pct-case-base.scad
openscad -o output/case-base.dxf openscad-templates/65pct-case-base.scad
```
