// ============================================================
// STRONGER TOGETHER — Product catalogue
// Updated with Higgsfield Soul 2.0 AI model photography
// Full colour-variant image support — fixed product images
// ============================================================

window.ST_COLORS = {
  obsidian:   { name: "Obsidian",     hex: "#1A1714" },
  terracotta: { name: "Terracotta",   hex: "#C4613A" },
  sand:       { name: "Warm Sand",    hex: "#F5F0E8", border: "#E4DCCE" },
  sage:       { name: "Sage",         hex: "#8A9E8C" },
  rose:       { name: "Dusty Rose",   hex: "#C9967C" },
  gold:       { name: "Desert Gold",  hex: "#B8963E" }
};

// Higgsfield Soul 2.0 AI model images — CloudFront CDN
const HF = (filename) => `https://d8j0ntlcm91z4.cloudfront.net/user_3AujfoSOHSPwaMEsdxPXZgPgl8h/${filename}`;

// ── ORIGINAL 8 hero images ──────────────────────────────────
const AI = {
  // THE FRIDAY LINE (Run)
  fridayObsidian:  HF("hf_20260421_151237_cdc521c6-af1d-4aa5-a880-868598676cde.png"),
  fridayRose:      HF("hf_20260421_074423_4838b69e-0e0b-4276-bce8-58bfb9550361.png"),
  fridaySage:      HF("hf_20260421_171059_dbafa874-48fd-4290-a879-0baadf1047b3.png"),
  // THE FOUNDATION (Gym)
  foundObsGold:    HF("hf_20260421_151735_1e7d680c-4398-42b7-a332-6f8e4add1de3.png"),
  foundRose:       HF("hf_20260421_152822_91bec3e1-63c5-488e-be0d-31286f3f07b7.png"),
  foundSand:       HF("hf_20260421_152629_195d7300-027e-4291-bda7-11caadbb798d.png"),
  // THE CRANK (Cycle)
  crankObsidian:   HF("hf_20260421_153315_181b31af-4843-4fcf-80f9-5afed1af1e97.png"),
  crankSage:       HF("hf_20260421_080538_54829556-942c-446d-9fe6-644d0ed1204b.png"),
};

// ── 16 colour-variant images ────────────────────────────────
const CV = {
  // Friday Line colour variants
  fridayTerracotta:     HF("hf_20260421_150515_cc2243ce-97cd-4ac6-8068-fa7937572606.png"),
  fridaySand:           HF("hf_20260421_150801_8744d554-6f6f-4736-a2bf-20c0989a803c.png"),
  windrunnerObsidian:   HF("hf_20260421_094617_0b8a861e-c52d-4442-ac0c-f648de794ca5.png"),
  windrunnerTerracotta: HF("hf_20260421_094618_3976922a-4541-4769-940e-bf08078ed605.png"),
  capObsidian:          HF("hf_20260422_034427_fc639ddb-f57e-4a5a-be61-f3c08a4d870e.png"),
  capObsidianAlt:       HF("hf_20260422_033822_e7b6a269-1c0a-41a9-a33f-b6cb88cf90de.png"),
  capTerracotta:        HF("hf_20260422_034633_b1b919d9-6968-4976-b4e8-b53c54962d40.png"),
  capSand:              HF("hf_20260422_034757_e09f6b55-f8f5-43c9-80dd-6dcebaa928dc.png"),
  // Foundation colour variants
  bikerObsidian:        HF("hf_20260421_151735_1e7d680c-4398-42b7-a332-6f8e4add1de3.png"),
  bikerTerracotta:      HF("hf_20260421_151917_ddeb0c53-64d3-4624-ae87-0de355f3f5cb.png"),
  bikerSage:            HF("hf_20260421_152312_17bffc32-08cf-4afc-9db1-71c1e5bdeb45.png"),
  tankObsidian:         HF("hf_20260421_095214_e5053097-1843-4b01-bc46-3e32f2fad48b.png"),
  leggingObsidian:      HF("hf_20260421_171430_e239ec7b-a611-4022-945a-0a2ddb950c70.png"),
  leggingRose:          HF("hf_20260421_171632_1fdbc700-9e41-4f64-9db0-867219a46343.png"),
  sunSleeveObsidian:    HF("hf_20260421_095513_cbe85eae-c01e-476c-9c06-ca967e2625dd.png"),
  sunSleeveSand:        HF("hf_20260421_095606_7ae06042-771e-447f-bddd-cdb5e11bcffd.png"),
  // Additional Foundation variants
  tankSage:             HF("hf_20260421_111533_7a2100d5-ed02-4544-9012-2bc5cb549488.png"),
  // Crank colour variants
  crankTerracotta:      HF("hf_20260421_153119_3143025c-092a-4194-9145-31f03b599502.png"),
  crankSand:            HF("hf_20260421_153522_49a43f8f-f3b5-4689-a48c-e5a885d3cebd.png"),
  // NEW: Fixed product images
  braObsidian:            HF("hf_20260421_193410_de51842a-0ef1-417c-8af5-1c438180abd9.png"),
  crankFemaleObsidian:    HF("hf_20260421_193107_52f66299-0714-4cc0-9125-78bc6eef5d6d.png"),
  windrunnerJacket:       HF("hf_20260421_184653_2c41ec4f-9b7d-4397-ac36-252a5ce65762.png"),
  windrunnerJacketAlt:    HF("hf_20260421_184532_6964d170-bca0-44fb-92b8-1cc0e72cef27.png"),
};

window.ST_PRODUCTS = [
  {
    id: "fl-legging-obsidian",
    slug: "friday-legging-obsidian",
    name: "The Friday Legging",
    line: "The Friday Line",
    category: "legging",
    discipline: ["run", "gym", "cycle"],
    price: 335,
    badge: "NEW",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: AI.fridayObsidian,
    imgHover: AI.fridaySage,
    colorImages: {
      obsidian: AI.fridayObsidian,
      terracotta: CV.fridayTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: AI.fridayRose
    },
    excerpt: "Our hero high-waist legging. 78% Nylon 6,6 / 22% Elastane. Built for the Friday 6am run and everything after.",
    description: "The Friday Legging is the first product Stronger Together ever made and it had to be exceptional. Squat-proof, sweat-tested in UAE heat across months of community runs, and finished to the standard the women who built this brand demanded. Nothing on the Corniche is held back. Neither is this.",
    fabric: "78% Nylon 6,6 · 22% Elastane · 220gsm · 4-way stretch · OEKO-TEX Standard 100",
    features: [
      "High-waist, 4–7cm fold-over waistband",
      "7/8 length cut for Gulf climate",
      "Hidden side phone pocket",
      "Flat seams — no chafe on long runs",
      "Squat-proof, opaque, moisture-wick",
      "Co-ord capable with The Friday Bra"
    ],
    care: "Cold wash with like colours. Do not tumble dry. Do not iron. Designed to outlast the club.",
    gallery: [
      AI.fridayObsidian,
      CV.fridayTerracotta,
      CV.fridaySand,
      AI.fridaySage,
      AI.fridayRose
    ]
  },
  {
    id: "fl-bra-obsidian",
    slug: "friday-bra-obsidian",
    name: "The Friday Bra",
    line: "The Friday Line",
    category: "bra",
    discipline: ["run", "gym", "cycle"],
    price: 235,
    badge: "NEW",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: CV.braObsidian,
    imgHover: CV.fridayTerracotta,
    colorImages: {
      obsidian: CV.braObsidian,
      terracotta: CV.fridayTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: AI.fridayRose
    },
    excerpt: "Medium-support racerback bra. Wide straps, clean front, lined with removable pads. Matches The Friday Legging.",
    description: "A sports bra that works every day of the week. Medium support carries the run club on Fridays and pilates on Mondays. The silhouette is clean enough to wear on its own — and that's the point. We made it so you don't have to think about it.",
    fabric: "78% Nylon 6,6 · 22% Elastane · Matching Friday Legging fabric",
    features: [
      "Racerback construction for shoulder mobility",
      "Wide 3cm+ straps — no digging",
      "Wide underband for rib support",
      "Removable cup pads",
      "Clean front — no seams, no logo across bust",
      "Heat-comfort design, tested in UAE climate"
    ],
    care: "Cold wash. Flat dry. Replace pads as needed.",
    gallery: [CV.braObsidian, CV.fridayTerracotta, CV.fridaySand, AI.fridaySage, AI.fridayRose]
  },
  {
    id: "fl-legging-terracotta",
    slug: "friday-legging-terracotta",
    name: "The Friday Legging",
    line: "The Friday Line",
    category: "legging",
    discipline: ["run", "gym"],
    price: 335,
    badge: "LAUNCH COLOUR",
    colorKey: "terracotta",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: ["XS"],
    img: CV.fridayTerracotta,
    imgHover: AI.fridayObsidian,
    colorImages: {
      obsidian: AI.fridayObsidian,
      terracotta: CV.fridayTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: AI.fridayRose
    },
    excerpt: "The Friday Legging in our signature terracotta. A nod to the warm Gulf clay and the brand accent you'll recognise from a distance.",
    description: "Same legging, different feeling. Terracotta is the colour of the brand — the warm Gulf clay you see at sunrise on the Corniche. A subtle marker across the Friday runs.",
    fabric: "78% Nylon 6,6 · 22% Elastane · 220gsm · 4-way stretch",
    features: [
      "Signature terracotta dye — colourfast tested for UAE sun",
      "High-waist, fold-over waistband",
      "Hidden phone pocket",
      "Squat-proof, moisture-wick"
    ],
    care: "Cold wash. Colours stay true for 100+ washes.",
    gallery: [
      CV.fridayTerracotta,
      AI.fridayObsidian,
      CV.fridaySand,
      AI.fridaySage,
      AI.fridayRose
    ]
  },
  {
    id: "fl-bra-sand",
    slug: "friday-bra-sand",
    name: "The Friday Bra",
    line: "The Friday Line",
    category: "bra",
    discipline: ["run", "gym", "cycle"],
    price: 235,
    colorKey: "sand",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: CV.fridaySand,
    imgHover: CV.braObsidian,
    colorImages: {
      obsidian: CV.braObsidian,
      terracotta: CV.fridayTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: AI.fridayRose
    },
    excerpt: "The Friday Bra in warm sand. Almost white, never cold white.",
    description: "Designed against the desert palette, not a European minimal one. This is the colour of Saadiyat beach at sunrise — warmer than white, softer than cream.",
    fabric: "78% Nylon 6,6 · 22% Elastane",
    features: ["Matching Friday Legging fabric", "Clean, co-ord ready", "Medium support"],
    care: "Cold wash, flat dry.",
    gallery: [CV.fridaySand, CV.braObsidian, CV.fridayTerracotta, AI.fridaySage, AI.fridayRose]
  },
  {
    id: "fnd-shorts",
    slug: "foundation-biker-short",
    name: "The Foundation Biker Short",
    line: "The Foundation Line",
    category: "short",
    discipline: ["gym", "cycle"],
    price: 215,
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: CV.bikerObsidian,
    imgHover: CV.bikerSage,
    colorImages: {
      obsidian: CV.bikerObsidian,
      terracotta: CV.bikerTerracotta,
      sand: AI.foundSand,
      sage: CV.bikerSage,
      rose: AI.foundRose
    },
    excerpt: "Mid-thigh biker short for the gym and the ride. Flat seams, high rise, zero roll-down.",
    description: "Built for the barbell, the spin studio, and everything strength-based. Same fabric science as The Friday Legging, cut shorter for heat and freedom.",
    fabric: "78% Nylon 6,6 · 22% Elastane · 220gsm",
    features: ["Mid-thigh cut", "High rise, stays put", "Flat seams", "Squat-proof", "Inner leg pocket"],
    care: "Cold wash, hang dry.",
    gallery: [CV.bikerObsidian, CV.bikerTerracotta, AI.foundSand, CV.bikerSage, AI.foundRose]
  },
  {
    id: "fnd-tank",
    slug: "foundation-tank",
    name: "The Foundation Tank",
    line: "The Foundation Line",
    category: "top",
    discipline: ["gym", "run"],
    price: 180,
    colorKey: "sand",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: AI.foundSand,
    imgHover: CV.tankObsidian,
    colorImages: {
      obsidian: CV.tankObsidian,
      terracotta: CV.bikerTerracotta,
      sand: AI.foundSand,
      sage: CV.tankSage,
      rose: AI.foundRose
    },
    excerpt: "A soft, weightless tank for training and running in the heat. Cropped hem, relaxed fit.",
    description: "A tank designed for UAE summer. Loose through the body, cropped at the hip so it doesn't trap heat. Technical fabric that feels like a favourite T-shirt.",
    fabric: "Technical knit · 88% Modal / 12% Elastane · Featherweight",
    features: ["Cropped hem", "Relaxed through the body", "Raw-edge neckline", "Featherweight — under 90g"],
    care: "Cold wash, flat dry.",
    gallery: [AI.foundSand, CV.tankObsidian, CV.bikerTerracotta, CV.tankSage, AI.foundRose]
  },
  {
    id: "crk-bib",
    slug: "crank-bib-short",
    name: "The Crank Bib Short",
    line: "The Crank Line",
    category: "cycle",
    discipline: ["cycle"],
    price: 449,
    badge: "S2 DROP",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: ["XL"],
    img: CV.crankFemaleObsidian,
    imgHover: AI.crankSage,
    colorImages: {
      obsidian: CV.crankFemaleObsidian,
      terracotta: CV.crankTerracotta,
      sand: CV.crankSand,
      sage: AI.crankSage,
      rose: AI.foundRose
    },
    excerpt: "Women's cycling bib with a chamois built for Crank Abu Dhabi's Friday rides.",
    description: "Designed with Chloe's cycling studio colleagues, tested through hundreds of kilometres on Yas Island. A bib short that respects women's anatomy — a rare enough thing in cycling that it's worth saying.",
    fabric: "Italian performance knit · 68% Nylon / 32% Elastane · Pro-level chamois",
    features: ["Multi-density chamois insert", "Wide leg grippers — no dig", "Mesh upper for ventilation", "Designed by and for women"],
    care: "Cold hand wash. Do not tumble.",
    gallery: [CV.crankFemaleObsidian, CV.crankTerracotta, CV.crankSand, AI.crankSage, AI.foundRose]
  },
  {
    id: "crk-jersey",
    slug: "crank-summer-jersey",
    name: "The Crank Summer Jersey",
    line: "The Crank Line",
    category: "cycle",
    discipline: ["cycle"],
    price: 389,
    colorKey: "terracotta",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: CV.crankTerracotta,
    imgHover: CV.crankFemaleObsidian,
    colorImages: {
      obsidian: CV.crankFemaleObsidian,
      terracotta: CV.crankTerracotta,
      sand: CV.crankSand,
      sage: AI.crankSage,
      rose: AI.foundRose
    },
    excerpt: "A women's cycling jersey cut for UAE summer. Featherweight, full-zip, three rear pockets.",
    description: "The cycling jersey we couldn't find in the UAE market — so we made it. Women's cut, heat-appropriate weight, fits actual ride needs.",
    fabric: "Ultralight Italian weave · Laser-cut hem",
    features: ["Full-length YKK zip", "3 rear cargo pockets + zip pocket", "Silicone hem gripper", "Reflective trim"],
    care: "Cold wash. Flat dry.",
    gallery: [CV.crankFemaleObsidian, CV.crankTerracotta, CV.crankSand, AI.crankSage, AI.foundRose]
  },
  {
    id: "fl-windrunner",
    slug: "friday-wind-runner",
    name: "The Friday Windrunner",
    line: "The Friday Line",
    category: "top",
    discipline: ["run", "cycle"],
    price: 245,
    badge: "PREMIUM",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: CV.windrunnerJacket,
    imgHover: CV.windrunnerTerracotta,
    colorImages: {
      obsidian: CV.windrunnerJacket,
      terracotta: CV.windrunnerTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: AI.fridayRose
    },
    excerpt: "An ultralight breathable running top for Gulf mornings. Under 90g. Packs into its own pocket.",
    description: "One piece. Wear it for the pre-dawn Corniche starts in December, run with it around your waist by sunrise. Airy weave, UPF 40 woven in, no insulation — built for the desert, not a European autumn.",
    fabric: "Ultralight perforated ripstop · UPF 40 · Zero insulation",
    features: ["Under 90g", "Packs into own chest pocket", "Reflective back panel", "UPF 40 sun-blocking weave", "Drop-tail hem"],
    care: "Cold wash. Hang dry.",
    gallery: [CV.windrunnerJacket, CV.windrunnerTerracotta, CV.fridaySand, AI.fridaySage, AI.fridayRose]
  },
  {
    id: "fnd-legging-sage",
    slug: "foundation-legging-sage",
    name: "The Foundation Legging",
    line: "The Foundation Line",
    category: "legging",
    discipline: ["gym", "run"],
    price: 325,
    colorKey: "sage",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: AI.fridaySage,
    imgHover: CV.leggingObsidian,
    colorImages: {
      obsidian: CV.leggingObsidian,
      terracotta: CV.fridayTerracotta,
      sand: CV.fridaySand,
      sage: AI.fridaySage,
      rose: CV.leggingRose
    },
    excerpt: "The gym-cut version of our hero legging. Same fabric, seamless side panel, zero distraction.",
    description: "For the days where the workout is strength, not distance. Side seam removed, waistband reinforced, fit adjusted for squat mechanics.",
    fabric: "78% Nylon 6,6 · 22% Elastane · 200gsm (lighter than Friday, heat-optimised)",
    features: ["Seamless side panel", "Reinforced waistband", "Gusset — increased mobility"],
    care: "Cold wash, flat dry.",
    gallery: [AI.fridaySage, CV.leggingObsidian, CV.fridayTerracotta, CV.fridaySand, CV.leggingRose]
  },
  {
    id: "fnd-sunsleeve",
    slug: "foundation-sun-sleeve",
    name: "The Foundation UPF Sun-Sleeve",
    line: "The Foundation Line",
    category: "top",
    discipline: ["gym", "run"],
    price: 215,
    colorKey: "rose",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: AI.foundRose,
    imgHover: CV.sunSleeveSand,
    colorImages: {
      obsidian: CV.sunSleeveObsidian,
      terracotta: CV.bikerTerracotta,
      sand: CV.sunSleeveSand,
      sage: CV.tankSage,
      rose: AI.foundRose
    },
    excerpt: "A featherweight UPF 50+ long-sleeve for Corniche sunrise runs and modesty-conscious training.",
    description: "Designed for the women who want shoulder and arm coverage in 40°C — whether for the Gulf sun or for modesty. Perforated weave keeps air moving, UPF 50+ blocks the burn, thumb holes keep sleeves down on the run.",
    fabric: "Technical perforated knit · UPF 50+ · Moisture-wick · Featherweight (sub-110g)",
    features: ["UPF 50+ sun protection", "Perforated ventilation panels", "Thumb holes", "Relaxed, modest fit", "Flat seams"],
    care: "Cold wash. Hang dry.",
    gallery: [AI.foundRose, CV.sunSleeveObsidian, CV.bikerTerracotta, CV.sunSleeveSand, CV.tankSage]
  },
  {
    id: "fl-cap",
    slug: "friday-run-cap",
    name: "The Friday Cap",
    line: "The Friday Line",
    category: "accessory",
    discipline: ["run"],
    price: 95,
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["One Size"],
    oos: [],
    img: CV.capObsidian,
    imgHover: CV.capTerracotta,
    colorImages: {
      obsidian: CV.capObsidian,
      terracotta: CV.capTerracotta,
      sand: CV.capSand,
      sage: CV.capObsidian,
      rose: CV.capTerracotta
    },
    excerpt: "A lightweight, packable running cap. Unstructured crown, mesh back, sweat band.",
    description: "Keeps the sun off at 6am on the Corniche. Packs flat in a pocket. Embroidered with a quiet ST on the back panel.",
    fabric: "Ripstop crown · Mesh rear panels",
    features: ["Packable, unstructured", "Mesh ventilation", "Adjustable rear strap", "Embroidered ST"],
    care: "Hand wash cold.",
    gallery: [CV.capObsidian, CV.capObsidianAlt, CV.capTerracotta, CV.capSand]
  }
];

window.ST_PRODUCT_BY_SLUG = Object.fromEntries(window.ST_PRODUCTS.map(p => [p.slug, p]));
