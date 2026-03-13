# QMK Config Template

This template provides a starting point for any new Tznami keyboard's QMK configuration. It targets the **STM32F401** MCU and a **65% (68-key) layout** but is easily adapted.

---

## Files

| File | Purpose |
|------|---------|
| `config.h` | Hardware pin assignments, matrix dimensions, USB descriptors, RGB Matrix settings, feature tuning |
| `rules.mk` | MCU/bootloader selection, QMK feature flags (RGB, Via, encoder, etc.) |

---

## How to Use

1. Create your keyboard directory in the QMK repo:
   ```
   qmk_firmware/keyboards/tznami/<board_name>/
   ```

2. Copy both files into that directory:
   ```bash
   cp config.h qmk_firmware/keyboards/tznami/<board_name>/config.h
   cp rules.mk qmk_firmware/keyboards/tznami/<board_name>/rules.mk
   ```

3. Edit `config.h`:
   - Update `VENDOR_ID`, `PRODUCT_ID` (request a unique PID from pid.codes or use the QMK shared VID with a unique PID from the QMK PID allocations)
   - Update `MANUFACTURER` and `PRODUCT` strings
   - Set `MATRIX_ROWS`, `MATRIX_COLS` to match your actual matrix
   - Set `MATRIX_ROW_PINS` and `MATRIX_COL_PINS` to your MCU's GPIO pins
   - Adjust `RGB_MATRIX_LED_COUNT` to your actual LED count

4. Edit `rules.mk`:
   - Set `MCU` and `BOOTLOADER` if using a different chip
   - Toggle feature flags to match what your board actually supports

5. Create your matrix header `<board_name>.h` defining `LAYOUT_65_ansi`:
   ```c
   // See: https://docs.qmk.fm/reference_info_json#layouts
   ```

6. Create `keymaps/default/keymap.c` using the `LAYOUT_65_ansi` macro.

7. Build and test:
   ```bash
   qmk compile -kb tznami/<board_name> -km default
   qmk flash -kb tznami/<board_name> -km default
   ```

---

## Pin Assignment Notes

- The template uses common STM32F401 (BlackPill) pin labels (`A0`, `B3`, etc.)
- Cross-reference your actual PCB schematic before building — wrong pins will damage the board
- STM32F401 5V-tolerant pins: most `PB` and `PC` pins are 5V tolerant; `PA` pins generally are NOT
- Leave `B2` (BOOT1) and `A13`/`A14` (SWD) unassigned in the matrix to avoid conflicts
