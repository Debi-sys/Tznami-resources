# Group Buy Operations

This directory documents the full lifecycle of a Tznami Group Buy — from Interest Check through final fulfillment. This is the most complex operational process the team runs, requiring coordination across all four departments.

---

## GB Lifecycle Overview

```
IC (Interest Check) → GB Announcement → GB Live → GB Close
        ↓                                               ↓
  Community Feedback                           Order Compilation
        ↓                                               ↓
  Design Finalization                          Production Payment (30% deposit)
                                                        ↓
                                               Factory Production
                                                        ↓
                                               QC Inspection
                                                        ↓
                                               Shipping to Vendors
                                                        ↓
                                               Vendor Fulfillment
                                                        ↓
                                               Post-GB Extras Sale
```

---

## Phase 1: Interest Check (IC)

**Goal**: Validate demand before committing to production costs.

**IC post should include**:
- Renders or prototype photos
- Spec overview (layout, mount, materials, PCB)
- Colorway options (2–3 max for first GB)
- Estimated price range
- IC survey link (Google Forms or Typeform)

**IC survey questions**:
1. Which colorway would you buy? (Multi-select)
2. What's the maximum you'd pay for this board?
3. What region are you in? (For vendor planning)
4. Would you buy extras at GB price if available? (Yes/No)
5. What's most important to you: sound, weight, RGB, price, layout?
6. Open comments

**IC duration**: 3–6 weeks. Anything longer loses momentum.

**IC success threshold**: >150 genuine survey responses indicating purchase intent. Below 100 = reconsider or redesign.

---

## Phase 2: Pre-GB Preparation

Before opening the GB, complete:

**Engineering**:
- [ ] Prototype confirmed working (all QA checks passed)
- [ ] Final BOM confirmed and suppliers locked
- [ ] Firmware feature-complete (Via/Vial tested)
- [ ] Production files ready (Gerbers, DXF, STEP, BOM)

**Design**:
- [ ] Final colorway renders produced
- [ ] Marketing photos shot and edited
- [ ] GB announcement post written and reviewed

**Sales**:
- [ ] Vendors confirmed with signed agreements
- [ ] Vendor pricing and commission agreed
- [ ] GB form/page live on all vendor sites (test purchases done)
- [ ] Pricing finalized per pricing-calculator-template

**Marketing**:
- [ ] GB announcement post ready for Geekhack + Reddit
- [ ] Email campaign ready (IC subscribers)
- [ ] Social posts scheduled

---

## Phase 3: GB Live

**Duration**: 2–4 weeks (shorter creates urgency; longer = more orders but more trailing stragglers)

**Daily tasks**:
- Monitor order counts from each vendor (vendors provide daily/weekly summaries)
- Respond to questions in Geekhack thread, Reddit, and Discord
- Post mid-GB update at Week 1 (order count progress, FAQ additions)
- Post closing reminder 72 hours before close

**Vendor management during GB**:
- Vendors should provide order counts on request — set this expectation before GB opens
- Flag any issues (payment failures, website outages) immediately
- Never extend GB dates without clearly communicating the reason

---

## Phase 4: Post-Close Operations

1. **Compile totals**: Receive final counts from all vendors within 48 hours of close
2. **Calculate production order**: Total units + 5% buffer for QC rejects + 10% extras allocation
3. **Send to manufacturer**: Production order with colorway breakdown, delivery timeline expectations
4. **Pay 30% deposit**: Coordinate with the team on treasury approval
5. **Update community**: Post GB close update with total unit count (if sharing) and production timeline

---

## Phase 5: Production Monitoring

- Maintain a contact schedule with the manufacturer (weekly check-in email)
- Request production photos at each milestone: PCB production, case machining, anodize, final assembly
- Share sanitized updates with the community every 2–4 weeks
- Flag any delays immediately — do not sit on bad news

---

## Phase 6: QC & Fulfillment

1. **Factory QC**: Request factory QC photos before shipment approval (case finish, PCB test)
2. **Pay 70% balance**: Before manufacturer ships to vendors
3. **Bulk ship to vendors**: Freight to each vendor (DHL/FedEx freight for large quantities)
4. **Vendor fulfillment**: Each vendor handles their own region. Share QA checklist so vendors can spot-check on receipt.
5. **Customer tracking**: Vendors provide tracking to customers; Tznami monitors for issues via Discord

---

## Vendor Management

### Finding Vendors
Common GB vendors willing to partner with indie designers:
- **US**: Cannonkeys, Vendor.ai, Keeb.io, Mekibo, Protozoa Station
- **EU**: Keygem, Oblotzky Industries, LY Keyboards, The Key Company EU
- **Canada**: Apex Keyboards, Desktop Authority
- **Asia**: zFrontier, iLumkb, Daily Clack (AU), Mekboard (SEA)

### Vendor Agreement Checklist
Before starting a GB with a vendor, confirm:
- [ ] Commission rate (10–15% typical)
- [ ] Payment timeline (vendor pays Tznami within X days of GB close)
- [ ] Refund policy for buyer cancellations
- [ ] Minimum order quantity expectations
- [ ] Communication cadence during production

---

## Risk Management

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Manufacturer delay | High | Build 4–6 week buffer into timeline; honest communication |
| MCU shortage | Medium | Order MCUs immediately after GB close; maintain stock |
| QC failure batch | Low–Medium | 100% QA on every unit; reject and replace bad units |
| Vendor goes under | Low | Use established vendors; never pay vendors upfront (you ship to them) |
| GB under-performs | Low | IC validation before committing; break-even at ~40 units |
| Shipping loss/damage | Low | Insure all shipments; have replacement stock for GB buyers |

---

## GB Timeline Template

See `gb-timeline-template.md` for the detailed phase-by-phase timeline table.
