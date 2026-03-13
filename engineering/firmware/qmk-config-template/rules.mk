# rules.mk — Tznami KB65 build configuration
# Copy to: qmk_firmware/keyboards/tznami/<board_name>/rules.mk

# ============================================================
# MCU & Bootloader
# ============================================================
MCU = STM32F401
BOOTLOADER = stm32-dfu

# ARM Cortex-M4 architecture (do not change for STM32F401)
BOARD = BLACKPILL_STM32_F401

# ============================================================
# Core Feature Flags
# ============================================================

# RGB per-key LEDs via WS2812B / SK6812
RGB_MATRIX_ENABLE = yes
RGB_MATRIX_DRIVER = WS2812

# WS2812 driver variant (use bitbang for simple setups, SPI for better timing)
WS2812_DRIVER = bitbang

# Via — runtime keymap remapping (compatible with Via app and web interface)
VIA_ENABLE = yes

# Encoder support (rotary knob) — set to no if board has no encoder
ENCODER_ENABLE = yes
ENCODER_MAP_ENABLE = yes

# Mouse keys — allows keyboard to act as HID mouse
MOUSEKEY_ENABLE = yes

# Extrakeys — media keys (play/pause, volume, etc.)
EXTRAKEY_ENABLE = yes

# Console — enables HID console for debug output via hid_listen
# Set to no for production builds to save ~1kB flash
CONSOLE_ENABLE = no

# Command — enables magic key combos (e.g. MAGIC_TOGGLE_NKRO)
# Generally disable for Via builds as Via handles this
COMMAND_ENABLE = no

# NKRO — N-Key Rollover (report all simultaneous keypresses)
NKRO_ENABLE = yes

# Tap Dance — multi-function keys triggered by tap count
TAP_DANCE_ENABLE = yes

# Combo keys — trigger action from simultaneous key presses
COMBO_ENABLE = yes

# Key Overrides — replace key+modifier with different output
KEY_OVERRIDE_ENABLE = yes

# Auto Shift — hold a key slightly longer to get its shifted character
AUTO_SHIFT_ENABLE = no   # Disable by default; can enable per user preference

# ============================================================
# EEPROM Driver
# ============================================================
# STM32F401 has no dedicated EEPROM; use flash emulation
EEPROM_DRIVER = wear_leveling
WEAR_LEVELING_DRIVER = embedded_flash

# ============================================================
# Bootloader entry size reservation
# ============================================================
# STM32F401 DFU bootloader sits at 0x1FFF0000 (factory ROM)
# QMK application starts at 0x08000000
# No special linker script needed for standard DFU

# ============================================================
# Optimization
# ============================================================
# LTO (Link Time Optimization) reduces binary size ~10-15%
LTO_ENABLE = yes

# ============================================================
# Optional / Future Features (uncomment to enable)
# ============================================================

# OLED display support (128×32 or 128×64 I2C OLED)
# OLED_ENABLE = yes
# OLED_DRIVER = ssd1306

# Audio (passive buzzer on a PWM pin)
# AUDIO_ENABLE = yes

# Haptic feedback (solenoid or DRV2605L ERM)
# HAPTIC_ENABLE = yes
# HAPTIC_DRIVER = DRV2605L

# Bluetooth (deprecated in QMK; use ZMK for BLE builds)
# BLUETOOTH_ENABLE = no

# Unicode input
# UNICODE_ENABLE = yes
