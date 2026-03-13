# Order Management

This directory covers the full order lifecycle at Tznami — from GB order collection through to delivery confirmation.

---

## Primary Platform: Shopify

**URL**: https://admin.shopify.com  
All direct sales (extras, accessories, in-stock boards) run through the Tznami Shopify store.

**Key Shopify settings to configure**:
- Enable Shop Pay and PayPal in *Settings → Payments*
- Set up Shopify Shipping profiles for domestic vs. international rates
- Enable order confirmation and shipping notification emails (customize templates in *Notifications*)
- Install Klaviyo or Mailchimp integration for order-based email automation
- Enable Shopify Analytics and link GA4 property

**Shopify order workflow**:
```
Customer places order
        ↓
Shopify sends order confirmation email
        ↓
Order appears in Shopify Admin → Orders
        ↓
Fulfillment team marks "in fulfillment" when packing begins
        ↓
ShipStation imports order → label purchased
        ↓
Tracking number added to Shopify order
        ↓
Shopify sends "Shipped" email with tracking to customer
        ↓
Delivery confirmed → order marked Fulfilled
```

---

## GB Order Management

Group Buy orders are collected by regional vendors (not directly in Shopify). Tznami's role:
1. **Coordinate with vendors**: Share GB form URL, collect order counts per vendor
2. **Compile totals**: Aggregate all vendor counts into production order (add 5–10% buffer)
3. **Track per-vendor**: Maintain a per-vendor order sheet (see `order-tracking-template.csv`)
4. **Extras management**: After production, allocate extras units → list on Shopify at set time

**Never** accept individual GB orders directly to the team email or Discord — route all purchases through official vendor pages to protect customers with proper payment processing and buyer protections.

---

## ShipStation

**URL**: https://app.shipstation.com  
Integrates directly with Shopify. All Shopify orders auto-import into ShipStation within minutes.

**Setup steps**:
1. Connect Shopify store in ShipStation → Selling Channels
2. Set up USPS, UPS, and DHL accounts (or use ShipStation carrier rates)
3. Create shipping presets per product weight class:
   - Keyboard (~2.5 lb with packaging): UPS Ground / USPS Ground Advantage
   - Keycaps/accessories (<1 lb): USPS First Class / Pirateship
4. Enable automatic tracking update back to Shopify
5. Set return address to Tznami's shipping address

**Pirateship** (https://www.pirateship.com): Use for USPS-only small shipments. No monthly fee, discounted USPS rates. Best for accessories orders.

---

## BigCartel (Secondary)

**URL**: https://bigcartel.com  
Use for artisan collab drops, small limited runs <25 units, or when Shopify overhead isn't warranted. Free plan supports 5 products. No transaction fee beyond payment processor.

---

## Customer Communication

- Order-related questions: respond within 24 hours on business days
- Use Shopify's built-in email thread (order timeline) for all order-specific correspondence — keeps a record attached to the order
- For complex shipping issues: open a ShipStation case or contact carrier directly for lost packages
- For returns/refunds: process via Shopify Admin → Order → Refund. Issue full refund within 7 business days of receiving return.

---

## Order Tracking Template

See `order-tracking-template.csv` for the manual order tracking spreadsheet format. Import this into Google Sheets or Airtable for team visibility during active GB fulfillment periods.
