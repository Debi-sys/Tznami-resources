# Case Aesthetics

This directory covers the visual design decisions for Tznami keyboard cases — finish, color, texture, hardware, and render pipeline.

---

## Design Philosophy

Tznami cases follow a clean, minimal design language: smooth chamfers, tight tolerances, and finishes that complement the keycap colorway rather than compete with it. Every case color is spec'd alongside a paired keycap colorway in the design brief.

---

## Color & Finish Options

### Anodized Aluminum (Primary)

Anodizing is the premium standard for aluminum keyboard cases. The anodizing process impregnates color into the aluminum surface, producing a durable, scratch-resistant finish.

| Finish | Process | Notes |
|--------|---------|-------|
| Type II anodize | Standard anodize, 8–25µm | Most color options; matte or satin sheen |
| Type III (hardcoat) | Thicker anodize, 25–75µm | Much more durable; darker colors only |
| Natural / Raw | No anodize | Bare aluminum; shows machining marks |

**Pantone-to-anodize matching**: Request dye match from your anodizing vendor. Provide Pantone coated (C) references. Common anodize vendors used in the MK community:
- Leaftronics / AquaHive — US, small batches
- Luxe Keyboards (vendor partnership) — large batch anodize in CN
- SurTec / Alodine processes for prototype testing

**Recommended spec format when ordering anodize:**
```
Material:     6061-T6 aluminum
Finish:       Type II anodize
Color target: Pantone 433 C (Charcoal)
Sheen:        Satin (not glossy, not fully matte)
Tolerance:    ±0.025mm on critical dimensions
```

### Powder Coat

Used for steel plates and occasionally polycarbonate hybrid cases. Wider color availability than anodize. Less premium feel but durable.

### PVD Coating (Accent Hardware)

Physical Vapor Deposition for screws, weight bars, and accent pieces. Options: gold, rose gold, gunmetal, black. Specify on hardware drawing with `PVD [color]` callout.

### Raw Polycarbonate

No finish applied — the material color is the finish. Popular for "frosted" or "smoke" aesthetic. Note: PC scratches more easily than aluminum; advise customers accordingly.

---

## Render Pipeline

### Fusion 360 (Concept & Vendor Renders)
- Apply *Appearance* materials for quick colorway iteration
- Use *Render* workspace for presentation-quality still images
- Export STEP for vendor quotes; DXF for CNC toolpaths

### Blender (Marketing Renders)
1. Import STEP file from Fusion 360
2. Apply PBR materials:
   - Anodized aluminum: Principled BSDF, metallic 0.9, roughness 0.15–0.25
   - Powder coat: metallic 0.1, roughness 0.4–0.6, slight subsurface for matte
3. Use HDRI environment (hdri-haven.com for free 4K HDRIs)
4. Camera: ~50mm FOV, f/8 equivalent depth of field
5. Render at 4K; use Blender Compositor for subtle glow/bloom

### Keyshot (Optional)
Keyshot is popular in the broader product design community for photorealistic renders. Licenses are expensive but render quality is excellent. Use if a Blender pipeline produces unsatisfactory results for a launch.

---

## Branding Consistency

Every case design must pass a consistency check against `../assets/brand-guidelines-template.md`:
- Case color must be from the approved Tznami palette or an approved colorway-specific variant
- Logo placement: 12mm from bottom edge, centered, or per board-specific brand doc
- Typography on case (e.g., model number engraving): use Tznami primary font, 6pt minimum
- No unauthorized logo modifications (stretching, recoloring without approval)
