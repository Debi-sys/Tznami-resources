# Pricing Calculator — Tznami KB65 (Worked Example)

This template calculates the minimum viable price for a keyboard project. Copy and update values for each new board.

**Board**: Tznami KB65  
**Run size**: 200 units (GB estimate)  
**Target margin**: 25%  
**Calculated date**: [YYYY-MM-DD]  

---

## Section 1: Materials Cost Per Unit

### PCB & Electronics

| Component | Qty/unit | Unit Cost (USD) | Extended |
|-----------|---------|-----------------|----------|
| Bare PCB (2-layer, JLCPCB 200 qty) | 1 | $4.50 | $4.50 |
| STM32F401CCU6 MCU | 1 | $3.20 | $3.20 |
| Kailh CPG151101S11 hotswap sockets | 68 | $0.08 | $5.44 |
| 1N4148W diodes (SOD-123) | 68 | $0.01 | $0.68 |
| SK6812 MINI-E RGB LEDs | 68 | $0.08 | $5.44 |
| USB-C connector (HRO Type-C-31-M-12) | 1 | $0.55 | $0.55 |
| ESD protection (USBLC6-2SC6) | 1 | $0.08 | $0.08 |
| Passives (caps, resistors, crystal, fuse) | lot | $0.85 | $0.85 |
| PCBA assembly labor (JLCPCB SMT) | 1 | $8.00 | $8.00 |
| **PCB subtotal** | | | **$28.74** |

### Case & Plate

| Component | Qty/unit | Unit Cost (USD) | Extended |
|-----------|---------|-----------------|----------|
| Aluminum case top (CNC, 6061-T6, anodized) | 1 | $28.00 | $28.00 |
| Aluminum case bottom (CNC, 6061-T6, anodized) | 1 | $18.00 | $18.00 |
| FR4 plate | 1 | $3.50 | $3.50 |
| PC plate (optional add-on, listed separately) | 1 | $6.00 | — |
| M3 brass standoffs (×6) + screws | 1 lot | $0.60 | $0.60 |
| Gasket strips (silicone, pre-cut ×8) | 1 | $0.90 | $0.90 |
| Rubber feet (×4, adhesive) | 1 | $0.20 | $0.20 |
| **Case/plate subtotal** | | | **$51.20** |

### Stabilizers

| Component | Qty/unit | Unit Cost (USD) | Extended |
|-----------|---------|-----------------|----------|
| Durock V2 plate-mount stabilizers (2U ×3, 6.25U ×1) | 1 set | $4.80 | $4.80 |
| Dielectric grease (amortized over 200 units) | — | $0.15 | $0.15 |
| **Stabilizer subtotal** | | | **$4.95** |

### Packaging

| Component | Qty/unit | Unit Cost (USD) | Extended |
|-----------|---------|-----------------|----------|
| Custom rigid box (printed, 2-piece lid/base) | 1 | $3.80 | $3.80 |
| Custom foam insert (die-cut EVA) | 1 | $2.20 | $2.20 |
| Accessories bag: switch puller, USB-C cable, extra caps | 1 | $2.50 | $2.50 |
| Thank-you card (printed, full color) | 1 | $0.30 | $0.30 |
| Poly bag + desiccant | 1 | $0.15 | $0.15 |
| **Packaging subtotal** | | | **$8.95** |

---

### Total Materials Cost Per Unit

| Category | Cost |
|----------|------|
| PCB & Electronics | $28.74 |
| Case & Plate | $51.20 |
| Stabilizers | $4.95 |
| Packaging | $8.95 |
| **Materials Total** | **$93.84** |

---

## Section 2: Labor Cost Per Unit

| Task | Hours/unit | Team Rate (USD/hr) | Cost |
|------|-----------|-------------------|------|
| PCB visual inspection + test flash | 0.10 | $25 | $2.50 |
| Stabilizer lube + install | 0.15 | $25 | $3.75 |
| Switch install (hotswap) | 0.10 | $25 | $2.50 |
| Final QA checklist completion | 0.20 | $25 | $5.00 |
| Keycap installation + final check | 0.10 | $25 | $2.50 |
| Packing + labeling | 0.15 | $25 | $3.75 |
| **Labor Total** | **0.80 hrs** | | **$20.00** |

*Note: Rate of $25/hr is a blended rate for the team. Adjust to your actual labor cost. This does not include design/engineering time (treated as product development capex, not per-unit COGS).*

---

## Section 3: Overhead Per Unit

| Overhead Item | Monthly Total | Units/Month | Per Unit |
|---------------|--------------|-------------|---------|
| Shopify subscription (Basic plan) | $39 | 200 | $0.20 |
| ShipStation subscription | $25 | 200 | $0.13 |
| Tooling amortization (CNC jigs, fixtures) | $50 | 200 | $0.25 |
| Software subscriptions (Mailchimp, etc.) | $20 | 200 | $0.10 |
| **Overhead Total** | | | **$0.68** |

---

## Section 4: Shipping

| Market | Shipping Method | Est. Cost |
|--------|----------------|-----------|
| Domestic (USA) | USPS Ground Advantage (2–5 lb box) | $8.50 |
| International (Europe) | USPS Priority Mail International / DHL | $22–$35 |
| International (Asia) | DHL / EMS | $18–$28 |

*For GB sales via vendors: vendor handles their domestic shipping. Tznami's cost is bulk freight to vendor (see below).*

**Bulk freight to vendor (your cost)**:
- US vendor: ~$2.50/unit amortized in 50-unit pallets via FedEx Freight
- EU vendor: ~$6.00/unit via DHL freight or sea freight for 100+ units

---

## Section 5: Platform & Payment Fees

| Fee | Rate | Applied To | Per Unit (at $220 retail) |
|-----|------|-----------|--------------------------|
| Shopify Basic transaction fee | 2.0% | Subtotal | $4.40 |
| Stripe processing | 2.9% + $0.30 | Total charge | $6.68 |
| GB vendor commission | 12% | Retail price | $26.40 (vendor-sold units only) |

*For direct Shopify sales (extras): total platform fees ≈ $11.08/unit*  
*For GB vendor sales: vendor commission ≈ $26.40/unit (Tznami receives net of commission from vendor)*

---

## Section 6: Full Cost Summary & Price Calculation

### Scenario A: Direct Sale (Extras via Shopify)

| Line Item | Cost |
|-----------|------|
| Materials | $93.84 |
| Labor | $20.00 |
| Overhead | $0.68 |
| Domestic shipping (incl. in price) | $8.50 |
| Platform/payment fees | $11.08 |
| **Total Cost Per Unit** | **$134.10** |
| Target margin: 25% | |
| **Minimum Retail Price** | **$178.80** |
| **Recommended retail price** | **$199.00** |
| **Actual margin at $199** | **32.5%** |

### Scenario B: GB Sale via Vendor (Tznami receives net)

| Line Item | Cost |
|-----------|------|
| Materials | $93.84 |
| Labor | $20.00 |
| Overhead | $0.68 |
| Bulk freight to vendor | $5.00 |
| Vendor commission (12% of $220 GB price) | $26.40 |
| **Total Cost Per Unit** | **$145.92** |
| **GB price needed for 20% margin** | **$182.40** |
| **Recommended GB price** | **$199.00** |
| **Actual margin at $199 (Tznami net $175.12)** | **20.0%** |

---

## Section 7: Break-Even Analysis

| Metric | Value |
|--------|-------|
| Fixed costs (design, tooling, molds) | $3,200 |
| Variable cost per unit | $114.52 |
| Retail price | $199.00 |
| Contribution margin per unit | $84.48 |
| **Break-even quantity** | **38 units** |
| **Units needed for 25% net margin on run of 200** | **~65 units** |

*A run of 200 units is well above break-even — the key risk is a failed GB with <38 pre-orders, not profitability on a successful run.*

---

## Price Competitiveness Check

| Board | Mount | Price | Notes |
|-------|-------|-------|-------|
| Tznami KB65 (this) | Gasket | $199 | Our product |
| Tofu65 2.0 | Gasket | $169 | KBDfans; established brand |
| Bakaneko65 | Gasket | $230 | Community design; high reputation |
| OwLab Spring | Leaf-spring | $280 | Premium; different market |
| Mode65 | Gasket | $250 | Top-tier; aspirational comp |

**Conclusion**: $199 is competitive for a gasket-mounted aluminum 65% with per-key RGB. Positioned correctly in the mid-range segment.
