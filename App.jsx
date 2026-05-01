import React, { useState, useMemo, useEffect } from "react";
import {
  PRODUCTS,
  COLOUR_SETS,
  HARDWARE,
  HOUSING_STOCK,
  SCENE_PRESETS,
  LIGHTING_OPTIONS,
  GROUND_CONDITIONS,
  SEASONS,
  PEOPLE_TYPES,
  ETHNICITY_DEFAULTS,
  PETS,
  PLATFORMS,
  ASSET_TYPES,
  MODEL_SYNTAX,
  CAMERA_LANGUAGE,
  COMPDOOR_STYLES,
  COMPDOOR_GLASS,
  INTERIOR_STYLES,
  ROOMS,
  SHOT_ANGLES,
  COMPOSITIONS,
  FRAMING_LENS
} from "./catalogue.js";
import { buildPrompt, buildVariations, buildCarousel, buildVideoShotList } from "./promptEngine.js";

// =========================================================================
// Helpers
// =========================================================================
const COUNTIES = [
  { id: "bedfordshire", label: "Bedfordshire" },
  { id: "cambridgeshire", label: "Cambridgeshire" },
  { id: "northamptonshire", label: "Northamptonshire" },
  { id: "lincolnshire", label: "Lincolnshire" },
  { id: "leicestershire", label: "Leicestershire" }
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
  const [room, setRoom] = useState("Kitchen");
  const [interiorStyle, setInteriorStyle] = useState("");
  const [exteriorVisible, setExteriorVisible] = useState("");
  const [partitionRooms, setPartitionRooms] = useState("");

  const [county, setCounty] = useState("bedfordshire");
  const [housingId, setHousingId] = useState("");

  const [scenePresetId, setScenePresetId] = useState("hero");
  const [shotAngleId, setShotAngleId] = useState("three_quarter");
  const [compositionId, setCompositionId] = useState("rule_thirds");
  const [framingId, setFramingId] = useState("standard_50");
  const [lightingId, setLightingId] = useState("overcast_soft");
  const [groundId, setGroundId] = useState("dry");
  const [seasonId, setSeasonId] = useState("spring");

  const [peopleType, setPeopleType] = useState("none");
  const [ethnicity, setEthnicity] = useState("white_british");
  const [ageRange, setAgeRange] = useState("");
  const [peopleAction, setPeopleAction] = useState("");
  const [mobilityAid, setMobilityAid] = useState(false);
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

  // ---------- Output state ----------
  const [output, setOutput] = useState(null);
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
    // Reset glazing bars
    if (product?.glazingBars?.length && !product.glazingBars.includes(glazingBars)) {
      setGlazingBars(product.glazingBars[0]);
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
    if (product?.installContext === "exterior_roof" && shootLocation !== "interior") {
      // roof lantern internal viewing is the normal use case
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
    // Atmospheric + people in motion
    if (scenePresetId === "atmospheric" && peopleType !== "none" && peopleAction?.toLowerCase().includes("walk")) {
      arr.push("Atmospheric mood + figure in motion is harder to achieve. Consider lifestyle warmth scene preset for active subjects, or atmospheric mood with a still subject.");
    }
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
    // Children + Veo 3
    if (peopleType === "homeowner_family" && targetModel === "veo3") {
      arr.push("Veo 3 has guardrails around generating children. Children will be framed from behind, in motion blur, or background — never as primary subject of close-up.");
    }
    // Atmospheric on Nano Banana
    if (scenePresetId === "atmospheric" && targetModel === "nanobanana") {
      arr.push("Atmospheric blue-hour interiors typically perform better in Flux or Midjourney than Nano Banana. Consider switching model.");
    }
    // Multi-depth interior with exterior visible
    if (shootLocation === "interior" && exteriorVisible && peopleType !== "none") {
      arr.push("Interior with visible exterior + people creates multiple depth planes. Expect to regenerate several attempts to get a clean result.");
    }
    return arr;
  }, [product, shootLocation, scenePresetId, peopleType, peopleAction, hardware, assetType, duration, platform, targetModel, exteriorVisible]);

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
    if (shootLocation === "interior") cameraLang = peopleType !== "none" ? CAMERA_LANGUAGE.interior_lifestyle : CAMERA_LANGUAGE.interior_wide;
    else if (scenePresetId === "technical") cameraLang = technicalIsolation ? CAMERA_LANGUAGE.macro_studio : CAMERA_LANGUAGE.exterior_detail;
    else if (assetType === "video") cameraLang = CAMERA_LANGUAGE.video_cinematic;

    const brief = {
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
      room,
      interiorStyle,
      exteriorVisible,
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

      people: peopleType === "none" ? null : {
        peopleType,
        ethnicity: ETHNICITY_DEFAULTS.find(e => e.id === ethnicity)?.label,
        ageRange,
        action: peopleAction,
        mobilityAid
      },
      pets,

      livedInLevel,
      technicalIsolation,

      platform,
      assetType,
      aspectRatio,
      targetModel,
      duration,
      referenceImage
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
        peopleType={peopleType} setPeopleType={setPeopleType}
        ethnicity={ethnicity} setEthnicity={setEthnicity}
        ageRange={ageRange} setAgeRange={setAgeRange}
        peopleAction={peopleAction} setPeopleAction={setPeopleAction}
        mobilityAid={mobilityAid} setMobilityAid={setMobilityAid}
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
    room, setRoom, interiorStyle, setInteriorStyle,
    exteriorVisible, setExteriorVisible, partitionRooms, setPartitionRooms,
    county, setCounty, housingId, setHousingId, housingList,
    scenePresetId, setScenePresetId, shotAngleId, setShotAngleId,
    compositionId, setCompositionId, framingId, setFramingId,
    lightingId, setLightingId, groundId, setGroundId, seasonId, setSeasonId,
    peopleType, setPeopleType, ethnicity, setEthnicity,
    ageRange, setAgeRange, peopleAction, setPeopleAction,
    mobilityAid, setMobilityAid, pets, setPets,
    livedInLevel, setLivedInLevel, technicalIsolation, setTechnicalIsolation,
    platform, setPlatform, assetType, setAssetType,
    aspectRatio, setAspectRatio, platformAspectRatios,
    targetModel, setTargetModel, availableModels,
    duration, setDuration, carouselFrames, setCarouselFrames,
    referenceImage, setReferenceImage,
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
            <Field label="Visible through the window/door (optional)" hint="Only if applicable — e.g. 'UK rear garden with paved patio and mature hedge boundary'">
              <input className="wd-input" value={exteriorVisible} onChange={(e) => setExteriorVisible(e.target.value)} placeholder="Leave blank if not visible or not relevant" />
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
          </Field>
          <Field label="Composition">
            <select className="wd-select" value={compositionId} onChange={(e) => setCompositionId(e.target.value)}>
              {COMPOSITIONS.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </Field>
          <Field label="Framing / lens">
            <select className="wd-select" value={framingId} onChange={(e) => setFramingId(e.target.value)}>
              {FRAMING_LENS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
            </select>
          </Field>
          <Field label="Lighting condition">
            <select className="wd-select" value={lightingId} onChange={(e) => setLightingId(e.target.value)}>
              {LIGHTING_OPTIONS.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
          </Field>
          <Field label="Ground / weather">
            <select className="wd-select" value={groundId} onChange={(e) => setGroundId(e.target.value)}>
              {GROUND_CONDITIONS.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
            </select>
          </Field>
          <Field label="Season">
            <select className="wd-select" value={seasonId} onChange={(e) => setSeasonId(e.target.value)}>
              {SEASONS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </Field>
        </div>
      </Section>

      {/* SECTION 4 — People & realism */}
      <Section num="04" title="People & realism">
        <Field label="People">
          <select className="wd-select" value={peopleType} onChange={(e) => setPeopleType(e.target.value)}>
            {PEOPLE_TYPES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </Field>

        {peopleType !== "none" && peopleType !== "installer" && (
          <>
            <div className="wd-grid-2">
              <Field label="Ethnicity">
                <select className="wd-select" value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                  {ETHNICITY_DEFAULTS.map(e => <option key={e.id} value={e.id}>{e.label}</option>)}
                </select>
              </Field>
              <Field label="Age (override default)">
                <input className="wd-input" value={ageRange} onChange={(e) => setAgeRange(e.target.value)} placeholder="e.g. mid 40s" />
              </Field>
            </div>
            <Field label="What they're doing (optional)" hint="A natural action — opening a door, holding a mug, walking through. Leave blank for default.">
              <input className="wd-input" value={peopleAction} onChange={(e) => setPeopleAction(e.target.value)} placeholder="e.g. opening the bifold doors" />
            </Field>
            {peopleType === "older_homeowner" && (
              <Field label="Mobility aid">
                <Segments value={mobilityAid ? "yes" : "no"} onChange={(v) => setMobilityAid(v === "yes")} options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Walking frame / aid" }
                ]} />
              </Field>
            )}
          </>
        )}

        <Field label="Pets">
          <select className="wd-select" value={pets} onChange={(e) => setPets(e.target.value)}>
            {PETS.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </Field>

        <Field label="Lived-in realism level" hint="How much British domestic detail to inject — wheelie bins, mugs, throws, mature gardens.">
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
              {platformAspectRatios.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
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

        <Field label="Reference image URL (optional)" hint="For consistency across a series, character match, or matching a real property.">
          <input className="wd-input" value={referenceImage} onChange={(e) => setReferenceImage(e.target.value)} placeholder="https://..." />
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
