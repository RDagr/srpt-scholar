import React from "react";

interface ShlokaData {
  source: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  clinicalNote?: string;
}

interface DualColData {
  title: string;
  ayurvedaTitle?: string;
  modernTitle?: string;
  ayurvedaContent: string;
  modernContent: string;
}

interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

interface MnemonicData {
  title: string;
  acronym: string;
  expansions: string[];
}

interface TopicContent {
  references: string[];
  units: { title: string; content: React.ReactNode }[];
  orientation: { why: string; examWeight: string };
  definition: {
    ayurveda: string;
    modern: string;
    classification?: TableData;
  };
  shlokas: ShlokaData[];
  dualCols: DualColData[];
  clinicalFeatures: TableData[];
  investigations: TableData[];
  management: {
    diagramTitle: string;
    diagramSvg: string;
    notes?: string;
  };
  integration: string;
  examBullets: string[];
  mnemonics: MnemonicData[];
}

// ────────────────────────────────────────────────────────
// M1 — GARBHINI VIGYANA (Diagnosis of Pregnancy)
// ────────────────────────────────────────────────────────

const m1Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 4",
    "Sushruta Sharira Sthana Ch. 3",
    "Ashtanga Hridaya Sharira Ch. 1",
    "Kashyapa Samhita — Khila Sthana",
    "Williams Obstetrics Ch. 8–9",
    "DC Dutta Ch. 6",
  ],

  units: [
    {
      title: "Garbha Dharana & Lakshana",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the classical Ayurvedic signs of pregnancy (Garbha Dharana Lakshana) as described in Charaka Sharira Sthana Chapter 4, along with modern presumptive, probable, and positive signs of pregnancy. It establishes the foundation for understanding early pregnancy diagnosis in both systems."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Dauhrida (pregnancy cravings) and its clinical significance"),
          React.createElement("li", null, "• Vyakta & Avyakta Garbha Lakshana (manifest and non-manifest signs)"),
          React.createElement("li", null, "• Modern presumptive signs: amenorrhoea, morning sickness, breast changes"),
          React.createElement("li", null, "• Probable signs: Hegar's sign, Chadwick's sign, uterine enlargement"),
          React.createElement("li", null, "• Positive signs: fetal heart sounds, USG visualization, fetal movements")
        )
      ),
    },
    {
      title: "Garbha Sharira (Embryology)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit explores embryological development from both Ayurvedic (Masanumasika Garbha Vriddhi) and modern perspectives, covering month-by-month fetal development, formation of organs (Avayava Utpatti), and the role of Panchamahabhuta in embryogenesis."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Month-wise development (Masanumasika Garbha Vriddhi)"),
          React.createElement("li", null, "• Role of Shukra, Shonita, Atma, Ashaya, Kala, and Ahara Rasa"),
          React.createElement("li", null, "• Panchamahabhuta theory of organogenesis"),
          React.createElement("li", null, "• Modern embryology: zygote, morula, blastocyst, gastrulation"),
          React.createElement("li", null, "• Placental development and functions")
        )
      ),
    },
    {
      title: "Garbha Upaghatakara Bhava",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Factors harmful to the embryo and fetus — covering teratogenic factors from both Ayurvedic and modern viewpoints. Includes Garbhopaghatakara Bhava from classical texts and modern teratology."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Garbhopaghatakara Bhava (factors detrimental to fetus)"),
          React.createElement("li", null, "• Dauhrida Avamana (neglect of pregnancy desires) consequences"),
          React.createElement("li", null, "• Modern teratogens: TORCH infections, drugs, radiation"),
          React.createElement("li", null, "• Critical periods of organogenesis and vulnerability")
        )
      ),
    },
    {
      title: "Fetal Circulation & Physiology",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Covers the unique circulatory system of the fetus (Apara/Garbhanabhinadi concept), placental physiology, and the changes at birth. Integrates Ayurvedic concepts of Garbha Poshana with modern fetal circulation."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Aparaa (placenta) — Ayurvedic concept & modern anatomy"),
          React.createElement("li", null, "• Garbha Nabhinadi (umbilical cord) and Garbha Poshana"),
          React.createElement("li", null, "• Fetal shunts: ductus venosus, foramen ovale, ductus arteriosus"),
          React.createElement("li", null, "• Changes in circulation at birth"),
          React.createElement("li", null, "• Amniotic fluid: formation, circulation, and functions")
        )
      ),
    },
  ],

  orientation: {
    why: "Garbhini Vigyana (Diagnosis of Pregnancy) is the cornerstone of Prasuti Tantra. This module covers how pregnancy is identified in classical Ayurveda through Garbha Dharana Lakshana, including Dauhrida (cravings), and correlates these with modern diagnostic methods like urine pregnancy tests and ultrasonography. Understanding both frameworks is essential for clinical practice in integrative OBGYN settings and forms the basis for all subsequent obstetric topics.",
    examWeight:
      "Extremely high-yield for university exams. Questions on Garbha Lakshana, Masanumasika Garbha Vriddhi, Dauhrida, and modern pregnancy signs appear in almost every paper. Long essays (20 marks) on month-wise fetal development and short notes (10 marks) on classical signs of pregnancy are very frequent. Also expect comparison questions between Ayurvedic and modern embryology.",
  },

  definition: {
    ayurveda: `
      <p><strong>Garbha (Embryo/Fetus)</strong> is defined by Acharya Sushruta as the union of six factors:</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"शुक्रशोणितजीवसंयोगे तु खलु कुक्षिगते गर्भसंज्ञा भवति"</p>
      <p class="mt-2">The combination of <strong>Shukra</strong> (sperm), <strong>Shonita</strong> (ovum), <strong>Atma</strong> (soul), <strong>Prakriti</strong> (nature), <strong>Sattva</strong> (mind), and <strong>Satmya</strong> (homologation) entering the Kukshi (uterus) is called Garbha.</p>
      <p class="mt-2"><strong>Garbhini</strong> = a woman bearing the Garbha. The state of Garbha Dharana (conception) is confirmed by specific Lakshana (signs and symptoms).</p>
    `,
    modern: `
      <p><strong>Pregnancy</strong> is defined as the state of carrying a developing embryo or fetus within the female body. It begins with <strong>fertilization</strong> (union of sperm and ovum in the ampulla of the fallopian tube) and <strong>implantation</strong> (embedding of the blastocyst in the endometrium, 6–7 days post-fertilization).</p>
      <p class="mt-2"><strong>Duration:</strong> 280 days (40 weeks) from the last menstrual period (LMP), or 266 days from conception.</p>
      <p class="mt-2"><strong>Diagnosis</strong> is based on three categories of signs: Presumptive (symptoms), Probable (clinical signs), and Positive (definitive evidence of fetal life).</p>
    `,
    classification: {
      title: "Classification of Pregnancy Signs",
      headers: ["Category", "Ayurvedic Term", "Modern Equivalent", "Examples"],
      rows: [
        [
          "<strong>Presumptive</strong>",
          "Vyakta Garbha Lakshana (Subjective)",
          "Symptoms reported by patient",
          "Amenorrhoea, nausea (Hrillasa), breast tenderness, fatigue, Dauhrida",
        ],
        [
          "<strong>Probable</strong>",
          "Sparshajna Lakshana",
          "Clinical examination signs",
          "Uterine enlargement, Hegar's sign, Chadwick's sign, Goodell's sign, +ve UPT",
        ],
        [
          "<strong>Positive</strong>",
          "Nishchita Garbha Lakshana",
          "Definitive proof of pregnancy",
          "Fetal heart sound (Garbha Spandana), USG showing fetal pole, fetal movements felt by examiner",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Charaka Sharira Sthana 4/16",
      devanagari:
        "ऋतुकाले तु सम्प्राप्ते स्त्रियाः पुष्पं यथा ऋतौ |\nप्रवर्तते नदीवेगो वसन्ते पुष्पितो यथा ||",
      transliteration:
        "ṛtukāle tu samprāpte striyāḥ puṣpaṃ yathā ṛtau |\npravartate nadīvego vasante puṣpito yathā ||",
      meaning:
        "Just as flowers bloom in their season and rivers flow with vigour in spring, the Artava (menstrual blood) of a woman flows in its proper Ritu Kala (menstrual period). When this natural flow ceases (Rituchakra Nirodha), it is the first presumptive sign of Garbha Dharana (conception).",
      clinicalNote:
        "Amenorrhoea (absence of menstruation) remains the earliest and most reliable presumptive sign of pregnancy in both systems. Modern: missed period in a woman of reproductive age with history of unprotected intercourse warrants a pregnancy test.",
    },
    {
      source: "Charaka Sharira Sthana 4/18",
      devanagari:
        "तत्र दौहृदं नाम— यत्किञ्चिदिच्छति स्त्री गर्भवती तत्सर्वं दौहृदमित्युच्यते |\nतस्य अवमानात् कुब्जं खञ्जं जडं वामनं विकृताक्षं वा प्रजायते ||",
      transliteration:
        "tatra dauhṛdaṃ nāma— yatkiñcidiccchati strī garbhavatī tatsarvaṃ dauhṛdamityucyate |\ntasya avamānāt kubjaṃ khañjaṃ jaḍaṃ vāmanaṃ vikṛtākṣaṃ vā prajāyate ||",
      meaning:
        "Dauhrida is the term for any desire or craving experienced by a pregnant woman. It arises because the fetus (whose heart — Hridaya — is developing) expresses its desires through the mother. If these desires are ignored (Dauhrida Avamana), the child may be born with deformities — kyphosis, lameness, cognitive impairment, dwarfism, or ocular defects.",
      clinicalNote:
        "Dauhrida corresponds to pregnancy cravings seen in modern obstetrics, often attributed to hormonal changes (rising hCG and progesterone). While modern medicine does not attribute birth defects to unfulfilled cravings, the Ayurvedic emphasis on maternal psychological well-being aligns with modern evidence on prenatal stress affecting fetal neurodevelopment.",
    },
    {
      source: "Sushruta Sharira Sthana 3/15",
      devanagari:
        "शुक्रशोणितजीवसंयोगे तु खलु कुक्षिगते गर्भसंज्ञा भवति |",
      transliteration:
        "śukraśoṇitajīvasaṃyoge tu khalu kukṣigate garbhasañjñā bhavati |",
      meaning:
        "When the combination of Shukra (male reproductive element/sperm), Shonita (female reproductive element/ovum), and Jiva (soul/life force) enters the Kukshi (uterus), it is designated as Garbha (embryo). This defines the moment of conception in Ayurveda.",
      clinicalNote:
        "This remarkably parallels the modern understanding of fertilization — the union of sperm and ovum — plus the concept that the resulting embryo must successfully implant in the uterus for pregnancy to be established. Sushruta adds the metaphysical element of Jiva (Atma) entering the zygote.",
    },
    {
      source: "Ashtanga Hridaya Sharira 1/37–38",
      devanagari:
        "गर्भे स्थिते तु नारीणां लक्षणानि भवन्ति हि |\nपरिपूर्णवदनता तन्द्रा छर्दिः शैथिल्यमेव च ||",
      transliteration:
        "garbhe sthite tu nārīṇāṃ lakṣaṇāni bhavanti hi |\nparipūrṇavadanatā tandrā chardiḥ śaithilyameva ca ||",
      meaning:
        "When Garbha (pregnancy) is established in a woman, the following signs appear: fullness of the face (Paripurna Vadanata), drowsiness (Tandra), vomiting (Chhardi), and laxity/fatigue (Shaithilya) of the body.",
      clinicalNote:
        "These classical signs correspond directly to modern first-trimester symptoms: facial puffiness due to fluid retention and hormonal changes, somnolence from rising progesterone levels, morning sickness (nausea/vomiting from hCG), and fatigue from metabolic demands of early pregnancy.",
    },
  ],

  dualCols: [
    {
      title: "Physiology of Conception",
      ayurvedaTitle: "Garbha Sambhava Samagri",
      modernTitle: "Modern Fertilization",
      ayurvedaContent: `
        <p><strong>Six factors essential for conception (Garbha Sambhava Samagri):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Ritu</strong> — proper fertile period (Ritukala = 12–16 days of cycle)</li>
          <li><strong>Kshetra</strong> — healthy uterus (Garbhashaya)</li>
          <li><strong>Ambu</strong> — proper nourishing fluids (Rasa Dhatu)</li>
          <li><strong>Beeja</strong> — healthy sperm (Shukra) and ovum (Shonita/Artava)</li>
          <li><strong>Vayu</strong> — proper Apana Vata function for transport</li>
          <li><strong>Mana</strong> — sound psychological state of parents</li>
        </ol>
        <p class="mt-3">Charaka compares this to agriculture: good seed (Beeja), fertile soil (Kshetra), proper water (Ambu), and right season (Ritu).</p>
      `,
      modernContent: `
        <p><strong>Requirements for fertilization:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Ovulation</strong> — release of mature oocyte (Day 14 of 28-day cycle)</li>
          <li><strong>Healthy fallopian tubes</strong> — for sperm-ovum transport</li>
          <li><strong>Adequate sperm</strong> — count, motility, morphology</li>
          <li><strong>Receptive endometrium</strong> — secretory phase, window of implantation (Day 20–24)</li>
          <li><strong>Capacitation</strong> — sperm undergoes biochemical changes in female tract</li>
          <li><strong>Acrosome reaction</strong> — penetration of zona pellucida</li>
        </ol>
        <p class="mt-3"><strong>Fertilization occurs in the ampulla</strong> of the fallopian tube. The zygote undergoes cleavage → morula → blastocyst → implantation in 6–7 days.</p>
      `,
    },
    {
      title: "Month-wise Fetal Development (Key Months)",
      ayurvedaTitle: "Masanumasika Garbha Vriddhi",
      modernTitle: "Modern Embryology Milestones",
      ayurvedaContent: `
        <ul class="space-y-2">
          <li><strong>Month 1 (Kalala):</strong> Jelly-like mass formed from Shukra-Shonita union</li>
          <li><strong>Month 2 (Ghana):</strong> Solidification — Ghana (solid mass), Peshi (fleshy mass), or Arbuda (round mass) depending on sex</li>
          <li><strong>Month 3:</strong> Five buds (Pancha Piṇḍika) appear — head, two upper limbs, two lower limbs. All sense organs manifest simultaneously (Sarvanga Pratyanga Bhavana)</li>
          <li><strong>Month 4:</strong> Garbha Sthirata (stabilization). Hridaya (heart) becomes well-formed; Chetana Dhatu manifests. Mother develops Dauhrida</li>
          <li><strong>Month 5:</strong> Mana (mind) becomes more awakened. Flesh and blood increase</li>
          <li><strong>Month 6:</strong> Medha (intellect), Bala (strength), Varna (complexion) develop. Hair, nails appear</li>
          <li><strong>Month 7:</strong> All Avayavas (organs) fully developed. Garbha is "Poorna" (complete). Most viable if born prematurely</li>
        </ul>
      `,
      modernContent: `
        <ul class="space-y-2">
          <li><strong>Week 1–2:</strong> Zygote → morula → blastocyst → implantation</li>
          <li><strong>Week 3–4:</strong> Gastrulation; neural plate forms; heart tube beats by day 22</li>
          <li><strong>Week 5–8 (Embryonic):</strong> Organogenesis — limb buds appear (wk 4–5), face forms, all major organs initiated. Crown-rump length ~30mm by week 8</li>
          <li><strong>Week 9–12 (Fetal):</strong> External genitalia differentiate; ossification begins; urine production starts. FHR detectable on Doppler</li>
          <li><strong>Week 13–16:</strong> Quickening (first fetal movements felt). Sex distinguishable on USG</li>
          <li><strong>Week 17–20:</strong> Vernix caseosa, lanugo hair. Fetal movements clearly felt by mother</li>
          <li><strong>Week 21–28:</strong> Surfactant production begins (week 24). Viability threshold ~24 weeks. Eyes open</li>
          <li><strong>Week 29–40:</strong> Rapid weight gain, lung maturity, descent into pelvis</li>
        </ul>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Signs & Symptoms of Pregnancy — Trimester-wise",
      headers: ["Trimester", "Ayurvedic Signs (Garbha Lakshana)", "Modern Signs"],
      rows: [
        [
          "<strong>1st Trimester</strong><br/>(Months 1–3)",
          "Amenorrhoea (Rituchakra Nirodha), Hrillasa (nausea), Chhardi (vomiting), Aruchi (anorexia), Praseka (excessive salivation), Tandra (drowsiness), Dauhrida (cravings), Shyava Stana Chuchuka (darkened nipples)",
          "Amenorrhoea, morning sickness, breast tenderness/enlargement, urinary frequency, fatigue, Chadwick sign (bluish vagina), Goodell sign (soft cervix), +ve urine pregnancy test (hCG), USG: gestational sac (5 wk), fetal pole (6 wk), FHR (7 wk)",
        ],
        [
          "<strong>2nd Trimester</strong><br/>(Months 4–6)",
          "Garbha Spandana (fetal movements — Quickening), Stana Prvriddhi (breast enlargement), Dauhrida intensifies, Paripurna Vadanata (facial fullness), visible abdominal enlargement (Udara Vriddhi)",
          "Quickening (16–20 wk), uterus palpable above symphysis pubis, FHR audible on Doppler (12 wk) and fetoscope (20 wk), linea nigra, chloasma, Braxton-Hicks contractions begin, Montgomery tubercles prominent",
        ],
        [
          "<strong>3rd Trimester</strong><br/>(Months 7–9)",
          "Marked Udara Vriddhi, Garbha Spandana clearly palpable, Apana Vayu Sanchara (lightening/descent), Stana Kshira Pravritti (colostrum secretion), Yoni Srava (mucous discharge near term)",
          "Fundal height reaches xiphisternum, Leopold manoeuvres determine lie/presentation, engagement of presenting part, cervical effacement begins, Braxton-Hicks become regular, colostrum expressible, lightening in primigravida",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Diagnostic Investigations in Pregnancy",
      headers: ["Investigation", "Purpose", "Timing", "Details"],
      rows: [
        [
          "<strong>Urine Pregnancy Test (UPT)</strong>",
          "Detect hCG in urine",
          "As early as day of missed period",
          "Sensitivity >99%. Detects hCG ≥ 25 mIU/mL. False negatives in very early pregnancy or dilute urine",
        ],
        [
          "<strong>Serum β-hCG</strong>",
          "Quantitative hCG measurement",
          "6–8 days post-ovulation",
          "Doubling time 48 hrs in normal early pregnancy. Used to monitor viability and rule out ectopic",
        ],
        [
          "<strong>Transabdominal USG</strong>",
          "Visualize gestational sac, fetal pole, FHR",
          "6–7 weeks onwards",
          "Gestational sac visible at β-hCG ~6500 mIU/mL. Confirms intrauterine pregnancy, number, viability",
        ],
        [
          "<strong>Transvaginal USG</strong>",
          "Earlier and more precise visualization",
          "4.5–5 weeks onwards",
          "Gestational sac visible at β-hCG ~1500 mIU/mL. Gold standard for early pregnancy assessment",
        ],
        [
          "<strong>Doppler FHR</strong>",
          "Detect fetal heart rate",
          "10–12 weeks",
          "Normal FHR: 120–160 bpm. Confirms fetal viability. Hand-held Doppler in OPD",
        ],
        [
          "<strong>NT Scan</strong>",
          "Nuchal translucency — chromosomal screening",
          "11–13+6 weeks",
          "NT ≥ 3.5 mm suggests risk of Down syndrome and other aneuploidies",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Clinical Decision Tree — Diagnosis of Pregnancy",
    diagramSvg: `
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
        <style>
          .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
          .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
          .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
          .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
          .label { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; text-anchor: middle; }
          .label-bold { font-family: 'DM Sans', sans-serif; font-size: 14px; fill: #333; font-weight: bold; text-anchor: middle; }
          .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
          .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#arrowhead-green); }
          .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#arrowhead-red); }
          .small { font-size: 11px; }
          .yes-label { font-size: 12px; fill: #2E7D32; font-weight: bold; }
          .no-label { font-size: 12px; fill: #C62828; font-weight: bold; }
        </style>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#C8712A" />
          </marker>
          <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A" />
          </marker>
          <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#EF5350" />
          </marker>
        </defs>

        <!-- Step 1: Woman with Amenorrhoea -->
        <rect class="box" x="280" y="10" width="240" height="50" />
        <text class="label-bold" x="400" y="40">Woman with Amenorrhoea</text>

        <line class="arrow" x1="400" y1="60" x2="400" y2="90" />

        <!-- Step 2: UPT -->
        <rect class="box-blue" x="300" y="90" width="200" height="50" />
        <text class="label-bold" x="400" y="110">Urine Pregnancy Test</text>
        <text class="label small" x="400" y="128">(UPT / hCG strip)</text>

        <!-- Branches -->
        <line class="arrow-yes" x1="350" y1="140" x2="200" y2="180" />
        <text class="yes-label" x="255" y="165">Positive</text>

        <line class="arrow-no" x1="450" y1="140" x2="600" y2="180" />
        <text class="no-label" x="545" y="165">Negative</text>

        <!-- Positive branch -->
        <rect class="box-green" x="80" y="180" width="240" height="50" />
        <text class="label-bold" x="200" y="200">Confirm with USG</text>
        <text class="label small" x="200" y="218">(Transvaginal at 5–6 wk)</text>

        <line class="arrow-yes" x1="140" y1="230" x2="80" y2="270" />
        <text class="yes-label" x="90" y="255">IUP seen</text>

        <line class="arrow-no" x1="260" y1="230" x2="330" y2="270" />
        <text class="no-label" x="310" y="255">No IUP</text>

        <!-- IUP confirmed -->
        <rect class="box-green" x="10" y="270" width="180" height="60" />
        <text class="label-bold" x="100" y="293">Normal IUP</text>
        <text class="label small" x="100" y="310">Confirm viability (FHR+)</text>
        <text class="label small" x="100" y="323">Begin ANC</text>

        <!-- No IUP -->
        <rect class="box-red" x="230" y="270" width="200" height="60" />
        <text class="label-bold" x="330" y="293">Suspect Ectopic</text>
        <text class="label small" x="330" y="310">Serial β-hCG + TVS</text>
        <text class="label small" x="330" y="323">Refer urgently</text>

        <!-- Negative branch -->
        <rect class="box" x="500" y="180" width="220" height="50" />
        <text class="label-bold" x="610" y="200">Repeat UPT in 1 week</text>
        <text class="label small" x="610" y="218">(if amenorrhoea persists)</text>

        <line class="arrow-yes" x1="550" y1="230" x2="480" y2="280" />
        <text class="yes-label" x="495" y="260">Now +ve</text>

        <line class="arrow-no" x1="670" y1="230" x2="700" y2="280" />
        <text class="no-label" x="705" y="260">Still −ve</text>

        <!-- Now positive -->
        <rect class="box-green" x="380" y="280" width="200" height="45" />
        <text class="label-bold" x="480" y="307">Proceed to USG</text>

        <!-- Still negative -->
        <rect class="box" x="600" y="280" width="190" height="60" />
        <text class="label-bold" x="695" y="303">Evaluate for other</text>
        <text class="label small" x="695" y="320">causes of amenorrhoea</text>
        <text class="label small" x="695" y="335">(PCOS, stress, etc.)</text>

        <!-- Ayurvedic management box -->
        <rect class="box" x="40" y="380" width="720" height="90" />
        <text class="label-bold" x="400" y="405">Ayurvedic Approach (Garbha Dharana Lakshana Pariksha)</text>
        <text class="label" x="400" y="428">1. Observe Rituchakra Nirodha (amenorrhoea) + Dauhrida (cravings) + Hrillasa (nausea)</text>
        <text class="label" x="400" y="448">2. Perform Sparshana Pariksha (palpation) — uterine enlargement, breast changes</text>
        <text class="label" x="400" y="465">3. Confirm with Adhunika Pariksha (modern investigations) — UPT, USG</text>

        <!-- Integrated approach -->
        <rect class="box-green" x="150" y="500" width="500" height="55" />
        <text class="label-bold" x="400" y="522">Integrated Diagnosis: Classical Lakshana + Modern Investigations</text>
        <text class="label" x="400" y="542">Begin Garbhini Paricharya (ANC) as per Masanumasika protocol</text>

        <line class="arrow" x1="400" y1="470" x2="400" y2="500" />
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for pregnancy diagnosis:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Always rule out ectopic pregnancy in any woman with amenorrhoea, positive UPT, and abdominal pain</li>
        <li>β-hCG doubling time &lt; 48 hours suggests normal IUP; inadequate rise raises suspicion for ectopic or non-viable pregnancy</li>
        <li>Classical Dauhrida signs appearing in the 4th month align with fetal cardiac development — the heart is the first Chetana-bearing organ per Ayurveda</li>
        <li>Garbha Paricharya (antenatal regimen) should begin as soon as pregnancy is confirmed — Masanumasika Pathya-Apathya from Month 1</li>
        <li>In Ayurvedic practice, integration of modern diagnostics (UPT, USG) with classical assessment provides the most comprehensive evaluation</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Classical & Modern Pregnancy Diagnosis</h3>
    <div class="space-y-4">
      <p>The diagnosis of pregnancy represents one of the most harmonious areas of Ayurveda-Modern integration. Classical texts describe signs that directly correlate with modern understanding:</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">🪷 Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Holistic assessment including psychological state (Sattvika Pariksha)</li>
            <li>• Dauhrida management for maternal-fetal bonding</li>
            <li>• Masanumasika protocol provides structured care from conception</li>
            <li>• Emphasis on Ahara (diet), Vihara (lifestyle), and Achara (conduct)</li>
            <li>• Garbha Sanskara — fetal imprinting through maternal experiences</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">🔬 Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Precise biochemical markers (β-hCG quantification)</li>
            <li>• Real-time visualization (USG) for dating and viability</li>
            <li>• Chromosomal screening (NT scan, NIPT)</li>
            <li>• Evidence-based risk stratification</li>
            <li>• Emergency detection (ectopic, molar pregnancy)</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Step 1:</strong> Assess Garbha Lakshana (clinical signs) + UPT for initial diagnosis</li>
          <li><strong>Step 2:</strong> Confirm with TVS/USG for dating, viability, and ruling out ectopic</li>
          <li><strong>Step 3:</strong> Begin Masanumasika Garbhini Paricharya alongside standard ANC</li>
          <li><strong>Step 4:</strong> Integrate Pathya-Apathya (dietary guidelines) with modern nutritional supplementation</li>
          <li><strong>Step 5:</strong> Monitor with both clinical Pariksha and scheduled USG/lab investigations</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Garbha = union of Shukra + Shonita + Atma in Kukshi (Sushruta Sha. 3/15). Modern: fertilization of ovum by sperm + implantation in uterus.",
    "Six factors of Garbha Sambhava Samagri: Ritu, Kshetra, Ambu, Beeja, Vayu (Apana), Mana — Charaka's agricultural analogy for fertility.",
    "Dauhrida appears in Month 4 when fetal Hridaya develops — desires of the fetus expressed through the mother. Avamana causes fetal deformities per Charaka.",
    "Masanumasika Garbha Vriddhi: Month 1 = Kalala (jelly), Month 2 = Ghana (solid mass), Month 3 = Pancha Piṇḍika (5 buds), Month 4 = Sthirata + Hridaya formation.",
    "Presumptive signs (both systems): Amenorrhoea, nausea/vomiting (Hrillasa/Chhardi), breast tenderness, fatigue (Tandra), food aversions/cravings.",
    "Probable signs: Hegar sign (softening of lower uterine segment at 6–8 wk), Chadwick sign (bluish vagina), Goodell sign (cervical softening), +ve UPT.",
    "Positive signs: Fetal heart rate on Doppler (10–12 wk), fetal parts on USG, fetal movements felt by examiner (not by mother — that is presumptive).",
    "hCG detection: UPT detects at ≥25 mIU/mL. Serum β-hCG doubles every 48 hrs in viable IUP. Peaks at 8–10 weeks, then plateaus.",
    "USG landmarks: GS at 5 wk (TVS), yolk sac at 5.5 wk, fetal pole at 6 wk, FHR at 6–7 wk. TVS is gold standard for early pregnancy.",
    "Ectopic pregnancy must be excluded if +ve UPT with no IUP on TVS at β-hCG >1500 mIU/mL (discriminatory zone).",
    "Garbhini Paricharya (ANC per Charaka) begins Month 1: cold sweet liquids. Month-specific Pathya outlined for each of 9 months.",
    "Fetal circulation: 3 shunts — Ductus Venosus (bypasses liver), Foramen Ovale (RA→LA), Ductus Arteriosus (PA→aorta). Aparaa = placenta in Ayurveda.",
    "Placental functions: Gas exchange, nutrient transfer, hormone production (hCG, hPL, estrogen, progesterone), immunological barrier.",
    "Nagel's rule for EDD: LMP date + 7 days − 3 months + 1 year. More accurate dating by CRL on first-trimester USG.",
    "Garbha Sharira factors from Charaka: Matrija (maternal), Pitrija (paternal), Atmaja (soul), Satmyaja (habitual), Rasaja (nutritional), Sattvaja (mental) — six factors forming the individual.",
  ],

  mnemonics: [
    {
      title: "Signs of Pregnancy (Presumptive)",
      acronym: "ABCDEF",
      expansions: [
        "Amenorrhoea (Rituchakra Nirodha)",
        "Breast tenderness and enlargement",
        "Cravings & nausea (Dauhrida, Hrillasa)",
        "Drowsiness and fatigue (Tandra)",
        "Excessive salivation (Praseka)",
        "Frequency of micturition",
      ],
    },
    {
      title: "Garbha Sambhava Samagri (6 Factors for Conception)",
      acronym: "RKABVM",
      expansions: [
        "Ritu — proper fertile period",
        "Kshetra — healthy uterus (field)",
        "Ambu — nourishing fluids (water)",
        "Beeja — healthy sperm and ovum (seed)",
        "Vayu — proper Apana Vata function (wind)",
        "Mana — sound mental state (mind)",
      ],
    },
    {
      title: "Fetal Shunts (Circulation)",
      acronym: "DFD",
      expansions: [
        "Ductus Venosus — bypasses liver (UV → IVC)",
        "Foramen Ovale — bypasses lungs (RA → LA)",
        "Ductus Arteriosus — bypasses lungs (PA → Aorta)",
      ],
    },
    {
      title: "Positive Signs of Pregnancy",
      acronym: "FFF",
      expansions: [
        "Fetal Heart Rate — on Doppler/USG",
        "Fetal movements — felt by examiner",
        "Fetal parts — seen on USG/palpated",
      ],
    },
  ],
};

// ────────────────────────────────────────────────────────
// Content registry — add new topics here
// ────────────────────────────────────────────────────────
const contentRegistry: Record<string, TopicContent> = {
  m1: m1Content,
};

export function getTopicContent(moduleId: string): TopicContent | null {
  return contentRegistry[moduleId] || null;
}
