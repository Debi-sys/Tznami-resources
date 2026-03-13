// config.h — Tznami KB65 (65% keyboard, STM32F401 MCU)
// Copy this file into: qmk_firmware/keyboards/tznami/<board_name>/config.h
// Adjust all values to match your actual hardware before compiling.

#pragma once

// ============================================================
// USB Descriptor Strings
// ============================================================
#define VENDOR_ID    0x5A4E   // "ZN" — request a real PID at pid.codes or the QMK PID list
#define PRODUCT_ID   0x0065   // 0x0065 = 65% product line
#define DEVICE_VER   0x0001   // Firmware version (BCD): 0.01
#define MANUFACTURER "Tznami"
#define PRODUCT      "Tznami KB65"

// ============================================================
// Matrix Configuration
// 65% ANSI layout: 5 rows × 14 columns (68 keys)
// ============================================================
#define MATRIX_ROWS 5
#define MATRIX_COLS 14

// STM32F401 BlackPill pin assignments — verify against your schematic!
#define MATRIX_ROW_PINS { A0, A1, A2, A3, A4 }
#define MATRIX_COL_PINS { B0, B1, B3, B4, B5, B6, B7, B8, B9, B10, B12, B13, B14, B15 }

// Diode orientation: COL2ROW (diode cathode toward row, anode toward col)
#define DIODE_DIRECTION COL2ROW

// ============================================================
// Debounce
// ============================================================
#define DEBOUNCE 5   // milliseconds; 5ms is safe for most switches

// ============================================================
// USB Reset / Bootloader
// ============================================================
// Physical reset button: drives NRST low
// Firmware bootloader jump: double-tap RST or use QK_BOOT keycode
#define BOOTMAGIC_LITE_ROW 0
#define BOOTMAGIC_LITE_COLUMN 0

// ============================================================
// RGB Matrix (per-key LEDs via WS2812B / SK6812 MINI-E)
// ============================================================
#define RGB_MATRIX_LED_COUNT 68   // one LED per key; adjust if you have underglow too

// Data line for LED chain
#define WS2812_DI_PIN B11

// RGB Matrix animation defaults (overridable via Via/Vial)
#define RGB_MATRIX_DEFAULT_MODE RGB_MATRIX_CYCLE_LEFT_RIGHT
#define RGB_MATRIX_DEFAULT_HUE  0
#define RGB_MATRIX_DEFAULT_SAT  255
#define RGB_MATRIX_DEFAULT_VAL  128
#define RGB_MATRIX_DEFAULT_SPD  64

// Maximum brightness cap (0–255); 180 prevents excessive heat/current draw
#define RGB_MATRIX_MAXIMUM_BRIGHTNESS 180

// Reaction effects (keypresses light up the pressed key)
#define RGB_MATRIX_KEYPRESSES

// Enable/disable specific animations to save flash space
#define ENABLE_RGB_MATRIX_ALPHAS_MODS
#define ENABLE_RGB_MATRIX_GRADIENT_UP_DOWN
#define ENABLE_RGB_MATRIX_GRADIENT_LEFT_RIGHT
#define ENABLE_RGB_MATRIX_BREATHING
#define ENABLE_RGB_MATRIX_BAND_SAT
#define ENABLE_RGB_MATRIX_BAND_VAL
#define ENABLE_RGB_MATRIX_RAINBOW_MOVING_CHEVRON
#define ENABLE_RGB_MATRIX_CYCLE_ALL
#define ENABLE_RGB_MATRIX_CYCLE_LEFT_RIGHT
#define ENABLE_RGB_MATRIX_CYCLE_UP_DOWN
#define ENABLE_RGB_MATRIX_CYCLE_OUT_IN
#define ENABLE_RGB_MATRIX_RAINBOW_PINWHEELS
#define ENABLE_RGB_MATRIX_JELLYBEAN_RAINDROPS
#define ENABLE_RGB_MATRIX_HUE_BREATHING
#define ENABLE_RGB_MATRIX_PIXEL_RAIN
#define ENABLE_RGB_MATRIX_TYPING_HEATMAP
#define ENABLE_RGB_MATRIX_DIGITAL_RAIN
#define ENABLE_RGB_MATRIX_SOLID_REACTIVE_SIMPLE
#define ENABLE_RGB_MATRIX_SOLID_REACTIVE
#define ENABLE_RGB_MATRIX_SOLID_REACTIVE_CROSS
#define ENABLE_RGB_MATRIX_SPLASH
#define ENABLE_RGB_MATRIX_SOLID_SPLASH

// ============================================================
// EEPROM — STM32F401 uses emulated EEPROM in flash
// ============================================================
// No additional defines needed; handled in rules.mk via EEPROM_DRIVER

// ============================================================
// Encoder (optional rotary knob — comment out if not present)
// ============================================================
#define ENCODER_RESOLUTION 4   // clicks per detent
// Encoder A/B pins; leave undefined if no encoder
// #define ENCODERS_PAD_A { A5 }
// #define ENCODERS_PAD_B { A6 }

// ============================================================
// Tap-Dance & Combo settings (tunable)
// ============================================================
#define TAPPING_TERM 200    // ms window for tap vs hold; 200ms suits most typists
#define PERMISSIVE_HOLD     // hold action triggers immediately on another key press
#define COMBO_TERM 50       // ms window to detect simultaneous key combos

// ============================================================
// N-Key Rollover
// ============================================================
#define FORCE_NKRO   // report as NKRO HID device; Via users can switch to 6KRO

// ============================================================
// Mouse Keys (software mouse cursor via keyboard)
// ============================================================
#define MOUSEKEY_INTERVAL    20
#define MOUSEKEY_DELAY       0
#define MOUSEKEY_TIME_TO_MAX 60
#define MOUSEKEY_MAX_SPEED   7
#define MOUSEKEY_WHEEL_DELAY 0
