# Firmware

Tznami keyboards currently run **QMK** on wired boards (STM32F401 MCU) and **ZMK** on any wireless variants. **Via** and **Vial** are enabled by default on all wired boards for end-user keymap customization without reflashing.

---

## Firmware Options

### QMK (Quantum Mechanical Keyboard)
**Website**: https://qmk.fm  
**Repo**: https://github.com/qmk/qmk_firmware  
**Docs**: https://docs.qmk.fm

QMK is the gold standard for custom keyboard firmware. It supports hundreds of features out of the box: layers, macros, tap-dance, combos, RGB Matrix, encoders, OLED displays, and more.

**Installation (QMK CLI):**
```bash
pip install qmk
qmk setup            # clones qmk_firmware, installs AVR/ARM toolchains
qmk new-keyboard     # scaffolds a new keyboard definition
qmk compile -kb tznami/kb65 -km default
qmk flash -kb tznami/kb65 -km default
```

**Our MCU: STM32F401 (BlackPill)**  
All Tznami wired boards use the STM32F401CCU6 or STM32F401CEU6. Flashing uses STM32 DFU mode — hold BOOT0 while plugging in USB, or press the reset button combination defined in `config.h`.

### Via
**Website**: https://www.caniusevia.com  
Via allows users to remap keys, assign macros, and configure lighting in real time through a web or desktop app — no reflash required.

Enable in `rules.mk`:
```makefile
VIA_ENABLE = yes
```
Ensure your keyboard has a Via-compatible JSON definition uploaded to the Via repo or bundled with the firmware.

### Vial
**Website**: https://get.vial.today  
**Repo**: https://github.com/vial-kb/vial-qmk

Vial is a fork of QMK that extends Via with additional features: tap-dance, combos, key overrides, and a more powerful desktop app. It runs on a separate fork of QMK (`vial-qmk`), so you maintain a separate branch for Vial builds if needed.

Enable in `rules.mk`:
```makefile
VIAL_ENABLE = yes
```

### ZMK (Wireless / BLE)
**Website**: https://zmk.dev  
**Docs**: https://zmk.dev/docs

ZMK is used for any Bluetooth/wireless keyboard variants. It is built on Zephyr RTOS and configured via a devicetree overlay (`.overlay`) and Kconfig (`.conf`) rather than QMK's `config.h`/`rules.mk` pattern.

**Quick Start:**
```bash
# Install West (Zephyr's meta-tool)
pip install west
# Initialize a ZMK workspace
west init -l config/
west update
west build -s zmk/app -b nice_nano_v2 -- -DSHIELD=tznami_wireless
```

### Keyberon (Advanced / Research)
**Repo**: https://github.com/TeXitoi/keyberon  
A Rust-based keyboard firmware for teams comfortable with embedded Rust. Offers very predictable binary sizes and excellent debounce control. Not currently used in production but available as an option for future ultra-low-latency boards.

---

## QMK Config Templates

The `qmk-config-template/` subdirectory contains:
- `config.h` — pin assignments, matrix dimensions, RGB Matrix config, USB descriptor strings
- `rules.mk` — MCU selection, bootloader, enabled feature flags

Copy this template into your QMK keyboard directory:
```
qmk_firmware/keyboards/tznami/<your_board>/
├── config.h       ← from template
├── rules.mk       ← from template
├── <board>.c
├── <board>.h
└── keymaps/
    └── default/
        └── keymap.c
```

---

## Flashing Workflow

1. **Build**: `qmk compile -kb tznami/<board> -km default`
2. **Enter DFU**: Hold BOOT0 on PCB and plug in USB (or use the `QK_BOOT` keycode from a flashed board)
3. **Flash**: `qmk flash -kb tznami/<board> -km default`  
   Or manually: `dfu-util -d 0483:df11 -a 0 -s 0x08000000:leave -D <firmware>.bin`
4. **Verify**: Open Via/Vial and confirm all keys register on the matrix tester

---

## Useful Links
- QMK Configurator (no-code keymap): https://config.qmk.fm
- QMK Toolbox (GUI flashing): https://github.com/qmk/qmk_toolbox
- STM32CubeProgrammer: https://www.st.com/en/development-tools/stm32cubeprog.html
- ZMK Studio (runtime config): https://zmk.studio
- Vial Desktop App: https://github.com/vial-kb/vial-gui/releases
