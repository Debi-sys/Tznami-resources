# Integrations

This directory documents Tznami's existing tool integrations and planned automation connections between departments.

---

## Existing Integrations

### 1. Fusion 360 MCP Server *(active)*

**What it is**: The **Model Context Protocol (MCP)** server for Fusion 360 provides a programmatic interface to Autodesk Fusion 360's API, allowing AI assistants and automation scripts to interact with CAD models, parameters, sketches, and manufacturing operations without manual GUI interaction.

**How Tznami uses it**:
- Querying and updating parametric dimensions in case models (e.g., "update wall_thickness to 3.5mm for all colorway variants")
- Automated STEP/DXF export at specific lifecycle events (e.g., after Engineering signs off on a case revision)
- Cross-referencing PCB dimensions from KiCad with case cutout dimensions in Fusion 360 to catch fit issues before sending to CNC
- Generating multiple case variants (different colorways may have different weight bar configurations) from a single parametric model

**Setup**:
1. Install the Fusion 360 MCP server: follow the setup guide in the server's repository
2. Configure your MCP client (Claude Desktop, Cursor, or compatible AI tool) with the Fusion 360 server endpoint
3. Ensure Fusion 360 is running and authenticated with your Autodesk account
4. The MCP server communicates over a local socket — no internet connection required for CAD operations

**Example MCP operations available**:
```
- get_sketch_dimensions(sketch_name)
- update_parameter(name, value, unit)
- export_step(component, output_path)
- export_dxf(sketch, output_path)
- list_components()
- get_bounding_box(component)
```

**Integration with KiCad workflow**: Export PCB outline DXF from KiCad → import into Fusion 360 via MCP `import_dxf()` → use as reference sketch for case interior dimensions → export updated case STEP → verify fit.

---

### 2. KiCad Routing Tools *(active)*

**What it is**: KiCad's interactive PCB router (internal) combined with the **Freerouting** autorouter (external Java application) and **KiBot** automation layer.

**KiCad Interactive Router**: Built into KiCad's PCB editor. Supports:
- Interactive 45°/90° trace routing with DRC-aware auto-avoidance
- Differential pair routing (for USB D+/D- traces)
- Length-matched routing (for DDR/crystal traces)
- Push-and-shove routing for dense areas

**Freerouting** (https://github.com/freerouting/freerouting):
Used for autorouting complex via-dense sections of the switch matrix. Workflow:
```bash
# Export DSN (Specctra Design) from KiCad
# Run Freerouting
java -jar freerouting.jar -de board.dsn -do board.ses -mp 5 -mt 2
# Import SES back into KiCad: File → Import → Specctra Session
```

**KiBot CI/CD** (detailed in `github-actions-kibot.yml`):
Automatically generates production files on every push to `main` or `develop`.

---

## KiBot CI/CD Pipeline

See `github-actions-kibot.yml` for the complete GitHub Actions workflow.

**What it does**:
1. Triggers on push to `main` or `develop` (or manually via `workflow_dispatch`)
2. Spins up a `setsoft/kicad_auto` Docker container (pre-installed KiCad + KiBot)
3. Runs `kibot -c kibot.yml` against the PCB project
4. Outputs: Gerbers ZIP, BOM CSV, iBOM HTML, 3D renders
5. Uploads all outputs as GitHub Actions artifacts (downloadable from Actions tab)
6. On `main` only: optionally creates a GitHub Release and attaches the Gerbers ZIP

**Benefits**:
- Gerbers are always generated from the latest committed PCB — no manual export step
- Anyone on the team can download production files without KiCad installed
- iBOM HTML allows Engineering and Sales to cross-reference components without opening KiCad

---

## Planned Future Integrations

### Zapier / Make (Order → Inventory Automation)
**Status**: Planned  
**Purpose**: When a Shopify order is placed, automatically decrement the component inventory in Airtable.

**Trigger**: Shopify `order.created` webhook  
**Actions**:
1. Identify product SKU from order
2. Look up BOM for that SKU in Airtable
3. Decrement `CurrentStock` for each component in the BOM
4. If any component falls below `ReorderPoint`, send a Slack/Discord notification to the Sales channel

**Implementation**: Build in Make (formerly Integromat) — more flexible than Zapier for multi-step flows. Free plan supports up to 1,000 operations/month.

### Discord Bot for GB Order Updates
**Status**: Concept  
**Purpose**: Bot that polls vendor GB spreadsheets (via Google Sheets API) and posts daily order count updates in the team #sales-ops Discord channel.

### GitHub → Notion Sync
**Status**: Concept  
**Purpose**: Sync GitHub Issues to a Notion project database for cross-department visibility without requiring non-technical team members to navigate GitHub.

Use [GitHub → Notion integration](https://www.notion.so/integrations/github) (official) or a Make/Zapier flow.
