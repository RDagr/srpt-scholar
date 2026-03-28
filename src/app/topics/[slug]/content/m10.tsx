import React from "react";

export function getM10Content() {
  return {
    references: [
      "Charaka Chikitsa Sthana Ch. 12 (Shotha Chikitsa)",
      "Sushruta Chikitsa Sthana Ch. 23 (Shotha Chikitsa)",
      "Madhava Nidana Ch. 36 (Shotha Nidana)",
      "Ashtanga Hridaya Chikitsa Sthana Ch. 17",
      "Kashyapa Samhita — Khila Sthana, Garbhini Chikitsa",
      "Williams Obstetrics Ch. 40–42 (Hypertensive Disorders)",
      "DC Dutta Ch. 17–18 (Pre-eclampsia & Eclampsia)",
    ],

    units: [
      {
        title: "Garbhini Shotha — Classical Ayurvedic Concepts",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the Ayurvedic understanding of Shotha (oedema/swelling) during pregnancy (Garbhini Shotha) as described in Charaka, Sushruta, and Madhava Nidana. The concept of Garbhini Pandu (anaemia in pregnancy) and its overlap with hypertensive disorders is also discussed. Classical Shotha Samprapti involving Vata and Kapha with Rasa-Rakta Dhatu Dushti provides the pathological framework."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Shotha definition and Samprapti per Charaka and Sushruta"),
            React.createElement("li", null, "• Garbhini Shotha: oedema specific to pregnancy — Vata-Kapha predominant"),
            React.createElement("li", null, "• Garbhini Pandu and its relation to pre-eclampsia/eclampsia"),
            React.createElement("li", null, "• Role of Rasa-Rakta Dushti, Srotas Avarodha, and Kleda accumulation"),
            React.createElement("li", null, "• Charaka's Shotha Nidana: Lavana-Amla Atisevana, Viruddhahara, Divaswapna")
          )
        ),
      },
      {
        title: "Pre-eclampsia & Eclampsia — Modern Classification & Pathophysiology",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the modern classification of hypertensive disorders of pregnancy (ISSHP classification), pathophysiology of pre-eclampsia (defective trophoblastic invasion, endothelial dysfunction), clinical features, and diagnostic criteria. Also covers eclampsia (seizures) and HELLP syndrome."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• ISSHP Classification: gestational HTN, pre-eclampsia, chronic HTN, superimposed PE"),
            React.createElement("li", null, "• Pathophysiology: defective spiral artery remodelling → placental ischaemia → endothelial dysfunction"),
            React.createElement("li", null, "• Pre-eclampsia: BP ≥ 140/90 + proteinuria after 20 weeks"),
            React.createElement("li", null, "• Severe features: BP ≥ 160/110, thrombocytopenia, elevated LFTs, renal insufficiency"),
            React.createElement("li", null, "• Eclampsia: generalized tonic-clonic seizures in pre-eclamptic patient"),
            React.createElement("li", null, "• HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets")
          )
        ),
      },
      {
        title: "Management — Magnesium Sulfate & Ayurvedic Shotha Chikitsa",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers both modern management of pre-eclampsia and eclampsia (MgSO4 protocols, antihypertensives, delivery timing) and Ayurvedic Shotha Chikitsa in pregnancy including Shothaghna Dravyas, Punarnava usage, and dietary modifications."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Magnesium Sulfate: Pritchard regimen (IM) and Zuspan regimen (IV only)"),
            React.createElement("li", null, "• Antihypertensives: Labetalol, Nifedipine, Methyldopa — drug of choice by scenario"),
            React.createElement("li", null, "• Delivery timing: only definitive cure for pre-eclampsia"),
            React.createElement("li", null, "• Ayurvedic Shotha Chikitsa: Punarnava, Gokshura, Eranda Mula, Dashamoola"),
            React.createElement("li", null, "• Pathya-Apathya in Garbhini Shotha: salt restriction, Tikta-Kashaya Rasa foods"),
            React.createElement("li", null, "• Integration of Ayurvedic and modern protocols for mild pre-eclampsia")
          )
        ),
      },
    ],

    orientation: {
      why: "Hypertensive disorders of pregnancy (Garbhini Shotha) represent the most dangerous obstetric complications and a leading cause of maternal and perinatal mortality worldwide. Pre-eclampsia complicates 5–8% of all pregnancies. The Ayurvedic concept of Shotha involving Rasa-Rakta Dushti and Srotas Avarodha provides a complementary understanding. Mastering MgSO4 protocols (Pritchard/Zuspan) is essential for every practitioner.",
      examWeight:
        "Extremely high-yield. Long essays (20 marks) on pre-eclampsia management, MgSO4 regimens, and HELLP syndrome are among the most frequently asked topics. Short notes on eclampsia management, classification of hypertensive disorders, and Shotha Chikitsa appear in every examination. Practical/viva questions on MgSO4 dosing, toxicity signs, and antidote are guaranteed. This is a must-know topic.",
    },

    definition: {
      ayurveda: `
        <p><strong>Shotha (शोथ)</strong> is defined by Charaka as an abnormal swelling (Utsedha) caused by the accumulation of vitiated Doshas in Rasa and Rakta Dhatu, leading to fluid accumulation (Kleda) in body tissues.</p>
        <p class="mt-2 font-sanskrit text-saffron-800">"उत्सेधः शोथ इत्युक्तो दोषैर्दुष्टैः कफादिभिः |\nरसादीनां हि धातूनां सम्मूर्च्छनमुदीरितः ||"</p>
        <p class="mt-2"><strong>Garbhini Shotha</strong> = oedema occurring during pregnancy. Predominantly involves <strong>Vata-Kapha</strong> with Rasa-Rakta Dushti. The Garbha increases Abhyantara Shotha (internal pressure), obstructs Srotas (channels), and causes fluid accumulation in the periphery.</p>
        <p class="mt-2">Charaka warns that Shotha in Garbhini is a serious condition (Mahagada) requiring immediate treatment, as neglect can lead to Garbhini Apasmara (seizures — paralleling eclampsia).</p>
      `,
      modern: `
        <p><strong>Hypertensive Disorders of Pregnancy (HDP)</strong> complicate 5–10% of all pregnancies and are classified by ISSHP (International Society for the Study of Hypertension in Pregnancy) into four categories:</p>
        <p class="mt-2"><strong>1. Gestational Hypertension:</strong> New-onset BP ≥ 140/90 mmHg after 20 weeks without proteinuria or end-organ damage.</p>
        <p class="mt-2"><strong>2. Pre-eclampsia:</strong> BP ≥ 140/90 after 20 weeks WITH proteinuria (≥ 300 mg/24 hr or PCR ≥ 0.3) OR end-organ dysfunction.</p>
        <p class="mt-2"><strong>3. Chronic Hypertension:</strong> HTN predating pregnancy or diagnosed before 20 weeks.</p>
        <p class="mt-2"><strong>4. Pre-eclampsia superimposed on Chronic HTN:</strong> New proteinuria or worsening HTN/end-organ damage in a woman with chronic HTN.</p>
      `,
      classification: {
        title: "Classification of Hypertensive Disorders in Pregnancy",
        headers: ["Type", "BP Criteria", "Proteinuria", "Timing", "Prognosis"],
        rows: [
          [
            "<strong>Gestational HTN</strong>",
            "≥ 140/90 mmHg",
            "Absent",
            "After 20 weeks, resolves by 12 wks postpartum",
            "Good. ~25% progress to pre-eclampsia",
          ],
          [
            "<strong>Mild Pre-eclampsia</strong>",
            "≥ 140/90 mmHg",
            "≥ 300 mg/24 hr",
            "After 20 weeks",
            "Guarded. Monitor for progression. Deliver at 37 weeks",
          ],
          [
            "<strong>Severe Pre-eclampsia</strong>",
            "≥ 160/110 mmHg",
            "Heavy (may have multiorgan involvement)",
            "After 20 weeks",
            "Serious. MgSO4 + stabilize + expedite delivery",
          ],
          [
            "<strong>Eclampsia</strong>",
            "Often severely elevated",
            "Usually present",
            "Antepartum (most), intrapartum, or postpartum",
            "Life-threatening. MgSO4 + deliver. Mortality 1–2%",
          ],
          [
            "<strong>HELLP Syndrome</strong>",
            "May be normal/elevated",
            "Variable",
            "Usually 3rd trimester or postpartum",
            "Very serious. Immediate delivery. ICU care needed",
          ],
          [
            "<strong>Chronic HTN</strong>",
            "≥ 140/90 pre-pregnancy",
            "May develop (superimposed PE)",
            "Before 20 weeks",
            "Variable. Higher risk of superimposed pre-eclampsia",
          ],
        ],
      },
    },

    shlokas: [
      {
        source: "Charaka Chikitsa Sthana 12/7",
        devanagari:
          "शोथस्तु खलु सर्वाङ्गे प्रायो वातकफात्मकः |\nरसमार्गावरोधेन क्लेदमुत्क्लेशयन् स्थितः ||",
        transliteration:
          "śōthastu khalu sarvāṅgē prāyō vātakaphātmakaḥ |\nrasamārgāvarōdhēna klēdamutkleśayan sthitaḥ ||",
        meaning:
          "Shotha (oedema) that affects the entire body (Sarvanga Shotha) is predominantly caused by Vata and Kapha. It occurs due to obstruction (Avarodha) of the Rasa Marga (channels carrying Rasa Dhatu), which causes accumulation of Kleda (excess fluid) leading to swelling.",
        clinicalNote:
          "This Samprapti of Sarvanga Shotha directly parallels the pathophysiology of pre-eclampsia: endothelial dysfunction causes increased vascular permeability → fluid leakage from intravascular to extravascular space → generalized oedema. The 'Rasa Marga Avarodha' concept aligns with the vasospasm and endothelial damage seen in pre-eclampsia.",
      },
      {
        source: "Madhava Nidana 36/3–4",
        devanagari:
          "लवणाम्लातिसेवनात् विरुद्धाशनसेवनात् |\nदिवास्वप्नाव्यायामाच्च शोथो जायेत दारुणः ||\nगर्भिण्यां विशेषेण शोथः प्राणहरो भवेत् ||",
        transliteration:
          "lavaṇāmlātisēvanāt viruddhāśanasēvanāt |\ndivāsvapnāvyāyāmācca śōthō jāyēta dāruṇaḥ ||\ngarbhiṇyāṃ viśēṣēṇa śōthaḥ prāṇaharō bhavēt ||",
        meaning:
          "Excessive intake of salt (Lavana) and sour foods (Amla), eating incompatible foods (Viruddha Ahara), sleeping during the day (Divaswapna), and lack of exercise (Avyayama) cause severe Shotha (oedema). In a pregnant woman (Garbhini) especially, this Shotha becomes life-threatening (Pranahara).",
        clinicalNote:
          "Madhava Nidana specifically warns that Shotha in Garbhini is Pranahara (life-threatening) — directly paralleling the modern understanding that pre-eclampsia/eclampsia can be fatal. The dietary Nidana — excessive salt and processed foods — aligns with modern recognition that high sodium intake worsens hypertension and fluid retention in pre-eclampsia.",
      },
      {
        source: "Sushruta Chikitsa Sthana 23/3",
        devanagari:
          "पुनर्नवा शोथहरा बलवर्णाग्निवर्धिनी |\nगर्भिणीनां हिता प्रोक्ता मूत्रलत्वात् विशेषतः ||",
        transliteration:
          "punarnavā śōthaharā balavarṇāgnivardhini |\ngarbhiṇīnāṃ hitā prōktā mūtralatvāt viśēṣataḥ ||",
        meaning:
          "Punarnava (Boerhavia diffusa) is Shothaghna (anti-oedema), increases Bala (strength), Varna (complexion), and Agni (digestive fire). It is especially beneficial for pregnant women (Garbhini) due to its Mutrala (diuretic) property.",
        clinicalNote:
          "Punarnava is the most important Ayurvedic drug for pregnancy-related oedema. Modern research confirms its diuretic, anti-inflammatory, and hepatoprotective properties. It is widely used in Ayurvedic practice for mild gestational oedema and early pre-eclampsia as an adjuvant. Punarnava Mandura is used when Shotha coexists with Pandu (anaemia).",
      },
      {
        source: "Charaka Chikitsa Sthana 12/19",
        devanagari:
          "पुनर्नवादि क्वाथेन सर्पिः सिद्धं प्रशस्यते |\nशोथघ्नं बल्यमोजस्यं गर्भिणीनां विशेषतः ||",
        transliteration:
          "punarnavādi kvāthēna sarpiḥ siddhaṃ praśasyatē |\nśōthaghnaṃ balyamōjasyaṃ garbhiṇīnāṃ viśēṣataḥ ||",
        meaning:
          "Ghrita (ghee) prepared with Punarnava decoction is highly recommended. It is Shothaghna (anti-oedema), Balya (strength-promoting), and Ojasya (immunity-enhancing) — especially for pregnant women (Garbhini).",
        clinicalNote:
          "Punarnava Ghrita is a classical Ayurvedic formulation for Garbhini Shotha. The Ghrita base provides lipid-soluble carrier for active compounds and is safe in pregnancy. It addresses both the oedema (Shothaghna) and the nutritional/immunity needs (Balya, Ojasya) of pregnant women — a holistic approach not found in modern antihypertensive therapy.",
      },
    ],

    dualCols: [
      {
        title: "Pathogenesis of Hypertensive Disorders",
        ayurvedaTitle: "Shotha Samprapti in Garbhini",
        modernTitle: "Pathophysiology of Pre-eclampsia",
        ayurvedaContent: `
          <p><strong>Ayurvedic Samprapti of Garbhini Shotha:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Nidana Sevana:</strong> Lavana-Amla Atisevana (excess salt/sour), Viruddhahara, Divaswapna, Avyayama, Manasika stress (Chinta, Krodha)</li>
            <li><strong>Dosha Dushti:</strong> Vata + Kapha Prakopa. Pitta involvement in severe cases (Raktapitta → haemolysis, liver involvement = HELLP)</li>
            <li><strong>Dhatu Dushti:</strong> Rasa Dhatu Dushti (fluid imbalance) + Rakta Dhatu Dushti (blood vitiation)</li>
            <li><strong>Srotas Avarodha:</strong> Obstruction of Rasa Vaha and Udaka Vaha Srotas → Kleda (fluid) accumulates → Shotha (oedema)</li>
            <li><strong>Upadrava:</strong> Garbhini Apasmara (eclamptic seizures), Raktapitta (haemorrhage), Akshepaka (convulsions)</li>
          </ol>
        `,
        modernContent: `
          <p><strong>Modern two-stage pathophysiology of pre-eclampsia:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Stage 1 — Defective Placentation (< 20 wks):</strong> Inadequate trophoblastic invasion of spiral arteries → arteries remain high-resistance → chronic placental ischaemia/hypoxia</li>
            <li><strong>Stage 2 — Maternal Syndrome (> 20 wks):</strong> Ischaemic placenta releases sFlt-1, sEng (anti-angiogenic factors) → widespread endothelial dysfunction → vasospasm + increased permeability</li>
            <li><strong>Vascular:</strong> Vasospasm → hypertension. Endothelial damage → proteinuria (glomerular endotheliosis), oedema, activation of coagulation</li>
            <li><strong>Organ Damage:</strong> Liver (HELLP — periportal necrosis), Brain (eclamptic seizures — vasogenic oedema), Kidney (glomerular endotheliosis → proteinuria, oliguria), Placenta (infarction → IUGR, abruption)</li>
            <li><strong>Haematological:</strong> Platelet consumption → thrombocytopenia. Microangiopathic haemolysis → elevated LDH, schistocytes. DIC in severe cases</li>
          </ol>
        `,
      },
      {
        title: "Treatment of Hypertensive Disorders in Pregnancy",
        ayurvedaTitle: "Shotha Chikitsa in Garbhini",
        modernTitle: "Modern Antihypertensive & MgSO4 Protocol",
        ayurvedaContent: `
          <p><strong>Ayurvedic management of Garbhini Shotha:</strong></p>
          <ul class="space-y-2">
            <li><strong>Shothaghna Dravyas:</strong> Punarnava (Boerhavia diffusa) — primary drug. Gokshura (Tribulus terrestris) — renal protective, Mutrala. Eranda Mula (castor root) — Vata Shamana. Dashamoola — anti-inflammatory</li>
            <li><strong>Formulations:</strong> Punarnava Mandura (Shotha + Pandu). Punarnavasava/Arishta. Punarnava Ghrita. Gokshuradi Guggulu (renal oedema)</li>
            <li><strong>Pathya (Dietary):</strong> Yava (barley) — reduces Kleda. Mudga (green gram) — light, Mutrala. Tikta-Kashaya Rasa foods. Lavana restriction (salt reduction). Old rice (Purana Shali)</li>
            <li><strong>Apathya (Contraindicated):</strong> Lavana Atisevana (excess salt), Amla Rasa, Viruddhahara, Divaswapna, Guru-Abhishyandi foods, Dadhi (curd)</li>
            <li><strong>Shodhana:</strong> Mild Virechana with Eranda Taila (if severe, non-pregnant context). In pregnancy: Basti therapy (Kashaya Basti with Dashamoola) for Vata Shamana</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Modern stepwise management:</strong></p>
          <ul class="space-y-2">
            <li><strong>Antihypertensives:</strong>
              <br/>- <strong>Labetalol:</strong> Drug of choice for acute severe HTN. IV 20mg → 40 → 80 mg boluses
              <br/>- <strong>Nifedipine:</strong> Oral 10–20 mg. Rapid-acting. Safe in pregnancy
              <br/>- <strong>Methyldopa:</strong> Drug of choice for chronic/mild HTN maintenance (250–500 mg TDS)
              <br/>- <strong>Hydralazine:</strong> IV for acute crisis. Risk of reflex tachycardia</li>
            <li><strong>MgSO4 (Anticonvulsant) — Pritchard Regimen:</strong>
              <br/>Loading: 4 g IV (20%) over 15–20 min + 5 g IM each buttock (10 g total IM)
              <br/>Maintenance: 5 g IM alternate buttock every 4 hours</li>
            <li><strong>MgSO4 — Zuspan Regimen:</strong>
              <br/>Loading: 4 g IV (20%) over 15–20 min
              <br/>Maintenance: 1–2 g/hr continuous IV infusion</li>
            <li><strong>Delivery:</strong> Only definitive cure. Mild PE: deliver at 37 wks. Severe PE: stabilize + deliver at 34 wks (or earlier if life-threatening). Eclampsia: deliver after stabilization with MgSO4</li>
          </ul>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Clinical Features — Pre-eclampsia, Severe PE, Eclampsia, HELLP",
        headers: ["Condition", "Symptoms", "Signs", "Laboratory Findings"],
        rows: [
          [
            "<strong>Mild Pre-eclampsia</strong>",
            "Often asymptomatic. Mild headache. Mild facial/pedal oedema. Decreased urine output",
            "BP ≥ 140/90 (< 160/110). Non-dependent oedema (face, hands). Proteinuria ≥ 300 mg/24 hr",
            "Urine protein: 1+ to 2+ dipstick or PCR ≥ 0.3. Uric acid mildly elevated. Normal platelets and LFTs",
          ],
          [
            "<strong>Severe Pre-eclampsia</strong>",
            "Severe headache (frontal/occipital). Visual disturbance (blurring, scotomata). Epigastric/RUQ pain. Nausea/vomiting. Rapidly worsening oedema",
            "BP ≥ 160/110 mmHg. Brisk reflexes/clonus (3+ DTR). Papilloedema. Pulmonary oedema (crackles). Oliguria (< 500 mL/24 hr)",
            "Platelets < 100,000. Elevated creatinine (> 1.1 mg/dL). Elevated LFTs (AST > 70 U/L). Proteinuria > 5 g/24 hr. Elevated LDH. Low haptoglobin",
          ],
          [
            "<strong>Eclampsia</strong>",
            "Preceded by headache, visual disturbances, epigastric pain. Then sudden generalized tonic-clonic seizures. Post-ictal confusion/coma",
            "Seizure activity — tonic phase (15–20 sec) → clonic phase (60 sec) → post-ictal coma. Tongue bite. Hyperthermia. May have pulmonary aspiration",
            "Similar to severe PE. May have elevated CK from seizure activity. Blood gas may show respiratory acidosis. CT brain if atypical presentation (rule out other causes)",
          ],
          [
            "<strong>HELLP Syndrome</strong>",
            "Malaise, nausea, vomiting. Epigastric or RUQ pain (hepatic capsule distension). Jaundice occasionally. May present without significant hypertension",
            "Hepatomegaly with tenderness. May have ascites. Bruising/petechiae (thrombocytopenia). May or may not have hypertension or proteinuria",
            "Hemolysis: schistocytes, elevated LDH (> 600), elevated bilirubin, low haptoglobin. Elevated Liver enzymes: AST > 70. Low Platelets: < 100,000. Class 1 HELLP: plts < 50,000",
          ],
        ],
      },
    ],

    investigations: [
      {
        title: "Investigations in Hypertensive Disorders of Pregnancy",
        headers: ["Investigation", "What to Order", "Key Values", "Frequency"],
        rows: [
          [
            "<strong>BP Monitoring</strong>",
            "Serial BP measurements (manual sphygmomanometer preferred)",
            "≥ 140/90 = HTN. ≥ 160/110 = severe. Mean arterial pressure > 105 abnormal",
            "Mild: twice weekly. Severe: hourly. Inpatient monitoring for severe PE",
          ],
          [
            "<strong>Urinalysis</strong>",
            "Dipstick, spot PCR, or 24-hr urine protein",
            "Dipstick ≥ 1+ suspicious. PCR ≥ 0.3 = significant. 24-hr ≥ 300 mg = pre-eclampsia",
            "Every ANC visit after 20 wks. Repeat if worsening. 24-hr urine gold standard",
          ],
          [
            "<strong>CBC with Platelet</strong>",
            "Hemoglobin, WBC, platelet count",
            "Platelets < 100,000 = severe PE/HELLP. Rising Hb may indicate haemoconcentration",
            "Twice weekly in mild PE. Daily in severe PE. Every 6–12 hours in HELLP",
          ],
          [
            "<strong>LFT</strong>",
            "AST, ALT, LDH, bilirubin",
            "AST > 70 U/L = liver involvement. LDH > 600 = HELLP criterion. Elevated bilirubin = hemolysis",
            "Baseline at diagnosis. Twice weekly mild PE. Daily severe PE. Every 12 hrs HELLP",
          ],
          [
            "<strong>Renal Function</strong>",
            "Serum creatinine, uric acid, BUN",
            "Creatinine > 1.1 mg/dL = renal impairment. Uric acid > 6 mg/dL = poor prognosis",
            "Baseline. Twice weekly. Uric acid correlates with disease severity and fetal outcome",
          ],
          [
            "<strong>Fetal Assessment</strong>",
            "NST, BPP, Doppler (umbilical artery), Growth scan",
            "Absent/reversed end-diastolic flow in UA = immediate delivery. IUGR common in severe PE",
            "NST twice weekly. Doppler weekly. Growth scan every 2 weeks. Daily in severe PE",
          ],
        ],
      },
    ],

    management: {
      diagramTitle: "Clinical Decision Tree — Management of Garbhini Shotha / Pre-eclampsia-Eclampsia",
      diagramSvg: `
        <svg viewBox="0 0 870 750" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .box-purple { fill: #F3E5F5; stroke: #AB47BC; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 11px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah10); }
            .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#ah10-g); }
            .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#ah10-r); }
            .yes-label { font-size: 10px; fill: #2E7D32; font-weight: bold; }
            .no-label { font-size: 10px; fill: #C62828; font-weight: bold; }
          </style>
          <defs>
            <marker id="ah10" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A"/></marker>
            <marker id="ah10-g" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A"/></marker>
            <marker id="ah10-r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#EF5350"/></marker>
          </defs>

          <!-- Top: HTN in Pregnancy detected -->
          <rect class="box" x="255" y="10" width="330" height="45"/>
          <text class="label-bold" x="420" y="30">Hypertension Detected in Pregnancy (BP ≥ 140/90)</text>
          <text class="label" x="420" y="48">Garbhini Shotha Lakshana</text>

          <line class="arrow" x1="420" y1="55" x2="420" y2="80"/>

          <!-- Classify -->
          <rect class="box-blue" x="290" y="80" width="260" height="40"/>
          <text class="label-bold" x="420" y="100">Classify: Gestational HTN vs Pre-eclampsia?</text>
          <text class="label" x="420" y="114">Check proteinuria + end-organ involvement</text>

          <!-- Mild PE -->
          <line class="arrow-yes" x1="320" y1="120" x2="150" y2="160"/>
          <text class="yes-label" x="215" y="143">Mild PE (BP < 160/110)</text>

          <!-- Severe PE -->
          <line class="arrow-no" x1="520" y1="120" x2="680" y2="160"/>
          <text class="no-label" x="620" y="143">Severe PE / Eclampsia</text>

          <!-- Mild PE path -->
          <rect class="box-green" x="30" y="160" width="240" height="60"/>
          <text class="label-bold" x="150" y="180">MILD PRE-ECLAMPSIA</text>
          <text class="label" x="150" y="195">Methyldopa 250mg TDS (maintenance)</text>
          <text class="label" x="150" y="210">Monitor BP, urine, labs twice weekly</text>

          <line class="arrow" x1="150" y1="220" x2="150" y2="250"/>

          <rect class="box-green" x="40" y="250" width="220" height="55"/>
          <text class="label-bold" x="150" y="268">Expectant Management</text>
          <text class="label" x="150" y="283">Continue till 37 weeks</text>
          <text class="label" x="150" y="298">Deliver at 37 weeks (IOL or LSCS)</text>

          <!-- Severe PE path -->
          <rect class="box-red" x="575" y="160" width="260" height="60"/>
          <text class="label-bold" x="705" y="178">SEVERE PE / ECLAMPSIA</text>
          <text class="label" x="705" y="193">BP ≥ 160/110, seizures, organ damage</text>
          <text class="label" x="705" y="208">THIS IS AN EMERGENCY</text>

          <line class="arrow" x1="705" y1="220" x2="705" y2="250"/>

          <!-- MgSO4 box -->
          <rect class="box-purple" x="545" y="250" width="320" height="85"/>
          <text class="label-bold" x="705" y="270">MAGNESIUM SULFATE (Anticonvulsant)</text>
          <text class="label" x="705" y="287">PRITCHARD: 4g IV + 10g IM loading → 5g IM/4hr</text>
          <text class="label" x="705" y="302">ZUSPAN: 4g IV loading → 1-2g/hr IV infusion</text>
          <text class="label" x="705" y="317">Monitor: Reflexes, RR > 16, UO > 25 mL/hr</text>
          <text class="label" x="705" y="330">Toxicity antidote: Calcium Gluconate 1g IV</text>

          <line class="arrow" x1="705" y1="335" x2="705" y2="360"/>

          <!-- Antihypertensives -->
          <rect class="box-red" x="580" y="360" width="250" height="50"/>
          <text class="label-bold" x="705" y="380">Acute BP Control</text>
          <text class="label" x="705" y="395">Labetalol IV 20→40→80 mg boluses</text>
          <text class="label" x="705" y="408">or Nifedipine 10-20 mg oral</text>

          <line class="arrow" x1="705" y1="410" x2="705" y2="440"/>

          <!-- Deliver -->
          <rect class="box-red" x="600" y="440" width="210" height="50"/>
          <text class="label-bold" x="705" y="460">DELIVER (Definitive Cure)</text>
          <text class="label" x="705" y="477">≥ 34 wks: expedite delivery</text>
          <text class="label" x="705" y="490">< 34 wks: steroids 48hr then deliver</text>

          <!-- HELLP box -->
          <rect class="box-red" x="310" y="350" width="220" height="55"/>
          <text class="label-bold" x="420" y="368">HELLP SYNDROME</text>
          <text class="label" x="420" y="383">Hemolysis + Elevated LFTs + Low Plt</text>
          <text class="label" x="420" y="398">Immediate delivery + MgSO4 + ICU</text>

          <line class="arrow" x1="530" y1="377" x2="580" y2="377"/>

          <!-- Ayurvedic box -->
          <rect class="box" x="60" y="440" width="440" height="80"/>
          <text class="label-bold" x="280" y="462">Ayurvedic Shotha Chikitsa in Garbhini</text>
          <text class="label" x="280" y="480">Mild PE adjuvant: Punarnava Ghrita + Gokshura Kashaya + Lavana restriction</text>
          <text class="label" x="280" y="496">Pathya: Yava, Mudga, Tikta-Kashaya foods. Avoid Lavana, Amla, Dadhi</text>
          <text class="label" x="280" y="512">Punarnava Mandura if Shotha + Pandu (oedema + anaemia coexist)</text>

          <line class="arrow" x1="150" y1="305" x2="280" y2="440"/>

          <!-- Bottom integrated -->
          <rect class="box-green" x="130" y="555" width="600" height="55"/>
          <text class="label-bold" x="430" y="575">Integrated Protocol: Ayurvedic Prevention + Modern Emergency Management</text>
          <text class="label" x="430" y="592">Mild PE: Punarnava + Methyldopa + monitoring. Severe: MgSO4 + delivery (purely modern)</text>
          <text class="label" x="430" y="605">Prevention: Low-dose Aspirin from 12 wks in high-risk + Calcium 1g/day + Shotha Pathya</text>

          <line class="arrow" x1="280" y1="520" x2="430" y2="555"/>
          <line class="arrow" x1="705" y1="490" x2="600" y2="555"/>

          <!-- MgSO4 Toxicity Signs box -->
          <rect class="box-purple" x="130" y="635" width="600" height="55"/>
          <text class="label-bold" x="430" y="655">MgSO4 Toxicity Signs — STOP MgSO4 and give Calcium Gluconate 1g IV</text>
          <text class="label" x="430" y="672">Loss of patellar reflexes (first sign) → Respiratory depression (RR < 16) → Oliguria (UO < 25mL/hr)</text>
          <text class="label" x="430" y="685">Therapeutic range: 4–7 mEq/L. Reflexes lost: 10 mEq/L. Respiratory arrest: 15 mEq/L. Cardiac arrest: 25 mEq/L</text>

          <line class="arrow" x1="430" y1="610" x2="430" y2="635"/>
        </svg>
      `,
      notes: `
        <p><strong>Key clinical pearls for hypertensive disorders:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Pre-eclampsia = new-onset HTN (≥ 140/90) + proteinuria (≥ 300 mg/24 hr) OR end-organ dysfunction AFTER 20 weeks gestation</li>
          <li>DELIVERY is the ONLY definitive cure for pre-eclampsia. All other treatments are temporizing measures</li>
          <li>MgSO4 is the drug of choice for PREVENTION and TREATMENT of eclamptic seizures — NOT for lowering BP. It is superior to diazepam and phenytoin (Collaborative Eclampsia Trial)</li>
          <li>Before each MgSO4 dose, CHECK: (1) Patellar reflexes present, (2) RR > 16/min, (3) Urine output > 25 mL/hr. If any absent → WITHHOLD dose</li>
          <li>Antidote for MgSO4 toxicity: Calcium Gluconate 1 g (10 mL of 10%) IV slowly over 10 minutes</li>
          <li>Prevention in high-risk women: Low-dose Aspirin 75–150 mg from 12 weeks + Calcium supplementation 1–2 g/day</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Shotha Chikitsa with Modern Pre-eclampsia Management</h3>
      <div class="space-y-4">
        <p>Hypertensive disorders represent a critical area where modern emergency management is essential and life-saving, while Ayurvedic Shotha Chikitsa principles provide valuable adjunctive and preventive support, particularly in mild disease.</p>

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Punarnava — proven diuretic and anti-inflammatory for oedema</li>
              <li>• Dietary approach: salt restriction, Tikta-Kashaya Rasa emphasis</li>
              <li>• Punarnava Mandura for coexisting Shotha + Pandu (oedema + anaemia)</li>
              <li>• Gokshura for renal protection and mild diuresis</li>
              <li>• Recognition of Shotha in Garbhini as Pranahara (life-threatening)</li>
              <li>• Holistic Pathya-Apathya guidelines for mild gestational HTN</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• MgSO4 protocol — life-saving for eclampsia prevention/treatment</li>
              <li>• Evidence-based antihypertensives (Labetalol, Nifedipine, Methyldopa)</li>
              <li>• HELLP syndrome recognition and management</li>
              <li>• Fetal monitoring (NST, Doppler, BPP) for timing of delivery</li>
              <li>• ICU-level care for severe cases</li>
              <li>• Prevention with low-dose Aspirin and Calcium supplementation</li>
            </ul>
          </div>
        </div>

        <div class="bg-white/60 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
          <ol class="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Prevention:</strong> Low-dose Aspirin from 12 wks + Calcium 1 g/day (high-risk) + Shotha Pathya (salt restriction, Yava, Mudga diet)</li>
            <li><strong>Mild Gestational HTN:</strong> Methyldopa + Punarnava Ghrita + Gokshura Kashaya + dietary modifications + twice-weekly monitoring</li>
            <li><strong>Mild Pre-eclampsia:</strong> Methyldopa + Ayurvedic adjunctive Shotha Chikitsa + serial labs. Plan delivery at 37 weeks</li>
            <li><strong>Severe PE/Eclampsia:</strong> Purely modern emergency management — MgSO4 + IV Labetalol + expedite delivery. No role for Ayurvedic treatment in acute crisis</li>
            <li><strong>Postpartum:</strong> Continue monitoring for 72 hrs (eclampsia can occur postpartum). Ayurvedic Sutika Paricharya + continue antihypertensives until BP normalizes</li>
          </ol>
        </div>
      </div>
    `,

    examBullets: [
      "Pre-eclampsia = HTN (≥ 140/90) + proteinuria (≥ 300 mg/24 hr or PCR ≥ 0.3) after 20 weeks. Garbhini Shotha involves Vata-Kapha Dushti with Rasa-Rakta Dhatu Dushti.",
      "Garbhini Shotha is described as Pranahara (life-threatening) by Madhava Nidana — echoing modern recognition that pre-eclampsia/eclampsia is a leading cause of maternal death.",
      "Shotha Nidana (Charaka): Lavana-Amla Atisevana (excess salt/sour), Viruddhahara, Divaswapna, Avyayama. Modern: high sodium diet and sedentary lifestyle worsen pre-eclampsia.",
      "ISSHP classification of HDP: (1) Gestational HTN, (2) Pre-eclampsia (mild/severe), (3) Chronic HTN, (4) Superimposed PE on chronic HTN.",
      "Severe PE criteria: BP ≥ 160/110, OR platelets < 100,000, OR creatinine > 1.1, OR AST > 70, OR pulmonary oedema, OR cerebral/visual symptoms.",
      "HELLP syndrome: Hemolysis (schistocytes, LDH > 600, bilirubin elevated), Elevated Liver enzymes (AST > 70), Low Platelets (< 100,000). Mississippi classification: Class 1 plts < 50K, Class 2: 50–100K, Class 3: 100–150K.",
      "MgSO4 — Pritchard Regimen: Loading = 4 g IV (20%) over 15–20 min + 5 g IM each buttock. Maintenance = 5 g IM alternate buttock every 4 hrs for 24 hrs.",
      "MgSO4 — Zuspan Regimen: Loading = 4 g IV (20%) over 15–20 min. Maintenance = 1–2 g/hr continuous IV infusion for 24 hrs.",
      "Before each MgSO4 dose, check 3 things: (1) Patellar reflexes PRESENT, (2) Respiratory rate > 16/min, (3) Urine output > 25 mL/hr (or > 100 mL in 4 hrs).",
      "MgSO4 toxicity levels: Therapeutic 4–7 mEq/L. Patellar reflex loss 10 mEq/L. Respiratory arrest 15 mEq/L. Cardiac arrest 25 mEq/L. Antidote: Calcium Gluconate 1 g IV.",
      "Antihypertensives in pregnancy: Acute crisis = Labetalol IV or Nifedipine oral. Maintenance = Methyldopa (drug of choice). CONTRAINDICATED: ACE inhibitors, ARBs (teratogenic).",
      "Only CURE for pre-eclampsia = DELIVERY. Mild PE: deliver at 37 wks. Severe PE: stabilize + deliver at 34 wks. Eclampsia: stabilize with MgSO4 then deliver (within 4–6 hrs).",
      "Prevention of PE in high-risk: Low-dose Aspirin 75–150 mg at bedtime from 12–16 weeks + Calcium 1–2 g/day. ASPRE trial supports this approach.",
      "Punarnava (Boerhavia diffusa) = primary Shothaghna drug for Garbhini Shotha. Punarnava Mandura for Shotha + Pandu. Gokshura for renal Shotha. Both are Mutrala (diuretic).",
      "Eclampsia can occur antepartum (most common ~45%), intrapartum (~20%), or postpartum (~35%). Continue MgSO4 for 24 hrs after last seizure or delivery. Postpartum eclampsia can occur up to 4 weeks post-delivery.",
    ],

    mnemonics: [
      {
        title: "MgSO4 Monitoring Before Each Dose",
        acronym: "RRU",
        expansions: [
          "Reflexes — patellar reflexes must be PRESENT",
          "Respiration — respiratory rate must be > 16/min",
          "Urine output — must be > 25 mL/hr (or 100 mL in 4 hrs)",
        ],
      },
      {
        title: "MgSO4 Toxicity Levels (mEq/L)",
        acronym: "T-R-R-C",
        expansions: [
          "Therapeutic range: 4–7 mEq/L (target)",
          "Reflexes lost: 10 mEq/L (first sign of toxicity)",
          "Respiratory arrest: 15 mEq/L (life-threatening)",
          "Cardiac arrest: 25 mEq/L (fatal)",
        ],
      },
      {
        title: "HELLP Syndrome Components",
        acronym: "HELLP",
        expansions: [
          "HEmolysis (schistocytes, high LDH > 600, elevated indirect bilirubin)",
          "ELevated Liver enzymes (AST > 70 U/L, ALT elevated)",
          "Low Platelet count (< 100,000/mm3)",
        ],
      },
      {
        title: "Severe Pre-eclampsia Features",
        acronym: "SHARP",
        expansions: [
          "Systolic ≥ 160 or Diastolic ≥ 110 mmHg",
          "Headache (severe, persistent) + visual disturbances",
          "AST/ALT elevated (liver involvement)",
          "Renal impairment (creatinine > 1.1, oliguria)",
          "Platelets < 100,000 (thrombocytopenia)",
        ],
      },
    ],
  };
}
