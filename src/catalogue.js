// catalogue.js — authoritative product, scene, and prompt-syntax data for Windows and Doors.
// Edit this file directly when manufacturers update ranges, colours, or specifications.
// Last refresh: May 2026

// =============================================================================
// COLOUR LIBRARY — Deceuninck Heritage Colour Collection (foiled finishes)
// Approximate RAL / hex values for prompt accuracy.
// =============================================================================
export const DECEUNINCK_COLOURS = [
  { name: "White", ral: "RAL 9016", hex: "#F1F0EA", finish: "smooth" },
  { name: "Cream", ral: "RAL 9001", hex: "#EFE6CC", finish: "smooth" },
  { name: "Anthracite Grey", ral: "RAL 7016", hex: "#383E42", finish: "woodgrain" },
  { name: "Anthracite Grey Smooth", ral: "RAL 7016", hex: "#383E42", finish: "smooth" },
  { name: "Agate Grey", ral: "RAL 7038", hex: "#B2B4B3", finish: "woodgrain" },
  { name: "Slate Grey", ral: "RAL 7015", hex: "#4F5358", finish: "woodgrain" },
  { name: "Black Brown", ral: "RAL 8022", hex: "#212121", finish: "woodgrain" },
  { name: "Chartwell Green", ral: "Custom", hex: "#7B8C76", finish: "woodgrain" },
  { name: "Painswick", ral: "Custom sage", hex: "#8B907E", finish: "woodgrain" },
  { name: "English Oak", ral: "Custom timber", hex: "#7A4F2B", finish: "woodgrain" },
  { name: "Irish Oak", ral: "Custom timber", hex: "#5C3A1E", finish: "woodgrain" },
  { name: "Rosewood", ral: "Custom timber", hex: "#5A2A1A", finish: "woodgrain" },
  { name: "Golden Oak", ral: "Custom timber", hex: "#A87440", finish: "woodgrain" },
  { name: "Mahogany", ral: "Custom timber", hex: "#4A2018", finish: "woodgrain" },
  { name: "Walnut", ral: "Custom timber", hex: "#5C4032", finish: "woodgrain" },
  { name: "Cream Woodgrain", ral: "RAL 9001", hex: "#EFE6CC", finish: "woodgrain" },
  { name: "Silver Grey", ral: "RAL 7001", hex: "#8F9695", finish: "woodgrain" },
  { name: "Steel Blue", ral: "RAL 5011", hex: "#1F2F44", finish: "woodgrain" },
  { name: "Pebble Grey", ral: "RAL 7032", hex: "#B7B0A0", finish: "woodgrain" },
  { name: "Quartz Grey", ral: "RAL 7039", hex: "#6C6960", finish: "woodgrain" }
];

// =============================================================================
// COLOUR LIBRARY — Smart Architectural Aluminium powder-coat ranges
// =============================================================================
export const SMART_COLOURS = [
  { name: "Matt Black", ral: "RAL 9005", hex: "#0A0A0A", finish: "matt powder" },
  { name: "Anthracite Grey", ral: "RAL 7016", hex: "#383E42", finish: "matt powder" },
  { name: "Anthracite Grey Textured", ral: "RAL 7016", hex: "#383E42", finish: "fine texture powder" },
  { name: "Slate Grey", ral: "RAL 7015", hex: "#4F5358", finish: "matt powder" },
  { name: "Jet Black", ral: "RAL 9005", hex: "#0A0A0A", finish: "gloss powder" },
  { name: "Pure White", ral: "RAL 9010", hex: "#F1F0EA", finish: "matt powder" },
  { name: "Traffic White", ral: "RAL 9016", hex: "#F1F0EA", finish: "gloss powder" },
  { name: "Cream", ral: "RAL 9001", hex: "#EFE6CC", finish: "matt powder" },
  { name: "Sage Green", ral: "RAL 6021", hex: "#86A47C", finish: "matt powder" },
  { name: "Heritage Green", ral: "RAL 6009", hex: "#27352A", finish: "matt powder" },
  { name: "Chartwell Green", ral: "Custom", hex: "#7B8C76", finish: "matt powder" },
  { name: "Steel Blue", ral: "RAL 5011", hex: "#1F2F44", finish: "matt powder" },
  { name: "Oxford Blue", ral: "RAL 5013", hex: "#1B2C3E", finish: "matt powder" },
  { name: "Bronze", ral: "Smart Sensations", hex: "#5C4A3C", finish: "metallic powder" },
  { name: "Sienna Bronze", ral: "Smart Sensations", hex: "#7B5A3F", finish: "metallic powder" },
  { name: "Quartz Grey", ral: "RAL 7039", hex: "#6C6960", finish: "matt powder" },
  { name: "Pebble Grey", ral: "RAL 7032", hex: "#B7B0A0", finish: "matt powder" },
  { name: "Cotswold Stone", ral: "Smart Cotswold", hex: "#C9B89A", finish: "matt powder" },
  { name: "Painswick", ral: "Smart Cotswold", hex: "#8B907E", finish: "matt powder" }
];

// =============================================================================
// COLOUR LIBRARY — Comp Door range (composite door colours, common)
// =============================================================================
export const COMPDOOR_COLOURS = [
  { name: "Anthracite Grey", ral: "RAL 7016", hex: "#383E42" },
  { name: "Slate Grey", ral: "RAL 7015", hex: "#4F5358" },
  { name: "Jet Black", ral: "RAL 9005", hex: "#0A0A0A" },
  { name: "Chartwell Green", ral: "Custom", hex: "#7B8C76" },
  { name: "Sage Green", ral: "RAL 6021", hex: "#86A47C" },
  { name: "Heritage Green", ral: "RAL 6009", hex: "#27352A" },
  { name: "Duck Egg Blue", ral: "Custom", hex: "#94B5B0" },
  { name: "Oxford Blue", ral: "RAL 5013", hex: "#1B2C3E" },
  { name: "French Navy", ral: "Custom", hex: "#1F2F44" },
  { name: "Cardinal Red", ral: "RAL 3004", hex: "#6E1A1A" },
  { name: "Burgundy", ral: "RAL 3005", hex: "#5E1F2D" },
  { name: "Cream", ral: "RAL 9001", hex: "#EFE6CC" },
  { name: "White", ral: "RAL 9016", hex: "#F1F0EA" },
  { name: "Rosewood", ral: "Custom timber", hex: "#5A2A1A" },
  { name: "Irish Oak", ral: "Custom timber", hex: "#5C3A1E" },
  { name: "Golden Oak", ral: "Custom timber", hex: "#A87440" }
];

// =============================================================================
// COMP DOOR styles and glass — sourced from compdoor.co.uk
// =============================================================================
export const COMPDOOR_STYLES = [
  "Aston", "Axwell", "Buxton", "Grafton", "Hamilton", "Harlington", "Hatton",
  "Kent", "Sutherland", "Walcot", "Wellington", "Westminster"
];

export const COMPDOOR_GLASS = [
  { name: "Solid (no glass)", type: "solid" },
  { name: "Pilkington Satin", type: "obscure", description: "smooth satin frosted obscure glass, contemporary" },
  { name: "Pilkington Cotswold", type: "obscure", description: "irregular pebble-pattern obscure glass" },
  { name: "Pilkington Stippolyte", type: "obscure", description: "small uniform stipple-pattern obscure glass" },
  { name: "Pilkington Charcoal Sticks", type: "obscure", description: "vertical linear obscure pattern" },
  { name: "Clear glazed", type: "clear", description: "clear toughened safety glass" },
  { name: "Decorative bevelled — traditional leaded", type: "decorative", description: "hand-cut bevelled glass with lead strips, Victorian-Edwardian style" },
  { name: "Decorative stained glass — coloured leaded", type: "decorative", description: "coloured stained glass with lead came work, period authentic" },
  { name: "Etch effect — contemporary", type: "decorative", description: "etched glass with simple geometric design, modern" },
  { name: "Crystal Art — bevelled prismatic", type: "decorative", description: "advanced bevelled prismatic effect, refracts light" },
  { name: "Fused glass element — Murano", type: "decorative", description: "etched glass with bonded fused glass elements, contemporary art glass" }
];

// =============================================================================
// PRODUCT CATALOGUE
// Each product has: name, material, type, install context, visual descriptor
// (the visual translation layer — what goes into prompts), configuration options,
// available colour set, available hardware, and signature visual cues.
// =============================================================================
export const PRODUCTS = {
  // ---------- Deceuninck uPVC ----------
  decHeritage2800: {
    name: "Deceuninck Heritage 2800 (Sculptured Sash)",
    material: "uPVC",
    type: "window",
    installContext: "exterior",
    visualDescriptor: "uPVC casement window with sculptured outward-opening sash standing slightly proud of the frame, traditional ovolo profile, subtle weld bead visible at corner mitres characteristic of welded uPVC manufacturing, 70mm outer frame with optional 85mm or 110mm mullions and transoms, equal sightlines available with dummy sash option",
    signatureVisualCue: "outward-opening sculptured sash proud of frame face, period-appropriate proportions, visible welded mitre joints",
    configurations: [
      "Single fixed light",
      "Single side-hung casement",
      "Single top-hung casement",
      "Two-light: fixed + side-hung opener",
      "Three-light: fixed + opener + fixed",
      "Four-light cottage: 2 over 2",
      "Bay window 3-light splayed",
      "Bay window 5-light splayed",
      "Bay window 3-light square",
      "Bay window 3-light canted"
    ],
    colours: "deceuninck",
    hardware: ["window"],
    glazingBars: ["None", "Applied Georgian bars (internal only)", "Astragal bars (between glass)", "Through-bar Georgian (cottage style)"],
    suitabilityNotes: "Suits 1930s semis, post-war housing, modern new-builds, mainstream replacement work. Less suited to listed/conservation."
  },
  decHeritageFlush: {
    name: "Deceuninck Heritage Flush Sash",
    material: "uPVC",
    type: "window",
    installContext: "exterior",
    visualDescriptor: "uPVC flush casement window with the opening sash sitting flush within the frame face replicating traditional timber joinery, slim sightlines, available in welded grooved finish or seamless StyleLine mechanical-graf joint with no visible weld bead, multi-function weather seal, designed to look authentically like timber",
    signatureVisualCue: "fully flush exterior face with no proud sash, slim sightlines, mechanical-jointed corners possible (no weld bead) for period authenticity",
    configurations: [
      "Single fixed light",
      "Single side-hung casement",
      "Single top-hung casement",
      "Two-light: fixed + side-hung opener",
      "Three-light: fixed + opener + fixed",
      "Four-light cottage: 2 over 2",
      "Bay window 3-light splayed",
      "Bay window 5-light splayed",
      "Bay window 3-light canted"
    ],
    colours: "deceuninck",
    hardware: ["window", "windowHeritage"],
    glazingBars: ["None", "Applied Georgian bars (internal only)", "Astragal bars (between glass)", "Through-bar Georgian (cottage style)"],
    suitabilityNotes: "Excellent for cottages, Victorian/Edwardian terraces, conservation areas, period properties. The first-choice uPVC for character homes."
  },
  decSlider24: {
    name: "Deceuninck Slider24 Patio Door",
    material: "uPVC",
    type: "patio_door",
    installContext: "exterior",
    visualDescriptor: "uPVC sliding patio door with slim 24mm interlock sightline, large glazed panels, smooth gliding operation, low threshold option",
    signatureVisualCue: "ultra-slim 24mm interlock between sliding panels, maximised glass area",
    configurations: [
      "2-pane (1 fixed, 1 sliding)",
      "3-pane (2 fixed, 1 sliding)",
      "4-pane (2 fixed, 2 sliding)"
    ],
    colours: "deceuninck",
    hardware: ["patio"],
    glazingBars: ["None"],
    suitabilityNotes: "Modern rear-of-house openings, garden-facing extensions."
  },
  decFlushDoor: {
    name: "Deceuninck Heritage Flush French Door",
    material: "uPVC",
    type: "french_door",
    installContext: "exterior",
    visualDescriptor: "uPVC French door pair with flush sash design matching Heritage Flush windows, open-out configuration, slim sightlines, period-authentic timber-look proportions",
    signatureVisualCue: "matched pair with flush exterior face, dedicated open-out flush French sash",
    configurations: [
      "Pair, equal width",
      "Pair with single sidelight",
      "Pair with two sidelights",
      "Pair with toplight"
    ],
    colours: "deceuninck",
    hardware: ["frenchDoor"],
    glazingBars: ["None", "Applied Georgian bars", "Through-bar Georgian"],
    suitabilityNotes: "Period rear elevations, garden-facing dining rooms, character properties."
  },

  // ---------- Hurst uPVC doors ----------
  hurstDoor: {
    name: "Hurst uPVC Door",
    material: "uPVC",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "uPVC residential entrance door with reinforced multi-chambered profile, typically 70mm or 75mm outer frame, slab-style or panel-style options, multi-point locking, range of glazing apertures and decorative panel options",
    signatureVisualCue: "uPVC residential door with consistent profile detailing matching window range, robust slab construction",
    configurations: [
      "Half-glazed panel door",
      "Fully-glazed door",
      "Solid panel door",
      "Stable door (split horizontally)",
      "Door with single sidelight",
      "Door with two sidelights",
      "Door with toplight"
    ],
    colours: "deceuninck",
    hardware: ["entranceDoor"],
    glazingBars: ["None", "Georgian bars", "Decorative leaded effect"],
    suitabilityNotes: "Cost-effective uPVC entrance doors, back doors, side doors. Mainstream replacement work."
  },

  // ---------- Smart Aluminium ----------
  smartAlitherm400Window: {
    name: "Smart Alitherm 400 Window",
    material: "Aluminium",
    type: "window",
    installContext: "exterior",
    visualDescriptor: "polyamide thermally-broken aluminium casement window with crisp clean sightlines, polyester powder-coated finish, slim profiles, contemporary aesthetic, marine-quality finish, available in fixed, side-hung, top-hung, tilt-and-turn or flush casement configurations",
    signatureVisualCue: "crisp powder-coated aluminium frame, clean modern sightlines, contemporary architectural feel",
    configurations: [
      "Single fixed light",
      "Single side-hung casement",
      "Single top-hung casement",
      "Tilt-and-turn",
      "Flush casement (slim modern aesthetic)",
      "Two-light: fixed + opener",
      "Three-light: fixed + opener + fixed",
      "Floor-to-ceiling fixed picture window",
      "Bay window 3-light"
    ],
    colours: "smart",
    hardware: ["window"],
    glazingBars: ["None", "Applied bars (contemporary)"],
    suitabilityNotes: "Contemporary new-builds, modern extensions, architect-led projects, urban townhouses."
  },
  smartAlitherm400Door: {
    name: "Smart Alitherm 400 Door (entrance / French)",
    material: "Aluminium",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "thermally-broken aluminium residential or French door with same profile sightlines as Alitherm 400 windows, single or double, open-in or open-out, multi-point locking, low threshold option",
    signatureVisualCue: "matching system aesthetic to Alitherm 400 windows, crisp powder-coated finish",
    configurations: [
      "Single residential door",
      "Pair of French doors",
      "Door with single sidelight",
      "Door with two sidelights",
      "Door with toplight"
    ],
    colours: "smart",
    hardware: ["entranceDoor"],
    glazingBars: ["None", "Applied bars"],
    suitabilityNotes: "Entrance doors and French doors for matched-system installs."
  },
  smartAluspace: {
    name: "Smart Aluspace (internal partition)",
    material: "Aluminium",
    type: "internal_screen",
    installContext: "interior",
    visualDescriptor: "aluminium internal screening system replicating the steel-look industrial aesthetic, ultra-narrow 20mm sightlines, multi-pane gridded configuration evoking Crittall heritage windows, fixed glazed screens with hinged single or double doors, pivot or sliding door options",
    signatureVisualCue: "Crittall-style narrow black or dark-finish aluminium grid mullions, multi-pane internal screen, industrial-heritage aesthetic",
    configurations: [
      "Fixed screen, 2x2 grid",
      "Fixed screen, 3x3 grid",
      "Fixed screen, 4-light horizontal",
      "Hinged single door with sidelight grids",
      "Hinged double doors with sidelight grids",
      "Sliding door with fixed sidelight",
      "Pivot door with full grid"
    ],
    colours: "smart",
    hardware: ["internalScreen"],
    glazingBars: ["Integral grid mullions (signature feature)"],
    suitabilityNotes: "Internal use only. Kitchen-to-living, kitchen-to-office, hallway-to-living, room dividers. Industrial-modern interiors, loft conversions, contemporary new-builds with characterful interior styling."
  },
  smartDesignerDoor: {
    name: "Smart Designer Door",
    material: "Aluminium",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "high-end aluminium entrance door with bonded designer panel face, contemporary front door aesthetic, premium aesthetics with options for bold colour, integrated handle and hardware design, secure multi-point locking",
    signatureVisualCue: "premium aluminium entrance door with flush bonded panel face, contemporary architectural statement",
    configurations: [
      "Single door, solid panel",
      "Single door, glazed aperture (small)",
      "Single door, glazed aperture (full vertical)",
      "Door with single sidelight",
      "Door with two sidelights",
      "Door with toplight",
      "Door with sidelights and toplight"
    ],
    colours: "smart",
    hardware: ["designerDoor"],
    glazingBars: ["None"],
    suitabilityNotes: "Architect-led entrance doors, modern new-builds, premium townhouses, statement renovations."
  },
  smartSignatureDoor: {
    name: "Smart Signature Door",
    material: "Aluminium",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "premium aluminium entrance door with sleek thermally-broken profile, slim sightlines, available in single or double configuration, designer hardware, suitable for high-specification residential entrances",
    signatureVisualCue: "premium aluminium entrance door, refined slim profile, elevated hardware",
    configurations: [
      "Single door",
      "Pair of doors",
      "Door with single sidelight",
      "Door with two sidelights",
      "Door with toplight"
    ],
    colours: "smart",
    hardware: ["designerDoor"],
    glazingBars: ["None"],
    suitabilityNotes: "Premium entrance doors for high-end residential."
  },
  smartVisofold1000: {
    name: "Smart Visofold 1000 Bifold Door",
    material: "Aluminium",
    type: "bifold",
    installContext: "exterior",
    visualDescriptor: "aluminium bi-fold door with slim 122mm sightlines at junctions, polyamide thermal break, fully glazed clear panels, smooth running gear at head track, low threshold option, premium powder-coated finish, configurable from 2 to 7 panes folding internally or externally with optional traffic door",
    signatureVisualCue: "ultra-slim 122mm sightlines at junctions, large glass area, fully glazed panels, smooth folding action",
    configurations: [
      "2-pane (folds one way)",
      "3-pane (2+1 with traffic door)",
      "3-pane (3 folding)",
      "4-pane (3+1 with traffic door)",
      "4-pane (all folding)",
      "5-pane (4+1 with traffic door)",
      "5-pane (3+2 split)",
      "6-pane (5+1 with traffic door)",
      "6-pane (3+3 split)",
      "7-pane (6+1 with traffic door)"
    ],
    colours: "smart",
    hardware: ["bifold"],
    glazingBars: ["None"],
    suitabilityNotes: "Rear-of-house openings to garden, kitchen extensions, indoor-outdoor living, modern and contemporary properties."
  },

  // ---------- Comp Door ----------
  compdoor: {
    name: "Comp Door Composite Door",
    material: "Composite",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "composite entrance door with cross-laminated Albasia Falcata timber core, GRP woodgrain or smooth skin face, TriSeal frame, ABS 3-star rated multi-point locking, replaceable glass cassette system, premium kerb-appeal entrance door appearance",
    signatureVisualCue: "premium GRP-faced composite entrance door with authentic woodgrain texture or smooth painted finish, bevelled or stained decorative glass typical for the range, robust solid feel",
    configurations: [
      "Single door, solid panel",
      "Single door, with glass aperture (per style)",
      "Single door, with sidelight",
      "Single door, with two sidelights",
      "Single door, with toplight",
      "Stable door (split)",
      "Pair (double doors)"
    ],
    colours: "compdoor",
    hardware: ["entranceDoor"],
    styleVariant: "compdoorStyles",
    glassRange: "compdoorGlass",
    glazingBars: ["None"],
    suitabilityNotes: "Premium kerb-appeal front doors, the entrance-door choice when impression matters most."
  },

  // ---------- Gower Joinery wood ----------
  gowerCasement: {
    name: "Gower Joinery Wooden Casement Window",
    material: "Wood",
    type: "window",
    installContext: "exterior",
    visualDescriptor: "engineered timber casement window with traditional joinery details, factory-painted or stained finish, putty-line or bead-glazed, period-authentic proportions, FSC-certified hardwood or softwood, brass or chrome traditional ironmongery",
    signatureVisualCue: "true timber profile with visible grain, traditional joinery, painted or stained finish, period-authentic timber depth",
    configurations: [
      "Single fixed light",
      "Single side-hung casement",
      "Single top-hung casement",
      "Two-light cottage",
      "Three-light cottage",
      "Four-light cottage 2-over-2",
      "Bay window 3-light",
      "Bay window 5-light"
    ],
    colours: "gowerPainted",
    hardware: ["windowHeritage"],
    glazingBars: ["None", "Through-bar Georgian (true bars)", "Astragal bars", "Period 6-over-6"],
    suitabilityNotes: "Listed buildings, conservation areas, premium period restoration. Where uPVC and aluminium are not permitted or appropriate."
  },
  gowerSash: {
    name: "Gower Joinery Vertical Sliding Sash Window",
    material: "Wood",
    type: "sash_window",
    installContext: "exterior",
    visualDescriptor: "traditional vertical sliding sash window in engineered timber, weights or spring-balance operation, glazing bars optional, painted or stained finish, fully period-authentic for Georgian, Regency or Victorian properties",
    signatureVisualCue: "true vertical sliding sash, period proportions with horns optional, glazing bar configuration matched to era",
    configurations: [
      "1-over-1 (Victorian)",
      "2-over-2 (late Victorian/Edwardian)",
      "6-over-6 (Georgian)",
      "8-over-8 (Georgian large)",
      "9-over-9 (Georgian large)",
      "12-over-12 (early Georgian)",
      "Margin bars (decorative)"
    ],
    colours: "gowerPainted",
    hardware: ["sashWindow"],
    glazingBars: ["Through-bar (true period bars)", "Applied internal bars", "Between-glass bars"],
    suitabilityNotes: "Period sash window restoration, listed buildings, Grade II properties, Georgian and Victorian houses."
  },
  gowerDoor: {
    name: "Gower Joinery Wooden Door",
    material: "Wood",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "solid timber entrance door with traditional joinery, panelled or glazed configuration, factory-painted or stained finish, brass or chrome period ironmongery, mortice locks, period-authentic detailing",
    signatureVisualCue: "real timber door with visible grain, traditional panelling, period authenticity",
    configurations: [
      "Single panel door (4-panel Victorian)",
      "Single panel door (6-panel Georgian)",
      "Single half-glazed door",
      "Single fully-glazed door",
      "Pair of French doors",
      "Stable door"
    ],
    colours: "gowerPainted",
    hardware: ["heritageDoor"],
    glazingBars: ["None", "Through-bar Georgian", "Margin bars"],
    suitabilityNotes: "Period entrance doors, listed buildings, conservation areas."
  },

  // ---------- Korniche ----------
  korniche: {
    name: "Korniche Aluminium Roof Lantern",
    material: "Aluminium",
    type: "roof_lantern",
    installContext: "exterior_roof",
    visualDescriptor: "aluminium roof lantern with ultra-slim 38mm sightlines, polyester powder-coated thermally-broken aluminium frame, hidden bracket fixings, glass-supported corners with no corner posts, contemporary clean profile, fitted flush into a flat roof structure with visible plasterboard reveal at the internal junction",
    signatureVisualCue: "exceptionally slim 38mm aluminium sightlines, no corner posts (cantilevered glass corners), hidden brackets, modern minimalist appearance",
    configurations: [
      "Pyramid 4-rafter (square)",
      "4-rafter rectangular",
      "6-rafter rectangular",
      "8-rafter long rectangular",
      "10-rafter feature size"
    ],
    colours: "smart",
    hardware: ["none"],
    glazingBars: [],
    suitabilityNotes: "Single-storey rear extensions, kitchen extensions, dining additions, flat-roof areas where natural light is needed. Always installed flush into flat roof — show plasterboard reveal internally."
  }
};

// =============================================================================
// HARDWARE LIBRARY
// =============================================================================
export const HARDWARE = {
  window: {
    label: "Window furniture",
    options: {
      handleStyle: ["Inline cockspur", "Espagnolette lever", "Monkey tail", "Tear drop"],
      finish: ["Chrome", "Brushed chrome", "Brushed nickel", "Matt black", "Polished gold", "Antique brass", "White", "Anthracite to match frame"]
    }
  },
  windowHeritage: {
    label: "Heritage window furniture",
    options: {
      handleStyle: ["Monkey tail", "Pear drop", "Traditional cast"],
      finish: ["Antique brass", "Polished brass", "Matt black", "Pewter", "Chrome"]
    }
  },
  sashWindow: {
    label: "Sash window furniture",
    options: {
      handleStyle: ["Sash lift", "Fitch sash fastener", "Brighton fastener"],
      finish: ["Polished brass", "Antique brass", "Chrome", "Pewter", "Matt black"]
    }
  },
  entranceDoor: {
    label: "Entrance door furniture",
    options: {
      handleStyle: ["Lever-on-rose contemporary", "Lever-on-backplate traditional", "Pull handle bar", "T-bar contemporary", "Knob-on-rose"],
      letterbox: ["None", "Slimline contemporary", "Traditional rectangular", "Period heavy"],
      knocker: ["None", "Urn knocker traditional", "Doctor knocker traditional", "Ring knocker contemporary", "Lion knocker period"],
      finish: ["Chrome", "Brushed chrome", "Brushed nickel", "Matt black", "Polished gold", "Antique brass", "Pewter"]
    }
  },
  designerDoor: {
    label: "Designer door furniture",
    options: {
      handleStyle: ["Full-height pull bar", "Mid-height T-bar", "Concealed handle", "Lever-on-rose contemporary"],
      letterbox: ["None", "Concealed integrated", "Slimline contemporary"],
      knocker: ["None", "Concealed", "Modern minimalist disc"],
      finish: ["Stainless steel", "Matt black", "Brushed bronze", "Brushed gold", "Chrome"]
    }
  },
  heritageDoor: {
    label: "Heritage door furniture",
    options: {
      handleStyle: ["Lever-on-backplate Georgian", "Knob-on-backplate Victorian", "Centre door knob"],
      letterbox: ["Traditional rectangular brass", "Period heavy cast", "Engraved Royal style"],
      knocker: ["Urn knocker", "Doctor knocker", "Lion knocker", "Wreath knocker"],
      finish: ["Polished brass", "Antique brass", "Pewter", "Bronze", "Black ironwork"]
    }
  },
  bifold: {
    label: "Bifold door furniture",
    options: {
      handleStyle: ["D-handle standard", "Heavy-duty shoot bolt handle", "Lever lock handle"],
      finish: ["Matt black", "Chrome", "Brushed chrome", "Anthracite", "Stainless steel"]
    }
  },
  patio: {
    label: "Patio door furniture",
    options: {
      handleStyle: ["Inline pull handle", "Lever lock handle", "Recessed flush handle"],
      finish: ["Chrome", "Brushed chrome", "Matt black", "Anthracite to match"]
    }
  },
  frenchDoor: {
    label: "French door furniture",
    options: {
      handleStyle: ["Lever-on-rose", "Lever-on-backplate", "Espagnolette long handle"],
      finish: ["Chrome", "Brushed chrome", "Matt black", "Polished gold", "Antique brass"]
    }
  },
  internalScreen: {
    label: "Internal screen furniture",
    options: {
      handleStyle: ["Slim lever-on-rose", "T-bar pull handle", "Recessed flush"],
      finish: ["Matt black", "Brushed bronze", "Chrome", "Stainless steel"]
    }
  },
  none: { label: "No hardware visible", options: {} }
};

// Wood door colours (Gower) — painted finishes typically Farrow & Ball / Little Greene equivalents
export const GOWER_PAINTED = [
  { name: "Heritage White", ral: "Off-white", hex: "#EDE7DA" },
  { name: "Cream", ral: "RAL 9001", hex: "#EFE6CC" },
  { name: "Light Stone", ral: "Custom warm neutral", hex: "#C9B89A" },
  { name: "French Grey", ral: "Custom soft grey", hex: "#A4A39A" },
  { name: "Anthracite Grey", ral: "RAL 7016", hex: "#383E42" },
  { name: "Black", ral: "RAL 9005", hex: "#0A0A0A" },
  { name: "Sage Green", ral: "Heritage sage", hex: "#86A47C" },
  { name: "Painswick", ral: "Custom soft sage", hex: "#8B907E" },
  { name: "Chartwell Green", ral: "Custom", hex: "#7B8C76" },
  { name: "Hague Blue", ral: "Custom deep navy", hex: "#243144" },
  { name: "Oxford Blue", ral: "RAL 5013", hex: "#1B2C3E" },
  { name: "Burgundy", ral: "RAL 3005", hex: "#5E1F2D" },
  { name: "Stained Oak (clear)", ral: "Natural timber", hex: "#A87440" },
  { name: "Stained Walnut", ral: "Dark timber", hex: "#5C4032" },
  { name: "Stained Mahogany", ral: "Rich timber", hex: "#4A2018" }
];

// Map colour set name to actual colour array
export const COLOUR_SETS = {
  deceuninck: DECEUNINCK_COLOURS,
  smart: SMART_COLOURS,
  compdoor: COMPDOOR_COLOURS,
  gowerPainted: GOWER_PAINTED
};

// =============================================================================
// HOUSING STOCK CATALOGUE — by service-area county
// =============================================================================
export const HOUSING_STOCK = {
  bedfordshire: [
    { id: "beds_1930s_semi", label: "1930s red brick suburban semi (Bedford / Luton fringe)", description: "1930s suburban semi-detached, red brick lower with painted render or pebbledash upper, hipped tile roof, bay window front, tile-hung detail optional, modest front garden with low brick wall, driveway, mature suburban planting" },
    { id: "beds_edwardian_terrace", label: "Edwardian terrace (Bedford town)", description: "Edwardian two-storey terrace, red brick with cream stone detail, slate or tile roof, bay window ground floor, original or replacement sash windows, small front yard with low brick wall, on-street parking" },
    { id: "beds_modern_newbuild", label: "Modern Bedfordshire new-build (Wixams / Marston Vale)", description: "Modern new-build estate house, red brick or buff brick, tile roof, mixed cladding panels in some examples, integrated garage, block-paved driveway, contemporary proportions, small new-planted front garden" },
    { id: "beds_market_town", label: "Market town stock (Ampthill / Woburn / Leighton Buzzard)", description: "Market town two-storey property, mix of red brick or render, tile or slate roof, period proportions, often Georgian-influenced symmetry, on-street or mews-style approach" }
  ],
  cambridgeshire: [
    { id: "cambs_victorian_terrace", label: "Cambridge Victorian terrace", description: "Cambridge Victorian terrace, two storey, gault or yellow brick characteristic of Cambridge, slate roof, sash window heritage, small front garden with low brick or iron railing, mature street trees" },
    { id: "cambs_newbuild_cambourne", label: "Modern Cambridgeshire new-build (Cambourne / Northstowe)", description: "Modern Cambridgeshire new-build estate house, mix of buff brick and weatherboard cladding, tile roof, integrated garage, contemporary proportions, landscaped communal areas, block driveway" },
    { id: "cambs_fenland_farmhouse", label: "Fenland brick farmhouse (rural Cambridgeshire)", description: "Fenland farmhouse, two storey red or buff brick, pantile or slate roof, generous proportions, set in flat open landscape with big sky, mature trees, gravel driveway" },
    { id: "cambs_college_townhouse", label: "Cambridge college-quarter townhouse", description: "Cambridge city townhouse, painted render or yellow brick, period proportions, sash windows, set on quiet conservation street, mature street trees, walled garden hint" }
  ],
  northamptonshire: [
    { id: "northants_ironstone_village", label: "Ironstone village house (Rural Northamptonshire)", description: "Northamptonshire ironstone village house, characteristic warm orange-brown ironstone walls (NOT yellow Cotswold, NOT grey limestone), stone or slate roof, mullion windows or stone-surrounded openings, cottage proportions, mature country garden with stone walls" },
    { id: "northants_red_brick_terrace", label: "Red brick Victorian terrace (Wellingborough / Kettering / Northampton)", description: "Red brick Victorian terrace, two storey, slate roof, bay window option, small front yard, on-street parking, mature street trees, Northampton industrial-town context" },
    { id: "northants_daventry_estate", label: "Modern Daventry estate house", description: "Modern estate house, red or buff brick, tile roof, integrated garage, block driveway, suburban planting, contemporary new-build proportions" }
  ],
  lincolnshire: [
    { id: "lincs_limestone_village", label: "Limestone village house (Rural Lincolnshire)", description: "Lincolnshire limestone village house, honey-coloured limestone walls (NOT ironstone orange, NOT Cotswold yellow but pale honey), stone-tile or slate roof, deep window reveals showing stone wall thickness, cottage or farmhouse proportions, country garden, stone walls or hedge boundaries" },
    { id: "lincs_lincoln_terrace", label: "Lincoln Victorian terrace", description: "Lincoln Victorian terrace, red brick, slate roof, sash windows or bay windows, small front yard, on-street parking, period character" },
    { id: "lincs_fenland_farmhouse", label: "Fenland farmhouse (rural Lincolnshire)", description: "Fenland farmhouse, red brick, pantile roof, set in flat open agricultural landscape, big sky, generous garden, gravel approach, mature trees" }
  ],
  leicestershire: [
    { id: "leics_red_brick_terrace", label: "Leicester red brick terrace", description: "Leicester Victorian or Edwardian red brick terrace, two storey, slate roof, bay window option, small front yard with low brick wall, on-street parking, varied front doors typical of multi-decade ownership, mature street trees" },
    { id: "leics_charnwood_granite", label: "Granite stone Charnwood village house (Rural Leicestershire)", description: "Charnwood village house in characteristic dark grey-pink Charnwood granite (volcanic stone, NOT limestone), stone tile or slate roof, deep window reveals, country garden, stone walls or hedge boundaries, set in rolling Leicestershire countryside" },
    { id: "leics_loughborough_modern", label: "Modern Loughborough / Hinckley estate", description: "Modern estate house, red or buff brick, tile roof, integrated garage, block driveway, suburban planting, contemporary new-build proportions" },
    { id: "leics_market_town", label: "Hosiery-town Victorian stock (Hinckley / Market Harborough)", description: "Victorian or Edwardian two-storey hosiery-town terrace or semi, red brick with stone detailing, slate roof, period proportions, small front garden, on-street or short driveway" }
  ]
};

// =============================================================================
// SCENE PRESETS
// =============================================================================
export const SCENE_PRESETS = [
  {
    id: "hero",
    label: "Hero product showcase",
    description: "Striking architectural shot designed to make the product the unmistakable subject. The 'magazine cover' of the asset library.",
    intent: "premium architectural photography, product as clear subject, considered composition, balanced light, refined colour, the kind of shot used on the manufacturer's hero brochure page"
  },
  {
    id: "trust",
    label: "Trust / installation",
    description: "Shows the product being expertly fitted by professional installers in branded uniform. Builds credibility and showcases the team.",
    intent: "documentary-style installation photography, installer working with focus and care, product being fitted with precision, real working environment, builds trust through visible craft"
  },
  {
    id: "lifestyle",
    label: "Lifestyle warmth",
    description: "Real domestic life happening in or around the product. Family arrival, kettle on, light pouring through. Sells the feeling of home.",
    intent: "candid lifestyle photography of a moment of arrival or quiet domestic life, action not posed, product is the setting in which life happens, warm and unforced"
  },
  {
    id: "technical",
    label: "Technical detail",
    description: "Close-up or macro shot showing engineering quality — weld bead, seal gasket, hardware mechanism, material texture.",
    intent: "macro or close-up architectural detail photography, showcasing engineering quality, material texture, hardware mechanism, the craft beneath the surface"
  },
  {
    id: "beforeafter",
    label: "Before / after",
    description: "Side-by-side or two-frame story showing the transformation from tired old installation to new product. Generates two prompts.",
    intent: "comparative documentary photography, identical framing and lighting between two states, before frame shows worn but real condition, after frame shows new installation in same context"
  },
  {
    id: "atmospheric",
    label: "Atmospheric mood",
    description: "Cinematic mood piece — blue hour with interior glow, frost morning, light rain. Sells emotion, not just product.",
    intent: "cinematic mood photography, atmospheric weather and light condition, evocative of comfort and warmth (interior glow against cold exterior), light as the primary storyteller"
  }
];

// =============================================================================
// LIGHTING — UK realistic (no golden hour)
// =============================================================================
export const LIGHTING_OPTIONS = [
  { id: "overcast_soft", label: "Overcast soft (default)", description: "soft overcast UK daylight with no harsh shadows, even illumination, the most common UK condition and most flattering for architecture" },
  { id: "bright_overcast", label: "Bright overcast", description: "bright overcast diffused daylight, high luminance with no direct sun, no harsh shadows, very even" },
  { id: "light_rain", label: "Light rain / wet pavement", description: "light rain falling, wet tarmac and surfaces with subtle reflections, softly diffused daylight, fresh atmosphere" },
  { id: "heavy_rain", label: "Heavy rain / moody", description: "heavy rain falling visibly, wet surfaces with strong reflections, low-light moody overcast, rich saturated colour" },
  { id: "frost_morning", label: "Frost morning / cold crisp", description: "frosted lawn and surfaces in early morning, crisp cold light, breath-mist atmosphere, delicate sparkle on textures" },
  { id: "misty_morning", label: "Misty morning", description: "soft mist diffusing depth, atmospheric fade in the background, cool colour temperature, quiet stillness" },
  { id: "clear_blue_sky", label: "Clear blue sky (sparingly)", description: "clear blue sky with high direct sun used sparingly, soft secondary fill, avoid harsh midday shadows by choosing earlier or later in the day" },
  { id: "late_afternoon_soft", label: "Late afternoon soft (not golden hour)", description: "lower-angle daylight in late afternoon with soft warm cast but not golden-hour cliché, gentle directional light, naturalistic" },
  { id: "blue_hour", label: "Blue hour exterior", description: "twenty minutes after sunset, deep blue sky transitioning, warm interior lights glowing through windows from inside, signature warmth-vs-cold contrast" },
  { id: "dusk_interior_lit", label: "Dusk with interior lights on", description: "dusk transition with warm interior lighting visible through windows, sells the comfort and warmth narrative" },
  { id: "night_glow", label: "Night with interior glow", description: "deep night exterior, warm interior lights illuminating from within, windows as glowing focal points against dark facade" }
];

// =============================================================================
// WEATHER & GROUND CONDITIONS (separate from lighting)
// =============================================================================
export const GROUND_CONDITIONS = [
  { id: "dry", label: "Dry (default)", description: "dry surfaces, neutral conditions" },
  { id: "wet_after_rain", label: "Wet driveway / pavement after rain", description: "freshly rained surfaces with subtle reflections, slightly darker tarmac, drips on edges" },
  { id: "autumn_leaves", label: "Autumn leaves on path", description: "scattered fallen leaves on path and lawn, autumn colour, naturalistic seasonal detail" },
  { id: "frost_lawn", label: "Frost on lawn", description: "frosted grass and edges, sparkle in low light, cold morning atmosphere" },
  { id: "summer_dry", label: "Dry summer grass", description: "summer-dry lawn with slight golden tinge to grass, warm dry surfaces" },
  { id: "freshly_mown", label: "Freshly mown lawn", description: "neatly cut lawn with mower lines visible, well-maintained garden, summer or late spring" },
  { id: "snow_dusting", label: "Light snow dusting", description: "light dusting of snow on surfaces, cold winter morning, quiet atmosphere" }
];

export const SEASONS = [
  { id: "spring", label: "Spring", description: "fresh green growth, blossom on trees, daffodils or tulips in borders, new leaves emerging" },
  { id: "summer", label: "Summer", description: "full green foliage, summer flowers in bloom, mature lawn, rich vegetation" },
  { id: "autumn", label: "Autumn", description: "autumn colour in trees, fallen leaves, late seasonal flowers, warm orange-brown palette" },
  { id: "winter", label: "Winter", description: "bare deciduous trees, evergreen accents, dormant garden, cool palette" }
];

// =============================================================================
// PEOPLE
// =============================================================================
export const PEOPLE_TYPES = [
  { id: "none", label: "No people (default)" },
  { id: "homeowner_solo", label: "Single homeowner" },
  { id: "homeowner_couple", label: "Homeowner couple" },
  { id: "homeowner_family", label: "Homeowner family" },
  { id: "older_homeowner", label: "Older homeowner (retiree)" },
  { id: "installer", label: "Installer (work scene)" },
  { id: "installer_with_homeowner", label: "Installer with homeowner (handover/consultation)" }
];

export const ETHNICITY_DEFAULTS = [
  { id: "white_british", label: "White British" },
  { id: "british_south_asian", label: "British South Asian (Leicester / Bedford / Northampton appropriate)" },
  { id: "british_black", label: "British Black" },
  { id: "british_mixed", label: "British of mixed heritage" },
  { id: "varied", label: "Varied (mixed in same shot or across asset set)" }
];

// Anti-uncanny-valley scaffolding for people prompts
export const PEOPLE_REALISM_SCAFFOLD = "natural candid expression, hands relaxed and not central to frame, holding objects from the side rather than front-on, photographed in natural unposed moment, slight motion blur on extremities acceptable, preserved skin texture and authentic fine lines and pores, no symmetrical perfect faces, asymmetry encouraged, natural eye direction (not always to camera), age-appropriate weathering and life-evidence in features";

export const DEMOGRAPHIC_MODERNISER = "contemporary British casual or smart-casual wear (jeans, jumpers, Oxford shirts, M&S / Boden / Next aesthetic), modern hairstyles, second or third generation British where applicable, indistinguishable in dress and bearing from any other British family of the same demographic — they are British people first and foremost";

export const CHILDREN_FRAMING = "children shown from behind, in motion blur, partially out of focus in background, or glimpsed in a candid moment — never as primary subject of close-up portrait, ages and proportions naturalistic and unforced";

export const MOBILITY_AID_SCAFFOLD = "mobility aid (lightweight aluminium walking frame with rubber feet and front wheels, NHS-style standard issue) used naturally and unhurriedly, subject moves with calm dignity, not appearing frail or struggling, capable and engaged expression";

export const INSTALLER_DESCRIPTION = "professional installer in navy work polo shirt and dark work trousers, branded subtly, appropriate PPE for the task (knee pads, gloves, glasses if cutting), working with focus and care, hands and tools naturally positioned, real working posture not staged";

// =============================================================================
// LIVED-IN REALISM CATALOGUE — UK domestic detail injectors
// =============================================================================
export const LIVED_IN_DETAILS = {
  // Front of house exterior
  exterior_front: {
    subtle: ["a doormat at the entrance, slightly weathered", "a brass or slate house number with subtle aging", "small potted plant beside the door"],
    moderate: ["a doormat slightly askew", "a wheelie bin tucked beside the porch but not dominating", "a brass house number with subtle weathering", "small potted plant or hanging basket", "ivy creeping along part of the boundary fence"],
    heavy: ["a doormat clearly used", "two wheelie bins (general and recycling) partially visible", "a hose reel mounted on the wall", "a hanging basket with seasonal planting", "ivy on a fence or boundary wall", "a child's scooter leaning against the wall", "moss in a path crack", "a satellite dish on the side wall"]
  },
  // Rear of house exterior / garden
  exterior_rear: {
    subtle: ["a paved patio with a single plant pot", "low maintenance lawn"],
    moderate: ["paved patio with a couple of outdoor chairs", "a clay pot with seasonal planting", "a garden bench against a wall", "a small water feature or bird bath optional"],
    heavy: ["paved patio with outdoor lounge chairs and side table", "garden composter visible at the boundary", "a water butt by the downpipe", "a rotary washing line folded down", "a wooden garden shed at the rear", "bird feeder on a pole", "stone or terracotta planters with established plants"]
  },
  // Kitchen
  kitchen: {
    subtle: ["a kettle on the worktop", "a clean tea towel folded by the sink"],
    moderate: ["a kettle on the worktop", "a ceramic mug beside the kettle", "a fruit bowl with apples and bananas", "a cookbook stand with a book open", "a tea towel hung on the oven handle"],
    heavy: ["a kettle with a faint trail of steam", "two ceramic mugs on the worktop, one half-full", "a fruit bowl, a biscuit tin, a tea caddy", "a cookbook open on a stand", "a tea towel slightly crumpled by the sink", "a vase of fresh flowers on the island", "a child's drawing held by a magnet on the fridge", "a half-eaten loaf of bread on a board"]
  },
  // Living room
  living_room: {
    subtle: ["a throw across an arm of the sofa", "a single book on the coffee table"],
    moderate: ["a throw casually across the sofa", "a couple of books on the coffee table", "a candle in a glass jar", "a houseplant on a stand"],
    heavy: ["a throw rumpled on the sofa as if recently used", "books stacked on the coffee table with one face-down as if mid-read", "a half-finished cup of tea on a side table", "a rug with subtle wear pattern", "a houseplant slightly trailing", "a framed family photo on a shelf (faces not in focus)", "a wood basket near a fireplace if visible"]
  },
  // Bathroom
  bathroom: {
    subtle: ["a single white folded towel", "a plain ceramic soap dish"],
    moderate: ["a folded white cotton towel", "a plain ceramic soap dish", "a small plant on a windowsill", "subtle water droplets on tap surfaces"],
    heavy: ["a folded white cotton towel", "a plain ceramic soap dish with soap", "a small plant on the sill", "water droplets on tap and tile surfaces", "a candle on the bath surround", "a glass of water on a shelf"]
  },
  // Dining room
  dining_room: {
    subtle: ["a vase with a few stems", "a runner across the table"],
    moderate: ["a linen table runner", "a vase of seasonal stems", "two place settings half-laid", "a candle in a holder"],
    heavy: ["a linen runner across the table", "place settings for a meal not yet served", "a vase of seasonal flowers", "candles in holders", "a wine glass beside one place setting", "a casual stack of cloth napkins"]
  },
  // Bedroom
  bedroom: {
    subtle: ["a book on a bedside table", "neatly made bed"],
    moderate: ["a made bed with throw at the foot", "a book on the bedside table", "a lamp", "a small plant"],
    heavy: ["a made bed with a throw casually folded at foot", "a book face-down on the bedside table mid-read", "a glass of water by the bed", "a soft lamp", "a houseplant on a chest of drawers", "a personal item — watch, pair of glasses — on a surface"]
  },
  // Hallway
  hallway: {
    subtle: ["a coat hanging on a hook"],
    moderate: ["coats hanging on hooks", "a pair of shoes neatly placed", "a console table with a vase or photo"],
    heavy: ["several coats on hooks layered as a family does", "a pair of wellies", "a few pairs of shoes lined up", "a console table with a small vase, a key bowl, and a pile of letters", "a runner rug down the hall"]
  },
  // Conservatory interior
  conservatory: {
    subtle: ["a single armchair with a throw"],
    moderate: ["rattan or wicker chairs with cushions", "a small side table with a book", "a couple of plants"],
    heavy: ["rattan armchairs with cushions", "a coffee table with magazines and a teacup", "several houseplants of varied size", "a throw across one chair", "a candle or lantern", "a small rug"]
  }
};

// Animals are NEVER injected unprompted. Only when explicitly toggled on.
export const PETS = [
  { id: "none", label: "No pets (default)" },
  { id: "dog_calm", label: "Dog (calm, lying down or sitting)" },
  { id: "dog_active", label: "Dog (active, in motion blur)" },
  { id: "cat", label: "Cat (sitting or curled)" }
];

// =============================================================================
// CAMERA / FILM STOCK LANGUAGE
// =============================================================================
export const CAMERA_LANGUAGE = {
  exterior_kerb: "shot on Hasselblad medium format with 50mm equivalent, architectural photography style, natural colour, preserved material texture, no oversaturation",
  exterior_detail: "shot on Fuji GFX 100 with 80mm macro, architectural detail photography, real lens characteristics, slight chromatic aberration on highlights, photographed not rendered",
  interior_wide: "shot on Fuji GFX 100 with 24mm wide architectural lens, mild keystone correction, natural colour, preserved interior textures",
  interior_lifestyle: "shot on a 35mm equivalent prime, candid documentary feel, natural skin tones, preserved fabric and wood texture, slight grain like Kodak Portra 400",
  macro_studio: "studio macro photography, ring-light or softbox lighting visible in subtle reflections on surface, micro-dust particles acceptable, photographed not rendered, slight chromatic aberration on highlights, real lens characteristics",
  video_cinematic: "shot on cinema-grade camera with anamorphic lens characteristics, natural colour grade, true skin tones, organic motion, real lens artefacts where appropriate, no over-stabilised drone-look"
};

// =============================================================================
// PLATFORM / ASPECT RATIOS
// =============================================================================
export const PLATFORMS = {
  facebook: {
    label: "Facebook",
    tone: "warm, approachable, family-business credible — matches the brand voice of Authoritative, Approachable, Professional, Trustworthy",
    aspectRatios: {
      image: ["1:1", "4:5"],
      video: ["1:1", "4:5", "9:16"],
      carousel: ["1:1", "4:5"]
    }
  },
  instagram: {
    label: "Instagram",
    tone: "balanced, considered, lifestyle-credible — refined and confident",
    aspectRatios: {
      image: ["1:1", "4:5"],
      video: ["9:16", "4:5"],
      carousel: ["1:1", "4:5"]
    }
  },
  pinterest: {
    label: "Pinterest",
    tone: "editorial-magazine, slightly elevated styling, aspirational without being staged",
    aspectRatios: {
      image: ["2:3", "4:5"],
      video: ["2:3", "9:16"],
      carousel: ["2:3"]
    }
  },
  x: {
    label: "X (Twitter)",
    tone: "documentary, straightforward, news-credibility",
    aspectRatios: {
      image: ["16:9", "1:1"],
      video: ["16:9", "1:1"],
      carousel: ["16:9", "1:1"]
    }
  }
};

// =============================================================================
// ASSET TYPES
// =============================================================================
export const ASSET_TYPES = [
  { id: "image", label: "Single image" },
  { id: "carousel", label: "Carousel (multi-frame)" },
  { id: "video", label: "Video (or Reel / Story)" }
];

// =============================================================================
// MODEL SYNTAX LIBRARY — editable, future-proof.
// Update this when models change syntax.
// =============================================================================
export const MODEL_SYNTAX = {
  midjourney: {
    label: "Midjourney v6.1",
    type: "image",
    promptStyle: "dense_descriptive",
    parameterFormat: "--ar [aspect] --style raw --v 6.1",
    referenceSyntax: "--cref [URL] --cw 100  // for character/composition reference\n--sref [URL] --sw 200  // for style reference",
    negativePromptHandling: "use --no for negative items",
    optimalPromptLength: "120-180 words, dense descriptive stacking",
    notes: "Rewards specific cinematography language (camera, lens, lighting). Strong for cinematic mood and atmosphere. Use --style raw for photographic realism."
  },
  flux: {
    label: "Flux (Pro / Dev)",
    type: "image",
    promptStyle: "structured_natural",
    parameterFormat: "Aspect ratio: [aspect] | Output: photorealistic",
    referenceSyntax: "Reference image: [URL] (Flux supports image-to-image conditioning)",
    negativePromptHandling: "describe avoidances in natural language at end",
    optimalPromptLength: "80-150 words, natural language with structured sections",
    notes: "Excellent for ultra-realistic interiors, atmospheric light, technical detail. Less prone to over-stylisation than Midjourney. Best Open-Source quality."
  },
  nanobanana: {
    label: "Nano Banana (Gemini Image)",
    type: "image",
    promptStyle: "natural_language",
    parameterFormat: "Aspect ratio: [aspect]",
    referenceSyntax: "Provide reference image as input",
    negativePromptHandling: "describe avoidances in natural language",
    optimalPromptLength: "60-120 words, clean natural language",
    notes: "Strong at clean compositions, product showcases, accurate text rendering. Less strong at moody atmospheric interiors with character work — for those prefer Flux or Midjourney."
  },
  veo3: {
    label: "Veo 3 (Google)",
    type: "video",
    promptStyle: "shot_descriptive_concise",
    parameterFormat: "Aspect ratio: [aspect] | Duration: [seconds]s",
    referenceSyntax: "First-frame reference image supported",
    negativePromptHandling: "describe avoidances clearly",
    optimalPromptLength: "50-70 words PER SHOT, concise and specific",
    notes: "Best in 5-8 second clips. Performs better with shot-by-shot prompting than long single prompts. Has guardrails around children — frame from behind, in motion, or background. Includes native audio generation capability."
  },
  kling: {
    label: "Kling AI",
    type: "video",
    promptStyle: "descriptive_with_motion",
    parameterFormat: "Aspect ratio: [aspect] | Duration: [5/10s] | Mode: [Pro/Standard]",
    referenceSyntax: "First-frame and last-frame image references supported",
    negativePromptHandling: "explicit negative prompt field",
    optimalPromptLength: "80-150 words per shot, includes camera motion language",
    notes: "Strong with camera motion language (dolly, tracking, pan). Pro mode better quality. Can use first-and-last-frame references for tightly controlled shots."
  }
};

// =============================================================================
// NEGATIVE PROMPT LIBRARY — UK realism guardrails
// =============================================================================
export const UNIVERSAL_NEGATIVES = "golden hour cliché, oversaturated, plastic-looking, fake CGI render, cartoon, 3D render aesthetic, perfect symmetry, Hollywood lighting, lens flare excess, AI-rendered look";

export const UK_NEGATIVES = "American suburb, American mailbox, fire hydrant, palm trees, stucco walls, adobe houses, left-hand drive vehicles, US power outlets, Big Ben, double-decker buses, London clichés, Mediterranean light, California sun, US street signage";

export const PEOPLE_NEGATIVES = "uncanny valley face, six fingers, distorted hands, fused fingers, plastic skin, perfectly symmetrical face, dead eyes, AI-generated face artefacts, melted features, posed model studio look";

// =============================================================================
// MUSIC LIBRARY for video — search-term based, library-aware
// =============================================================================
export const MUSIC_PRESETS = {
  hero: {
    mood: "warm cinematic build, restrained and confident",
    bpm: "85-95 BPM",
    energy: "steady build through the piece, peak at the reveal moment",
    epidemic: ["architectural reveal warm", "modern home build cinematic", "premium product reveal"],
    artlist: ["confident architectural cinematic", "home reveal warm cinematic"],
    avoid: "epic orchestral stings, pop vocals, electronic dance"
  },
  trust: {
    mood: "confident steady acoustic with light percussion",
    bpm: "90-100 BPM",
    energy: "steady throughout, slight lift toward the reveal",
    epidemic: ["craftsmanship acoustic uplifting", "home renovation warm", "skilled trade documentary"],
    artlist: ["craftsmanship uplifting acoustic", "skilled trade documentary"],
    avoid: "epic cinematic, pop vocals, electronic, anything over 100 BPM"
  },
  lifestyle: {
    mood: "warm acoustic indie folk, fingerpicked guitar",
    bpm: "85-95 BPM",
    energy: "gentle build, sustained warmth",
    epidemic: ["warm acoustic home reveal", "indie folk family uplifting", "domestic warmth acoustic"],
    artlist: ["family lifestyle indie", "home arrival warm"],
    avoid: "epic cinematic, dance, dramatic pop, anything over 100 BPM"
  },
  technical: {
    mood: "minimal tonal texture, considered and modern",
    bpm: "80-100 BPM",
    energy: "even, contemplative",
    epidemic: ["minimal cinematic tech", "engineering precision ambient", "considered modern minimal"],
    artlist: ["minimal tech ambient", "precision modern"],
    avoid: "vocal-heavy, dance, dramatic"
  },
  beforeafter: {
    mood: "transformation arc — neutral tone for before, warm uplift for after",
    bpm: "90-100 BPM",
    energy: "neutral start, clear shift at the reveal moment",
    epidemic: ["transformation home reveal", "before after uplift"],
    artlist: ["renovation transformation"],
    avoid: "epic, dance, pop"
  },
  atmospheric: {
    mood: "ambient cinematic, light piano, sustained pads",
    bpm: "70-85 BPM",
    energy: "sustained quietly through the piece",
    epidemic: ["ambient home cinematic", "warm piano evening", "atmospheric domestic"],
    artlist: ["atmospheric warm piano", "ambient home dusk"],
    avoid: "rhythmic dance, vocals, anything energetic"
  }
};

// =============================================================================
// INTERIOR STYLE SUB-PICKERS
// =============================================================================
export const INTERIOR_STYLES = {
  kitchen: ["Contemporary handleless", "Shaker classic painted", "Industrial / dark with metal", "Country cottage with oak / Belfast sink", "Minimalist Scandi", "Traditional dark wood with AGA"],
  living_room: ["Contemporary neutral", "Period traditional with picture rails", "Mid-century modern", "Coastal / soft natural", "Farmhouse / English country"],
  bathroom: ["Contemporary monochrome", "Classic white traditional", "Spa neutral with stone", "Bold tile feature wall"],
  dining_room: ["Contemporary", "Period formal with picture rails", "Open-plan to kitchen"],
  bedroom: ["Contemporary calm neutrals", "Period feature with original details", "Boutique-hotel style"],
  hallway: ["Tiled period (Victorian / Edwardian)", "Contemporary minimal", "Cottage warm with timber"],
  conservatory: ["Rattan modern", "Classic wicker traditional", "Contemporary garden room"]
};

export const ROOMS = ["Living room", "Kitchen", "Bathroom", "Dining room", "Bedroom", "Hallway", "Conservatory interior", "Orangery", "Stairwell / landing"];

export const SHOT_ANGLES = [
  { id: "eye_level", label: "Eye level", description: "eye-level horizontal, natural human-perspective viewpoint" },
  { id: "low_hero", label: "Low angle hero", description: "slightly low angle looking up, gives stature and presence" },
  { id: "three_quarter", label: "Three-quarter", description: "three-quarter angle showing front and side, dimensional and architectural" },
  { id: "dead_on", label: "Dead-on architectural", description: "perfectly square frontal architectural elevation, formal and clean" },
  { id: "elevated_drone", label: "Elevated / drone", description: "elevated viewpoint as from a low drone, environmental context, no extreme aerial" },
  { id: "interior_outward", label: "Interior looking outward", description: "from inside the room looking out through the window or door, frames the view beyond" },
  { id: "exterior_inward", label: "Exterior looking inward", description: "from outside looking through the glazing into the lit interior, signature warmth-inside shot" }
];

export const COMPOSITIONS = [
  { id: "rule_thirds", label: "Rule of thirds", description: "subject placed on rule-of-thirds intersection, balanced asymmetry" },
  { id: "leading_lines", label: "Leading lines", description: "architectural lines lead eye to subject, dynamic depth" },
  { id: "symmetrical", label: "Symmetrical frontal", description: "perfectly symmetrical centred composition, formal architectural" },
  { id: "negative_space", label: "Negative-space heavy", description: "subject offset with generous negative space, refined and editorial" },
  { id: "tight_crop", label: "Tight crop", description: "subject fills most of the frame, intimate and detailed" },
  { id: "environmental_wide", label: "Environmental wide", description: "subject in context of surroundings, story-telling wide composition" }
];

export const FRAMING_LENS = [
  { id: "wide_24", label: "Wide environmental (24mm)", description: "24mm equivalent wide angle, environmental context" },
  { id: "standard_35", label: "Standard (35mm)", description: "35mm equivalent, natural human-eye perspective" },
  { id: "standard_50", label: "Standard (50mm)", description: "50mm equivalent, natural rendering, classic architectural" },
  { id: "portrait_85", label: "Portrait compression (85mm)", description: "85mm equivalent, compressed perspective, isolates subject" },
  { id: "macro", label: "Macro", description: "macro close-up, extreme detail" },
  { id: "tilt_shift", label: "Tilt-shift architectural", description: "tilt-shift correction for architectural verticals, formal" }
];
