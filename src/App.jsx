import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  PRODUCTS,
  COLOUR_SETS,
  HARDWARE,
  HOUSING_STOCK,
  SCENE_PRESETS,
  LIGHTING_OPTIONS,
  GROUND_CONDITIONS,
  SEASONS,
  PETS,
  PLATFORMS,
  ASPECT_RATIOS,
  ASSET_TYPES,
  MODEL_SYNTAX,
  CAMERA_LANGUAGE,
  COMPDOOR_STYLES,
  COMPDOOR_GLASS,
  INTERIOR_STYLES,
  ROOMS,
  EXTERIOR_VIEW_OPTIONS,
  SHOT_ANGLES,
  COMPOSITIONS,
  FRAMING_LENS,
  getElevationSuggestions
} from "./catalogue.js";
import { buildPrompt, buildVariations, buildCarousel, buildVideoShotList, frontSettingIndexForSeed, frontSettingCount, interiorSignatureForSeed, interiorFurnitureIndexForSeed, interiorFurnitureCount, roomKeyForDisplay } from "./promptEngine.js";

// =========================================================================
// Helpers
// =========================================================================
const COUNTIES = [
  { id: "cambridge", label: "Cambridge" },
  { id: "peterborough", label: "Peterborough" },
  { id: "northampton", label: "Northampton" },
  { id: "lincoln", label: "Lincoln" },
  { id: "bedford", label: "Bedford" },
  { id: "kettering", label: "Kettering" }
];

const SHOOT_LOCATIONS = [
  { id: "exterior", label: "External" },
  { id: "interior", label: "Internal — within a room" },
  { id: "internal_partition", label: "Internal partition / room divider" }
];

const EXTERIOR_ASPECTS = [
  { id: "front_full", label: "Front — full view of the house" },
  { id: "front_partial", label: "Front — partial, focused on product" },
  { id: "rear_full", label: "Rear — full view" },
  { id: "rear_partial", label: "Rear — partial, focused on product" }
];

const LIVED_IN_LEVELS = [
  { id: "none", label: "None — clean studio" },
  { id: "subtle", label: "Subtle" },
  { id: "moderate", label: "Moderate" },
  { id: "heavy", label: "Heavy — fully lived-in" }
];

// Models filtered by asset type
function getAvailableModels(assetType) {
  if (assetType === "video") {
    return [
      { id: "veo3", ...MODEL_SYNTAX.veo3 },
      { id: "kling", ...MODEL_SYNTAX.kling }
    ];
  }
  return [
    { id: "midjourney", ...MODEL_SYNTAX.midjourney },
    { id: "flux", ...MODEL_SYNTAX.flux },
    { id: "nanobanana", ...MODEL_SYNTAX.nanobanana }
  ];
}

// =========================================================================
// App
// =========================================================================
export default function App() {
  // ---------- Brief state ----------
  const [productId, setProductId] = useState("decHeritageFlush");
  const [configuration, setConfiguration] = useState("");
  const [colourName, setColourName] = useState("");
  const [glazingBars, setGlazingBars] = useState("None");
  const [glassType, setGlassType] = useState("");
  const [compdoorStyle, setCompdoorStyle] = useState("");
  const [compdoorGlass, setCompdoorGlass] = useState("");
  const [hardware, setHardware] = useState({});

  const [shootLocation, setShootLocation] = useState("exterior");
  const [exteriorAspect, setExteriorAspect] = useState("front_full");
  const [elevationLayout, setElevationLayout] = useState("");
  const [room, setRoom] = useState("Kitchen");
  const [interiorStyle, setInteriorStyle] = useState("");
  const [exteriorVisible, setExteriorVisible] = useState("");
  const [partitionRooms, setPartitionRooms] = useState("");

  const [county, setCounty] = useState("cambridge");
  const [housingId, setHousingId] = useState("");

  const [scenePresetId, setScenePresetId] = useState("hero");
  const [shotAngleId, setShotAngleId] = useState("three_quarter");
  const [compositionId, setCompositionId] = useState("rule_thirds");
  const [framingId, setFramingId] = useState("standard_50");
  const [lightingId, setLightingId] = useState("overcast_soft");
  const [groundId, setGroundId] = useState("dry");
  const [seasonId, setSeasonId] = useState("spring");

  const [pets, setPets] = useState("none");

  const [livedInLevel, setLivedInLevel] = useState("moderate");
  const [technicalIsolation, setTechnicalIsolation] = useState(false);

  const [platform, setPlatform] = useState("instagram");
  const [assetType, setAssetType] = useState("image");
  const [aspectRatio, setAspectRatio] = useState("4:5");
  const [targetModel, setTargetModel] = useState("midjourney");
  const [duration, setDuration] = useState(8);
  const [carouselFrames, setCarouselFrames] = useState(5);

  const [referenceImage, setReferenceImage] = useState("");
  const [referenceUpload, setReferenceUpload] = useState(null); // { name, dataUrl }

  // ---------- Output state ----------
  const [output, setOutput] = useState(null);
  // Remembers recently-used full-front setting indices so consecutive
  // generations don't reuse the same frontage. Holds up to half the list.
  const recentFrontSettings = useRef([]);
  // Remembers recently-used interior scenery signatures, keyed by room, so the
  // same walls/floor/furniture combination isn't repeated on consecutive
  // generations of the same room.
  const recentInteriors = useRef({});
  const [activeFrameTab, setActiveFrameTab] = useState(0);

  // ---------- Derived state ----------
  const product = PRODUCTS[productId];
  const colourSet = product ? COLOUR_SETS[product.colours] || [] : [];
  const housingList = HOUSING_STOCK[county] || [];
  const availableModels = getAvailableModels(assetType);
  const hardwareSchema = product?.hardware?.[0] ? HARDWARE[product.hardware[0]] : null;
  const platformAspectRatios = PLATFORMS[platform]?.aspectRatios?.[
    assetType === "carousel" ? "carousel" : assetType === "video" ? "video" : "image"
  ] || ["4:5"];

  // Auto-correct invalid combos
  useEffect(() => {
    // Reset configuration when product changes
    if (product?.configurations?.length && !product.configurations.includes(configuration)) {
      setConfiguration(product.configurations[0]);
    }
    // Reset colour when product changes
    if (colourSet.length && !colourSet.find(c => c.name === colourName)) {
      setColourName(colourSet[0].name);
    }
    // Reset glazing bars. Heritage steel-look products characteristically have
    // bars, so default those to the steel-look astragal option; everything else
    // defaults to the first option (usually None).
    if (product?.glazingBars?.length && !product.glazingBars.includes(glazingBars)) {
      const isHeritage = productId === "smartHeritageWindow" || productId === "smartHeritageDoor";
      const steelBar = product.glazingBars.find(g => /astragal|steel-look/i.test(g));
      setGlazingBars(isHeritage && steelBar ? steelBar : product.glazingBars[0]);
    }
    // Reset hardware
    if (hardwareSchema && hardwareSchema.options) {
      setHardware(prev => {
        const newHw = { ...prev };
        Object.keys(hardwareSchema.options).forEach(key => {
          const validOpts = hardwareSchema.options[key];
          if (!validOpts.includes(newHw[key])) {
            newHw[key] = validOpts[0];
          }
        });
        return newHw;
      });
    }
    // Auto-select first housing for county
    if (housingList.length && !housingList.find(h => h.id === housingId)) {
      setHousingId(housingList[0].id);
    }
    // Auto-select interior style
    if (shootLocation === "interior" && room && INTERIOR_STYLES[roomKey(room)]?.length) {
      const opts = INTERIOR_STYLES[roomKey(room)];
      if (!opts.includes(interiorStyle)) setInteriorStyle(opts[0]);
    }
    // Reset target model when asset type changes
    if (!availableModels.find(m => m.id === targetModel)) {
      setTargetModel(availableModels[0].id);
    }
    // Reset aspect ratio when platform/asset change
    if (!platformAspectRatios.includes(aspectRatio)) {
      setAspectRatio(platformAspectRatios[0]);
    }
    // Auto-correct invalid shoot location for product
    if (product?.installContext === "interior" && shootLocation === "exterior") {
      setShootLocation("internal_partition");
    }
    if (product?.installContext === "exterior_roof" && shootLocation === "exterior") {
      setShootLocation("interior");
    }
  }, [productId, county, assetType, platform, room, shootLocation]); // eslint-disable-line

  function roomKey(roomName) {
    const map = {
      "Living room": "living_room",
      "Kitchen": "kitchen",
      "Bathroom": "bathroom",
      "Dining room": "dining_room",
      "Bedroom": "bedroom",
      "Hallway": "hallway",
      "Conservatory interior": "conservatory",
      "Orangery": "conservatory",
      "Stairwell / landing": "hallway"
    };
    return map[roomName] || "living_room";
  }

  // ---------- Soft warnings ----------
  const warnings = useMemo(() => {
    const arr = [];
    // Aluspace must be interior
    if (product?.installContext === "interior" && shootLocation === "exterior") {
      arr.push("Smart Aluspace is an internal partition system. The shoot location has been switched to internal partition.");
    }
    // Roof lantern must be roof context — usually shown internally looking up
    if (product?.installContext === "exterior_roof" && shootLocation === "exterior") {
      arr.push("Roof lanterns are typically photographed internally looking up. Consider switching to internal view.");
    }
    // Single-light configuration + full-house view = mismatched-window risk
    const cfg = (configuration || "").toLowerCase();
    const isSingleLight = cfg.startsWith("single") || cfg.includes("one-light");
    const isFullView = shootLocation === "exterior" && (exteriorAspect === "front_full" || exteriorAspect === "rear_full");
    if (isSingleLight && isFullView) {
      arr.push("You've chosen a single-window configuration with a full-house view. The tool now forces every window on the house to match your product — but for the cleanest result either use a 'partial' view focused on the product, or fill in 'Elevation make-up' to describe the other openings.");
    }
    // Atmospheric + product (no people now)
    // Hardware mix check
    const finishes = new Set();
    if (hardware?.finish) finishes.add(hardware.finish);
    if (hardware?.knockerFinish) finishes.add(hardware.knockerFinish);
    if (finishes.size > 1) {
      arr.push("Mixed hardware finishes detected — confirm intentional, otherwise pick a unified finish.");
    }
    // Reels length
    if (assetType === "video" && duration > 15 && (platform === "instagram" || platform === "facebook")) {
      arr.push("Reels and short-form video typically perform best at 7–15 seconds. Consider shortening.");
    }
    // Atmospheric on Nano Banana
    if (scenePresetId === "atmospheric" && targetModel === "nanobanana") {
      arr.push("Atmospheric blue-hour interiors typically perform better in Flux or Midjourney than Nano Banana. Consider switching model.");
    }
    return arr;
  }, [product, shootLocation, scenePresetId, hardware, assetType, duration, platform, targetModel, exteriorVisible, configuration, exteriorAspect]);

  // ---------- Generate ----------
  function handleGenerate() {
    const angleObj = SHOT_ANGLES.find(a => a.id === shotAngleId);
    const compObj = COMPOSITIONS.find(c => c.id === compositionId);
    const framingObj = FRAMING_LENS.find(f => f.id === framingId);
    const lightingObj = LIGHTING_OPTIONS.find(l => l.id === lightingId);
    const groundObj = GROUND_CONDITIONS.find(g => g.id === groundId);
    const seasonObj = SEASONS.find(s => s.id === seasonId);

    // Pick camera language by context
    let cameraLang = CAMERA_LANGUAGE.exterior_kerb;
    if (shootLocation === "interior") cameraLang = CAMERA_LANGUAGE.interior_wide;
    else if (scenePresetId === "technical") cameraLang = technicalIsolation ? CAMERA_LANGUAGE.macro_studio : CAMERA_LANGUAGE.exterior_detail;
    else if (assetType === "video") cameraLang = CAMERA_LANGUAGE.video_cinematic;

    // Resolve the exterior-view dropdown id into its description for the prompt.
    const exteriorVisibleResolved = (() => {
      const opt = EXTERIOR_VIEW_OPTIONS.find(o => o.id === exteriorVisible);
      return opt ? opt.description : exteriorVisible; // allow free text fallback
    })();

    const brief = {
      // Fresh seed each generation so interiors and exteriors vary (walls,
      // floor, furniture, surroundings, house number) every time. We actively
      // avoid reusing a recently-shown scene by rerolling the seed: for full
      // front views we avoid recent frontages; for interiors we avoid recent
      // walls/floor/furniture combinations for the room being shown.
      rotationSeed: (() => {
        const isInterior = shootLocation === "interior" || shootLocation === "internal_partition";
        const isFullFront = shootLocation === "exterior" && exteriorAspect === "front_full";

        // Helper to pick a seed avoiding a 'recent' list via a signature fn.
        const rollAvoiding = (recentList, memory, sigFn) => {
          let s = Math.floor(Math.random() * 1000000);
          for (let attempt = 0; attempt < 60; attempt++) {
            const sig = sigFn(s);
            if (!recentList.includes(sig)) {
              recentList.push(sig);
              if (recentList.length > memory) recentList.shift();
              return s;
            }
            s = Math.floor(Math.random() * 1000000);
          }
          return s;
        };

        if (isInterior) {
          const roomKey = shootLocation === "internal_partition"
            ? "living_room"
            : roomKeyForDisplay(room);
          if (!recentInteriors.current[roomKey]) {
            recentInteriors.current[roomKey] = { combos: [], furniture: [] };
          }
          const mem = recentInteriors.current[roomKey];
          // Furniture is the dominant, most visible element, so it's the primary
          // thing to vary. Avoid repeating it within a window that's always
          // satisfiable for the room's furniture count. The whole-combo guard is
          // secondary and kept small so it never corners the search in rooms
          // with few furniture options (which previously forced repeats).
          const furnCount = interiorFurnitureCount(roomKey);
          const furnMemory = Math.max(1, Math.min(4, furnCount - 1));
          const comboMemory = 2;
          let s = Math.floor(Math.random() * 1000000);
          let fallback = s;
          // First pass: satisfy BOTH furniture and combo.
          let chosen = null;
          for (let attempt = 0; attempt < 60; attempt++) {
            const sig = interiorSignatureForSeed(roomKey, s);
            const furn = interiorFurnitureIndexForSeed(roomKey, s);
            if (attempt === 0) fallback = s;
            if (!mem.furniture.includes(furn) && !mem.combos.includes(sig)) { chosen = s; break; }
            s = Math.floor(Math.random() * 1000000);
          }
          // Second pass: if that failed, at least guarantee different furniture.
          if (chosen === null) {
            let s2 = Math.floor(Math.random() * 1000000);
            for (let attempt = 0; attempt < 60; attempt++) {
              const furn = interiorFurnitureIndexForSeed(roomKey, s2);
              if (!mem.furniture.includes(furn)) { chosen = s2; break; }
              s2 = Math.floor(Math.random() * 1000000);
            }
          }
          if (chosen === null) chosen = fallback;
          mem.combos.push(interiorSignatureForSeed(roomKey, chosen));
          if (mem.combos.length > comboMemory) mem.combos.shift();
          mem.furniture.push(interiorFurnitureIndexForSeed(roomKey, chosen));
          if (mem.furniture.length > furnMemory) mem.furniture.shift();
          return chosen;
        }

        if (isFullFront) {
          const total = frontSettingCount();
          const memory = Math.max(1, Math.min(total - 1, Math.floor(total / 2)));
          return rollAvoiding(
            recentFrontSettings.current,
            memory,
            (s) => frontSettingIndexForSeed(s)
          );
        }

        // Other views (partial/rear exterior): plain fresh seed is enough.
        return Math.floor(Math.random() * 1000000);
      })(),
      productId,
      configuration,
      colourName,
      glazingBars,
      glassType,
      compdoorStyle,
      compdoorGlass,
      hardware,

      shootLocation,
      exteriorAspect,
      elevationLayout,
      room,
      interiorStyle,
      exteriorVisible: exteriorVisibleResolved,
      partitionRooms,

      county,
      housingId,

      scenePresetId,
      shotAngleId,
      shotAngleDescription: angleObj?.description,
      compositionId,
      compositionDescription: compObj?.description,
      framingId,
      framingDescription: framingObj?.description,
      lightingId,
      lightingDescription: lightingObj?.description,
      groundDescription: groundObj?.description,
      seasonDescription: seasonObj?.description,

      cameraLanguage: cameraLang,

      people: null,
      pets,

      livedInLevel,
      technicalIsolation,

      platform,
      assetType,
      aspectRatio,
      targetModel,
      duration,
      referenceImage,
      hasReferenceUpload: !!referenceUpload,
      referenceUploadName: referenceUpload?.name || ""
    };

    let result;
    if (assetType === "carousel") {
      result = { type: "carousel", frames: buildCarousel(brief, carouselFrames) };
    } else if (assetType === "video") {
      result = { type: "video", shots: buildVideoShotList(brief), brief };
    } else {
      result = { type: "image", variations: buildVariations(brief), brief };
    }
    setOutput(result);
    setActiveFrameTab(0);
  }

  // ---------- Render ----------
  return (
    <div className="wd-app">
      <FormPanel
        // product
        productId={productId} setProductId={setProductId}
        configuration={configuration} setConfiguration={setConfiguration}
        colourName={colourName} setColourName={setColourName}
        glazingBars={glazingBars} setGlazingBars={setGlazingBars}
        glassType={glassType} setGlassType={setGlassType}
        compdoorStyle={compdoorStyle} setCompdoorStyle={setCompdoorStyle}
        compdoorGlass={compdoorGlass} setCompdoorGlass={setCompdoorGlass}
        hardware={hardware} setHardware={setHardware}
        product={product}
        colourSet={colourSet}
        hardwareSchema={hardwareSchema}
        // location
        shootLocation={shootLocation} setShootLocation={setShootLocation}
        exteriorAspect={exteriorAspect} setExteriorAspect={setExteriorAspect}
        elevationLayout={elevationLayout} setElevationLayout={setElevationLayout}
        room={room} setRoom={setRoom}
        interiorStyle={interiorStyle} setInteriorStyle={setInteriorStyle}
        exteriorVisible={exteriorVisible} setExteriorVisible={setExteriorVisible}
        partitionRooms={partitionRooms} setPartitionRooms={setPartitionRooms}
        // housing
        county={county} setCounty={setCounty}
        housingId={housingId} setHousingId={setHousingId}
        housingList={housingList}
        // scene
        scenePresetId={scenePresetId} setScenePresetId={setScenePresetId}
        shotAngleId={shotAngleId} setShotAngleId={setShotAngleId}
        compositionId={compositionId} setCompositionId={setCompositionId}
        framingId={framingId} setFramingId={setFramingId}
        lightingId={lightingId} setLightingId={setLightingId}
        groundId={groundId} setGroundId={setGroundId}
        seasonId={seasonId} setSeasonId={setSeasonId}
        // people
        pets={pets} setPets={setPets}
        // realism
        livedInLevel={livedInLevel} setLivedInLevel={setLivedInLevel}
        technicalIsolation={technicalIsolation} setTechnicalIsolation={setTechnicalIsolation}
        // output config
        platform={platform} setPlatform={setPlatform}
        assetType={assetType} setAssetType={setAssetType}
        aspectRatio={aspectRatio} setAspectRatio={setAspectRatio}
        platformAspectRatios={platformAspectRatios}
        targetModel={targetModel} setTargetModel={setTargetModel}
        availableModels={availableModels}
        duration={duration} setDuration={setDuration}
        carouselFrames={carouselFrames} setCarouselFrames={setCarouselFrames}
        referenceImage={referenceImage} setReferenceImage={setReferenceImage}
        referenceUpload={referenceUpload} setReferenceUpload={setReferenceUpload}
        warnings={warnings}
        onGenerate={handleGenerate}
      />
      <OutputPanel output={output} activeFrameTab={activeFrameTab} setActiveFrameTab={setActiveFrameTab} />
    </div>
  );
}

// =========================================================================
// FORM PANEL
// =========================================================================
function FormPanel(props) {
  const {
    productId, setProductId, configuration, setConfiguration,
    colourName, setColourName, glazingBars, setGlazingBars,
    glassType, setGlassType,
    compdoorStyle, setCompdoorStyle, compdoorGlass, setCompdoorGlass,
    hardware, setHardware,
    product, colourSet, hardwareSchema,
    shootLocation, setShootLocation, exteriorAspect, setExteriorAspect,
    elevationLayout, setElevationLayout,
    room, setRoom, interiorStyle, setInteriorStyle,
    exteriorVisible, setExteriorVisible, partitionRooms, setPartitionRooms,
    county, setCounty, housingId, setHousingId, housingList,
    scenePresetId, setScenePresetId, shotAngleId, setShotAngleId,
    compositionId, setCompositionId, framingId, setFramingId,
    lightingId, setLightingId, groundId, setGroundId, seasonId, setSeasonId,
    pets, setPets,
    livedInLevel, setLivedInLevel, technicalIsolation, setTechnicalIsolation,
    platform, setPlatform, assetType, setAssetType,
    aspectRatio, setAspectRatio, platformAspectRatios,
    targetModel, setTargetModel, availableModels,
    duration, setDuration, carouselFrames, setCarouselFrames,
    referenceImage, setReferenceImage,
    referenceUpload, setReferenceUpload,
    warnings, onGenerate
  } = props;

  const interiorStyleOpts = INTERIOR_STYLES[(() => {
    const m = { "Living room": "living_room", "Kitchen": "kitchen", "Bathroom": "bathroom", "Dining room": "dining_room", "Bedroom": "bedroom", "Hallway": "hallway", "Conservatory interior": "conservatory", "Orangery": "conservatory", "Stairwell / landing": "hallway" };
    return m[room] || "living_room";
  })()] || [];

  return (
    <div className="wd-panel wd-panel--form">
      <Header />
      <div className="wd-accent-strip" style={{ marginBottom: 32 }} />

      <h2 className="wd-panel-title">Brief</h2>
      <h1 className="wd-panel-subtitle">Configure the asset</h1>

      {/* SECTION 1 — Product */}
      <Section num="01" title="Product">
        <Field label="Product">
          <select className="wd-select" value={productId} onChange={(e) => setProductId(e.target.value)}>
            {Object.entries(PRODUCTS).map(([id, p]) => (
              <option key={id} value={id}>{p.name}</option>
            ))}
          </select>
        </Field>

        {product?.suitabilityNotes && (
          <div className="wd-note">{product.suitabilityNotes}</div>
        )}

        {product?.configurations?.length > 0 && (
          <Field label="Configuration">
            <select className="wd-select" value={configuration} onChange={(e) => setConfiguration(e.target.value)}>
              {product.configurations.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
        )}

        {colourSet.length > 0 && (
          <Field label="Colour / finish" hint={colourSet.find(c => c.name === colourName) ? `${colourSet.find(c => c.name === colourName).ral} · ${colourSet.find(c => c.name === colourName).hex}` : ""}>
            <div className="wd-swatch" style={{ marginBottom: 6 }}>
              {colourSet.find(c => c.name === colourName) && (
                <span className="wd-swatch-dot" style={{ background: colourSet.find(c => c.name === colourName).hex }} />
              )}
              <select className="wd-select" value={colourName} onChange={(e) => setColourName(e.target.value)} style={{ flex: 1 }}>
                {colourSet.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
            </div>
          </Field>
        )}

        {productId === "compdoor" && (
          <>
            <Field label="Comp Door style">
              <select className="wd-select" value={compdoorStyle} onChange={(e) => setCompdoorStyle(e.target.value)}>
                <option value="">— Select style —</option>
                {COMPDOOR_STYLES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Comp Door glass">
              <select className="wd-select" value={compdoorGlass} onChange={(e) => setCompdoorGlass(e.target.value)}>
                <option value="">— Select glass —</option>
                {COMPDOOR_GLASS.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
              </select>
            </Field>
          </>
        )}

        {productId !== "compdoor" && product?.type !== "internal_screen" && product?.type !== "roof_lantern" && (
          <Field label="Glass">
            <select className="wd-select" value={glassType} onChange={(e) => setGlassType(e.target.value)}>
              <option value="">— Default clear toughened —</option>
              <option value="clear toughened safety glass">Clear toughened safety glass</option>
              <option value="Pilkington Cotswold obscure pattern (irregular pebble)">Obscure — Pilkington Cotswold</option>
              <option value="Pilkington Stippolyte obscure pattern (small uniform stipple)">Obscure — Pilkington Stippolyte</option>
              <option value="Pilkington Charcoal Sticks obscure (vertical linear)">Obscure — Pilkington Charcoal Sticks</option>
              <option value="Pilkington Satin smooth obscure">Obscure — Pilkington Satin (smooth frosted)</option>
              <option value="leaded decorative pattern">Decorative leaded pattern</option>
              <option value="stained glass coloured leaded">Stained glass — coloured leaded</option>
              <option value="integral blinds (between glass)">Integral blinds (between glass)</option>
            </select>
          </Field>
        )}

        {product?.glazingBars?.length > 1 && (
          <Field label="Glazing bars">
            <select className="wd-select" value={glazingBars} onChange={(e) => setGlazingBars(e.target.value)}>
              {product.glazingBars.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </Field>
        )}

        {hardwareSchema && Object.keys(hardwareSchema.options).length > 0 && (
          <div className="wd-grid-2">
            {Object.entries(hardwareSchema.options).map(([key, opts]) => (
              <Field key={key} label={key === "handleStyle" ? "Handle" : key === "letterbox" ? "Letterplate" : key === "knocker" ? "Knocker" : key === "finish" ? "Hardware finish" : key}>
                <select className="wd-select" value={hardware[key] || opts[0]} onChange={(e) => setHardware({ ...hardware, [key]: e.target.value })}>
                  {opts.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>
            ))}
          </div>
        )}
      </Section>

      {/* SECTION 2 — Location & context */}
      <Section num="02" title="Location & setting">
        <Field label="Shoot location">
          <Segments value={shootLocation} onChange={setShootLocation} options={SHOOT_LOCATIONS.map(s => ({ value: s.id, label: s.label }))} />
        </Field>

        {shootLocation === "exterior" && (
          <Field label="View">
            <select className="wd-select" value={exteriorAspect} onChange={(e) => setExteriorAspect(e.target.value)}>
              {EXTERIOR_ASPECTS.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
          </Field>
        )}

        {shootLocation === "exterior" && (exteriorAspect === "front_full" || exteriorAspect === "rear_full") && (
          <Field
            label="Elevation make-up (optional)"
            hint="Describe the other openings on the elevation so they're rendered as YOUR product too. The chosen product, colour and style are applied to all of them. Leave blank to just enforce 'all windows match'."
          >
            {(() => {
              const suggestions = getElevationSuggestions(product, housingId, exteriorAspect);
              if (suggestions.length === 0) return null;
              return (
                <select
                  className="wd-select"
                  value=""
                  onChange={(e) => { if (e.target.value) setElevationLayout(e.target.value); }}
                  style={{ marginBottom: 8 }}
                >
                  <option value="">— Suggested layouts for this house & product —</option>
                  {suggestions.map((s, i) => (
                    <option key={i} value={s}>{s.length > 70 ? s.slice(0, 70) + "…" : s}</option>
                  ))}
                </select>
              );
            })()}
            <input
              className="wd-input"
              value={elevationLayout}
              onChange={(e) => setElevationLayout(e.target.value)}
              placeholder="Pick a suggestion above, or type your own (e.g. a bay window to the ground floor, two casements above, a front door to the right)"
            />
          </Field>
        )}

        {shootLocation === "interior" && (
          <>
            <div className="wd-grid-2">
              <Field label="Room">
                <select className="wd-select" value={room} onChange={(e) => setRoom(e.target.value)}>
                  {ROOMS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
              {interiorStyleOpts.length > 0 && (
                <Field label="Interior style">
                  <select className="wd-select" value={interiorStyle} onChange={(e) => setInteriorStyle(e.target.value)}>
                    {interiorStyleOpts.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              )}
            </div>
            <Field label="Visible through the window/door (optional)" hint="What can be seen outside when looking out from inside. Pick an option for a consistent, well-described view.">
              <select className="wd-select" value={exteriorVisible} onChange={(e) => setExteriorVisible(e.target.value)}>
                {EXTERIOR_VIEW_OPTIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </Field>
          </>
        )}

        {shootLocation === "internal_partition" && (
          <Field label="Between which rooms">
            <input className="wd-input" value={partitionRooms} onChange={(e) => setPartitionRooms(e.target.value)} placeholder="e.g. kitchen to office, hallway to living room" />
          </Field>
        )}

        <div className="wd-grid-2">
          <Field label="County">
            <select className="wd-select" value={county} onChange={(e) => setCounty(e.target.value)}>
              {COUNTIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </Field>
          <Field label="Housing style">
            <select className="wd-select" value={housingId} onChange={(e) => setHousingId(e.target.value)}>
              {housingList.map(h => <option key={h.id} value={h.id}>{h.label}</option>)}
            </select>
          </Field>
        </div>
      </Section>

      {/* SECTION 3 — Scene & cinematography */}
      <Section num="03" title="Scene & cinematography">
        <Field label="Scene preset">
          <select className="wd-select" value={scenePresetId} onChange={(e) => setScenePresetId(e.target.value)}>
            {SCENE_PRESETS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </Field>
        {scenePresetId && (
          <div className="wd-note">{SCENE_PRESETS.find(s => s.id === scenePresetId)?.description}</div>
        )}

        {scenePresetId === "technical" && (
          <Field label="Studio isolation?">
            <Segments value={technicalIsolation ? "yes" : "no"} onChange={(v) => setTechnicalIsolation(v === "yes")} options={[
              { value: "no", label: "In-situ (in context)" },
              { value: "yes", label: "Studio isolation (clean background)" }
            ]} />
          </Field>
        )}

        <div className="wd-grid-2">
          <Field label="Shot angle">
            <select className="wd-select" value={shotAngleId} onChange={(e) => setShotAngleId(e.target.value)}>
              {SHOT_ANGLES.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
            <OptionNote text={SHOT_ANGLES.find(a => a.id === shotAngleId)?.description} />
          </Field>
          <Field label="Composition">
            <select className="wd-select" value={compositionId} onChange={(e) => setCompositionId(e.target.value)}>
              {COMPOSITIONS.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
            <OptionNote text={COMPOSITIONS.find(c => c.id === compositionId)?.description} />
          </Field>
          <Field label="Framing / lens">
            <select className="wd-select" value={framingId} onChange={(e) => setFramingId(e.target.value)}>
              {FRAMING_LENS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
            </select>
            <OptionNote text={FRAMING_LENS.find(f => f.id === framingId)?.description} />
          </Field>
          <Field label="Lighting condition">
            <select className="wd-select" value={lightingId} onChange={(e) => setLightingId(e.target.value)}>
              {LIGHTING_OPTIONS.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
            <OptionNote text={LIGHTING_OPTIONS.find(l => l.id === lightingId)?.description} />
          </Field>
          <Field label="Ground / weather">
            <select className="wd-select" value={groundId} onChange={(e) => setGroundId(e.target.value)}>
              {GROUND_CONDITIONS.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
            </select>
            <OptionNote text={GROUND_CONDITIONS.find(g => g.id === groundId)?.description} />
          </Field>
          <Field label="Season">
            <select className="wd-select" value={seasonId} onChange={(e) => setSeasonId(e.target.value)}>
              {SEASONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
            <OptionNote text={SEASONS.find(s => s.id === seasonId)?.description} />
          </Field>
        </div>
      </Section>

      {/* SECTION 4 — People & realism */}
      <Section num="04" title="Realism & detail">
        <Field label="Pets" hint="Pets add life to a scene. People are intentionally not included, as empty-property shots render far more realistically.">
          <select className="wd-select" value={pets} onChange={(e) => setPets(e.target.value)}>
            {PETS.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </Field>

        <Field label="Lived-in realism level" hint="How much British domestic detail to inject — wheelie bins, mugs, throws, mature gardens. This is what stops empty rooms and houses looking sterile and fake.">
          <Segments value={livedInLevel} onChange={setLivedInLevel} options={LIVED_IN_LEVELS.map(l => ({ value: l.id, label: l.label }))} />
        </Field>
      </Section>

      {/* SECTION 5 — Output */}
      <Section num="05" title="Output">
        <Field label="Asset type">
          <Segments value={assetType} onChange={setAssetType} options={ASSET_TYPES.map(a => ({ value: a.id, label: a.label }))} />
        </Field>

        <div className="wd-grid-2">
          <Field label="Platform">
            <select className="wd-select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
              {Object.entries(PLATFORMS).map(([id, p]) => <option key={id} value={id}>{p.label}</option>)}
            </select>
          </Field>
          <Field label="Aspect ratio">
            <select className="wd-select" value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)}>
              {platformAspectRatios.map(a => {
                const meta = ASPECT_RATIOS.find(r => r.id === a);
                return <option key={a} value={a}>{meta ? meta.label : a}</option>;
              })}
            </select>
            <OptionNote text={ASPECT_RATIOS.find(r => r.id === aspectRatio)?.note} />
          </Field>
        </div>

        <Field label="Target model">
          <Segments value={targetModel} onChange={setTargetModel} options={availableModels.map(m => ({ value: m.id, label: m.label }))} />
        </Field>

        {assetType === "video" && (
          <Field label="Duration (seconds)">
            <input className="wd-input" type="number" min="3" max="60" value={duration} onChange={(e) => setDuration(parseInt(e.target.value) || 5)} />
          </Field>
        )}

        {assetType === "carousel" && (
          <Field label="Number of frames">
            <input className="wd-input" type="number" min="2" max="10" value={carouselFrames} onChange={(e) => setCarouselFrames(parseInt(e.target.value) || 5)} />
          </Field>
        )}

        <Field label="Reference image (optional)" hint="For consistency across a series, character match, or matching a real property. Upload a file or paste a URL.">
          <ReferenceImageInput
            referenceImage={referenceImage}
            setReferenceImage={setReferenceImage}
            referenceUpload={referenceUpload}
            setReferenceUpload={setReferenceUpload}
          />
        </Field>
      </Section>

      {warnings.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {warnings.map((w, i) => <div key={i} className="wd-warning">{w}</div>)}
        </div>
      )}

      <div className="wd-generate-bar">
        <button className="wd-generate" onClick={onGenerate}>
          Generate prompt
        </button>
      </div>
    </div>
  );
}

// =========================================================================
// HEADER
// =========================================================================
function Header() {
  return (
    <div className="wd-header" style={{ margin: "-32px -36px 24px", padding: "20px 36px" }}>
      <div className="wd-brand">
        <div className="wd-logo-mark">WD</div>
        <div className="wd-brand-text">
          <div className="wd-brand-name">Windows and Doors — Prompt Studio</div>
          <div className="wd-brand-sub">Photorealistic asset briefs · UK East Midlands & East</div>
        </div>
      </div>
      <div className="wd-header-meta">v1.0</div>
    </div>
  );
}

// =========================================================================
// REUSABLE FIELD / SECTION
// =========================================================================
function Section({ num, title, children }) {
  return (
    <div className="wd-section">
      <div className="wd-section-header">
        <span className="wd-section-num">{num}</span>
        <h3 className="wd-section-title">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="wd-field">
      <label className="wd-label">
        {label}
        {hint && <span className="wd-label-hint">— {hint}</span>}
      </label>
      {children}
    </div>
  );
}

function OptionNote({ text }) {
  if (!text) return null;
  return <div className="wd-option-note" style={{ fontSize: 12, color: "#6a7886", marginTop: 5, lineHeight: 1.4 }}>{text}</div>;
}

function ReferenceImageInput({ referenceImage, setReferenceImage, referenceUpload, setReferenceUpload }) {
  const fileInputRef = React.useRef(null);

  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file (JPG, PNG, WebP, etc.).");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      alert("That image is over 8MB. Please use a smaller file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setReferenceUpload({ name: file.name, dataUrl: reader.result });
    reader.readAsDataURL(file);
  }

  function removeUpload() {
    setReferenceUpload(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="wd-refimg">
      {/* Upload control */}
      {!referenceUpload && (
        <button
          type="button"
          className="wd-btn-secondary"
          style={{ width: "100%", padding: "10px 14px", border: "1px dashed #b9c2cc", borderRadius: 8, background: "#f7f9fb", color: "#465f73", cursor: "pointer", fontSize: 14 }}
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          ⬆ Upload a reference image from your device
        </button>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFile}
      />

      {/* Preview + remove */}
      {referenceUpload && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, border: "1px solid #e2e8ee", borderRadius: 8, background: "#fff" }}>
          <img src={referenceUpload.dataUrl} alt="reference preview" style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 6, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#26323d", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{referenceUpload.name}</div>
            <div style={{ fontSize: 12, color: "#6a7886" }}>Attached — drag this file into your image tool when generating.</div>
          </div>
          <button type="button" onClick={removeUpload} style={{ border: "none", background: "transparent", color: "#b23", cursor: "pointer", fontSize: 13 }}>Remove</button>
        </div>
      )}

      {/* URL field — still useful, and required for Midjourney --cref */}
      <div style={{ marginTop: 8 }}>
        <input className="wd-input" value={referenceImage} onChange={(e) => setReferenceImage(e.target.value)} placeholder="…or paste an image URL (https://…)" />
        <OptionNote text="Tip: an uploaded file stays on your device and is for the drag-into-your-tool workflow (Nano Banana, Flux, Midjourney). Midjourney's --cref needs a public URL, so paste one here if you want it added to the parameters automatically." />
      </div>
    </div>
  );
}

function Segments({ value, onChange, options }) {
  return (
    <div className="wd-segments">
      {options.map(opt => (
        <button
          key={opt.value}
          className={`wd-segment ${value === opt.value ? "wd-segment--active" : ""}`}
          onClick={() => onChange(opt.value)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// =========================================================================
// OUTPUT PANEL
// =========================================================================
function OutputPanel({ output, activeFrameTab, setActiveFrameTab }) {
  if (!output) {
    return (
      <div className="wd-panel wd-panel--output">
        <div className="wd-output-empty">
          <div className="wd-output-empty-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" stroke="#465f73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Awaiting brief</h3>
          <p>Configure the brief on the left, then generate. Output appears here — prompt, negative prompt, parameters, post-production checklist, and (for video) music brief.</p>
        </div>
      </div>
    );
  }

  if (output.type === "image") {
    return (
      <div className="wd-panel wd-panel--output">
        <h2 className="wd-panel-title">Output</h2>
        <h1 className="wd-panel-subtitle">Single image · 3 variations</h1>
        <FrameTabs
          tabs={output.variations.map(v => v.label)}
          active={activeFrameTab}
          onChange={setActiveFrameTab}
        />
        <ResultBlock result={output.variations[activeFrameTab].result} />
      </div>
    );
  }

  if (output.type === "carousel") {
    return (
      <div className="wd-panel wd-panel--output">
        <h2 className="wd-panel-title">Output</h2>
        <h1 className="wd-panel-subtitle">Carousel · {output.frames.length} frames</h1>
        <div className="wd-note" style={{ marginBottom: 16 }}>
          Generate Frame 1 first. Use the resulting image as the reference URL for all subsequent frames to lock architectural consistency.
        </div>
        <FrameTabs
          tabs={output.frames.map((_, i) => `Frame ${i + 1}${i === 0 ? " (anchor)" : ""}`)}
          active={activeFrameTab}
          onChange={setActiveFrameTab}
        />
        {output.frames[activeFrameTab].anchorNote && (
          <div className="wd-warning">{output.frames[activeFrameTab].anchorNote}</div>
        )}
        <ResultBlock result={output.frames[activeFrameTab].result} />
      </div>
    );
  }

  if (output.type === "video") {
    return (
      <div className="wd-panel wd-panel--output">
        <h2 className="wd-panel-title">Output</h2>
        <h1 className="wd-panel-subtitle">Video · {output.shots.length} shot{output.shots.length > 1 ? "s" : ""}</h1>
        <FrameTabs
          tabs={output.shots.map(s => s.label.split(" — ")[0])}
          active={activeFrameTab}
          onChange={setActiveFrameTab}
        />
        <div className="wd-frame-label">{output.shots[activeFrameTab].label}</div>
        <div className="wd-note">Camera motion: {output.shots[activeFrameTab].cameraMotion} · Duration: {output.shots[activeFrameTab].duration}s</div>
        <ResultBlock result={output.shots[activeFrameTab].result} showMusic={activeFrameTab === 0} />
      </div>
    );
  }

  return null;
}

function FrameTabs({ tabs, active, onChange }) {
  return (
    <div className="wd-frames-tabs">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`wd-frames-tab ${active === i ? "wd-frames-tab--active" : ""}`}
          onClick={() => onChange(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function ResultBlock({ result, showMusic = true }) {
  if (!result || result.error) return <div className="wd-warning">{result?.error || "No result."}</div>;

  return (
    <>
      {/* Product summary */}
      {result.productSummary && (
        <div className="wd-output-block">
          <div className="wd-output-block-header">
            <h4 className="wd-output-block-title">Product summary</h4>
          </div>
          <div className="wd-product-summary">
            <SummaryRow k="Product" v={result.productSummary.product} />
            {result.productSummary.configuration && <SummaryRow k="Configuration" v={result.productSummary.configuration} />}
            {result.productSummary.colour && <SummaryRow k="Colour" v={result.productSummary.colour} />}
            {result.productSummary.glass && <SummaryRow k="Glass" v={result.productSummary.glass} />}
            {result.productSummary.hardware?.handleStyle && <SummaryRow k="Handle" v={result.productSummary.hardware.handleStyle} />}
            {result.productSummary.hardware?.finish && <SummaryRow k="Finish" v={result.productSummary.hardware.finish} />}
          </div>
        </div>
      )}

      {/* Main prompt */}
      <CopyBlock title="Main prompt" content={result.mainPrompt} />

      {/* Negative */}
      <CopyBlock title="Negative / avoidances" content={result.negativePrompt} />

      {/* Parameters */}
      {result.parameters && <CopyBlock title="Parameters" content={result.parameters} />}

      {/* Post-production checklist */}
      {result.postProduction && (
        <div className="wd-output-block">
          <div className="wd-output-block-header">
            <h4 className="wd-output-block-title">Post-production checklist</h4>
          </div>
          <ul className="wd-checklist" style={{ padding: "0 18px" }}>
            {result.postProduction.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Music */}
      {showMusic && result.music && (
        <div className="wd-output-block">
          <div className="wd-output-block-header">
            <h4 className="wd-output-block-title">Music brief</h4>
          </div>
          <div className="wd-music-brief">
            <div className="wd-music-row"><strong>Mood</strong><span>{result.music.mood}</span></div>
            <div className="wd-music-row"><strong>BPM</strong><span>{result.music.bpm}</span></div>
            <div className="wd-music-row"><strong>Energy</strong><span>{result.music.energy}</span></div>
            <div className="wd-music-row"><strong>Sync</strong><span>{result.music.syncNote}</span></div>
            <div className="wd-music-row"><strong>Avoid</strong><span>{result.music.avoid}</span></div>
            <div style={{ marginTop: 12 }}>
              {Object.entries(result.music.searchTerms).map(([source, terms]) => (
                <div key={source}>
                  <div className="wd-music-search-source">{source} search terms</div>
                  <ul className="wd-music-search-list">
                    {terms.map((t, i) => <li key={i}>"{t}"</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Model notes */}
      {result.modelNotes && (
        <div className="wd-note">
          <strong>Model note: </strong>{result.modelNotes}
        </div>
      )}
    </>
  );
}

function SummaryRow({ k, v }) {
  return (
    <div className="wd-product-summary-row">
      <div className="wd-product-summary-key">{k}</div>
      <div className="wd-product-summary-value">{v}</div>
    </div>
  );
}

function CopyBlock({ title, content }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className="wd-output-block">
      <div className="wd-output-block-header">
        <h4 className="wd-output-block-title">{title}</h4>
        <button className={`wd-copy-btn ${copied ? "wd-copy-btn--copied" : ""}`} onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="wd-output-block-body">{content}</div>
    </div>
  );
}
