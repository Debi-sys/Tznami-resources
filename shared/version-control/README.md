# Version Control

This directory documents Tznami's Git workflow — branching strategy, commit conventions, PR process, and binary asset management with Git LFS.

---

## Git Setup

### Required Configuration (one-time per machine)

```bash
# Identity
git config --global user.name "Your Name"
git config --global user.email "you@tznami.com"

# Default branch name
git config --global init.defaultBranch main

# Push behavior
git config --global push.default current

# Diff tool (optional but recommended)
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'

# Install Git LFS (one-time)
git lfs install
```

---

## Branching Strategy

Tznami uses a **simplified trunk-based workflow** appropriate for a 5-person team:

### Long-lived branches

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code; only merge via PR; triggers CI (KiBot, etc.) |
| `develop` | Integration branch; next release in progress |

### Short-lived feature branches

Always branch from `develop` (not `main`). Delete after merging.

```bash
# Create a new feature branch
git checkout develop
git pull
git checkout -b feat/kb65-usb-esd-protection

# When done, push and open a PR targeting develop
git push -u origin feat/kb65-usb-esd-protection
```

### Branch Naming Convention

| Prefix | Use Case | Example |
|--------|---------|---------|
| `feat/` | New feature or component | `feat/kb65-encoder-support` |
| `fix/` | Bug fix | `fix/kb65-pcb-footprint-usb-c` |
| `design/` | Design assets, colorways, renders | `design/charcoal-night-renders` |
| `docs/` | Documentation only | `docs/update-bom-readme` |
| `chore/` | Maintenance (deps, tooling) | `chore/update-kibot-version` |
| `hotfix/` | Critical fix to main (rare) | `hotfix/kb65-pcb-rev3-drill-offset` |

---

## Commit Message Convention

Tznami uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

### Types
| Type | Use For |
|------|---------|
| `feat` | New feature or design addition |
| `fix` | Bug or error correction |
| `docs` | Documentation only |
| `design` | Visual/CAD design assets |
| `chore` | Tooling, CI, dependency updates |
| `refactor` | Code restructuring without behavior change |
| `test` | Adding or modifying tests |

### Scope (optional but encouraged)
Use the board name or subsystem: `kb65`, `pcb`, `firmware`, `case`, `bom`, `marketing`

### Examples
```
feat(kb65): add STM32F401 MCU footprint to main schematic

fix(pcb): correct USB-C CC resistor values from 5.6k to 5.1k

docs(firmware): add QMK flashing instructions to firmware README

design(charcoal-night): add Blender hero render at 4K

chore(kibot): update kibot.yml to KiBot v2 syntax
```

---

## KiCad-Specific Notes

KiCad's text-based formats (`.kicad_sch`, `.kicad_pcb`, `.kicad_pro`) diff well in Git. Binary files like 3D model caches (`.3dshapes`) and rendered images must use Git LFS.

**Never commit to the schematic or PCB without running DRC first.** Broken DRC is a merge blocker.

**Recommended `.gitignore` additions for KiCad:**
```
# KiCad backup files
*.bak
*.kicad_pcb-bak
*.kicad_sch-bak
*-backups/

# Generated output (regenerate with KiBot)
output/gerbers/
output/bom/
output/renders/
```

---

## Pull Request Process

1. **Open a PR** against `develop` (never directly to `main`)
2. **Title**: Follow conventional commit format: `feat(kb65): add USB ESD protection`
3. **Description**: Explain what changed and why; link to relevant Issue/ticket; note any QA steps taken
4. **Review**: At least **1 other team member** must approve
5. **CI must pass** (KiBot DRC, GitHub Actions) before merge
6. **Squash merge** preferred for feature branches to keep history clean
7. **Delete branch** after merge

### PR Description Template
```markdown
## What
[Brief description of the change]

## Why
[Context/motivation — link to issue if applicable]

## How
[Technical approach if non-obvious]

## Testing
- [ ] DRC passes
- [ ] Firmware compiles
- [ ] Tested on hardware: [yes/no — describe]

## Screenshots / Renders
[Attach if relevant]
```

---

## Release Tagging (Semantic Versioning)

Tag releases on `main` using semantic versioning: `v<MAJOR>.<MINOR>.<PATCH>`

```bash
# Tag a release
git tag -a v1.0.0 -m "KB65 Rev 3 — Production release"
git push origin v1.0.0
```

| Version increment | When |
|-------------------|------|
| MAJOR (v2.0.0) | Breaking hardware revision (new PCB spin with different footprints) |
| MINOR (v1.1.0) | Feature addition (new firmware feature, new colorway) |
| PATCH (v1.0.1) | Bug fix (corrected schematic, documentation fix) |

For KiCad board files, also update `DEVICE_VER` in `config.h` to match the BCD version.
