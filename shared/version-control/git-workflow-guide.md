# Git Workflow Guide — Tznami

A practical, step-by-step reference for the Tznami Git workflow. Bookmark this. Refer to it when something feels uncertain.

---

## Day-to-Day Workflow

### Starting New Work

```bash
# Always start from an up-to-date develop branch
git checkout develop
git pull origin develop

# Create your feature branch
git checkout -b feat/kb65-gasket-slots

# Do your work...
# Stage and commit frequently — small commits are easier to review
git add -p           # Interactive staging (add only what you intend)
git commit -m "feat(kb65): add 8 gasket slot cutouts to case bottom model"
```

### Keeping Your Branch Updated

```bash
# Rebase your branch onto the latest develop (preferred over merge for clean history)
git fetch origin
git rebase origin/develop

# If conflicts arise during rebase:
git status                  # see which files conflict
# Edit conflicting files to resolve
git add <resolved-file>
git rebase --continue

# If you need to abort the rebase:
git rebase --abort
```

### Pushing Your Branch

```bash
# First push (sets up tracking)
git push -u origin feat/kb65-gasket-slots

# Subsequent pushes
git push

# After a rebase (force push — ONLY on your own feature branch, never on main/develop)
git push --force-with-lease
```

---

## Branch Naming Reference

```
feat/      → New features, components, assets
fix/       → Bug fixes
design/    → Design assets (renders, colorways, brand assets)
docs/      → Documentation changes only
chore/     → Tooling, CI config, dependency updates
hotfix/    → Emergency fix directly to main (create from main, merge to both main AND develop)
```

**Good branch names:**
```
feat/kb65-via-json-definition
fix/firmware-encoder-rotation-direction
design/dusk-blue-kle-render
docs/add-pcb-design-drc-checklist
chore/upgrade-kibot-to-v2
```

**Bad branch names:**
```
my-branch
fix-stuff
alex-work
updates
```

---

## Commit Message Format

```
<type>(<scope>): <imperative present-tense description>

<optional body — explain WHY not WHAT>

<optional footer — breaking change notes, issue refs>
```

### Real Examples

```bash
# Good commit messages
git commit -m "feat(pcb): add ESD protection on USB D+/D- lines"
git commit -m "fix(firmware): correct RGB matrix LED index offset for row 3"
git commit -m "docs(bom): add LCSC part numbers to all passive components"
git commit -m "design(sakura): add Blender renders for IC post"
git commit -m "chore: update KiBot config to use v2 gerber output syntax"

# Bad commit messages (too vague)
git commit -m "fix stuff"
git commit -m "updates"
git commit -m "WIP"
git commit -m "changes"
```

### Writing Good Commit Bodies

When a commit needs more explanation, add a blank line and a body:

```bash
git commit -m "fix(pcb): swap USB_DP and USB_DM traces on front copper layer

The D+ and D- lines were crossed in the via fan-out from the USB connector
to the ESD IC. This caused USB 2.0 High Speed enumeration to fail on
Windows hosts while Full Speed worked. Verified fix on rev2b prototype.

Fixes: #47"
```

---

## Pull Request Checklist

Before requesting review:

```
[ ] Branch is rebased on latest develop (no merge conflicts)
[ ] Commit messages follow the convention
[ ] DRC passes (for PCB changes) — screenshot or KiBot log attached
[ ] Firmware compiles: qmk compile -kb tznami/<board> -km default
[ ] README / documentation updated if behavior changed
[ ] No secrets, credentials, or personal data in commits
[ ] Large binary files tracked with Git LFS (not committed directly)
[ ] PR title follows conventional commit format
[ ] PR description explains what, why, and how
[ ] Tagged a reviewer (at least 1 team member)
```

---

## Release Tagging

```bash
# After merging to main for a release:
git checkout main
git pull

# Create an annotated tag
git tag -a v1.2.0 -m "KB65 Rev3 — PCB and firmware for GB production run"
git push origin v1.2.0

# List all tags
git tag -l --sort=-v:refname | head -10
```

**Tagging policy:**
- Every PCB revision that goes to fab gets a tag: `pcb-v2.0`, `pcb-v2.1`
- Every firmware release gets a tag: `firmware-v1.3.0`
- Full board releases (PCB + firmware + docs all locked for production) get a `v` tag: `v3.0.0`

---

## Git LFS — Binary Files

```bash
# Check what's tracked by LFS
git lfs track

# Add a new file type
git lfs track "*.blend"
git add .gitattributes
git commit -m "chore: add .blend to Git LFS tracking"

# Verify a specific file is using LFS
git lfs ls-files | grep myfile.blend

# Clone with LFS files (default behavior when LFS is installed)
git clone https://github.com/Tznami/Tznami-resources.git
```

**Files that MUST use LFS:**
- `.png`, `.jpg`, `.jpeg`, `.gif` (renders, photos)
- `.blend` (Blender files)
- `.ai`, `.psd` (Adobe files)
- `.step`, `.stl`, `.dxf` (3D/CAD exports)
- `.mp4`, `.mov` (video)
- `.ttf`, `.otf`, `.woff`, `.woff2` (font files)

**Files that must NOT use LFS:**
- `.kicad_sch`, `.kicad_pcb`, `.kicad_pro` (text-based, diff well)
- `.scad` (OpenSCAD text files)
- `.json`, `.yml`, `.md`, `.csv` (all text)
- `.h`, `.c`, `.mk` (firmware source code)

---

## Handling Mistakes

```bash
# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Undo last commit (unstage changes but keep files)
git reset HEAD~1

# Discard all uncommitted changes (DESTRUCTIVE)
git checkout -- .

# Remove a file accidentally committed (and add to .gitignore)
git rm --cached path/to/file
echo "path/to/file" >> .gitignore
git commit -m "chore: remove accidentally committed file"

# Fix the last commit message (before pushing)
git commit --amend -m "feat(pcb): corrected commit message"

# Fix the last commit message (after pushing to your feature branch only)
git commit --amend -m "feat(pcb): corrected commit message"
git push --force-with-lease
```

---

## Useful Aliases

Add these to your `~/.gitconfig` under `[alias]`:

```ini
[alias]
  lg    = log --oneline --graph --decorate --all
  st    = status -s
  co    = checkout
  br    = branch -vv
  undo  = reset HEAD~1
  pushf = push --force-with-lease
  wip   = commit -am "WIP"  # quick save; always amend or squash before PR
```
