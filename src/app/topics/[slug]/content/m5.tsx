import React from "react";

export function getM5Content() {
  return {
    references: [
      "Charaka Sharira Sthana Ch. 8",
      "Sushruta Sharira Sthana Ch. 10",
      "Ashtanga Hridaya Sharira Ch. 1",
      "Kashyapa Samhita — Khila Sthana (Sutikopakramaniya)",
      "Williams Obstetrics Ch. 36",
      "DC Dutta Ch. 11",
    ],

    units: [
      {
        title: "Sutika Kala & Paricharya",
        content: React.createElement("div", null,
          React.createElement("p", { className: "text-gray-700 leading-relaxed" },
            "This unit covers the Sutika Kala (puerperal period) as defined in Ayurveda — typically 1.5 to 6 months depending on the Acharya. It details the Sutika Paricharya (postnatal regimen) including Ahara (diet), Aushadha (medicines), and Vihara (lifestyle) prescribed month-wise for the new mother."
          ),
          React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Sutika Kala duration — Charaka (1.5 months), Kashyapa (6 months)"),
            React.createElement("li", null, "• Sutika Ahara: Panchakola Siddha Peya, Ghrita, Snehapana"),
            React.createElement("li", null, "• Sutika Vihara: Abhyanga, Parisheka, Udara Veshtana"),
            React.createElement("li", null, "• Modern puerperium: 6 weeks postpartum period")
          )
        ),
      },
      {
        title: "Sutika Roga (Puerperal Complications)",
        content: React.createElement("div", null,
          React.createElement("p", { className: "text-gray-700 leading-relaxed" },
            "Complications arising from improper Sutika Paricharya — Sutika Jwara, Sutika Shoola, and other puerperal disorders. Correlation with modern puerperal sepsis, PPH, DVT, and puerperal psychosis."
          ),
          React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Sutika Jwara — puerperal fever/sepsis"),
            React.createElement("li", null, "• Sutika Shoola — afterpains, puerperal pain"),
            React.createElement("li", null, "• Dhatukshaya conditions — anemia, weakness"),
            React.createElement("li", null, "• Modern: PPH, puerperal sepsis, DVT, psychosis")
          )
        ),
      },
      {
        title: "Stanya Vigyana & Navajata Poshana",
        content: React.createElement("div", null,
          React.createElement("p", { className: "text-gray-700 leading-relaxed" },
            "Breastfeeding initiation, Stanya Utpatti (lactogenesis), and the assessment of Stanya Pareeksha. Modern lactation physiology and management of early breastfeeding problems."
          ),
          React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Stanya Utpatti from Rasa Dhatu (Updhatu)"),
            React.createElement("li", null, "• Stanya Pareeksha — tests for breast milk quality"),
            React.createElement("li", null, "• Ksheerapa (colostrum) importance in Ayurveda"),
            React.createElement("li", null, "• Modern: prolactin, oxytocin reflex, BFHI")
          )
        ),
      },
    ],

    orientation: {
      why: "Sutika Paricharya is one of the most unique contributions of Ayurveda to postnatal care. The detailed month-wise regimen prescribed for the new mother — including specific diet, medicines, massage, and lifestyle — has no parallel in modern medicine. Understanding this alongside modern puerperium management is essential for integrative clinical practice and is a favourite exam topic.",
      examWeight: "Very high-yield. Long essay questions on Sutika Paricharya, Sutika Kala, and comparison with modern puerperium are common. Short notes on Sutika Jwara, Panchakola, and Stanya Pareeksha appear frequently. Expect 10-20 mark questions every paper.",
    },

    definition: {
      ayurveda: `
        <p><strong>Sutika</strong> is defined as a woman who has recently delivered (Prasuta Nari). The period following delivery during which the Dhatus that were depleted during pregnancy and labour return to their normal state is called <strong>Sutika Kala</strong>.</p>
        <p class="mt-2">Kashyapa defines Sutika Kala as <strong>6 months</strong>, while Charaka mentions <strong>1.5 months (45 days)</strong>. During this period, the woman is considered vulnerable (Dhatukshaya Avastha) and requires specific Paricharya.</p>
        <p class="mt-2">The Sutika is compared to a <strong>newly formed earthen pot (Adrashushka Ghata)</strong> — fragile and requiring careful handling.</p>
      `,
      modern: `
        <p><strong>Puerperium</strong> is defined as the period from delivery of the placenta to <strong>6 weeks (42 days)</strong> postpartum, during which the reproductive organs return to their pre-pregnant state (involution).</p>
        <p class="mt-2"><strong>Phases:</strong></p>
        <ul class="list-disc pl-4 mt-1">
          <li>Immediate puerperium: first 24 hours</li>
          <li>Early puerperium: up to 7 days</li>
          <li>Remote puerperium: up to 6 weeks</li>
        </ul>
        <p class="mt-2">Key processes: uterine involution, lochia changes, lactation establishment, hormonal readjustment.</p>
      `,
      classification: {
        title: "Sutika Kala — Different Acharyas",
        headers: ["Acharya", "Sutika Kala Duration", "Key Feature", "Modern Correlation"],
        rows: [
          ["<strong>Kashyapa</strong>", "6 months", "Complete Dhatu restoration", "Extended postnatal period"],
          ["<strong>Charaka</strong>", "1.5 months (45 days)", "Agni and Dhatu normalization", "Standard puerperium (42 days)"],
          ["<strong>Sushruta</strong>", "1.5 months", "Garbhashaya Shuddhi", "Uterine involution complete"],
          ["<strong>Vagbhata</strong>", "1.5 months", "Shuddha Artava return", "Return of menstruation"],
        ],
      },
    },

    shlokas: [
      {
        source: "Kashyapa Samhita — Khila Sthana (Sutikopakramaniya)",
        devanagari: "आद्रस्नेहमनासीर्षमभ्यङ्गस्नानभोजनैः |\nसूतिकां परिचर्येत षण्मासान् सुसमाहिता ||",
        transliteration: "ādrasnehamānāsīrṣamabhyaṅgasnānabhojanaiḥ |\nsūtikāṃ paricaryeta ṣaṇmāsān susamāhitā ||",
        meaning: "The Sutika (newly delivered woman) should be carefully attended with warm oleation (Snehana), head massage avoidance (Anasirsha — not lying flat without head support), Abhyanga (oil massage), bathing, and proper diet for six months with full attention and care.",
        clinicalNote: "Kashyapa's 6-month Sutika Kala emphasizes extended postnatal care — far beyond the modern 6-week puerperium. This aligns with WHO recommendations for extended postnatal support, especially for breastfeeding and mental health.",
      },
      {
        source: "Charaka Sharira Sthana 8/48",
        devanagari: "प्रसूतां पञ्चकोलेन सिद्धं सर्पिः पिबेत्ततः |\nस्नेहोपचारं कुर्वीत पथ्याहारं च भोजयेत् ||",
        transliteration: "prasūtāṃ pañcakolena siddhaṃ sarpiḥ pibettatḥ |\nsnehopacāraṃ kurvīta pathyāhāraṃ ca bhojayet ||",
        meaning: "The newly delivered woman should be given Ghrita (clarified butter) prepared with Panchakola (five pungent drugs — Pippali, Pippalimula, Chavya, Chitraka, Nagara). She should be given Sneha therapy (oleation) and wholesome food (Pathya Ahara).",
        clinicalNote: "Panchakola Siddha Ghrita is the cornerstone of Sutika management — it stimulates Agni (digestive fire) which is weakened after delivery, aids uterine involution, promotes lactation, and prevents constipation. The fat content also supports caloric needs for breastfeeding.",
      },
      {
        source: "Ashtanga Hridaya Sharira 1/95-96",
        devanagari: "विशेषतः सूतिकायाः पवनः कुपितो भवेत् |\nरिक्तायां हि ततस्तस्यां सर्वरोगान् करोति सः ||",
        transliteration: "viśeṣataḥ sūtikāyāḥ pavanaḥ kupito bhavet |\nriktāyāṃ hi tatastasyāṃ sarvarogān karoti saḥ ||",
        meaning: "In the Sutika (postpartum woman), Vata Dosha becomes especially aggravated. In her emptied body (Rikta — after evacuation of the fetus), the provoked Vata can cause all types of diseases.",
        clinicalNote: "This explains the Ayurvedic rationale for Sutika Paricharya — the emptied uterus and depleted Dhatus create a Vata-dominant state. This correlates with modern understanding of hormonal fluctuations (estrogen/progesterone crash), physical exhaustion, and susceptibility to infections postpartum.",
      },
    ],

    dualCols: [
      {
        title: "Sutika Paricharya — Postnatal Regimen",
        ayurvedaTitle: "Ayurvedic Sutika Paricharya",
        modernTitle: "Modern Postnatal Care",
        ayurvedaContent: `
          <p><strong>Immediate (Day 1–7):</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Panchakola Siddha Ghrita for 5–7 days</li>
            <li>Panchakola Siddha Peya (gruel) — light, warm, digestible</li>
            <li>Udara Veshtana (abdominal binding)</li>
            <li>Warm water for drinking and bathing</li>
          </ul>
          <p class="mt-2"><strong>Week 2–6:</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Gradual increase in diet complexity</li>
            <li>Abhyanga with Bala Taila daily</li>
            <li>Dashamoola Kwatha Parisheka (warm decoction bath)</li>
            <li>Shatavari Kalpa for lactation</li>
          </ul>
          <p class="mt-2"><strong>Month 2–6:</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Normal diet restoration</li>
            <li>Rasayana (rejuvenation) therapy</li>
            <li>Gradually resume normal activities</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Immediate (First 24 hrs):</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Vital signs monitoring Q15min then Q4H</li>
            <li>Fundal height assessment, lochia monitoring</li>
            <li>Early breastfeeding initiation (within 1 hour)</li>
            <li>Ambulation within 6–8 hours</li>
          </ul>
          <p class="mt-2"><strong>Week 1–6:</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Perineal care, episiotomy wound care</li>
            <li>Iron + calcium supplementation</li>
            <li>Contraception counselling</li>
            <li>Screening for postpartum depression (Edinburgh scale)</li>
            <li>6-week postnatal checkup</li>
          </ul>
          <p class="mt-2"><strong>Warning signs to watch:</strong></p>
          <ul class="list-disc pl-4 space-y-1">
            <li>Heavy bleeding, foul lochia, fever >38°C</li>
            <li>Calf tenderness (DVT), breast engorgement</li>
            <li>Mood disturbances, suicidal thoughts</li>
          </ul>
        `,
      },
      {
        title: "Puerperal Complications",
        ayurvedaTitle: "Sutika Roga",
        modernTitle: "Modern Puerperal Complications",
        ayurvedaContent: `
          <p><strong>Sutika Jwara:</strong> Fever due to Vata-Pitta aggravation from improper Paricharya. Treated with Dashamoola Kwatha, Guduchyadi Yoga.</p>
          <p class="mt-2"><strong>Sutika Shoola:</strong> Abdominal pain from Vata aggravation. Treated with Dashamoola Ghrita, warm fomentation.</p>
          <p class="mt-2"><strong>Stanya Kshaya:</strong> Insufficient milk production. Treated with Shatavari, Vidarikanda, Stanyajanana Yoga.</p>
          <p class="mt-2"><strong>Yoni Srava:</strong> Excessive vaginal discharge. Treated with Lodhrasava, Pushyanuga Churna.</p>
          <p class="mt-2">Kashyapa lists <strong>64 Sutika Rogas</strong> that can occur from improper Paricharya.</p>
        `,
        modernContent: `
          <p><strong>Puerperal Sepsis:</strong> Fever >38°C within 14 days of delivery. Caused by endometritis, wound infection. Rx: IV antibiotics.</p>
          <p class="mt-2"><strong>Secondary PPH:</strong> Bleeding after 24hrs up to 6 weeks. Causes: retained products, subinvolution. Rx: uterotonics, evacuation.</p>
          <p class="mt-2"><strong>DVT/PE:</strong> Deep vein thrombosis from hypercoagulable state. Rx: LMWH, compression stockings.</p>
          <p class="mt-2"><strong>Postpartum Depression:</strong> Affects 10–15% of women. Screen with Edinburgh Scale. Rx: counselling, SSRIs if severe.</p>
          <p class="mt-2"><strong>Mastitis/Breast Abscess:</strong> Staphylococcal infection of breast tissue. Rx: antibiotics, continued breastfeeding, drainage if abscess.</p>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Normal Puerperal Changes — Day-wise Assessment",
        headers: ["Day/Week", "Uterine Involution", "Lochia", "Other Changes"],
        rows: [
          ["Day 1", "At umbilicus, firm", "Lochia rubra (bright red)", "Breast engorgement begins, afterpains"],
          ["Day 3", "3 fingerbreadths below umbilicus", "Lochia rubra → serosa", "Milk 'comes in', lactation established"],
          ["Day 7", "Midway between umbilicus and symphysis", "Lochia serosa (pinkish)", "Perineal healing, mood lability"],
          ["Day 14", "Just above symphysis pubis", "Lochia serosa → alba", "Weight loss begins, hair loss may start"],
          ["Week 6", "Normal pre-pregnant size (pelvic organ)", "Lochia alba (whitish) → ceased", "Cervix closed, menstruation may return (non-lactating)"],
        ],
      },
    ],

    investigations: [
      {
        title: "Postnatal Investigations",
        headers: ["Investigation", "Purpose", "Timing"],
        rows: [
          ["<strong>Hemoglobin</strong>", "Screen for postpartum anemia", "Day 1 and 6 weeks"],
          ["<strong>Blood group & Rh</strong>", "Anti-D if Rh negative mother + Rh positive baby", "Within 72 hours"],
          ["<strong>Urine routine</strong>", "Screen for UTI (common postpartum)", "If symptomatic"],
          ["<strong>USG pelvis</strong>", "Rule out retained products if persistent bleeding", "If secondary PPH"],
          ["<strong>Edinburgh Depression Scale</strong>", "Screen for postpartum depression", "2 weeks and 6 weeks"],
          ["<strong>Thyroid function</strong>", "Postpartum thyroiditis screening", "6 weeks if symptomatic"],
        ],
      },
    ],

    management: {
      diagramTitle: "Sutika Paricharya — Clinical Decision Tree",
      diagramSvg: `
        <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 14px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah); }
            .small { font-size: 11px; }
          </style>
          <defs>
            <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#C8712A" />
            </marker>
          </defs>

          <rect class="box" x="250" y="10" width="300" height="45" />
          <text class="label-bold" x="400" y="37">Newly Delivered Woman (Sutika)</text>

          <line class="arrow" x1="400" y1="55" x2="400" y2="85" />

          <rect class="box-green" x="200" y="85" width="400" height="55" />
          <text class="label-bold" x="400" y="105">Immediate Sutika Paricharya (Day 1-7)</text>
          <text class="label small" x="400" y="125">Panchakola Ghrita + Peya + Abhyanga + Udara Veshtana</text>

          <line class="arrow" x1="400" y1="140" x2="400" y2="170" />

          <rect class="box" x="150" y="170" width="500" height="50" />
          <text class="label-bold" x="400" y="190">Assess: Uterine involution, Lochia, Stanya, Agni, Mood</text>
          <text class="label small" x="400" y="208">Monitor for Sutika Roga signs</text>

          <line class="arrow" x1="280" y1="220" x2="180" y2="260" />
          <text class="label small" x="210" y="245" fill="#2E7D32" font-weight="bold">Normal</text>

          <line class="arrow" x1="520" y1="220" x2="620" y2="260" />
          <text class="label small" x="590" y="245" fill="#C62828" font-weight="bold">Complications</text>

          <rect class="box-green" x="40" y="260" width="280" height="70" />
          <text class="label-bold" x="180" y="283">Continue Sutika Paricharya</text>
          <text class="label small" x="180" y="300">Week 2-6: Dashmoola Parisheka</text>
          <text class="label small" x="180" y="315">Shatavari for lactation, Rasayana</text>

          <rect class="box-red" x="480" y="260" width="280" height="70" />
          <text class="label-bold" x="620" y="283">Identify Sutika Roga</text>
          <text class="label small" x="620" y="300">Jwara → Antipyretics + Kwatha</text>
          <text class="label small" x="620" y="315">Shoola → Dashamoola + fomentation</text>

          <line class="arrow" x1="180" y1="330" x2="180" y2="370" />
          <line class="arrow" x1="620" y1="330" x2="620" y2="370" />

          <rect class="box-blue" x="40" y="370" width="280" height="50" />
          <text class="label-bold" x="180" y="393">6-Week Postnatal Review</text>
          <text class="label small" x="180" y="410">Modern: Hb, BP, wound, depression screen</text>

          <rect class="box-blue" x="480" y="370" width="280" height="50" />
          <text class="label-bold" x="620" y="393">Refer if: PPH, Sepsis, DVT, Psychosis</text>
          <text class="label small" x="620" y="410">IV antibiotics, uterotonics, LMWH</text>

          <rect class="box-green" x="150" y="450" width="500" height="50" />
          <text class="label-bold" x="400" y="473">Integrated: Sutika Paricharya + Modern PNC protocol</text>
          <text class="label small" x="400" y="490">Kashyapa extended care (6 months) + WHO postnatal guidelines</text>

          <line class="arrow" x1="180" y1="420" x2="300" y2="450" />
          <line class="arrow" x1="620" y1="420" x2="500" y2="450" />
        </svg>
      `,
      notes: `
        <p><strong>Key principles of Sutika management:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Vata is the primary Dosha to be managed — all Sutika Paricharya is essentially Vata-shamana</li>
          <li>Panchakola Siddha Ghrita is the single most important medicine — stimulates Agni, promotes involution, aids lactation</li>
          <li>Abhyanga with Bala Taila prevents Vata aggravation, reduces pain, and promotes healing</li>
          <li>Udara Veshtana (abdominal binding) aids uterine involution — similar to modern abdominal binder use</li>
          <li>Kashyapa's 64 Sutika Rogas highlight the vulnerability of the postpartum period</li>
          <li>Modern red flags: fever >38°C, heavy/foul-smelling lochia, calf tenderness, breast abscess, suicidal ideation</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Integrating Sutika Paricharya with Modern Postnatal Care</h3>
      <div class="space-y-4">
        <p>Sutika Paricharya represents one of Ayurveda's most detailed and practically applicable protocols. The holistic approach — covering diet, oil massage, abdominal binding, warm water use, and herbal medicines — addresses physical recovery, lactation, mental health, and bonding simultaneously.</p>
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Extended care period (up to 6 months vs 6 weeks)</li>
              <li>• Structured dietary progression (Peya → Vilepi → Anna)</li>
              <li>• Daily Abhyanga reduces pain, anxiety, promotes bonding</li>
              <li>• Specific Stanyajanana (galactagogue) preparations</li>
              <li>• Recognition of 64 possible complications (Kashyapa)</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Objective monitoring: vital signs, Hb, USG</li>
              <li>• Depression screening (Edinburgh scale)</li>
              <li>• Vaccination schedule for newborn</li>
              <li>• Contraception counselling</li>
              <li>• Emergency management: PPH, sepsis, DVT protocols</li>
            </ul>
          </div>
        </div>
      </div>
    `,

    examBullets: [
      "Sutika Kala: Kashyapa = 6 months, Charaka/Sushruta = 1.5 months (45 days). Modern puerperium = 6 weeks (42 days).",
      "Sutika is compared to Adrashushka Ghata (unfired clay pot) — extremely fragile, needs careful handling.",
      "Vata is the primary aggravated Dosha in Sutika — all Paricharya is essentially Vatashamana.",
      "Panchakola = Pippali + Pippalimula + Chavya + Chitraka + Nagara (Shunthi). Given with Ghrita for Agni Deepana.",
      "Sutika Ahara progression: Peya (thin gruel) → Vilepi (thick gruel) → Odana (rice) → Mamsa Rasa (meat soup) → Normal diet.",
      "Udara Veshtana (abdominal binding) aids uterine involution — parallels modern abdominal binder recommendation.",
      "Abhyanga with Bala Taila is the principal Vata-shamana therapy for Sutika.",
      "Dashamoola Kwatha Parisheka (warm decoction bath) is given from Day 7 onwards for pain relief and healing.",
      "Kashyapa describes 64 Sutika Rogas that arise from improper Paricharya — most important exam fact.",
      "Lochia stages: Rubra (Day 1-4, red) → Serosa (Day 5-9, pink) → Alba (Day 10+, white). Foul smell = infection.",
      "Uterine involution: immediately postpartum at umbilicus, Day 14 at symphysis, 6 weeks = pre-pregnant size.",
      "Stanya Janana drugs: Shatavari, Vidarikanda, Jivanti, Yashtimadhu — promote lactation.",
      "Modern PPH management: AMTSL (Active Management of Third Stage of Labour), uterotonics, bimanual compression.",
      "Postpartum depression affects 10-15% women. Edinburgh Scale score >10 requires intervention. Baby blues (Day 3-10) is milder and self-limiting.",
      "Anti-D immunoglobulin must be given within 72 hours to Rh-negative mother with Rh-positive baby to prevent isoimmunization.",
    ],

    mnemonics: [
      {
        title: "Panchakola Drugs",
        acronym: "PPCNP",
        expansions: [
          "Pippali (Piper longum)",
          "Pippalimula (root of Piper longum)",
          "Chavya (Piper retrofractum)",
          "Nagara/Shunthi (Zingiber officinale)",
          "Purpose: Agni Deepana in Sutika",
        ],
      },
      {
        title: "Sutika Paricharya Steps",
        acronym: "SPAUD",
        expansions: [
          "Snehapana (internal oleation with Ghrita)",
          "Peya/Pathya Ahara (warm gruel diet)",
          "Abhyanga (oil massage with Bala Taila)",
          "Udara Veshtana (abdominal binding)",
          "Dashamoola Parisheka (warm decoction bath)",
        ],
      },
      {
        title: "Causes of Secondary PPH",
        acronym: "RISE",
        expansions: [
          "Retained products of conception",
          "Infection (endometritis)",
          "Subinvolution of placental site",
          "Endometritis / coagulation defects",
        ],
      },
      {
        title: "Lochia Stages",
        acronym: "RSA",
        expansions: [
          "Rubra — Day 1-4 (red, blood)",
          "Serosa — Day 5-9 (pinkish, serosanguinous)",
          "Alba — Day 10+ (whitish, mucoid)",
        ],
      },
    ],
  };
}
