import React from "react";

export function getM6Content() {
  return {
    references: [
      "Charaka Sharira Sthana Ch. 8",
      "Sushruta Nidana Sthana Ch. 8",
      "Ashtanga Hridaya Sharira Ch. 2",
      "Madhava Nidana — Garbha Vyapad",
      "Williams Obstetrics Ch. 10-12",
      "DC Dutta Ch. 8-9",
    ],
    units: [
      { title: "Garbha Vyapad Nidana & Samprapti", content: React.createElement("div", null, React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Aetiology and pathogenesis of disorders during pregnancy — Charaka describes Garbha Vyapad as consequences of improper Garbhini Paricharya, Dauhrida Avamana, and Beeja-Kshetra Dosha. Modern correlations with hyperemesis, gestational diabetes, and Rh incompatibility."), React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" }, React.createElement("li", null, "• Garbha Vyapad classification by Dosha involvement"), React.createElement("li", null, "• Upavishtaka — intrauterine growth restriction (IUGR)"), React.createElement("li", null, "• Nagodara — intrauterine fetal death (IUD)"), React.createElement("li", null, "• Lina Garbha — missed abortion / concealed pregnancy"))) },
      { title: "Upavishtaka, Nagodara & Lina Garbha", content: React.createElement("div", null, React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Detailed study of three critical Garbha Vyapads — Upavishtaka (live fetus that doesn't grow), Nagodara (dead fetus with abdominal distension), and Lina Garbha (hidden/concealed fetus). Modern correlations and management.")) },
      { title: "Garbhini Chardi & Hrillasa (Hyperemesis)", content: React.createElement("div", null, React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Excessive vomiting in pregnancy — Ayurvedic Chhardi Chikitsa in Garbhini versus modern management of hyperemesis gravidarum. Fluid replacement, antiemetics, and Ayurvedic approaches.")) },
      { title: "Garbhini Prameha & Pandu (GDM & Anemia)", content: React.createElement("div", null, React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Gestational diabetes mellitus correlated with Prameha in Garbhini, and anemia of pregnancy correlated with Garbhini Pandu. Screening, diagnosis, and integrated management.")) },
      { title: "Rh Incompatibility & TORCH Infections", content: React.createElement("div", null, React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Modern concepts of Rh isoimmunization and TORCH infections with their impact on fetal development. Ayurvedic concept of Beeja Dosha (genetic defect) and Garbhopaghatakara Bhava (teratogenic factors).")) },
    ],
    orientation: {
      why: "Garbha Vyapad covers all disorders that can complicate pregnancy. Understanding Upavishtaka, Nagodara, and Lina Garbha from classical texts alongside their modern equivalents (IUGR, IUD, missed abortion) is essential for both clinical practice and exams. This module bridges Ayurvedic pathology with modern high-risk obstetrics.",
      examWeight: "Very high-yield. Long essays on Upavishtaka/Nagodara appear frequently. Short notes on Garbhini Pandu (anemia in pregnancy), GDM screening, and TORCH infections are common. Comparison questions between Ayurvedic Garbha Vyapad and modern complications are favourites.",
    },
    definition: {
      ayurveda: `<p><strong>Garbha Vyapad</strong> refers to abnormal conditions or complications affecting the Garbha (fetus) and Garbhini (pregnant woman). Charaka describes these as arising from Mithya Ahara-Vihara (improper diet and lifestyle), Dauhrida Avamana (neglecting pregnancy desires), and Beeja-Kshetra-Ambu Dosha (defects in seed, field, and nourishment).</p><p class="mt-2">Key Garbha Vyapads: <strong>Upavishtaka</strong> (live but non-growing fetus), <strong>Nagodara</strong> (dead fetus), <strong>Lina Garbha</strong> (concealed pregnancy).</p>`,
      modern: `<p><strong>Disorders of pregnancy</strong> encompass medical and obstetric complications including: hyperemesis gravidarum, gestational diabetes, anemia, Rh isoimmunization, IUGR, IUD, infections (TORCH), and teratogenic exposures.</p><p class="mt-2">Classification: antepartum (before labour), intrapartum (during labour), or by system affected (endocrine, hematologic, infectious, genetic).</p>`,
      classification: {
        title: "Garbha Vyapad — Ayurvedic vs Modern Classification",
        headers: ["Ayurvedic Term", "Description", "Modern Equivalent"],
        rows: [
          ["<strong>Upavishtaka</strong>", "Fetus alive but fails to grow, limbs wasted", "IUGR (Intrauterine Growth Restriction)"],
          ["<strong>Nagodara</strong>", "Dead fetus with abdominal distension, foul discharge", "Intrauterine Fetal Death (IUD / stillbirth)"],
          ["<strong>Lina Garbha</strong>", "Pregnancy signs disappear, fetus concealed", "Missed abortion / cryptic pregnancy"],
          ["<strong>Garbhini Chhardi</strong>", "Excessive vomiting in pregnancy", "Hyperemesis Gravidarum"],
          ["<strong>Garbhini Pandu</strong>", "Pallor, weakness in pregnancy", "Iron Deficiency Anemia of pregnancy"],
          ["<strong>Garbhini Prameha</strong>", "Excessive urination, sweet urine in pregnancy", "Gestational Diabetes Mellitus (GDM)"],
        ],
      },
    },
    shlokas: [
      {
        source: "Charaka Sharira Sthana 8/32",
        devanagari: "जीवन्तमेवोपविशत्युदरे यस्य गर्भिण्याः |\nक्षीणावयवसंघातं तमुपविष्टकं विदुः ||",
        transliteration: "jīvantamevopaviśatyudare yasya garbhiṇyāḥ |\nkṣīṇāvayavasaṃghātaṃ tamupviṣṭakaṃ viduḥ ||",
        meaning: "When the fetus remains alive in the uterus but its body parts become wasted and emaciated (Kshina Avayava Sanghata), it is known as Upavishtaka. The fetus lives but fails to grow properly.",
        clinicalNote: "Upavishtaka directly correlates with IUGR — the fetus is alive but growth-restricted. Modern causes include placental insufficiency, maternal hypertension, and chronic infections. Ayurvedic treatment focuses on Garbha Poshana (fetal nourishment) through Ksheera-Ghrita preparations.",
      },
      {
        source: "Charaka Sharira Sthana 8/33",
        devanagari: "मृतगर्भं तु नागोदरं विद्यात् पूतिगन्धयुक्तम् |\nउदरे स्थितमत्यर्थं दुर्गन्धस्रावसंयुतम् ||",
        transliteration: "mṛtagarbhaṃ tu nāgodaraṃ vidyāt pūtigandhayuktam |\nudare sthitamatyarthaṃ durgandhasrāvasaṃyutam ||",
        meaning: "When the dead fetus remains in the uterus causing excessive abdominal distension with foul-smelling discharge (Puti Gandha Srava), it is known as Nagodara — literally 'snake-belly' due to the tense, distended abdomen.",
        clinicalNote: "Nagodara corresponds to intrauterine fetal death (IUD) with retained dead fetus. Modern management involves induction of labour (misoprostol, oxytocin) or surgical evacuation. Risk of DIC if retained >4 weeks. Classical Ayurvedic management uses Garbha Nishkramana (expulsion) drugs.",
      },
      {
        source: "Sushruta Nidana Sthana 8/5",
        devanagari: "लीनगर्भस्तु गर्भो यो न वर्धते न दृश्यते |\nचिह्नानि गर्भिण्या नश्यन्ति स लीन इति स्मृतः ||",
        transliteration: "līnagarbhastu garbho yo na vardhate na dṛśyate |\ncihnāni garbhiṇyā naśyanti sa līna iti smṛtaḥ ||",
        meaning: "Lina Garbha is a condition where the fetus neither grows nor is visible (no signs of growing pregnancy). The usual signs of pregnancy disappear. Such a fetus is called Lina (hidden/concealed).",
        clinicalNote: "Lina Garbha correlates with missed abortion (fetal demise without expulsion) or anembryonic pregnancy (blighted ovum). Modern diagnosis is by USG showing absent fetal cardiac activity or empty gestational sac. Management: expectant, medical (misoprostol), or surgical (MVA/D&E).",
      },
    ],
    dualCols: [
      {
        title: "Etiology of Pregnancy Complications",
        ayurvedaTitle: "Garbha Vyapad Nidana",
        modernTitle: "Modern Risk Factors",
        ayurvedaContent: `<ul class="space-y-2"><li><strong>Mithya Ahara-Vihara:</strong> Improper diet (Viruddha Ahara, excess Katu-Tikta Rasa), over-exertion, trauma</li><li><strong>Dauhrida Avamana:</strong> Neglecting pregnancy cravings — causes Garbha Vikruti</li><li><strong>Beeja Dosha:</strong> Defective Shukra/Shonita — genetic/chromosomal abnormalities</li><li><strong>Kshetra Dosha:</strong> Defective Garbhashaya (uterus) — uterine anomalies</li><li><strong>Ritu Dosha:</strong> Conception in improper season/time</li><li><strong>Manasika Nidana:</strong> Fear (Bhaya), grief (Shoka), anger (Krodha)</li></ul>`,
        modernContent: `<ul class="space-y-2"><li><strong>Maternal factors:</strong> Age >35, medical diseases (DM, HTN, thyroid), malnutrition, substance abuse</li><li><strong>Placental factors:</strong> Placental insufficiency, abruption, previa</li><li><strong>Fetal factors:</strong> Chromosomal anomalies, congenital infections (TORCH), multiple pregnancy</li><li><strong>Environmental:</strong> Radiation, drugs (teratogens), occupational hazards</li><li><strong>Infectious:</strong> TORCH — Toxoplasma, Others, Rubella, CMV, Herpes</li><li><strong>Immunological:</strong> Rh incompatibility, antiphospholipid syndrome</li></ul>`,
      },
    ],
    clinicalFeatures: [
      {
        title: "Key Garbha Vyapads — Clinical Features",
        headers: ["Condition", "Ayurvedic Features", "Modern Features", "Management"],
        rows: [
          ["<strong>Upavishtaka (IUGR)</strong>", "Fetus alive but emaciated, small abdomen, reduced movements", "Fundal height < dates, oligohydramnios, abnormal Doppler", "Garbha Poshana (Ksheera-Ghrita) / bed rest, monitoring, timely delivery"],
          ["<strong>Nagodara (IUD)</strong>", "Absent fetal movements, foul discharge, abdominal distension", "Absent FHR, USG: no cardiac activity", "Garbha Nishkramana / Induction with misoprostol, DIC screening"],
          ["<strong>Lina Garbha</strong>", "Pregnancy signs vanish, no fetal growth", "Missed abortion: empty sac or absent FHR on USG", "Expectant/medical/surgical management"],
          ["<strong>Garbhini Chhardi</strong>", "Excessive vomiting, dehydration, weight loss", "Hyperemesis: ketonuria, >5% weight loss, electrolyte imbalance", "Shatavari Ghrita, Ela / IV fluids, ondansetron, thiamine"],
          ["<strong>Garbhini Pandu</strong>", "Pallor, fatigue, breathlessness, palpitations", "Hb <11 g/dL, microcytic hypochromic anemia", "Dhatri Lauha, Punarnava / oral/IV iron, folic acid"],
        ],
      },
    ],
    investigations: [
      {
        title: "Investigations for Pregnancy Complications",
        headers: ["Investigation", "Purpose", "When to Order"],
        rows: [
          ["<strong>USG with Doppler</strong>", "Fetal growth, amniotic fluid, placenta, blood flow", "Serial: 28, 32, 36 weeks in high-risk"],
          ["<strong>OGTT (75g)</strong>", "Screen for gestational diabetes (GDM)", "24-28 weeks (or earlier if risk factors)"],
          ["<strong>CBC + Peripheral smear</strong>", "Anemia typing and severity", "Each trimester, more if anemic"],
          ["<strong>Indirect Coombs Test</strong>", "Rh antibody screening in Rh-negative mothers", "First visit, 28 weeks, delivery"],
          ["<strong>TORCH panel</strong>", "Screen for congenital infections", "First trimester or if suspected exposure"],
          ["<strong>Coagulation profile</strong>", "DIC screening in IUD, abruption", "If IUD >4 weeks, abruption, severe pre-eclampsia"],
        ],
      },
    ],
    management: {
      diagramTitle: "Garbha Vyapad — Management Decision Tree",
      diagramSvg: `
        <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah6); }
            .small { font-size: 11px; }
          </style>
          <defs><marker id="ah6" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A" /></marker></defs>
          <rect class="box" x="250" y="10" width="300" height="40" />
          <text class="label-bold" x="400" y="35">Garbhini with Complication</text>
          <line class="arrow" x1="320" y1="50" x2="150" y2="85" />
          <line class="arrow" x1="400" y1="50" x2="400" y2="85" />
          <line class="arrow" x1="480" y1="50" x2="650" y2="85" />
          <rect class="box" x="40" y="85" width="220" height="45" />
          <text class="label-bold" x="150" y="105">Fetus Alive — Growth Issue</text>
          <text class="label small" x="150" y="122">Upavishtaka / IUGR</text>
          <rect class="box" x="290" y="85" width="220" height="45" />
          <text class="label-bold" x="400" y="105">Fetus Dead</text>
          <text class="label small" x="400" y="122">Nagodara / IUD</text>
          <rect class="box" x="540" y="85" width="220" height="45" />
          <text class="label-bold" x="650" y="105">Maternal Complication</text>
          <text class="label small" x="650" y="122">GDM / Anemia / Hyperemesis</text>
          <line class="arrow" x1="150" y1="130" x2="150" y2="170" />
          <line class="arrow" x1="400" y1="130" x2="400" y2="170" />
          <line class="arrow" x1="650" y1="130" x2="650" y2="170" />
          <rect class="box-green" x="30" y="170" width="240" height="65" />
          <text class="label-bold" x="150" y="190">Garbha Poshana Protocol</text>
          <text class="label" x="150" y="207">Ayurveda: Ksheera-Ghrita, Shatavari</text>
          <text class="label" x="150" y="222">Modern: bed rest, Doppler monitoring</text>
          <rect class="box-red" x="280" y="170" width="240" height="65" />
          <text class="label-bold" x="400" y="190">Garbha Nishkramana</text>
          <text class="label" x="400" y="207">Ayurveda: expulsion drugs</text>
          <text class="label" x="400" y="222">Modern: misoprostol induction</text>
          <rect class="box-blue" x="530" y="170" width="240" height="65" />
          <text class="label-bold" x="650" y="190">Specific Treatment</text>
          <text class="label" x="650" y="207">GDM: diet + insulin / Ayur Prameha Rx</text>
          <text class="label" x="650" y="222">Anemia: IV iron / Dhatri Lauha</text>
          <line class="arrow" x1="150" y1="235" x2="150" y2="275" />
          <line class="arrow" x1="400" y1="235" x2="400" y2="275" />
          <line class="arrow" x1="650" y1="235" x2="650" y2="275" />
          <rect class="box-green" x="30" y="275" width="240" height="50" />
          <text class="label-bold" x="150" y="295">If improving: continue</text>
          <text class="label" x="150" y="312">If worsening: early delivery</text>
          <rect class="box-red" x="280" y="275" width="240" height="50" />
          <text class="label-bold" x="400" y="295">Screen for DIC</text>
          <text class="label" x="400" y="312">If >4 wks: coagulation panel</text>
          <rect class="box-blue" x="530" y="275" width="240" height="50" />
          <text class="label-bold" x="650" y="295">Monitor & adjust</text>
          <text class="label" x="650" y="312">Serial labs, fetal surveillance</text>
          <rect class="box-green" x="100" y="370" width="600" height="50" />
          <text class="label-bold" x="400" y="393">Integrated Approach: Ayurvedic Garbha Raksha + Modern Fetal Surveillance</text>
          <text class="label" x="400" y="410">Combine Garbha Sthapana drugs with serial USG Doppler and lab monitoring</text>
          <line class="arrow" x1="150" y1="325" x2="250" y2="370" />
          <line class="arrow" x1="400" y1="325" x2="400" y2="370" />
          <line class="arrow" x1="650" y1="325" x2="550" y2="370" />
        </svg>`,
      notes: `<p><strong>Key clinical pearls:</strong></p><ul class="list-disc pl-5 mt-2 space-y-1"><li>Upavishtaka (IUGR): suspect when fundal height lags by >3 cm. Confirm with USG biometry and Doppler</li><li>Nagodara (IUD): if retained >4 weeks, check coagulation profile for DIC. Evacuate promptly</li><li>Garbhini Pandu: WHO defines anemia in pregnancy as Hb <11 g/dL. Severe = Hb <7 g/dL (needs transfusion)</li><li>GDM screening: OGTT at 24-28 weeks. Diagnosis: FBS ≥92, 1hr ≥180, 2hr ≥153 mg/dL (IADPSG criteria)</li><li>TORCH: IgM positive = recent/active infection. Most dangerous in first trimester (organogenesis period)</li></ul>`,
    },
    integration: `<h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Integrating Garbha Vyapad Management</h3><div class="space-y-4"><p>Classical Garbha Vyapad descriptions show remarkable clinical observation. Upavishtaka's description of a live but wasted fetus mirrors IUGR perfectly. Modern diagnostics (USG Doppler, lab tests) enable precise monitoring, while Ayurvedic Garbha Sthapana and Garbha Poshana drugs support fetal nourishment.</p><div class="grid md:grid-cols-2 gap-4 mt-4"><div class="bg-white/60 p-4 rounded-lg"><h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Approach</h4><ul class="space-y-1 text-sm"><li>• Garbha Sthapana drugs: Aindri, Brahmi, Shatavari, Ashwagandha</li><li>• Ksheera-Ghrita (milk + ghee) preparations for Garbha Poshana</li><li>• Garbhopaghatakara Bhava avoidance</li><li>• Manasika Chikitsa for psychological support</li></ul></div><div class="bg-white/60 p-4 rounded-lg"><h4 class="font-semibold text-modern-text mb-2">Modern Approach</h4><ul class="space-y-1 text-sm"><li>• Serial USG + Doppler for fetal surveillance</li><li>• NST/BPP for fetal well-being</li><li>• Timely delivery decision (preterm vs term)</li><li>• NICU backup for compromised neonates</li></ul></div></div></div>`,
    examBullets: [
      "Upavishtaka = live fetus with wasted body, not growing (correlates with IUGR). Cause: inadequate Garbha Poshana.",
      "Nagodara = dead fetus retained in utero with abdominal distension and foul discharge (correlates with IUD/stillbirth).",
      "Lina Garbha = concealed/hidden pregnancy where signs disappear (correlates with missed abortion/blighted ovum).",
      "Garbha Vyapad Nidana: Mithya Ahara-Vihara, Dauhrida Avamana, Beeja-Kshetra-Ambu Dosha, Manasika factors.",
      "Garbha Sthapana drugs (Charaka): Aindri, Brahmi, Shatavari, Durva, Vishvadeva — used for threatened abortion/IUGR.",
      "GDM screening: OGTT 75g at 24-28 weeks. Diagnostic values (IADPSG): FBS ≥92, 1hr ≥180, 2hr ≥153 mg/dL.",
      "Anemia classification in pregnancy: Mild (10-10.9), Moderate (7-9.9), Severe (<7 g/dL). Severe needs blood transfusion.",
      "TORCH infections: most teratogenic in first trimester. Rubella causes CRS (cataracts, cardiac defects, deafness).",
      "Rh isoimmunization: anti-D 300 mcg IM at 28 weeks and within 72 hours of delivery of Rh+ baby.",
      "IUD management: if <28 weeks use misoprostol; if >28 weeks use oxytocin induction. Screen DIC if retained >4 weeks.",
      "Hyperemesis gravidarum: >5% weight loss, ketonuria, electrolyte imbalance. Rx: IV fluids, thiamine, ondansetron.",
      "Garbhini Pandu (anemia) treated with Dhatri Lauha, Punarnava Mandura, Navayasa Lauha in Ayurveda.",
      "Kashyapa's Garbhini Pathya: month-wise specific foods to prevent Garbha Vyapad — begins from first month.",
      "Biophysical Profile (BPP): 5 parameters — FHR reactivity, breathing, movement, tone, AFI. Score 8-10 = normal.",
      "Doppler of umbilical artery: absent/reversed end-diastolic flow = critical fetal compromise — deliver immediately.",
    ],
    mnemonics: [
      { title: "Three Main Garbha Vyapads", acronym: "UNL", expansions: ["Upavishtaka — live but growth-restricted (IUGR)", "Nagodara — dead fetus retained (IUD)", "Lina Garbha — concealed/missed pregnancy"] },
      { title: "TORCH Infections", acronym: "TORCH", expansions: ["Toxoplasma gondii", "Others (Syphilis, Varicella, Parvovirus)", "Rubella", "Cytomegalovirus (CMV)", "Herpes Simplex Virus (HSV)"] },
      { title: "Causes of IUGR", acronym: "IUGR", expansions: ["Infection (TORCH, malaria)", "Uteroplacental insufficiency (HTN, preeclampsia)", "Genetic (chromosomal anomalies, constitutional small)", "Recreational drugs/smoking/alcohol/malnutrition"] },
      { title: "GDM Risk Factors", acronym: "ABCDO", expansions: ["Age >25 years", "BMI >30 (obesity)", "Congenital anomaly or macrosomia in previous baby", "Diabetes in family (first degree relative)", "Obstetric history: previous GDM, stillbirth, polyhydramnios"] },
    ],
  };
}
