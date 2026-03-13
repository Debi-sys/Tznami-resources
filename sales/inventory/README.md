# Inventory Management

Tznami maintains two types of inventory: **component inventory** (PCB parts, hardware, packaging) and **finished goods inventory** (assembled boards and accessories). This directory covers both.

---

## Tools

### Airtable (Recommended)
**URL**: https://airtable.com  
Airtable is flexible enough to track both components and finished goods with different views (grid, gallery, Kanban). Set up:
- A `Components` base for PCB/hardware parts
- A `Finished Goods` base for assembled boards and accessories
- Linked records between them (board BOM links to component records)
- Automatic low-stock alerts via Airtable Automations (email team when `CurrentStock` falls below `ReorderPoint`)

### Notion
**URL**: https://notion.so  
Use Notion databases if the team already lives in Notion. Create a `Inventory` database with the same fields as the CSV template. Syncs well with Notion project management.

### Shopify Inventory
Shopify tracks finished goods inventory natively. Keep Shopify inventory synced with your internal tracker manually or via automation (Zapier: Airtable → Shopify).

---

## Component Inventory Process

### Receiving
When a component shipment arrives:
1. Check physical count against the packing slip
2. Update `CurrentStock` in Airtable
3. Update `LastUpdated` field
4. If a batch has a date code or lot number, note it in `Notes`

### Low-Stock Alerts
Set reorder points conservatively — lead times from LCSC can be 2–4 weeks, and freight time from CN to the US adds 1–3 weeks for sea freight.

**Rule of thumb**: Reorder when stock falls to `(Lead Time Days / 30) × Monthly Usage + Safety Stock`

### Counting Cadence
- **Weekly**: Check finished goods (assembled boards, keycap extras)
- **Monthly**: Full component count for high-value items (MCUs, hotswap sockets)
- **Quarterly**: Full component count for all items

---

## Inventory Template

See `inventory-template.csv` for a pre-filled 12-row template covering the most common keyboard components. Import to Airtable, Google Sheets, or Notion.

---

## Critical Stock Items

These components have the longest lead times and highest impact if out of stock:

| Component | Typical Lead Time | Risk |
|-----------|------------------|------|
| STM32F401 MCU | 8–16 weeks (semiconductor shortage sensitive) | HIGH |
| Custom CNC case | 4–8 weeks | HIGH |
| Hotswap sockets | 2–4 weeks | MEDIUM |
| USB-C connectors | 2–3 weeks | MEDIUM |
| Packaging (custom boxes) | 4–6 weeks | MEDIUM |
| Diodes, caps, resistors | 1–2 weeks | LOW |

Always maintain at least one full build's worth of STM32F401 stock on hand before starting a GB.
