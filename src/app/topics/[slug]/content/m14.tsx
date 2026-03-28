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
// M14 — GARBHINI VYADHI VISHESHANA (High Risk Pregnancy)
// ────────────────────────────────────────────────────────

const m14Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 8 (Garbhini Vyadhi)",
    "Charaka Chikitsa Sthana Ch. 6 (Prameha Chikitsa)",
    "Sushruta Nidana Sthana Ch. 6 (Prameha Nidana)",
    "Sushruta Sharira Sthana Ch. 10",
    "Kashyapa Samhita — Khila Sthana",
    "Ashtanga Hridaya Sharira Sthana Ch. 1-2",
    "Williams Obstetrics Ch. 52-57",
    "DC Dutta Ch. 17-19",
    "Ian Donald's Practical Obstetric Problems",
    "FOGSI Guidelines — High Risk Pregnancy",
  ],

  units: [
    {
      title: "Garbhini Vyaapad & Upaghatakara Bhava",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the Ayurvedic concept of diseases occurring during pregnancy (Garbhini Vyadhi/Vyaapad) as described in Charaka Sharira Sthana Chapter 8. Charaka lists specific Garbhopaghatakara Bhava (factors harmful to pregnancy) and describes Garbhini Chikitsa principles including dietary restrictions (Pathya-Apathya), behavioral guidelines, and disease management during pregnancy. The unique vulnerability of the Garbhini (pregnant woman) to Dosha imbalance forms the foundation for understanding high-risk pregnancy in Ayurveda."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Garbhini Paricharya deviation leading to Garbhini Vyadhi"),
          React.createElement("li", null, "Garbhopaghatakara Bhava — harmful factors (Ahara, Vihara, Manasika)"),
          React.createElement("li", null, "Charaka's list of diseases treatable vs untreatable in Garbhini"),
          React.createElement("li", null, "Principle of Mridu Aushadha (mild medications) in pregnancy"),
          React.createElement("li", null, "Garbha Srava (threatened abortion) and Garbha Pata (miscarriage)")
        )
      ),
    },
    {
      title: "Gestational Diabetes Mellitus (Prameha in Garbhini)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers GDM — the most common metabolic disorder in pregnancy. The Ayurvedic concept of Prameha (urinary disorders with Kapha-Meda predominance) provides a framework for understanding glucose metabolism derangement during pregnancy. Charaka's Prameha Nidana (Chikitsa Sthana Chapter 6) describes Aharaja and Viharaja causes that closely parallel modern GDM risk factors. Screening, diagnosis (IADPSG criteria, DIPSI), and management including medical nutrition therapy and insulin are covered."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Prameha Nidana — Kapha-Meda Dushti leading to Madhumeha correlation"),
          React.createElement("li", null, "GDM screening: OGTT (75g), DIPSI criteria, IADPSG thresholds"),
          React.createElement("li", null, "Fetal complications: macrosomia, shoulder dystocia, neonatal hypoglycemia"),
          React.createElement("li", null, "Maternal complications: pre-eclampsia, polyhydramnios, operative delivery"),
          React.createElement("li", null, "Ayurvedic management: Nisha Amalaki, Shilajatu, Pathya Ahara")
        )
      ),
    },
    {
      title: "Anemia in Pregnancy (Garbhini Pandu)",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "Anemia is the most prevalent medical disorder in pregnancy in India, affecting up to 50-80% of pregnant women. Ayurvedic Pandu Roga (pallor disease due to Pitta-Rakta Dushti) provides a comprehensive pathophysiological and therapeutic framework. This unit covers iron deficiency anemia, megaloblastic anemia, and hemolytic anemias in pregnancy, along with Ayurvedic Pandughna Chikitsa using Loha Bhasma, Dhatri Lauha, and Punarnava Mandura."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Pandu Roga Nidana — Pitta Prakopa leading to Rakta Dhatu Kshaya"),
          React.createElement("li", null, "WHO classification: mild (10-10.9), moderate (7-9.9), severe (<7 g/dL)"),
          React.createElement("li", null, "Iron deficiency: most common cause — oral iron vs IV iron indications"),
          React.createElement("li", null, "Megaloblastic: folate/B12 deficiency — neural tube defects prevention"),
          React.createElement("li", null, "Ayurvedic: Punarnava Mandura, Dhatri Lauha, Loha Bhasma, Navayasa Lauha")
        )
      ),
    },
    {
      title: "Heart Disease, Thyroid Disorders & UTI in Pregnancy",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers other major medical disorders complicating pregnancy. Heart disease in pregnancy (Hridroga in Garbhini) — including rheumatic heart disease, congenital heart disease, and peripartum cardiomyopathy. Thyroid disorders — both hypothyroidism and hyperthyroidism affecting maternal and fetal outcomes. UTI in pregnancy (Mutrakrichchhra in Garbhini) — asymptomatic bacteriuria, cystitis, and pyelonephritis with their Ayurvedic correlates."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Heart disease: NYHA classification, high-risk conditions (Eisenmenger, pulmonary hypertension)"),
          React.createElement("li", null, "Hridroga management: Arjuna, Pushkarmula in Garbhini context"),
          React.createElement("li", null, "Hypothyroidism: screening, TSH targets, levothyroxine dose adjustment"),
          React.createElement("li", null, "Hyperthyroidism: PTU in first trimester, methimazole later; thyroid storm"),
          React.createElement("li", null, "UTI: asymptomatic bacteriuria screening, Gokshuradi Kwatha, antibiotics")
        )
      ),
    },
  ],

  orientation: {
    why: "Garbhini Vyadhi Visheshana (High Risk Pregnancy) is among the most clinically important topics in Prasuti Tantra. Charaka's detailed description of diseases in pregnancy and their management principles provides the Ayurvedic framework for managing medical disorders in pregnancy. With the increasing prevalence of GDM, anemia, thyroid disorders, and cardiac disease in pregnancy, integrative management combining Ayurvedic Pathya-Aushadha with modern monitoring is essential for safe maternal and fetal outcomes.",
    examWeight: "Extremely high-yield for university exams. GDM (Prameha in Garbhini) and Anemia (Garbhini Pandu) are among the most frequently asked topics — both as long essays (20 marks) and short notes (10 marks). Heart disease classification (NYHA), thyroid disorders management, and UTI in pregnancy appear as short notes and MCQs. Garbhini Vyadhi shlokas from Charaka and Ayurvedic formulations (Punarnava Mandura, Dhatri Lauha) are very commonly asked. Risk scoring systems feature in MCQs.",
  },

  definition: {
    ayurveda: `
      <p><strong>Garbhini Vyadhi</strong> refers to diseases occurring during pregnancy. Charaka states that the pregnant woman (Garbhini) is like a vessel filled with oil — she must be handled with utmost care, and even minor disturbances in Dosha balance can have serious consequences for both mother and fetus.</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"गर्भिणी तैलपूर्णमिव पात्रम् — अतिसूक्ष्मचिकित्सा कार्या"</p>
      <p class="mt-2">Charaka lists <strong>Garbhopaghatakara Bhava</strong> (factors harmful to pregnancy) and describes that diseases in Garbhini should be treated with <strong>Mridu Aushadha</strong> (mild medicines) that are simultaneously beneficial to both Garbha and Garbhini. Harsh purgatives, emetics, and Tikshna (sharp) drugs are contraindicated.</p>
    `,
    modern: `
      <p><strong>High-risk pregnancy</strong> is defined as any pregnancy in which there is a factor — maternal or fetal — that potentially places the mother, the fetus, or both at higher risk for morbidity or mortality than the general obstetric population.</p>
      <p class="mt-2"><strong>Prevalence:</strong> Approximately 20-30% of all pregnancies are classified as high-risk. In India, anemia (50-80%), GDM (10-15%), hypertensive disorders (8-10%), and thyroid dysfunction (10-15%) are the most common medical complications.</p>
      <p class="mt-2"><strong>Risk scoring systems</strong> (modified Coopland, ICMR criteria) help identify high-risk pregnancies for targeted surveillance and referral.</p>
    `,
    classification: {
      title: "Classification of Medical Disorders in Pregnancy",
      headers: ["Category", "Ayurvedic Concept", "Modern Conditions", "Risk Level"],
      rows: [
        [
          "<strong>Metabolic</strong>",
          "Prameha in Garbhini (Kapha-Meda Dushti)",
          "Gestational Diabetes Mellitus (GDM), Pre-existing DM",
          "High — macrosomia, shoulder dystocia, neonatal hypoglycemia, pre-eclampsia",
        ],
        [
          "<strong>Hematological</strong>",
          "Garbhini Pandu (Pitta-Rakta Kshaya)",
          "Iron deficiency anemia, Megaloblastic anemia, Sickle cell, Thalassemia",
          "Moderate to High — PPH risk, IUGR, preterm, cardiac failure if severe",
        ],
        [
          "<strong>Cardiovascular</strong>",
          "Hridroga in Garbhini (Vata-Pitta Prakopa)",
          "RHD (mitral stenosis), CHD, Peripartum cardiomyopathy",
          "Very High — maternal mortality up to 25-50% in Eisenmenger/pulmonary HTN",
        ],
        [
          "<strong>Endocrine</strong>",
          "Agni Mandya / Dhatvagni Vikara in Garbhini",
          "Hypothyroidism, Hyperthyroidism, Addison's disease",
          "Moderate — intellectual disability in fetus (hypothyroidism), thyroid storm risk",
        ],
        [
          "<strong>Urinary</strong>",
          "Mutrakrichchhra in Garbhini (Vata-Pitta in Mutravaha Srotas)",
          "Asymptomatic bacteriuria, Cystitis, Pyelonephritis",
          "Moderate — preterm labour, sepsis if untreated pyelonephritis",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Charaka Sharira Sthana 8/21",
      devanagari:
        "गर्भिण्याः खलु रोगेषु सर्वेषु मृदुभेषजम् |\nहितं मधुरशीतं च गर्भस्थापनमेव च |\nतत्र तीक्ष्णौषधानि वर्जयेत् — वमनविरेचनादीनि ||",
      transliteration:
        "garbhiṇyāḥ khalu rogeṣu sarveṣu mṛdubheṣajam |\nhitaṃ madhuraśītaṃ ca garbhasthāpanameva ca |\ntatra tīkṣṇauṣadhāni varjayet — vamanavireccanādīni ||",
      meaning:
        "In all diseases of the pregnant woman (Garbhini), mild medicines (Mridu Bheshaja) should be used. They should be Madhura (sweet), Shita (cooling), and Garbha Sthapana (pregnancy-sustaining). Sharp/strong drugs (Tikshna Aushadha) including emetics (Vamana) and strong purgatives (Virechana) should be avoided.",
      clinicalNote:
        "This is the foundational principle of drug safety in pregnancy — the Ayurvedic equivalent of FDA pregnancy categories. Mridu Bheshaja correlates with Category A/B drugs. Garbha Sthapana drugs (Aindri, Brahmi, Shatavari, Ashwagandha) form the backbone of safe Ayurvedic prescribing in pregnancy. Tikshna drugs are teratogenic equivalents.",
    },
    {
      source: "Charaka Chikitsa Sthana 6/4 (Prameha Nidana)",
      devanagari:
        "आस्यासुखं स्वप्नसुखं दधीनि ग्राम्यौदकानूपरसाः पयांसि |\nनवान्नपानं गुडवैकृतं च प्रमेहहेतुः कफकृच्च सर्वम् ||",
      transliteration:
        "āsyāsukhaṃ svapnasukhaṃ dadhīni grāmyaudakānūparasāḥ payāṃsi |\nnavānnapānaṃ guḍavaikṛtaṃ ca pramehahetuḥ kaphakṛcca sarvam ||",
      meaning:
        "Sedentary lifestyle (Asya Sukha), excessive sleep (Svapna Sukha), intake of curd (Dadhi), meat of domesticated/aquatic/marshy animals (Gramya-Audaka-Anupa Rasa), milk products (Payamsi), new grains (Navanna), jaggery preparations (Guda Vaikrita), and all Kapha-aggravating factors are the causes of Prameha (diabetes).",
      clinicalNote:
        "These Prameha Nidana perfectly correlate with modern GDM risk factors: sedentary lifestyle, obesity (Kapha-Meda Vriddhi), high-calorie diet rich in carbohydrates and fats. Modifying these factors forms the basis of Medical Nutrition Therapy (MNT) — the first line of GDM management. Charaka's dietary guidelines directly inform Pathya for Garbhini Prameha.",
    },
    {
      source: "Charaka Chikitsa Sthana 16/13-14 (Pandu Roga)",
      devanagari:
        "पित्तं प्रकुपितं रक्तं दूषयत्वचमाश्रितम् |\nमांसं शिथिलयत्येतत् पाण्डुरोगं करोति च |\nहरिद्राभं शरीरं स्यात् निस्तेजं बलवर्जितम् ||",
      transliteration:
        "pittaṃ prakupitaṃ raktaṃ dūṣayatvacamāśritam |\nmāṃsaṃ śithilayatyetat pāṇḍurogaṃ karoti ca |\nharidrābhaṃ śarīraṃ syāt nistejaṃ balavarjitam ||",
      meaning:
        "Aggravated Pitta vitiates Rakta Dhatu (blood), lodges in Twak (skin) and Mamsa (muscle), making them flaccid. This produces Pandu Roga (anemia/pallor disease). The body becomes yellowish (Haridra Abha), lusterless (Nisteja), and devoid of strength (Bala Varjita).",
      clinicalNote:
        "This precisely describes iron deficiency anemia: Pitta Prakopa (increased metabolic demand in pregnancy) depletes Rakta Dhatu, leading to pallor, weakness, and loss of complexion. The Haridra Abha (yellowish tinge) may correspond to combined iron and folate deficiency. Modern: Hb drops physiologically in pregnancy due to hemodilution, but pathological anemia (Hb <11 g/dL) requires treatment.",
    },
    {
      source: "Ashtanga Hridaya Sharira Sthana 1/48-49",
      devanagari:
        "गर्भिण्या व्याधिषु प्रायो द्विजन्मा बलमाश्रिता |\nगर्भं च मातरं चैव हितं यत्तत् प्रयोजयेत् |\nन तीक्ष्णं न च रूक्षं च विषसन्निभमौषधम् ||",
      transliteration:
        "garbhiṇyā vyādhiṣu prāyo dvijanmā balamāśritā |\ngarbhaṃ ca mātaraṃ caiva hitaṃ yattat prayojayet |\nna tīkṣṇaṃ na ca rūkṣaṃ ca viṣasannibhamauṣadham ||",
      meaning:
        "In diseases of the Garbhini, the physician should rely on strength (Bala) assessment. What is beneficial to both the Garbha (fetus) and the Mata (mother) should be employed. Neither sharp (Tikshna), nor drying (Ruksha), nor poison-like (Visha Sannibha) medicines should be administered.",
      clinicalNote:
        "Vagbhata emphasizes the dual consideration in treating pregnant women — benefit to both mother and fetus. This parallels modern pharmacology's risk-benefit analysis. Ruksha and Tikshna drugs may cause Garbha Srava (abortion) by Vata Prakopa. The principle of avoiding Visha Sannibha Aushadha corresponds to avoiding teratogenic drugs (Category X: methotrexate, warfarin, isotretinoin).",
    },
  ],

  dualCols: [
    {
      title: "Gestational Diabetes Mellitus",
      ayurvedaTitle: "Garbhini Prameha (Kapha-Meda Dushti)",
      modernTitle: "GDM — Screening, Diagnosis & Management",
      ayurvedaContent: `
        <p><strong>Ayurvedic understanding of Prameha in Garbhini:</strong></p>
        <ul class="space-y-2">
          <li><strong>Samprapti:</strong> Kapha Prakopa + Meda Dushti + Agni Mandya during pregnancy. The physiological Kapha dominance of pregnancy (Garbhakala Kapha Vriddhi) combined with Beeja Dosha (genetic predisposition) and Aharaja Nidana (dietary excess) leads to Prameha</li>
          <li><strong>Lakshana:</strong> Prabhuta Mutrata (polyuria), Avila Mutrata (turbid urine), Trishna (excessive thirst), Daurbalya (weakness), Sthoulya (obesity)</li>
          <li><strong>Chikitsa:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Nisha (Haridra) + Amalaki Churna — anti-hyperglycemic</li>
              <li>Shilajatu — improves glucose metabolism</li>
              <li>Jambu Beeja Churna — traditional antidiabetic</li>
              <li>Pathya: Yava (barley), Mudga (green gram), Triphala, bitter vegetables</li>
              <li>Apathya: Navanna (new rice), Guda (jaggery), excessive Madhura-Snigdha</li>
            </ul>
          </li>
        </ul>
      `,
      modernContent: `
        <p><strong>GDM screening and management:</strong></p>
        <ul class="space-y-2">
          <li><strong>Screening:</strong> Universal screening recommended in India (DIPSI guidelines)
            <ul class="list-disc pl-4 mt-1">
              <li>DIPSI: 75g OGTT (non-fasting), 2-hr value &ge;140 mg/dL = GDM</li>
              <li>IADPSG: 75g OGTT (fasting), FPG &ge;92, 1-hr &ge;180, 2-hr &ge;153 mg/dL (any one positive)</li>
              <li>Timing: 24-28 weeks (earlier if high-risk)</li>
            </ul>
          </li>
          <li><strong>Management:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Medical Nutrition Therapy (MNT): 1800-2200 kcal, 40% carbs, 20% protein, 40% fat</li>
              <li>Exercise: 30 min moderate activity daily</li>
              <li>Target: FPG &lt;95, 1-hr PP &lt;140, 2-hr PP &lt;120 mg/dL</li>
              <li>Insulin: if targets not met after 2 weeks MNT. Human insulin preferred</li>
              <li>Metformin: considered safe; crosses placenta</li>
            </ul>
          </li>
          <li><strong>Delivery:</strong> No GDM-specific indication for CS. Induce at 38-39 wk if on insulin. EFW >4 kg: consider CS</li>
        </ul>
      `,
    },
    {
      title: "Anemia in Pregnancy",
      ayurvedaTitle: "Garbhini Pandu (Pitta-Rakta Dushti)",
      modernTitle: "Iron Deficiency Anemia — Diagnosis & Treatment",
      ayurvedaContent: `
        <p><strong>Ayurvedic management of Pandu in Garbhini:</strong></p>
        <ul class="space-y-2">
          <li><strong>Samprapti:</strong> Pitta Prakopa (increased metabolic fire in pregnancy) leading to Rakta Dhatu Kshaya (depletion of blood tissue). Agni Mandya contributes to poor iron absorption. Ama formation obstructs Raktavaha Srotas</li>
          <li><strong>Key formulations:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li><strong>Punarnava Mandura</strong> — chief Pandughna Yoga; contains Mandura Bhasma (iron calx), Punarnava, Triphala, Trikatu</li>
              <li><strong>Dhatri Lauha</strong> — Amalaki + Lauha Bhasma; iron supplementation with Vitamin C (Amalaki) for absorption</li>
              <li><strong>Navayasa Lauha</strong> — 9-ingredient iron preparation for Pandu</li>
              <li><strong>Loha Bhasma</strong> — processed iron; better tolerated than modern oral iron tablets</li>
              <li><strong>Dadimadi Ghrita</strong> — pomegranate-based ghee for Rakta Vardhaka effect</li>
            </ul>
          </li>
          <li><strong>Pathya:</strong> Dadima (pomegranate), Palandu (onion), Amalaki, Yava, green leafy vegetables, jaggery with sesame</li>
        </ul>
      `,
      modernContent: `
        <p><strong>Classification (WHO in pregnancy):</strong></p>
        <table class="w-full mt-1 text-sm border">
          <tr class="bg-gray-100"><th class="p-1 border">Severity</th><th class="p-1 border">Hemoglobin</th><th class="p-1 border">Management</th></tr>
          <tr><td class="p-1 border">Mild</td><td class="p-1 border">10-10.9 g/dL</td><td class="p-1 border">Oral iron (100 mg elemental Fe + 0.5 mg folic acid)</td></tr>
          <tr><td class="p-1 border">Moderate</td><td class="p-1 border">7-9.9 g/dL</td><td class="p-1 border">Oral iron; consider IV iron if non-compliant or near term</td></tr>
          <tr><td class="p-1 border">Severe</td><td class="p-1 border">&lt;7 g/dL</td><td class="p-1 border">IV iron (Ferric carboxymaltose / Iron sucrose); blood transfusion if Hb&lt;5 or heart failure</td></tr>
          <tr><td class="p-1 border">Very Severe</td><td class="p-1 border">&lt;4 g/dL</td><td class="p-1 border">Exchange transfusion / packed RBC; ICU monitoring</td></tr>
        </table>
        <p class="mt-2"><strong>Iron investigations:</strong> Serum ferritin (&lt;15 = depleted stores), serum iron, TIBC (increased in IDA), peripheral smear (microcytic hypochromic).</p>
        <p class="mt-2"><strong>IV Iron (Iron Sucrose):</strong> Total dose = (Target Hb - Actual Hb) x Weight (kg) x 2.4 + 500 mg. Given as 200 mg in 100 mL NS over 15-30 min, alternate days.</p>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "High-Risk Pregnancy — Clinical Features & Risk Assessment",
      headers: ["Condition", "Key Clinical Features", "Fetal Risks", "Risk Score Factors"],
      rows: [
        [
          "<strong>GDM</strong>",
          "Often asymptomatic; polyuria, polydipsia, recurrent candidiasis, large-for-dates uterus, polyhydramnios, previous macrosomic baby",
          "Macrosomia (>4 kg), shoulder dystocia, neonatal hypoglycemia, RDS, polycythemia, congenital anomalies (pre-existing DM), IUFD",
          "Age >25, BMI >30, family history DM, previous GDM, PCOS, previous macrosomia, previous unexplained stillbirth",
        ],
        [
          "<strong>Anemia</strong>",
          "Pallor (Panduta), fatigue, dyspnea on exertion, palpitations, tachycardia, koilonychia, glossitis, angular stomatitis, pica, edema",
          "IUGR, preterm birth, low birth weight, increased perinatal mortality, poor APGAR scores",
          "Low socioeconomic status, multi-parity, short interpregnancy interval, vegetarian diet, hookworm infestation, previous PPH",
        ],
        [
          "<strong>Heart Disease</strong>",
          "Dyspnea (NYHA class), orthopnea, PND, palpitations, murmurs, JVP elevation, peripheral edema, cyanosis (Eisenmenger)",
          "IUGR, preterm, fetal loss. CHD risk increased if maternal CHD (3-5% transmission)",
          "NYHA Class III-IV, prosthetic valves, Eisenmenger syndrome, pulmonary hypertension, Marfan with aortic root >4 cm, peripartum cardiomyopathy",
        ],
        [
          "<strong>Thyroid Disorders</strong>",
          "Hypothyroid: fatigue, weight gain, cold intolerance, constipation, bradycardia. Hyperthyroid: tremors, tachycardia, weight loss, heat intolerance, exophthalmos",
          "Hypothyroid: intellectual disability, cretinism, IUGR, preterm. Hyperthyroid: fetal thyrotoxicosis, IUGR, prematurity, fetal goiter",
          "Personal/family history thyroid disease, type 1 DM, age >30, history of miscarriage, anti-TPO antibodies positive",
        ],
        [
          "<strong>UTI in Pregnancy</strong>",
          "Asymptomatic bacteriuria (no symptoms, +ve urine culture), cystitis (dysuria, frequency, urgency), pyelonephritis (high fever, loin pain, rigors, vomiting)",
          "Preterm labour (30% risk with untreated asymptomatic bacteriuria), PROM, low birth weight, neonatal sepsis",
          "Previous UTI, structural urinary anomalies, DM, sickle cell trait, renal calculi",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Investigations for High-Risk Pregnancy Screening",
      headers: ["Investigation", "Condition Screened", "Timing", "Key Thresholds"],
      rows: [
        [
          "<strong>75g OGTT</strong>",
          "GDM",
          "24-28 weeks (earlier if high-risk)",
          "DIPSI: 2-hr &ge;140 mg/dL. IADPSG: FPG &ge;92, 1-hr &ge;180, 2-hr &ge;153 mg/dL",
        ],
        [
          "<strong>Complete Blood Count</strong>",
          "Anemia, thrombocytopenia",
          "Booking visit, 28 wk, 36 wk",
          "Hb &lt;11 g/dL = anemia. MCV &lt;80 = microcytic, MCV >100 = megaloblastic. Plt &lt;150K = investigate",
        ],
        [
          "<strong>Serum Ferritin</strong>",
          "Iron deficiency",
          "With first CBC",
          "&lt;15 ng/mL = depleted iron stores. &lt;30 in pregnancy = relative deficiency. Best single test for iron status",
        ],
        [
          "<strong>Thyroid Profile (TSH, FT4)</strong>",
          "Thyroid disorders",
          "Booking visit (universal screening recommended in India)",
          "TSH &gt;2.5 mIU/L in T1 or &gt;3.0 in T2/T3: treat with levothyroxine. TSH &lt;0.1 with high FT4: investigate hyperthyroidism",
        ],
        [
          "<strong>Urine Culture</strong>",
          "Asymptomatic bacteriuria",
          "Booking visit, each trimester",
          "&ge;10^5 CFU/mL of single organism = positive. Treat even if asymptomatic to prevent pyelonephritis and preterm",
        ],
        [
          "<strong>2D Echocardiography</strong>",
          "Cardiac function in known/suspected heart disease",
          "Preconception or early pregnancy",
          "Assess valvular function, ejection fraction, pulmonary pressures. EF &lt;40% = high risk. PASP >50 mmHg = very high risk",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Clinical Decision Tree — High Risk Pregnancy Management",
    diagramSvg: `
      <svg viewBox="0 0 820 700" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
        <style>
          .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
          .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
          .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
          .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
          .box-purple { fill: #F3E5F5; stroke: #AB47BC; stroke-width: 2; rx: 10; }
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

        <!-- Step 1: Booking Visit -->
        <rect class="box" x="240" y="10" width="340" height="45" />
        <text class="label-bold" x="410" y="28">BOOKING VISIT — Risk Factor Screening</text>
        <text class="label" x="410" y="48">History, examination, baseline investigations</text>

        <line class="arrow" x1="410" y1="55" x2="410" y2="85" />

        <!-- Risk assessment -->
        <rect class="box-blue" x="260" y="85" width="300" height="40" />
        <text class="label-bold" x="410" y="100">Risk Scoring (Modified Coopland)</text>
        <text class="label" x="410" y="118">Score: 0-2 (Low), 3-6 (Moderate), >6 (High)</text>

        <line class="arrow-yes" x1="310" y1="125" x2="150" y2="165" />
        <text class="yes-label" x="210" y="148">Low Risk</text>

        <line class="arrow" x1="410" y1="125" x2="410" y2="165" />
        <text class="label" x="445" y="148">Moderate</text>

        <line class="arrow-no" x1="510" y1="125" x2="660" y2="165" />
        <text class="no-label" x="600" y="148">High Risk</text>

        <!-- Low risk -->
        <rect class="box-green" x="50" y="165" width="200" height="45" />
        <text class="label-bold" x="150" y="183">Standard ANC</text>
        <text class="label" x="150" y="200">Routine visits + Garbhini Paricharya</text>

        <!-- Moderate risk -->
        <rect class="box" x="290" y="165" width="240" height="45" />
        <text class="label-bold" x="410" y="183">Enhanced Surveillance</text>
        <text class="label" x="410" y="200">Fortnightly visits, serial USG, labs</text>

        <!-- High risk -->
        <rect class="box-red" x="560" y="165" width="220" height="45" />
        <text class="label-bold" x="670" y="183">Tertiary Referral</text>
        <text class="label" x="670" y="200">Weekly visits, specialist consult</text>

        <line class="arrow" x1="410" y1="210" x2="410" y2="250" />

        <!-- Specific conditions -->
        <rect class="box-blue" x="190" y="250" width="440" height="35" />
        <text class="label-bold" x="410" y="272">Screen for Specific Conditions at Appropriate GA</text>

        <!-- Branches for conditions -->
        <line class="arrow" x1="250" y1="285" x2="120" y2="330" />
        <line class="arrow" x1="350" y1="285" x2="310" y2="330" />
        <line class="arrow" x1="470" y1="285" x2="510" y2="330" />
        <line class="arrow" x1="570" y1="285" x2="700" y2="330" />

        <rect class="box" x="30" y="330" width="175" height="50" />
        <text class="label-bold" x="118" y="348">GDM Screen</text>
        <text class="label" x="118" y="365">75g OGTT at 24-28 wk</text>
        <text class="label" x="118" y="378">DIPSI / IADPSG</text>

        <rect class="box" x="220" y="330" width="175" height="50" />
        <text class="label-bold" x="308" y="348">Anemia Check</text>
        <text class="label" x="308" y="365">CBC at booking, 28, 36 wk</text>
        <text class="label" x="308" y="378">Ferritin if Hb low</text>

        <rect class="box" x="420" y="330" width="175" height="50" />
        <text class="label-bold" x="508" y="348">Thyroid Screen</text>
        <text class="label" x="508" y="365">TSH at booking visit</text>
        <text class="label" x="508" y="378">FT4 if TSH abnormal</text>

        <rect class="box" x="620" y="330" width="175" height="50" />
        <text class="label-bold" x="708" y="348">Urine Culture</text>
        <text class="label" x="708" y="365">Each trimester</text>
        <text class="label" x="708" y="378">Treat ASB if positive</text>

        <!-- Management lines -->
        <line class="arrow" x1="118" y1="380" x2="118" y2="420" />
        <line class="arrow" x1="308" y1="380" x2="308" y2="420" />
        <line class="arrow" x1="508" y1="380" x2="508" y2="420" />
        <line class="arrow" x1="708" y1="380" x2="708" y2="420" />

        <rect class="box-green" x="30" y="420" width="175" height="55" />
        <text class="label-bold" x="118" y="435">GDM Management</text>
        <text class="label" x="118" y="450">MNT + Exercise 2 wk</text>
        <text class="label" x="118" y="463">If fail: Insulin/Metformin</text>

        <rect class="box-green" x="220" y="420" width="175" height="55" />
        <text class="label-bold" x="308" y="435">Anemia Rx</text>
        <text class="label" x="308" y="450">Oral Fe if mild-mod</text>
        <text class="label" x="308" y="463">IV Fe if severe/near term</text>

        <rect class="box-green" x="420" y="420" width="175" height="55" />
        <text class="label-bold" x="508" y="435">Thyroid Rx</text>
        <text class="label" x="508" y="450">Hypo: Levothyroxine</text>
        <text class="label" x="508" y="463">Hyper: PTU T1, MMI T2-3</text>

        <rect class="box-green" x="620" y="420" width="175" height="55" />
        <text class="label-bold" x="708" y="435">UTI Rx</text>
        <text class="label" x="708" y="450">Nitrofurantoin 7 days</text>
        <text class="label" x="708" y="463">Repeat culture to confirm</text>

        <!-- Ayurvedic box -->
        <rect class="box" x="40" y="510" width="740" height="80" />
        <text class="label-bold" x="410" y="530">Ayurvedic Integrated Approach (Garbhini Vyadhi Chikitsa)</text>
        <text class="label" x="410" y="548">GDM: Nisha Amalaki + Pathya (Yava, Mudga) | Anemia: Punarnava Mandura + Dhatri Lauha</text>
        <text class="label" x="410" y="565">Thyroid: Kanchanara Guggulu | UTI: Gokshuradi Kwatha + Chandraprabha Vati</text>
        <text class="label" x="410" y="582">All: Mridu Bheshaja only, avoid Tikshna Aushadha, maintain Garbhini Paricharya</text>

        <!-- Delivery planning -->
        <rect class="box-purple" x="160" y="620" width="500" height="55" />
        <text class="label-bold" x="410" y="640">Delivery Planning — Timing & Mode Based on Condition Severity</text>
        <text class="label" x="410" y="658">GDM: 38-39 wk if insulin; Anemia: correct before delivery; Heart: NYHA-based plan</text>
        <text class="label" x="410" y="670">Integrated: Sutika Paricharya modifications per specific comorbidity</text>
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for high-risk pregnancy:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Charaka's principle of Mridu Bheshaja in Garbhini is the Ayurvedic equivalent of safe prescribing in pregnancy — always choose the mildest effective remedy</li>
        <li>GDM affects 10-15% of Indian pregnant women. Universal screening with 75g OGTT at 24-28 weeks is recommended. MNT is the first line; insulin is gold standard pharmacotherapy</li>
        <li>Anemia in pregnancy: Hb <11 g/dL at any trimester = anemia. India has highest burden globally. Punarnava Mandura contains Mandura Bhasma (iron) with Punarnava (anti-inflammatory, diuretic)</li>
        <li>Dhatri Lauha combines Amalaki (richest natural Vitamin C) with Lauha Bhasma — enhancing iron absorption, mirroring modern recommendation of iron + Vitamin C co-administration</li>
        <li>Heart disease: NYHA Class I-II generally tolerate pregnancy well. Class III-IV have 7-10% maternal mortality. Eisenmenger syndrome carries 25-50% mortality — pregnancy contraindicated</li>
        <li>Thyroid: use PTU in first trimester (MMI teratogenic: aplasia cutis, choanal atresia). Switch to Methimazole in second trimester. TSH target: trimester-specific (T1: <2.5, T2-T3: <3.0 mIU/L)</li>
        <li>Asymptomatic bacteriuria: 2-7% prevalence in pregnancy. If untreated, 30% develop pyelonephritis. Screen at booking and each trimester. Nitrofurantoin safe except at term</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Garbhini Vyadhi Chikitsa & Modern High-Risk Pregnancy Management</h3>
    <div class="space-y-4">
      <p>High-risk pregnancy management represents an area where Ayurvedic and modern approaches are highly complementary. Charaka's principles of Mridu Bheshaja, Garbha Sthapana drugs, and specific Pathya-Apathya protocols enhance modern pharmacological management and surveillance.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Mridu Bheshaja principle — safe prescribing in pregnancy framework</li>
            <li>Pandughna formulations (Punarnava Mandura, Dhatri Lauha) well-tolerated iron supplements</li>
            <li>Nisha Amalaki — evidence-based anti-hyperglycemic with fewer side effects</li>
            <li>Pathya-Apathya dietary guidelines specific to each Garbhini Vyadhi</li>
            <li>Garbha Sthapana drugs (Shatavari, Ashwagandha) for pregnancy maintenance</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Precise laboratory screening (OGTT, ferritin, TSH, urine culture)</li>
            <li>Risk scoring systems for systematic identification of high-risk pregnancies</li>
            <li>Insulin therapy for GDM with well-established fetal safety profile</li>
            <li>IV iron infusion for rapid correction of severe anemia near term</li>
            <li>Echocardiography and hemodynamic monitoring for cardiac patients</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated High-Risk Pregnancy Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Step 1:</strong> Universal screening at booking — CBC, TSH, urine culture, blood sugar + Prakriti assessment + dietary evaluation</li>
          <li><strong>Step 2:</strong> GDM screening (24-28 wk OGTT) — if positive: MNT (incorporating Ayurvedic Pathya: Yava, Mudga) + Nisha Amalaki + modern glucose monitoring</li>
          <li><strong>Step 3:</strong> Anemia management — Punarnava Mandura + oral iron simultaneously for synergistic effect; IV iron if severe/near term</li>
          <li><strong>Step 4:</strong> Thyroid — modern levothyroxine/PTU + Kanchanara Guggulu as adjuvant (under supervision)</li>
          <li><strong>Step 5:</strong> Delivery planning based on condition severity + postpartum follow-up with modified Sutika Paricharya</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Garbhini Vyadhi Chikitsa principle (Charaka Sha. 8): use only Mridu Bheshaja (mild drugs) that are Madhura (sweet), Shita (cooling), and Garbha Sthapana. Avoid Tikshna Aushadha, Vamana, and strong Virechana.",
    "Garbhopaghatakara Bhava: factors harmful to pregnancy — Ati-vyayama (excessive exercise), Ati-maithuna (excessive coitus), Vegadharana (suppression of urges), Ati-ahara (overeating), Manasika Kshobha (psychological stress), Teratogenic drugs.",
    "GDM screening: DIPSI (non-fasting 75g OGTT, 2-hr >=140 mg/dL) vs IADPSG (fasting 75g OGTT, FPG >=92, 1-hr >=180, 2-hr >=153). Universal screening recommended in India at 24-28 weeks.",
    "GDM management ladder: MNT + exercise (2 weeks) -> if targets not met: insulin (gold standard) or metformin. Targets: FPG <95, 1-hr PP <140, 2-hr PP <120 mg/dL.",
    "GDM Ayurvedic adjunct: Nisha (Haridra/turmeric) + Amalaki Churna — demonstrated anti-hyperglycemic activity. Pathya: Yava (barley), Mudga (green gram), bitter vegetables. Apathya: Navanna, Guda, excess Madhura.",
    "Anemia in pregnancy (WHO): Hb <11 g/dL at any GA = anemia. Most common cause = iron deficiency. India: 50-80% prevalence. Severe (<7 g/dL) increases maternal mortality 3-4 fold.",
    "Punarnava Mandura: chief Pandughna Yoga — contains Mandura Bhasma (iron calx), Punarnava (Boerhavia diffusa — anti-inflammatory, hepatoprotective), Triphala (enhances absorption), Trikatu (bioavailability enhancer).",
    "Dhatri Lauha = Amalaki + Lauha Bhasma. Amalaki is richest natural Vitamin C source — enhances non-heme iron absorption. This mirrors modern recommendation of iron + Vitamin C co-administration.",
    "IV iron therapy: Iron Sucrose (200 mg/dose) or Ferric Carboxymaltose (1000 mg single dose). Indicated: severe anemia (Hb <7), intolerance to oral iron, near term, non-compliant. Avoid in first trimester.",
    "Heart disease in pregnancy: NYHA I-II: well tolerated (mortality <1%). NYHA III-IV: mortality 7-10%. Contraindicated: Eisenmenger (25-50% mortality), severe pulmonary HTN, Marfan with aortic root >4 cm.",
    "Thyroid in pregnancy: Hypothyroid — levothyroxine; increase dose 25-30% once pregnancy confirmed. TSH targets: T1 <2.5, T2-T3 <3.0 mIU/L. Untreated: cretinism, intellectual disability, miscarriage.",
    "Hyperthyroidism in pregnancy: PTU in first trimester (MMI causes aplasia cutis, choanal atresia). Switch to Methimazole in T2-T3 (PTU hepatotoxicity risk). Thyroid storm: Lugol's iodine + PTU + propranolol + steroids.",
    "Asymptomatic bacteriuria: >=10^5 CFU/mL of single organism on clean-catch midstream urine culture. E. coli most common (80%). Treat: Nitrofurantoin 7 days or Cephalexin. Untreated: 30% develop pyelonephritis.",
    "Risk scoring: Modified Coopland score — age, parity, obstetric history, medical conditions, social factors. Score >6 = high risk. ICMR criteria also widely used in India for risk stratification.",
    "Garbha Sthapana drugs (safe in pregnancy per Charaka): Aindri, Brahmi, Shatavari, Ashwagandha, Durva, Padmaka, Payasya — form the Dashamula Garbha Sthapana group. Used as adjuvants in threatened abortion and high-risk pregnancy.",
  ],

  mnemonics: [
    {
      title: "GDM Risk Factors",
      acronym: "OBESE-FH",
      expansions: [
        "Obesity (BMI >30)",
        "Bad obstetric history (previous stillbirth, macrosomia)",
        "Elderly (age >25 years in Indian guidelines)",
        "Sugar in urine (glycosuria on routine testing)",
        "Essential hypertension / pre-eclampsia",
        "Family History of diabetes mellitus",
        "History of previous GDM or PCOS",
      ],
    },
    {
      title: "Causes of Anemia in Pregnancy",
      acronym: "IRON FACT",
      expansions: [
        "Iron deficiency (most common — 90%)",
        "Recurrent infections (hookworm, malaria)",
        "Others: sickle cell, thalassemia, aplastic",
        "Nutritional: folate / B12 deficiency (megaloblastic)",
        "Frequent pregnancies (short interval)",
        "Acute blood loss (APH, PPH)",
        "Chronic disease (TB, renal)",
        "Twin pregnancy (increased demand)",
      ],
    },
    {
      title: "Contraindications to Pregnancy in Heart Disease",
      acronym: "EMPS",
      expansions: [
        "Eisenmenger syndrome (25-50% mortality)",
        "Marfan syndrome with aortic root >4 cm",
        "Pulmonary hypertension (severe, primary)",
        "Severe systolic dysfunction (EF <30%, NYHA III-IV)",
      ],
    },
    {
      title: "Pandughna Yoga (Ayurvedic Iron Preparations)",
      acronym: "PDDNL",
      expansions: [
        "Punarnava Mandura — Mandura Bhasma + Punarnava + Triphala",
        "Dhatri Lauha — Amalaki + Lauha Bhasma (iron + Vitamin C)",
        "Dadimadi Ghrita — Dadima (pomegranate) based Rakta Vardhaka",
        "Navayasa Lauha — 9-ingredient iron preparation",
        "Loha Bhasma — processed iron calx with Triphala Kwatha",
      ],
    },
  ],
};

export function getM14Content() {
  return m14Content;
}
