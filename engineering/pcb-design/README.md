# PCB Design

This directory covers the full PCB design workflow for Tznami keyboards, from initial schematic to production-ready Gerber files.

---

## Primary Tool: KiCad 8

**Download**: https://www.kicad.org/download/  
**Documentation**: https://docs.kicad.org  
**Forums**: https://forum.kicad.info

KiCad is free, open-source, and the de facto standard for custom keyboard PCB design. All Tznami boards are designed in KiCad. Key files produced per board:

| File | Description |
|------|-------------|
| `*.kicad_sch` | Schematic |
| `*.kicad_pcb` | PCB layout |
| `*.kicad_pro` | Project file |
| `fp-lib-table` | Footprint library paths |
| `sym-lib-table` | Symbol library paths |

---

## Schematic Design Checklist

Before starting layout, verify your schematic includes:

- [ ] MCU (STM32F401) with all decoupling caps (100nF on every VDD pin, 4.7µF bulk)
- [ ] USB-C connector with CC resistors (5.1kΩ to GND on CC1 and CC2 for UFP)
- [ ] USB ESD protection IC (e.g., USBLC6-2SC6 or TPD2E2U06)
- [ ] Crystal (if not using HSI) with load capacitors — calculate from crystal datasheet
- [ ] Reset circuit (NRST with 100nF cap, optional tactile switch)
- [ ] BOOT0 pull-down (10kΩ to GND) with optional solder bridge for DFU
- [ ] Switch matrix with per-key diodes (SOD-123 1N4148W, COL2ROW)
- [ ] Kailh hot-swap sockets (CPG151101S11) or direct-solder switch footprints
- [ ] RGB LED chain (WS2812B or SK6812 MINI-E) with 100nF decoupling on each
- [ ] Polyfuse (500mA) on VBUS for overcurrent protection
- [ ] Power LED and status LEDs (optional)
- [ ] Encoder (if applicable)

---

## KiCad Footprint Libraries for Keyboards

Add these libraries to your KiCad installation:

1. **ai03's Type-C connector library**: https://github.com/ai03-2725/Type-C.pretty
2. **MX/Alps combined switch library**: https://github.com/ai03-2725/MX_Alps_Hybrid
3. **Kailh hotswap socket footprints**: https://github.com/perigoso/keyswitch-kicad-library
4. **STM32 MCU footprints**: included in KiCad default libraries (`Package_QFP`, `Package_DFN_QFN`)

---

## PCB Layout Best Practices

### Layer Stack
Use 2-layer PCBs for standard builds (cost-effective at JLCPCB/PCBWay):
- `F.Cu` — signal traces, MCU, USB
- `B.Cu` — ground plane (flood fill), switch matrix traces

### Design Rules (safe for most fabs)
| Parameter | Minimum |
|-----------|---------|
| Trace width | 0.15 mm (signal), 0.5 mm (power) |
| Clearance | 0.15 mm |
| Via drill | 0.3 mm |
| Via annular ring | 0.15 mm |
| Silkscreen width | 0.15 mm |

### Critical Routing Rules
- Place decoupling caps as close as possible to the MCU VDD pins
- USB D+/D- traces must be differential pairs: 90Ω impedance, matched length within 0.5mm
- Keep USB ESD IC within 5mm of the USB connector
- Crystal traces: short, shielded, away from switching signals
- RGB data line: short pull-down (300–500Ω) between MCU and first LED
- Ground plane stitching vias around the USB connector area

### DRC Settings
Before exporting Gerbers, run DRC (*Inspect → Design Rules Checker*) and resolve all errors. Common issues:
- Unconnected nets (check all power pins)
- Clearance violations near tightly packed switch footprints
- Missing courtyard overlaps on hotswap sockets

---

## Automated Output with KiBot

KiBot (https://github.com/INTI-CMNB/KiBot) generates all production files automatically from a single YAML config. See `kibot-config-template/kibot.yml`.

**Outputs generated:**
- Gerber files (all copper layers + silkscreen + solder mask + drill)
- BOM as CSV (component reference, value, footprint, supplier, part number)
- iBOM HTML (interactive component placement map)
- 3D render (PNG top/bottom)

Run locally:
```bash
pip install kibot
kibot -c kibot-config-template/kibot.yml -b <board>.kicad_pcb -e <schematic>.kicad_sch
```

Or trigger via GitHub Actions (see `shared/integrations/github-actions-kibot.yml`).

---

## PCB Fabrication

### Recommended Fabs

| Fab | Min Order | Notes |
|-----|-----------|-------|
| JLCPCB | 5 pcs | Cheapest, fastest; SMT assembly available |
| PCBWay | 5 pcs | Better color options; good for prototypes |
| Elecrow | 10 pcs | Good for larger prototype runs |
| OSH Park | 3 pcs | US-based; excellent quality, expensive |

### JLCPCB Gerber Export Checklist
When exporting from KiCad for JLCPCB, use these layer mappings:
- GTL → F.Cu, GBL → B.Cu
- GTS → F.Mask, GBS → B.Mask
- GTO → F.Silkscreen, GBO → B.Silkscreen
- DRL → drill file (Excellon format)
- GKO or Edge.Cuts → board outline

---

## EasyEDA
EasyEDA (https://easyeda.com) is useful for quick schematic lookups, LCSC component searches with integrated BOM ordering, and converting EasyEDA projects to KiCad format (via easyeda2kicad: https://github.com/uPesy/easyeda2kicad.py).
