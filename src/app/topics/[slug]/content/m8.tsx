import React from "react";

export function getM8Content() {
  return {
    references: [
      "Charaka Sharira Sthana Ch. 8 (Jatisutriya Sharira)",
      "Sushruta Sharira Sthana Ch. 10",
      "Ashtanga Hridaya Sharira Sthana Ch. 1",
      "Kashyapa Samhita — Revatikalpa Adhyaya",
      "Harita Samhita — Tritiya Sthana Ch. 49",
      "Williams Obstetrics Ch. 18–19 (Abortion)",
      "DC Dutta Ch. 15–17 (Abortion & MTP)",
    ],

    units: [
      {
        title: "Garbhasrava & Garbhapata — Classical Concepts",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the fundamental Ayurvedic concepts of pregnancy loss as described by Charaka and Sushruta. Garbhasrava (early spontaneous expulsion) and Garbhapata (established pregnancy loss) are differentiated based on gestational timing and etiopathology involving Vayu, Beeja Dosha, and Garbhashaya Dosha."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Garbhasrava vs Garbhapata: definitions and distinction per Charaka"),
            React.createElement("li", null, "• Nidana (etiology): Beeja Dushti, Garbhashaya Dushti, Daiva, Vayu Prakopa"),
            React.createElement("li", null, "• Samprapti (pathogenesis): role of Apana Vayu and Garbhashaya Vaigunya"),
            React.createElement("li", null, "• Charaka's six factors causing Garbha Nasha (destruction of embryo)"),
            React.createElement("li", null, "• Kashyapa's concept of Revati Graha and pregnancy loss in early gestation")
          )
        ),
      },
      {
        title: "Modern Classification of Abortion",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the modern obstetric classification of abortion, including threatened, inevitable, incomplete, complete, missed, and septic abortion. Covers clinical presentation, diagnosis by USG, and differentiation criteria for each type."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Definition: expulsion of products of conception before 20 weeks / 500 gm"),
            React.createElement("li", null, "• Threatened abortion: bleeding with closed cervix, viable fetus"),
            React.createElement("li", null, "• Inevitable, incomplete, and complete abortion: clinical differentiation"),
            React.createElement("li", null, "• Missed abortion: fetal death with retained products"),
            React.createElement("li", null, "• Septic abortion: infected products — a life-threatening emergency"),
            React.createElement("li", null, "• Recurrent pregnancy loss: three or more consecutive losses")
          )
        ),
      },
      {
        title: "Garbha Sthapana Chikitsa & Modern Management",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers Ayurvedic Garbha Sthapana (pregnancy stabilization) treatment as well as modern medical and surgical management of different types of abortion. Includes pharmacological agents, surgical procedures, and anti-D prophylaxis."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Garbha Sthapana Dravyas: Ashwagandha, Shatavari, Amalaki, Yashtimadhu"),
            React.createElement("li", null, "• Garbha Sthapana Mahakashaya (Charaka's formulation group)"),
            React.createElement("li", null, "• Modern: progesterone support, cervical cerclage for incompetent cervix"),
            React.createElement("li", null, "• Surgical evacuation: MVA, suction evacuation, D&E"),
            React.createElement("li", null, "• Medical management: Misoprostol, Mifepristone protocols"),
            React.createElement("li", null, "• Anti-D immunoglobulin for Rh-negative mothers")
          )
        ),
      },
    ],

    orientation: {
      why: "Garbhasrava and Garbhapata (Abortion/Miscarriage) is a foundational topic linking Ayurvedic concepts of pregnancy loss with modern obstetric classification. Charaka's Garbha Sthapana Mahakashaya and the concept of Beeja Dosha provide a unique preventive and therapeutic framework. The MTP Act is frequently tested in legal medicine sections. Understanding both systems is critical for integrated clinical practice and PG examinations.",
      examWeight:
        "Extremely high-yield. Long essays on classification of abortion with Ayurvedic correlation (20 marks) appear very frequently. Short notes on Garbha Sthapana Dravyas, management of threatened abortion, MTP Act, and recurrent pregnancy loss are common. Expect questions on differentiating types of abortion clinically and on USG. The MTP Act (legal aspects) is asked in almost every Paper 1 exam.",
    },

    definition: {
      ayurveda: `
        <p><strong>Garbhasrava (गर्भस्राव)</strong> — Charaka defines this as the early expulsion of the Garbha (embryo) from the Kukshi (uterus) before it attains full Avayava formation. It occurs typically in the first 3 months (before Sthirata — stabilization of fetus in Month 4).</p>
        <p class="mt-2 font-sanskrit text-saffron-800">"गर्भस्राव इति — त्रिमासादर्वाक् गर्भस्य स्रवणम्"</p>
        <p class="mt-2"><strong>Garbhapata (गर्भपात)</strong> — expulsion of the fetus after it has achieved some degree of Avayava Utpatti (organogenesis), typically after 3 months up to the period of viability. The term literally means "falling of the fetus."</p>
        <p class="mt-2">The primary Dosha involved is <strong>Apana Vayu</strong> — when provoked, it expels the Garbha prematurely. Beeja Dushti (defective reproductive elements) and Garbhashaya Vaigunya (uterine defects) are the major underlying causes.</p>
      `,
      modern: `
        <p><strong>Abortion</strong> is defined as the termination of pregnancy before the period of viability — before 20 weeks of gestation or when the fetus weighs less than 500 grams (WHO definition).</p>
        <p class="mt-2"><strong>Types:</strong> Spontaneous (miscarriage — occurs naturally) or Induced (intentional termination). Spontaneous abortion occurs in approximately 15–20% of clinically recognized pregnancies; the rate is higher if biochemical pregnancies are included (up to 50–60%).</p>
        <p class="mt-2"><strong>Recurrent Pregnancy Loss (RPL):</strong> Three or more consecutive spontaneous abortions before 20 weeks. Affects approximately 1–2% of couples.</p>
      `,
      classification: {
        title: "Classification of Abortion — Ayurvedic & Modern Correlation",
        headers: ["Ayurvedic Term", "Modern Equivalent", "Key Feature", "Cervical Os Status"],
        rows: [
          [
            "<strong>Garbha Sthana Chyuti (Upakrama)</strong>",
            "Threatened Abortion",
            "Bleeding with viable fetus; pregnancy may continue",
            "Closed",
          ],
          [
            "<strong>Garbhasrava (Pravritti)</strong>",
            "Inevitable Abortion",
            "Bleeding with open os; expulsion imminent",
            "Open",
          ],
          [
            "<strong>Khandasha Garbhasrava</strong>",
            "Incomplete Abortion",
            "Partial expulsion; some products retained",
            "Open with tissue at os",
          ],
          [
            "<strong>Sampurna Garbhasrava</strong>",
            "Complete Abortion",
            "Total expulsion of products; bleeding stops",
            "Closed (after expulsion)",
          ],
          [
            "<strong>Mrita Garbha Dharana</strong>",
            "Missed Abortion",
            "Dead fetus retained for > 4 weeks",
            "Closed",
          ],
          [
            "<strong>Dushta Garbhasrava</strong>",
            "Septic Abortion",
            "Infected products; fever, foul discharge, shock",
            "Open (usually)",
          ],
        ],
      },
    },

    shlokas: [
      {
        source: "Charaka Sharira Sthana 8/21",
        devanagari:
          "बीजोपतापाद्दैवाच्च गर्भाशयवहाश्रयात् |\nमातुश्चाहारचेष्टाभ्यां गर्भो विप्रणशिष्यति ||",
        transliteration:
          "bījōpatāpāddaivācca garbhāśayavahāśrayāt |\nmātuścāhāracēṣṭābhyāṃ garbhō vipraṇaśiṣyati ||",
        meaning:
          "The Garbha (embryo/fetus) is destroyed (Vipranashyati) due to: (1) Beeja Upatapa — defects in the reproductive elements (sperm/ovum), (2) Daiva — destiny/fate (unknown factors), (3) Garbhashaya Vaha Ashaya — defects in the uterus and its channels, and (4) maternal dietary and lifestyle errors (Ahara-Cheshta Dosha).",
        clinicalNote:
          "This shloka provides a comprehensive etiological framework that maps remarkably well to modern causes: Beeja Dosha = chromosomal abnormalities (most common cause, ~60%); Daiva = unexplained/idiopathic causes; Garbhashaya Dosha = uterine anomalies, cervical incompetence; Ahara-Cheshta = infections, drugs, trauma, nutritional deficiencies.",
      },
      {
        source: "Charaka Sharira Sthana 2/30",
        devanagari:
          "अश्वगन्धां शतावरीं च आमलकीं यष्टीमधुकम् |\nगर्भस्थापनार्थे प्रयोजयेत् सिद्धं क्षीरेण वा ||",
        transliteration:
          "aśvagandhāṃ śatāvarīṃ ca āmalakīṃ yaṣṭīmadhukam |\ngarbhasthāpanārthē prayōjayēt siddhaṃ kṣīrēṇa vā ||",
        meaning:
          "For the purpose of Garbha Sthapana (stabilization/preservation of pregnancy), one should administer Ashwagandha, Shatavari, Amalaki, and Yashtimadhu (Mulethi) — processed with milk.",
        clinicalNote:
          "Garbha Sthapana Dravyas are used in threatened abortion. Modern pharmacological studies: Ashwagandha (Withania somnifera) — adaptogenic, reduces stress; Shatavari (Asparagus racemosus) — phytoestrogenic, galactagogue; Amalaki — antioxidant, Vitamin C rich; Yashtimadhu — anti-inflammatory, immune-modulatory. These align with modern progesterone support concept for threatened abortion.",
      },
      {
        source: "Sushruta Sharira Sthana 10/57",
        devanagari:
          "गर्भिण्या रक्तमतिप्रवर्तते कटीपृष्ठवेदना च |\nगर्भस्रावस्य एतत् पूर्वरूपं विजानीयात् ||",
        transliteration:
          "garbhiṇyā raktamatipravartatē kaṭīpṛṣṭhavēdanā ca |\ngarbhasrāvasya ētat pūrvarūpaṃ vijānīyāt ||",
        meaning:
          "When a pregnant woman experiences excessive vaginal bleeding (Rakta Pravritti) along with pain in the lower back and waist (Kati-Prishtha Vedana), these should be recognized as the Purvarupa (prodromal signs) of Garbhasrava (threatened abortion/impending miscarriage).",
        clinicalNote:
          "This clinical description precisely matches the modern presentation of threatened abortion — vaginal bleeding in the first trimester with lower back pain/cramping. Per-vaginal bleeding occurs in 20–25% of pregnancies in the first trimester; approximately half of these will progress to abortion. The presence of back pain increases the likelihood of progression.",
      },
      {
        source: "Charaka Sharira Sthana 8/32",
        devanagari:
          "गर्भस्थापनं दशेमानि — ऐन्द्री ब्राह्मी शतवीर्या सहस्रवीर्या |\nअमोघा अव्यथा शिवा अरिष्टा वसुका विश्वकसेनकान्ता च ||",
        transliteration:
          "garbhasthāpanaṃ daśēmāni — aindrī brāhmī śatavīryā sahasravīryā |\namoghā avyathā śivā ariṣṭā vasukā viśvakasēnakāntā ca ||",
        meaning:
          "These are the ten Garbha Sthapana drugs (Dashemani Garbha Sthapana): Aindri, Brahmi, Shatavari (Shatavirya), Sahasravirya, Amogha, Avyatha, Shiva, Arishta, Vasuka, and Vishvaksenakanta. These are the supreme drugs for preserving and protecting the pregnancy.",
        clinicalNote:
          "The Garbha Sthapana Mahakashaya from Charaka Sutra Sthana 4 is one of the 50 Mahakashayas. These drugs possess Balya (strengthening), Brumhana (nourishing), Vatahara (Vata-pacifying), and Garbhashaya Balya (uterine tonic) properties. Identification of some drugs is debated; Shatavari and Brahmi are most commonly used in clinical practice.",
      },
    ],

    dualCols: [
      {
        title: "Etiology of Pregnancy Loss",
        ayurvedaTitle: "Nidana of Garbhasrava / Garbhapata",
        modernTitle: "Modern Causes of Abortion",
        ayurvedaContent: `
          <p><strong>Charaka describes multiple etiological factors (Ch. Sha. 8/21):</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Beeja Dosha:</strong> Defects in Shukra (sperm) or Shonita/Artava (ovum). Leads to non-viable Garbha from inception</li>
            <li><strong>Garbhashaya Dosha:</strong> Abnormalities of the uterus — Vata causing Garbhashaya Shosha (atrophy), Pitta causing Garbhashaya Daha, Kapha causing Garbhashaya Upalepa</li>
            <li><strong>Ahara-Vihara Dosha:</strong> Katu-Tikshna Ahara (pungent-sharp foods), Ati Vyayama (excessive exercise), Ati Maithuna, Abhighata (trauma), Vegadharana (suppression of urges)</li>
            <li><strong>Manasika Nidana:</strong> Shoka (grief), Bhaya (fear), Krodha (anger) — cause Vata Prakopa leading to expulsion</li>
            <li><strong>Daiva:</strong> Fate/karma — unexplained causes. Also includes Graha Dosha per Kashyapa</li>
          </ol>
        `,
        modernContent: `
          <p><strong>Modern etiological classification:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Fetal/Genetic (60%):</strong> Chromosomal abnormalities — trisomy (most common), monosomy X (Turner), triploidy, structural anomalies</li>
            <li><strong>Maternal Anatomical:</strong> Uterine anomalies (septate, bicornuate), cervical incompetence, fibroids (submucosal), Asherman syndrome</li>
            <li><strong>Endocrine:</strong> Progesterone deficiency (luteal phase defect), thyroid disorders, uncontrolled diabetes, PCOS</li>
            <li><strong>Immunological:</strong> Antiphospholipid syndrome (APLA), alloimmune factors, autoimmune diseases (SLE)</li>
            <li><strong>Infections:</strong> TORCH (Toxoplasma, Rubella, CMV, HSV), Listeria, Mycoplasma, Syphilis, Malaria</li>
            <li><strong>Environmental:</strong> Smoking, alcohol, drugs, radiation, toxins, excessive caffeine (>300 mg/day)</li>
          </ol>
        `,
      },
      {
        title: "Treatment of Threatened Abortion",
        ayurvedaTitle: "Garbha Sthapana Chikitsa",
        modernTitle: "Modern Management",
        ayurvedaContent: `
          <p><strong>Ayurvedic management for pregnancy preservation:</strong></p>
          <ul class="space-y-2">
            <li><strong>Garbha Sthapana Dravyas:</strong> Ashwagandha, Shatavari, Yashtimadhu with milk. Amalaki Rasayana for antioxidant support</li>
            <li><strong>Garbha Poshana:</strong> Madhura-Sheeta-Snigdha Ahara (sweet, cool, unctuous diet). Ksheerapaka (milk preparations) with Garbha Sthapana drugs</li>
            <li><strong>Vata Shamana:</strong> Bala Taila Anuvasana Basti (oil enema with Bala Taila). Dashamoola Kashaya for Vata pacification</li>
            <li><strong>Manasika Chikitsa:</strong> Ashwasana (reassurance), pleasant environment, Sattva Avajaya (psychological support), avoidance of Shoka/Bhaya</li>
            <li><strong>Vishrama (Rest):</strong> Complete bed rest. Avoidance of Ati Vyayama, Maithuna, and Vegadharana. Garbhini Paricharya strictly followed</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Modern evidence-based management:</strong></p>
          <ul class="space-y-2">
            <li><strong>Progesterone Support:</strong> Micronized progesterone (200–400 mg vaginal/oral) — evidence supports use in threatened abortion with history of RPL. Dydrogesterone 10 mg BD also used</li>
            <li><strong>Bed Rest:</strong> Modified activity restriction (no strong evidence, but widely practiced). Pelvic rest (avoidance of coitus)</li>
            <li><strong>Serial Monitoring:</strong> Repeat USG in 1–2 weeks to confirm fetal viability. Serial beta-hCG if very early pregnancy</li>
            <li><strong>Cervical Cerclage:</strong> For cervical incompetence — McDonald suture (most common) or Shirodkar procedure at 12–14 weeks</li>
            <li><strong>Low-dose Aspirin + LMWH:</strong> For antiphospholipid syndrome. Aspirin 75–150 mg + Enoxaparin 40 mg daily</li>
            <li><strong>Thyroid Optimization:</strong> Maintain TSH < 2.5 mIU/L in first trimester. Levothyroxine supplementation if hypothyroid</li>
          </ul>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Clinical Differentiation of Types of Abortion",
        headers: ["Type", "Bleeding", "Pain", "Cervical Os", "Uterine Size", "USG Findings"],
        rows: [
          [
            "<strong>Threatened</strong>",
            "Mild, spotting",
            "Mild/none",
            "Closed",
            "Corresponds to dates",
            "Viable fetus, FHR present, subchorionic haematoma may be seen",
          ],
          [
            "<strong>Inevitable</strong>",
            "Heavy, with clots",
            "Severe cramping",
            "Open (dilated)",
            "Corresponds to dates",
            "Intact gestational sac but low-lying, membranes may bulge through os",
          ],
          [
            "<strong>Incomplete</strong>",
            "Heavy, ongoing",
            "Cramping continues",
            "Open, tissue at os",
            "Smaller than dates",
            "Retained products of conception (RPOC), heterogeneous endometrial mass > 15 mm",
          ],
          [
            "<strong>Complete</strong>",
            "Diminished/stopped",
            "Subsided",
            "Closed",
            "Smaller, well-contracted",
            "Empty uterus, thin endometrium < 15 mm, no RPOC",
          ],
          [
            "<strong>Missed</strong>",
            "Brown discharge/none",
            "None usually",
            "Closed",
            "Smaller than dates",
            "Fetal pole with no FHR (CRL > 7 mm), or empty sac > 25 mm (anembryonic/blighted ovum)",
          ],
          [
            "<strong>Septic</strong>",
            "Foul-smelling discharge",
            "Severe, with fever",
            "Open usually",
            "Tender, boggy",
            "RPOC with fluid collection, air in uterus. Endometritis signs",
          ],
        ],
      },
    ],

    investigations: [
      {
        title: "Investigations in Abortion",
        headers: ["Investigation", "Purpose", "Key Findings", "When to Order"],
        rows: [
          [
            "<strong>Transvaginal USG</strong>",
            "Confirm viability, location, completeness",
            "FHR, CRL measurement, RPOC assessment, subchorionic bleed",
            "All cases of first trimester bleeding. Gold standard investigation",
          ],
          [
            "<strong>Serial Serum beta-hCG</strong>",
            "Monitor pregnancy viability",
            "Normal: doubling every 48 hrs. Slow rise: ectopic/non-viable. Falling: abortion in progress",
            "Very early pregnancy when USG inconclusive. Also to rule out ectopic",
          ],
          [
            "<strong>Blood Group & Rh Typing</strong>",
            "Determine Rh status for anti-D prophylaxis",
            "Rh-negative mother needs anti-D within 72 hours of bleeding/abortion",
            "All cases of abortion. Mandatory before evacuation",
          ],
          [
            "<strong>CBC, Blood Typing</strong>",
            "Assess haemoglobin, plan transfusion if needed",
            "Anaemia from blood loss. Leucocytosis in septic abortion",
            "All cases. Cross-match if heavy bleeding or surgical evacuation planned",
          ],
          [
            "<strong>Coagulation Profile</strong>",
            "Rule out DIC, especially in missed abortion",
            "Prolonged PT/aPTT, low fibrinogen, raised FDP in DIC",
            "Missed abortion > 4 weeks retention. Septic abortion. Massive haemorrhage",
          ],
          [
            "<strong>RPL Workup</strong>",
            "Investigate recurrent pregnancy loss causes",
            "APLA panel, thyroid function, karyotyping, uterine imaging",
            "After 3+ consecutive losses (or 2 with risk factors). Includes HSG, hysteroscopy",
          ],
        ],
      },
    ],

    management: {
      diagramTitle: "Clinical Decision Tree — Management of Abortion (Garbhasrava / Garbhapata)",
      diagramSvg: `
        <svg viewBox="0 0 850 720" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah8); }
            .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#ah8-g); }
            .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#ah8-r); }
            .yes-label { font-size: 11px; fill: #2E7D32; font-weight: bold; }
            .no-label { font-size: 11px; fill: #C62828; font-weight: bold; }
          </style>
          <defs>
            <marker id="ah8" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A"/></marker>
            <marker id="ah8-g" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A"/></marker>
            <marker id="ah8-r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#EF5350"/></marker>
          </defs>

          <!-- Top -->
          <rect class="box" x="260" y="10" width="320" height="45"/>
          <text class="label-bold" x="420" y="32">Pregnant Woman with Vaginal Bleeding</text>
          <text class="label" x="420" y="48">(First Trimester — Garbhasrava Lakshana)</text>

          <line class="arrow" x1="420" y1="55" x2="420" y2="80"/>

          <!-- USG Assessment -->
          <rect class="box-blue" x="300" y="80" width="240" height="40"/>
          <text class="label-bold" x="420" y="105">Transvaginal USG + Serum beta-hCG</text>

          <!-- Branch: Viable vs Non-viable -->
          <line class="arrow-yes" x1="340" y1="120" x2="170" y2="155"/>
          <text class="yes-label" x="235" y="140">FHR Present (Viable)</text>

          <line class="arrow-no" x1="500" y1="120" x2="660" y2="155"/>
          <text class="no-label" x="600" y="140">No FHR / Non-viable</text>

          <!-- Viable: Threatened -->
          <rect class="box-green" x="50" y="155" width="240" height="50"/>
          <text class="label-bold" x="170" y="175">THREATENED ABORTION</text>
          <text class="label" x="170" y="195">Cervix closed, mild bleeding</text>

          <line class="arrow" x1="170" y1="205" x2="170" y2="240"/>

          <rect class="box-green" x="30" y="240" width="280" height="65"/>
          <text class="label-bold" x="170" y="258">Conservative Management</text>
          <text class="label" x="170" y="275">Bed rest + Progesterone support</text>
          <text class="label" x="170" y="290">Garbha Sthapana: Shatavari, Ashwagandha + milk</text>

          <!-- Non-viable branch -->
          <rect class="box-red" x="560" y="155" width="230" height="50"/>
          <text class="label-bold" x="675" y="175">NON-VIABLE PREGNANCY</text>
          <text class="label" x="675" y="195">No FHR or Anembryonic</text>

          <line class="arrow" x1="620" y1="205" x2="530" y2="245"/>
          <line class="arrow" x1="730" y1="205" x2="780" y2="245"/>

          <!-- Inevitable/Incomplete -->
          <rect class="box-red" x="420" y="245" width="200" height="55"/>
          <text class="label-bold" x="520" y="265">Inevitable / Incomplete</text>
          <text class="label" x="520" y="280">Os open, heavy bleeding</text>
          <text class="label" x="520" y="293">RPOC on USG</text>

          <line class="arrow" x1="520" y1="300" x2="520" y2="335"/>

          <rect class="box-blue" x="420" y="335" width="200" height="50"/>
          <text class="label-bold" x="520" y="355">Surgical Evacuation</text>
          <text class="label" x="520" y="375">MVA / Suction / D&E</text>

          <!-- Missed Abortion -->
          <rect class="box" x="680" y="245" width="160" height="55"/>
          <text class="label-bold" x="760" y="265">Missed Abortion</text>
          <text class="label" x="760" y="280">Dead fetus retained</text>
          <text class="label" x="760" y="293">Os closed</text>

          <line class="arrow" x1="760" y1="300" x2="760" y2="335"/>

          <rect class="box-blue" x="665" y="335" width="190" height="50"/>
          <text class="label-bold" x="760" y="355">Medical: Misoprostol</text>
          <text class="label" x="760" y="375">or Surgical Evacuation</text>

          <!-- Septic Abortion Alert -->
          <rect class="box-red" x="60" y="350" width="280" height="50"/>
          <text class="label-bold" x="200" y="370">SEPTIC ABORTION (Emergency)</text>
          <text class="label" x="200" y="390">IV Antibiotics + Resuscitate + Evacuate</text>

          <!-- Ayurvedic Approach -->
          <rect class="box" x="60" y="440" width="730" height="80"/>
          <text class="label-bold" x="425" y="462">Ayurvedic Approach — Garbha Sthapana Protocol (Charaka Sha. 8)</text>
          <text class="label" x="425" y="480">Threatened: Garbha Sthapana Dravyas + Ksheerapaka + Bed rest + Manasika Chikitsa</text>
          <text class="label" x="425" y="496">Habitual: Shodhana before conception + Garbha Sthapana from Day 1 + Masanumasika Paricharya</text>
          <text class="label" x="425" y="512">Post-abortion: Yoni Pichu, Uttara Basti, Rasayana for recovery before next conception</text>

          <line class="arrow" x1="425" y1="385" x2="425" y2="440"/>

          <!-- MTP Act Box -->
          <rect class="box-blue" x="140" y="550" width="570" height="65"/>
          <text class="label-bold" x="425" y="572">MTP Act, 1971 (Amended 2021) — Legal Induced Abortion</text>
          <text class="label" x="425" y="590">Up to 20 wks: 1 registered medical practitioner. Up to 24 wks: 2 RMPs (special categories)</text>
          <text class="label" x="425" y="606">No upper limit: Fetal abnormality (Medical Board of 3+ members including Gynaecologist)</text>

          <!-- Bottom integrated -->
          <rect class="box-green" x="150" y="640" width="550" height="45"/>
          <text class="label-bold" x="425" y="660">Integrated: Garbha Sthapana + Progesterone + Serial USG Monitoring</text>
          <text class="label" x="425" y="678">Anti-D for Rh-ve mothers. RPL workup after 3 losses</text>

          <line class="arrow" x1="425" y1="520" x2="425" y2="550"/>
          <line class="arrow" x1="425" y1="615" x2="425" y2="640"/>
        </svg>
      `,
      notes: `
        <p><strong>Key clinical pearls for abortion management:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Charaka's Beeja Dosha corresponds to chromosomal abnormalities — the single most common cause of first-trimester loss (~60% of sporadic abortions)</li>
          <li>Garbha Sthapana Mahakashaya (10 drugs of Charaka) is the classical formulation group for pregnancy preservation — used from conception in high-risk cases</li>
          <li>Threatened abortion with FHR present has ~90% chance of continuing. Without FHR (CRL > 7 mm) = missed abortion = non-viable</li>
          <li>Discriminatory hCG levels: TAS > 6500 mIU/mL, TVS > 1500 mIU/mL — should see gestational sac. If not → suspect ectopic</li>
          <li>Anti-D immunoglobulin (300 mcg IM) must be given within 72 hours to all Rh-negative unsensitized women after any abortion event</li>
          <li>MTP Act 2021 Amendment: upper limit raised to 24 weeks for special categories (rape, minors, change in marital status, disabled women). No limit for fetal anomalies diagnosed by Medical Board</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Classical Garbha Sthapana with Modern Abortion Management</h3>
      <div class="space-y-4">
        <p>The management of pregnancy loss represents a natural area for Ayurvedic-modern integration. Classical Garbha Sthapana principles provide a unique preventive and supportive framework, while modern medicine excels in diagnosis and emergency management.</p>

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Garbha Sthapana Dravyas for pregnancy support</li>
              <li>• Comprehensive etiological framework (Beeja, Kshetra, Ahara, Manasa)</li>
              <li>• Pre-conception Shodhana for recurrent loss prevention</li>
              <li>• Psychological support (Manasika Chikitsa, Sattva Avajaya)</li>
              <li>• Rasayana therapy for post-abortion recovery</li>
              <li>• Masanumasika Paricharya for ongoing pregnancy care</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• TVS for precise viability assessment</li>
              <li>• Serial beta-hCG for early pregnancy monitoring</li>
              <li>• Chromosomal analysis (karyotyping of products)</li>
              <li>• Progesterone and cerclage for proven indications</li>
              <li>• Safe surgical evacuation (MVA/suction)</li>
              <li>• RPL workup: APLA, thrombophilia, immunology</li>
            </ul>
          </div>
        </div>

        <div class="bg-white/60 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
          <ol class="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Threatened Abortion:</strong> Confirm viability by TVS + Garbha Sthapana Dravyas (Shatavari Ksheerapaka) + Progesterone support + bed rest</li>
            <li><strong>Recurrent Loss — Pre-conception:</strong> Ayurvedic Shodhana (Virechana) + RPL workup (APLA, thyroid, karyotype) + treat underlying cause</li>
            <li><strong>Post-Abortion Recovery:</strong> Ayurvedic Uttara Basti + Rasayana + modern follow-up (USG to confirm complete evacuation)</li>
            <li><strong>Inevitable/Incomplete:</strong> Modern surgical evacuation (MVA/suction) + Ayurvedic Sutika-like Paricharya for post-procedure recovery</li>
            <li><strong>Septic Abortion:</strong> Purely modern emergency management — IV antibiotics, fluid resuscitation, surgical evacuation. Ayurvedic support only in recovery phase</li>
          </ol>
        </div>
      </div>
    `,

    examBullets: [
      "Garbhasrava = early pregnancy loss (< 3 months, before Sthirata). Garbhapata = later loss (after organogenesis). Modern: Abortion = loss before 20 weeks / 500 gm.",
      "Charaka's etiology of Garbha Nasha (Sha. 8/21): Beeja Dosha (chromosomal defects), Garbhashaya Dosha (uterine anomalies), Daiva (unknown), Ahara-Cheshta Dosha (lifestyle).",
      "Garbha Sthapana Mahakashaya (Charaka Su. 4): 10 drugs — Aindri, Brahmi, Shatavari (Shatavirya), Sahasravirya, Amogha, Avyatha, Shiva, Arishta, Vasuka, Vishvaksenakanta.",
      "Common Garbha Sthapana drugs in practice: Ashwagandha + Shatavari + Yashtimadhu + Amalaki — processed with milk (Ksheerapaka). Given from confirmed pregnancy.",
      "Threatened abortion: bleeding + closed os + viable fetus on USG. Management: bed rest, progesterone (200 mg vaginal), Garbha Sthapana Dravyas. ~90% continue if FHR present.",
      "Inevitable abortion: heavy bleeding + open os + intact sac. Incomplete: partial expulsion + open os + RPOC. Complete: all expelled + closed os + empty uterus on USG.",
      "Missed abortion criteria on USG: CRL > 7 mm with no FHR (TVS), or mean sac diameter > 25 mm with no embryo (anembryonic pregnancy). Repeat scan in 7–14 days if borderline.",
      "Septic abortion: infected products + fever (> 38C) + foul discharge + tender uterus. Emergency: IV antibiotics (triple regimen) + fluid resuscitation + surgical evacuation.",
      "Surgical evacuation methods: MVA (Manual Vacuum Aspiration) for < 12 wks — safest, OPD procedure. Suction evacuation 12–14 wks. D&E (Dilatation & Evacuation) > 14 wks.",
      "Medical management of missed abortion: Mifepristone 200 mg oral + Misoprostol 800 mcg vaginal after 24–48 hrs. Success rate ~85%. Alternative: Misoprostol alone.",
      "Anti-D immunoglobulin (300 mcg IM) within 72 hrs for ALL Rh-negative women with any type of abortion. Prevents Rh isoimmunization affecting future pregnancies.",
      "Recurrent Pregnancy Loss (RPL) workup: APLA panel (lupus anticoagulant, anticardiolipin Ab, anti-beta2GP1), thyroid function, karyotyping of both partners, uterine imaging (HSG/hysteroscopy), thrombophilia screen.",
      "Cervical incompetence: painless cervical dilatation in 2nd trimester → pregnancy loss. Treatment: cervical cerclage — McDonald (purse-string) or Shirodkar (submucous) at 12–14 weeks.",
      "MTP Act 2021: Up to 20 wks = 1 RMP opinion. 20–24 wks = 2 RMP opinions (for special categories: rape survivors, minors, disabled). Fetal anomalies = no upper limit (Medical Board decision).",
      "Post-abortion care (Ayurvedic): Uttara Basti with Shatavari Taila, Yoni Pichu, Shatavari-Ashwagandha Rasayana. Wait at least 3 months before next conception attempt. Shodhana before re-conception in RPL.",
    ],

    mnemonics: [
      {
        title: "Types of Abortion (TICCMS)",
        acronym: "TICCMS",
        expansions: [
          "Threatened — bleeding + closed os + viable fetus",
          "Inevitable — bleeding + open os + intact sac",
          "Complete — all expelled + closed os + empty uterus",
          "Incomplete (Khandasha) — partial expulsion + RPOC",
          "Missed (Mrita Garbha) — dead fetus retained + closed os",
          "Septic (Dushta) — infection + fever + foul discharge",
        ],
      },
      {
        title: "Causes of Recurrent Pregnancy Loss",
        acronym: "ALIGHT",
        expansions: [
          "Antiphospholipid syndrome (APLA)",
          "Luteal phase defect / Low progesterone",
          "Infections (TORCH, Listeria)",
          "Genetic / chromosomal abnormalities",
          "Hormonal (thyroid, diabetes, PCOS)",
          "Thrombophilia & uterine anomalies (septate, cervical incompetence)",
        ],
      },
      {
        title: "Charaka's Etiology of Garbha Nasha",
        acronym: "BGADM",
        expansions: [
          "Beeja Dosha — defective sperm/ovum (chromosomal defects)",
          "Garbhashaya Dosha — uterine abnormalities",
          "Ahara Dosha — dietary errors (Katu, Tikshna, Ushna)",
          "Daiva — fate / unexplained factors",
          "Manasika — psychological factors (Shoka, Bhaya, Krodha)",
        ],
      },
      {
        title: "Garbha Sthapana Drugs (Key 4)",
        acronym: "ASAY",
        expansions: [
          "Ashwagandha — adaptogenic, anti-stress, Balya",
          "Shatavari — phytoestrogenic, Garbhashaya Balya",
          "Amalaki — antioxidant, Vit C rich, Rasayana",
          "Yashtimadhu — anti-inflammatory, Madhura, Sheeta",
        ],
      },
    ],
  };
}
