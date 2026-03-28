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
// M2 — GARBHA SHARIRA (Embryology & Fetal Development)
// ────────────────────────────────────────────────────────

const m2Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 2–3",
    "Sushruta Sharira Sthana Ch. 3–5",
    "Ashtanga Hridaya Sharira Ch. 1–2",
    "Kashyapa Samhita — Sharira Sthana",
    "Harita Samhita — Tritiya Sthana",
    "Williams Obstetrics Ch. 3–7 (Embryology & Placenta)",
    "Langman's Medical Embryology",
    "DC Dutta Ch. 2–4",
  ],

  units: [
    {
      title: "Garbha Utpatti & Garbha Sambhava Samagri",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the foundational concepts of conception (Garbhotpatti) as described in Charaka Sharira Sthana Chapter 2-3 and Sushruta Sharira Sthana Chapter 3. It elaborates on the essential factors for formation of Garbha (Garbha Sambhava Samagri) and the process by which Shukra and Shonita unite in the Garbhashaya."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Garbha Sambhava Samagri — Ritu, Kshetra, Ambu, Beeja (Charaka Sha. 2)"),
          React.createElement("li", null, "• Shadanga Garbha — Six factors constituting the embryo (Matrija, Pitrija, Atmaja, Satmyaja, Rasaja, Sattvaja)"),
          React.createElement("li", null, "• Role of Panchamahabhuta in Garbha formation"),
          React.createElement("li", null, "• Shukra Shonita Shuddhi — purity of reproductive elements"),
          React.createElement("li", null, "• Modern: Gametogenesis, fertilization, and pre-implantation development")
        )
      ),
    },
    {
      title: "Masanumasika Garbha Vriddhi (Month-wise Development)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "The core of Garbha Sharira — detailed month-by-month development of the fetus from Kalala (first month) through the fully formed Garbha at 9 months. This unit correlates Charaka's Masanumasika description with modern embryological milestones, week by week."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Month 1 — Kalala Avastha: jelly-like mass (Charaka Sha. 4/9)"),
          React.createElement("li", null, "• Month 2 — Ghana/Peshi/Arbuda based on sex (solidification)"),
          React.createElement("li", null, "• Month 3 — Pancha Piṇḍika: five buds representing head and limbs"),
          React.createElement("li", null, "• Month 4 — Garbha Sthirata, Hridaya formation, Dauhrida onset"),
          React.createElement("li", null, "• Month 5-7 — Progressive development of Mana, Medha, Bala"),
          React.createElement("li", null, "• Month 8-9 — Ojas exchange, readiness for delivery"),
          React.createElement("li", null, "• Modern embryology: gastrulation, organogenesis, fetal period milestones")
        )
      ),
    },
    {
      title: "Garbha Avayava Utpatti & Panchamahabhuta Role",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit explores the formation of body parts (Avayava Utpatti) and the role of the five great elements (Panchamahabhuta) in organogenesis. Sushruta and Charaka describe how each element contributes specific tissues and organs to the developing embryo."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "• Panchamahabhuta contribution to Garbha (Prithvi→solid, Jala→fluid, Agni→metabolism, Vayu→movements, Akasha→cavities)"),
          React.createElement("li", null, "• Matrija Bhava — organs derived from mother (skin, blood, flesh, fat, etc.)"),
          React.createElement("li", null, "• Pitrija Bhava — organs derived from father (hair, nails, bones, teeth, etc.)"),
          React.createElement("li", null, "• Atmaja, Satmyaja, Rasaja, Sattvaja contributions"),
          React.createElement("li", null, "• Placental development and Aparaa concept"),
          React.createElement("li", null, "• Modern: Germ layer derivatives — ectoderm, mesoderm, endoderm")
        )
      ),
    },
  ],

  orientation: {
    why: "Garbha Sharira (Embryology) is the foundational science of fetal development in Prasuti Tantra. Understanding Masanumasika Garbha Vriddhi (month-wise fetal development) per classical Ayurveda and correlating it with modern embryology is essential for both clinical practice and academic examinations. This module forms the anatomical and physiological basis for all subsequent obstetric topics — from antenatal care to management of pregnancy disorders.",
    examWeight:
      "One of the highest-yield topics in Prasuti Tantra. Long essay questions (20 marks) on Masanumasika Garbha Vriddhi and Garbha Sambhava Samagri appear nearly every year. Short notes (10 marks) on Garbhotpatti, Panchamahabhuta role in embryology, Matrija-Pitrija Bhava, and month-wise comparison tables are very frequent. Also expect questions correlating Ayurvedic embryology with modern germ layer theory.",
  },

  definition: {
    ayurveda: `
      <p><strong>Garbha Sharira</strong> is the branch of Ayurveda dealing with the formation, development, and anatomy of the embryo and fetus. Charaka defines Garbha as:</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"शुक्रशोणितसंयोगे समीरणः कुक्षिमागतम् | गर्भो भवति..."</p>
      <p class="mt-2">The union of <strong>Shukra</strong> (sperm/male factor) and <strong>Shonita</strong> (ovum/female factor) along with <strong>Atma</strong> (soul), entering the <strong>Kukshi</strong> (uterus), forms the <strong>Garbha</strong>.</p>
      <p class="mt-2"><strong>Garbha Sambhava Samagri</strong> (essential factors for conception) include: <strong>Ritu</strong> (proper season/fertile period), <strong>Kshetra</strong> (healthy uterus), <strong>Ambu</strong> (nourishing fluid), and <strong>Beeja</strong> (healthy gametes). The Garbha is a product of <strong>Panchamahabhuta</strong> — the five great elements that constitute all matter.</p>
    `,
    modern: `
      <p><strong>Embryology</strong> is the study of development from fertilization to birth. <strong>Fertilization</strong> occurs in the ampulla of the fallopian tube when a capacitated sperm penetrates the zona pellucida of the secondary oocyte.</p>
      <p class="mt-2"><strong>Key stages:</strong> Zygote (Day 1) → Cleavage → Morula (Day 3-4) → Blastocyst (Day 5) → Implantation (Day 6-7) → Bilaminar disc (Week 2) → Gastrulation and Trilaminar disc (Week 3) → Organogenesis (Weeks 3-8) → Fetal period (Week 9-birth).</p>
      <p class="mt-2">The <strong>embryonic period</strong> (weeks 3-8) is the most critical for organogenesis and is most susceptible to teratogens. The <strong>fetal period</strong> (week 9 to birth) is characterized by growth, maturation, and functional development of organ systems.</p>
    `,
    classification: {
      title: "Classification of Garbha Development Stages",
      headers: ["Stage", "Ayurvedic Term", "Modern Equivalent", "Key Features"],
      rows: [
        [
          "<strong>Conception</strong>",
          "Garbhotpatti / Nisheka",
          "Fertilization & Implantation",
          "Shukra-Shonita-Atma union / Sperm-ovum fusion, blastocyst implantation",
        ],
        [
          "<strong>Early Development</strong>",
          "Kalala → Ghana → Peshi",
          "Pre-embryonic period (Wk 1-2)",
          "Jelly → Solid → Fleshy mass / Zygote → Morula → Blastocyst → Bilaminar disc",
        ],
        [
          "<strong>Organogenesis</strong>",
          "Avayava Utpatti (Month 3-4)",
          "Embryonic period (Wk 3-8)",
          "Pancha Piṇḍika, sense organs / Germ layers form all organs, limb buds",
        ],
        [
          "<strong>Growth & Maturation</strong>",
          "Garbha Vriddhi (Month 5-9)",
          "Fetal period (Wk 9-birth)",
          "Mana, Medha, Bala, Ojas development / Growth, lung maturity, weight gain",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Charaka Sharira Sthana 3/3",
      devanagari:
        "षड्धातुजः पुरुषः इति — मातृजपितृजात्मजसत्त्वजसात्म्यजरसजाः ||",
      transliteration:
        "ṣaḍdhātujaḥ puruṣaḥ iti — mātṛja-pitṛja-ātmaja-sattvaja-sātmyaja-rasajāḥ ||",
      meaning:
        "A human being (Purusha) is constituted of six factors: Matrija (maternal), Pitrija (paternal), Atmaja (soul-derived), Sattvaja (mind-derived), Satmyaja (habitual/homologous), and Rasaja (nutritional/dietary). These six Dhatus collectively form the embryo and determine the characteristics of the individual.",
      clinicalNote:
        "This concept parallels the modern understanding of genetic (maternal & paternal chromosomes), epigenetic (environmental, nutritional, and psychological influences), and metaphysical contributions to fetal development. The Rasaja factor correlates with the importance of maternal nutrition in organogenesis.",
    },
    {
      source: "Charaka Sharira Sthana 4/9-10",
      devanagari:
        "प्रथमे मासि कललं जायते संप्रमूर्छितम् |\nसर्वधातुकृतः पिण्डो द्वितीये समुदाहृतः ||\nपेशी मांसोपचयो वा स्त्रीपुंनपुंसकलक्षणम् |\nतृतीये हस्तपादशिरसां पञ्च पिण्डिका भवन्ति ||",
      transliteration:
        "prathame māsi kalalaṃ jāyate saṃpramūrcchitam |\nsarvadhātukṛtaḥ piṇḍo dvitīye samudāhṛtaḥ ||\npeśī māṃsopacayo vā strīpuṃnapuṃsakalakṣaṇam |\ntṛtīye hastapādaśirasāṃ pañca piṇḍikā bhavanti ||",
      meaning:
        "In the first month, the Kalala (jelly-like mass) is formed from the solidified mixture of Shukra and Shonita. In the second month, it becomes a solid mass (Piṇḍa) constituted of all Dhatus — becoming Ghana (solid), Peshi (fleshy mass), or Arbuda (round mass) based on whether the child will be male, female, or intersex. In the third month, five buds (Pancha Piṇḍika) appear representing the head, two arms, and two legs.",
      clinicalNote:
        "Modern correlation: Month 1 corresponds to the blastocyst and early embryonic disc. Month 2 aligns with the embryonic period when the body form takes shape and sex differentiation begins (SRY gene activation). Month 3 (week 9-12) corresponds to distinct limb development and head growth in the fetal period.",
    },
    {
      source: "Sushruta Sharira Sthana 3/18",
      devanagari:
        "पञ्चमहाभूतात्मकमिदं शरीरम् | तत्र पृथिवी कठिनत्वं ददाति, आपः स्नेहं, तेजः पक्तिं, वायुः प्रेरणम्, आकाशः सौषिर्यम् ||",
      transliteration:
        "pañcamahābhūtātmakamidaṃ śarīram | tatra pṛthivī kaṭhinatvaṃ dadāti, āpaḥ snehaṃ, tejaḥ paktiṃ, vāyuḥ preraṇam, ākāśaḥ sauṣiryam ||",
      meaning:
        "The body is composed of the five Mahabhutas. Prithvi (earth) provides solidity/hardness, Apa (water) provides moisture/cohesion, Tejas (fire) provides digestion/metabolism, Vayu (air) provides movement/propulsion, and Akasha (ether/space) provides cavities/hollowness in the body.",
      clinicalNote:
        "This Panchamahabhuta theory of the body is one of the fundamental concepts of Ayurvedic embryology. It correlates with the understanding that the human body requires structural components (solids — bones, muscles), fluids (blood, plasma), metabolic processes (enzymes, cellular respiration), kinetic energy (nerve impulses, peristalsis), and space (body cavities, hollow organs).",
    },
    {
      source: "Charaka Sharira Sthana 4/11-12",
      devanagari:
        "चतुर्थे मासि गर्भस्य स्थिरत्वं भवति | हृदयं चास्य व्यक्तं भवति |\nततश्चेतनाधातुरभिव्यक्तो भवति | तस्मात् दौहृदं भवति ||",
      transliteration:
        "caturthe māsi garbhasya sthiratvaṃ bhavati | hṛdayaṃ cāsya vyaktaṃ bhavati |\ntataścetanādhāturabhivyakto bhavati | tasmāt dauhṛdaṃ bhavati ||",
      meaning:
        "In the fourth month, the Garbha attains stability (Sthirata). The heart (Hridaya) becomes well-formed and manifest. Then the Chetana Dhatu (consciousness element) becomes expressed. Therefore, Dauhrida (pregnancy cravings/desires) arises — as the fetus expresses its wishes through the mother via the newly formed heart.",
      clinicalNote:
        "Modern correlation: By week 12-16 (month 4), the fetal heart is fully formed with four chambers, and cardiac output increases significantly. The fetus begins active movements. The concept of Chetana Dhatu becoming manifest aligns with early fetal neurological development, as the cerebral cortex begins differentiation during this period.",
    },
    {
      source: "Sushruta Sharira Sthana 3/30",
      devanagari:
        "मातृजानि — त्वक् शोणितं मांसं मेदो नाभिहृदयक्लोमयकृत्प्लीहान्त्रगुदाशयाः |\nपितृजानि — केशश्मश्रुलोमनखास्थिस्नायुसिराधमन्यः शुक्रं च ||",
      transliteration:
        "mātṛjāni — tvak śoṇitaṃ māṃsaṃ medo nābhihṛdayaklomayakṛtplīhāntraguḍāśayāḥ |\npitṛjāni — keśaśmaśrulomanakhāsthisnāyusirādhamanyaḥ śukraṃ ca ||",
      meaning:
        "Matrija (maternal) organs: skin, blood, muscle, fat, navel, heart, lungs, liver, spleen, intestines, rectum, and hollow viscera. Pitrija (paternal) organs: head hair, beard, body hair, nails, bones, tendons/ligaments, veins, arteries, and semen.",
      clinicalNote:
        "While modern genetics shows that both parents contribute equally through chromosomes, this classification has interesting parallels: soft tissues (Matrija) are predominantly formed from cytoplasm-rich oocyte contributions (mitochondrial DNA, maternal mRNA), while structural tissues (Pitrija — bones, connective tissue) relate to structural protein genes. This is a frequent exam question.",
    },
  ],

  dualCols: [
    {
      title: "Garbha Sambhava Samagri vs Modern Requirements for Conception",
      ayurvedaTitle: "Charaka's Essential Factors (Sha. 2/6)",
      modernTitle: "Modern Prerequisites for Conception",
      ayurvedaContent: `
        <p><strong>Four essential factors (Charaka's agricultural analogy):</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Ritu (Season/Fertile Period)</strong> — Ritukala, the 12 days after menstruation (days 4-16 per Sushruta). Conception occurs only when the Artava is in its proper Ritu</li>
          <li><strong>Kshetra (Field/Uterus)</strong> — A healthy Garbhashaya free of disease, with proper position and function</li>
          <li><strong>Ambu (Water/Nourishment)</strong> — Adequate Rasa Dhatu for nourishing the Garbha. Proper Ahara Rasa reaching the uterus</li>
          <li><strong>Beeja (Seed/Gametes)</strong> — Shuddha Shukra and Shuddha Artava, free from Dosha vitiation. Both must be of optimal quality</li>
        </ol>
        <p class="mt-3"><strong>Additional factors per Sushruta:</strong> Atma (soul), proper Vayu (Apana Vata for transport of gametes), and Mana (psychological readiness)</p>
      `,
      modernContent: `
        <p><strong>Modern requirements for successful conception:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Ovulation</strong> — Release of mature oocyte from Graafian follicle (Day 14 in 28-day cycle). Correlates with Ritu</li>
          <li><strong>Normal anatomy</strong> — Patent fallopian tubes, normal uterine cavity, adequate endometrial thickness (>7mm). Correlates with Kshetra</li>
          <li><strong>Endometrial receptivity</strong> — Secretory endometrium with adequate blood supply, Window of Implantation (Day 20-24). Correlates with Ambu</li>
          <li><strong>Healthy gametes</strong> — Sperm count >15 million/mL, motility >40%, normal morphology >4%; Mature oocyte with intact zona pellucida. Correlates with Beeja</li>
        </ol>
        <p class="mt-3"><strong>Process:</strong> Capacitation → Acrosome reaction → Fertilization in ampulla → Cleavage → Implantation (Day 6-7)</p>
      `,
    },
    {
      title: "Month-wise Fetal Development Comparison",
      ayurvedaTitle: "Masanumasika Garbha Vriddhi (Charaka Sha. 4)",
      modernTitle: "Modern Embryological Milestones",
      ayurvedaContent: `
        <ul class="space-y-2">
          <li><strong>Month 1 (Kalala):</strong> Jelly-like mass from Shukra-Shonita union. All Panchamahabhuta in undifferentiated form</li>
          <li><strong>Month 2 (Ghana):</strong> Solidification — Ghana (solid/male), Peshi (fleshy/female), Arbuda (round/napumsaka). Sex determination occurs</li>
          <li><strong>Month 3:</strong> Pancha Piṇḍika (5 buds) — head, 2 arms, 2 legs. All Indriyas (sense organs) manifest simultaneously (Sarvanga Pratyanga Nirmana)</li>
          <li><strong>Month 4:</strong> Garbha Sthirata (stabilization). Hridaya well-formed, Chetana Dhatu manifest. Dauhrida begins. Garbha movements start</li>
          <li><strong>Month 5:</strong> Mana (mind) awakens more. Mamsashonitopachaya (flesh and blood increase). Garbha consciousness more prominent</li>
          <li><strong>Month 6:</strong> Medha (intellect), Bala (strength), Varna (complexion) develop. Hair (Kesha), nails (Nakha) appear</li>
          <li><strong>Month 7:</strong> Sarva Avayava Paripurnata — all organs fully developed. Garbha is viable (Poorna Garbha). Ojas is well-established</li>
          <li><strong>Month 8:</strong> Ojas is unstable — transfers between mother and fetus. Delivery in this month is considered inauspicious (Ashta Masa Jata)</li>
          <li><strong>Month 9:</strong> Garbha is fully mature. Apana Vayu propels fetus toward Yoni for delivery. Prasava Kala approaches</li>
        </ul>
      `,
      modernContent: `
        <ul class="space-y-2">
          <li><strong>Week 1-2:</strong> Zygote → Cleavage → Morula → Blastocyst → Implantation (Day 6-7). Bilaminar disc forms</li>
          <li><strong>Week 3:</strong> Gastrulation — trilaminar disc (ectoderm, mesoderm, endoderm). Primitive streak. Neural plate forms</li>
          <li><strong>Week 4-5:</strong> Heart tube beats (Day 22). Neural tube closes. Limb buds appear (Week 4). Pharyngeal arches form</li>
          <li><strong>Week 6-8:</strong> Organogenesis complete. Face forms. Fingers separate. CRL ~30mm. End of embryonic period</li>
          <li><strong>Week 9-12 (Month 3):</strong> External genitalia differentiate. Ossification begins. Urine production starts. CRL 87mm</li>
          <li><strong>Week 13-16 (Month 4):</strong> Quickening. Lanugo hair. Liver produces bile. Meconium. FHR 120-160 bpm</li>
          <li><strong>Week 17-20 (Month 5):</strong> Vernix caseosa. Fetal movements felt. Brown fat deposition. Weight ~300g</li>
          <li><strong>Week 21-24 (Month 6):</strong> Surfactant production begins (Week 24). Viability threshold. Eyes open. Weight ~630g</li>
          <li><strong>Week 25-28 (Month 7):</strong> Lungs capable of gas exchange. Testes descend. Subcutaneous fat. Weight ~1000g</li>
          <li><strong>Week 29-36 (Month 8-9):</strong> Rapid weight gain. Lung maturity (L/S ratio >2). Ossification of distal femoral epiphysis. Term weight ~3000g</li>
        </ul>
      `,
    },
    {
      title: "Matrija-Pitrija Bhava vs Genetic Contribution",
      ayurvedaTitle: "Shadanga Garbha (Six Factors)",
      modernTitle: "Modern Genetics & Development",
      ayurvedaContent: `
        <p><strong>Six factors constituting the Garbha:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Matrija Bhava:</strong> Skin, blood, muscle, fat, heart, liver, spleen, kidneys, intestines, navel — soft tissues</li>
          <li><strong>Pitrija Bhava:</strong> Hair, nails, teeth, bones, tendons, veins, arteries, semen — structural tissues</li>
          <li><strong>Atmaja Bhava:</strong> Life span, consciousness, mind, sense organs, Prana, happiness-sorrow, desire-aversion, intelligence</li>
          <li><strong>Satmyaja Bhava:</strong> Health, resistance to disease, complexion — derived from habitual practices of parents</li>
          <li><strong>Rasaja Bhava:</strong> Growth, nourishment, body bulk — from Rasa Dhatu (nutrition)</li>
          <li><strong>Sattvaja Bhava:</strong> Temperament, conduct, purity of mind, memory, attachment — mental constitution</li>
        </ol>
      `,
      modernContent: `
        <p><strong>Modern genetic and developmental factors:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Maternal genetic contribution:</strong> 23 chromosomes from oocyte, mitochondrial DNA (exclusively maternal), maternal mRNA for early development, cytoplasmic factors</li>
          <li><strong>Paternal genetic contribution:</strong> 23 chromosomes from sperm including sex-determining Y chromosome, genomic imprinting (paternal genes active in placenta)</li>
          <li><strong>Epigenetic factors:</strong> DNA methylation, histone modification — influenced by parental lifestyle and environment</li>
          <li><strong>Nutritional factors:</strong> Folate, iron, calcium, DHA — critical for organogenesis and growth. Maternal malnutrition causes IUGR</li>
          <li><strong>Environmental factors:</strong> Teratogens, radiation, infections — affect during critical periods of development</li>
          <li><strong>Germ layer derivatives:</strong> Ectoderm (skin, nervous system), Mesoderm (muscles, bones, blood), Endoderm (gut, liver, lungs)</li>
        </ol>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Month-wise Developmental Features — Ayurveda & Modern Comparison",
      headers: ["Month", "Ayurvedic Development (Garbha Vriddhi)", "Modern Embryology Milestones", "Clinical Significance"],
      rows: [
        [
          "<strong>Month 1</strong>",
          "Kalala (jelly-like mass) — undifferentiated product of Shukra-Shonita. All Bhutas in Avyakta form",
          "Zygote → Morula → Blastocyst → Implantation. Bilaminar disc. Trophoblast invasion. hCG production begins",
          "Most vulnerable to all-or-nothing damage. Pregnancy may not yet be recognized. hCG detectable",
        ],
        [
          "<strong>Month 2</strong>",
          "Ghana (solid), Peshi (fleshy), or Arbuda (round) — sex determination. Dhatu differentiation begins",
          "Gastrulation. Organogenesis begins. Neural tube closure (Day 23-28). Heart beats Day 22. Limb buds",
          "Critical period for neural tube defects (Folic acid vital). Most teratogen-sensitive period",
        ],
        [
          "<strong>Month 3</strong>",
          "Pancha Piṇḍika — 5 buds (head, arms, legs). Sarvanga Pratyanga Nirmana (all body parts form). Sukha-Dukha Anubhava",
          "Embryonic period ends. External genitalia differentiate. Ossification begins. CRL 87mm. FHR detectable on Doppler",
          "End of major organogenesis. Teratogenic risk decreases. Sex may be visualized on USG",
        ],
        [
          "<strong>Month 4</strong>",
          "Garbha Sthirata. Hridaya manifest. Chetana Dhatu expressed. Dauhrida (cravings). Garbha Spandana (movements)",
          "Quickening (16-20 wk). Lanugo hair. Meconium forms. Liver produces bile. FHR 120-160",
          "Stabilization period — miscarriage risk drops. Anomaly scan (18-20 wk). Maternal diet critical",
        ],
        [
          "<strong>Month 5</strong>",
          "Mana awakens. Mamsashonitopachaya (flesh-blood increase). Consciousness more prominent",
          "Vernix caseosa. Brown fat deposited. Fetal movements clearly felt. Weight ~300g. Eyebrows, head hair",
          "Anomaly scan window. Active fetal movement assessment. Fundal height at umbilicus",
        ],
        [
          "<strong>Month 6</strong>",
          "Medha (intellect), Bala (strength), Varna (complexion). Kesha (hair), Nakha (nails) grow",
          "Surfactant production begins (Week 24). Eyes open. Hearing develops. Viability threshold. Weight ~630g",
          "Viability — survival possible with NICU care at 24 weeks. Assess for GDM (OGTT)",
        ],
        [
          "<strong>Month 7</strong>",
          "Sarva Avayava Paripurnata — all organs complete. Garbha Poorna. Ojas well-established",
          "Lungs capable of gas exchange. Testes descend. Subcutaneous fat. Weight ~1000g. Braxton-Hicks",
          "Good survival with NICU. Third-trimester bleeding assessment. Growth monitoring",
        ],
        [
          "<strong>Month 8</strong>",
          "Ojas Achala — Ojas unstable, moves between mother and fetus. Ashta Masa delivery considered risky",
          "Rapid weight gain. L/S ratio approaches 2. Fat deposition. Head engagement in primi. Weight ~1700g",
          "Lung maturity assessment if preterm delivery anticipated. Steroid cover if needed",
        ],
        [
          "<strong>Month 9</strong>",
          "Garbha Paripurna — fully mature. Apana Vayu propels for delivery. Ready for Prasava",
          "Term (37-42 wk). Lung maturity complete. Distal femoral epiphysis ossified. Weight ~3000g. Lightening",
          "Term delivery expected. Assess presentation, engagement. Bishop score for induction readiness",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Embryological Assessment Investigations",
      headers: ["Investigation", "Purpose", "Timing", "Clinical Relevance"],
      rows: [
        [
          "<strong>Dating USG (CRL)</strong>",
          "Confirm gestational age by Crown-Rump Length",
          "6-12 weeks",
          "Most accurate dating method in first trimester (±5 days). CRL correlates with Kalala-Ghana stages",
        ],
        [
          "<strong>NT Scan</strong>",
          "Nuchal Translucency — screen for chromosomal abnormalities",
          "11-13+6 weeks",
          "NT ≥3.5mm: risk of Down syndrome, Turner syndrome, cardiac defects. Corresponds to Pancha Piṇḍika stage",
        ],
        [
          "<strong>Anomaly Scan (TIFFA)</strong>",
          "Targeted Imaging for Fetal Anomalies — detailed anatomy survey",
          "18-20 weeks",
          "Detects structural anomalies: NTD, cardiac defects, renal anomalies. Month 5 — Avayava assessment",
        ],
        [
          "<strong>Dual/Quadruple Marker</strong>",
          "Biochemical screening for aneuploidies",
          "Dual: 11-13 wk; Quad: 15-18 wk",
          "PAPP-A, free β-hCG, AFP, uE3, Inhibin-A. Risk calculation for Down syndrome, NTD",
        ],
        [
          "<strong>Growth Scan</strong>",
          "Assess fetal growth (BPD, HC, AC, FL)",
          "28-32 weeks onwards",
          "Detects IUGR, macrosomia. Correlates with Month 7-8 Garbha Vriddhi assessment",
        ],
        [
          "<strong>Doppler Studies</strong>",
          "Assess uteroplacental and fetal blood flow",
          "24 weeks onwards",
          "Umbilical artery PI/RI, MCA, uterine artery — detect placental insufficiency. Relates to Garbha Poshana concept",
        ],
        [
          "<strong>Amniocentesis</strong>",
          "Fetal karyotyping, biochemical analysis",
          "15-18 weeks",
          "Confirms chromosomal abnormalities. AFP for NTD. Assess fetal maturity via L/S ratio",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Embryological Development — Decision Tree for Clinical Assessment",
    diagramSvg: `
      <svg viewBox="0 0 850 700" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
        <style>
          .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
          .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
          .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
          .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
          .box-purple { fill: #F3E5F5; stroke: #AB47BC; stroke-width: 2; rx: 10; }
          .label { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; text-anchor: middle; }
          .label-bold { font-family: 'DM Sans', sans-serif; font-size: 14px; fill: #333; font-weight: bold; text-anchor: middle; }
          .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
          .arrow-green { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#arrowhead-green); }
          .small { font-size: 11px; }
          .phase-label { font-size: 12px; fill: #666; font-style: italic; text-anchor: middle; }
        </style>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#C8712A" />
          </marker>
          <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A" />
          </marker>
        </defs>

        <!-- Title -->
        <text class="label-bold" x="425" y="25" style="font-size:16px;">Garbha Sharira — Development Timeline & Clinical Assessment</text>

        <!-- Phase 1: Conception -->
        <rect class="box" x="300" y="40" width="250" height="50" />
        <text class="label-bold" x="425" y="60">Garbhotpatti (Conception)</text>
        <text class="label small" x="425" y="78">Shukra + Shonita + Atma → Kukshi</text>

        <line class="arrow" x1="425" y1="90" x2="425" y2="115" />

        <!-- Phase 2: Early Embryo -->
        <rect class="box-blue" x="275" y="115" width="300" height="55" />
        <text class="label-bold" x="425" y="135">Month 1-2: Kalala → Ghana/Peshi</text>
        <text class="label small" x="425" y="150">Pre-embryonic & embryonic period</text>
        <text class="label small" x="425" y="163">USG: Dating scan (CRL) at 6-12 wk</text>

        <line class="arrow" x1="425" y1="170" x2="425" y2="195" />

        <!-- Phase 3: Organogenesis -->
        <rect class="box-purple" x="250" y="195" width="350" height="55" />
        <text class="label-bold" x="425" y="215">Month 3: Pancha Piṇḍika (Organogenesis)</text>
        <text class="label small" x="425" y="230">All body parts differentiate</text>
        <text class="label small" x="425" y="243">NT Scan (11-13 wk) | Dual Marker Screening</text>

        <line class="arrow" x1="425" y1="250" x2="425" y2="275" />

        <!-- Phase 4: Stabilization -->
        <rect class="box-green" x="260" y="275" width="330" height="55" />
        <text class="label-bold" x="425" y="295">Month 4-5: Garbha Sthirata (Stabilization)</text>
        <text class="label small" x="425" y="310">Hridaya manifest, Dauhrida, Mana awakens</text>
        <text class="label small" x="425" y="323">Anomaly Scan (TIFFA) at 18-20 wk</text>

        <line class="arrow" x1="425" y1="330" x2="425" y2="355" />

        <!-- Phase 5: Maturation -->
        <rect class="box-blue" x="250" y="355" width="350" height="55" />
        <text class="label-bold" x="425" y="375">Month 6-7: Medha-Bala Development</text>
        <text class="label small" x="425" y="390">Surfactant begins, Viability threshold</text>
        <text class="label small" x="425" y="403">OGTT for GDM | Growth Scan | Doppler</text>

        <line class="arrow" x1="425" y1="410" x2="425" y2="435" />

        <!-- Phase 6: Pre-term concerns -->
        <rect class="box-red" x="265" y="435" width="320" height="55" />
        <text class="label-bold" x="425" y="455">Month 8: Ojas Achala (Unstable Phase)</text>
        <text class="label small" x="425" y="470">Ojas transfers between mother-fetus</text>
        <text class="label small" x="425" y="483">Steroid cover if preterm risk | NST/BPP</text>

        <line class="arrow" x1="425" y1="490" x2="425" y2="515" />

        <!-- Phase 7: Term -->
        <rect class="box-green" x="265" y="515" width="320" height="55" />
        <text class="label-bold" x="425" y="535">Month 9: Garbha Paripurna (Term)</text>
        <text class="label small" x="425" y="550">Apana Vayu activates for Prasava</text>
        <text class="label small" x="425" y="563">Bishop Score | NST | Plan delivery</text>

        <!-- Side annotations -->
        <rect class="box" x="20" y="115" width="220" height="130" />
        <text class="label-bold" x="130" y="140">Ayurvedic Assessment</text>
        <text class="label small" x="130" y="158">Garbha Sambhava Samagri</text>
        <text class="label small" x="130" y="173">status — confirm Ritu,</text>
        <text class="label small" x="130" y="188">Kshetra, Ambu, Beeja</text>
        <text class="label small" x="130" y="203">adequate for Garbha</text>
        <text class="label small" x="130" y="218">Dharana to proceed</text>
        <text class="label small" x="130" y="236">Panchamahabhuta balance</text>

        <rect class="box" x="630" y="115" width="210" height="130" />
        <text class="label-bold" x="735" y="140">Modern Assessment</text>
        <text class="label small" x="735" y="158">Confirm IUP on USG</text>
        <text class="label small" x="735" y="173">Date pregnancy (CRL)</text>
        <text class="label small" x="735" y="188">Rule out ectopic/molar</text>
        <text class="label small" x="735" y="203">Booking investigations</text>
        <text class="label small" x="735" y="218">Blood group, Hb, HIV,</text>
        <text class="label small" x="735" y="236">HBsAg, VDRL, urine</text>

        <!-- Integration box -->
        <rect class="box-green" x="120" y="610" width="610" height="70" />
        <text class="label-bold" x="425" y="635">Integrated Approach: Classical Garbha Sharira + Modern Embryology</text>
        <text class="label" x="425" y="655">Use Masanumasika framework for patient counselling + Modern USG/Labs for surveillance</text>
        <text class="label" x="425" y="670">Garbhini Paricharya month-wise regimen complements standard ANC schedule</text>

        <line class="arrow-green" x1="425" y1="570" x2="425" y2="610" />
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for Garbha Sharira:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>The Kalala stage (Month 1) corresponds to the pre-embryonic period — the most sensitive to all-or-nothing effects of teratogens</li>
        <li>Month 3 (Pancha Piṇḍika) marks the end of organogenesis — NT scan timing aligns with this stage for chromosomal screening</li>
        <li>Garbha Sthirata (Month 4) correlates with the drop in miscarriage risk as the pregnancy stabilizes and placenta takes over from the corpus luteum</li>
        <li>The 8th month Ojas instability concept may explain the observation that neonatal outcomes for 8-month deliveries were historically poorer than 7-month (likely related to incomplete surfactant production in the transition period)</li>
        <li>Matrija-Pitrija Bhava classification is an extremely common exam question — memorize the complete lists from Sushruta Sharira 3/30</li>
        <li>Panchamahabhuta role in organogenesis can be correlated with germ layer theory for integrative answers</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Classical Garbha Sharira & Modern Embryology</h3>
    <div class="space-y-4">
      <p>Ayurvedic embryology, though ancient, demonstrates remarkable parallels with modern developmental biology. The systematic month-wise description of Masanumasika Garbha Vriddhi provides a clinically applicable framework that complements modern embryological milestones.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Contributions</h4>
          <ul class="space-y-1 text-sm">
            <li>• Holistic six-factor model (Shadanga Garbha) considers physical, mental, and spiritual dimensions</li>
            <li>• Matrija-Pitrija classification provides a unique lens on parental contributions</li>
            <li>• Panchamahabhuta theory gives a macro framework for understanding tissue differentiation</li>
            <li>• Month 8 Ojas concept highlights the importance of timing in fetal maturation</li>
            <li>• Garbha Sambhava Samagri provides a comprehensive fertility assessment model</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>• Precise molecular understanding of gametogenesis, fertilization, and implantation</li>
            <li>• Germ layer theory (ectoderm, mesoderm, endoderm) with detailed organ derivation</li>
            <li>• Genetic and chromosomal basis of development and malformations</li>
            <li>• Real-time USG visualization of embryonic and fetal development</li>
            <li>• Biochemical screening for chromosomal and structural anomalies</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Key Integration Points</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Kalala = Blastocyst:</strong> The undifferentiated jelly-like mass parallels the pre-embryonic ball of cells before germ layer formation</li>
          <li><strong>Pancha Piṇḍika = Limb bud stage:</strong> Five buds appearing in month 3 directly correlates with limb bud morphogenesis at weeks 4-8</li>
          <li><strong>Hridaya in Month 4 = Cardiac maturation:</strong> While the heart tube beats from Day 22, full four-chamber development is complete by week 12-16</li>
          <li><strong>Ojas concept = Surfactant/Immune maturity:</strong> The 8th month instability parallels the critical window of pulmonary surfactant production (24-36 weeks)</li>
          <li><strong>Matrija-Pitrija = Genetic contribution:</strong> Soft tissue (maternal) and structural tissue (paternal) classification offers an interesting organizational framework</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Garbha Sambhava Samagri (Charaka Sha. 2/6): Ritu (fertile period), Kshetra (uterus), Ambu (nourishment), Beeja (gametes) — the 4 essential factors. Sushruta adds Atma, Vayu, Mana.",
    "Shadanga Garbha (Charaka Sha. 3/3): Six factors — Matrija, Pitrija, Atmaja, Sattvaja, Satmyaja, Rasaja. Each contributes specific organs and qualities to the individual.",
    "Matrija Bhava (Sushruta Sha. 3/30): Skin, blood, muscle, fat, navel, heart, liver, spleen, kidney, intestines. Pitrija: Hair, nails, bones, teeth, tendons, veins, arteries.",
    "Masanumasika: Month 1 = Kalala (jelly), Month 2 = Ghana/Peshi/Arbuda (solidification + sex determination), Month 3 = Pancha Piṇḍika (5 buds — head and limbs).",
    "Month 4 = Garbha Sthirata + Hridaya formation + Chetana Dhatu expression + Dauhrida onset. Clinical: miscarriage risk drops, anomaly scan window approaches.",
    "Month 5-6: Mana awakens (Month 5), Medha-Bala-Varna develop (Month 6). Modern: Surfactant production begins at Week 24 (viability threshold).",
    "Month 7 = Sarva Avayava Paripurnata (all organs complete). Month 8 = Ojas Achala (unstable Ojas). Month 9 = Garbha Paripurna (fully mature, Apana Vayu activates).",
    "Panchamahabhuta in Garbha: Prithvi → solidity (bones), Jala → cohesion (fluids), Agni → metabolism, Vayu → movements, Akasha → body cavities.",
    "Modern germ layers: Ectoderm → skin, CNS, eyes, ears. Mesoderm → muscles, bones, blood, heart, kidneys. Endoderm → GI tract, liver, lungs, thyroid.",
    "Critical period of organogenesis: Weeks 3-8 (embryonic period). Neural tube closes Day 23-28. Heart tube beats Day 22. Limb buds Week 4-5.",
    "Teratogen susceptibility: Maximum during embryonic period (Wk 3-8). All-or-nothing in pre-embryonic (Wk 1-2). Growth/functional effects in fetal period.",
    "USG landmarks: GS at 5 wk, Yolk sac 5.5 wk, Fetal pole 6 wk, FHR 6-7 wk (TVS). NT scan 11-13+6 wk. Anomaly scan 18-20 wk.",
    "Placenta (Aparaa): Formed from chorion frondosum + decidua basalis. Functions: gas exchange, nutrition, hormones (hCG, hPL, estrogen, progesterone), immunological barrier.",
    "Fetal circulation: 3 shunts — Ductus Venosus (UV→IVC bypassing liver), Foramen Ovale (RA→LA), Ductus Arteriosus (PA→Aorta). All close at birth.",
    "Amniotic fluid: Produced by fetal urine and lung secretions. Volume 800-1000 mL at term. Functions: protection, temperature regulation, fetal movements, lung development.",
  ],

  mnemonics: [
    {
      title: "Garbha Sambhava Samagri (4 Factors — Charaka)",
      acronym: "RKAB",
      expansions: [
        "Ritu — proper fertile period (season)",
        "Kshetra — healthy uterus (field)",
        "Ambu — nourishing fluid (water)",
        "Beeja — healthy gametes (seed)",
      ],
    },
    {
      title: "Shadanga Garbha (6 Factors)",
      acronym: "MAP-SSR",
      expansions: [
        "Matrija — maternal contribution (soft tissues)",
        "Atmaja — soul-derived (consciousness, Prana)",
        "Pitrija — paternal contribution (structural tissues)",
        "Sattvaja — mind-derived (temperament)",
        "Satmyaja — habitual (resistance, complexion)",
        "Rasaja — nutritional (growth, body bulk)",
      ],
    },
    {
      title: "Month-wise Garbha Vriddhi Keywords",
      acronym: "KG-PSM-MOP",
      expansions: [
        "Kalala (Month 1 — jelly)",
        "Ghana/Peshi (Month 2 — solid/fleshy)",
        "Pancha Piṇḍika (Month 3 — five buds)",
        "Sthirata (Month 4 — stability + Hridaya)",
        "Mana (Month 5 — mind awakens)",
        "Medha (Month 6 — intellect + Bala)",
        "Ojas established (Month 7 — complete organs)",
        "Ojas unstable (Month 8 — Achala phase)",
        "Prasava ready (Month 9 — Apana Vayu activates)",
      ],
    },
    {
      title: "Germ Layer Derivatives (Modern)",
      acronym: "ECT-MESO-ENDO",
      expansions: [
        "ECToderm: Skin, CNS (brain + spinal cord), Eyes (lens, retina), Ears, Tooth enamel",
        "MESOderm: Muscles, Bones, Blood, Heart, Kidneys, Gonads, Connective tissue",
        "ENDOderm: GI tract lining, Liver, Pancreas, Lungs, Thyroid, Urinary bladder",
      ],
    },
  ],
};

export function getM2Content() {
  return m2Content;
}
