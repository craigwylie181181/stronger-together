// ============================================================
// STRONGER TOGETHER â Product catalogue
// Updated with Higgsfield Soul 2.0 AI model photography
// Full colour-variant image support â generated product images
// ============================================================

window.ST_COLORS = {
  obsidian:   { name: "Obsidian",     hex: "#1A1714" },
  terracotta: { name: "Terracotta",   hex: "#C4613A" },
  sand:       { name: "Warm Sand",    hex: "#F5F0E8", border: "#E4DCCE" },
  sage:       { name: "Sage",         hex: "#8A9E8C" },
  rose:       { name: "Dusty Rose",   hex: "#C9967C" },
  gold:       { name: "Desert Gold",  hex: "#B8963E" }
};

// Higgsfield Soul 2.0 AI model images â CloudFront CDN
const HF = (filename) => `https://d8j0ntlcm91z4.cloudfront.net/user_3AujfoSOHSPwaMEsdxPXZgPgl8h/${filename}`;

// ââ NEW generated product images ââââââââââââââââââââââââââââ
const NEW_IMG = {
  // FL-CAP (5 colours)
  capObs: HF("hf_20260422_080452_3b118d9f-245b-4525-916e-e37714540fa7.png"),
  capTer: HF("hf_20260422_081056_b1fbb8f3-94ab-4a22-84b3-ec9145ae4bbb.png"),
  capSan: HF("hf_20260422_081341_c6310dba-78c6-45e6-81d7-11beff9c9077.png"),
  capSag: HF("hf_20260422_081556_1d370654-533d-4266-8764-e0c2b678eebc.png"),
  capRos: HF("hf_20260422_081753_bdbe40b5-1322-4a82-a933-23a77ee2608b.png"),

  // FL-LEG (4 colours â no TER)
  legObs: HF("hf_20260422_081950_73e42fca-493f-484f-b951-6eb521c5638c.png"),
  legSan: HF("hf_20260422_082145_65508de4-0949-4589-844b-55f5226a6884.png"),
  legSag: HF("hf_20260422_082401_9d984536-c827-48a4-b12c-d1ec4a888532.png"),
  legRos: HF("hf_20260422_082613_08cce884-f5e7-4149-ab12-90132c17bb1b.png"),

  // FL-BRA (4 colours â no OBS)
  braTer: HF("hf_20260422_082812_9395167c-773b-4c2c-8907-5feef8a51e39.png"),
  braSan: HF("hf_20260422_083028_2d70dc25-cc93-4a21-bac8-497a9f287a5c.png"),
  braSag: HF("hf_20260422_083248_b1b2e5e0-c50a-4bbc-a158-8ea2ff873018.png"),
  braRos: HF("hf_20260422_083442_1b13ae08-688d-4f07-a589-caf6a7d62014.png"),

  // FL-WND (2 colours only)
  wndObs: HF("hf_20260422_084120_e61d16f9-ae1c-4060-aa3a-f29d15ed6039.png"),
  wndSan: HF("hf_20260422_084503_476240e9-6e2f-4eac-8b86-2875b23f6d12.png"),

  // FN-SHS â Foundation Short Shorts (5 colours)
  shsObs: HF("hf_20260422_084700_f8c24e87-1c6d-43aa-b888-0c92bf4cea08.png"),
  shsTer: HF("hf_20260422_084857_9979e214-9692-4ffe-acb5-a221ea0784c4.png"),
  shsSan: HF("hf_20260422_085103_aa5a33cb-920b-493e-a424-801b49a60e52.png"),
  shsSag: HF("hf_20260422_085311_545ecf56-b1d1-4797-a0cb-c85b81c646c6.png"),
  shsRos: HF("hf_20260422_085509_80b9a81b-2f27-4c52-aa7d-89268bb895ed.png"),

  // FN-BKR â Foundation Biker Short (5 colours)
  bkrObs: HF("hf_20260422_085734_93a6ce90-8617-4c9d-8e70-4b6fa5e5cc73.png"),
  bkrTer: HF("hf_20260422_090707_32e41798-595d-4fc1-930e-83a9c069140d.png"),
  bkrSan: HF("hf_20260422_090922_49c0140f-23f3-41a8-bb04-0e025cf9499c.png"),
  bkrSag: HF("hf_20260422_091251_58cccbad-8467-4343-b3c6-ca438e8094e8.png"),
  bkrRos: HF("hf_20260422_091449_d49c6fe6-4d18-4c1e-b22b-dfe6d8191234.png"),

  // FN-TNK â Foundation Tank (5 colours)
  tnkObs: HF("hf_20260422_091653_af0c6a1f-d0fa-4e84-bf61-8622e38a9dd4.png"),
  tnkTer: HF("hf_20260422_091858_33b9bc79-7808-41a3-820c-8fa4921dd78a.png"),
  tnkSan: HF("hf_20260422_092101_86390f34-264f-42ad-aa0b-561c18d37699.png"),
  tnkSag: HF("hf_20260422_092309_f0146c8b-493d-4e28-93d0-12fe0efad823.png"),
  tnkRos: HF("hf_20260422_092503_cfb41e95-b119-47e8-8e7b-66cee925a69a.png"),

  // FN-SLS â Foundation Sun-Sleeve (5 colours)
  slsObs: HF("hf_20260422_092719_7b485255-be06-4a4f-80ca-003ea93cc628.png"),
  slsTer: HF("hf_20260422_093241_b8b0530f-b56a-4042-9179-6d7e8020733a.png"),
  slsSan: HF("hf_20260422_093456_1793c737-9857-4d5e-9fe8-920ac8e96f66.png"),
  slsSag: HF("hf_20260422_093702_b1dfe3ba-d084-4844-ad38-7f5116b16a34.png"),
  slsRos: HF("hf_20260422_093918_3c4ef70a-3f04-4605-be8a-294665fd29ae.png"),

  // CK-BIB â Crank Bib Short (5 colours)
  bibObs: HF("hf_20260422_094129_5bb85a4d-34e8-4e48-a0c0-5a910297812e.png"),
  bibTer: HF("hf_20260422_094631_a5c30ff9-4d26-4971-8f01-fe2498a4d6cf.png"),
  bibSan: HF("hf_20260422_094900_bec4b865-205d-4eb9-9dd5-7af2762a62b4.png"),
  bibSag: HF("hf_20260422_095133_65b383ec-0b8b-4431-a04f-7a359ded55bf.png"),
  bibRos: HF("hf_20260422_095403_0533bdf0-6a78-460c-a0b0-5123f7ae7f91.png"),

  // CK-JSY â Crank Summer Jersey (4 colours â no OBS)
  jsyTer: HF("hf_20260422_095845_1efc393b-3092-4fe9-89c4-1593af024331.png"),
  jsySan: HF("hf_20260422_100053_3415d14d-8395-4ef2-8f58-effc2193a58c.png"),
  jsySag: HF("hf_20260422_100248_77521d5e-64ed-4a3c-a6d7-b29f7e6c403d.png"),
  jsyRos: HF("hf_20260422_100504_7690a6a9-2244-4c30-88f5-9c8e3fc298fb.png"),

  // NEW-LTK â Foundation Loose Tank (5 colours)
  ltkObs: HF("hf_20260422_100720_0a0c4e6d-28eb-4c66-a589-31e35c5d6034.png"),
  ltkTer: HF("hf_20260422_101005_b825d6cc-0d97-4f72-9b23-b761349e214b.png"),
  ltkSan: HF("hf_20260422_101232_485ec6a0-e965-4dcd-8eff-45229102f9d5.png"),
  ltkSag: HF("hf_20260422_101451_1e6719bd-1722-4a48-8cc9-4aab747f35fa.png"),
  ltkRos: HF("hf_20260422_101719_7c55a6e3-e0de-4f09-92b8-60c48b359387.png"),

  // NEW-CSS â Foundation Crop Sun-Sleeve (5 colours)
  cssObs: HF("hf_20260422_101946_06918d5e-91e5-45fd-a351-ca48fc2afd8b.png"),
  cssTer: HF("hf_20260422_102210_fee3abad-3aaa-4fc5-8937-47b5c8329559.png"),
  cssSan: HF("hf_20260422_102913_a02faa81-20f2-4db5-b33f-2b8d0b62a430.png"),
  cssSag: HF("hf_20260422_103211_bc5d51cb-6609-4606-99d1-58df2219430e.png"),
  cssRos: HF("hf_20260422_103422_62a5a346-2bca-48cd-9543-697cf5144245.png"),
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
    img: NEW_IMG.legObs,
    imgHover: NEW_IMG.legSag,
    colorImages: {
      obsidian: NEW_IMG.legObs,
      terracotta: NEW_IMG.legObs,
      sand: NEW_IMG.legSan,
      sage: NEW_IMG.legSag,
      rose: NEW_IMG.legRos
    },
    excerpt: "Our hero high-waist legging. 78% Nylon 6,6 / 22% Elastane. Built for the Friday 6am run and everything after.",
    description: "The Friday Legging is the first product Stronger Together ever made and it had to be exceptional. Squat-proof, sweat-tested in UAE heat across months of community runs, and finished to the standard the women who built this brand demanded. Nothing on the Corniche is held back. Neither is this.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane Â· 220gsm Â· 4-way stretch Â· OEKO-TEX Standard 100",
    features: [
      "High-waist, 4â7cm fold-over waistband",
      "7/8 length cut for Gulf climate",
      "Hidden side phone pocket",
      "Flat seams â no chafe on long runs",
      "Squat-proof, opaque, moisture-wick",
      "Co-ord capable with The Friday Bra"
    ],
    care: "Cold wash with like colours. Do not tumble dry. Do not iron. Designed to outlast the club.",
    gallery: [
      NEW_IMG.legObs,
      NEW_IMG.legSan,
      NEW_IMG.legSag,
      NEW_IMG.legRos
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
    img: NEW_IMG.braTer,
    imgHover: NEW_IMG.braSan,
    colorImages: {
      obsidian: NEW_IMG.braTer,
      terracotta: NEW_IMG.braTer,
      sand: NEW_IMG.braSan,
      sage: NEW_IMG.braSag,
      rose: NEW_IMG.braRos
    },
    excerpt: "Medium-support racerback bra. Wide straps, clean front, lined with removable pads. Matches The Friday Legging.",
    description: "A sports bra that works every day of the week. Medium support carries the run club on Fridays and pilates on Mondays. The silhouette is clean enough to wear on its own â and that's the point. We made it so you don't have to think about it.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane Â· Matching Friday Legging fabric",
    features: [
      "Racerback construction for shoulder mobility",
      "Wide 3cm+ straps â no digging",
      "Wide underband for rib support",
      "Removable cup pads",
      "Clean front â no seams, no logo across bust",
      "Heat-comfort design, tested in UAE climate"
    ],
    care: "Cold wash. Flat dry. Replace pads as needed.",
    gallery: [NEW_IMG.braTer, NEW_IMG.braSan, NEW_IMG.braSag, NEW_IMG.braRos]
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
    img: NEW_IMG.legObs,
    imgHover: NEW_IMG.legSan,
    colorImages: {
      obsidian: NEW_IMG.legObs,
      terracotta: NEW_IMG.legObs,
      sand: NEW_IMG.legSan,
      sage: NEW_IMG.legSag,
      rose: NEW_IMG.legRos
    },
    excerpt: "The Friday Legging in our signature terracotta. A nod to the warm Gulf clay and the brand accent you'll recognise from a distance.",
    description: "Same legging, different feeling. Terracotta is the colour of the brand â the warm Gulf clay you see at sunrise on the Corniche. A subtle marker across the Friday runs.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane Â· 220gsm Â· 4-way stretch",
    features: [
      "Signature terracotta dye â colourfast tested for UAE sun",
      "High-waist, fold-over waistband",
      "Hidden phone pocket",
      "Squat-proof, moisture-wick"
    ],
    care: "Cold wash. Colours stay true for 100+ washes.",
    gallery: [
      NEW_IMG.legObs,
      NEW_IMG.legSan,
      NEW_IMG.legSag,
      NEW_IMG.legRos
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
    img: NEW_IMG.braSan,
    imgHover: NEW_IMG.braTer,
    colorImages: {
      obsidian: NEW_IMG.braTer,
      terracotta: NEW_IMG.braTer,
      sand: NEW_IMG.braSan,
      sage: NEW_IMG.braSag,
      rose: NEW_IMG.braRos
    },
    excerpt: "The Friday Bra in warm sand. Almost white, never cold white.",
    description: "Designed against the desert palette, not a European minimal one. This is the colour of Saadiyat beach at sunrise â warmer than white, softer than cream.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane",
    features: ["Matching Friday Legging fabric", "Clean, co-ord ready", "Medium support"],
    care: "Cold wash, flat dry.",
    gallery: [NEW_IMG.braSan, NEW_IMG.braTer, NEW_IMG.braSag, NEW_IMG.braRos]
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
    img: NEW_IMG.bkrObs,
    imgHover: NEW_IMG.bkrSag,
    colorImages: {
      obsidian: NEW_IMG.bkrObs,
      terracotta: NEW_IMG.bkrTer,
      sand: NEW_IMG.bkrSan,
      sage: NEW_IMG.bkrSag,
      rose: NEW_IMG.bkrRos
    },
    excerpt: "Mid-thigh biker short for the gym and the ride. Flat seams, high rise, zero roll-down.",
    description: "Built for the barbell, the spin studio, and everything strength-based. Same fabric science as The Friday Legging, cut shorter for heat and freedom.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane Â· 220gsm",
    features: ["Mid-thigh cut", "High rise, stays put", "Flat seams", "Squat-proof", "Inner leg pocket"],
    care: "Cold wash, hang dry.",
    gallery: [NEW_IMG.bkrObs, NEW_IMG.bkrTer, NEW_IMG.bkrSan, NEW_IMG.bkrSag, NEW_IMG.bkrRos]
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
    img: NEW_IMG.tnkSan,
    imgHover: NEW_IMG.tnkObs,
    colorImages: {
      obsidian: NEW_IMG.tnkObs,
      terracotta: NEW_IMG.tnkTer,
      sand: NEW_IMG.tnkSan,
      sage: NEW_IMG.tnkSag,
      rose: NEW_IMG.tnkRos
    },
    excerpt: "A soft, weightless tank for training and running in the heat. Cropped hem, relaxed fit.",
    description: "A tank designed for UAE summer. Loose through the body, cropped at the hip so it doesn't trap heat. Technical fabric that feels like a favourite T-shirt.",
    fabric: "Technical knit Â· 88% Modal / 12% Elastane Â· Featherweight",
    features: ["Cropped hem", "Relaxed through the body", "Raw-edge neckline", "Featherweight â under 90g"],
    care: "Cold wash, flat dry.",
    gallery: [NEW_IMG.tnkObs, NEW_IMG.tnkTer, NEW_IMG.tnkSan, NEW_IMG.tnkSag, NEW_IMG.tnkRos]
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
    img: NEW_IMG.bibObs,
    imgHover: NEW_IMG.bibSag,
    colorImages: {
      obsidian: NEW_IMG.bibObs,
      terracotta: NEW_IMG.bibTer,
      sand: NEW_IMG.bibSan,
      sage: NEW_IMG.bibSag,
      rose: NEW_IMG.bibRos
    },
    excerpt: "Women's cycling bib with a chamois built for Crank Abu Dhabi's Friday rides.",
    description: "Designed with Chloe's cycling studio colleagues, tested through hundreds of kilometres on Yas Island. A bib short that respects women's anatomy â a rare enough thing in cycling that it's worth saying.",
    fabric: "Italian performance knit Â· 68% Nylon / 32% Elastane Â· Pro-level chamois",
    features: ["Multi-density chamois insert", "Wide leg grippers â no dig", "Mesh upper for ventilation", "Designed by and for women"],
    care: "Cold hand wash. Do not tumble.",
    gallery: [NEW_IMG.bibObs, NEW_IMG.bibTer, NEW_IMG.bibSan, NEW_IMG.bibSag, NEW_IMG.bibRos]
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
    img: NEW_IMG.jsyTer,
    imgHover: NEW_IMG.jsySan,
    colorImages: {
      obsidian: NEW_IMG.jsyTer,
      terracotta: NEW_IMG.jsyTer,
      sand: NEW_IMG.jsySan,
      sage: NEW_IMG.jsySag,
      rose: NEW_IMG.jsyRos
    },
    excerpt: "A women's cycling jersey cut for UAE summer. Featherweight, full-zip, three rear pockets.",
    description: "The cycling jersey we couldn't find in the UAE market â so we made it. Women's cut, heat-appropriate weight, fits actual ride needs.",
    fabric: "Ultralight Italian weave Â· Laser-cut hem",
    features: ["Full-length YKK zip", "3 rear cargo pockets + zip pocket", "Silicone hem gripper", "Reflective trim"],
    care: "Cold wash. Flat dry.",
    gallery: [NEW_IMG.jsyTer, NEW_IMG.jsySan, NEW_IMG.jsySag, NEW_IMG.jsyRos]
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
    colors: ["obsidian", "sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: NEW_IMG.wndObs,
    imgHover: NEW_IMG.wndSan,
    colorImages: {
      obsidian: NEW_IMG.wndObs,
      sand: NEW_IMG.wndSan
    },
    excerpt: "An ultralight breathable running top for Gulf mornings. Under 90g. Packs into its own pocket.",
    description: "One piece. Wear it for the pre-dawn Corniche starts in December, run with it around your waist by sunrise. Airy weave, UPF 40 woven in, no insulation â built for the desert, not a European autumn.",
    fabric: "Ultralight perforated ripstop Â· UPF 40 Â· Zero insulation",
    features: ["Under 90g", "Packs into own chest pocket", "Reflective back panel", "UPF 40 sun-blocking weave", "Drop-tail hem"],
    care: "Cold wash. Hang dry.",
    gallery: [NEW_IMG.wndObs, NEW_IMG.wndSan]
  },
  {
    id: "fnd-short-shorts",
    slug: "foundation-short-shorts",
    name: "The Foundation Short Shorts",
    line: "The Foundation Line",
    category: "short",
    discipline: ["gym", "run"],
    price: 325,
    colorKey: "sage",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: NEW_IMG.shsSag,
    imgHover: NEW_IMG.shsObs,
    colorImages: {
      obsidian: NEW_IMG.shsObs,
      terracotta: NEW_IMG.shsTer,
      sand: NEW_IMG.shsSan,
      sage: NEW_IMG.shsSag,
      rose: NEW_IMG.shsRos
    },
    excerpt: "The gym-cut version of our hero short. Same fabric, seamless side panel, zero distraction.",
    description: "For the days where the workout is strength, not distance. Side seam removed, waistband reinforced, fit adjusted for squat mechanics.",
    fabric: "78% Nylon 6,6 Â· 22% Elastane Â· 200gsm (lighter than Friday, heat-optimised)",
    features: ["Seamless side panel", "Reinforced waistband", "Gusset â increased mobility"],
    care: "Cold wash, flat dry.",
    gallery: [NEW_IMG.shsObs, NEW_IMG.shsTer, NEW_IMG.shsSan, NEW_IMG.shsSag, NEW_IMG.shsRos]
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
    img: NEW_IMG.slsRos,
    imgHover: NEW_IMG.slsObs,
    colorImages: {
      obsidian: NEW_IMG.slsObs,
      terracotta: NEW_IMG.slsTer,
      sand: NEW_IMG.slsSan,
      sage: NEW_IMG.slsSag,
      rose: NEW_IMG.slsRos
    },
    excerpt: "A featherweight UPF 50+ long-sleeve for Corniche sunrise runs and modesty-conscious training.",
    description: "Designed for the women who want shoulder and arm coverage in 40Â°C â whether for the Gulf sun or for modesty. Perforated weave keeps air moving, UPF 50+ blocks the burn, thumb holes keep sleeves down on the run.",
    fabric: "Technical perforated knit Â· UPF 50+ Â· Moisture-wick Â· Featherweight (sub-110g)",
    features: ["UPF 50+ sun protection", "Perforated ventilation panels", "Thumb holes", "Relaxed, modest fit", "Flat seams"],
    care: "Cold wash. Hang dry.",
    gallery: [NEW_IMG.slsObs, NEW_IMG.slsTer, NEW_IMG.slsSan, NEW_IMG.slsSag, NEW_IMG.slsRos]
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
    img: NEW_IMG.capObs,
    imgHover: NEW_IMG.capTer,
    colorImages: {
      obsidian: NEW_IMG.capObs,
      terracotta: NEW_IMG.capTer,
      sand: NEW_IMG.capSan,
      sage: NEW_IMG.capSag,
      rose: NEW_IMG.capRos
    },
    excerpt: "A lightweight, packable running cap. Unstructured crown, mesh back, sweat band.",
    description: "Keeps the sun off at 6am on the Corniche. Packs flat in a pocket. Embroidered with a quiet ST on the back panel.",
    fabric: "Ripstop crown Â· Mesh rear panels",
    features: ["Packable, unstructured", "Mesh ventilation", "Adjustable rear strap", "Embroidered ST"],
    care: "Hand wash cold.",
    gallery: [NEW_IMG.capObs, NEW_IMG.capTer, NEW_IMG.capSan, NEW_IMG.capSag, NEW_IMG.capRos]
  },
  {
    id: "fnd-loose-tank",
    slug: "foundation-loose-tank",
    name: "The Foundation Loose Tank",
    line: "The Foundation Line",
    category: "top",
    discipline: ["gym", "run"],
    price: 165,
    badge: "NEW",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: NEW_IMG.ltkObs,
    imgHover: NEW_IMG.ltkSan,
    colorImages: {
      obsidian: NEW_IMG.ltkObs,
      terracotta: NEW_IMG.ltkTer,
      sand: NEW_IMG.ltkSan,
      sage: NEW_IMG.ltkSag,
      rose: NEW_IMG.ltkRos
    },
    excerpt: "An oversized, breathable tank for lifting and recovery days. Cropped hem, dropped armhole.",
    description: "Loose enough to lift in, light enough for the walk home. Dropped armholes, raw-edge finish, and a cropped hem that sits above the waistband. Technical fabric disguised as your favourite old T-shirt.",
    fabric: "88% Modal / 12% Elastane Â· Featherweight knit",
    features: ["Oversized, relaxed fit", "Dropped armhole", "Raw-edge hem and neckline", "Cropped at hip", "Under 85g"],
    care: "Cold wash. Flat dry.",
    gallery: [NEW_IMG.ltkObs, NEW_IMG.ltkTer, NEW_IMG.ltkSan, NEW_IMG.ltkSag, NEW_IMG.ltkRos]
  },
  {
    id: "fnd-crop-sunsleeve",
    slug: "foundation-crop-sun-sleeve",
    name: "The Foundation Crop Sun-Sleeve",
    line: "The Foundation Line",
    category: "top",
    discipline: ["run"],
    price: 245,
    badge: "NEW",
    colorKey: "obsidian",
    colors: ["obsidian", "terracotta", "sand", "sage", "rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    oos: [],
    img: NEW_IMG.cssObs,
    imgHover: NEW_IMG.cssSan,
    colorImages: {
      obsidian: NEW_IMG.cssObs,
      terracotta: NEW_IMG.cssTer,
      sand: NEW_IMG.cssSan,
      sage: NEW_IMG.cssSag,
      rose: NEW_IMG.cssRos
    },
    excerpt: "A cropped UPF 50+ long-sleeve for sun protection on desert runs. Thumb holes, slim fit.",
    description: "Full arm and shoulder coverage in a cropped silhouette. UPF 50+ blocks the Gulf sun. Thumb holes keep sleeves in place on the run. Designed for the women who need sun protection without bulk.",
    fabric: "Technical perforated knit Â· UPF 50+ Â· Moisture-wick Â· Sub-100g",
    features: ["UPF 50+ sun protection", "Cropped hem above waistband", "Thumb holes", "Slim fit", "Perforated ventilation panels"],
    care: "Cold wash. Hang dry.",
    gallery: [NEW_IMG.cssObs, NEW_IMG.cssTer, NEW_IMG.cssSan, NEW_IMG.cssSag, NEW_IMG.cssRos]
  }
];

window.ST_PRODUCT_BY_SLUG = Object.fromEntries(window.ST_PRODUCTS.map(p => [p.slug, p]));
