# Design Assets

This directory documents the organization and management of Tznami's digital design assets — including Git LFS policies, folder conventions, brand colors, and font licensing.

---

## Git LFS (Large File Storage)

**All binary files must be tracked with Git LFS.** Binary files committed directly to Git bloat the repository history permanently.

### Setting Up Git LFS

```bash
# Install Git LFS (one-time, per machine)
git lfs install

# Track file types (already configured in .gitattributes)
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.psd"
git lfs track "*.ai"
git lfs track "*.blend"
git lfs track "*.step"
git lfs track "*.stl"
git lfs track "*.dxf"
git lfs track "*.ttf"
git lfs track "*.otf"
git lfs track "*.woff"
git lfs track "*.woff2"
git lfs track "*.mp4"
git lfs track "*.mov"
```

Verify your `.gitattributes` file exists at the repository root before committing any binary files.

### LFS Storage Limits
GitHub Free: 1 GB storage, 1 GB bandwidth/month  
GitHub Team: same  
Consider GitHub's LFS data packs ($5/50GB) for larger asset repos.

---

## Folder Naming Conventions

```
design/assets/
├── brand/
│   ├── logo/               # SVG, AI, PNG versions of logo
│   ├── icons/              # UI icons, social media icons
│   └── patterns/           # Repeating background patterns
├── renders/
│   ├── colorway-<name>/    # Per-colorway Blender/Fusion renders
│   └── board-<name>/       # Per-board product renders
├── photos/
│   ├── <board-name>/       # Edited product photos, organized by shoot date
│   └── lifestyle/          # Lifestyle/context photography
├── fonts/                  # Licensed font files (see font licensing below)
├── templates/
│   ├── social/             # Canva/Figma social media templates
│   └── print/              # PDF print templates (thank-you cards, stickers)
└── video/
    ├── raw/                # Raw footage (large — LFS required)
    └── edited/             # Final cut exports
```

---

## Color Palette

The Tznami brand color palette is documented in `brand-guidelines-template.md`. Do not use off-palette colors in any official brand material without design lead approval.

Quick reference (primary brand colors):

| Name | HEX | Use |
|------|-----|-----|
| Tznami Navy | #1A2B4A | Primary brand color |
| Tznami Teal | #00B4D8 | Accent, CTA, highlights |
| Off-White | #F5F5F0 | Backgrounds, light text backgrounds |
| Charcoal | #2D2D2D | Body text, dark elements |
| Amber | #F5A623 | Warning, limited highlight use |

---

## Font Licensing

All fonts used in Tznami materials must have an appropriate license for commercial use.

| Font | License | Use |
|------|---------|-----|
| Inter | SIL Open Font License | Primary UI / web font — free, always OK |
| Neue Haas Grotesk | Commercial license required | Premium print use only |
| JetBrains Mono | SIL OFL | Code samples, firmware docs |

**Rules:**
- Do not distribute licensed font `.ttf`/`.otf` files in a public repository
- Store licensed fonts in `design/assets/fonts/` with a `LICENSE.txt` for each font
- Free (OFL, MIT) fonts may be committed; commercial-licensed fonts must be installed separately per team member's machine

---

## Asset Request Process

If you need a design asset created or modified:
1. Create a GitHub Issue labeled `design` with the asset description
2. Assign to the designer
3. Designer delivers the asset in a PR adding files to the appropriate `assets/` subfolder
4. Reviewer approves → merge → asset is available to all team members
