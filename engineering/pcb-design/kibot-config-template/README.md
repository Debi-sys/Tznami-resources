# KiBot Config Template

This template provides a ready-to-use KiBot v2 configuration that generates all production-required output files from your KiCad project in a single command.

---

## What KiBot Generates

| Output | Format | Usage |
|--------|--------|-------|
| Gerbers | `.gbr` per layer | Send to PCB fab |
| Drill file | Excellon `.drl` | Included with Gerbers |
| BOM | `.csv` | Component ordering (LCSC/Digi-Key) |
| iBOM | `.html` | Interactive component placement map |
| 3D Render | `.png` | Documentation/marketing |

---

## Prerequisites

```bash
# Install KiBot
pip install kibot

# Install KiCad (required for KiBot to access Python scripting API)
# https://www.kicad.org/download/

# Optional: install additional KiBot dependencies for 3D renders
pip install kiauto
```

Or use the official Docker image (recommended for CI):
```bash
docker pull setsoft/kicad_auto:latest
```

---

## Usage

1. Place `kibot.yml` in your KiCad project root directory (alongside your `.kicad_pro` file).

2. Run KiBot:
   ```bash
   # Basic run (auto-detects .kicad_pro in current directory)
   kibot -c kibot.yml

   # Explicit file paths
   kibot -c kibot.yml -b my_board.kicad_pcb -e my_schematic.kicad_sch

   # Run only specific output (e.g., just BOM)
   kibot -c kibot.yml -s all bom_csv

   # List all available outputs defined in config
   kibot -c kibot.yml --list
   ```

3. Output files appear in subdirectories under `./output/` (configurable via `dir` in the YAML).

---

## Customizing the Config

- **`dir`** fields: change output directories as needed
- **`layers`**: add or remove copper layers for 4-layer boards (add `In1.Cu`, `In2.Cu`)
- **`dnf_filter`**: KiBot can auto-exclude DNF (Do Not Fit) components from BOM
- **`variant`**: define multiple board variants (e.g., with/without encoder) in one YAML
- **`3D render`**: requires KiCad 3D model files to be installed; disable if renders fail in CI

---

## CI/CD Integration

See `shared/integrations/github-actions-kibot.yml` for a complete GitHub Actions workflow that runs KiBot automatically on every push to `main` or `develop` and uploads all outputs as build artifacts.
