# Engineering

This directory contains all engineering resources for Tznami keyboard development: PCB design, firmware, mechanical design (plate & case), bill of materials, and quality assurance testing.

---

## Toolchain Overview

### PCB Design — KiCad
KiCad 7/8 is our primary PCB EDA tool. The schematic and layout files for every board live in their own project subdirectory (not tracked here — see the board-specific repos). This repo provides templates and automation configs.

- **KiBot** automates Gerber, drill file, BOM CSV, iBOM HTML, and 3D render generation. See `pcb-design/kibot-config-template/`.
- **Freerouting** (Java CLI) handles complex via-heavy sections when manual routing becomes tedious. Launch from KiCad via the Freerouting plugin or standalone: `java -jar freerouting.jar -de <board>.dsn -do <board>.ses`
- **KiCad DRC** (Design Rule Check) must pass with zero errors before any Gerber export. Run via *Inspect → Design Rules Checker* or through KiBot CI.

### PCB Design — Fusion 360 MCP Server *(existing integration)*
The Fusion 360 MCP server is used for 3D case/plate modeling and STEP export. It connects directly to our AI tooling for parameterized design iteration. See `shared/integrations/README.md` for setup.

### Firmware — QMK / ZMK / Vial
- **QMK**: Primary firmware for wired boards. STM32F401-based builds. Via/Vial support enabled by default.
- **ZMK**: Used for any wireless/BLE keyboard designs.
- **Vial**: Real-time layout editor compatible with QMK. Preferred for end-user remapping.
- See `firmware/README.md` for full setup and workflow.

### Plate & Case Design
- **OpenSCAD**: Parametric scripts for case bodies, top frames, and switch plates. See `plate-and-case/openscad-templates/`.
- **Fusion 360**: Full 3D modeling, rendering, and DXF/STEP export for CNC and anodizing vendors.
- **ai03 Plate Generator** (https://ai03.com/generator): Generates switch cutout SVGs from KLE JSON.
- **swillkb** (http://builder.swillkb.com): Quick plate + case dimension calculator.
- **Ergogen** (https://ergogen.xyz): For any split/ergonomic variant plate generation.

### BOM & Sourcing
Components are sourced primarily from **LCSC** (cost-efficient, ships from CN), with **Digi-Key** and **Mouser** as backups for guaranteed stock. See `bom-and-sourcing/README.md`.

### Testing & QA
Every unit goes through a written QA checklist before packaging. See `testing/qa-checklist.md`. Acoustic testing uses **REW** or **Audacity** with a calibrated measurement microphone.

---

## Department Workflow

```
KLE JSON layout
     ↓
KiCad Schematic (switches, MCU, USB, ESD)
     ↓
KiCad PCB Layout + DRC
     ↓
KiBot CI → Gerbers + BOM + iBOM
     ↓
Send Gerbers to PCB fab (JLCPCB / PCBWay)
     ↓
Plate/Case: Fusion 360 → DXF → CNC vendor
     ↓
Firmware: QMK build → .hex/.uf2 → flash via STM32 DFU
     ↓
QA: qa-checklist.md → Pass → Package
```

---

## Subdirectories

| Directory | Contents |
|-----------|----------|
| `firmware/` | QMK/ZMK/Vial setup guides and config templates |
| `pcb-design/` | KiCad workflow, KiBot YAML templates |
| `plate-and-case/` | OpenSCAD parametric templates, plate generator notes |
| `bom-and-sourcing/` | BOM CSV template, supplier notes |
| `testing/` | QA checklist, acoustic testing process |
