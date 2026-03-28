import React from "react";

export function getM11Content() {
  return {
    references: [
      "Charaka Sharira Sthana Ch. 4 (Apara / Garbha Poshana)",
      "Sushruta Sharira Sthana Ch. 3 & 10 (Apara, Garbhini Vyapad)",
      "Ashtanga Hridaya Sharira Sthana Ch. 1",
      "Charaka Chikitsa Sthana Ch. 4 (Raktapitta Chikitsa)",
      "Sushruta Chikitsa Sthana Ch. 14 (Raktapitta)",
      "Williams Obstetrics Ch. 41–44 (APH, PPH, Placental Disorders)",
      "DC Dutta Ch. 18–20 (APH, PPH, Third Stage Complications)",
    ],

    units: [
      {
        title: "Apara (Placenta) — Classical Ayurvedic Concepts",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the Ayurvedic understanding of Apara (placenta) and its role in Garbha Poshana (fetal nutrition). Classical texts describe Apara as an important Upadhatu formed from maternal Rasa-Rakta Dhatu that nourishes the fetus through the Garbha Nabhinadi (umbilical cord). The concept of Aparapatana (expulsion of placenta) and its disorders are discussed."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Apara: definition and formation from Rasa-Rakta Dhatu"),
            React.createElement("li", null, "• Garbha Poshana Krama: mechanism of fetal nutrition through Apara"),
            React.createElement("li", null, "• Garbha Nabhinadi (umbilical cord) — structure and function"),
            React.createElement("li", null, "• Aparapatana (third stage — placental expulsion) — normal process"),
            React.createElement("li", null, "• Disorders: Apara Sanga (retained placenta), Raktasrava from Apara")
          )
        ),
      },
      {
        title: "Antepartum Haemorrhage (APH) — Placenta Praevia & Abruptio Placentae",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the two major causes of APH — placenta praevia (abnormal placental location) and abruptio placentae (premature placental separation). Includes classification, clinical differentiation, diagnosis, and management. APH is defined as bleeding from the genital tract after 28 weeks of gestation."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• APH definition: vaginal bleeding after 28 weeks (some definitions: after 20 weeks)"),
            React.createElement("li", null, "• Placenta praevia: types (complete, partial, marginal, low-lying), painless bleeding"),
            React.createElement("li", null, "• Abruptio placentae: concealed, revealed, mixed types. Painful bleeding"),
            React.createElement("li", null, "• Clinical differentiation: praevia (painless, recurrent) vs abruption (painful, tense uterus)"),
            React.createElement("li", null, "• Couvelaire uterus and DIC in severe abruption")
          )
        ),
      },
      {
        title: "Postpartum Haemorrhage (PPH) — Causes & Management",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers PPH — the single most common cause of maternal death worldwide. Includes the 4 T's classification of causes, active management of third stage (AMTSL), stepwise management of PPH, and Ayurvedic Rakta Srava Chikitsa for post-delivery haemorrhage."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• PPH definition: blood loss > 500 mL (vaginal) or > 1000 mL (LSCS) within 24 hrs"),
            React.createElement("li", null, "• Primary PPH (within 24 hrs) vs Secondary PPH (24 hrs to 12 weeks)"),
            React.createElement("li", null, "• 4 T's: Tone (atony — 70%), Trauma, Tissue (retained), Thrombin (coagulopathy)"),
            React.createElement("li", null, "• AMTSL: active management of third stage of labour (oxytocin, CCT, uterine massage)"),
            React.createElement("li", null, "• Stepwise management: medical → tamponade → surgical → hysterectomy"),
            React.createElement("li", null, "• Ayurvedic Rakta Srava Chikitsa: Nagakesara, Lodhra, Ashoka, Durva")
          )
        ),
      },
    ],

    orientation: {
      why: "Placental disorders causing APH and PPH are the leading causes of maternal mortality globally. PPH alone accounts for approximately 25–30% of all maternal deaths. Understanding Apara (placenta) concepts from Ayurveda alongside modern management of placenta praevia, abruption, and PPH is critical. The 4 T's classification and AMTSL protocol are essential knowledge for every practitioner.",
      examWeight:
        "Extremely high-yield — among the most frequently asked topics. Long essays (20 marks) on APH differential diagnosis, PPH management, and AMTSL appear in nearly every exam. Short notes on placenta praevia vs abruption, 4 T's of PPH, Couvelaire uterus, and B-Lynch suture are very common. MgSO4 for eclampsia and oxytocin for PPH are the two most-tested drug protocols. Ayurvedic questions on Raktasrava Chikitsa and Apara concepts are frequently asked.",
    },

    definition: {
      ayurveda: `
        <p><strong>Apara (अपरा)</strong> is the Ayurvedic term for the placenta. Sushruta describes it as the structure that nourishes the Garbha (fetus) and is formed from the mother's Rasa and Rakta Dhatu.</p>
        <p class="mt-2 font-sanskrit text-saffron-800">"अपरा नाम गर्भस्य पोषणार्थं प्रजायते |\nरसरक्तसमुत्पन्ना गर्भनाभिनाडीयुता ||"</p>
        <p class="mt-2">The Apara is connected to the fetus through the <strong>Garbha Nabhinadi</strong> (umbilical cord). It serves as the medium for Garbha Poshana (fetal nutrition) — transferring Ahara Rasa from mother to fetus.</p>
        <p class="mt-2"><strong>Aparapatana</strong> = expulsion of the placenta after delivery. <strong>Apara Sanga</strong> = retained placenta. <strong>Apara Sthana Bhramsha</strong> = displacement of placenta from normal position (conceptually: placenta praevia).</p>
        <p class="mt-2"><strong>Raktasrava</strong> from Garbhini (haemorrhage during pregnancy/delivery) is treated under Raktapitta Chikitsa principles with specific Stambhana (haemostatic) and Sheeta (cooling) therapies.</p>
      `,
      modern: `
        <p><strong>Antepartum Haemorrhage (APH)</strong> = bleeding from the genital tract after 28 weeks of gestation (some definitions: after 20 weeks) and before delivery of the baby. Incidence: 3–5% of pregnancies.</p>
        <p class="mt-2"><strong>Major causes:</strong> Placenta praevia (~30%), Abruptio placentae (~30%), Indeterminate/local causes (~40%).</p>
        <p class="mt-2"><strong>Postpartum Haemorrhage (PPH)</strong> = blood loss > 500 mL after vaginal delivery or > 1000 mL after caesarean section within 24 hours of delivery (Primary PPH). Secondary PPH occurs from 24 hours to 12 weeks postpartum.</p>
        <p class="mt-2"><strong>PPH remains the #1 cause of maternal mortality worldwide</strong>, accounting for approximately 25–30% of all maternal deaths. Most PPH deaths are preventable with AMTSL and prompt management.</p>
      `,
      classification: {
        title: "Classification of Placental Disorders — APH & PPH",
        headers: ["Condition", "Definition", "Key Feature", "Incidence"],
        rows: [
          [
            "<strong>Placenta Praevia</strong>",
            "Placenta implanted in lower uterine segment, partially or completely covering the internal os",
            "Painless, bright red, recurrent bleeding",
            "0.5–1% of pregnancies at term",
          ],
          [
            "<strong>Abruptio Placentae</strong>",
            "Premature separation of normally implanted placenta after 28 weeks",
            "Painful, dark vaginal bleeding, tense/tender uterus. May be concealed",
            "1–2% of pregnancies",
          ],
          [
            "<strong>Vasa Praevia</strong>",
            "Fetal blood vessels running across the internal os (velamentous insertion)",
            "Bleeding at membrane rupture, fetal distress, sinusoidal CTG pattern",
            "Rare: 1 in 2000–6000",
          ],
          [
            "<strong>Primary PPH</strong>",
            "Blood loss > 500 mL within 24 hours of delivery",
            "Most common cause: uterine atony (70%). The 4 T's classification",
            "5–8% of all deliveries",
          ],
          [
            "<strong>Secondary PPH</strong>",
            "Abnormal bleeding 24 hours to 12 weeks postpartum",
            "Subinvolution, RPOC, endometritis",
            "1–2% of deliveries",
          ],
        ],
      },
    },

    shlokas: [
      {
        source: "Sushruta Sharira Sthana 3/30",
        devanagari:
          "अपरा नाम सा प्रोक्ता या गर्भस्य धारिणी |\nनाभिनाड्या समायुक्ता गर्भपोषणकारिणी ||",
        transliteration:
          "aparā nāma sā prōktā yā garbhasya dhāriṇī |\nnābhināḍyā samāyuktā garbhapōṣaṇakāriṇī ||",
        meaning:
          "That which is called Apara is the structure that sustains (Dharini) the Garbha (fetus). It is connected to the fetus through the Nabhinadi (umbilical cord) and performs the function of Garbha Poshana (fetal nourishment).",
        clinicalNote:
          "Sushruta's description of Apara accurately captures the essential functions of the placenta — fetal sustenance and nutrition via the umbilical cord. Modern placental functions include: gas exchange, nutrient transfer, hormone production (hCG, hPL, estrogen, progesterone), immunological barrier, and waste removal — all encompassed in the concept of Garbha Poshana.",
      },
      {
        source: "Charaka Chikitsa Sthana 4/7 (Raktapitta Chikitsa)",
        devanagari:
          "नागकेसरं लोध्रं च दूर्वां चन्दनमेव च |\nरक्तस्रावे प्रयुञ्जीत शीतवीर्यं च शाम्यति ||",
        transliteration:
          "nāgakēsaraṃ lōdhraṃ ca dūrvāṃ candanamēva ca |\nraktasrāvē prayuñjīta śītavīryaṃ ca śāmyati ||",
        meaning:
          "In cases of Raktasrava (haemorrhage), one should administer Nagakesara (Mesua ferrea), Lodhra (Symplocos racemosa), Durva (Cynodon dactylon), and Chandana (sandalwood). These Sheeta Virya (cooling potency) drugs arrest bleeding.",
        clinicalNote:
          "These Raktastambhana (haemostatic) drugs from Charaka's Raktapitta Chikitsa are applicable to obstetric haemorrhage. Lodhra has confirmed uterotonic properties and is used in Ayurvedic practice for PPH. Nagakesara and Durva are traditional haemostatics. Chandana provides anti-inflammatory and cooling effects. These are used as adjunctive support alongside modern uterotonics.",
      },
      {
        source: "Sushruta Sharira Sthana 10/15",
        devanagari:
          "अपरा चेन्न निर्गच्छेत् प्रसवानन्तरं शनैः |\nवातघ्नौषधसिद्धेन तैलेन परिषेचयेत् ||",
        transliteration:
          "aparā cēnna nirgacchēt prasavānantaraṃ śanaiḥ |\nvātaghnauṣadhasiddhēna tailēna pariṣēcayēt ||",
        meaning:
          "If the Apara (placenta) does not come out (Nirgacchati) after delivery, then gradually (Shanai) apply irrigation/fomentation (Parishechana) with oil (Taila) prepared with Vataghna (Vata-pacifying) drugs.",
        clinicalNote:
          "This describes management of retained placenta (Apara Sanga) — a common cause of PPH. Sushruta's approach of warm oil fomentation to relax the uterus conceptually parallels modern management: controlled cord traction and uterine massage. If the placenta is not delivered within 30 minutes, modern management includes manual removal of placenta under anaesthesia.",
      },
      {
        source: "Charaka Sharira Sthana 8/37",
        devanagari:
          "प्रसवे रक्तमत्यर्थं प्रवर्तेत यदा ध्रुवम् |\nशीतोपचारं कुर्वीत स्तम्भनं च विधीयते ||",
        transliteration:
          "prasavē raktamatyarthaṃ pravartatē yadā dhruvam |\nśītōpacāraṃ kurvīta stambhanaṃ ca vidhīyatē ||",
        meaning:
          "When excessive bleeding (Rakta Atyartha) occurs during or after delivery (Prasava), cooling therapies (Sheeta Upachara) should be applied and Stambhana (haemostatic/astringent) treatment should be administered.",
        clinicalNote:
          "This principle of Sheeta Upachara (cooling therapy) and Stambhana (haemostasis) for postpartum haemorrhage reflects the classical approach. Modern management similarly uses cold compression (bimanual compression) and uterotonic drugs. The Stambhana concept parallels the use of uterotonics (oxytocin, ergometrine, carboprost) that cause uterine contraction to compress bleeding vessels.",
      },
    ],

    dualCols: [
      {
        title: "Antepartum Haemorrhage — Placenta Praevia vs Abruptio Placentae",
        ayurvedaTitle: "Placenta Praevia",
        modernTitle: "Abruptio Placentae",
        ayurvedaContent: `
          <p><strong>Placenta Praevia — Key Features:</strong></p>
          <ul class="space-y-2">
            <li><strong>Definition:</strong> Placenta implanted in lower uterine segment, reaching or covering internal os</li>
            <li><strong>Types:</strong> Complete (Type IV — covers os entirely), Partial (Type III — partially covers), Marginal (Type II — reaches margin), Low-lying (Type I — in lower segment, not reaching os)</li>
            <li><strong>Bleeding:</strong> Painless, bright red, causeless, recurrent, tends to increase with each episode. No relationship to activity</li>
            <li><strong>Examination:</strong> Uterus soft, relaxed, non-tender. Malpresentation common (transverse, breech) due to placenta occupying lower segment. Head high/floating</li>
            <li><strong>Risk Factors:</strong> Previous LSCS (most important), multiparity, previous praevia, uterine surgery, advanced maternal age, smoking, IVF</li>
            <li><strong>Diagnosis:</strong> TVS (transabdominal USG for screening). NEVER do vaginal exam before ruling out praevia by USG</li>
            <li><strong>Management:</strong> Type I/II: may attempt vaginal if bleeding mild. Type III/IV: elective LSCS at 37–38 weeks. Emergency LSCS for massive haemorrhage</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Abruptio Placentae — Key Features:</strong></p>
          <ul class="space-y-2">
            <li><strong>Definition:</strong> Premature separation of normally situated placenta after 28 weeks</li>
            <li><strong>Types:</strong> Revealed (80% — bleeding visible vaginally), Concealed (20% — blood trapped behind placenta, more dangerous), Mixed (combined)</li>
            <li><strong>Bleeding:</strong> Painful, dark blood (old blood). Constant abdominal pain. May be minimal visible bleeding with concealed type despite massive internal haemorrhage</li>
            <li><strong>Examination:</strong> Uterus tense, tender, woody hard (board-like rigidity). May be larger than dates (concealed). Fetal parts difficult to palpate. FHR may be absent</li>
            <li><strong>Risk Factors:</strong> Hypertension (most important — 50% of severe abruption), previous abruption, trauma, cocaine use, PPROM, polyhydramnios with sudden decompression, smoking</li>
            <li><strong>Complications:</strong> Couvelaire uterus (uterine apoplexy — blood infiltrates myometrium), DIC (20% of severe), renal failure, fetal death (30–60% severe), Sheehan syndrome</li>
            <li><strong>Management:</strong> Mild with live fetus > 37 wks: deliver. Severe: emergency LSCS + correct DIC + transfuse. Fetal death: may allow vaginal delivery + manage coagulopathy</li>
          </ul>
        `,
      },
      {
        title: "PPH Management",
        ayurvedaTitle: "Ayurvedic Rakta Srava Chikitsa",
        modernTitle: "Modern PPH Step-wise Management",
        ayurvedaContent: `
          <p><strong>Ayurvedic approach to obstetric haemorrhage (Prasava Raktasrava):</strong></p>
          <ul class="space-y-2">
            <li><strong>Stambhana Chikitsa (Haemostatic):</strong> Lodhra (Symplocos racemosa) — uterotonic + haemostatic. Nagakesara (Mesua ferrea) — Raktastambhana. Durva Svarasa (Cynodon dactylon juice). Ashoka Kashaya (Saraca asoca) — uterotonic</li>
            <li><strong>Sheeta Upachara (Cooling therapy):</strong> Chandana (sandalwood) paste application. Ushira (vetiver) preparations. Cold milk preparations. Sheeta Jala Parishechana (cold water irrigation)</li>
            <li><strong>Garbhashaya Sankochana (Uterine contraction):</strong> Dashmoola Kashaya (orally + Yoni Dhavana). Eranda Mula Kashaya. Ashoka bark decoction. These have documented uterotonic properties</li>
            <li><strong>Post-haemorrhage Recovery:</strong> Loha Bhasma + Dhatri Lauha (iron supplementation). Shatavari Lehya for strength. Ashwagandha Rasayana for recovery. Jeevaniya Gana Dravyas for tissue repair</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Modern stepwise management of PPH:</strong></p>
          <ul class="space-y-2">
            <li><strong>Step 1 — First Line (Medical):</strong>
              <br/>Oxytocin 10–20 IU IV infusion (first-line)
              <br/>Ergometrine 0.2 mg IM (avoid in hypertension)
              <br/>Carboprost (PGF2a) 250 mcg IM every 15 min (max 8 doses)
              <br/>Misoprostol 800 mcg sublingual/rectal</li>
            <li><strong>Step 2 — Tamponade:</strong>
              <br/>Bimanual uterine compression
              <br/>Condom catheter (Bakri balloon) tamponade
              <br/>Uterine packing (roller gauze)</li>
            <li><strong>Step 3 — Surgical:</strong>
              <br/>B-Lynch compression suture
              <br/>Uterine artery ligation (bilateral)
              <br/>Internal iliac artery ligation
              <br/>Uterine artery embolization (interventional radiology)</li>
            <li><strong>Step 4 — Hysterectomy:</strong>
              <br/>Peripartum hysterectomy as life-saving last resort
              <br/>Total or subtotal based on urgency</li>
            <li><strong>Resuscitation (simultaneous):</strong> 2 large-bore IV lines, crystalloids + colloids, blood transfusion (cross-match 4 units), correct DIC (FFP, platelets, cryoprecipitate), keep warm</li>
          </ul>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Clinical Differentiation — Placenta Praevia vs Abruptio Placentae",
        headers: ["Feature", "Placenta Praevia", "Abruptio Placentae"],
        rows: [
          [
            "<strong>Type of Bleeding</strong>",
            "Painless, bright red, causeless, recurrent, tends to increase",
            "Painful, dark blood (often), constant. May be concealed (no visible bleeding)",
          ],
          [
            "<strong>Pain</strong>",
            "Absent — painless bleeding is hallmark",
            "Present — constant, severe abdominal pain. Back pain in posterior placenta",
          ],
          [
            "<strong>Uterine Findings</strong>",
            "Soft, relaxed, non-tender. Normal tone",
            "Tense, tender, woody hard (board-like). Hypertonic. May be Couvelaire (apoplexy)",
          ],
          [
            "<strong>Fetal Condition</strong>",
            "Usually alive unless massive haemorrhage. Malpresentation common (transverse/breech). Head high",
            "May be dead (30–60% in severe). Fetal parts difficult to palpate. Fetal distress common",
          ],
          [
            "<strong>Shock vs Bleeding</strong>",
            "Degree of shock proportionate to visible blood loss",
            "Shock may be OUT OF PROPORTION to visible bleeding (concealed haemorrhage)",
          ],
          [
            "<strong>Coagulopathy</strong>",
            "Rare unless massive haemorrhage",
            "Common — DIC in 20% of severe cases. Hypofibrinogenemia",
          ],
          [
            "<strong>Association</strong>",
            "Previous LSCS, multiparity, advanced age, smoking",
            "Hypertension (50%), trauma, cocaine, PPROM, thrombophilia",
          ],
          [
            "<strong>Vaginal Exam</strong>",
            "CONTRAINDICATED until placenta praevia ruled out by USG",
            "May be done carefully. Cervix may be dilated. Clots may be present",
          ],
        ],
      },
    ],

    investigations: [
      {
        title: "Investigations in APH and PPH",
        headers: ["Investigation", "Purpose", "Key Findings", "Timing"],
        rows: [
          [
            "<strong>Ultrasonography (TVS/TAS)</strong>",
            "Localize placenta in APH. Rule out praevia",
            "Placental position (praevia: covering/near os). Retroplacental clot in abruption (not always seen). Fetal viability",
            "First investigation in APH. TVS is more accurate for placental localization. Never VE before USG in APH",
          ],
          [
            "<strong>CBC + Cross-match</strong>",
            "Assess Hb, prepare blood for transfusion",
            "Low Hb (blood loss). Falling Hb on serial checks. Thrombocytopenia in DIC (abruption). Cross-match at least 4 units in severe APH",
            "Immediately on admission. Serial Hb every 4–6 hours in active bleeding. Always have blood ready",
          ],
          [
            "<strong>Coagulation Profile</strong>",
            "Detect DIC (especially in abruption, massive PPH)",
            "Prolonged PT, aPTT. Low fibrinogen (< 200 mg/dL critical in pregnancy). Elevated FDP/D-dimer. Low platelets",
            "All cases of severe abruption and massive PPH. Bedside clot observation test: blood in glass tube — should clot in 6–8 min. Failure = DIC",
          ],
          [
            "<strong>Kleihauer-Betke Test</strong>",
            "Detect fetal blood cells in maternal circulation (fetomaternal haemorrhage)",
            "Positive = fetal blood in maternal circulation. Quantifies volume of FMH for Anti-D dosing",
            "After APH to assess fetomaternal haemorrhage. Rh-negative mothers — determines Anti-D dose needed",
          ],
          [
            "<strong>CTG (Cardiotocography)</strong>",
            "Assess fetal condition in APH",
            "Normal: reactive trace. Fetal distress: late decelerations, reduced variability. Sinusoidal pattern: severe fetal anaemia (vasa praevia rupture)",
            "Continuous monitoring in APH. Fetal compromise = urgent delivery. Sinusoidal pattern is an emergency (fetal exsanguination)",
          ],
          [
            "<strong>Blood Group + Rh Typing</strong>",
            "Compatibility for transfusion, Anti-D need",
            "ABO and Rh status. Antibody screening",
            "Mandatory on first admission. Anti-D for all Rh-negative mothers with APH within 72 hrs",
          ],
        ],
      },
    ],

    management: {
      diagramTitle: "Clinical Decision Tree — Management of Placental Disorders (APH & PPH)",
      diagramSvg: `
        <svg viewBox="0 0 870 800" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 11px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah11); }
            .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#ah11-g); }
            .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#ah11-r); }
            .yes-label { font-size: 10px; fill: #2E7D32; font-weight: bold; }
            .no-label { font-size: 10px; fill: #C62828; font-weight: bold; }
          </style>
          <defs>
            <marker id="ah11" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A"/></marker>
            <marker id="ah11-g" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A"/></marker>
            <marker id="ah11-r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#EF5350"/></marker>
          </defs>

          <!-- APH Section -->
          <rect class="box-red" x="220" y="10" width="400" height="40"/>
          <text class="label-bold" x="420" y="35">VAGINAL BLEEDING > 28 WEEKS (APH)</text>

          <line class="arrow" x1="420" y1="50" x2="420" y2="75"/>

          <rect class="box-blue" x="280" y="75" width="280" height="40"/>
          <text class="label-bold" x="420" y="95">Admit + IV access + CBC + Cross-match + USG</text>
          <text class="label" x="420" y="108">NEVER do vaginal exam before USG</text>

          <line class="arrow" x1="420" y1="115" x2="420" y2="140"/>

          <rect class="box" x="310" y="140" width="220" height="35"/>
          <text class="label-bold" x="420" y="163">USG: Placenta Location?</text>

          <!-- Praevia -->
          <line class="arrow-yes" x1="330" y1="175" x2="160" y2="205"/>
          <text class="yes-label" x="225" y="193">Praevia (covers os)</text>

          <!-- Abruption -->
          <line class="arrow-no" x1="510" y1="175" x2="680" y2="205"/>
          <text class="no-label" x="615" y="193">Normal position (Abruption)</text>

          <!-- Praevia management -->
          <rect class="box" x="30" y="205" width="260" height="60"/>
          <text class="label-bold" x="160" y="222">PLACENTA PRAEVIA</text>
          <text class="label" x="160" y="237">Minor (Type I-II): expectant if stable</text>
          <text class="label" x="160" y="252">Major (Type III-IV): admit, steroids if < 34 wks</text>
          <text class="label" x="160" y="262">Elective LSCS at 37–38 wks</text>

          <!-- Abruption management -->
          <rect class="box-red" x="560" y="205" width="280" height="60"/>
          <text class="label-bold" x="700" y="222">ABRUPTIO PLACENTAE</text>
          <text class="label" x="700" y="237">Mild + alive fetus > 37 wks: deliver</text>
          <text class="label" x="700" y="252">Severe: emergency LSCS + transfuse + DIC mgmt</text>
          <text class="label" x="700" y="262">Dead fetus: vaginal delivery + correct DIC</text>

          <!-- Massive haemorrhage -->
          <line class="arrow" x1="160" y1="265" x2="160" y2="295"/>
          <line class="arrow" x1="700" y1="265" x2="700" y2="295"/>

          <rect class="box-red" x="255" y="295" width="350" height="45"/>
          <text class="label-bold" x="430" y="312">MASSIVE HAEMORRHAGE (either cause)</text>
          <text class="label" x="430" y="330">Resuscitate + Blood transfusion + Emergency LSCS + DIC correction</text>

          <line class="arrow" x1="160" y1="295" x2="350" y2="310"/>
          <line class="arrow" x1="700" y1="295" x2="530" y2="310"/>

          <!-- PPH Section -->
          <rect class="box-red" x="220" y="370" width="420" height="40"/>
          <text class="label-bold" x="430" y="395">POSTPARTUM HAEMORRHAGE (> 500 mL blood loss)</text>

          <line class="arrow" x1="430" y1="410" x2="430" y2="435"/>

          <rect class="box-blue" x="260" y="435" width="340" height="40"/>
          <text class="label-bold" x="430" y="453">Identify Cause — 4 T's</text>
          <text class="label" x="430" y="468">Tone (70%) | Trauma (20%) | Tissue (9%) | Thrombin (1%)</text>

          <!-- 4 T's branches -->
          <line class="arrow" x1="310" y1="475" x2="130" y2="510"/>
          <line class="arrow" x1="400" y1="475" x2="340" y2="510"/>
          <line class="arrow" x1="460" y1="475" x2="540" y2="510"/>
          <line class="arrow" x1="530" y1="475" x2="740" y2="510"/>

          <!-- Tone -->
          <rect class="box" x="30" y="510" width="195" height="55"/>
          <text class="label-bold" x="127" y="528">TONE (Atony — 70%)</text>
          <text class="label" x="127" y="543">Uterine massage + Oxytocin</text>
          <text class="label" x="127" y="556">Ergometrine + Carboprost</text>

          <!-- Trauma -->
          <rect class="box" x="245" y="510" width="180" height="55"/>
          <text class="label-bold" x="335" y="528">TRAUMA (20%)</text>
          <text class="label" x="335" y="543">Repair tears (cervical,</text>
          <text class="label" x="335" y="556">vaginal, perineal)</text>

          <!-- Tissue -->
          <rect class="box" x="445" y="510" width="180" height="55"/>
          <text class="label-bold" x="535" y="528">TISSUE (9%)</text>
          <text class="label" x="535" y="543">Manual removal of retained</text>
          <text class="label" x="535" y="556">placenta / placental bits</text>

          <!-- Thrombin -->
          <rect class="box" x="645" y="510" width="195" height="55"/>
          <text class="label-bold" x="742" y="528">THROMBIN (1%)</text>
          <text class="label" x="742" y="543">Correct DIC: FFP, platelets</text>
          <text class="label" x="742" y="556">Cryoprecipitate, TXA 1g IV</text>

          <!-- Stepwise escalation -->
          <line class="arrow" x1="127" y1="565" x2="350" y2="595"/>

          <rect class="box-red" x="200" y="595" width="460" height="65"/>
          <text class="label-bold" x="430" y="612">Stepwise Escalation if Atony Persists</text>
          <text class="label" x="430" y="628">Step 1: Uterotonics (Oxytocin, Ergometrine, Carboprost, Misoprostol)</text>
          <text class="label" x="430" y="643">Step 2: Tamponade (Bimanual compression, Condom catheter/Bakri balloon)</text>
          <text class="label" x="430" y="656">Step 3: Surgery (B-Lynch suture, Uterine/Internal iliac artery ligation, Embolization)</text>

          <line class="arrow" x1="430" y1="660" x2="430" y2="685"/>

          <!-- Ayurvedic box -->
          <rect class="box" x="60" y="685" width="700" height="55"/>
          <text class="label-bold" x="410" y="705">Ayurvedic Rakta Srava Chikitsa (Adjunctive Role)</text>
          <text class="label" x="410" y="720">Stambhana: Lodhra + Nagakesara + Durva Svarasa (haemostatic). Ashoka Kashaya (uterotonic)</text>
          <text class="label" x="410" y="735">Recovery: Dhatri Lauha (iron), Shatavari Lehya, Ashwagandha Rasayana for post-haemorrhage restoration</text>

          <!-- Last resort -->
          <rect class="box-red" x="680" y="595" width="170" height="45"/>
          <text class="label-bold" x="765" y="612">LAST RESORT</text>
          <text class="label" x="765" y="630">Peripartum Hysterectomy</text>

          <line class="arrow" x1="660" y1="625" x2="680" y2="617"/>
        </svg>
      `,
      notes: `
        <p><strong>Key clinical pearls for APH and PPH:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>GOLDEN RULE in APH: NEVER do a vaginal examination until placenta praevia has been ruled out by USG. VE can trigger catastrophic haemorrhage in praevia</li>
          <li>In abruption, shock is DISPROPORTIONATE to visible bleeding (concealed haemorrhage). Uterine size may increase. Always check for DIC</li>
          <li>AMTSL (Active Management of Third Stage of Labour) prevents PPH: (1) Oxytocin 10 IU IM within 1 min of delivery, (2) Controlled cord traction, (3) Uterine massage</li>
          <li>4 T's of PPH: Tone (atony = 70%, most common), Trauma (lacerations), Tissue (retained placenta/clots), Thrombin (coagulopathy/DIC)</li>
          <li>B-Lynch compression suture = brace suture for atonic uterus that compresses uterus. Preserves uterus and fertility</li>
          <li>Tranexamic acid (TXA) 1 g IV within 3 hours of PPH onset reduces death from bleeding (WOMAN trial). Now part of standard PPH protocol</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Ayurvedic Apara Concepts with Modern Placental Disorder Management</h3>
      <div class="space-y-4">
        <p>Placental disorders causing APH and PPH require primarily modern emergency management. However, Ayurvedic concepts of Apara, Raktasrava Chikitsa, and Stambhana therapy provide valuable adjunctive support and a strong framework for prevention and post-haemorrhage recovery.</p>

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Apara concept with clear understanding of placental function</li>
              <li>• Raktastambhana drugs: Lodhra (proven uterotonic), Nagakesara, Durva</li>
              <li>• Ashoka Kashaya — documented uterotonic and haemostatic properties</li>
              <li>• Sheeta Upachara principle for haemorrhage management</li>
              <li>• Comprehensive post-haemorrhage recovery with Rasayana and iron (Lauha)</li>
              <li>• Management of Apara Sanga (retained placenta) with Vataghna Taila</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• USG for precise placental localization (praevia diagnosis)</li>
              <li>• Evidence-based uterotonic protocols (Oxytocin, Carboprost, Misoprostol)</li>
              <li>• AMTSL for PPH prevention — simple and highly effective</li>
              <li>• Surgical options: B-Lynch suture, artery ligation, embolization</li>
              <li>• Blood transfusion and DIC management (FFP, Cryoprecipitate)</li>
              <li>• Tranexamic acid (WOMAN trial evidence) — reduces PPH mortality</li>
            </ul>
          </div>
        </div>

        <div class="bg-white/60 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
          <ol class="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>APH — Diagnosis:</strong> USG for placental localization (purely modern). Never VE before USG. Classify as praevia vs abruption</li>
            <li><strong>APH — Management:</strong> Modern emergency management: admit, IV access, cross-match, correct DIC, deliver (LSCS for praevia/severe abruption)</li>
            <li><strong>PPH — Prevention:</strong> AMTSL at every delivery + Ashoka Kashaya as adjunctive uterotonic in Ayurvedic obstetric practice</li>
            <li><strong>PPH — Treatment:</strong> Stepwise modern management: uterotonics → tamponade → surgery → hysterectomy. Ayurvedic Stambhana drugs as adjunctive only</li>
            <li><strong>Post-haemorrhage Recovery:</strong> Dhatri Lauha + Shatavari Lehya + Ashwagandha Rasayana for anaemia correction and strength restoration + modern iron/blood transfusion as needed</li>
          </ol>
        </div>
      </div>
    `,

    examBullets: [
      "Apara (placenta) = formed from Rasa-Rakta Dhatu, connected to fetus by Garbha Nabhinadi (umbilical cord), performs Garbha Poshana (Su. Sha. 3/30).",
      "APH = bleeding from genital tract after 28 weeks. Two major causes: Placenta Praevia (30%) and Abruptio Placentae (30%). NEVER do VE before USG in APH.",
      "Placenta Praevia types: Type I (low-lying), Type II (marginal — reaches os), Type III (partial — partially covers os), Type IV (complete — entirely covers os).",
      "Placenta Praevia hallmark: PAINLESS, bright red, recurrent, causeless vaginal bleeding. Soft relaxed uterus. Malpresentation common. Head high and floating.",
      "Abruptio Placentae hallmark: PAINFUL bleeding (dark blood), tense tender woody-hard uterus, shock disproportionate to visible bleeding (concealed type), DIC risk.",
      "Couvelaire uterus (uterine apoplexy) = blood infiltrates myometrium in severe abruption. Uterus appears bluish-purple. May not contract → PPH → may need hysterectomy.",
      "PPH definition: blood loss > 500 mL (vaginal delivery) or > 1000 mL (LSCS) within 24 hrs. Primary (within 24 hrs) vs Secondary (24 hrs to 12 weeks postpartum).",
      "4 T's of PPH: Tone (atony = 70% — most common cause), Trauma (lacerations = 20%), Tissue (retained placenta/membranes = 9%), Thrombin (coagulopathy/DIC = 1%).",
      "AMTSL (Active Management of Third Stage): (1) Oxytocin 10 IU IM within 1 min of delivery, (2) Controlled cord traction (Brandt-Andrews), (3) Uterine massage. Reduces PPH by 60%.",
      "PPH uterotonics: Oxytocin 10–40 IU IV infusion (first-line). Ergometrine 0.2 mg IM (contraindicated in HTN). Carboprost (15-methyl PGF2a) 250 mcg IM q15min. Misoprostol 800 mcg SL/PR.",
      "B-Lynch suture = compression (brace) suture for atonic PPH unresponsive to medical management. Preserves uterus and fertility. Applied via laparotomy after failed medical treatment.",
      "Tranexamic acid (TXA) 1 g IV given within 3 hours of PPH onset — WOMAN trial showed reduced death from bleeding. Now included in WHO PPH management protocol.",
      "Placenta Praevia management: Minor (Type I-II) + stable = expectant, deliver vaginally if possible. Major (Type III-IV) = elective LSCS at 37–38 weeks. Emergency LSCS for uncontrolled bleeding.",
      "Risk factors: Praevia = previous LSCS (#1), multiparity, previous praevia, uterine surgery. Abruption = hypertension (#1, 50%), previous abruption, trauma, cocaine, PPROM.",
      "Ayurvedic Raktasrava Chikitsa: Stambhana drugs — Lodhra (uterotonic + haemostatic), Nagakesara, Durva Svarasa, Ashoka Kashaya. Sheeta Upachara (cooling therapy). Post-haemorrhage: Dhatri Lauha, Shatavari Rasayana.",
    ],

    mnemonics: [
      {
        title: "4 T's of PPH Causes",
        acronym: "4 T's",
        expansions: [
          "Tone — uterine atony (70% of PPH, most common cause)",
          "Trauma — cervical/vaginal/perineal tears, uterine rupture (20%)",
          "Tissue — retained placenta, placental fragments, membranes (9%)",
          "Thrombin — coagulopathy, DIC, pre-existing bleeding disorders (1%)",
        ],
      },
      {
        title: "Placenta Praevia vs Abruption Differentiation",
        acronym: "PRAEVIA vs ABRUPTION",
        expansions: [
          "PRAEVIA: Painless, Recurrent, bright red blood, soft uterus, malpresentation",
          "ABRUPTION: Agonizing pain, dark blood, tense tender uterus, concealed bleeding, DIC",
        ],
      },
      {
        title: "AMTSL Steps (PPH Prevention)",
        acronym: "OCU",
        expansions: [
          "Oxytocin 10 IU IM within 1 minute of baby delivery",
          "Controlled Cord Traction (Brandt-Andrews manoeuvre)",
          "Uterine massage (transabdominal fundal massage for 2 min, then every 15 min x 2 hrs)",
        ],
      },
      {
        title: "PPH Stepwise Management Escalation",
        acronym: "MTSH",
        expansions: [
          "Medical — Uterotonics (Oxytocin, Ergometrine, Carboprost, Misoprostol, TXA)",
          "Tamponade — Bimanual compression, Condom catheter/Bakri balloon",
          "Surgical — B-Lynch suture, Uterine artery ligation, Internal iliac ligation, Embolization",
          "Hysterectomy — Peripartum hysterectomy as life-saving last resort",
        ],
      },
    ],
  };
}
