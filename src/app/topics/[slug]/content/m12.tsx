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
// M12 — NAVAJATA SHISHU PARICHARYA (Newborn Care & Neonatology)
// ────────────────────────────────────────────────────────

const m12Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 8",
    "Sushruta Sharira Sthana Ch. 10",
    "Kashyapa Samhita — Sutra Sthana, Khila Sthana (Jatakarma)",
    "Ashtanga Hridaya Uttara Sthana Ch. 1",
    "Ashtanga Sangraha Sharira Sthana",
    "Williams Obstetrics Ch. 32–33",
    "DC Dutta Ch. 33",
    "NNF Clinical Practice Guidelines (IAP-NNF)",
    "Nelson Textbook of Pediatrics — Neonatal Section",
  ],

  units: [
    {
      title: "Jatakarma Samskara & Navajata Paricharya",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the classical Ayurvedic rites performed immediately after birth (Jatakarma Samskara) as described in Charaka Sharira Sthana Chapter 8, Sushruta Sharira Sthana Chapter 10, and Kashyapa Samhita. These rituals encompass cutting and tying the umbilical cord (Nabhinalacchedana), cleansing the newborn, Pranaprathishta (establishment of respiration), Medhyajanana (intellect-promoting) measures including Madhu-Ghrita Pralehana, and initiation of Stanya Pana (breastfeeding)."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Nabhinalacchedana — umbilical cord cutting at 8 Angula from the navel"),
          React.createElement("li", null, "Madhu-Ghrita Pralehana — honey and ghee licking for Medhya effect"),
          React.createElement("li", null, "Ulbaparimarjana — cleansing of vernix and birth fluids"),
          React.createElement("li", null, "Stanyapana Vidhi — initiation of breastfeeding protocol"),
          React.createElement("li", null, "Raksha Karma — protective rituals (fumigation with Sarshapa, Guggulu)")
        )
      ),
    },
    {
      title: "Modern Essential Newborn Care & APGAR Scoring",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers modern essential newborn care as per WHO and NNF guidelines. APGAR scoring (Appearance, Pulse, Grimace, Activity, Respiration) at 1 and 5 minutes, thermoregulation (warm chain), delayed cord clamping, immediate skin-to-skin contact, early initiation of breastfeeding within one hour, and Neonatal Resuscitation Program (NRP) algorithm for birth asphyxia."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "APGAR scoring — assessment at 1 min and 5 min after birth"),
          React.createElement("li", null, "Neonatal Resuscitation Program (NRP) — golden minute algorithm"),
          React.createElement("li", null, "Thermoregulation — warm chain, KMC (Kangaroo Mother Care)"),
          React.createElement("li", null, "Delayed cord clamping — 1 to 3 minutes post-delivery"),
          React.createElement("li", null, "Eye prophylaxis, Vitamin K injection, immunization at birth")
        )
      ),
    },
    {
      title: "Neonatal Infections & Prameha Pidaka",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers neonatal infections from both Ayurvedic and modern perspectives. The Ayurvedic concept of Balashosha, Balagraha, and Prameha Pidaka (pustular infections in the newborn) are correlated with modern neonatal sepsis, omphalitis, neonatal conjunctivitis, and common skin infections. Kashyapa Samhita provides extensive descriptions of pediatric conditions under Bala Roga."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Balagraha — neonatal diseases described in Kashyapa Samhita"),
          React.createElement("li", null, "Prameha Pidaka correlation with neonatal skin infections"),
          React.createElement("li", null, "Modern neonatal sepsis — early-onset vs late-onset, sepsis screen"),
          React.createElement("li", null, "Omphalitis, neonatal conjunctivitis, oral thrush management"),
          React.createElement("li", null, "Neonatal jaundice — Kamala in newborn, phototherapy criteria")
        )
      ),
    },
  ],

  orientation: {
    why: "Navajata Shishu Paricharya (Newborn Care) bridges Ayurvedic Jatakarma Samskara with modern neonatology. This module is critical for Prasuti Tantra practitioners because the immediate postnatal period determines neonatal survival and long-term health. Classical texts from Kashyapa and Charaka provide detailed newborn care rituals that show remarkable parallels to modern essential newborn care. Understanding both systems enables integrated clinical practice in delivery rooms and postnatal wards.",
    examWeight: "High-yield topic for university exams. Jatakarma Samskara shlokas from Kashyapa and Charaka are frequently asked as long essays (20 marks). APGAR scoring, NRP algorithm, and neonatal sepsis appear as short notes (10 marks). Comparison of Ayurvedic Navajata Paricharya with modern essential newborn care is a very common question. Expect MCQs on APGAR components, NRP steps, and Kashyapa references.",
  },

  definition: {
    ayurveda: `
      <p><strong>Navajata Shishu (Newborn)</strong> refers to the infant immediately after birth (Prasava). The classical texts prescribe a set of 16 Samskaras beginning with <strong>Jatakarma</strong> — the first Samskara performed at the time of birth.</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"जातमात्रस्य शिशोः प्राणप्रतिष्ठापनार्थं मधुसर्पिः प्रलेहनं कारयेत्"</p>
      <p class="mt-2"><strong>Jatakarma</strong> includes Pranapratishthapana (establishment of breathing), Nabhinalacchedana (cord cutting), Ulbaparimarjana (cleansing), and Madhu-Ghrita Pralehana (licking of honey and ghee). <strong>Kashyapa</strong> provides the most detailed account of newborn care under Bala Roga section.</p>
    `,
    modern: `
      <p><strong>Neonate</strong> is defined as an infant from birth to 28 days of life. The <strong>neonatal period</strong> is the most vulnerable time — accounting for approximately 47% of under-5 child mortality globally.</p>
      <p class="mt-2"><strong>Essential Newborn Care (WHO)</strong> includes: warmth (thermoregulation), breathing (airway management), cleanliness (aseptic cord care), and feeding (early breastfeeding within 1 hour).</p>
      <p class="mt-2"><strong>APGAR Score</strong> is assessed at 1 minute (need for resuscitation) and 5 minutes (response to resuscitation). Score 7-10 = Normal, 4-6 = Moderate depression, 0-3 = Severe depression requiring immediate NRP.</p>
    `,
    classification: {
      title: "Classification of Newborn by Gestational Age & Weight",
      headers: ["Category", "Ayurvedic Concept", "Modern Classification", "Details"],
      rows: [
        [
          "<strong>By Gestational Age</strong>",
          "Puranagarbha (full-term), Aparipakva Garbha (preterm)",
          "Preterm (<37 wk), Term (37-42 wk), Post-term (>42 wk)",
          "Preterm babies need NICU care; term babies need essential newborn care",
        ],
        [
          "<strong>By Birth Weight</strong>",
          "Hina Bala Shishu (low strength infant)",
          "LBW (<2500g), VLBW (<1500g), ELBW (<1000g), Normal (2500-4000g)",
          "LBW is a leading cause of neonatal mortality; may be preterm or IUGR",
        ],
        [
          "<strong>By Size for GA</strong>",
          "Garbha Shosha (intrauterine wasting)",
          "SGA (<10th centile), AGA (10-90th), LGA (>90th centile)",
          "SGA suggests IUGR; LGA suggests GDM; both need monitoring",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Charaka Sharira Sthana 8/46",
      devanagari:
        "अथ खलु जातमात्रस्य कुमारस्य मूर्ध्नि तालुनि च मणिबन्धे\nप्राणप्रतिष्ठापनार्थं मन्त्रमुच्चारयेत् |\nमधुसर्पिषी प्रलेहयेत् अनामिकया सुवर्णशलाकया ||",
      transliteration:
        "atha khalu jātamātrasya kumārasya mūrdhni tāluni ca maṇibandhe\nprāṇapratiṣṭhāpanārthaṃ mantramuccārayet |\nmadhusarpiṣī pralehayettanāmikayā suvarṇaśalākayā ||",
      meaning:
        "For the newborn infant, mantras should be chanted near the head, palate and wrist for the establishment of Prana (life force/respiration). Honey (Madhu) and clarified butter (Sarpis/Ghrita) should be administered as a lick (Pralehana) using the ring finger or a gold probe (Suvarna Shalaka).",
      clinicalNote:
        "This ritual corresponds to assessment of airway and breathing in the newborn. The stimulation of palate and wrist parallel tactile stimulation used in modern NRP. Madhu-Ghrita provides immediate energy (glucose) to the hypoglycemia-prone neonate. Gold probe use (Suvarna Prashana) is a unique Ayurvedic immunomodulatory concept.",
    },
    {
      source: "Sushruta Sharira Sthana 10/13-15",
      devanagari:
        "नाभिनालं छेदयेदष्टाङ्गुलप्रमाणे |\nग्रन्थिं बद्ध्वा तन्तुना कोशवस्त्रेण वेष्टयेत् |\nसैन्धवसर्षपकल्कं नाभ्यां प्रतिसारयेत् ||",
      transliteration:
        "nābhinālaṃ chedayedaṣṭāṅgulapramāṇe |\ngranthiṃ baddhvā tantunā kośavastreṇa veṣṭayet |\nsaindhavaṣarṣapakalkaṃ nābhyāṃ pratisārayet ||",
      meaning:
        "The umbilical cord (Nabhinal) should be cut at a distance of eight Angula (approximately 12 cm) from the navel. It should be tied with a thread (Tantu) and wrapped with silk cloth (Kosha Vastra). A paste of Saindhava Lavana (rock salt) and Sarshapa (mustard) should be applied to the umbilical stump.",
      clinicalNote:
        "This precisely describes cord clamping and cutting. Modern practice clamps at approximately 2-3 cm from the abdomen. Sushruta's Saindhava-Sarshapa application has antiseptic properties — correlating with modern dry cord care or antiseptic application for omphalitis prevention. WHO now recommends delayed cord clamping (1-3 min) for improved iron stores.",
    },
    {
      source: "Kashyapa Samhita — Jatisutriya Adhyaya",
      devanagari:
        "जातमात्रं शिशुं स्नापयित्वा शुद्धवस्त्रेण परिमृज्य |\nपिचुना घृतार्द्रेण तालुशोधनं कारयेत् |\nततः स्तन्यं पाययेत् दक्षिणस्तनात् प्रथमम् ||",
      transliteration:
        "jātamātraṃ śiśuṃ snāpayitvā śuddhavastreṇa parimṛjya |\npicunā ghṛtārdreṇa tāluśodhanaṃ kārayet |\ntataḥ stanyaṃ pāyayet dakṣiṇastanāt prathamam ||",
      meaning:
        "The just-born infant should be bathed and wiped with clean cloth. The palate should be cleansed with a cotton swab soaked in ghee (Ghrita Pichu). Then breastfeeding (Stanya Pana) should be initiated, beginning with the right breast first.",
      clinicalNote:
        "Kashyapa's protocol remarkably parallels modern essential newborn care: drying (Parimarjana), airway clearance (Talu Shodhana corresponds to oropharyngeal suctioning), and early breastfeeding initiation. Modern practice emphasizes skin-to-skin contact and breastfeeding within 1 hour of birth. Delayed bathing (after 24 hours) is now preferred over immediate bathing.",
    },
    {
      source: "Kashyapa Samhita — Lehanadhyaya (Sutra Sthana)",
      devanagari:
        "सुवर्णप्राशनं हि एतत् मेधाग्निबलवर्धनम् |\nआयुष्यं मङ्गलं पुण्यं वृष्यं ग्रहापहम् |\nमासात् परममेधावी षण्मासात् श्रुतधारकः ||",
      transliteration:
        "suvarṇaprāśanaṃ hi etat medhāgnibalavardhanam |\nāyuṣyaṃ maṅgalaṃ puṇyaṃ vṛṣyaṃ grahāpaham |\nmāsāt paramammedhāvī ṣaṇmāsāt śrutadhārakaḥ ||",
      meaning:
        "Suvarna Prashana (administration of gold with herbs and honey/ghee) promotes Medha (intellect), Agni (digestive fire), and Bala (strength). It is life-promoting, auspicious, meritorious, nourishing, and protective against Graha (infections/evil spirits). After one month, the child becomes supremely intelligent; after six months, the child becomes Shrutadhara (one who retains what is heard).",
      clinicalNote:
        "Suvarna Prashana is a unique Ayurvedic neonatal and pediatric immunomodulatory practice. Modern research suggests gold nanoparticles may have immunomodulatory properties. The honey and ghee vehicle provides immediate nutrition. This concept is being studied in contemporary Ayurvedic pediatric practice as an immunization adjunct.",
    },
  ],

  dualCols: [
    {
      title: "Immediate Newborn Care",
      ayurvedaTitle: "Jatakarma Samskara Protocol",
      modernTitle: "Essential Newborn Care (WHO/NNF)",
      ayurvedaContent: `
        <p><strong>Sequential steps of Jatakarma (per Charaka and Kashyapa):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Pranapratishthapana</strong> — establishment of respiration via mantra, stimulation of Murdhni (head), Talu (palate), and Manibandha (wrist)</li>
          <li><strong>Nabhinalacchedana</strong> — cutting umbilical cord at 8 Angula, tying with Tantu (thread)</li>
          <li><strong>Ulbaparimarjana</strong> — cleaning of vernix (Ulba) and birth fluids with soft cloth</li>
          <li><strong>Talu Shodhana</strong> — palate cleansing with Ghrita-soaked Pichu (cotton swab)</li>
          <li><strong>Madhu-Ghrita Pralehana</strong> — licking of honey and ghee with Anulomana Mantra</li>
          <li><strong>Stanyapana</strong> — initiation of breastfeeding from right breast first</li>
          <li><strong>Raksha Karma</strong> — protective fumigation with Sarshapa, Guggulu, Vacha</li>
        </ol>
      `,
      modernContent: `
        <p><strong>Essential Newborn Care steps (WHO guidelines):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Warmth</strong> — dry the baby, remove wet cloth, wrap in warm cloth. Maintain warm chain</li>
          <li><strong>Breathing</strong> — assess cry/breathing. If not breathing: stimulate, clear airway, begin NRP</li>
          <li><strong>Cord clamping</strong> — delayed clamping at 1-3 minutes. Cut with sterile instrument</li>
          <li><strong>Skin-to-skin</strong> — place baby on mother's chest immediately</li>
          <li><strong>Breastfeeding</strong> — initiate within 1 hour of birth</li>
          <li><strong>Eye care</strong> — prophylaxis with 1% silver nitrate or erythromycin</li>
          <li><strong>Vitamin K</strong> — 1 mg IM to prevent hemorrhagic disease of newborn (HDN)</li>
          <li><strong>Immunization</strong> — BCG, OPV-0, Hepatitis B within 24 hours</li>
        </ol>
      `,
    },
    {
      title: "Neonatal Assessment Comparison",
      ayurvedaTitle: "Bala Pariksha (Classical Assessment)",
      modernTitle: "APGAR & New Ballard Score",
      ayurvedaContent: `
        <p><strong>Assessment of newborn strength and vitality per Kashyapa:</strong></p>
        <ul class="space-y-2">
          <li><strong>Prana Pariksha:</strong> Assessment of cry, respiration, and vigor — strong cry (Uchcha Svara) indicates good Prana; weak/absent cry suggests compromised vitality</li>
          <li><strong>Varna Pariksha:</strong> Color assessment — Gaura (pink/fair) is normal; Shyava (dusky/blue) indicates Prana Kshaya</li>
          <li><strong>Bala Pariksha:</strong> Strength and tone — active movements (Cheshta) indicate good Bala; flaccidity suggests weakness</li>
          <li><strong>Stanya Grahana Shakti:</strong> Sucking reflex and feeding ability — strong suck indicates Agni Bala; poor suck warrants monitoring</li>
          <li><strong>Mala-Mutra Pravritti:</strong> Passage of meconium (Bala Purisha) and first urine within 24-48 hours — confirms GI and urinary tract patency</li>
        </ul>
      `,
      modernContent: `
        <p><strong>APGAR Score (assessed at 1 min and 5 min):</strong></p>
        <table class="w-full mt-2 text-sm border">
          <tr class="bg-gray-100"><th class="p-1 border">Parameter</th><th class="p-1 border">0</th><th class="p-1 border">1</th><th class="p-1 border">2</th></tr>
          <tr><td class="p-1 border"><strong>A</strong>ppearance</td><td class="p-1 border">Blue/pale all over</td><td class="p-1 border">Blue extremities</td><td class="p-1 border">Completely pink</td></tr>
          <tr><td class="p-1 border"><strong>P</strong>ulse</td><td class="p-1 border">Absent</td><td class="p-1 border">&lt;100 bpm</td><td class="p-1 border">&ge;100 bpm</td></tr>
          <tr><td class="p-1 border"><strong>G</strong>rimace</td><td class="p-1 border">No response</td><td class="p-1 border">Grimace</td><td class="p-1 border">Cry/sneeze</td></tr>
          <tr><td class="p-1 border"><strong>A</strong>ctivity</td><td class="p-1 border">Limp</td><td class="p-1 border">Some flexion</td><td class="p-1 border">Active motion</td></tr>
          <tr><td class="p-1 border"><strong>R</strong>espiration</td><td class="p-1 border">Absent</td><td class="p-1 border">Slow/irregular</td><td class="p-1 border">Good cry</td></tr>
        </table>
        <p class="mt-2"><strong>New Ballard Score:</strong> Assesses gestational maturity (neuromuscular + physical maturity criteria). Range: -10 to 50 points corresponding to 20-44 weeks GA.</p>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Neonatal Conditions — Ayurvedic Correlation with Modern Diagnosis",
      headers: ["Condition", "Ayurvedic Concept", "Modern Diagnosis", "Key Features"],
      rows: [
        [
          "<strong>Neonatal Jaundice</strong>",
          "Kamala / Navajata Pandu — aggravated Pitta leading to yellowish discoloration (Haridra Varna) of skin and eyes in newborn",
          "Physiological jaundice (Day 2-3), Pathological jaundice (within 24 hrs), Kernicterus",
          "Physiological: peaks Day 3-5, self-limiting. Pathological: early onset, rapid rise >5 mg/dL/day, bilirubin >15 mg/dL. Treat with phototherapy, exchange transfusion if severe",
        ],
        [
          "<strong>Neonatal Sepsis</strong>",
          "Balagraha / Jvara in Navajata — invasion by Graha (infectious agents) causing fever, lethargy, poor feeding in newborn",
          "Early-onset sepsis (<72 hrs: GBS, E. coli), Late-onset sepsis (>72 hrs: Staph, Klebsiella)",
          "Sepsis screen: TLC, I:T ratio >0.2, CRP, blood culture. Treat: Ampicillin + Gentamicin (EOS), Vancomycin + Cefotaxime (LOS)",
        ],
        [
          "<strong>Birth Asphyxia</strong>",
          "Mrita Sanjivana — techniques to revive apparently lifeless newborn, Prana Kshaya (loss of life force)",
          "Perinatal asphyxia: APGAR <7 at 5 min, cord pH <7.0, HIE staging (Sarnat)",
          "NRP algorithm: stimulation, bag-mask ventilation, chest compressions, epinephrine. HIE: therapeutic hypothermia within 6 hours",
        ],
        [
          "<strong>Neonatal Skin Infections</strong>",
          "Prameha Pidaka — pustular eruptions correlating with Kapha-Pitta vitiation in skin; Visarpa (erysipelas) in newborn",
          "Neonatal impetigo, pemphigus neonatorum, staphylococcal scalded skin syndrome",
          "Vesicles, bullae, honey-crusted lesions. Culture: S. aureus. Treat with parenteral antibiotics. Maintain skin hygiene",
        ],
        [
          "<strong>Omphalitis</strong>",
          "Nabhishotha — inflammation of Nabhi (umbilicus) due to improper cord care, Dushta Vrana at Nabhinal site",
          "Neonatal omphalitis: periumbilical cellulitis, purulent discharge from umbilical stump",
          "Red, edematous, foul-smelling umbilicus. Risk of portal vein sepsis, necrotizing fasciitis. Treat: IV antibiotics, surgical drainage if abscess",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Neonatal Investigations & Assessment Tools",
      headers: ["Investigation", "Purpose", "Timing", "Details"],
      rows: [
        [
          "<strong>APGAR Score</strong>",
          "Rapid assessment of newborn condition",
          "1 min and 5 min after birth",
          "5 parameters scored 0-2 each. Total 10. Score <7 at 5 min: abnormal. Does NOT predict long-term neurological outcome alone",
        ],
        [
          "<strong>Pulse Oximetry</strong>",
          "CCHD screening",
          "24-48 hours after birth",
          "Pre-ductal (right hand) and post-ductal (either foot) SpO2. Fail: <90% in either, or >3% difference. Screens for critical congenital heart disease",
        ],
        [
          "<strong>Sepsis Screen</strong>",
          "Evaluate for neonatal sepsis",
          "When clinically suspected",
          "TLC (<5000 or >25000), Band:Neutrophil ratio >0.2, CRP >1 mg/dL, micro-ESR. Two positive = positive screen. Blood culture is gold standard",
        ],
        [
          "<strong>Serum Bilirubin</strong>",
          "Assess jaundice severity",
          "When clinically jaundiced or TSB indicated",
          "Plot on Bhutani nomogram (hour-specific). TSB >15 mg/dL in term neonate: phototherapy. >25 mg/dL: exchange transfusion zone. Direct bilirubin >2 mg/dL: pathological",
        ],
        [
          "<strong>New Ballard Score</strong>",
          "Gestational age assessment",
          "Within first 48 hours",
          "6 neuromuscular + 6 physical maturity criteria. Score range -10 to 50 corresponding to 20-44 weeks. More accurate than Dubowitz for preterm babies",
        ],
        [
          "<strong>Newborn Screening</strong>",
          "Detect inborn errors of metabolism",
          "48-72 hours after birth",
          "Heel-prick blood sample on filter paper. Screens for: congenital hypothyroidism, PKU, G6PD deficiency, galactosemia, CAH, sickle cell disease",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Clinical Decision Tree — Neonatal Resuscitation Program (NRP)",
    diagramSvg: `
      <svg viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
        <style>
          .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
          .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
          .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
          .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
          .label { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; text-anchor: middle; }
          .label-bold { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; font-weight: bold; text-anchor: middle; }
          .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
          .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#arrowhead-green); }
          .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#arrowhead-red); }
          .yes-label { font-size: 11px; fill: #2E7D32; font-weight: bold; }
          .no-label { font-size: 11px; fill: #C62828; font-weight: bold; }
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

        <!-- Step 1: Birth -->
        <rect class="box" x="250" y="10" width="300" height="45" />
        <text class="label-bold" x="400" y="28">BIRTH — Term? Crying? Good tone?</text>
        <text class="label" x="400" y="45">(Assess within 30 seconds)</text>

        <line class="arrow-yes" x1="330" y1="55" x2="150" y2="85" />
        <text class="yes-label" x="220" y="72">YES (all)</text>

        <line class="arrow-no" x1="470" y1="55" x2="550" y2="85" />
        <text class="no-label" x="530" y="72">NO</text>

        <!-- Yes: Routine care -->
        <rect class="box-green" x="30" y="85" width="240" height="55" />
        <text class="label-bold" x="150" y="103">Routine Care</text>
        <text class="label" x="150" y="118">Warmth, clear airway, dry</text>
        <text class="label" x="150" y="133">Skin-to-skin, delayed cord clamping</text>

        <!-- No: Initial steps -->
        <rect class="box-blue" x="440" y="85" width="240" height="55" />
        <text class="label-bold" x="560" y="103">Initial Steps (Golden Minute)</text>
        <text class="label" x="560" y="118">Warm, dry, stimulate, position</text>
        <text class="label" x="560" y="133">Clear airway if needed</text>

        <line class="arrow" x1="560" y1="140" x2="560" y2="170" />

        <!-- Assess HR -->
        <rect class="box" x="440" y="170" width="240" height="40" />
        <text class="label-bold" x="560" y="192">Assess: HR? Breathing? SpO2?</text>

        <line class="arrow-no" x1="560" y1="210" x2="560" y2="240" />
        <text class="no-label" x="600" y="230">HR <100 or apnea</text>

        <line class="arrow-yes" x1="440" y1="195" x2="320" y2="195" />
        <text class="yes-label" x="370" y="188">HR >100, breathing</text>

        <!-- Good: Monitor -->
        <rect class="box-green" x="170" y="178" width="150" height="35" />
        <text class="label-bold" x="245" y="200">Monitor with SpO2</text>

        <!-- PPV -->
        <rect class="box-blue" x="420" y="240" width="280" height="45" />
        <text class="label-bold" x="560" y="258">PPV (Positive Pressure Ventilation)</text>
        <text class="label" x="560" y="275">Room air (21% O2), 40-60 breaths/min</text>

        <line class="arrow" x1="560" y1="285" x2="560" y2="315" />

        <!-- Assess after PPV -->
        <rect class="box" x="440" y="315" width="240" height="40" />
        <text class="label-bold" x="560" y="337">Assess HR after 30 sec PPV</text>

        <line class="arrow-no" x1="560" y1="355" x2="560" y2="385" />
        <text class="no-label" x="610" y="375">HR <60</text>

        <line class="arrow-yes" x1="440" y1="340" x2="300" y2="340" />
        <text class="yes-label" x="360" y="333">HR 60-100 rising</text>

        <rect class="box-green" x="160" y="325" width="140" height="35" />
        <text class="label-bold" x="230" y="347">Continue PPV</text>

        <!-- CPR -->
        <rect class="box-red" x="410" y="385" width="300" height="50" />
        <text class="label-bold" x="560" y="403">Chest Compressions + PPV</text>
        <text class="label" x="560" y="418">3:1 ratio (90 compressions: 30 breaths)</text>
        <text class="label" x="560" y="430">Increase to 100% O2</text>

        <line class="arrow" x1="560" y1="435" x2="560" y2="460" />

        <!-- Assess after CPR -->
        <rect class="box" x="440" y="460" width="240" height="35" />
        <text class="label-bold" x="560" y="482">HR still <60 after 60 sec?</text>

        <line class="arrow-no" x1="560" y1="495" x2="560" y2="525" />

        <!-- Epinephrine -->
        <rect class="box-red" x="420" y="525" width="280" height="45" />
        <text class="label-bold" x="560" y="543">IV Epinephrine 0.01-0.03 mg/kg</text>
        <text class="label" x="560" y="560">UVC access, consider volume expansion</text>

        <!-- Ayurvedic approach box -->
        <rect class="box" x="40" y="600" width="720" height="70" />
        <text class="label-bold" x="400" y="620">Ayurvedic Correlation: Mrita Sanjivana & Pranapratishthapana</text>
        <text class="label" x="400" y="640">Classical stimulation: Murdhni (head), Talu (palate), Manibandha (wrist) = modern tactile stimulation</text>
        <text class="label" x="400" y="655">Raksha Dhupana (fumigation) maintains aseptic environment around newborn</text>
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for newborn care:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>The "Golden Minute" — all initial steps of NRP should be completed within 60 seconds of birth</li>
        <li>Delayed cord clamping (1-3 min) improves iron stores and reduces need for blood transfusion in preterm infants</li>
        <li>Thermoregulation is critical — cold stress leads to hypoglycemia, metabolic acidosis, and increased mortality. Maintain temperature 36.5-37.5 C</li>
        <li>Jatakarma Samskara steps parallel modern NRP: Pranapratishthapana = airway/breathing, Nabhinalacchedana = cord clamping, Stanyapana = early breastfeeding</li>
        <li>Kangaroo Mother Care (KMC) is the gold standard for LBW babies — skin-to-skin contact for thermoregulation and bonding</li>
        <li>Suvarna Prashana (Kashyapa) is administered on Pushya Nakshatra — modern research exploring immunomodulatory potential of gold bhasma formulations</li>
        <li>Birth dose vaccines: BCG (left deltoid), OPV-0 (oral), Hepatitis B (anterolateral thigh) — all within 24 hours</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Jatakarma Samskara & Modern Neonatology</h3>
    <div class="space-y-4">
      <p>Newborn care represents a remarkable area of convergence between Ayurvedic Jatakarma traditions and modern neonatology. The sequential approach described by Kashyapa and Charaka closely mirrors the WHO Essential Newborn Care protocol.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Comprehensive Samskara framework from birth through infancy</li>
            <li>Suvarna Prashana — unique immunomodulatory protocol</li>
            <li>Raksha Karma — environmental purification and infection prevention</li>
            <li>Emphasis on Stanyapana Vidhi — structured breastfeeding protocols</li>
            <li>Kashyapa's extensive Bala Roga classification for neonatal conditions</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Evidence-based NRP algorithm for birth asphyxia management</li>
            <li>APGAR and Ballard scoring for objective assessment</li>
            <li>NICU technology for preterm and critically ill neonates</li>
            <li>Newborn screening for inborn errors of metabolism</li>
            <li>Immunization schedule for preventing infectious diseases</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated Neonatal Care Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Step 1:</strong> At birth — follow NRP algorithm; perform Pranapratishthapana alongside modern resuscitation as needed</li>
          <li><strong>Step 2:</strong> Cord care — delayed clamping (modern) + Saindhava-Sarshapa application (Ayurvedic antiseptic)</li>
          <li><strong>Step 3:</strong> Thermoregulation — warm chain + KMC (modern) integrated with Ulbaparimarjana (Ayurvedic cleansing)</li>
          <li><strong>Step 4:</strong> Early breastfeeding — within 1 hour (WHO) aligns with Kashyapa's Stanyapana Vidhi</li>
          <li><strong>Step 5:</strong> Ongoing care — Suvarna Prashana + modern immunization schedule for comprehensive protection</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Jatakarma Samskara is the first of 16 Samskaras — performed immediately at birth. Includes Pranapratishthapana, Nabhinalacchedana, Ulbaparimarjana, Madhu-Ghrita Pralehana, and Stanyapana.",
    "Nabhinalacchedana (Sushruta): cut cord at 8 Angula from navel, tie with Tantu, apply Saindhava-Sarshapa paste. Modern: clamp at 2-3 cm, delayed clamping 1-3 min for improved iron stores.",
    "Kashyapa Samhita is the prime text for Bala Roga (pediatrics) — Jatisutriya Adhyaya deals specifically with newborn care; Lehanadhyaya describes Suvarna Prashana.",
    "Suvarna Prashana (Kashyapa): gold bhasma with Madhu and Ghrita promotes Medha, Agni, and Bala. Administered on Pushya Nakshatra. Modern research explores immunomodulatory role.",
    "APGAR Score: Appearance, Pulse, Grimace, Activity, Respiration. Scored 0-2 each at 1 and 5 min. 7-10 = normal, 4-6 = moderate depression, 0-3 = severe, needs NRP.",
    "NRP Golden Minute sequence: Warmth, dry, stimulate, position airway, assess HR and breathing. If apneic/HR<100: PPV with room air. If HR<60 after 30s PPV: chest compressions (3:1 ratio).",
    "Delayed cord clamping (1-3 min) increases hemoglobin by 2 g/dL, iron stores by 50%, reduces IVH in preterms. WHO and IAP strongly recommend.",
    "Thermoregulation: maintain 36.5-37.5 C. Cold stress causes hypoglycemia, acidosis, increased O2 consumption, surfactant depletion. KMC is gold standard for LBW.",
    "Neonatal sepsis screen: TLC (<5000 or >25000), I:T ratio >0.2, CRP >1 mg/dL, micro-ESR >15mm/hr. Two positive = positive screen. Blood culture is confirmatory.",
    "Physiological jaundice: appears Day 2-3, peaks Day 3-5 (term) or Day 5-7 (preterm), TSB <15 mg/dL, never within 24 hrs. Pathological: <24 hrs, rapid rise, >15 mg/dL, direct >2 mg/dL.",
    "Phototherapy indications per Bhutani nomogram (hour-specific TSB charts). Exchange transfusion if TSB >25 mg/dL in term or >20 mg/dL in preterm with hemolysis.",
    "Ayurvedic Balagraha (Kashyapa) — 9 types of Graha described: Skanda, Putana, Andhaputana, Sheetaputana, Mukhamandika, Naigamesha, etc. Correlate with various neonatal infectious conditions.",
    "Essential newborn care per WHO: Warmth (warm chain), Breathing (clear airway), Cleanliness (hand hygiene, cord care), Feeding (breastfeeding within 1 hour). Acronym: WBCF.",
    "Birth dose immunization (National Immunization Schedule): BCG (0.05 mL intradermal, left deltoid), OPV-0 (2 drops oral), Hepatitis B (0.5 mL IM, anterolateral thigh) — all within 24 hrs.",
    "Newborn screening (heel prick at 48-72 hrs): screens for congenital hypothyroidism (TSH), PKU, G6PD deficiency, galactosemia, CAH, sickle cell disease. Early detection prevents irreversible damage.",
  ],

  mnemonics: [
    {
      title: "APGAR Score Components",
      acronym: "APGAR",
      expansions: [
        "Appearance — skin color (blue/pale, acrocyanosis, pink)",
        "Pulse — heart rate (absent, <100, >=100)",
        "Grimace — reflex irritability (none, grimace, cry)",
        "Activity — muscle tone (limp, some flexion, active)",
        "Respiration — breathing effort (absent, slow, good cry)",
      ],
    },
    {
      title: "Jatakarma Samskara Steps (Ayurvedic Newborn Protocol)",
      acronym: "PNEUMRS",
      expansions: [
        "Pranapratishthapana — establish breathing/respiration",
        "Nabhinalacchedana — cut and tie umbilical cord",
        "Exploration of oropharynx — Talu Shodhana (palate cleansing)",
        "Ulbaparimarjana — wipe and clean the newborn",
        "Madhu-Ghrita Pralehana — administer honey-ghee lick",
        "Raksha Karma — protective fumigation ritual",
        "Stanyapana — initiate breastfeeding from right breast",
      ],
    },
    {
      title: "Neonatal Sepsis Screen Criteria",
      acronym: "TLCBM",
      expansions: [
        "TLC — <5000 or >25000/mm3 (abnormal)",
        "Leukocyte I:T ratio — >0.2 (immature to total neutrophils)",
        "CRP — >1 mg/dL (acute phase reactant)",
        "Band cells — increased (left shift)",
        "Micro-ESR — >15 mm in 1st hour",
      ],
    },
    {
      title: "Causes of Pathological Jaundice in Newborn",
      acronym: "RHISC",
      expansions: [
        "Rh incompatibility — hemolytic disease of newborn",
        "Hepatitis (neonatal) — TORCH infections",
        "Infection — neonatal sepsis causing conjugated hyperbilirubinemia",
        "Spherocytosis / G6PD deficiency — RBC enzyme/membrane defects",
        "Crigler-Najjar / Gilbert — enzyme deficiency (UGT1A1)",
      ],
    },
  ],
};

export function getM12Content() {
  return m12Content;
}
