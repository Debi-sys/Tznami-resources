# Colorway Templates

This directory holds the standardized colorway specification document for Tznami keycap sets.

---

## Files

| File | Description |
|------|-------------|
| `colorway-spec-template.md` | Fill this out for every new colorway/revision |

---

## How to Use

1. Copy `colorway-spec-template.md` to a new file named after your colorway:
   ```
   cp colorway-spec-template.md colorway-<name>-<version>.md
   # example: colorway-dusk-v1.md
   ```

2. Fill in all sections. Do not leave color fields blank — even early drafts should have approximate Pantone references.

3. Attach the spec to your PR when submitting a colorway for review.

4. When the colorway is finalized for GB, move the file to the board-specific repo and tag the commit.

---

## Color Reference Resources

- **Pantone Color Finder**: https://www.pantone.com/color-finder
- **GMK Color Catalogue**: https://gmk.de/en/products/ (scroll to Colorcatalogue PDF)
- **Coolors palette generator**: https://coolors.co
- **Accessible contrast checker**: https://webaim.org/resources/contrastchecker/ (for legend readability)

---

## Naming Convention

Colorway files follow the pattern: `colorway-<name>-v<version>.md`  
Examples:
- `colorway-midnight-v1.md`
- `colorway-sakura-v2.md`
- `colorway-carbon-v1-gmk.md`
