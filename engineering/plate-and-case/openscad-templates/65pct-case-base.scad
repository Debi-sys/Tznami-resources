// ============================================================
// Tznami KB65 — Parametric Case Base
// OpenSCAD parametric case for a 65% keyboard (320mm × 113.5mm PCB)
// Designed for bottom-mount or tray-mount configurations.
//
// Usage:
//   F5 = Fast preview (CSG, not watertight)
//   F6 = Full render (watertight mesh, use for export)
//   File → Export → Export as STL  (for 3D printing)
//   File → Export → Export as DXF  (for CNC 2D profiles)
// ============================================================

/* === USER PARAMETERS — adjust these to match your design === */

// Overall outer dimensions
case_width  = 320.0;   // mm — outer width (X axis)
case_depth  = 113.5;   // mm — outer depth (Y axis)
case_height = 30.0;    // mm — total case height from floor to top lip

// Wall and floor thickness
wall_thickness   = 3.0;   // mm — side and back walls
bottom_thickness = 3.0;   // mm — case floor

// PCB mounting height above case floor (affects switch travel clearance)
pcb_height_from_base = 8.0;   // mm — top of PCB relative to case floor

// USB-C cutout (centered on front wall)
usb_cutout_w         = 10.0;   // mm — opening width
usb_cutout_h         = 4.0;    // mm — opening height
usb_center_from_left = 30.0;   // mm — offset from left inner wall to cutout center

// Screw holes (M3 clearance = 3.2mm, M3 tapped = 2.5mm pilot)
screw_hole_dia    = 3.2;   // mm — clearance for M3 screw
screw_hole_depth  = 5.0;   // mm — depth of screw hole (through-floor for inserts)
screw_inset       = 8.0;   // mm — inset from each corner

// Aesthetics
corner_radius = 3.0;   // mm — outer corner rounding (XY plane)
fillet_res    = 64;    // $fn for curved corners — higher = smoother but slower

// Derived values (do not change)
inner_width  = case_width  - 2 * wall_thickness;
inner_depth  = case_depth  - 2 * wall_thickness;
inner_height = case_height - bottom_thickness;


/* === MODULES === */

// ------------------------------------------------------------
// Module: case_body
// The hollow outer shell of the case (walls + floor, open top)
// ------------------------------------------------------------
module case_body() {
    difference() {
        // Outer shell with rounded corners
        linear_extrude(height = case_height)
            offset(r = corner_radius, $fn = fillet_res)
                offset(r = -corner_radius)
                    square([case_width, case_depth]);

        // Inner cavity (open top pocket)
        translate([wall_thickness, wall_thickness, bottom_thickness])
            cube([inner_width, inner_depth, inner_height + 1]);
    }
}

// ------------------------------------------------------------
// Module: pcb_cutout
// A stepped ledge / relief at pcb_height_from_base for PCB seating.
// Cut 0.5mm wider than PCB on each side for assembly tolerance.
// ------------------------------------------------------------
module pcb_cutout() {
    pcb_relief_w = inner_width  - 1.0;   // 0.5mm per side
    pcb_relief_d = inner_depth  - 1.0;
    pcb_relief_depth = 2.0;              // depth of the seating lip

    translate([wall_thickness + 0.5, wall_thickness + 0.5, pcb_height_from_base - pcb_relief_depth])
        cube([pcb_relief_w, pcb_relief_d, pcb_relief_depth + 1]);
}

// ------------------------------------------------------------
// Module: usb_cutout
// Rectangular opening in the front wall for USB-C connector.
// Centered at usb_center_from_left from the left inner wall.
// ------------------------------------------------------------
module usb_cutout() {
    usb_x = wall_thickness + usb_center_from_left - usb_cutout_w / 2;
    usb_z = pcb_height_from_base + 0.5;   // slight offset above PCB surface

    translate([usb_x, -1, usb_z])
        cube([usb_cutout_w, wall_thickness + 2, usb_cutout_h]);
}

// ------------------------------------------------------------
// Module: screw_holes
// Four M3 screw holes at the inner corners of the case floor.
// Extend through the floor (through_floor = true) or as blind holes.
// ------------------------------------------------------------
module screw_holes() {
    positions = [
        [wall_thickness + screw_inset,             wall_thickness + screw_inset],
        [case_width - wall_thickness - screw_inset, wall_thickness + screw_inset],
        [wall_thickness + screw_inset,             case_depth - wall_thickness - screw_inset],
        [case_width - wall_thickness - screw_inset, case_depth - wall_thickness - screw_inset]
    ];

    for (pos = positions) {
        translate([pos[0], pos[1], -1])
            cylinder(d = screw_hole_dia, h = bottom_thickness + 2, $fn = 32);
    }
}

// ------------------------------------------------------------
// Module: bottom_lip_chamfer
// Optional 45° chamfer on the outer bottom edge for comfort.
// ------------------------------------------------------------
module bottom_lip_chamfer(chamfer_size = 1.5) {
    translate([0, 0, 0])
    difference() {
        cube([case_width + 2, case_depth + 2, chamfer_size + 0.1]);
        translate([-1, -1, 0])
            linear_extrude(height = chamfer_size + 0.2)
                offset(delta = -chamfer_size)
                    square([case_width + 2, case_depth + 2]);
    }
}


/* === FINAL ASSEMBLY === */

difference() {
    case_body();
    pcb_cutout();
    usb_cutout();
    screw_holes();
    // Uncomment for chamfered bottom edge:
    // translate([-1, -1, 0]) bottom_lip_chamfer(1.5);
}
