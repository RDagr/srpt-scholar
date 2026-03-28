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
// M4 — PRASAVA VIGYANA (Normal Labour & Delivery)
// ────────────────────────────────────────────────────────

const m4Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 8 (Jatisutriya Sharira)",
    "Sushruta Sharira Sthana Ch. 10 (Garbhini Vyakarana)",
    "Ashtanga Hridaya Sharira Ch. 2",
    "Kashyapa Samhita — Khila Sthana",
    "Sushruta Nidana Sthana Ch. 8",
    "Williams Obstetrics Ch. 21-27 (Normal Labour & Delivery)",
    "DC Dutta Ch. 12-15 (Normal Labour)",
    "Mudaliar & Menon — Obstetrics",
  ],

  units: [
    {
      title: "Prasava Kala & Prasava Hetu (Onset of Labour)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the causes and timing of onset of labour as described in classical Ayurvedic texts and modern obstetrics. Sushruta describes the role of Apana Vayu in initiating Prasava (delivery), while modern understanding focuses on hormonal cascades involving oxytocin, prostaglandins, and fetal cortisol."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Prasava Kala — timing of normal delivery (9th-10th month per Ayurveda)"),
          React.createElement("li", null, "• Role of Apana Vayu in initiating and propelling delivery"),
          React.createElement("li", null, "• Prasava Hetu (causes): Apana Vayu Prerana, Garbha Paripurnata"),
          React.createElement("li", null, "• Modern: Hormonal cascade — CRH, cortisol, estrogen, oxytocin, prostaglandins"),
          React.createElement("li", null, "• Signs of labour onset: Premonitory signs, True vs False labour")
        )
      ),
    },
    {
      title: "Stages of Labour (Prasava Prakriya)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Detailed description of the stages and mechanism of normal labour from both Ayurvedic and modern perspectives. Charaka and Sushruta describe Prasava as a process governed by Apana Vayu through specific phases, while modern obstetrics divides it into four well-defined stages."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Ayurvedic Prasava Prakriya — role of Apana Vayu in each phase"),
          React.createElement("li", null, "• Modern: First stage (cervical dilatation), Second stage (expulsive), Third stage (placental), Fourth stage (observation)"),
          React.createElement("li", null, "• Mechanism of labour — cardinal movements"),
          React.createElement("li", null, "• Active management of third stage (AMTSL)"),
          React.createElement("li", null, "• Partograph — monitoring tool for labour progress")
        )
      ),
    },
    {
      title: "Mechanism of Normal Labour",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "The cardinal movements of labour — the series of passive movements the fetus undergoes during passage through the birth canal. This unit covers the biomechanics of vertex presentation delivery, relating Ayurvedic concepts of Garbha Nishkramana with modern understanding."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Seven cardinal movements: Engagement, Descent, Flexion, Internal Rotation, Extension, External Rotation (Restitution), Expulsion"),
          React.createElement("li", null, "• Powers, Passages, and Passenger — the 3 P's of labour"),
          React.createElement("li", null, "• Pelvic anatomy: Inlet, cavity, outlet — diameters and landmarks"),
          React.createElement("li", null, "• Ayurvedic: Garbha Nishkramana Marga (birth canal), Yoni Mardava"),
          React.createElement("li", null, "• Moulding and caput formation")
        )
      ),
    },
    {
      title: "Sutika Paricharya Initiation & Immediate Postnatal",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Immediate post-delivery care — transition from Prasava to Sutika Kala. This unit covers the fourth stage of labour, immediate newborn care, and the initiation of Sutika Paricharya (postnatal regimen) as described by Charaka and Kashyapa."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Fourth stage of labour: 1-hour observation period"),
          React.createElement("li", null, "• Nabhi Nala Chhedana (cord clamping) — Ayurvedic and modern timing"),
          React.createElement("li", null, "• Immediate newborn care: ABCDE (Airway, Breathing, Cord, Drying, Early breastfeeding)"),
          React.createElement("li", null, "• Initiation of Sutika Paricharya — Panchakola Siddha Peya"),
          React.createElement("li", null, "• Active management of third stage (Oxytocin, CCT, Uterine massage)")
        )
      ),
    },
  ],

  orientation: {
    why: "Prasava Vigyana (Science of Labour and Delivery) is the central clinical topic in Prasuti Tantra. Understanding normal labour is essential before studying abnormal labour, operative obstetrics, and complications. The Ayurvedic concept of Apana Vayu as the driving force of delivery provides a unique physiological framework that complements the modern understanding of uterine contractions and hormonal cascades. This topic is the foundation for clinical practice in the labour room.",
    examWeight:
      "Extremely high-yield. Long essay questions on mechanism of normal labour, stages of labour, and partograph are almost guaranteed. Short notes on Prasava Prakriya, cardinal movements, AMTSL, and comparison of Ayurvedic with modern labour stages appear regularly. Expect practical questions on partograph interpretation and management of each stage.",
  },

  definition: {
    ayurveda: `
      <p><strong>Prasava</strong> (labour/delivery) is defined as the process by which the mature Garbha is expelled from the Kukshi (uterus) through the Yoni (birth canal) by the force of <strong>Apana Vayu</strong>.</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"प्रसूतिकालो नवमे दशमे वा मासि भवति | अपानवायुप्रेरितो गर्भः योनिमार्गेण निष्क्रामति ||"</p>
      <p class="mt-2">Sushruta describes that when the Garbha attains Paripurnata (full maturity) in the 9th or 10th month, <strong>Apana Vayu</strong> becomes activated and propels the fetus downward through the Yoni Marga (birth passage). The process requires: (1) Adequate Apana Vayu force, (2) Mature Garbha, (3) Patent Yoni Marga, and (4) Proper Garbha presentation (Avakshirasata — head first).</p>
    `,
    modern: `
      <p><strong>Normal Labour (Eutocia)</strong> is defined as the spontaneous onset of labour at term (37-42 weeks) in a singleton pregnancy with cephalic presentation, progressing without complications to delivery of the baby and placenta with no undue risk to mother or fetus.</p>
      <p class="mt-2"><strong>Onset of labour:</strong> True labour is characterized by regular, painful uterine contractions of increasing frequency and intensity, accompanied by progressive cervical effacement and dilatation, and descent of the presenting part.</p>
      <p class="mt-2"><strong>Duration (Friedman's criteria):</strong> First stage — Primigravida: 12-16 hrs (Latent: 8 hrs, Active: 6 hrs); Multigravida: 6-8 hrs. Second stage — Primi: 1-2 hrs; Multi: 0.5-1 hr. Third stage — 15-30 min.</p>
    `,
    classification: {
      title: "Stages of Labour — Ayurvedic & Modern Correlation",
      headers: ["Stage", "Ayurvedic Concept", "Modern Definition", "Duration (Primi/Multi)"],
      rows: [
        [
          "<strong>First Stage</strong>",
          "Prajayini Yoni Vivritavastha — Apana Vayu opens the Yoni Marga. Prasooti Vedana (labour pain) begins",
          "Onset of true labour to full cervical dilatation (10 cm). Latent phase (0-4 cm) + Active phase (4-10 cm)",
          "Primi: 12-16 hrs. Multi: 6-8 hrs. Active: 1 cm/hr (Primi), 1.5 cm/hr (Multi)",
        ],
        [
          "<strong>Second Stage</strong>",
          "Garbha Nishkramana — Apana Vayu expels the Garbha through the Yoni. Prasooti Prayatna (bearing down effort)",
          "Full dilatation to delivery of the baby. Passive descent + Active pushing",
          "Primi: up to 2 hrs. Multi: up to 1 hr. (Extended with epidural)",
        ],
        [
          "<strong>Third Stage</strong>",
          "Aparaa Nishkramana — expulsion of the Aparaa (placenta). Nabhi Nala separation",
          "Delivery of baby to delivery of placenta and membranes. Active management (AMTSL) preferred",
          "5-15 min (active). Up to 30 min (physiological). >30 min = retained placenta",
        ],
        [
          "<strong>Fourth Stage</strong>",
          "Sutika Kala Arambha — beginning of Sutika period. Immediate postnatal stabilization",
          "First 1-2 hours after placental delivery. Observation for PPH, vitals, bonding, breastfeeding",
          "1-2 hours. Monitor: uterine tone, bleeding, BP, pulse every 15 min",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Sushruta Sharira Sthana 10/3-4",
      devanagari:
        "नवमे दशमे वा मासि परिपूर्णगर्भा प्रसवार्थिनी भवति |\nअपानवायुना प्रेरितः गर्भः अधोमुखः अवपतति |\nयोनिमार्गेण बहिर्निर्गच्छति ||",
      transliteration:
        "navame daśame vā māsi paripūrṇagarbhā prasavārthinī bhavati |\napānavāyunā preritaḥ garbhaḥ adhomukhaḥ avapatati |\nyonimārgeṇa bahirnirgacchati ||",
      meaning:
        "In the ninth or tenth month, when the Garbha is fully mature (Paripurna), the woman desires delivery (Prasavarthini). The Garbha, propelled by Apana Vayu, turns head-downward (Adhomukha) and descends. It exits through the Yoni Marga (birth canal) to the exterior.",
      clinicalNote:
        "This description captures the essential elements of normal labour onset: (1) Term gestation (9-10 months), (2) Fetal maturity, (3) Cephalic presentation (Adhomukha = head-down), and (4) Descent through the birth canal driven by expulsive forces. The role of Apana Vayu correlates with the combined effect of uterine contractions (myometrial activity) and maternal bearing-down effort.",
    },
    {
      source: "Charaka Sharira Sthana 8/33-34",
      devanagari:
        "परिपक्वे गर्भे सम्यक् प्रवृत्तेऽपानवायौ |\nसुखं प्रसवं कुरुते स्त्री योषित् सुविशालयोनिमार्गा |\nसूतिकागारं प्रविश्य सूतिकर्माणि कारयेत् ||",
      transliteration:
        "paripakve garbhe samyak pravṛtte'pānavāyau |\nsukhaṃ prasavaṃ kurute strī yoṣit suviśālayonimārgā |\nsūtikāgāraṃ praviśya sūtikarmāṇi kārayet ||",
      meaning:
        "When the Garbha is fully mature and Apana Vayu is properly activated, the woman with a well-dilated Yoni Marga (birth canal) delivers smoothly (Sukha Prasava). She should enter the Sutikagara (labour/delivery room) and the Sutika procedures should be performed.",
      clinicalNote:
        "Charaka identifies the prerequisites for normal delivery: (1) Mature fetus (Paripakva Garbha — term), (2) Proper expulsive forces (Samyak Apana Vayu — adequate contractions), (3) Adequate birth canal (Suvishala Yoni Marga — adequate pelvis). These correspond to the modern '3 P's': Power (contractions), Passenger (fetus), and Passage (pelvis). The concept of Sutikagara (dedicated delivery room) shows ancient hospital planning.",
    },
    {
      source: "Sushruta Sharira Sthana 10/5",
      devanagari:
        "सूतिकागारं सुगन्धं सुसंस्कृतं प्रविश्य |\nचतस्रः प्रजावती वृद्धाः धात्र्यः परिचारयन्ति |\nसर्वाः सूतिकर्मनिपुणाः कुशलहस्ताः स्युः ||",
      transliteration:
        "sūtikāgāraṃ sugandhaṃ susaṃskṛtaṃ praviśya |\ncatasraḥ prajāvatī vṛddhāḥ dhātryaḥ paricārayanti |\nsarvāḥ sūtikarmaniipuṇāḥ kuśalahastāḥ syuḥ ||",
      meaning:
        "The Sutikagara (delivery room) should be fragrant and well-prepared. Four experienced elderly women who have themselves borne children (Prajavati Vriddha Dhatrya) should attend to the labouring woman. All attendants should be skilled in delivery procedures (Sutikarmaniipuna) and dexterous (Kushala Hasta).",
      clinicalNote:
        "Sushruta mandates trained birth attendants — this ancient concept of skilled birth attendance is exactly what WHO promotes today. The requirement of 4 attendants correlates with modern delivery team: obstetrician/midwife, nurse, pediatrician/neonatal team. The emphasis on a clean, pleasant environment aligns with modern labour room standards. Prajavati (experienced mothers) as attendants shows the value placed on experiential knowledge.",
    },
    {
      source: "Charaka Sharira Sthana 8/35",
      devanagari:
        "अथ नाभिनालं छेदयेत् अष्टाङ्गुलप्रमाणं गर्भनाभ्याम् |\nग्रन्थिना बध्नीयात् सूत्रेण | ततः अपरां प्रतीक्षेत् ||",
      transliteration:
        "atha nābhinālaṃ cchedayet aṣṭāṅgulapramāṇaṃ garbhanābhyām |\ngranthina badhnīyāt sūtreṇa | tataḥ aparāṃ pratīkṣeta ||",
      meaning:
        "Then the umbilical cord (Nabhi Nala) should be cut at a distance of eight Angula (approximately 12-15 cm) from the baby's navel. It should be tied with a thread (Sutra) in a knot (Granthi). Then one should wait for the Aparaa (placenta) to be delivered.",
      clinicalNote:
        "Charaka describes cord clamping and cutting technique with remarkable precision. The 8-Angula distance (approximately 15 cm) gives adequate cord length for the stump. Modern practice now recommends delayed cord clamping (1-3 minutes after birth) to allow placental transfusion, improving neonatal iron stores and Hb levels. The instruction to wait for the placenta parallels the third stage management principle.",
    },
    {
      source: "Ashtanga Hridaya Sharira 2/1",
      devanagari:
        "प्रसूतायाः प्रथमं स्नपयित्वा शुचिवस्त्रेण वेष्टयेत् |\nमातरं च पञ्चकोलसिद्धेन पेयया भोजयेत् ||",
      transliteration:
        "prasūtāyāḥ prathamaṃ snapayitvā śucivastreṇa veṣṭayet |\nmātaraṃ ca pañcakolasiddhena peyayā bhojayet ||",
      meaning:
        "After delivery, the newborn should first be bathed and wrapped in clean cloth. The mother should be fed with Peya (rice water/gruel) prepared with Panchakola (a group of five digestive herbs: Pippali, Pippalimula, Chavya, Chitraka, Nagara/Shunthi).",
      clinicalNote:
        "The immediate postnatal protocol shows: (1) Newborn care — cleaning and wrapping (modern: drying, warming, wrapping), (2) Maternal care — early feeding with easily digestible food containing digestive herbs. Panchakola Siddha Peya re-kindles the Jatharagni (digestive fire) which is weakened after delivery. Modern: Early feeding within 2 hours, light easily digestible diet, and early breastfeeding initiation.",
    },
  ],

  dualCols: [
    {
      title: "Labour Process — Ayurvedic vs Modern Understanding",
      ayurvedaTitle: "Prasava Prakriya (Charaka & Sushruta)",
      modernTitle: "Modern Labour Physiology",
      ayurvedaContent: `
        <p><strong>Driving Force:</strong> Apana Vayu — the downward-moving division of Vata responsible for all expulsive functions (defecation, micturition, menstruation, delivery, ejaculation)</p>
        <p class="mt-2"><strong>Process:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Prasava Purva Lakshana:</strong> Premonitory signs — Yoni Srava (mucous discharge/show), Udara Shoola (abdominal pain), Kati Shoola (backache), Adho Gata Garbha (descent of fetus)</li>
          <li><strong>Yoni Vivritavastha:</strong> Opening/dilatation of Yoni Marga by Apana Vayu → correlates with cervical dilatation</li>
          <li><strong>Garbha Nishkramana:</strong> Expulsion of Garbha driven by Apana Vayu Prayatna (bearing-down effort) → second stage</li>
          <li><strong>Aparaa Nishkramana:</strong> Placenta delivery → third stage</li>
          <li><strong>Sutika Kala Arambha:</strong> Beginning of postnatal period</li>
        </ol>
        <p class="mt-2"><strong>Concept of Sukha Prasava:</strong> Normal delivery = good Apana Vayu + mature Garbha + adequate Yoni Marga</p>
      `,
      modernContent: `
        <p><strong>Driving Force:</strong> Uterine contractions (myometrial activity) + Maternal expulsive effort (bearing down)</p>
        <p class="mt-2"><strong>Hormonal cascade for labour onset:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Fetal HPA axis activation:</strong> Fetal cortisol → placental CRH → estrogen surge → oxytocin receptor upregulation</li>
          <li><strong>Progesterone withdrawal:</strong> Functional progesterone block removal → uterus becomes excitable</li>
          <li><strong>Prostaglandin production:</strong> PGE2, PGF2α → cervical ripening + myometrial contraction</li>
          <li><strong>Oxytocin:</strong> Ferguson reflex (cervical stretch → posterior pituitary → oxytocin release) → augments contractions</li>
          <li><strong>Gap junctions:</strong> Connexin-43 increases in myometrium → coordinated contractions</li>
        </ol>
        <p class="mt-2"><strong>3 P's of Labour:</strong> Power (contractions), Passage (pelvis + soft tissues), Passenger (fetus — size, position, presentation)</p>
      `,
    },
    {
      title: "Cardinal Movements of Labour",
      ayurvedaTitle: "Garbha Nishkramana Prakriya",
      modernTitle: "Seven Cardinal Movements",
      ayurvedaContent: `
        <p><strong>Ayurvedic Description of Fetal Passage:</strong></p>
        <ul class="space-y-2 mt-2">
          <li><strong>Adhomukha Garbha:</strong> Head-first (cephalic) presentation — described as the natural/normal position for delivery</li>
          <li><strong>Apana Vayu Prerana:</strong> The driving force pushes the fetus downward through the Yoni Marga</li>
          <li><strong>Yoni Marga characteristics:</strong> Described as having a curved passage that the Garbha must navigate</li>
          <li><strong>Garbha Nishkramana:</strong> The fetus emerges head-first through the Yoni Dvara (vaginal opening)</li>
          <li><strong>Aparaa follows:</strong> Placenta is expelled separately after the baby</li>
        </ul>
        <p class="mt-3"><em>Note: Classical texts do not describe the cardinal movements in the detailed manner of modern obstetrics, but the concept of the fetus navigating a curved passage is implicit in the descriptions of Adhomukha (head-down) presentation and gradual Nishkramana (emergence).</em></p>
      `,
      modernContent: `
        <p><strong>Seven Cardinal Movements (Vertex Presentation):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Engagement:</strong> BPD passes through pelvic inlet. Occurs weeks before labour in primi, during labour in multi</li>
          <li><strong>Descent:</strong> Continuous throughout labour. Driven by contractions, maternal effort, gravity. Measured by station (−3 to +3)</li>
          <li><strong>Flexion:</strong> Chin touches chest → suboccipitobregmatic diameter (9.5 cm) presents. Smallest presenting diameter</li>
          <li><strong>Internal Rotation:</strong> Occiput rotates from transverse to OA (anterior). Through 90° (or 45°). At pelvic floor level</li>
          <li><strong>Extension:</strong> Head extends under symphysis pubis. Occiput, bregma, forehead, face, chin delivered sequentially. Crowning occurs</li>
          <li><strong>External Rotation (Restitution):</strong> Head rotates 90° to realign with shoulders. Shoulders in AP diameter of outlet</li>
          <li><strong>Expulsion:</strong> Anterior shoulder delivers under symphysis → posterior shoulder over perineum → body follows quickly</li>
        </ol>
      `,
    },
    {
      title: "Management of Third Stage",
      ayurvedaTitle: "Aparaa Nishkramana Management",
      modernTitle: "AMTSL (Active Management of Third Stage)",
      ayurvedaContent: `
        <p><strong>Ayurvedic approach to Aparaa (placenta) delivery:</strong></p>
        <ul class="space-y-2 mt-2">
          <li><strong>Wait for Aparaa:</strong> After Garbha Nishkramana, wait for the Aparaa to separate and deliver spontaneously</li>
          <li><strong>If delayed:</strong> Apply Sneha (oil) over the abdomen, gentle pressure on Udara (abdomen)</li>
          <li><strong>Dhoomapana:</strong> Fumigation with specific herbs to encourage expulsion</li>
          <li><strong>Nabhi Nala Chhedana:</strong> Cut cord at 8 Angula from baby's navel, tie with Sutra</li>
          <li><strong>Check Aparaa completeness:</strong> Ensure complete expulsion — retained portions cause complications</li>
        </ul>
        <p class="mt-2"><strong>Post-delivery:</strong> Immediately begin Sutika Paricharya with Panchakola Peya</p>
      `,
      modernContent: `
        <p><strong>AMTSL — WHO Recommended Protocol:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Oxytocin 10 IU IM:</strong> Within 1 minute of baby's delivery. The most important component of AMTSL</li>
          <li><strong>Controlled Cord Traction (CCT):</strong> Gentle traction on cord with counter-pressure on uterus above symphysis (Brandt-Andrews manoeuvre)</li>
          <li><strong>Uterine Massage:</strong> After placenta delivery, rub fundus every 15 min for 2 hours to maintain contraction</li>
        </ol>
        <p class="mt-3"><strong>Signs of placental separation:</strong></p>
        <ul class="space-y-1 mt-1">
          <li>• Gush of blood per vaginum</li>
          <li>• Cord lengthening (cord descent at introitus)</li>
          <li>• Uterus becomes globular and firm, rises in abdomen</li>
          <li>• Suprapubic bulge (Schultze or Duncan mechanism)</li>
        </ul>
        <p class="mt-2"><strong>Retained placenta:</strong> If not delivered within 30 min → manual removal under anesthesia</p>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Partograph — Key Parameters & Alert/Action Lines",
      headers: ["Parameter", "Normal Finding", "Alert Line Crossed", "Action Line Crossed"],
      rows: [
        [
          "<strong>Cervical Dilatation</strong>",
          "≥1 cm/hr in active phase (Primi). Plot on partograph starts at 4 cm",
          "Progress falls on or left of alert line — close monitoring, reassess in 4 hrs",
          "Progress crosses action line (4 hrs right of alert) — intervene: ARM, oxytocin augmentation, or cesarean",
        ],
        [
          "<strong>Descent of Head</strong>",
          "Progressive descent with dilatation. Measured in 5ths palpable above brim (5/5 to 0/5)",
          "Failure to descend — reassess CPD, position, hydration",
          "No descent despite adequate contractions — suspect obstruction → prepare for LSCS",
        ],
        [
          "<strong>Contractions</strong>",
          "Active phase: 3-5 in 10 min, each lasting 40-60 sec. Good intensity on palpation",
          "Inadequate: <3 in 10 min or duration <40 sec → consider augmentation",
          "Hypertonic/tachysystole: >5 in 10 min → risk of fetal distress. Stop oxytocin, left lateral, O2",
        ],
        [
          "<strong>FHR</strong>",
          "120-160 bpm. Record every 30 min in first stage, every 5 min in second stage",
          "Tachycardia >160 or early decelerations — monitor closely",
          "Bradycardia <120, late/variable decelerations — fetal distress → expedite delivery",
        ],
        [
          "<strong>Maternal Vitals</strong>",
          "BP <140/90, Pulse <100, Temp <37.5°C, Urine output adequate",
          "Rising BP, tachycardia — assess for pre-eclampsia, dehydration, infection",
          "BP >160/110, fever >38°C, oliguria — urgent management needed",
        ],
        [
          "<strong>Amniotic Fluid</strong>",
          "Clear. Intact membranes (I) or clear liquor (C) after ROM",
          "Meconium-stained (M) Grade 1 — thin meconium → close FHR monitoring",
          "Thick meconium (M) Grade 3 or blood-stained (B) → fetal distress, prepare for operative delivery",
        ],
      ],
    },
    {
      title: "True Labour vs False Labour",
      headers: ["Feature", "True Labour (Prasava Vedana)", "False Labour (Mithya Prasava Vedana)"],
      rows: [
        [
          "<strong>Contractions</strong>",
          "Regular, increasing frequency and duration. Every 2-5 min at peak",
          "Irregular, do not increase. Variable interval",
        ],
        [
          "<strong>Pain location</strong>",
          "Starts in back, radiates to abdomen (Kati Shoola → Udara Shoola)",
          "Lower abdomen only, does not radiate",
        ],
        [
          "<strong>Cervical change</strong>",
          "Progressive effacement and dilatation on serial P/V exam",
          "No cervical change on serial examination",
        ],
        [
          "<strong>Show</strong>",
          "Blood-tinged mucous discharge present (Yoni Srava)",
          "Absent usually",
        ],
        [
          "<strong>Sedation effect</strong>",
          "Not relieved by sedation/rest",
          "Relieved by sedation/rest",
        ],
        [
          "<strong>Walking effect</strong>",
          "Intensifies with walking",
          "May decrease with walking",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Assessment & Investigations During Labour",
      headers: ["Assessment", "Method", "Normal Finding", "Action if Abnormal"],
      rows: [
        [
          "<strong>Cervical Assessment</strong>",
          "Per vaginum examination (sterile, 4-hourly)",
          "Progressive dilatation ≥1 cm/hr in active phase, effacement, descent",
          "If <1 cm/hr → reassess in 2 hrs. If no progress → augment (ARM/Oxytocin) or LSCS",
        ],
        [
          "<strong>Fetal Heart Rate</strong>",
          "Intermittent auscultation (Pinard/Doppler) or continuous CTG",
          "120-160 bpm, good beat-to-beat variability, no decelerations",
          "Late/variable decelerations → left lateral, stop oxytocin, IV fluids, O2, prepare for delivery",
        ],
        [
          "<strong>Uterine Contractions</strong>",
          "Abdominal palpation (hand on fundus for 10 minutes)",
          "3-5 contractions/10 min, duration 40-60 sec, good intensity",
          "Hypotonic → Oxytocin augmentation. Hypertonic → Tocolysis, fetal assessment",
        ],
        [
          "<strong>Descent of Head</strong>",
          "Abdominal: 5ths palpable above brim. Vaginal: Station (-3 to +3)",
          "Progressive descent. Head 2/5 or less palpable at onset of 2nd stage",
          "Non-descent with full dilatation → assess CPD, position. May need rotation or LSCS",
        ],
        [
          "<strong>Maternal Monitoring</strong>",
          "BP, pulse (hourly), Temperature (4-hourly), Urine output",
          "BP <140/90, Pulse <100, Temp <37.5°C, UO ≥30 mL/hr",
          "Hypertension → pre-eclampsia protocol. Fever → sepsis workup. Tachycardia → fluid resuscitation",
        ],
        [
          "<strong>Amniotic Fluid</strong>",
          "Color assessment after spontaneous/artificial ROM",
          "Clear amniotic fluid",
          "Meconium → continuous CTG, prepare for neonatal resuscitation. Blood → rule out abruption/previa",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Normal Labour Management — Clinical Decision Tree",
    diagramSvg: `
      <svg viewBox="0 0 850 780" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
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
        <text class="label-bold" x="425" y="25" style="font-size:16px;">Normal Labour Management — Integrated Decision Tree</text>

        <!-- Admission -->
        <rect class="box" x="275" y="40" width="300" height="50" />
        <text class="label-bold" x="425" y="60">Woman in Labour (Prasava Vedana)</text>
        <text class="label small" x="425" y="78">Confirm: Regular contractions + cervical change</text>

        <line class="arrow" x1="425" y1="90" x2="425" y2="115" />

        <!-- Admission Assessment -->
        <rect class="box-blue" x="275" y="115" width="300" height="55" />
        <text class="label-bold" x="425" y="135">Admission Assessment</text>
        <text class="label small" x="425" y="150">P/V: Cervix, station, membranes, pelvis</text>
        <text class="label small" x="425" y="163">FHR, Contractions, Vitals, Risk factors</text>

        <!-- Branch -->
        <line class="arrow-yes" x1="350" y1="170" x2="170" y2="210" />
        <text class="yes-label" x="240" y="195">Latent Phase</text>
        <text class="small" x="240" y="207" style="fill:#2E7D32; text-anchor:middle;">(0-4 cm)</text>

        <line class="arrow-no" x1="500" y1="170" x2="680" y2="210" />
        <text class="no-label" x="610" y="195">Active Phase</text>
        <text class="small" x="610" y="207" style="fill:#C62828; text-anchor:middle;">(4-10 cm)</text>

        <!-- Latent Phase -->
        <rect class="box" x="50" y="210" width="250" height="60" />
        <text class="label-bold" x="175" y="230">Latent Phase Management</text>
        <text class="label small" x="175" y="245">Encourage mobility, oral fluids</text>
        <text class="label small" x="175" y="258">FHR q30min, P/V q4hr</text>
        <text class="label small" x="175" y="268">Ayurveda: light diet, warm oil massage</text>

        <!-- Active Phase -->
        <rect class="box-blue" x="555" y="210" width="250" height="60" />
        <text class="label-bold" x="680" y="230">Active Phase — Partograph</text>
        <text class="label small" x="680" y="245">Plot: dilatation, descent, contractions</text>
        <text class="label small" x="680" y="258">FHR q30min, P/V q4hr, vitals q1hr</text>

        <!-- Active Phase Monitoring -->
        <line class="arrow" x1="680" y1="270" x2="680" y2="300" />

        <rect class="box-purple" x="530" y="300" width="300" height="50" />
        <text class="label-bold" x="680" y="320">Progress Assessment</text>
        <text class="label small" x="680" y="338">Is dilatation ≥1 cm/hr? Is descent progressing?</text>

        <line class="arrow-yes" x1="610" y1="350" x2="450" y2="390" />
        <text class="yes-label" x="510" y="375">Normal progress</text>

        <line class="arrow-no" x1="750" y1="350" x2="780" y2="390" />
        <text class="no-label" x="785" y="375">Slow/No progress</text>

        <!-- Normal Progress -->
        <rect class="box-green" x="300" y="390" width="300" height="55" />
        <text class="label-bold" x="450" y="410">Continue Monitoring</text>
        <text class="label small" x="450" y="425">Supportive care, hydration, position changes</text>
        <text class="label small" x="450" y="438">Ayurveda: Bala Taila Abhyanga on Kati (back)</text>

        <!-- Slow Progress -->
        <rect class="box-red" x="680" y="390" width="160" height="55" />
        <text class="label-bold" x="760" y="410">Intervene</text>
        <text class="label small" x="760" y="425">ARM, Oxytocin</text>
        <text class="label small" x="760" y="438">If CPD → LSCS</text>

        <!-- Second Stage -->
        <line class="arrow" x1="450" y1="445" x2="425" y2="475" />

        <rect class="box-purple" x="275" y="475" width="300" height="55" />
        <text class="label-bold" x="425" y="495">Second Stage (Full Dilatation)</text>
        <text class="label small" x="425" y="510">Active pushing with contractions</text>
        <text class="label small" x="425" y="523">Controlled delivery of head, guard perineum</text>

        <line class="arrow" x1="425" y1="530" x2="425" y2="555" />

        <!-- Third Stage -->
        <rect class="box-green" x="275" y="555" width="300" height="55" />
        <text class="label-bold" x="425" y="575">Third Stage — AMTSL</text>
        <text class="label small" x="425" y="590">Oxytocin 10 IU IM within 1 min</text>
        <text class="label small" x="425" y="603">CCT + Uterine massage</text>

        <line class="arrow" x1="425" y1="610" x2="425" y2="635" />

        <!-- Fourth Stage -->
        <rect class="box-blue" x="250" y="635" width="350" height="55" />
        <text class="label-bold" x="425" y="655">Fourth Stage — Observation (1-2 hrs)</text>
        <text class="label small" x="425" y="670">Monitor: Uterine tone, bleeding, vitals q15min</text>
        <text class="label small" x="425" y="683">Initiate breastfeeding. Begin Sutika Paricharya</text>

        <!-- Integration -->
        <rect class="box" x="150" y="710" width="550" height="55" />
        <text class="label-bold" x="425" y="730">Integrated Approach</text>
        <text class="label" x="425" y="745">Ayurveda: Apana Vayu support + Abhyanga + Sutika Peya</text>
        <text class="label" x="425" y="758">Modern: Partograph monitoring + AMTSL + Active observation</text>
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for Prasava Vigyana:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Apana Vayu is the key concept in Ayurvedic obstetrics — it governs ALL expulsive functions. Vata Anulomana (Apana regulation) is the Ayurvedic strategy for facilitating labour</li>
        <li>The 3 P's (Power, Passage, Passenger) should always be assessed when evaluating labour progress — they correspond to Ayurvedic concepts of Apana Vayu, Yoni Marga, and Garbha</li>
        <li>Partograph is the single most important monitoring tool in labour — always plot on the WHO modified partograph starting at 4 cm dilatation</li>
        <li>AMTSL reduces PPH by 60% — Oxytocin 10 IU IM within 1 minute of delivery is the most critical step</li>
        <li>Cardinal movements: "Every Damn Fool In Obstetrics Enjoys Examining Externally" = Engagement, Descent, Flexion, Internal rotation, Extension, External rotation, Expulsion</li>
        <li>Delayed cord clamping (1-3 min) is now WHO-recommended — improves neonatal Hb and iron stores. Charaka's 8-Angula cord length specification shows consideration for adequate cord stump</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Classical Prasava & Modern Labour Management</h3>
    <div class="space-y-4">
      <p>Normal labour management benefits greatly from integrating Ayurvedic supportive care with modern monitoring and intervention protocols. The Ayurvedic approach focuses on facilitating the natural process through Vata Anulomana, while modern obstetrics provides tools for objective assessment and timely intervention.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Contributions</h4>
          <ul class="space-y-1 text-sm">
            <li>• Apana Vayu concept provides a physiological framework for understanding labour</li>
            <li>• Sutikagara (labour room) standards with trained attendants (Dhatrya)</li>
            <li>• Birth canal preparation through Basti and Yoni Pichu in months 8-9</li>
            <li>• Abhyanga (oil massage) during labour for comfort and Vata pacification</li>
            <li>• Immediate Sutika Paricharya with Panchakola Peya for recovery</li>
            <li>• Psychological support through Ashvasana (reassurance) and Manasika Chikitsa</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Partograph for objective labour progress monitoring</li>
            <li>• Continuous FHR monitoring (CTG) for fetal wellbeing assessment</li>
            <li>• AMTSL protocol — reduces PPH by 60%</li>
            <li>• Oxytocin augmentation when progress is inadequate</li>
            <li>• Operative delivery capability (forceps, vacuum, cesarean) for emergencies</li>
            <li>• Neonatal resuscitation protocols for compromised newborns</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated Labour Management Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Admission:</strong> Confirm true labour (regular contractions + cervical change). Assess Prakriti and risk factors</li>
          <li><strong>First Stage:</strong> Partograph monitoring + Abhyanga with Bala Taila on Kati (lower back) + ambulatory labour + oral hydration</li>
          <li><strong>Second Stage:</strong> Controlled delivery with perineal guard. Apana Vayu support through positioning (upright/squatting is Ayurveda-recommended)</li>
          <li><strong>Third Stage:</strong> AMTSL (Oxytocin, CCT, uterine massage) — this modern protocol takes priority for PPH prevention</li>
          <li><strong>Fourth Stage:</strong> Modern observation (vitals, bleeding, uterine tone) + Ayurvedic recovery (Panchakola Peya, early breastfeeding, Sutika Paricharya initiation)</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Prasava = expulsion of mature Garbha from Kukshi through Yoni Marga by Apana Vayu (Sushruta Sha. 10). Normal at 9-10th month when Garbha is Paripurna.",
    "Sukha Prasava requires: adequate Apana Vayu (Power), mature Adhomukha Garbha (Passenger), Suvishala Yoni Marga (Passage) — exactly parallels the modern 3 P's.",
    "Sutikagara (Sushruta): Well-prepared, fragrant delivery room with 4 experienced Prajavati Dhatrya (skilled birth attendants). Ancient skilled birth attendance concept.",
    "First stage: Onset of true labour to full cervical dilatation (10 cm). Latent phase: 0-4 cm (up to 8 hrs Primi). Active phase: 4-10 cm (rate ≥1 cm/hr Primi, ≥1.5 cm/hr Multi).",
    "Second stage: Full dilatation to delivery of baby. Primi: up to 2 hrs. Multi: up to 1 hr. Active pushing with each contraction. Guard perineum during crowning.",
    "Cardinal movements: Engagement → Descent → Flexion → Internal Rotation → Extension → External Rotation (Restitution) → Expulsion. Mnemonic: 'Every Damn Fool In Obstetrics...'",
    "Third stage: Baby delivery to placenta delivery. AMTSL: Oxytocin 10 IU IM within 1 min + CCT + Uterine massage. Reduces PPH risk by 60%.",
    "Signs of placental separation: Gush of blood, cord lengthening, uterus becomes globular and firm, rises in abdomen. If >30 min → manual removal.",
    "Partograph: Start plotting at 4 cm (active phase). Alert line at 1 cm/hr. Action line 4 hrs right of alert. Plot: dilatation, descent, FHR, contractions, vitals, urine.",
    "FHR monitoring: Normal 120-160 bpm. Record q30min (1st stage), q5min (2nd stage). Late decelerations = uteroplacental insufficiency. Variable decelerations = cord compression.",
    "Nabhi Nala Chhedana (Charaka): Cut at 8 Angula from navel, tie with Sutra. Modern: Delayed cord clamping 1-3 min → improves neonatal Hb and iron stores.",
    "Panchakola Siddha Peya: First food for Sutika (post-delivery). Panchakola = Pippali + Pippalimula + Chavya + Chitraka + Nagara (Shunthi). Rekindles Jatharagni.",
    "True vs False labour: True = regular progressive contractions + cervical change + show + back pain radiating to abdomen + not relieved by sedation.",
    "Fourth stage: First 1-2 hrs post-placenta. Monitor q15min: uterine tone (firm = good), vaginal bleeding, BP, pulse. Most PPH occurs in this period.",
    "Mechanism in vertex OA: Head enters transverse → rotates to OA at pelvic floor → extends under symphysis → restitution aligns with shoulders → anterior then posterior shoulder delivers.",
  ],

  mnemonics: [
    {
      title: "Cardinal Movements of Labour",
      acronym: "EDFIEEE",
      expansions: [
        "Engagement — BPD enters pelvic inlet",
        "Descent — continuous, driven by contractions + gravity",
        "Flexion — chin to chest, smallest diameter presents",
        "Internal Rotation — occiput rotates to OA position",
        "Extension — head extends under symphysis, crowning",
        "External Rotation — restitution, head realigns with shoulders",
        "Expulsion — shoulders and body delivered",
      ],
    },
    {
      title: "3 P's of Labour (+ 1)",
      acronym: "PPPP",
      expansions: [
        "Power — uterine contractions + maternal effort (Apana Vayu)",
        "Passage — bony pelvis + soft tissues (Yoni Marga)",
        "Passenger — fetus size, position, presentation (Garbha)",
        "Psyche — maternal psychological state (Mana/Sattva)",
      ],
    },
    {
      title: "AMTSL Steps",
      acronym: "OCU",
      expansions: [
        "Oxytocin 10 IU IM — within 1 minute of delivery",
        "Controlled Cord Traction — gentle downward traction with counter-pressure",
        "Uterine massage — rub fundus every 15 min for 2 hours",
      ],
    },
    {
      title: "Panchakola (Sutika Peya Ingredients)",
      acronym: "PPCCS",
      expansions: [
        "Pippali (Piper longum) — Deepana, Pachana",
        "Pippalimula (Piper longum root) — Vata Anulomana",
        "Chavya (Piper retrofractum) — Agnideepana",
        "Chitraka (Plumbago zeylanica) — Jatharagni Vardhaka",
        "Shunthi/Nagara (Zingiber officinale) — Amapachana, anti-nausea",
      ],
    },
  ],
};

export function getM4Content() {
  return m4Content;
}
