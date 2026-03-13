# Testing & QA

Every Tznami keyboard unit goes through a documented QA process before packaging. This directory covers the full testing workflow: electrical matrix testing, switch feel verification, acoustic analysis, and final packaging inspection.

---

## Testing Workflow Overview

```
PCB arrives from fab
      ↓
Visual Inspection (solder bridges, tombstoned components, alignment)
      ↓
Electrical: Power-on test → USB enumeration
      ↓
Matrix Test: Every key in Via/Vial matrix tester
      ↓
RGB Test: All LEDs, all modes
      ↓
Physical Assembly
      ↓
Switch Actuation & Acoustic Test
      ↓
Stabilizer tuning (lube + wire balance check)
      ↓
Firmware: Layer switching, macros, bootloader entry
      ↓
QA Checklist sign-off → Package
```

---

## Via / Vial Matrix Testing

1. Flash the board with the Via-enabled firmware build.
2. Open **Via** (https://usevia.app) or **Vial** desktop app.
3. Navigate to the **Key Tester** tab.
4. Press every key individually — verify each registers the correct key code.
5. Test multi-key rollover: press 6+ keys simultaneously, verify all register.
6. Test encoder rotation (if applicable): CW and CCW, push click.

Common issues:
- **Dead column**: check MCU pin connection, inspect row/col trace continuity with multimeter
- **Dead key**: check hotswap socket seating, inspect diode placement and orientation
- **Ghost keys**: usually a missing or backwards diode — confirm COL2ROW orientation

---

## Acoustic Analysis

A proper sound test builds customer confidence and identifies physical defects.

### Tools
- **REW (Room EQ Wizard)**: https://www.roomeqwizard.com — full frequency analysis, waterfall plots
- **Audacity**: https://www.audacityteam.org — free, sufficient for quick comparisons
- **Microphone**: Any calibrated measurement mic works (e.g., MiniDSP UMIK-1, Behringer ECM8000)

### Process
1. Place keyboard on a foam pad (remove environmental reflections).
2. Position mic 20cm above spacebar, aimed at the keyboard surface.
3. Type the standard passage ("The quick brown fox...") at a steady cadence.
4. Record 30 seconds at 48kHz/24-bit.
5. Compare spectrogram to a reference recording of the same layout.
6. Listen for: rattle, ping (PCB/plate resonance), hollow spots, inconsistent switch feel.

### Rattle & Resonance Fixes
- **Stabilizer rattle**: add more dielectric grease to wire; balance wire ends
- **PCB ping**: add PE foam between PCB and plate; apply PCB foam layer
- **Case hollowness**: add silicone gasket or PE foam inside case

---

## Switch Actuation Tester

For production runs, a simple switch actuation tester jig (PCB with header pins) can rapid-test an entire sheet of hotswap sockets before installing switches. Test with a multimeter in continuity mode: press each socket's contact springs to confirm they make contact.

---

## QA Checklist

See `qa-checklist.md` for the full Markdown checklist used during final inspection. Each unit must pass all items before being bagged, labeled, and boxed.
