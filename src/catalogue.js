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
    visualDescriptor: "a uPVC window with a sculptured outward-opening casement leaf standing slightly proud of the frame, traditional ovolo profile, subtle weld bead at the corner mitres characteristic of welded uPVC, 70mm outer frame",
    signatureVisualCue: "outward-opening sculptured casement leaf proud of the frame face, period-appropriate proportions, visible welded mitre joints, a side-opening casement not a sliding sash",
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
    visualDescriptor: "a uPVC flush casement window where the opening part sits flush within the frame face replicating traditional timber joinery, slim sightlines, designed to look authentically like painted timber",
    signatureVisualCue: "fully flush exterior face with the opening casement leaf level with the frame, slim sightlines, mechanical-jointed corners possible (no weld bead) for period authenticity, a side-opening casement not a sliding sash",
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
    visualDescriptor: "a uPVC sliding patio door with a slim interlock sightline between panels, large glazed panels, low threshold",
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
    visualDescriptor: "a uPVC French door pair with a flush casement-leaf design matching the Heritage Flush windows, slim sightlines, period-authentic timber-look proportions",
    signatureVisualCue: "matched pair with flush exterior face, dedicated open-out flush French casement leaves",
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
    visualDescriptor: "a uPVC residential entrance door with a reinforced multi-chambered profile, robust slab construction, profile detailing matching the window range",
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
    visualDescriptor: "a slim thermally-broken aluminium window with very narrow sightlines and a powder-coated finish, clean contemporary profile",
    signatureVisualCue: "slim flat-faced aluminium frame with sharp 90-degree machined edges, narrow sightlines that look almost too thin to be uPVC, flush powder-coated surface, contemporary architectural feel, the frame noticeably more slender and precise than a plastic window",
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
    visualDescriptor: "a slim thermally-broken aluminium door matching the Alitherm 400 window sightlines, powder-coated finish, low threshold",
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
  smartHeritageWindow: {
    name: "Smart Alitherm Heritage Window",
    material: "Aluminium",
    type: "window",
    installContext: "exterior",
    visualDescriptor: "a slim aluminium window in the steel-look heritage style, designed to replicate a traditional vintage steel window, ultra-narrow sightlines, very fine slender frame profile, powder-coated finish",
    signatureVisualCue: "very fine ultra-slim steel-look aluminium frame, vintage industrial 'Crittall' steel-window character, much finer and more delicate than a standard casement frame, period-authentic proportions, typically in matt black",
    configurations: [
      "Single fixed light",
      "Single side-hung casement",
      "Single top-hung casement",
      "Tilt-and-turn",
      "Two-light: fixed + side-hung opener",
      "Three-light: fixed + opener + fixed",
      "Multi-pane steel-look grid (2x2)",
      "Multi-pane steel-look grid (3x3)",
      "Multi-pane steel-look grid (tall 1x3)"
    ],
    colours: "smart",
    hardware: ["windowHeritage"],
    glazingBars: ["None", "Slim astragal bars (steel-look)", "Georgian bars", "Margin bars (steel-look)"],
    suitabilityNotes: "Period properties, conservation areas, listed buildings, characterful refurbishments, and contemporary homes wanting the steel-look industrial aesthetic. The aluminium choice when a genuine heritage steel-window look is wanted."
  },
  smartHeritageDoor: {
    name: "Smart Alitherm Heritage Door (entrance / French)",
    material: "Aluminium",
    type: "door",
    installContext: "exterior",
    visualDescriptor: "a slim aluminium door in the steel-look heritage style replicating a traditional vintage steel door, ultra-narrow sightlines matching the Heritage windows, large glazed area, powder-coated finish, low threshold",
    signatureVisualCue: "very fine ultra-slim steel-look aluminium frame matching the Heritage window range, vintage industrial 'Crittall' steel-door character, slim and elegant, typically in matt black",
    configurations: [
      "Single residential door",
      "Single door with steel-look glazing bars",
      "Pair of French doors",
      "Pair of French doors with steel-look glazing bars",
      "Door with single sidelight",
      "Door with two sidelights",
      "Door with toplight"
    ],
    colours: "smart",
    hardware: ["entranceDoor"],
    glazingBars: ["None", "Slim astragal bars (steel-look)", "Georgian bars"],
    suitabilityNotes: "Steel-look heritage entrance and French doors, matched to the Heritage window range. Period properties, conservation projects, and industrial-aesthetic contemporary homes."
  },
  smartAluspace: {
    name: "Smart Aluspace (internal partition)",
    material: "Aluminium",
    type: "internal_screen",
    installContext: "interior",
    visualDescriptor: "a slim aluminium internal glazed screen with a steel-look industrial Crittall aesthetic, ultra-narrow black grid bars dividing the glass into panes",
    signatureVisualCue: "ultra-narrow matt-black aluminium grid bars dividing the glass into equal panes, slim flat steel-look mullions with crisp square edges, industrial-heritage Crittall aesthetic, the bars genuinely thin and precise, dead-matt black powder finish absorbing light with no shine",
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
    visualDescriptor: "premium aluminium entrance door with a flush bonded panel face, contemporary front door aesthetic, bold colour options, integrated handle and hardware design",
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
    visualDescriptor: "a premium aluminium entrance door with a sleek slim profile and designer hardware",
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
    visualDescriptor: "a slim aluminium bi-fold door with very narrow sightlines at the panel junctions, fully glazed clear panels, low threshold, powder-coated finish",
    signatureVisualCue: "ultra-slim flat aluminium frames at the panel junctions, very narrow sightlines maximising glass, sharp machined edges, matt powder-coated surface, expanse of clear glass with thin precise dividing frames, smooth folding action, unmistakably slimmer than uPVC bifolds",
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
    visualDescriptor: "an engineered timber casement window with traditional joinery details, factory-painted or stained finish, period-authentic timber proportions and depth, real visible wood grain",
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
    visualDescriptor: "a traditional vertical sliding sash window in engineered timber, painted or stained finish, period-authentic for Georgian, Regency or Victorian properties, real visible wood grain and depth",
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
    visualDescriptor: "a solid timber entrance door with traditional joinery, factory-painted or stained finish, period-authentic detailing, real visible wood grain",
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
    visualDescriptor: "slim aluminium roof lantern with ultra-narrow sightlines, powder-coated frame, hidden bracket fixings, glass-supported corners with no corner posts, fitted flush into a flat roof with a visible plasterboard reveal at the internal junction",
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
// CONFIGURATION TRANSLATOR
// Converts a configuration choice into explicit, unambiguous VISUAL language for
// the image model, with anti-confusion guardrails (e.g. "casement NOT sash").
// This is the heart of the window-style accuracy fix. Edit the wording freely.
//
// translateConfiguration(configString, product) => a clear sentence describing
// exactly how the unit is divided and how it opens.
// =============================================================================
export function translateConfiguration(cfg, product) {
  if (!cfg) return "";
  const c = cfg.toLowerCase();
  const type = product?.type;

  // ---- VERTICAL SLIDING SASH (Gower sash, and any "x-over-y") ----
  // Only treat as a sliding sash if the product is actually a sash window, OR
  // the string uses the hyphenated "x-over-y" sash notation. A cottage casement
  // described as "2 over 2" (with spaces) is NOT a sliding sash.
  const sashMatch = c.match(/(\d+)\s*-\s*over\s*-\s*(\d+)/);
  const isCottageCasement = c.includes("cottage");
  if ((type === "sash_window" || sashMatch) && !isCottageCasement) {
    if (sashMatch) {
      const top = sashMatch[1], bottom = sashMatch[2];
      const eachPanes = parseInt(top);
      const barNote = eachPanes > 1
        ? `each sash divided by slim glazing bars into ${top} panes over ${bottom} panes (a classic ${top}-over-${bottom} pattern)`
        : `a single pane in each sash (${top} over ${bottom}, no glazing bars)`;
      return `a traditional vertical sliding sash window: two sashes stacked one above the other that slide vertically up and down, ${barNote}, with a horizontal meeting rail across the middle where the two sashes overlap. This is a VERTICAL SLIDING SASH window — it is NOT a side-opening casement and the sashes do not hinge outward`;
    }
    if (c.includes("margin")) {
      return "a vertical sliding sash window with decorative margin glazing bars forming a narrow border of small panes around a larger central pane, two vertically sliding sashes with a horizontal meeting rail. This is a VERTICAL SLIDING SASH, NOT a casement";
    }
    return "a traditional vertical sliding sash window with two vertically sliding sashes and a horizontal meeting rail across the middle. VERTICAL SLIDING SASH, NOT a side-opening casement";
  }

  // ---- BAY WINDOWS ----
  if (c.includes("bay")) {
    const lightMatch = c.match(/(\d+)\s*-?\s*light/);
    const lights = lightMatch ? lightMatch[1] : "three";
    let shape = "projecting outward from the wall with angled side sections";
    if (c.includes("splayed")) shape = "gently splayed outward at shallow angles";
    else if (c.includes("canted")) shape = "canted outward with flat angled side returns";
    else if (c.includes("square")) shape = "a square bay projecting straight out with perpendicular side returns";
    return `a true bay window made up of ${lights} separate window lights set into a structure that projects outward from the face of the building, ${shape}, with its own small roof or sill below, the individual lights wrapping around the bay at angles. A genuine three-dimensional projecting bay, NOT a flat window`;
  }

  // ---- CASEMENT WINDOWS ----
  // Steel-look heritage multi-pane grid (Smart Heritage) — check before plain casement.
  if (c.includes("steel-look grid") || c.includes("multi-pane steel")) {
    const gridMatch = c.match(/(\d+)\s*x\s*(\d+)/);
    const grid = gridMatch ? `a ${gridMatch[1]} by ${gridMatch[2]} grid` : (c.includes("1x3") || c.includes("tall") ? "a tall column of three stacked panes" : "a multi-pane grid");
    return `a steel-look heritage window divided into ${grid} of equal rectangular panes by very slim astragal glazing bars, replicating a vintage steel Crittall window, ultra-fine sightlines, flat in plane. A fixed or casement steel-look grid window, NOT a vertical sliding sash`;
  }
  if (c.includes("flush casement")) {
    return "a flush casement window where the opening leaf sits perfectly flush within the frame (level with the frame face, not standing proud), opening outward on a side hinge, one rectangular pane. A side-opening flush CASEMENT, NOT a vertical sliding sash";
  }
  // Multi-light combinations must be checked BEFORE single side-hung/top-hung,
  // because their strings also contain "side-hung".
  if (c.includes("two-light")) {
    if (c.includes("fixed")) return "two window lights side by side separated by a single vertical mullion: one light is fixed (non-opening) and the other opens outward on a side hinge as a casement. Side-opening casements, NOT sliding sashes";
    return "two casement lights side by side separated by a vertical mullion, each opening outward on a side hinge. Casements, NOT sliding sashes";
  }
  if (c.includes("three-light")) {
    return "three window lights in a row separated by two vertical mullions, typically a wider opening casement in the centre flanked by narrower fixed lights, all opening outward as casements where they open. Casements, NOT sliding sashes";
  }
  if (c.includes("four-light") || c.includes("2 over 2") || c.includes("2-over-2 cottage")) {
    return "a cottage-style casement window of four lights arranged two over two in a grid of separate panes divided by mullions and a transom, opening outward as casements. Casement cottage window, NOT a vertical sliding sash";
  }
  if (c.includes("cottage")) {
    return "a multi-light cottage casement window with several panes divided by glazing bars, opening outward on side hinges. Cottage CASEMENT, NOT a sliding sash";
  }
  if (c.includes("side-hung")) {
    return "a single casement window that opens outward on a side hinge (hinged at one vertical edge like a small door), one rectangular pane, flat in plane. A side-opening CASEMENT — NOT a vertical sliding sash, NOT divided into upper and lower halves";
  }
  if (c.includes("top-hung")) {
    return "a single casement window hinged at the top that opens outward from the bottom edge, one rectangular pane. A top-hung CASEMENT, NOT a sliding sash";
  }
  if (c.includes("tilt-and-turn")) {
    return "a tilt-and-turn window: a single large pane in a frame that can tilt inward at the top or swing inward on a side hinge, modern flush appearance, one clean pane. NOT a sliding sash";
  }
  if (c.includes("fixed light") || c === "single fixed light" || c.includes("picture window")) {
    return "a single fixed (non-opening) window, one large clean rectangular pane of glass with no opening sash, no dividing bars. A fixed picture light";
  }

  // ---- (multi-light combinations handled above, before single-opener checks) ----

  // ---- BIFOLD DOORS ----
  if (type === "bifold") {
    const paneMatch = c.match(/(\d+)\s*-?\s*pane/);
    const panes = paneMatch ? paneMatch[1] : "three";
    let traffic = "";
    if (c.includes("traffic")) traffic = ", one of the panels acting as a single hinged 'traffic' door for everyday use while the rest fold";
    return `a bi-fold door made of ${panes} tall fully-glazed panels that concertina-fold and stack neatly to one side, slim frames between large panes of glass${traffic}, running along a track. A folding glazed door wall`;
  }

  // ---- PATIO / SLIDING DOORS ----
  if (type === "patio_door") {
    const paneMatch = c.match(/(\d+)\s*-?\s*pane/);
    const panes = paneMatch ? paneMatch[1] : "two";
    return `a sliding patio door with ${panes} large glazed panels, where one or more panels slide horizontally past the fixed panels on a track, very slim interlock between panes. A horizontally SLIDING door, NOT folding, NOT hinged`;
  }

  // ---- INTERNAL SCREENS (Aluspace / Crittall-style) ----
  if (type === "internal_screen") {
    if (c.includes("grid")) {
      const gridMatch = c.match(/(\d+)\s*x\s*(\d+)/);
      const grid = gridMatch ? `${gridMatch[1]} by ${gridMatch[2]}` : "multi-pane";
      return `an internal glazed screen divided into a ${grid} grid of equal rectangular panes by slim black grid bars, Crittall-style industrial aesthetic, fixed screen`;
    }
    if (c.includes("door")) {
      return "an internal glazed screen with slim black grid bars incorporating a glazed door within the screen, Crittall-style industrial aesthetic";
    }
    return "an internal glazed screen with slim black Crittall-style grid bars dividing the glass into equal panes";
  }

  // ---- ROOF LANTERN ----
  if (type === "roof_lantern") {
    if (c.includes("pyramid")) return "a pyramid-shaped roof lantern with four triangular glazed slopes meeting at a central apex point, slim frame bars (rafters) running up to the peak";
    const rafterMatch = c.match(/(\d+)\s*-?\s*rafter/);
    const rafters = rafterMatch ? rafterMatch[1] : "four";
    return `a rectangular roof lantern with a ridge along the top and ${rafters} slim glazing bars (rafters) sloping down from the ridge to the perimeter frame, glazed roof structure rising above the flat roofline`;
  }

  // ---- DOORS (entrance / French / composite / timber) ----
  if (type === "door" || type === "french_door" || c.includes("door")) {
    let base = "";
    if (c.includes("french") || c.includes("pair")) {
      base = "a pair of doors that open as a matched double set (French doors), each leaf glazed or panelled to match";
    } else if (c.includes("stable")) {
      base = "a stable door split horizontally across the middle so the top half can open independently of the bottom half";
    } else if (c.includes("fully-glazed") || c.includes("full vertical")) {
      base = "a single door with a large full-height glazed panel";
    } else if (c.includes("half-glazed") || c.includes("small")) {
      base = "a single door with a glazed panel in the upper portion and a solid panel below";
    } else if (c.includes("solid") || c.includes("panel")) {
      base = "a single solid panelled door with no glazing";
      if (c.includes("4-panel")) base = "a single door with a traditional four-panel arrangement, solid";
      if (c.includes("6-panel")) base = "a single door with a traditional six-panel arrangement, solid";
    } else {
      base = "a single entrance door";
    }
    // sidelights / toplights
    const extras = [];
    if (c.includes("two sidelight")) extras.push("a fixed glazed sidelight panel on each side of the door");
    else if (c.includes("single sidelight") || c.includes("with sidelight")) extras.push("a fixed glazed sidelight panel to one side of the door");
    if (c.includes("toplight")) extras.push("a fixed glazed toplight (transom panel) across the top above the door");
    if (extras.length) base += ", with " + extras.join(" and ");
    // Steel-look heritage glazing bars on the glazed area
    if (c.includes("steel-look glazing bars") || c.includes("steel-look")) {
      base += ", the glazed area divided by very slim astragal glazing bars in a vintage steel-look Crittall style";
    }
    return base;
  }

  // ---- FALLBACK ----
  return cfg;
}

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
// HOUSING STOCK CATALOGUE — by service-area CITY
// IMPORTANT: descriptions deliberately describe WALLS, ROOF, PROPORTIONS and
// SETTING only — NOT window style. Window/door style always comes from the
// chosen product, so the house description must never mention sashes, bays,
// casements etc. or it will fight the product on full-house views.
// Each city keeps its authentic local building material for realism.
// =============================================================================
export const HOUSING_STOCK = {
  cambridge: [
    { id: "cam_victorian_terrace", label: "Victorian terrace", description: "a two-storey Victorian terraced house in gault (pale yellow-cream) Cambridge brick, slate roof, two storeys, modest proportions, a small front garden behind a low brick wall or iron railing, mature street trees on a quiet residential road" },
    { id: "cam_edwardian_semi", label: "Edwardian semi-detached", description: "a two-storey Edwardian semi-detached house in yellow-cream Cambridge brick with some red-brick detailing, slate roof, generous proportions, a low front wall and short tiled path, leafy established street" },
    { id: "cam_college_townhouse", label: "College-quarter townhouse", description: "an elegant three-storey city townhouse in painted render or pale yellow brick, period proportions, set on a quiet conservation street with mature street trees and a hint of a walled garden" },
    { id: "cam_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with painted render or pebbledash above, hipped tiled roof, a modest front garden with a low wall and a driveway, mature suburban planting" },
    { id: "cam_newbuild", label: "Modern new-build (Eddington / Trumpington)", description: "a modern new-build house in pale buff brick with some timber or render cladding panels, tiled roof, clean contemporary proportions, an integrated garage and block-paved driveway, newly landscaped front garden" }
  ],
  peterborough: [
    { id: "pboro_victorian_terrace", label: "Victorian terrace", description: "a two-storey Victorian terraced house in warm red brick, slate roof, two storeys, a small front yard behind a low wall, on-street parking, mature street trees typical of inner Peterborough" },
    { id: "pboro_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with render or pebbledash above, hipped tiled roof, a modest front garden, low wall and driveway, established suburban street" },
    { id: "pboro_stone_village", label: "Limestone village house (Barnack / Castor)", description: "a village house in honey-coloured local limestone (pale Lincolnshire-edge limestone, NOT orange ironstone), stone-tile or slate roof, deep window reveals showing the thickness of the stone walls, cottage proportions, a country garden behind a low stone wall" },
    { id: "pboro_newbuild", label: "Modern new-build (Hampton / Paston)", description: "a modern new-build estate house in red or buff brick with some cladding panels, tiled roof, contemporary proportions, integrated garage and block-paved driveway, small newly planted front garden" },
    { id: "pboro_fenland_farmhouse", label: "Fenland farmhouse", description: "a Fenland farmhouse in red or buff brick, pantile or slate roof, generous symmetrical proportions, set in flat open agricultural landscape with big open sky, mature trees and a gravel approach" }
  ],
  northampton: [
    { id: "ntn_ironstone_village", label: "Ironstone village house", description: "a village house in characteristic warm orange-brown Northamptonshire ironstone (NOT yellow Cotswold, NOT grey limestone), stone or slate roof, deep stone-surrounded openings, cottage proportions, a mature country garden with stone walls" },
    { id: "ntn_red_brick_terrace", label: "Red brick Victorian terrace", description: "a two-storey red brick Victorian terraced house, slate roof, a small front yard, on-street parking, mature street trees, a town residential setting" },
    { id: "ntn_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with render or pebbledash above, hipped tiled roof, a modest front garden with a low wall and driveway, mature suburban planting" },
    { id: "ntn_newbuild", label: "Modern new-build (Upton / Wootton)", description: "a modern new-build estate house in red or buff brick with cladding panels, tiled roof, contemporary proportions, integrated garage, block-paved driveway and a small landscaped front garden" }
  ],
  lincoln: [
    { id: "lin_limestone_village", label: "Limestone village / cathedral-quarter house", description: "a house in honey-coloured Lincolnshire limestone (pale honey, NOT orange ironstone, NOT Cotswold yellow), stone-tile or slate roof, deep window reveals showing the thickness of the stone walls, period proportions, set on a characterful street or in a country garden behind a low stone wall" },
    { id: "lin_red_brick_terrace", label: "Red brick Victorian terrace", description: "a two-storey red brick Victorian terraced house, slate roof, a small front yard, on-street parking, period character, mature street trees" },
    { id: "lin_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with render or pebbledash above, hipped tiled roof, a modest front garden, low wall and driveway, established suburban street" },
    { id: "lin_newbuild", label: "Modern new-build", description: "a modern new-build estate house in red or buff brick with cladding panels, tiled roof, contemporary proportions, integrated garage and block-paved driveway, newly planted front garden" }
  ],
  bedford: [
    { id: "bed_edwardian_terrace", label: "Edwardian terrace", description: "a two-storey Edwardian terraced house in red brick with cream stone detailing, slate or tiled roof, a small front yard behind a low wall, on-street parking, mature street trees" },
    { id: "bed_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with painted render or pebbledash above, hipped tiled roof, a modest front garden with a low brick wall and driveway, mature suburban planting" },
    { id: "bed_market_town", label: "Market-town house (Ampthill / Woburn area)", description: "a two-storey market-town house in a mix of red brick or painted render, tiled or slate roof, Georgian-influenced symmetrical proportions, set on a characterful street or mews approach" },
    { id: "bed_newbuild", label: "Modern new-build (Wixams / Marston Vale)", description: "a modern new-build estate house in red or buff brick with some cladding panels, tiled roof, contemporary proportions, integrated garage and block-paved driveway, small newly planted front garden" }
  ],
  kettering: [
    { id: "ket_ironstone_village", label: "Ironstone village house", description: "a village house in characteristic warm orange-brown Northamptonshire ironstone (NOT yellow Cotswold, NOT grey limestone), stone or slate roof, deep stone-surrounded openings, cottage proportions, a mature country garden with stone walls" },
    { id: "ket_red_brick_terrace", label: "Red brick Victorian terrace", description: "a two-storey red brick Victorian terraced house, slate roof, a small front yard, on-street parking, mature street trees, a hosiery-town residential setting" },
    { id: "ket_1930s_semi", label: "1930s suburban semi", description: "a 1930s suburban semi-detached house, red brick to the ground floor with render or pebbledash above, hipped tiled roof, a modest front garden with a low wall and driveway, mature suburban planting" },
    { id: "ket_newbuild", label: "Modern new-build", description: "a modern new-build estate house in red or buff brick with cladding panels, tiled roof, contemporary proportions, integrated garage, block-paved driveway and a small landscaped front garden" }
  ]
};


// =============================================================================
// ELEVATION LAYOUT SUGGESTIONS
// Curated, relevant "elevation make-up" options for full-house views.
// Keyed by house archetype (derived from housing id) + product type + front/rear.
// The prompt engine applies the chosen product to all listed openings, so these
// describe the OTHER openings on the elevation, not the product spec itself.
// =============================================================================

// Map each housing stock id to a broad archetype so suggestions stay maintainable.
export function houseArchetype(housingId = "") {
  if (/newbuild|modern|estate/i.test(housingId)) return "newbuild";
  if (/farmhouse/i.test(housingId)) return "farmhouse";
  if (/ironstone|limestone|stone_village|granite/i.test(housingId)) return "village_stone";
  if (/townhouse|college/i.test(housingId)) return "townhouse";
  if (/market_town/i.test(housingId)) return "market_town";
  if (/terrace/i.test(housingId)) return "terrace_period";
  if (/semi/i.test(housingId)) return "semi";
  return "semi";
}

// Broad product family for suggestion relevance.
export function productFamilyForSuggestions(product) {
  if (!product) return "window";
  if (product.type === "sash_window") return "sash";
  if (product.type === "bifold" || product.type === "patio_door") return "glazed_rear";
  if (product.type === "french_door") return "french";
  if (["door"].includes(product.type)) return "door";
  if (product.type === "roof_lantern" || product.type === "internal_screen") return "na";
  return "window"; // casement / flush / aluminium windows
}

// The suggestion library. [archetype][front|rear] => array of layout strings.
// These describe a coherent elevation; the engine forces them all to be the
// chosen product. Kept generic enough to suit any colour/material.
export const ELEVATION_SUGGESTIONS = {
  semi: {
    front: [
      "a splayed bay window to the ground-floor front room, two windows side by side on the first floor above",
      "a bay window beside the front door on the ground floor, two windows above on the first floor",
      "a large ground-floor front window and two smaller windows on the first floor, arranged symmetrically",
      "a bay window to the ground floor, a single window above, and a small window to the landing"
    ],
    rear: [
      "a kitchen window and a larger living-room window on the ground floor, two bedroom windows above",
      "a set of patio or French doors to the garden flanked by a window, two windows on the first floor above",
      "a large ground-floor rear window beside the back door, two evenly spaced windows on the first floor"
    ]
  },
  terrace_period: {
    front: [
      "a bay window to the ground-floor front room and a single window directly above on the first floor",
      "a flat front with one window on the ground floor beside the front door and one window above",
      "a ground-floor bay window, a first-floor window above, period proportions, aligned vertically"
    ],
    rear: [
      "a window to the ground-floor kitchen and a window above to the rear bedroom, modest rear yard",
      "a set of French doors to the rear yard with a window beside, one window on the first floor above"
    ]
  },
  townhouse: {
    front: [
      "three storeys of vertically aligned windows, two per floor, even Georgian-style proportions",
      "a front door with a window to one side on the ground floor, two windows on each upper floor aligned vertically"
    ],
    rear: [
      "tall vertically aligned rear windows over three storeys, two per floor, with garden doors at ground level"
    ]
  },
  newbuild: {
    front: [
      "a large ground-floor living-room window beside the front door, two bedroom windows on the first floor, integrated garage to the side",
      "a tall ground-floor window and two first-floor windows in clean contemporary proportions, block-paved drive",
      "a ground-floor picture window beside the entrance, two evenly spaced windows above, modern symmetrical layout"
    ],
    rear: [
      "wide bifold or sliding doors opening to the garden on the ground floor, two windows on the first floor above",
      "a large expanse of glazed doors to the rear with a window beside, two contemporary windows on the first floor",
      "full-width glazing to the kitchen-diner extension, two bedroom windows on the first floor above"
    ]
  },
  farmhouse: {
    front: [
      "a symmetrical farmhouse front, two windows either side of a central door on the ground floor, three windows on the first floor",
      "evenly spaced windows in deep reveals, two flanking the central front door, matching windows above"
    ],
    rear: [
      "generous rear windows and a set of garden doors, two windows on the first floor above, set in open landscape"
    ]
  },
  village_stone: {
    front: [
      "windows set in deep stone reveals, two on the ground floor either side of the door, two aligned above, cottage proportions",
      "a symmetrical stone cottage front, a window each side of the front door, matching windows on the first floor"
    ],
    rear: [
      "stone-reveal rear windows with garden doors, two smaller windows on the first floor above"
    ]
  },
  market_town: {
    front: [
      "Georgian-influenced symmetry, a window each side of the central front door, three aligned windows on the first floor",
      "a bay window to the ground floor with aligned windows above, period market-town proportions"
    ],
    rear: [
      "rear windows to kitchen and living room with garden doors between, two windows on the first floor above"
    ]
  }
};

// Returns an array of relevant elevation-layout suggestion strings for the
// current product + house + front/rear selection. Empty if not applicable.
export function getElevationSuggestions(product, housingId, exteriorAspect) {
  if (!product) return [];
  const family = productFamilyForSuggestions(product);
  if (family === "na") return []; // roof lantern / internal screen: not applicable
  const archetype = houseArchetype(housingId);
  const side = (exteriorAspect === "rear_full") ? "rear" : "front";
  const byArchetype = ELEVATION_SUGGESTIONS[archetype] || ELEVATION_SUGGESTIONS.semi;
  let list = byArchetype[side] || [];

  // For rear-glazing products (bifolds, patio doors) on a front view, fall back
  // to rear-style options which feature the large glazed openings they suit.
  if (family === "glazed_rear" && side === "front") {
    list = byArchetype.rear || list;
  }
  return list;
}


export const SCENE_PRESETS = [
  {
    id: "hero",
    label: "Hero product showcase",
    description: "Striking architectural shot designed to make the product the unmistakable subject. The 'magazine cover' of the asset library.",
    intent: "premium architectural photography, product as clear subject, considered composition, balanced light, refined colour, the kind of shot used on the manufacturer's hero brochure page"
  },
  {
    id: "trust",
    label: "Freshly installed / completed",
    description: "A just-completed, spotless installation — the product newly fitted and pristine, conveying quality workmanship without showing people.",
    intent: "documentary-style photograph of a freshly completed installation, the product newly fitted and immaculate, clean crisp sealant lines and tidy reveals, a sense of quality workmanship just finished, no people present"
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
// Master list of every aspect ratio the tool offers, with a plain-English note
// of what each is typically used for. The order here is the global fallback order.
export const ASPECT_RATIOS = [
  { id: "1:1", label: "1:1 — Square", note: "Square. Universal, safe on every platform and feed." },
  { id: "4:5", label: "4:5 — Portrait (feed)", note: "Tall portrait. Best-performing size for Instagram/Facebook feed photos." },
  { id: "9:16", label: "9:16 — Vertical (Story/Reel)", note: "Full-height vertical for Stories, Reels, TikTok and Shorts." },
  { id: "2:3", label: "2:3 — Portrait (photo)", note: "Classic portrait photo ratio, strong on Pinterest." },
  { id: "3:4", label: "3:4 — Portrait (standard)", note: "Standard portrait, slightly less tall than 4:5." },
  { id: "16:9", label: "16:9 — Widescreen", note: "Widescreen landscape for websites, YouTube and presentations." },
  { id: "3:2", label: "3:2 — Landscape (photo)", note: "Classic landscape photo ratio (35mm camera proportions)." },
  { id: "4:3", label: "4:3 — Landscape (standard)", note: "Standard landscape, good for galleries and brochures." },
  { id: "21:9", label: "21:9 — Ultra-wide / cinematic", note: "Very wide cinematic banner, hero strips and letterbox shots." }
];

// Helper: given a platform's preferred ratios, return them first, then every
// other ratio after — so the recommended default auto-selects but the full set
// is always available to pick from.
function withAllRatios(preferred = []) {
  const all = ASPECT_RATIOS.map(r => r.id);
  const rest = all.filter(id => !preferred.includes(id));
  return [...preferred, ...rest];
}

export const PLATFORMS = {
  facebook: {
    label: "Facebook",
    tone: "warm, approachable, family-business credible — matches the brand voice of Authoritative, Approachable, Professional, Trustworthy",
    aspectRatios: {
      image: withAllRatios(["1:1", "4:5"]),
      video: withAllRatios(["1:1", "4:5", "9:16"]),
      carousel: withAllRatios(["1:1", "4:5"])
    }
  },
  instagram: {
    label: "Instagram",
    tone: "balanced, considered, lifestyle-credible — refined and confident",
    aspectRatios: {
      image: withAllRatios(["4:5", "1:1"]),
      video: withAllRatios(["9:16", "4:5"]),
      carousel: withAllRatios(["1:1", "4:5"])
    }
  },
  pinterest: {
    label: "Pinterest",
    tone: "editorial-magazine, slightly elevated styling, aspirational without being staged",
    aspectRatios: {
      image: withAllRatios(["2:3", "4:5"]),
      video: withAllRatios(["2:3", "9:16"]),
      carousel: withAllRatios(["2:3"])
    }
  },
  x: {
    label: "X (Twitter)",
    tone: "documentary, straightforward, news-credibility",
    aspectRatios: {
      image: withAllRatios(["16:9", "1:1"]),
      video: withAllRatios(["16:9", "1:1"]),
      carousel: withAllRatios(["16:9", "1:1"])
    }
  },
  website: {
    label: "Website / general",
    tone: "clean, professional, brochure-quality — suitable for the company website, brochures and general use",
    aspectRatios: {
      image: withAllRatios(["16:9", "3:2", "4:3", "1:1"]),
      video: withAllRatios(["16:9", "1:1"]),
      carousel: withAllRatios(["16:9", "4:5", "1:1"])
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
    label: "Nano Banana 2 (Gemini Image)",
    type: "image",
    promptStyle: "natural_language",
    parameterFormat: "Aspect ratio: [aspect]",
    referenceSyntax: "Provide reference image as input (supports up to 14 reference images)",
    negativePromptHandling: "use POSITIVE framing — describe what you want, not what to avoid (Google official guidance). This tool folds preferences into the main prompt automatically.",
    optimalPromptLength: "detailed is good — the model follows long, stacked prompts well and has a large context window; no need to simplify",
    notes: "Per Google's official guide: use positive framing (e.g. 'flat matt powder-coated frame' rather than 'no chrome'), control the camera with photographic terms, and emphasise materiality and texture. Strong at clean compositions, product showcases, and accurate text. For moody atmospheric interiors, Flux or Midjourney can still edge it."
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
// MATERIAL REALISM — appearance language that tells the model how each material
// actually behaves with light. Injected automatically by the prompt engine based
// on product.material. Keep these visual, not technical.
// =============================================================================
export const ALUMINIUM_REALISM = {
  // General surface character of architectural aluminium, true to real installs.
  base: "real architectural aluminium with the characteristic flat, even, non-reflective surface of polyester powder-coating, fine micro-texture catching soft diffuse light rather than mirror reflections, crisp precisely-machined square-edged profiles with clean mitred corners and no visible welds, slim frame sightlines, subtle hairline shadow gaps between the opening part and the outer frame, factory-finished consistency, the unmistakable look of quality powder-coated metal not plastic and not chrome",
  // Finish-specific surface behaviour, keyed to the colour's `finish` string.
  finishes: {
    "matt powder": "dead-matt powder-coat finish that absorbs light with a soft velvety sheen, no gloss, no reflections, even uniform colour across the whole profile",
    "gloss powder": "semi-gloss powder-coat finish with a smooth subtle sheen, gentle soft highlight along the edges of the profile, not mirror-like, not wet-looking",
    "fine texture powder": "fine-textured powder-coat finish with a barely-perceptible orange-peel micro-texture, matt, tactile, light scattering softly across the surface",
    "metallic powder": "metallic powder-coat finish with fine suspended metallic flake giving subtle depth and a soft directional shimmer in raking light, still matt overall, never chrome or polished"
  }
};

// Negatives specific to aluminium so the model avoids the common failure modes.
export const ALUMINIUM_NEGATIVES = "chrome frames, mirror-polished metal, shiny silver metallic frames, reflective metal, plastic-looking frames, uPVC chunky profiles, bulky thick frames, glossy wet-looking surface, brushed stainless steel look, bare unfinished aluminium, visible weld beads on aluminium, rounded soft profile edges";

// =============================================================================
// NEGATIVE PROMPT LIBRARY (continued)
// =============================================================================

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

// Options for "what's visible outside" when shooting from inside looking out.
export const EXTERIOR_VIEW_OPTIONS = [
  { id: "", label: "— Not visible / leave blank —", description: "" },
  { id: "rear_garden_patio", label: "Rear garden with patio and lawn", description: "a typical UK rear garden visible beyond, with a paved patio, a neat lawn, planted borders and a fence or hedge boundary, soft daylight" },
  { id: "rear_garden_mature", label: "Mature landscaped garden", description: "a mature, well-planted UK garden beyond, established shrubs and trees, a paved or decked area, a sense of privacy and greenery" },
  { id: "suburban_street", label: "Suburban street", description: "a quiet UK suburban street visible beyond, with neighbouring houses, parked cars and street trees softly out of focus" },
  { id: "countryside", label: "Open countryside / fields", description: "open British countryside beyond, green fields, hedgerows and distant trees under a soft overcast sky" },
  { id: "courtyard", label: "Courtyard / small paved yard", description: "a small enclosed paved courtyard or yard beyond, with potted plants and a boundary wall" },
  { id: "blurred_greenery", label: "Soft blurred greenery", description: "soft, gently out-of-focus greenery and daylight beyond the glass, no specific detail, keeping focus on the interior" }
];

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
