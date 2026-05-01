// promptEngine.js — converts the user's brief into a model-specific prompt.
// Pure function, easy to extend.

import {
  PRODUCTS,
  COLOUR_SETS,
  HARDWARE,
  HOUSING_STOCK,
  SCENE_PRESETS,
  LIGHTING_OPTIONS,
  GROUND_CONDITIONS,
  SEASONS,
  PEOPLE_REALISM_SCAFFOLD,
  DEMOGRAPHIC_MODERNISER,
  CHILDREN_FRAMING,
  MOBILITY_AID_SCAFFOLD,
  INSTALLER_DESCRIPTION,
  LIVED_IN_DETAILS,
  CAMERA_LANGUAGE,
  PLATFORMS,
  MODEL_SYNTAX,
  UNIVERSAL_NEGATIVES,
  UK_NEGATIVES,
  PEOPLE_NEGATIVES,
  MUSIC_PRESETS,
  COMPDOOR_STYLES,
  COMPDOOR_GLASS,
  INTERIOR_STYLES,
  SHOT_ANGLES
} from "./catalogue.js";

// =============================================================================
// Helper — pick lived-in details with rotation so the same items don't repeat
// =============================================================================
function pickLivedIn(scene, level, rotationSeed = 0) {
  if (!level || level === "none") return [];
  const pool = LIVED_IN_DETAILS[scene]?.[level] || [];
  if (pool.length === 0) return [];
  // Rotate based on seed so successive prompts get different details
  const rotated = [...pool.slice(rotationSeed % pool.length), ...pool.slice(0, rotationSeed % pool.length)];
  // Pick subtle: 1-2, moderate: 3-4, heavy: 5-6
  const count = level === "subtle" ? 2 : level === "moderate" ? 3 : 5;
  return rotated.slice(0, Math.min(count, rotated.length));
}

// =============================================================================
// Build the product description block
// =============================================================================
function buildProductDescription(brief) {
  const product = PRODUCTS[brief.productId];
  if (!product) return "";

  const colourSet = COLOUR_SETS[product.colours] || [];
  const colour = colourSet.find(c => c.name === brief.colourName);

  let parts = [];

  // Visual descriptor (NEVER brand name)
  parts.push(product.visualDescriptor);

  // Configuration
  if (brief.configuration) {
    parts.push(`configuration: ${brief.configuration}`);
  }

  // Colour with RAL/hex
  if (colour) {
    const finishNote = colour.finish ? ` (${colour.finish} finish)` : "";
    parts.push(`finish: ${colour.name}${finishNote}, approximate ${colour.ral}, hex ${colour.hex}`);
  }

  // Glazing bars
  if (brief.glazingBars && brief.glazingBars !== "None") {
    parts.push(`glazing bar treatment: ${brief.glazingBars}`);
  }

  // Comp Door style and glass
  if (brief.productId === "compdoor") {
    if (brief.compdoorStyle) {
      parts.push(`Comp Door ${brief.compdoorStyle} style configuration`);
    }
    if (brief.compdoorGlass) {
      const glass = COMPDOOR_GLASS.find(g => g.name === brief.compdoorGlass);
      if (glass && glass.description) {
        parts.push(`glazed with ${glass.description}`);
      }
    }
  }

  // Other glass options for non-Comp-Door products
  if (brief.glassType && brief.productId !== "compdoor") {
    parts.push(`glazing: ${brief.glassType}`);
  }

  // Hardware
  if (brief.hardware) {
    const hwParts = [];
    if (brief.hardware.handleStyle) hwParts.push(`${brief.hardware.handleStyle} handle`);
    if (brief.hardware.knocker && brief.hardware.knocker !== "None") hwParts.push(`${brief.hardware.knocker}`);
    if (brief.hardware.letterbox && brief.hardware.letterbox !== "None") hwParts.push(`${brief.hardware.letterbox} letterplate`);
    if (brief.hardware.finish) hwParts.push(`finish in ${brief.hardware.finish}`);
    if (hwParts.length) parts.push(`hardware: ${hwParts.join(", ")}`);
  }

  // Signature visual cue — locked-in product authenticity
  if (product.signatureVisualCue) {
    parts.push(`distinctive features: ${product.signatureVisualCue}`);
  }

  return parts.join(", ");
}

// =============================================================================
// Build the location/context block
// =============================================================================
function buildLocationContext(brief) {
  let parts = [];

  if (brief.shootLocation === "exterior") {
    // External
    if (brief.county && brief.housingId) {
      const housingList = HOUSING_STOCK[brief.county] || [];
      const housing = housingList.find(h => h.id === brief.housingId);
      if (housing) parts.push(housing.description);
    }
    if (brief.exteriorAspect) {
      const aspectMap = {
        "front_full": "full view of the front elevation showing the whole house",
        "front_partial": "partial view of the front of the house, framing focused on the product",
        "rear_full": "full view of the rear elevation",
        "rear_partial": "partial view of the rear of the house, framing focused on the product"
      };
      parts.push(aspectMap[brief.exteriorAspect] || "");
    }
  } else if (brief.shootLocation === "interior") {
    // Internal room
    if (brief.room) {
      parts.push(`interior view of a ${brief.room.toLowerCase()}`);
    }
    if (brief.interiorStyle) {
      parts.push(`styled as ${brief.interiorStyle.toLowerCase()}`);
    }
    if (brief.county && brief.housingId) {
      const housingList = HOUSING_STOCK[brief.county] || [];
      const housing = housingList.find(h => h.id === brief.housingId);
      if (housing) parts.push(`set within ${housing.description}`);
    }
    if (brief.exteriorVisible) {
      parts.push(`through the glazing visible: ${brief.exteriorVisible}`);
    }
  } else if (brief.shootLocation === "internal_partition") {
    parts.push(`interior view showing the partition between two rooms${brief.partitionRooms ? ` (${brief.partitionRooms})` : ""}`);
    if (brief.interiorStyle) {
      parts.push(`interior styled as ${brief.interiorStyle.toLowerCase()}`);
    }
  }

  return parts.filter(Boolean).join(", ");
}

// =============================================================================
// Build cinematography block
// =============================================================================
function buildCinematography(brief) {
  let parts = [];

  // Shot angle
  if (brief.shotAngleDescription) parts.push(brief.shotAngleDescription);

  // Composition
  if (brief.compositionDescription) parts.push(brief.compositionDescription);

  // Framing/lens
  if (brief.framingDescription) parts.push(brief.framingDescription);

  // Lighting
  if (brief.lightingDescription) parts.push(brief.lightingDescription);

  // Ground conditions
  if (brief.groundDescription && brief.groundDescription) parts.push(brief.groundDescription);

  // Season
  if (brief.seasonDescription) parts.push(brief.seasonDescription);

  // Camera/film stock
  if (brief.cameraLanguage) parts.push(brief.cameraLanguage);

  return parts.filter(Boolean).join(", ");
}

// =============================================================================
// Build people block (with all the anti-uncanny-valley scaffolding)
// =============================================================================
function buildPeopleBlock(brief) {
  if (!brief.people || brief.people.peopleType === "none") return "";

  const parts = [];
  const p = brief.people;

  // Subject description
  if (p.peopleType === "homeowner_solo") {
    parts.push(`a single homeowner (${p.ethnicity || "white British"}, ${p.ageRange || "age 35-55"}) ${p.action || "engaged in a natural moment in the home"}`);
  } else if (p.peopleType === "homeowner_couple") {
    parts.push(`a homeowner couple (${p.ethnicity || "white British"}, mid-life ${p.ageRange || "age 40-55"}) ${p.action || "in a natural domestic moment together"}`);
  } else if (p.peopleType === "homeowner_family") {
    parts.push(`a family (${p.ethnicity || "white British"}, parents in their late 30s to mid 40s, ${p.children || "with one or two children"}) ${p.action || "in candid family-life moment"}`);
  } else if (p.peopleType === "older_homeowner") {
    parts.push(`an older homeowner (${p.ethnicity || "white British"}, ${p.ageRange || "age 65-75"}) ${p.action || "engaged in a calm everyday moment"}`);
    if (p.mobilityAid) {
      parts.push(MOBILITY_AID_SCAFFOLD);
    }
  } else if (p.peopleType === "installer") {
    parts.push(INSTALLER_DESCRIPTION);
  } else if (p.peopleType === "installer_with_homeowner") {
    parts.push(INSTALLER_DESCRIPTION);
    parts.push(`alongside a homeowner (${p.ethnicity || "white British"}, ${p.ageRange || "age 40-60"}) in conversation or observing the work`);
  }

  // Modernise / contemporary framing
  parts.push(DEMOGRAPHIC_MODERNISER);

  // Anti-uncanny-valley scaffolding
  parts.push(PEOPLE_REALISM_SCAFFOLD);

  // Children-specific framing if children present
  if (p.peopleType === "homeowner_family" || p.children) {
    parts.push(CHILDREN_FRAMING);
  }

  return parts.join(", ");
}

// =============================================================================
// Build pets block (only if explicitly requested)
// =============================================================================
function buildPetsBlock(brief) {
  if (!brief.pets || brief.pets === "none") return "";
  const petMap = {
    dog_calm: "a calm dog (medium-sized, lying down or sitting peacefully) — naturalistic British family pet, breed unspecified or labrador-type",
    dog_active: "an active dog mid-motion (slight motion blur on legs and tail), naturalistic British family pet",
    cat: "a cat sitting calmly or curled, naturalistic British family pet"
  };
  return petMap[brief.pets] || "";
}

// =============================================================================
// Build lived-in details block
// =============================================================================
function buildLivedInBlock(brief) {
  if (!brief.livedInLevel || brief.livedInLevel === "none") return "";

  let sceneKey = "exterior_front";
  if (brief.shootLocation === "exterior") {
    sceneKey = brief.exteriorAspect?.startsWith("rear") ? "exterior_rear" : "exterior_front";
  } else if (brief.shootLocation === "interior") {
    const roomMap = {
      "Kitchen": "kitchen",
      "Living room": "living_room",
      "Bathroom": "bathroom",
      "Dining room": "dining_room",
      "Bedroom": "bedroom",
      "Hallway": "hallway",
      "Conservatory interior": "conservatory",
      "Orangery": "conservatory"
    };
    sceneKey = roomMap[brief.room] || "living_room";
  } else if (brief.shootLocation === "internal_partition") {
    sceneKey = "living_room";
  }

  const details = pickLivedIn(sceneKey, brief.livedInLevel, brief.rotationSeed || 0);
  if (details.length === 0) return "";

  return `lived-in details: ${details.join(", ")}`;
}

// =============================================================================
// Build the negative prompt
// =============================================================================
function buildNegativePrompt(brief) {
  const parts = [UNIVERSAL_NEGATIVES, UK_NEGATIVES];
  if (brief.people && brief.people.peopleType !== "none") {
    parts.push(PEOPLE_NEGATIVES);
  }
  // Macro/technical context-specific
  if (brief.scenePresetId === "technical") {
    parts.push("CGI render look, fake material textures, plastic perfect surfaces");
  }
  return parts.join(", ");
}

// =============================================================================
// Main prompt assembly — model-specific
// =============================================================================
export function buildPrompt(brief) {
  const product = PRODUCTS[brief.productId];
  const scene = SCENE_PRESETS.find(s => s.id === brief.scenePresetId);
  const platform = PLATFORMS[brief.platform];
  const modelMeta = MODEL_SYNTAX[brief.targetModel];

  if (!product || !scene || !platform || !modelMeta) {
    return { error: "Brief incomplete — missing product, scene, platform, or target model." };
  }

  // Build sections
  const productDescription = buildProductDescription(brief);
  const locationContext = buildLocationContext(brief);
  const cinematography = buildCinematography(brief);
  const peopleBlock = buildPeopleBlock(brief);
  const petsBlock = buildPetsBlock(brief);
  const livedInBlock = buildLivedInBlock(brief);

  // Scene preset intent layer
  const sceneIntent = scene.intent;

  // Platform tone
  const platformTone = `editorial tone for ${platform.label}: ${platform.tone}`;

  // Aspect ratio
  const aspect = brief.aspectRatio || platform.aspectRatios.image[0];

  // Subject opening
  let subjectOpening = "";
  if (brief.assetType === "image") {
    if (brief.scenePresetId === "atmospheric") subjectOpening = "Atmospheric architectural photography of";
    else if (brief.scenePresetId === "technical") subjectOpening = brief.technicalIsolation ? "Studio macro photograph of" : "Architectural detail photograph of";
    else if (brief.scenePresetId === "trust") subjectOpening = "Documentary photograph of";
    else if (brief.scenePresetId === "lifestyle") subjectOpening = "Lifestyle photograph of";
    else subjectOpening = "Architectural photograph of";
  } else if (brief.assetType === "video") {
    subjectOpening = "Cinematic video shot of";
  }

  // Build the assembled prompt body
  const bodyParts = [
    `${subjectOpening} ${productDescription}`,
    locationContext,
    cinematography,
    peopleBlock,
    petsBlock,
    livedInBlock,
    sceneIntent,
    "British UK contextual details only, real photography aesthetic, naturalistic"
  ].filter(Boolean);

  const promptBody = bodyParts.join(". ") + ".";

  // Negative prompt
  const negative = buildNegativePrompt(brief);

  // Model-specific output formatting
  const outputs = formatForModel(promptBody, negative, aspect, brief, modelMeta);

  // Post-production checklist
  const postProduction = buildPostProductionChecklist(brief, platform, aspect);

  // Music brief (only for video)
  const music = brief.assetType === "video" ? buildMusicBrief(brief) : null;

  return {
    mainPrompt: outputs.mainPrompt,
    negativePrompt: outputs.negativePrompt,
    parameters: outputs.parameters,
    aspectRatio: aspect,
    postProduction,
    music,
    modelNotes: modelMeta.notes,
    productSummary: {
      product: product.name,
      configuration: brief.configuration,
      colour: brief.colourName,
      glass: brief.compdoorGlass || brief.glassType,
      hardware: brief.hardware
    }
  };
}

// =============================================================================
// Format prompt by model — handles syntax differences
// =============================================================================
function formatForModel(body, negative, aspect, brief, modelMeta) {
  let mainPrompt = body;
  let negativePrompt = negative;
  let parameters = "";

  if (brief.targetModel === "midjourney") {
    // Midjourney: dense, with --no for negatives, --ar, --style raw, --v 6.1
    parameters = `--ar ${aspect} --style raw --v 6.1`;
    if (brief.referenceImage) {
      parameters += ` --cref ${brief.referenceImage} --cw 100`;
    }
    mainPrompt = `${body} ${parameters} --no ${negative}`;
    negativePrompt = `(included inline as --no flag): ${negative}`;
  } else if (brief.targetModel === "flux") {
    parameters = `Aspect ratio: ${aspect} | Output: photorealistic`;
    mainPrompt = body + (brief.referenceImage ? `\n\nReference image: ${brief.referenceImage}` : "");
    negativePrompt = `Avoid: ${negative}`;
  } else if (brief.targetModel === "nanobanana") {
    parameters = `Aspect ratio: ${aspect}`;
    mainPrompt = body + (brief.referenceImage ? `\n\nUse reference image as guide.` : "");
    negativePrompt = `Avoid in the image: ${negative}`;
  } else if (brief.targetModel === "veo3") {
    parameters = `Aspect ratio: ${aspect} | Duration: ${brief.duration || 8}s`;
    // Veo 3: trim length per shot — see length guardrail
    mainPrompt = trimToLength(body, 70);
    negativePrompt = `Avoid: ${negative}`;
  } else if (brief.targetModel === "kling") {
    parameters = `Aspect ratio: ${aspect} | Duration: ${brief.duration || 5}s | Mode: Pro`;
    mainPrompt = body;
    negativePrompt = negative;
  }

  return { mainPrompt, negativePrompt, parameters };
}

function trimToLength(text, targetWords) {
  const words = text.split(/\s+/);
  if (words.length <= targetWords + 10) return text;
  // Trim by removing later sentences
  const sentences = text.split(/\. /);
  let result = sentences[0]; // Always include the first sentence even if it's long
  for (let i = 1; i < sentences.length; i++) {
    const candidate = result + ". " + sentences[i];
    if (candidate.split(/\s+/).length > targetWords) break;
    result = candidate;
  }
  return result + (result.endsWith(".") ? "" : ".");
}

// =============================================================================
// Post-production checklist
// =============================================================================
function buildPostProductionChecklist(brief, platform, aspect) {
  const items = [
    `Export at ${aspect} aspect ratio for ${platform.label}`,
    "Overlay any text in SF Pro typeface (use #2c2c2c on light backgrounds, #f7f9fa on dark backgrounds)",
    "Place WD logo bottom-right corner at approximately 8% width, 24px padding from edge",
    "Brand accent colours for graphic elements only: slate blue #465f73 (primary), warm grey #b8b5af (secondary), peach #e6b8af and pink #ea638c (sparingly for accents like sale tags or hearts only — never on photographic content)",
    "Verify product details visually match the brief before publishing"
  ];
  if (brief.assetType === "video") {
    items.push("Add lower-third graphic in SF Pro with WD logo if narrated");
    items.push("Subtitle in SF Pro at platform-default size, on/off accessibility option for Reels");
  }
  if (brief.scenePresetId === "beforeafter") {
    items.push("Generate the 'before' frame with identical composition to 'after' for split-screen alignment");
  }
  return items;
}

// =============================================================================
// Music brief
// =============================================================================
function buildMusicBrief(brief) {
  const preset = MUSIC_PRESETS[brief.scenePresetId] || MUSIC_PRESETS.lifestyle;
  return {
    mood: preset.mood,
    bpm: preset.bpm,
    energy: preset.energy,
    searchTerms: {
      "Epidemic Sound": preset.epidemic,
      "Artlist": preset.artlist
    },
    avoid: preset.avoid,
    syncNote: brief.duration && brief.duration > 8 ? "Aim to align the key visual reveal moment to a chord change or percussion entry; build energy into the final 3 seconds." : "Lock to a single sustained mood; one clean musical idea for short-form."
  };
}

// =============================================================================
// Variation generator — returns 3 variations of the brief with different angles/lighting
// =============================================================================
export function buildVariations(brief) {
  const variations = [];
  const baseAngles = ["three_quarter", "eye_level", "low_hero"];
  const baseLightings = brief.lightingId ? [brief.lightingId] : ["overcast_soft", "bright_overcast", "blue_hour"];

  for (let i = 0; i < 3; i++) {
    const variantBrief = { ...brief, rotationSeed: i };
    // Vary angle on variations 2 and 3
    if (i > 0) {
      const angleId = baseAngles[i % baseAngles.length];
      const angleObj = SHOT_ANGLES.find(a => a.id === angleId);
      if (angleObj) {
        variantBrief.shotAngleId = angleId;
        variantBrief.shotAngleDescription = angleObj.description;
      }
    }
    variations.push({
      label: i === 0 ? "Variation A — primary" : i === 1 ? "Variation B — alternate angle" : "Variation C — alternate composition",
      result: buildPrompt(variantBrief)
    });
  }
  return variations;
}

// =============================================================================
// Carousel generator — anchor + variation frames
// =============================================================================
export function buildCarousel(brief, frameCount = 5) {
  const frames = [];

  // Frame 1 = anchor
  frames.push({
    label: "Frame 1 — Anchor (generate first, use as reference for subsequent frames)",
    result: buildPrompt({ ...brief, rotationSeed: 0 }),
    isAnchor: true
  });

  // Subsequent frames reference the anchor
  const angles = ["three_quarter", "eye_level", "low_hero", "interior_outward", "tight_crop"];
  for (let i = 1; i < frameCount; i++) {
    const angleId = angles[(i - 1) % angles.length];
    const variantBrief = {
      ...brief,
      rotationSeed: i,
      shotAngleId: angleId,
      anchorReference: true
    };
    frames.push({
      label: `Frame ${i + 1} — references anchor frame for consistency`,
      result: buildPrompt(variantBrief),
      anchorNote: brief.targetModel === "midjourney"
        ? "Append --cref [URL of generated frame 1] --cw 100 to maintain architectural and contextual consistency."
        : brief.targetModel === "flux"
          ? "Use frame 1 as reference image input."
          : "Provide frame 1 as reference image."
    });
  }
  return frames;
}

// =============================================================================
// Video shot list generator
// =============================================================================
export function buildVideoShotList(brief) {
  const shots = [];

  if (brief.scenePresetId === "lifestyle") {
    shots.push({
      label: "Shot 1 (0:00-0:03) — Establishing wide",
      duration: 3,
      cameraMotion: "static or slow push-in",
      result: buildPrompt({ ...brief, framingId: "wide_24", framingDescription: "24mm equivalent wide environmental establishing", duration: 3 })
    });
    shots.push({
      label: "Shot 2 (0:03-0:06) — Detail of interaction",
      duration: 3,
      cameraMotion: "slow follow / handheld with subject",
      result: buildPrompt({ ...brief, framingId: "portrait_85", framingDescription: "85mm portrait compression, shallow depth of field", duration: 3 })
    });
    shots.push({
      label: "Shot 3 (0:06-0:10) — Reveal / payoff wide",
      duration: 4,
      cameraMotion: "slow tracking forward",
      result: buildPrompt({ ...brief, framingId: "wide_24", framingDescription: "24mm equivalent wide reveal", duration: 4 })
    });
  } else if (brief.scenePresetId === "trust") {
    shots.push({
      label: "Shot 1 — Establishing (installer arriving / setup)",
      duration: 3,
      cameraMotion: "static or slow pan",
      result: buildPrompt({ ...brief, framingId: "wide_24", framingDescription: "24mm wide establishing", duration: 3 })
    });
    shots.push({
      label: "Shot 2 — Mid of installer working",
      duration: 4,
      cameraMotion: "subtle handheld",
      result: buildPrompt({ ...brief, framingId: "standard_35", framingDescription: "35mm natural perspective on the work", duration: 4 })
    });
    shots.push({
      label: "Shot 3 — Macro of hands and detail",
      duration: 3,
      cameraMotion: "static, shallow focus",
      result: buildPrompt({ ...brief, framingId: "macro", framingDescription: "macro detail of hands and tools on the product", duration: 3 })
    });
    shots.push({
      label: "Shot 4 — Finished reveal",
      duration: 3,
      cameraMotion: "slow pull-back",
      result: buildPrompt({ ...brief, framingId: "wide_24", framingDescription: "wide reveal of finished install", duration: 3 })
    });
  } else if (brief.scenePresetId === "atmospheric") {
    shots.push({
      label: "Shot 1 — Atmospheric establishing",
      duration: 5,
      cameraMotion: "very slow drift forward",
      result: buildPrompt({ ...brief, duration: 5 })
    });
    shots.push({
      label: "Shot 2 — Detail / micro moment",
      duration: 3,
      cameraMotion: "static",
      result: buildPrompt({ ...brief, framingId: "portrait_85", framingDescription: "85mm intimate detail", duration: 3 })
    });
  } else {
    // Default: single shot
    shots.push({
      label: "Single shot",
      duration: brief.duration || 5,
      cameraMotion: "static or subtle move",
      result: buildPrompt(brief)
    });
  }

  return shots;
}
