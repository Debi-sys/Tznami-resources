# QA Checklist — Tznami Keyboard Unit Inspection

**Product**: ___________________________  
**Serial / Order #**: ___________________________  
**Inspector**: ___________________________  
**Date**: ___________________________  
**Switches installed**: ___________________________  
**Keycaps installed**: ___________________________  

Mark each item ✅ Pass, ❌ Fail (note details), or N/A.

---

## 1. Electrical

### 1.1 Power & Enumeration

| # | Check | Result | Notes |
|---|-------|--------|-------|
| E-01 | Board powers on — no smoke, no excessive heat | | |
| E-02 | USB cable fully seats in USB-C port (no wobble) | | |
| E-03 | Board enumerates as USB HID device in OS device list | | |
| E-04 | Board appears in Via/Vial automatically (no manual JSON load required) | | |
| E-05 | No USB disconnect events during 60-second idle test | | |

### 1.2 Key Matrix (use Via/Vial Key Tester)

| # | Check | Result | Notes |
|---|-------|--------|-------|
| E-06 | All 68 keys register in matrix tester (no dead keys) | | |
| E-07 | No ghost keys — test 6KRO and NKRO modes | | |
| E-08 | Escape key registers correctly | | |
| E-09 | All modifier keys (Shift L/R, Ctrl L/R, Alt L/R, GUI L/R) register | | |
| E-10 | Arrow keys (Up, Down, Left, Right) register | | |
| E-11 | Navigation cluster (Del, PgUp, PgDn, Home, End — layout dependent) registers | | |
| E-12 | Spacebar registers on full bar press (left, center, right zones) | | |
| E-13 | Enter key registers on full key press | | |
| E-14 | Encoder CW rotation triggers correct action | | |
| E-15 | Encoder CCW rotation triggers correct action | | |
| E-16 | Encoder push-click registers | | |

### 1.3 RGB Lighting

| # | Check | Result | Notes |
|---|-------|--------|-------|
| E-17 | All 68 LEDs illuminate in solid white test (RGB 255,255,255) | | |
| E-18 | No dead LEDs (dark spots) | | |
| E-19 | No discolored LEDs (single channel failure — appears red/green/blue only) | | |
| E-20 | Brightness adjustment (increase/decrease) works across full range | | |
| E-21 | Hue cycling animation plays without flickering | | |
| E-22 | Reactive (keypress) animation triggers on each key | | |
| E-23 | RGB settings persist after USB unplug/replug (EEPROM save) | | |

---

## 2. Physical

### 2.1 Case & Plate

| # | Check | Result | Notes |
|---|-------|--------|-------|
| P-01 | No scratches, dents, or anodize defects on case exterior | | |
| P-02 | Case top and bottom halves align flush (no gap or misalignment > 0.2mm) | | |
| P-03 | All case screws present and fully seated | | |
| P-04 | Board sits flat on desk — no rocking (check all four corners) | | |
| P-05 | Rubber feet present, centered on their positions, firmly adhered | | |
| P-06 | Plate sits flush in case — no flex/rattle when pressed on corners | | |
| P-07 | USB port accessible with standard Type-C cable (no interference from case edge) | | |
| P-08 | Case interior: no loose components, no debris, no PCB scraping | | |

### 2.2 Switches & Hotswap

| # | Check | Result | Notes |
|---|-------|--------|-------|
| P-09 | All switches fully seated in hotswap sockets (no raised pins) | | |
| P-10 | No bent switch pins visible | | |
| P-11 | Switches feel consistent across the board (no obviously scratchy outliers) | | |
| P-12 | No switch rattle when keys are pressed and released | | |
| P-13 | Every switch returns to rest position reliably (no sticking) | | |

### 2.3 Stabilizers

| # | Check | Result | Notes |
|---|-------|--------|-------|
| P-14 | Spacebar stabilizers fully lubed — no rattle on rapid press | | |
| P-15 | Spacebar wire balanced — both sides bottom out evenly | | |
| P-16 | Left Shift stab: no rattle, even bottom-out | | |
| P-17 | Right Shift stab: no rattle, even bottom-out | | |
| P-18 | Backspace stab: no rattle, even bottom-out | | |
| P-19 | Enter stab: no rattle, even bottom-out | | |
| P-20 | No stab wire ping on repeated keypress | | |

### 2.4 Keycaps

| # | Check | Result | Notes |
|---|-------|--------|-------|
| P-21 | All keycaps present (correct count per layout) | | |
| P-22 | All keycaps fully seated on switch stems | | |
| P-23 | No tilted or misaligned keycaps | | |
| P-24 | Legends correct per layout (no wrong keycap in wrong position) | | |
| P-25 | No visible print defects, scratches, or injection blemishes on keycaps | | |

---

## 3. Firmware

| # | Check | Result | Notes |
|---|-------|--------|-------|
| F-01 | Default layer active on power-on | | |
| F-02 | FN layer accessible and all FN keys function (F1-F12, media, arrows) | | |
| F-03 | Layer indicator LED or OLED (if present) reflects active layer | | |
| F-04 | Macro keys (if configured) execute correctly | | |
| F-05 | Bootloader entry via QK_BOOT keycode works (board enters DFU mode) | | |
| F-06 | Bootloader entry via physical reset button works | | |
| F-07 | Board re-enumerates correctly after exiting bootloader | | |
| F-08 | Via/Vial: save a custom keymap, unplug, replug — confirm keymap persists | | |
| F-09 | Via/Vial: RGB settings save and restore after power cycle | | |

---

## 4. Packaging

| # | Check | Result | Notes |
|---|-------|--------|-------|
| K-01 | Keyboard seated in foam tray with no movement | | |
| K-02 | Accessories bag present: USB-C cable, extra keycaps (if applicable), switch puller | | |
| K-03 | Warranty card / thank-you card included | | |
| K-04 | Box outer label: correct order ID, customer name, shipping address | | |
| K-05 | Fragile label on outer box | | |
| K-06 | Outer box sealed with tamper-evident tape | | |

---

## Sign-Off

**PASS / FAIL** (circle one): ___________

**Failures noted** (describe each):

_______________________________________________

_______________________________________________

**Corrective action taken**:

_______________________________________________

**Re-inspected by**: ___________________________ **Date**: ___________

**Final status**: ✅ Cleared for shipment &nbsp;&nbsp;|&nbsp;&nbsp; ❌ Held for rework
