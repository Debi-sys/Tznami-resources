# Sales

This directory covers all sales operations for Tznami: pricing strategy, order management, inventory tracking, and group buy lifecycle management.

---

## Sales Toolchain Overview

### Storefronts
- **Shopify** (primary): Full-featured e-commerce platform. Used for all direct-to-consumer sales, extras, and accessories. Integrates with Stripe, PayPal, ShipStation, and GA4.
- **BigCartel**: Lightweight alternative for small-batch direct sales when Shopify overhead isn't warranted (e.g., artisan collab drops of <50 units).

### Payment Processing
- **Stripe**: Credit/debit card processing via Shopify. Best rates for US domestic.
- **PayPal**: Required for many international GB buyers who prefer it. Enable in Shopify payment settings.
- **Shop Pay**: Shopify's native buy-now-pay-later option. Increases conversion for higher-priced boards.

### Shipping
- **ShipStation**: Multi-carrier shipping label generation. Integrates with Shopify for automatic order import. Rate shopping across UPS, USPS, FedEx, DHL.
- **Pirateship**: USPS-only but deeply discounted rates. Best for domestic shipments under 1lb. Use for accessories and keycap extras.
- **ShipBob / Fulfilled by vendor**: For international GB fulfillment, use regional vendor partners (avoid shipping internationally yourself when possible — customs complications are significant).

### Inventory & Order Management
- **Airtable**: Component inventory tracking, reorder alerts, supplier contacts.
- **Notion**: Build tracking, GB order compilation, status updates.
- **Shopify Admin**: Live order management, fulfillment, customer communication.

---

## Sales Channels

| Channel | Type | Use Case |
|---------|------|---------|
| Shopify store | Direct | Extras, accessories, accessories, in-stock items |
| Group Buy (vendor) | GB | Pre-orders via regional vendor partners |
| Group Buy (direct) | GB | Small GBs direct via Shopify where feasible |
| Geekhack/Reddit | Discovery | Drives traffic to Shopify or vendor |
| Discord | Community | Extras announcements to high-intent audience |

---

## Revenue Model

Tznami operates on a **group buy model** for new boards (pre-orders fund production) and **in-stock direct sales** for extras, accessories, and restocks of proven boards.

Key financial considerations:
- GB payments are collected upfront via vendors; vendors remit to Tznami minus commission
- Typical vendor commission: 10–15% of retail price
- Production payment schedule: 30% deposit to manufacturer at order confirmation, 70% before shipment
- Cash flow: GB → collect → produce → fulfill. Ensure you have enough float for the 30% deposit before launching GB.

---

## Subdirectories

| Directory | Contents |
|-----------|----------|
| `pricing/` | Pricing methodology, cost calculator template |
| `order-management/` | Order tracking tools, Shopify workflow, shipping guide |
| `inventory/` | Component inventory tracking, reorder process |
| `group-buy/` | Full GB lifecycle documentation, timeline template |
