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
// M3 — GARBHINI PARICHARYA (Antenatal Care)
// ────────────────────────────────────────────────────────

const m3Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 8 (Jatisutriya Sharira)",
    "Sushruta Sharira Sthana Ch. 10",
    "Ashtanga Hridaya Sharira Ch. 1-2",
    "Ashtanga Sangraha Sharira Sthana",
    "Kashyapa Samhita — Khila Sthana (Antarvatni Adhyaya)",
    "Harita Samhita — Tritiya Sthana",
    "Williams Obstetrics Ch. 10-14 (Prenatal Care)",
    "DC Dutta Ch. 7-10",
  ],

  units: [
    {
      title: "Masanumasika Garbhini Paricharya (Month-wise Regimen)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "The cornerstone of Ayurvedic antenatal care — detailed month-by-month dietary and lifestyle prescriptions for the pregnant woman as described in Charaka Sharira Sthana Chapter 8. Each month has specific Pathya (wholesome) and Apathya (unwholesome) guidelines designed to nourish the developing Garbha and protect the mother."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Month 1-3: Madhura, Sheeta, Drava Ahara (sweet, cool, liquid diet)"),
          React.createElement("li", null, "• Month 4-6: Specific Ahara based on fetal development needs"),
          React.createElement("li", null, "• Month 7-9: Preparation for delivery — Yoni Pichu, Anuvasana Basti"),
          React.createElement("li", null, "• Garbhasthapana Dravyas (pregnancy-protective drugs)"),
          React.createElement("li", null, "• Correlation with modern trimester-wise nutritional guidelines")
        )
      ),
    },
    {
      title: "Garbhini Pathya-Apathya (Dietary Do's & Don'ts)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Comprehensive dietary and lifestyle guidelines for pregnant women — what to consume (Pathya) and what to avoid (Apathya). This unit covers both the Ayurvedic classification of beneficial and harmful substances and modern evidence-based dietary recommendations for pregnancy."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Pathya Ahara: Ksheera (milk), Ghrita (ghee), Madhura Rasa dominant foods"),
          React.createElement("li", null, "• Apathya: Ati Katu, Ati Ushna, Ati Vyayama, Ratrijagarana"),
          React.createElement("li", null, "• Garbhopaghatakara Bhava — factors harmful to the fetus"),
          React.createElement("li", null, "• Modern dietary supplements: Iron, Folic acid, Calcium, Vitamin D"),
          React.createElement("li", null, "• Teratogenic substances to avoid")
        )
      ),
    },
    {
      title: "Modern Antenatal Care Schedule & Investigations",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Standard modern ANC protocols — visit schedule, routine investigations, screening tests, and risk assessment. This unit covers the WHO-recommended focused ANC model, NICE guidelines, and Indian national ANC protocols."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• ANC visit schedule: minimum 4 visits (WHO) / 8 contacts (updated WHO 2016)"),
          React.createElement("li", null, "• Booking visit investigations: CBC, Blood group, Rh, HIV, HBsAg, VDRL, Urine"),
          React.createElement("li", null, "• Trimester-wise screening: NT scan, Dual/Quad marker, Anomaly scan, GCT/OGTT"),
          React.createElement("li", null, "• Risk stratification: High-risk pregnancy identification"),
          React.createElement("li", null, "• Immunization: TT/Td vaccination in pregnancy")
        )
      ),
    },
    {
      title: "Garbhopaghatakara Bhava & Garbhasthapana",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Factors harmful to the Garbha (Garbhopaghatakara Bhava) and measures to protect pregnancy (Garbhasthapana). This unit covers classical descriptions of teratogenic factors and their modern correlations, along with Garbhasthapana Dravyas (pregnancy-protective drugs)."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Garbhopaghatakara Bhava per Charaka and Sushruta"),
          React.createElement("li", null, "• Dauhrida Avamana consequences (neglect of pregnancy desires)"),
          React.createElement("li", null, "• Modern teratogens: TORCH, drugs, radiation, chemicals"),
          React.createElement("li", null, "• Garbhasthapana Dashemani (10 pregnancy-protective drugs)"),
          React.createElement("li", null, "• Pumsavana Karma (gender-related rituals — ethical context)")
        )
      ),
    },
  ],

  orientation: {
    why: "Garbhini Paricharya (Antenatal Care) is the most practically applicable topic in Prasuti Tantra. The Masanumasika (month-wise) regimen from Charaka Sharira 8 provides a comprehensive framework for managing pregnancy that has been practiced for millennia. Integrating this with modern ANC protocols creates a robust approach to prenatal care. This topic bridges the gap between classical practice and contemporary evidence-based medicine.",
    examWeight:
      "Extremely high-yield and guaranteed in every exam. Long essay questions (20 marks) on Masanumasika Garbhini Paricharya are almost certain. Short notes on Garbhopaghatakara Bhava, Garbhasthapana, Pathya-Apathya, and comparison of Ayurvedic with modern ANC appear frequently. Expect tables comparing month-wise Ayurvedic regimen with modern ANC schedule. Dauhrida management is a common 5-mark question.",
  },

  definition: {
    ayurveda: `
      <p><strong>Garbhini Paricharya</strong> refers to the systematic month-by-month care (Paricharya) of the pregnant woman (Garbhini). Charaka Sharira Sthana Chapter 8 (Jatisutriya Sharira) provides detailed Masanumasika (month-wise) prescriptions for Ahara (diet), Vihara (lifestyle), and Aushadhi (medicines).</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"गर्भिण्याः प्रशस्तं मासि मासि पथ्यमुपदिश्यते"</p>
      <p class="mt-2">The regimen aims to: (1) Nourish the Garbha appropriately at each developmental stage, (2) Maintain the health of the Garbhini, (3) Prevent complications (Garbha Vyapad), and (4) Prepare for a smooth delivery (Sukha Prasava).</p>
      <p class="mt-2"><strong>Key principle:</strong> Diet and conduct must change month by month as the Garbha develops different Dhatus and organs in each month.</p>
    `,
    modern: `
      <p><strong>Antenatal Care (ANC)</strong> is the systematic supervision of a pregnant woman from conception to the onset of labor. The goals are to: maintain maternal health, ensure normal fetal development, detect and manage complications early, and prepare for delivery and postpartum care.</p>
      <p class="mt-2"><strong>WHO Model (2016):</strong> Minimum 8 contacts — 1 in first trimester, 2 in second trimester, 5 in third trimester. The first visit (booking) should ideally be before 12 weeks.</p>
      <p class="mt-2"><strong>Components:</strong> History taking, physical examination, routine investigations, nutritional supplementation (Iron-Folic acid, Calcium), immunization (TT/Td), screening for complications (pre-eclampsia, GDM, anemia, infections), birth preparedness, and danger sign education.</p>
    `,
    classification: {
      title: "Garbhini Paricharya — Month-wise Overview",
      headers: ["Month", "Ayurvedic Ahara (Diet)", "Ayurvedic Vihara (Conduct)", "Modern ANC Focus"],
      rows: [
        [
          "<strong>Month 1</strong>",
          "Non-medicated cold milk (Ksheera), Madhura-Sheeta-Drava Ahara",
          "Avoid exertion, stress, travel. Brahmacharya",
          "Confirm pregnancy, booking visit, start Folic acid 5mg",
        ],
        [
          "<strong>Month 2</strong>",
          "Milk medicated with Madhura Dravyas (Shatavari, Yashtimadhu)",
          "Same as Month 1. Avoid Ati Vyayama",
          "Dating USG, routine investigations",
        ],
        [
          "<strong>Month 3</strong>",
          "Milk with honey and ghee. Shashtika Shali (rice), Mudga Yusha",
          "Avoid suppression of natural urges. Manasika Sukha",
          "NT scan (11-13 wk), Dual marker",
        ],
        [
          "<strong>Month 4</strong>",
          "Akshata (rice) with curd. Butter. Ksheera with Navaneeta",
          "Pleasant surroundings. Fulfill Dauhrida. Avoid stress",
          "Quad marker (15-18 wk). Iron-calcium supplementation",
        ],
        [
          "<strong>Month 5</strong>",
          "Ksheera-Sarpi (milk with ghee). Payasa (milk-rice preparation)",
          "Same lifestyle care. Garbha Sanskara activities",
          "Anomaly scan (18-20 wk). Fundal height assessment",
        ],
        [
          "<strong>Month 6</strong>",
          "Ksheera-Sarpi medicated with Madhura Dravyas. Yavagu with Gokshura",
          "Avoid excessive salt, pungent food. Rest adequately",
          "GCT/OGTT for GDM screening (24-28 wk)",
        ],
        [
          "<strong>Month 7</strong>",
          "Same as Month 6 with Prithak Parnyadi Siddha Ghrita",
          "Avoid long journeys. Apply oil to abdomen (for striae)",
          "Growth scan. Anti-D if Rh negative. TT booster",
        ],
        [
          "<strong>Month 8</strong>",
          "Yavagu with milk. Asthapana and Anuvasana Basti with mild oils",
          "Basti Karma begins. Avoid heavy lifting, sexual intercourse",
          "Fortnightly visits. NST. Assess presentation",
        ],
        [
          "<strong>Month 9</strong>",
          "Anuvasana Basti with medicated oil. Yoni Pichu (vaginal tampon with oil)",
          "Prepare for delivery. Basti + Yoni Pichu for Yoni Mardava",
          "Weekly visits. Bishop score. Birth plan",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Charaka Sharira Sthana 8/32",
      devanagari:
        "प्रथमे मासि गर्भिण्याः क्षीरमनुपस्कृतं शीतं मात्राशी स्यात् |\nमधुरं शीतं द्रवप्रायं चाहारं सेवेत ||",
      transliteration:
        "prathame māsi garbhiṇyāḥ kṣīramanupaskṛtaṃ śītaṃ mātrāśī syāt |\nmadhuraṃ śītaṃ dravaprāyaṃ cāhāraṃ seveta ||",
      meaning:
        "In the first month, the pregnant woman should consume non-medicated cold milk in appropriate quantity (Matrashi — eating according to one's capacity). Her diet should be predominantly Madhura (sweet), Sheeta (cold), and Drava (liquid) in nature.",
      clinicalNote:
        "The emphasis on liquid, easily digestible diet in the first month is clinically sound — it addresses the common first-trimester issues of nausea, vomiting, and reduced appetite. Milk provides protein, calcium, and calories. The 'cold' quality helps reduce Pitta-related nausea. Modern: Small frequent meals, adequate hydration, and avoidance of strong smells are recommended for hyperemesis management.",
    },
    {
      source: "Charaka Sharira Sthana 8/32 (Month 4)",
      devanagari:
        "चतुर्थे मासि अक्षतान् दधिसंयुक्तान् भोजयेत् |\nनवनीतं क्षीरेण सह दद्यात् | हृद्यमन्नं प्रियं च ||",
      transliteration:
        "caturthe māsi akṣatān dadhisaṃyuktān bhojayet |\nnavanītaṃ kṣīreṇa saha dadyāt | hṛdyamannaṃ priyaṃ ca ||",
      meaning:
        "In the fourth month, she should be given rice (Akshata) mixed with curd. Butter (Navaneeta) should be given with milk. The food should be Hridya (pleasing to the heart/palatable) and Priya (dear/liked by her). This is the month when Dauhrida manifests, so her desires should be fulfilled.",
      clinicalNote:
        "Month 4 corresponds to the period when the fetal heart is fully developed and Chetana Dhatu manifests. The emphasis on Hridya (pleasing) food and fulfilling Dauhrida (cravings) aligns with the understanding that the second trimester is when appetite improves and cravings intensify (hCG levels plateau, progesterone-driven appetite increases). Curd provides probiotics and calcium; butter provides essential fatty acids.",
    },
    {
      source: "Charaka Sharira Sthana 8/32 (Month 8-9)",
      devanagari:
        "अष्टमे मासि यवागूं पयसा सिद्धां स्नेहसंयुक्तां दद्यात् |\nआस्थापनबस्तिं चानुवासनं च कुर्यात् |\nनवमे मासि अनुवासनबस्तिं योनिपिचुं च दद्यात् ||",
      transliteration:
        "aṣṭame māsi yavāgūṃ payasā siddhāṃ snehasaṃyuktāṃ dadyāt |\nāsthāpanbastiṃ cānuvāsanaṃ ca kuryāt |\nnavame māsi anuvāsanabastiṃ yonipiicuṃ ca dadyāt ||",
      meaning:
        "In the eighth month, she should be given Yavagu (rice gruel) prepared with milk and mixed with Sneha (ghee/oil). Asthapana Basti (decoction enema) and Anuvasana Basti (oil enema) should be administered. In the ninth month, Anuvasana Basti and Yoni Pichu (vaginal oil tampon) should be given.",
      clinicalNote:
        "The Basti Karma in months 8-9 is a unique Ayurvedic contribution to prenatal care. Anuvasana Basti (oil enema) helps regulate Apana Vayu, which governs delivery. Yoni Pichu with medicated oil softens the birth canal (Yoni Mardava), potentially aiding cervical ripening and perineal flexibility. Modern parallel: perineal massage with oil in late pregnancy is now evidence-based for reducing perineal tears.",
    },
    {
      source: "Kashyapa Samhita — Khila Sthana (Antarvatni Adhyaya)",
      devanagari:
        "गर्भिणी न अतिस्नानं न अतिव्यायामं न अतिमैथुनं न अतिस्वप्नं |\nन अत्युच्चशयनं न प्रवातशयनं सेवेत ||",
      transliteration:
        "garbhiṇī na atisnānaṃ na ativyāyāmaṃ na atimaithunaṃ na atisvapnaṃ |\nna atyuccaśayanaṃ na pravātaśayanaṃ seveta ||",
      meaning:
        "A pregnant woman should not indulge in excessive bathing, excessive exercise, excessive sexual intercourse, or excessive sleep. She should not sleep on very high beds or in windy/drafty places.",
      clinicalNote:
        "These precautions are remarkably aligned with modern advice: (1) Excessive hot baths can cause hyperthermia (neural tube defects in early pregnancy), (2) Excessive exercise may reduce uterine blood flow, (3) Excessive coitus may increase infection risk and preterm labor, (4) Excessive sleep/sedentary lifestyle increases DVT risk, (5) Fall precautions (high beds) prevent trauma. Pragmatic antenatal counselling from antiquity.",
    },
    {
      source: "Charaka Sharira Sthana 8/21 (Garbhopaghatakara Bhava)",
      devanagari:
        "अत्यम्बुपानम् अतिमद्यपानम् अतिव्यवायं वेगसन्धारणम् |\nव्यायामम् उपवासं दिवास्वप्नं रात्रिजागरणम् |\nशोकं भयं क्रोधं च गर्भोपघातकराणि ||",
      transliteration:
        "atyambupānam atimadyapānam ativyavāyaṃ vegasandhāraṇam |\nvyāyāmam upavāsaṃ divāsvapnaṃ rātrijāgaraṇam |\nśokaṃ bhayaṃ krodhaṃ ca garbhopaghātakarāṇi ||",
      meaning:
        "Excessive water intake, excessive alcohol consumption, excessive sexual intercourse, suppression of natural urges, excessive exercise, fasting, daytime sleep, staying awake at night, grief, fear, and anger — all these are harmful to the Garbha (Garbhopaghatakara).",
      clinicalNote:
        "This comprehensive list of harmful factors shows remarkable clinical insight: (1) Alcohol is a known teratogen (Fetal Alcohol Syndrome), (2) Excessive exercise can cause uterine contractions, (3) Fasting causes hypoglycemia and ketosis, (4) Sleep disturbances affect cortisol and stress hormones, (5) Psychological stress (grief, fear, anger) increases cortisol → risk of preterm labor and low birth weight. Modern evidence strongly supports all these precautions.",
    },
  ],

  dualCols: [
    {
      title: "Trimester-wise Antenatal Care Comparison",
      ayurvedaTitle: "Garbhini Paricharya (Charaka Sha. 8)",
      modernTitle: "Modern ANC Protocol",
      ayurvedaContent: `
        <p><strong>First Trimester (Month 1-3):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Madhura, Sheeta, Drava Ahara (sweet, cold, liquid diet)</li>
          <li>• Non-medicated milk (Month 1), Madhura Dravya-medicated milk (Month 2)</li>
          <li>• Milk with honey + ghee, Shashtika Shali rice (Month 3)</li>
          <li>• Avoid: heavy exertion, stress, travel, loud noises</li>
          <li>• Garbhasthapana Dravyas if Garbha Srava risk</li>
        </ul>
        <p class="mt-3"><strong>Second Trimester (Month 4-6):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Rice with curd, butter with milk (Month 4)</li>
          <li>• Ksheera-Sarpi — milk with ghee (Month 5-6)</li>
          <li>• Fulfill Dauhrida (cravings) — Month 4 onwards</li>
          <li>• Garbha Sanskara — positive mental activities</li>
        </ul>
        <p class="mt-3"><strong>Third Trimester (Month 7-9):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Prithak Parnyadi Ghrita (Month 7)</li>
          <li>• Basti Karma: Asthapana + Anuvasana (Month 8-9)</li>
          <li>• Yoni Pichu for Yoni Mardava (Month 9)</li>
          <li>• Preparation for Sukha Prasava (smooth delivery)</li>
        </ul>
      `,
      modernContent: `
        <p><strong>First Trimester (0-12 weeks):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Booking visit: history, examination, risk assessment</li>
          <li>• Investigations: CBC, Blood group, Rh, RBS, HIV, HBsAg, VDRL, Urine R/M</li>
          <li>• Supplements: Folic acid 5mg, Iron 60mg, Calcium 500mg</li>
          <li>• NT scan (11-13+6 wk), Dual marker screening</li>
          <li>• Dietary advice: avoid alcohol, tobacco, raw meat, soft cheese</li>
        </ul>
        <p class="mt-3"><strong>Second Trimester (13-28 weeks):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Monthly visits. Fundal height, FHR, BP, weight</li>
          <li>• Anomaly scan (18-20 wk), Quad marker if indicated</li>
          <li>• GCT/OGTT for GDM screening (24-28 wk)</li>
          <li>• TT vaccination (two doses, 4 weeks apart)</li>
          <li>• Anti-D prophylaxis if Rh-negative (28 wk)</li>
        </ul>
        <p class="mt-3"><strong>Third Trimester (29-40 weeks):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• Fortnightly then weekly visits</li>
          <li>• Growth scan (32-36 wk), Presentation assessment</li>
          <li>• NST/BPP for fetal wellbeing</li>
          <li>• Birth plan, danger sign education</li>
          <li>• Bishop score assessment near term</li>
        </ul>
      `,
    },
    {
      title: "Garbhopaghatakara Bhava vs Modern Teratogens",
      ayurvedaTitle: "Factors Harmful to Garbha (Charaka)",
      modernTitle: "Modern Teratogenic Factors",
      ayurvedaContent: `
        <p><strong>Charaka's Garbhopaghatakara Bhava:</strong></p>
        <ul class="space-y-2 mt-2">
          <li><strong>Aharaja (Dietary):</strong> Ati Katu (excess pungent), Ati Ushna (excess hot), Ati Lavana (excess salt), Ati Madya (alcohol), Ati Ambu (excess water), fasting</li>
          <li><strong>Viharaja (Lifestyle):</strong> Ati Vyayama (excess exercise), Ati Maithuna (excess coitus), Ati Svapna/Jagarana (excess sleep/wakefulness), travel on rough roads, fall/trauma</li>
          <li><strong>Manasika (Psychological):</strong> Shoka (grief), Bhaya (fear), Krodha (anger), excessive mental stress</li>
          <li><strong>Vegasandharana:</strong> Suppression of natural urges (urine, feces, flatus, etc.)</li>
          <li><strong>Dauhrida Avamana:</strong> Neglecting pregnancy cravings — can lead to fetal deformities</li>
        </ul>
      `,
      modernContent: `
        <p><strong>Modern Teratogenic Classifications:</strong></p>
        <ul class="space-y-2 mt-2">
          <li><strong>Infections (TORCH):</strong> Toxoplasma, Others (Syphilis, Varicella, Parvovirus), Rubella, CMV, Herpes — cause malformations, IUGR, fetal death</li>
          <li><strong>Drugs:</strong> Thalidomide, Warfarin, Phenytoin, Isotretinoin, ACE inhibitors, Methotrexate, Lithium — FDA Category X drugs absolutely contraindicated</li>
          <li><strong>Alcohol:</strong> Fetal Alcohol Syndrome — microcephaly, facial dysmorphism, cardiac defects, intellectual disability</li>
          <li><strong>Radiation:</strong> >5 rad in first trimester — microcephaly, intellectual disability. Avoid X-rays unless essential</li>
          <li><strong>Environmental:</strong> Lead, mercury, pesticides, organic solvents</li>
          <li><strong>Maternal conditions:</strong> Uncontrolled diabetes (NTD, cardiac), Hyperthermia (NTD), PKU, Hypothyroidism</li>
        </ul>
      `,
    },
    {
      title: "Nutritional Comparison: Ayurvedic vs Modern",
      ayurvedaTitle: "Garbhini Pathya Ahara",
      modernTitle: "Modern Nutritional Guidelines",
      ayurvedaContent: `
        <p><strong>Recommended Foods (Pathya):</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• <strong>Ksheera (Milk):</strong> Throughout pregnancy — primary Garbha Poshana</li>
          <li>• <strong>Ghrita (Ghee):</strong> Especially from Month 5 onwards — nourishes all Dhatus</li>
          <li>• <strong>Shashtika Shali:</strong> Aged rice — easily digestible carbohydrate</li>
          <li>• <strong>Mudga Yusha:</strong> Green gram soup — protein, easily digestible</li>
          <li>• <strong>Madhura Rasa dominant:</strong> Sweet taste nourishes and builds tissues</li>
          <li>• <strong>Garbhasthapana Dravyas:</strong> Aindri, Brahmi, Shatavari, Ashwagandha, Durva</li>
        </ul>
        <p class="mt-2"><strong>Avoided (Apathya):</strong> Ati Katu, Ati Ushna, Ati Lavana, Madya, Mamsa of Gramya Pashu</p>
      `,
      modernContent: `
        <p><strong>Essential Nutrients in Pregnancy:</strong></p>
        <ul class="space-y-1 mt-2">
          <li>• <strong>Folic acid (5mg/day):</strong> Prevents neural tube defects. Start preconception</li>
          <li>• <strong>Iron (60mg elemental):</strong> Prevents anemia. Requirement doubles in pregnancy</li>
          <li>• <strong>Calcium (1000-1200mg/day):</strong> Fetal skeletal development. Prevents pre-eclampsia</li>
          <li>• <strong>Protein (60-70g/day):</strong> Extra 15g/day above non-pregnant. Essential for fetal growth</li>
          <li>• <strong>Calories:</strong> Extra 300 kcal/day in 2nd-3rd trimester</li>
          <li>• <strong>DHA/Omega-3:</strong> Brain and retinal development</li>
          <li>• <strong>Vitamin D:</strong> Calcium absorption, immune function</li>
        </ul>
        <p class="mt-2"><strong>Avoid:</strong> Alcohol, tobacco, raw/undercooked meat, unpasteurized dairy, high-mercury fish, excess caffeine (&lt;200mg/day)</p>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Garbhasthapana Dashemani — 10 Pregnancy-Protective Drugs",
      headers: ["Drug Name", "Latin/Botanical Name", "Key Action", "Clinical Use"],
      rows: [
        [
          "<strong>Aindri</strong>",
          "Bacopa monnieri (Brahmi)",
          "Medhya, Garbhasthapana",
          "Brain development, pregnancy maintenance",
        ],
        [
          "<strong>Brahmi</strong>",
          "Centella asiatica (Mandukaparni)",
          "Medhya, Rasayana",
          "Cognitive development, rejuvenation",
        ],
        [
          "<strong>Shatavari</strong>",
          "Asparagus racemosus",
          "Balya, Stanyajanana",
          "Strength, lactation promotion, Garbha Poshana",
        ],
        [
          "<strong>Durva</strong>",
          "Cynodon dactylon",
          "Raktastambhana, Garbhasthapana",
          "Prevents bleeding, pregnancy stabilization",
        ],
        [
          "<strong>Vishvadeva (Nagabala)</strong>",
          "Grewia hirsuta",
          "Balya, Brimhana",
          "Strengthening, nourishment",
        ],
        [
          "<strong>Amogha (Sahachara)</strong>",
          "Barleria prionitis / Strobilanthes",
          "Vatahara, Garbhasthapana",
          "Anti-Vata, pregnancy maintenance",
        ],
        [
          "<strong>Avyatha (Shelu)</strong>",
          "Cordia dichotoma",
          "Madhura, Sheeta",
          "Cooling, nutritive",
        ],
        [
          "<strong>Shivaa (Haritaki)</strong>",
          "Terminalia chebula",
          "Tridoshahara, Rasayana",
          "Digestive regulation, rejuvenation (used carefully)",
        ],
        [
          "<strong>Aristha (Nimba/Pilu)</strong>",
          "Salvadora persica / Azadirachta",
          "Krimighna, Raktashodhaka",
          "Anti-microbial, blood purification",
        ],
        [
          "<strong>Vatyapushpi (Sida)</strong>",
          "Sida cordifolia",
          "Balya, Garbhasthapana",
          "Strengthening, pregnancy protection",
        ],
      ],
    },
    {
      title: "Routine ANC Investigations — Schedule",
      headers: ["Visit/Timing", "Investigations", "Purpose", "Ayurvedic Correlation"],
      rows: [
        [
          "<strong>Booking (<12 wk)</strong>",
          "CBC, Blood group + Rh, RBS/FBS, HIV, HBsAg, VDRL, Urine R/M + C/S, TSH",
          "Baseline assessment, identify high-risk",
          "Rogi Pariksha — Dashavidha, Ashtavidha Pariksha for baseline Prakriti assessment",
        ],
        [
          "<strong>11-13+6 weeks</strong>",
          "NT scan, PAPP-A, free β-hCG (Dual marker)",
          "Chromosomal screening (Down syndrome risk)",
          "Corresponds to Pancha Piṇḍika stage — structural assessment",
        ],
        [
          "<strong>15-18 weeks</strong>",
          "Quadruple marker (AFP, uE3, hCG, Inhibin-A)",
          "Second-tier screening for aneuploidies and NTD",
          "Garbha Sthirata period — confirming healthy development",
        ],
        [
          "<strong>18-20 weeks</strong>",
          "Anomaly scan (TIFFA)",
          "Detailed structural survey of all fetal organs",
          "Sarvanga Pratyanga Nirmana assessment — all organs should be formed",
        ],
        [
          "<strong>24-28 weeks</strong>",
          "GCT (50g)/OGTT (75g) for GDM, Hb%, Anti-D if Rh-ve",
          "Screen gestational diabetes, anemia",
          "Medha-Bala development period — maternal Agni assessment",
        ],
        [
          "<strong>28-34 weeks</strong>",
          "Growth scan, Hb%, Repeat HIV/VDRL if high-risk",
          "Growth assessment, anemia, infection screening",
          "Ojas assessment — maternal and fetal strength evaluation",
        ],
        [
          "<strong>36-40 weeks</strong>",
          "NST, Presentation check, Bishop score, GBS culture (35-37wk)",
          "Fetal wellbeing, delivery planning",
          "Apana Vayu assessment — readiness for Prasava",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Key ANC Investigations — Clinical Details",
      headers: ["Investigation", "Normal Values", "Abnormal Significance", "Action Required"],
      rows: [
        [
          "<strong>Hemoglobin</strong>",
          "≥11 g/dL (WHO)",
          "Mild anemia: 10-10.9, Moderate: 7-9.9, Severe: <7 g/dL",
          "Iron-Folic acid supplementation. Parenteral iron if <7 or non-responsive. Transfusion if <4 g/dL or symptomatic",
        ],
        [
          "<strong>Blood Group + Rh</strong>",
          "Any ABO group, Rh positive",
          "Rh-negative mother with Rh-positive father → risk of isoimmunization",
          "Anti-D prophylaxis at 28 wk and within 72 hrs of delivery. ICT monitoring",
        ],
        [
          "<strong>Random Blood Sugar</strong>",
          "<140 mg/dL",
          "≥140 → proceed to OGTT",
          "75g OGTT: Fasting ≥92, 1hr ≥180, 2hr ≥153 mg/dL (IADPSG criteria) = GDM",
        ],
        [
          "<strong>Urine Routine</strong>",
          "No protein, sugar, or pus cells",
          "Proteinuria → pre-eclampsia workup. Glycosuria → GDM screening. Pus cells → UTI",
          "Repeat dipstick each visit. 24hr protein or PCR if proteinuria. Urine C/S if UTI suspected",
        ],
        [
          "<strong>HIV/HBsAg/VDRL</strong>",
          "Non-reactive",
          "HIV+ → PPTCT protocol. HBsAg+ → HBIG + vaccine for neonate. VDRL+ → treat syphilis",
          "Prevent vertical transmission. Early treatment improves outcomes dramatically",
        ],
        [
          "<strong>TSH</strong>",
          "0.1-2.5 mIU/L (1st tri), <3.0 (2nd-3rd)",
          "Hypothyroidism → risk of miscarriage, intellectual disability, pre-eclampsia",
          "Start Levothyroxine. Monitor TSH every 4-6 weeks. Adjust dose as pregnancy progresses",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Garbhini Paricharya — Integrated ANC Decision Tree",
    diagramSvg: `
      <svg viewBox="0 0 850 750" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
        <style>
          .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
          .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
          .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
          .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
          .box-purple { fill: #F3E5F5; stroke: #AB47BC; stroke-width: 2; rx: 10; }
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

        <!-- Title -->
        <text class="label-bold" x="425" y="25" style="font-size:16px;">Integrated Garbhini Paricharya — ANC Decision Tree</text>

        <!-- Step 1: Confirmation -->
        <rect class="box" x="280" y="40" width="290" height="50" />
        <text class="label-bold" x="425" y="60">Pregnancy Confirmed (UPT+ / USG)</text>
        <text class="label small" x="425" y="78">Begin Garbhini Paricharya + Modern ANC</text>

        <line class="arrow" x1="425" y1="90" x2="425" y2="115" />

        <!-- Step 2: Risk Assessment -->
        <rect class="box-blue" x="280" y="115" width="290" height="50" />
        <text class="label-bold" x="425" y="135">Risk Assessment (Booking Visit)</text>
        <text class="label small" x="425" y="153">Prakriti Pariksha + Modern risk stratification</text>

        <!-- Branch: Low Risk vs High Risk -->
        <line class="arrow-yes" x1="350" y1="165" x2="180" y2="200" />
        <text class="yes-label" x="245" y="185">Low Risk</text>

        <line class="arrow-no" x1="500" y1="165" x2="670" y2="200" />
        <text class="no-label" x="605" y="185">High Risk</text>

        <!-- Low Risk Path -->
        <rect class="box-green" x="50" y="200" width="260" height="55" />
        <text class="label-bold" x="180" y="220">Standard Paricharya Protocol</text>
        <text class="label small" x="180" y="235">Masanumasika Ahara-Vihara</text>
        <text class="label small" x="180" y="248">+ Routine ANC schedule</text>

        <!-- High Risk Path -->
        <rect class="box-red" x="540" y="200" width="260" height="55" />
        <text class="label-bold" x="670" y="220">Enhanced Monitoring</text>
        <text class="label small" x="670" y="235">Frequent visits + specialist care</text>
        <text class="label small" x="670" y="248">Garbhasthapana Dravyas if needed</text>

        <!-- Trimester Flow -->
        <line class="arrow" x1="180" y1="255" x2="180" y2="285" />
        <line class="arrow" x1="670" y1="255" x2="670" y2="285" />

        <!-- First Trimester -->
        <rect class="box" x="50" y="285" width="260" height="65" />
        <text class="label-bold" x="180" y="305">1st Trimester (Month 1-3)</text>
        <text class="label small" x="180" y="320">Madhura-Sheeta-Drava Ahara</text>
        <text class="label small" x="180" y="333">Dating USG, Booking labs</text>
        <text class="label small" x="180" y="346">NT Scan, Folic acid + Iron</text>

        <rect class="box-red" x="540" y="285" width="260" height="65" />
        <text class="label-bold" x="670" y="305">High Risk — 1st Trimester</text>
        <text class="label small" x="670" y="320">Garbhasthapana if threatened</text>
        <text class="label small" x="670" y="333">Progesterone support</text>
        <text class="label small" x="670" y="346">Serial β-hCG, early USG</text>

        <!-- Second Trimester -->
        <line class="arrow" x1="180" y1="350" x2="180" y2="380" />
        <line class="arrow" x1="670" y1="350" x2="670" y2="380" />

        <rect class="box-purple" x="50" y="380" width="260" height="65" />
        <text class="label-bold" x="180" y="400">2nd Trimester (Month 4-6)</text>
        <text class="label small" x="180" y="415">Rice-curd, Ghee-milk, Dauhrida care</text>
        <text class="label small" x="180" y="428">Anomaly scan, GDM screening</text>
        <text class="label small" x="180" y="441">TT vaccination, Anti-D if Rh-ve</text>

        <rect class="box-red" x="540" y="380" width="260" height="65" />
        <text class="label-bold" x="670" y="400">High Risk — 2nd Trimester</text>
        <text class="label small" x="670" y="415">Cervical cerclage if IC</text>
        <text class="label small" x="670" y="428">BP + urine monitoring (PE risk)</text>
        <text class="label small" x="670" y="441">Doppler studies if IUGR risk</text>

        <!-- Third Trimester -->
        <line class="arrow" x1="180" y1="445" x2="180" y2="475" />
        <line class="arrow" x1="670" y1="445" x2="670" y2="475" />

        <rect class="box-blue" x="50" y="475" width="260" height="70" />
        <text class="label-bold" x="180" y="495">3rd Trimester (Month 7-9)</text>
        <text class="label small" x="180" y="510">Prithak Parnyadi Ghrita (M7)</text>
        <text class="label small" x="180" y="523">Basti Karma (M8-9), Yoni Pichu (M9)</text>
        <text class="label small" x="180" y="536">Growth scan, NST, Birth plan</text>

        <rect class="box-red" x="540" y="475" width="260" height="70" />
        <text class="label-bold" x="670" y="495">High Risk — 3rd Trimester</text>
        <text class="label small" x="670" y="510">Steroid cover if preterm risk</text>
        <text class="label small" x="670" y="523">Intensive fetal surveillance</text>
        <text class="label small" x="670" y="536">Plan delivery: timing + mode</text>

        <!-- Convergence -->
        <line class="arrow" x1="180" y1="545" x2="325" y2="590" />
        <line class="arrow" x1="670" y1="545" x2="525" y2="590" />

        <!-- Final -->
        <rect class="box-green" x="250" y="590" width="350" height="50" />
        <text class="label-bold" x="425" y="610">Term — Prepared for Prasava</text>
        <text class="label small" x="425" y="628">Apana Vayu activated | Bishop Score assessed</text>

        <!-- Integration box -->
        <rect class="box" x="100" y="665" width="650" height="65" />
        <text class="label-bold" x="425" y="688">Key Integration Principle</text>
        <text class="label" x="425" y="705">Masanumasika Paricharya provides the dietary-lifestyle framework</text>
        <text class="label" x="425" y="720">Modern ANC provides the investigation-surveillance framework</text>

        <line class="arrow" x1="425" y1="640" x2="425" y2="665" />
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for Garbhini Paricharya:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Charaka's month-wise regimen progressively increases caloric density — from liquid diet (Month 1) to ghee-enriched preparations (Month 5-7) to Basti therapy (Month 8-9)</li>
        <li>The 8th-9th month Basti Karma is unique to Ayurveda — it regulates Apana Vayu, facilitating normal labour. Yoni Pichu softens the birth canal similar to modern perineal massage evidence</li>
        <li>Garbhasthapana Dashemani should be memorized — it is a guaranteed exam question. Aindri (Brahmi) heads the list</li>
        <li>Modern ANC requires minimum 4 visits (WHO basic) or 8 contacts (WHO 2016). Indian government recommends minimum 4 visits under JSSK</li>
        <li>TORCH screening is not routine in India but should be done if clinically indicated (history of bad obstetric history, fever with rash, IUGR)</li>
        <li>The Garbhopaghatakara Bhava list from Charaka is a very frequent exam question — memorize all factors with modern correlations</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Garbhini Paricharya & Modern ANC</h3>
    <div class="space-y-4">
      <p>Garbhini Paricharya and modern ANC are highly complementary systems. The Ayurvedic approach excels in preventive care through dietary-lifestyle modification, while modern ANC provides robust screening and surveillance tools.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Structured month-wise regimen (Masanumasika) — individualized care</li>
            <li>• Emphasis on Ahara (diet) as medicine — nutrition-first approach</li>
            <li>• Dauhrida management — addresses maternal psychological wellbeing</li>
            <li>• Garbha Sanskara — fetal imprinting through positive experiences</li>
            <li>• Basti Karma in 8th-9th month — prepares birth canal</li>
            <li>• Garbhasthapana drugs — pregnancy maintenance support</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Evidence-based screening protocols (NT, markers, OGTT)</li>
            <li>• Real-time fetal assessment (USG, Doppler, NST)</li>
            <li>• Laboratory monitoring (Hb, blood sugar, infections)</li>
            <li>• Risk stratification and referral pathways</li>
            <li>• Immunization (TT) and Rh prophylaxis</li>
            <li>• Emergency obstetric care when complications arise</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated ANC Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Booking:</strong> Prakriti assessment + modern risk stratification. Begin Masanumasika Paricharya + standard supplements</li>
          <li><strong>Each Visit:</strong> Ayurvedic Pariksha (Nadi, Mutra, Mala) + modern vitals (BP, weight, fundal height, FHR, urine dipstick)</li>
          <li><strong>Diet:</strong> Follow Masanumasika Pathya with addition of modern supplements (Iron, Folic acid, Calcium)</li>
          <li><strong>Screening:</strong> Use modern USG and lab investigations at standard timepoints alongside clinical assessment</li>
          <li><strong>Third Trimester:</strong> Basti Karma + Yoni Pichu (Ayurveda) alongside NST + growth monitoring (Modern) for delivery preparation</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Masanumasika Garbhini Paricharya (Charaka Sha. 8): Month 1 = non-medicated cold milk + Madhura-Sheeta-Drava Ahara. Month 2 = milk with Madhura Dravya. Month 3 = milk + honey + ghee.",
    "Month 4 = Rice with curd + butter with milk (Dauhrida period — fulfill cravings). Month 5-6 = Ksheera-Sarpi (milk with ghee). Month 7 = Prithak Parnyadi Ghrita.",
    "Month 8 = Yavagu with milk + Asthapana & Anuvasana Basti. Month 9 = Anuvasana Basti + Yoni Pichu with Bala Taila for Yoni Mardava (birth canal softening).",
    "Garbha Sambhava Samagri: Ritu (season), Kshetra (field/uterus), Ambu (water/nutrition), Beeja (seed/gametes) — Charaka's agricultural analogy for fertility.",
    "Garbhopaghatakara Bhava: Ati Madya (alcohol), Ati Vyayama (excess exercise), Ati Maithuna, Vegasandharana, Shoka-Bhaya-Krodha, Upavasa (fasting), Ratrijagarana.",
    "Garbhasthapana Dashemani: Aindri, Brahmi, Shatavari, Durva, Vishvadeva, Amogha, Avyatha, Shivaa, Aristha, Vatyapushpi — 10 drugs that protect pregnancy.",
    "Modern ANC: Minimum 4 visits (WHO basic), 8 contacts (WHO 2016). First visit ideally before 12 weeks. Booking investigations: CBC, BG, Rh, HIV, HBsAg, VDRL, TSH, Urine.",
    "ANC supplements: Folic acid 5mg/day (start preconception), Iron 60mg elemental, Calcium 1000-1200mg/day, Vitamin D. Extra 300 kcal/day in 2nd-3rd trimester.",
    "Screening schedule: NT scan 11-13+6 wk, Dual marker 1st tri, Quad marker 15-18 wk, Anomaly scan 18-20 wk, GCT/OGTT 24-28 wk, Growth scan 28-32 wk.",
    "TORCH: Toxoplasma, Others (Syphilis, Varicella), Rubella, CMV, Herpes — all can cause congenital malformations. Screen if history of BOH, rash, IUGR.",
    "Rh-negative mother: Anti-D prophylaxis at 28 wk (antenatal) and within 72 hrs of delivery if baby is Rh-positive. Also after any sensitizing event (amniocentesis, APH, abortion).",
    "GDM screening: 75g OGTT at 24-28 wk. IADPSG criteria: Fasting ≥92, 1hr ≥180, 2hr ≥153 mg/dL. Any ONE abnormal value = GDM diagnosis.",
    "High-risk pregnancy factors: Age >35 or <18, Grand multipara, Previous cesarean, Previous stillbirth/anomaly, Medical disorders (HTN, DM, thyroid), Rh-negative, multiple pregnancy.",
    "Basti Karma in 8th-9th month: Asthapana Basti with Madhura Dravya decoction, Anuvasana Basti with Bala Taila/Sahachara Taila. Regulates Apana Vayu for Prasava.",
    "Kashyapa's Antarvatni precautions: Avoid Ati Snana (excess bathing), Ati Vyayama, Ati Maithuna, Ati Svapna, Uchcha Shayana (high beds), Pravata Shayana (drafty places).",
  ],

  mnemonics: [
    {
      title: "Garbhini Paricharya Month-wise Diet Keywords",
      acronym: "M-M-MH-RC-KG-KG-PG-YB-YP",
      expansions: [
        "Month 1: Milk (non-medicated, cold)",
        "Month 2: Milk with Madhura Dravya",
        "Month 3: Milk + Honey + Ghee (Shashtika Shali)",
        "Month 4: Rice-Curd + butter-milk (Dauhrida care)",
        "Month 5: Ksheera-Ghrita (milk-ghee)",
        "Month 6: Ksheera-Ghrita with Madhura Dravya + Gokshura Yavagu",
        "Month 7: Prithak Parnyadi Ghrita",
        "Month 8: Yavagu + Basti (Asthapana + Anuvasana)",
        "Month 9: Yoni Pichu + Anuvasana Basti",
      ],
    },
    {
      title: "Garbhopaghatakara Bhava (Harmful Factors)",
      acronym: "SAVE-FSD",
      expansions: [
        "Shoka, Bhaya, Krodha (Grief, Fear, Anger)",
        "Ati Vyayama (Excess exercise)",
        "Vegasandharana (Suppression of urges)",
        "Excessive — Madya, Maithuna, Snana, Svapna",
        "Fasting (Upavasa) — causes hypoglycemia",
        "Sleep disturbance — Ratrijagarana (night waking) / Divasvapna (day sleep)",
        "Drafty/Uncomfortable sleeping — Pravata/Uchcha Shayana",
      ],
    },
    {
      title: "Booking Visit Investigations",
      acronym: "B-RUSH-TV",
      expansions: [
        "Blood group + Rh typing",
        "Random blood sugar (or FBS)",
        "Urine routine + microscopy",
        "Serology: HIV, HBsAg, VDRL",
        "Hemoglobin (CBC)",
        "TSH (thyroid screening)",
        "Verification USG (dating scan)",
      ],
    },
    {
      title: "TORCH Infections",
      acronym: "TORCH",
      expansions: [
        "Toxoplasma gondii — cat feces, raw meat → hydrocephalus, chorioretinitis",
        "Others — Syphilis, Varicella, Parvovirus B19, Zika",
        "Rubella — 1st trimester → CRS (cataracts, deafness, cardiac defects)",
        "Cytomegalovirus — most common congenital infection → sensorineural deafness",
        "Herpes Simplex — neonatal herpes if active lesions at delivery → cesarean",
      ],
    },
  ],
};

export function getM3Content() {
  return m3Content;
}
