# Pricing

Correct pricing is critical for a sustainable indie keyboard operation. Underpricing kills cash flow; overpricing kills sell-through. This directory documents Tznami's pricing methodology and provides calculation templates.

---

## Pricing Methodologies

### Cost-Plus Pricing (Foundation)
Start with a full cost accounting of every material, labor, and overhead cost, then add a target margin. This is the floor — you cannot sustainably sell below this number.

**Formula**: `Retail Price = Total Cost Per Unit × (1 + Target Margin) / (1 - Platform Fees)`

### Value-Based Pricing (Ceiling Adjustment)
For limited runs, special colorways, or boards with premium features, consider what the market will bear given comparable products. Research recent GBs on Geekhack and set pricing in the context of the competitive landscape.

**Reference points**:
- Budget 65% keyboard: $80–$150
- Mid-range aluminum gasket mount: $150–$250
- Premium/limited edition: $250–$400+
- Artisan/ultra-limited: $400+

### Currency Considerations for International GBs
When running a GB with international vendors, prices must account for:
1. **Vendor commission** (negotiate 10–15% margin for the vendor)
2. **Currency conversion + hedging**: Quote in USD for simplicity; vendors handle local currency
3. **VAT**: EU/UK vendors must collect VAT on top of the base price — quote base price ex-VAT
4. **Import duties**: Customers in some regions pay duties on receipt. Not your direct cost but affects perceived value — mention it in the GB post.

**Exchange rate buffer**: Add 3–5% to international base prices to hedge against USD strengthening between GB close and production payment.

---

## Shopify Pricing Tools

- **Product variants**: Use Shopify variants for color options, plate materials, and bundle add-ons
- **Discount codes**: Use for IC survey respondents (early bird discounts), limited to a code list
- **Shopify Scripts / Functions**: For tiered discounts on multi-unit orders (e.g., 2+ boards = $10 off each)
- **Currency conversion**: Shopify Markets auto-converts prices for international storefronts — review auto-converted prices before publishing (they may round to awkward numbers)

---

## Pricing Calculator

See `pricing-calculator-template.md` for a full worked example with all cost line items for a hypothetical 65% keyboard.

---

## Pricing Decision Checklist

Before finalizing pricing for a new GB:

- [ ] All BOM costs confirmed with actual supplier quotes (not estimates)
- [ ] Assembly labor cost calculated (hours × team hourly rate)
- [ ] Packaging costs included (box, foam, accessories)
- [ ] Shipping cost per unit estimated for domestic + international
- [ ] Platform/payment fees included (Stripe 2.9% + $0.30, Shopify 0.5–2% depending on plan)
- [ ] Vendor commission factored in (if using GB vendors)
- [ ] Minimum viable margin ≥ 20% confirmed
- [ ] Price compared to 3+ comparable boards currently on market
- [ ] Price point approved by the full team
