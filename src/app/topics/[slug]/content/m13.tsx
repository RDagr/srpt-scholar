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
// M13 — SHASTRAKARMA PRASUTI (Operative Obstetrics & Cesarean)
// ────────────────────────────────────────────────────────

const m13Content: TopicContent = {
  references: [
    "Sushruta Sutra Sthana Ch. 5 (Agropaharaniya)",
    "Sushruta Chikitsa Sthana Ch. 15 (Mudha Garbha)",
    "Sushruta Nidana Sthana Ch. 8",
    "Charaka Sharira Sthana Ch. 8",
    "Kashyapa Samhita — Khila Sthana (Jatisutriya)",
    "Ashtanga Hridaya Sharira Sthana Ch. 2",
    "Williams Obstetrics Ch. 29–31",
    "DC Dutta Ch. 34–36",
    "Munro Kerr's Operative Obstetrics",
  ],

  units: [
    {
      title: "Sushruta's Surgical Principles in Obstetrics",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers Sushruta's foundational surgical principles (Shastra Karma Vidhi) and their application to obstetric procedures. Sushruta is recognized as the Father of Surgery and his Sushruta Samhita provides the earliest systematic description of surgical instruments (Yantra and Shastra), operative techniques, pre-operative preparation (Purva Karma), the surgery itself (Pradhana Karma), and post-operative care (Pashchata Karma). His description of Mudha Garbha (obstructed labour) management includes both manual and instrumental delivery techniques."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Ashtavidha Shastra Karma — 8 types of surgical procedures described by Sushruta"),
          React.createElement("li", null, "Yantra (instruments) and Shastra (sharp instruments) classification"),
          React.createElement("li", null, "Shalya Tantra principles: Purva Karma, Pradhana Karma, Pashchata Karma"),
          React.createElement("li", null, "Application of Chedana (excision), Bhedana (incision), Lekhana (scraping) in obstetrics"),
          React.createElement("li", null, "Agni Karma and Kshara Karma — cauterization techniques for hemostasis")
        )
      ),
    },
    {
      title: "Mudha Garbha Chikitsa (Obstructed Labour Management)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Mudha Garbha (obstructed labour due to malpresentation or cephalopelvic disproportion) is described extensively in Sushruta Chikitsa Sthana Chapter 15. Sushruta classifies malpresentations and describes specific Shastrakarma (operative procedures) for each type of obstruction. This includes internal podalic version (Padagra Grahanam), craniotomy-like procedures for dead fetus extraction (Mrita Garbha Nirharan), and manual correction of malpresentations."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Mudha Garbha classification — Kila, Pratyakshila, Apara, Parigarbhika"),
          React.createElement("li", null, "Padagra Grahanam — grasping the feet (internal podalic version)"),
          React.createElement("li", null, "Mrita Garbha Nirharan — extraction of dead fetus using Yantra"),
          React.createElement("li", null, "Hasta Karma — manual techniques for malpresentation correction"),
          React.createElement("li", null, "Garbha Sankocha and Garbha Nishkramana procedures")
        )
      ),
    },
    {
      title: "Modern Cesarean Section & Instrumental Delivery",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers modern operative obstetrics including cesarean section (LSCS — Lower Segment Cesarean Section), types and indications, surgical technique, and complications. Also includes instrumental vaginal delivery — forceps application (outlet, low, mid-cavity) and vacuum extraction, along with episiotomy types (mediolateral, median) and their repair."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Cesarean section — LSCS (Pfannenstiel incision, lower uterine segment transverse incision)"),
          React.createElement("li", null, "Classical cesarean vs LSCS — indications and complications"),
          React.createElement("li", null, "Forceps delivery — types, prerequisites (ABCDEFGHIJ), technique"),
          React.createElement("li", null, "Vacuum extraction — indications, technique, complications"),
          React.createElement("li", null, "Episiotomy — types, indications, repair technique")
        )
      ),
    },
    {
      title: "Cesarean Complications & Post-operative Management",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers intraoperative and postoperative complications of cesarean delivery, post-cesarean wound care integrating Ayurvedic Vrana Chikitsa with modern protocols. It also covers VBAC (Vaginal Birth After Cesarean) counseling, scar integrity assessment, and Ayurvedic Sutika Paricharya (postnatal care) following operative delivery."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Intraoperative complications — hemorrhage, injury to bladder/bowel/ureter"),
          React.createElement("li", null, "Post-operative — wound infection, endometritis, DVT, ileus"),
          React.createElement("li", null, "Ayurvedic Vrana Chikitsa — wound management with Jatyadi Taila, Panchavalkala Kwatha"),
          React.createElement("li", null, "VBAC — criteria, success predictors, contraindications"),
          React.createElement("li", null, "Modified Sutika Paricharya for post-cesarean recovery")
        )
      ),
    },
  ],

  orientation: {
    why: "Shastrakarma Prasuti (Operative Obstetrics) is a core clinical competency in Prasuti Tantra. Sushruta's description of Mudha Garbha management represents the earliest documented obstetric surgery. Understanding both Sushruta's surgical principles and modern cesarean technique is essential for MD Ayurveda practitioners who frequently assist in or manage operative deliveries in integrative hospital settings. The rising cesarean rate globally makes this knowledge indispensable.",
    examWeight: "Very high-yield for university exams. Mudha Garbha Chikitsa from Sushruta is one of the most frequently asked long essay questions (20 marks). Cesarean section indications, types, and complications appear regularly as short notes (10 marks). Forceps prerequisites, episiotomy types, and VBAC criteria are common short answer and MCQ topics. Expect comparison of Sushruta's operative obstetrics with modern practice.",
  },

  definition: {
    ayurveda: `
      <p><strong>Shastrakarma Prasuti</strong> refers to operative procedures applied during childbirth (Prasava). Sushruta describes these under <strong>Mudha Garbha Chikitsa</strong> (Chikitsa Sthana Chapter 15).</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"मूढगर्भो नाम — यः गर्भो मार्गमुद्दिश्य प्रवृत्तः न निःसरति विविधैः कारणैः स मूढगर्भ इत्युच्यते"</p>
      <p class="mt-2"><strong>Mudha Garbha</strong> = a fetus that, despite being directed toward the birth canal, fails to be delivered due to various reasons (malpresentation, obstruction). Sushruta describes specific <strong>Shastra</strong> (surgical) and <strong>Hasta</strong> (manual) Karma for its management.</p>
    `,
    modern: `
      <p><strong>Operative obstetrics</strong> encompasses all surgical interventions performed to facilitate delivery when vaginal birth is not possible or is associated with unacceptable risks to mother or fetus.</p>
      <p class="mt-2"><strong>Cesarean Section (CS)</strong>: Delivery of the fetus through an incision in the abdominal wall (laparotomy) and uterine wall (hysterotomy). Currently accounts for 20-30% of deliveries globally.</p>
      <p class="mt-2"><strong>Instrumental delivery</strong> includes forceps and vacuum extraction — applied when the second stage is prolonged or there is fetal distress with the head at a suitable station.</p>
    `,
    classification: {
      title: "Classification of Operative Obstetric Procedures",
      headers: ["Category", "Ayurvedic Term", "Modern Procedure", "Key Indications"],
      rows: [
        [
          "<strong>Abdominal delivery</strong>",
          "Udara Chedana (abdominal incision) — implied in Mrita Garbha extraction",
          "Cesarean Section (LSCS / Classical)",
          "Fetal distress, CPD, malpresentation, placenta previa, failed induction, previous CS",
        ],
        [
          "<strong>Manual operative</strong>",
          "Hasta Karma — Padagra Grahanam (internal podalic version), manual rotation",
          "Internal podalic version, manual rotation of OP to OA",
          "Transverse lie of second twin, deep transverse arrest",
        ],
        [
          "<strong>Instrumental vaginal</strong>",
          "Yantra Karma — use of Sanku, Danta Shanku instruments (Sushruta)",
          "Forceps (outlet/low/mid), Vacuum extraction",
          "Prolonged second stage, maternal exhaustion, fetal distress with head at station +2 or below",
        ],
        [
          "<strong>Perineal surgery</strong>",
          "Yoni Chedana / Yoni Vrana — incision at birth canal (perineum)",
          "Episiotomy (mediolateral / median)",
          "Rigid perineum, instrumental delivery, premature infant (to reduce head compression)",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Sushruta Chikitsa Sthana 15/3-5",
      devanagari:
        "मूढगर्भो नाम — यो गर्भः प्रसवमार्गमुद्दिश्य प्रवृत्तः\nअवष्टब्धः सन् न निःसरति स मूढगर्भ इति |\nतस्य हस्तप्रसृतस्य पादप्रसृतस्य वा\nबुद्ध्वा विविधमार्गाणि ततो निर्हरणं कुर्यात् ||",
      transliteration:
        "mūḍhagarbho nāma — yo garbhaḥ prasavamārgamuddiśya pravṛttaḥ\navaṣṭabdhaḥ san na niḥsarati sa mūḍhagarbha iti |\ntasya hastaprasṛtasya pādaprasṛtasya vā\nbuddhvā vividhamārgāṇi tato nirharaṇaṃ kuryāt ||",
      meaning:
        "Mudha Garbha is defined as a fetus that, having been directed toward the birth canal (Prasava Marga), becomes obstructed (Avashtabdha) and fails to be delivered. Whether the hand is presenting (Hasta Prasrita) or the foot is presenting (Pada Prasrita), after understanding the various pathways of presentation, one should perform extraction (Nirharana).",
      clinicalNote:
        "This precisely describes obstructed labour due to malpresentation. Hasta Prasrita (hand prolapse) corresponds to transverse lie with arm prolapse. Pada Prasrita (foot presentation) corresponds to breech. Sushruta's emphasis on understanding the presentation before intervention parallels the modern principle of diagnosing presentation/position before any operative decision.",
    },
    {
      source: "Sushruta Chikitsa Sthana 15/8-10",
      devanagari:
        "पादाग्रग्रहणेन शनैः शनैः गर्भमाकृष्य निर्हरेत् |\nबन्धच्छेदनयन्त्रैश्च विविधैः कर्मभिर्बुधः |\nमृतं गर्भं शस्त्रेण छित्वा खण्डशो निर्हरेत् ||",
      transliteration:
        "pādāgragrahaṇena śanaiḥ śanaiḥ garbhamākṛṣya nirharete |\nbandhacchedanayantraiśca vividhaiḥ karmabhirbudhaḥ |\nmṛtaṃ garbhaṃ śastreṇa chitvā khaṇḍaśo nirharet ||",
      meaning:
        "By grasping the tip of the foot (Padagra Grahana), one should gently and gradually pull (Aakrishya) and deliver the fetus. Using various binding, cutting, and extracting instruments (Bandha-Chedana-Yantra), the skilled surgeon should operate. A dead fetus (Mrita Garbha) should be cut with a surgical instrument (Shastra) and extracted piece by piece (Khandasha).",
      clinicalNote:
        "Padagra Grahana is the earliest description of internal podalic version and breech extraction. Khandasha Nirharana (piecemeal extraction) of a dead fetus corresponds to modern destructive operations (craniotomy, decapitation, evisceration) — performed historically when CS was not available. This shows Sushruta's pragmatic approach to saving the mother's life.",
    },
    {
      source: "Sushruta Sutra Sthana 5/7-8 (Agropaharaniya Adhyaya)",
      devanagari:
        "अष्टौ शस्त्रकर्माणि — छेदनं भेदनं लेखनं वेधनं\nएषणं आहरणं विस्रावणं सीवनम् इति ||",
      transliteration:
        "aṣṭau śastrakarmāṇi — chedanaṃ bhedanaṃ lekhanaṃ vedhanaṃ\neṣaṇaṃ āharaṇaṃ visrāvaṇaṃ sīvanam iti ||",
      meaning:
        "The eight types of surgical operations are: Chedana (excision), Bhedana (incision), Lekhana (scraping/curettage), Vedhana (puncturing), Eshana (probing), Aharana (extraction), Visravana (draining), and Sivana (suturing).",
      clinicalNote:
        "These Ashtavidha Shastra Karma form the foundation of all modern surgery including operative obstetrics. In cesarean section: Bhedana (incision of abdomen and uterus), Aharana (extraction of baby and placenta), Visravana (drainage if needed), and Sivana (closure/suturing) are all directly applied. Sushruta's classification predates all modern surgical textbooks.",
    },
    {
      source: "Charaka Sharira Sthana 8/43",
      devanagari:
        "विषमस्थितो गर्भो यदि मार्गमवरुणद्धि |\nततः प्रज्ञावतो वैद्यस्य कर्तव्यम् —\nस्नेहस्वेदोपचारं कृत्वा शस्त्रकर्म विदध्यात् ||",
      transliteration:
        "viṣamasthito garbho yadi mārgamavaruṇaddhi |\ntataḥ prajñāvato vaidyasya kartavyam —\nsnehasvedopacāraṃ kṛtvā śastrakarma vidadhyāt ||",
      meaning:
        "If the fetus is in an abnormal position (Vishama Sthita) and is obstructing the birth passage (Marga Avarodha), then the wise physician should first administer oleation (Sneha) and fomentation (Sveda) therapies, and then perform surgical intervention (Shastra Karma).",
      clinicalNote:
        "Charaka emphasizes a conservative-first approach: Sneha-Sveda (lubrication and heat therapy) before operative intervention — paralleling modern practice of attempting conservative management (augmentation, position changes) before proceeding to cesarean. The principle of trial of labour before operative intervention is rooted in this classical teaching.",
    },
  ],

  dualCols: [
    {
      title: "Cesarean Section — Technique Comparison",
      ayurvedaTitle: "Sushruta's Udara Shastrakarma Principles",
      modernTitle: "Modern LSCS Technique (Joel-Cohen / Pfannenstiel)",
      ayurvedaContent: `
        <p><strong>Sushruta's surgical principles applied to abdominal delivery:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Purva Karma (Pre-operative):</strong> Sneha-Sveda (lubrication/fomentation), Mangala Karma (auspicious rituals), Rogi Pariksha (patient assessment), instrument preparation</li>
          <li><strong>Pradhana Karma (Surgery):</strong> Bhedana (incision) following anatomical layers — Twak (skin), Mamsa (muscle), Sira-Snayu (vessels-ligaments). Extraction (Aharana) of Garbha</li>
          <li><strong>Pashchata Karma (Post-operative):</strong> Sivana (suturing) with Tantu (thread), Vrana Ropana (wound healing) with Jatyadi Taila, Shatadhautu Ghrita. Bandhana (bandaging)</li>
          <li><strong>Vedana Shamana:</strong> Pain management with Dashmoola Kwatha, Bala Taila Abhyanga</li>
        </ol>
        <p class="mt-3">Sushruta describes 6 Yantra (blunt instruments) and 20 Shastra (sharp instruments) — many applicable to obstetric operative work.</p>
      `,
      modernContent: `
        <p><strong>LSCS technique (standard approach):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>Anesthesia:</strong> Spinal (most common) or epidural. GA for emergency/contraindication to regional</li>
          <li><strong>Skin incision:</strong> Pfannenstiel (transverse suprapubic, cosmetic) or Joel-Cohen (higher, straighter). Midline vertical for classical CS</li>
          <li><strong>Layer dissection:</strong> Skin, subcutaneous fat, rectus sheath, rectus muscles (separated), peritoneum (opened)</li>
          <li><strong>Uterine incision:</strong> Lower segment transverse (Kerr incision) — less bleeding, easier repair, lower rupture risk. Classical (vertical) only for preterm, transverse lie, anterior placenta previa</li>
          <li><strong>Delivery:</strong> Baby delivered by hand with fundal pressure. Cord clamped. Placenta removed</li>
          <li><strong>Closure:</strong> Uterus (single/double layer), peritoneum (optional), rectus sheath, subcutaneous, skin (staples/subcuticular)</li>
        </ol>
      `,
    },
    {
      title: "Instrumental Delivery & Obstructed Labour",
      ayurvedaTitle: "Mudha Garbha Hasta-Yantra Karma",
      modernTitle: "Modern Forceps & Vacuum",
      ayurvedaContent: `
        <p><strong>Sushruta's techniques for obstructed labour:</strong></p>
        <ul class="space-y-2">
          <li><strong>Hasta Karma (Manual):</strong> Smearing hand with ghee (Sneha), inserting into birth canal to correct malpresentation. Padagra Grahana (grasping feet for internal version). Shira Unnayan (head flexion)</li>
          <li><strong>Yantra Karma (Instrumental):</strong> Use of Sanku Yantra, Danta Shanku for traction. Koorcha Yantra (brush-like) for clearing birth canal. Mudgara Yantra for destructive operations</li>
          <li><strong>Mrita Garbha management:</strong> Khandasha Nirharana (piecemeal extraction using Shastra) — performed only when fetus is confirmed dead (Garbha Mrityu Lakshana: absence of movement, cold, foul smell)</li>
          <li><strong>Sneha-Sveda first:</strong> Always attempt lubrication and fomentation before operative intervention</li>
        </ul>
      `,
      modernContent: `
        <p><strong>Forceps delivery prerequisites (ABCDEFGHIJ):</strong></p>
        <ul class="space-y-1">
          <li><strong>A</strong> — Adequate analgesia + Attitude (fully flexed head)</li>
          <li><strong>B</strong> — Bladder empty (catheterize)</li>
          <li><strong>C</strong> — Cervix fully dilated</li>
          <li><strong>D</strong> — Determination of fetal position (OA preferred)</li>
          <li><strong>E</strong> — Engagement of head confirmed</li>
          <li><strong>F</strong> — Forceps selected (correct type for station/position)</li>
          <li><strong>G</strong> — Gentle traction with contractions</li>
          <li><strong>H</strong> — Head not more than 1/5 palpable abdominally</li>
          <li><strong>I</strong> — Intact membranes ruptured</li>
          <li><strong>J</strong> — Jaw, fontanelle orientation confirmed</li>
        </ul>
        <p class="mt-2"><strong>Vacuum extraction:</strong> Flexing cup applied to flexion point (3 cm anterior to posterior fontanelle). Max 3 pulls, 20 min total, pop-off limit 2-3 times.</p>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Indications for Cesarean Section — Maternal, Fetal & Combined",
      headers: ["Category", "Indication", "Urgency Classification", "Details"],
      rows: [
        [
          "<strong>Maternal — Absolute</strong>",
          "CPD (cephalopelvic disproportion), major placenta previa, previous classical CS scar, obstructive tumors",
          "Category 2-3 (Urgent/Scheduled)",
          "CPD confirmed by clinical pelvimetry or trial of labour. Major PP: placenta covers os completely. 2+ previous LSCS is relative indication",
        ],
        [
          "<strong>Maternal — Relative</strong>",
          "Previous CS (1 LSCS), poor obstetric history, medical conditions (severe pre-eclampsia, cardiac disease), maternal request",
          "Category 2-4 (Urgent to Elective)",
          "VBAC offered if single previous LSCS with no contraindications. Maternal request alone is debated but accepted in many centers",
        ],
        [
          "<strong>Fetal — Absolute</strong>",
          "Fetal distress (non-reassuring CTG), cord prolapse, transverse lie in labour",
          "Category 1 (Emergency — within 30 min)",
          "Fetal bradycardia <100 bpm for >3 min, late decelerations, cord prolapse = immediate CS. Category 1 = threat to life",
        ],
        [
          "<strong>Fetal — Relative</strong>",
          "Breech presentation, IUGR, macrosomia (>4 kg), multiple pregnancy",
          "Category 2-3 (Urgent/Scheduled)",
          "Term breech: elective CS per Term Breech Trial. Macrosomia >4.5 kg with GDM: consider CS",
        ],
        [
          "<strong>Combined</strong>",
          "Failed induction, failed trial of VBAC, non-progress of labour (arrest disorders)",
          "Category 2 (Urgent — within 75 min)",
          "Active phase arrest: no cervical change for 4+ hrs with adequate contractions. Second stage arrest: >3 hrs (primipara with epidural)",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Pre-operative Assessment for Cesarean Section",
      headers: ["Investigation", "Purpose", "Key Values", "Clinical Significance"],
      rows: [
        [
          "<strong>Complete Blood Count</strong>",
          "Hemoglobin level, platelet count",
          "Hb >10 g/dL ideal; Plt >100,000 for regional anesthesia",
          "Low Hb: arrange blood products. Thrombocytopenia may contraindicate spinal anesthesia",
        ],
        [
          "<strong>Blood Grouping & Cross-match</strong>",
          "Prepare for transfusion",
          "ABO + Rh typing; 2 units PRBC cross-matched",
          "Rh-negative mothers need Anti-D prophylaxis. Group & save minimum; cross-match for high-risk cases",
        ],
        [
          "<strong>Coagulation Profile</strong>",
          "Assess clotting function",
          "PT, aPTT, INR within normal limits",
          "Essential if pre-eclampsia, HELLP syndrome, placental abruption, or DIC suspected",
        ],
        [
          "<strong>USG — Fetal assessment</strong>",
          "Confirm presentation, placental site, EFW",
          "Presentation, AFI, EFW, placental location",
          "Rules out placenta previa/accreta, confirms non-cephalic presentations, estimates fetal weight",
        ],
        [
          "<strong>CTG (Cardiotocography)</strong>",
          "Assess fetal wellbeing",
          "Reactive: 2 accelerations in 20 min; baseline 110-160",
          "Non-reassuring CTG may escalate to emergency CS. Category 1 if pathological trace",
        ],
        [
          "<strong>Anesthesia Assessment</strong>",
          "Airway, spinal, fitness for surgery",
          "Mallampati grade, spinal abnormalities, BMI",
          "Spinal anesthesia preferred. GA backup for failed spinal, coagulopathy, or patient refusal of regional",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Clinical Decision Tree — Operative Delivery Algorithm",
    diagramSvg: `
      <svg viewBox="0 0 800 720" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
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

        <!-- Step 1 -->
        <rect class="box" x="240" y="10" width="320" height="45" />
        <text class="label-bold" x="400" y="28">Labour Not Progressing / Fetal Distress</text>
        <text class="label" x="400" y="48">Assess: cervical dilatation, station, CTG</text>

        <line class="arrow" x1="320" y1="55" x2="180" y2="90" />
        <text class="label" x="230" y="75">First Stage</text>
        <line class="arrow" x1="480" y1="55" x2="620" y2="90" />
        <text class="label" x="570" y="75">Second Stage</text>

        <!-- First stage branch -->
        <rect class="box-blue" x="60" y="90" width="240" height="50" />
        <text class="label-bold" x="180" y="110">First Stage Assessment</text>
        <text class="label" x="180" y="130">Active phase arrest? CTG status?</text>

        <line class="arrow-no" x1="100" y1="140" x2="100" y2="180" />
        <text class="no-label" x="70" y="165">Arrest</text>

        <line class="arrow-yes" x1="250" y1="140" x2="300" y2="180" />
        <text class="yes-label" x="290" y="165">Progressing</text>

        <rect class="box-green" x="230" y="180" width="160" height="35" />
        <text class="label-bold" x="310" y="202">Continue labour</text>

        <!-- Arrest -->
        <rect class="box" x="20" y="180" width="180" height="50" />
        <text class="label-bold" x="110" y="198">Failed Trial of Labour</text>
        <text class="label" x="110" y="218">or Non-reassuring CTG</text>

        <line class="arrow-no" x1="110" y1="230" x2="110" y2="265" />

        <rect class="box-red" x="20" y="265" width="180" height="45" />
        <text class="label-bold" x="110" y="283">CESAREAN SECTION</text>
        <text class="label" x="110" y="300">Category 1 or 2</text>

        <!-- Second stage branch -->
        <rect class="box-blue" x="500" y="90" width="260" height="50" />
        <text class="label-bold" x="630" y="110">Second Stage Assessment</text>
        <text class="label" x="630" y="130">Station? Position? Fetal condition?</text>

        <line class="arrow" x1="560" y1="140" x2="460" y2="180" />
        <text class="label" x="490" y="165">Head at spines or above</text>
        <line class="arrow" x1="700" y1="140" x2="700" y2="180" />
        <text class="label" x="740" y="165">Head below spines</text>

        <!-- Head high -->
        <rect class="box-red" x="360" y="180" width="200" height="45" />
        <text class="label-bold" x="460" y="198">CESAREAN SECTION</text>
        <text class="label" x="460" y="215">Head too high for instrumental</text>

        <!-- Head low -->
        <rect class="box" x="600" y="180" width="190" height="50" />
        <text class="label-bold" x="695" y="198">Instrumental Delivery?</text>
        <text class="label" x="695" y="218">Check prerequisites</text>

        <line class="arrow-yes" x1="640" y1="230" x2="580" y2="270" />
        <text class="yes-label" x="595" y="255">Prerequisites met</text>

        <line class="arrow-no" x1="750" y1="230" x2="750" y2="270" />
        <text class="no-label" x="780" y="255">Not met</text>

        <rect class="box-green" x="480" y="270" width="200" height="45" />
        <text class="label-bold" x="580" y="288">Forceps or Vacuum</text>
        <text class="label" x="580" y="305">Trial of instrumental delivery</text>

        <rect class="box-red" x="660" y="270" width="130" height="40" />
        <text class="label-bold" x="725" y="295">CS (Cat 1-2)</text>

        <line class="arrow" x1="580" y1="315" x2="580" y2="350" />

        <rect class="box" x="480" y="350" width="200" height="35" />
        <text class="label-bold" x="580" y="372">Successful delivery?</text>

        <line class="arrow-no" x1="580" y1="385" x2="580" y2="415" />
        <text class="no-label" x="610" y="405">Failed</text>

        <rect class="box-red" x="490" y="415" width="180" height="35" />
        <text class="label-bold" x="580" y="437">Proceed to CS</text>

        <!-- CS Classification -->
        <rect class="box-blue" x="120" y="370" width="280" height="80" />
        <text class="label-bold" x="260" y="390">CS Urgency Classification (Lucas)</text>
        <text class="label" x="260" y="408">Cat 1: Immediate threat to life (&lt;30 min)</text>
        <text class="label" x="260" y="423">Cat 2: Maternal/fetal compromise (&lt;75 min)</text>
        <text class="label" x="260" y="438">Cat 3: No compromise, early delivery needed</text>

        <!-- Ayurvedic box -->
        <rect class="box" x="40" y="490" width="720" height="85" />
        <text class="label-bold" x="400" y="510">Sushruta's Approach: Sneha-Sveda First, Shastra Karma Last</text>
        <text class="label" x="400" y="530">1. Attempt Sneha (oleation) and Sveda (fomentation) to facilitate natural delivery</text>
        <text class="label" x="400" y="548">2. Hasta Karma (manual correction) — Padagra Grahana for malpresentation</text>
        <text class="label" x="400" y="566">3. Yantra-Shastra Karma (instrumental/surgical) only when conservative measures fail</text>

        <!-- Post-op -->
        <rect class="box-green" x="120" y="600" width="560" height="70" />
        <text class="label-bold" x="400" y="620">Post-Operative: Integrated Management</text>
        <text class="label" x="400" y="640">Modern: antibiotics, analgesics, DVT prophylaxis, early ambulation, wound care</text>
        <text class="label" x="400" y="658">Ayurveda: Sutika Paricharya modification, Vrana Ropana (Jatyadi Taila), Dashmoola Kwatha</text>
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for operative obstetrics:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Sushruta's Mudha Garbha chapter is the world's first written description of operative obstetrics — includes internal version, breech extraction, and destructive operations</li>
        <li>LSCS (Lower Segment Cesarean Section) accounts for >95% of all cesareans today — lower rupture risk (0.2-0.7%) compared to classical CS (4-9%)</li>
        <li>Category 1 (crash) CS: decision-to-delivery interval must be under 30 minutes — fetal distress with bradycardia, cord prolapse, uterine rupture</li>
        <li>Forceps prerequisites (ABCDEFGHIJ): All must be met before application. Failed forceps/vacuum = immediate CS</li>
        <li>Episiotomy is no longer routine — indicated only for instrumental delivery, shoulder dystocia, or impending perineal tear threatening the anal sphincter</li>
        <li>VBAC success rate: 60-80% with single previous LSCS, adequate pelvis, spontaneous labour. Contraindicated in classical CS, previous rupture, or 3+ CS scars</li>
        <li>Post-CS Ayurvedic care: modified Sutika Paricharya — Dashmoola Kwatha for Vata Shamana, Jatyadi Taila for wound healing, graded Abhyanga after wound healing</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Sushruta's Operative Obstetrics & Modern Cesarean Practice</h3>
    <div class="space-y-4">
      <p>Sushruta's description of Mudha Garbha management represents the historical foundation of operative obstetrics. His systematic approach of conservative management first, manual techniques second, and surgical intervention as a last resort remains the guiding principle of modern obstetric decision-making.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Ashtavidha Shastra Karma — comprehensive surgical classification still relevant today</li>
            <li>Sneha-Sveda prior to surgery — modern counterpart: adequate analgesia and relaxation</li>
            <li>Vrana Chikitsa (wound management) — Jatyadi Taila, Panchavalkala for post-surgical healing</li>
            <li>Modified Sutika Paricharya for post-cesarean recovery and lactation support</li>
            <li>Emphasis on conservative approach before operative intervention</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Safe anesthesia (spinal/epidural) allowing painless cesarean delivery</li>
            <li>LSCS technique with low morbidity and rapid recovery</li>
            <li>CTG monitoring for timely decision-making in fetal distress</li>
            <li>Blood banking and antibiotic prophylaxis reducing maternal mortality</li>
            <li>VBAC protocols allowing vaginal delivery after previous cesarean</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated Operative Obstetrics Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Step 1:</strong> Trial of labour with supportive Ayurvedic measures (Sneha-Sveda, Basti) alongside standard monitoring</li>
          <li><strong>Step 2:</strong> Continuous CTG + clinical assessment. Apply Sushruta's principle: Sneha-Sveda first, then Hasta Karma</li>
          <li><strong>Step 3:</strong> If operative delivery needed: modern CS technique with Ayurvedic post-operative wound care</li>
          <li><strong>Step 4:</strong> Post-CS recovery: standard antibiotics + modified Sutika Paricharya (Dashmoola Kwatha, graded diet, Vrana Ropana)</li>
          <li><strong>Step 5:</strong> VBAC counseling for future pregnancies incorporating both evidence-based criteria and Ayurvedic assessment of Bala (strength)</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Mudha Garbha (Sushruta Chi. 15): fetus obstructed in birth canal despite entering Prasava Marga. Classified as Hasta Prasrita (hand), Pada Prasrita (foot), Parshva (lateral), and others based on presenting part.",
    "Ashtavidha Shastra Karma (Sushruta Su. 5): Chedana, Bhedana, Lekhana, Vedhana, Eshana, Aharana, Visravana, Sivana — foundation of all surgical procedures including operative obstetrics.",
    "Padagra Grahana (Sushruta) = earliest description of internal podalic version. Grasping feet of fetus and converting to breech for delivery. Modern: rarely performed, mainly for second twin.",
    "Mrita Garbha Nirharana: dead fetus extraction by Khandasha (piecemeal) using Shastra — corresponds to destructive operations (craniotomy, decapitation). Now replaced by cesarean section.",
    "Sushruta's pre-operative protocol: Sneha-Sveda (lubrication-fomentation) before any Shastra Karma — parallels trial of conservative management before cesarean section.",
    "LSCS (Lower Segment Cesarean Section): Pfannenstiel/Joel-Cohen skin incision, lower segment transverse uterine incision (Kerr). Advantages over classical CS: less bleeding, easier repair, lower rupture risk in future pregnancy.",
    "Classical CS: vertical upper segment incision. Indications: extreme prematurity, transverse lie with back-down, lower segment fibroids, anterior placenta previa in lower segment. Rupture risk 4-9%.",
    "CS urgency classification (Lucas): Cat 1 (<30 min, life-threatening), Cat 2 (<75 min, compromise), Cat 3 (early delivery needed, no compromise), Cat 4 (elective, at time to suit patient and team).",
    "Forceps prerequisites mnemonic ABCDEFGHIJ: Analgesia, Bladder empty, Cervix fully dilated, Determination of position, Engagement confirmed, Forceps correct, Gentle traction, Head <=1/5 above brim, Intact membranes ruptured, Jaw/fontanelle oriented.",
    "Vacuum extraction: Flexing cup placed 3 cm anterior to posterior fontanelle (flexion point). Max: 3 pulls, 20 min total, 2-3 pop-offs. Contraindicated in preterm <34 wk, face presentation.",
    "Episiotomy types: Mediolateral (most common in India, 45 degrees from midline) — less risk of 3rd/4th degree tear. Median (midline) — easier repair, more comfortable, but higher risk of extension to anal sphincter.",
    "VBAC (Vaginal Birth After Cesarean): success rate 60-80%. Requirements: single previous LSCS, adequate pelvis, spontaneous labour preferred, continuous CTG, facilities for emergency CS. Contraindicated in previous classical CS or uterine rupture.",
    "Post-CS complications: immediate (hemorrhage, bladder injury, anesthetic complications), early (wound infection, endometritis, UTI, DVT/PE), late (adhesions, incisional hernia, scar ectopic, abnormal placentation).",
    "Ayurvedic post-CS care: Vrana Ropana with Jatyadi Taila application, Dashmoola Kwatha for Vatanulomana, Panchavalkala Kwatha Prakshalana for wound cleaning, modified Sutika Paricharya diet protocol.",
    "Abnormal placentation risk increases with each cesarean: placenta accreta spectrum (accreta, increta, percreta). Risk: 0.3% with 1 CS, 0.6% with 2, 2.4% with 3, up to 6.7% with 5+ CS scars.",
  ],

  mnemonics: [
    {
      title: "Forceps Prerequisites",
      acronym: "ABCDEFGHIJ",
      expansions: [
        "Analgesia adequate + Attitude (flexed head)",
        "Bladder empty (catheterize)",
        "Cervix fully dilated",
        "Determination of fetal position",
        "Engagement confirmed (0/5 or 1/5 per abdomen)",
        "Forceps correct type selected",
        "Gentle traction with contractions only",
        "Head not >1/5 palpable per abdomen",
        "Intact membranes ruptured (ARM if needed)",
        "Jaw and fontanelle orientation confirmed",
      ],
    },
    {
      title: "Cesarean Section Indications (Common)",
      acronym: "FORCEPS",
      expansions: [
        "Fetal distress (non-reassuring CTG)",
        "Obstructed labour / CPD",
        "Repeat cesarean (previous CS scar)",
        "Cord prolapse",
        "Eclampsia / severe pre-eclampsia (unresponsive)",
        "Placenta previa / abruption",
        "Shoulder dystocia (anticipated) / transverse lie",
      ],
    },
    {
      title: "Ashtavidha Shastra Karma (Sushruta's 8 Surgical Procedures)",
      acronym: "CBLVEAES",
      expansions: [
        "Chedana — excision",
        "Bhedana — incision",
        "Lekhana — scraping / curettage",
        "Vedhana — puncturing / aspiration",
        "Eshana — probing / exploration",
        "Aharana — extraction / removal",
        "E(Vi)sravana — drainage",
        "Sivana — suturing / stitching",
      ],
    },
    {
      title: "Post-Cesarean Complications (Early)",
      acronym: "WIPE",
      expansions: [
        "Wound infection / dehiscence",
        "Ileus (paralytic) / endometritis",
        "Pulmonary embolism / DVT",
        "Excessive bleeding (PPH) / UTI",
      ],
    },
  ],
};

export function getM13Content() {
  return m13Content;
}
