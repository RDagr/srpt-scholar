import React from "react";

export function getM9Content() {
  return {
    references: [
      "Charaka Sharira Sthana Ch. 4 (Garbha Avakranti)",
      "Sushruta Sharira Sthana Ch. 10 (Garbhavyapad)",
      "Ashtanga Hridaya Sharira Sthana Ch. 1",
      "Kashyapa Samhita — Khila Sthana",
      "Williams Obstetrics Ch. 19 (Ectopic Pregnancy)",
      "DC Dutta Ch. 11 (Ectopic Pregnancy)",
    ],

    units: [
      {
        title: "Classical References to Abnormal Implantation",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit explores the classical Ayurvedic understanding of abnormal sites of Garbha Dharana (implantation). While Ayurvedic texts do not describe ectopic pregnancy as a distinct entity, the concepts of Garbhashaya Vaigunya (uterine/reproductive tract abnormalities), Bija Marga Avarodha (obstruction of reproductive channels), and Vata-driven displacement of the Garbha provide a framework for understanding extra-uterine implantation."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Garbha Avakranti (implantation) and its requirements per Charaka"),
            React.createElement("li", null, "• Artava Vaha Srotas Dushti as a predisposing factor"),
            React.createElement("li", null, "• Vata Prakopa causing displacement of fertilized ovum"),
            React.createElement("li", null, "• Concept of Garbha outside Garbhashaya (uterus) — Bahya Garbha"),
            React.createElement("li", null, "• Kashyapa's reference to Garbha Vyapad (complications of pregnancy)")
          )
        ),
      },
      {
        title: "Modern Ectopic Pregnancy — Types, Risk Factors & Diagnosis",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the comprehensive modern understanding of ectopic pregnancy — implantation of the fertilized ovum outside the uterine cavity. Includes types by location, risk factors, clinical presentation, and diagnostic criteria using serum beta-hCG and transvaginal ultrasonography."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Definition: implantation outside the endometrial cavity. Incidence ~1–2% of pregnancies"),
            React.createElement("li", null, "• Types: tubal (95%), ovarian, cervical, abdominal, interstitial, caesarean scar"),
            React.createElement("li", null, "• Risk factors: PID, previous ectopic, tubal surgery, IVF, IUCD, endometriosis"),
            React.createElement("li", null, "• Clinical triad: amenorrhoea + abdominal pain + vaginal bleeding"),
            React.createElement("li", null, "• Diagnostic criteria: beta-hCG above discriminatory zone without IUP on TVS")
          )
        ),
      },
    ],

    orientation: {
      why: "Ectopic pregnancy is a life-threatening obstetric emergency that requires rapid diagnosis and intervention. While classical Ayurvedic texts do not describe it as a distinct condition, the concepts of Artava Vaha Srotas Dushti and Vata-driven Garbha displacement provide a theoretical framework. Understanding modern diagnosis and management is essential for every practitioner. This topic bridges classical Srotas pathology with contemporary emergency obstetrics.",
      examWeight:
        "High-yield for university exams. Short notes (10 marks) on ectopic pregnancy — risk factors, diagnosis, and management — appear very frequently. Long essays on differential diagnosis of acute abdomen in early pregnancy and management protocols are common. Viva questions often include discriminatory beta-hCG levels, TVS criteria, and medical vs surgical management decision-making. Ayurvedic correlation questions focus on Artava Vaha Srotas Dushti.",
    },

    definition: {
      ayurveda: `
        <p><strong>Garbhashaya Bahya Garbha (Extra-uterine Pregnancy)</strong> — Classical Ayurvedic texts describe normal Garbha Dharana (implantation) as occurring exclusively within the Garbhashaya (uterus). Charaka states that for successful conception, the Beeja (fertilized ovum) must reach the Garbhashaya through the Artava Vaha Srotas (reproductive channels).</p>
        <p class="mt-2">When the <strong>Artava Vaha Srotas</strong> is obstructed (Sanga) or when <strong>Vata Prakopa</strong> displaces the Garbha from its intended path, the embryo may lodge in an abnormal location — conceptually analogous to ectopic pregnancy.</p>
        <p class="mt-2 font-sanskrit text-saffron-800">"ऋतुक्षेत्रामबुबीजेषु दोषाद्गर्भो न जायते"</p>
        <p class="mt-2">Defects in Ritu (timing), Kshetra (field/uterus), Ambu (nourishing fluids), and Beeja (seed) prevent proper Garbha formation — or cause it to form in improper locations.</p>
      `,
      modern: `
        <p><strong>Ectopic Pregnancy</strong> is defined as implantation of the fertilized ovum at a site other than the normal uterine endometrial cavity. It occurs in approximately <strong>1–2% of all pregnancies</strong> and is the leading cause of maternal mortality in the first trimester.</p>
        <p class="mt-2"><strong>Most common site:</strong> Fallopian tube (~95%) — ampulla (70%), isthmus (12%), fimbrial (11%), interstitial/cornual (2–3%).</p>
        <p class="mt-2"><strong>Other sites:</strong> Ovarian (3%), cervical (< 1%), abdominal (1.4%), caesarean scar (< 1%), heterotopic (rare, 1 in 30,000 natural; higher with IVF).</p>
        <p class="mt-2"><strong>Mortality:</strong> Accounts for ~6–9% of all pregnancy-related deaths. Ruptured ectopic is a surgical emergency with risk of fatal haemorrhage.</p>
      `,
      classification: {
        title: "Classification of Ectopic Pregnancy by Location",
        headers: ["Site", "Frequency", "Clinical Features", "Management"],
        rows: [
          [
            "<strong>Ampullary Tubal</strong>",
            "~70%",
            "Most common. Ruptures at 8–12 weeks. Moderate bleeding",
            "Salpingectomy or Salpingostomy. Medical if unruptured",
          ],
          [
            "<strong>Isthmic Tubal</strong>",
            "~12%",
            "Early rupture (6–8 wks) due to narrow lumen. Severe bleeding",
            "Salpingectomy usually required. High rupture risk",
          ],
          [
            "<strong>Fimbrial</strong>",
            "~11%",
            "May result in tubal abortion into peritoneal cavity",
            "Salpingectomy or fimbrial expression (milking)",
          ],
          [
            "<strong>Interstitial (Cornual)</strong>",
            "~2–3%",
            "Late rupture (12–16 wks). Massive haemorrhage. High mortality",
            "Cornual resection or cornuostomy. Emergency laparotomy",
          ],
          [
            "<strong>Ovarian</strong>",
            "~3%",
            "Mimics ruptured corpus luteum cyst. Spiegelberg criteria for diagnosis",
            "Ovarian wedge resection or oophorectomy",
          ],
          [
            "<strong>Cervical</strong>",
            "< 1%",
            "Painless vaginal bleeding. Barrel-shaped cervix. Hourglass uterus",
            "Medical (MTX) or uterine artery embolization. Hysterectomy if uncontrolled",
          ],
        ],
      },
    },

    shlokas: [
      {
        source: "Charaka Sharira Sthana 4/5",
        devanagari:
          "ऋतुक्षेत्रामबुबीजानां साम्ये गर्भः प्रजायते |\nयदा त्वेषां विकारोऽस्ति गर्भो नैव प्रजायते ||",
        transliteration:
          "ṛtukṣētrāmubījānāṃ sāmyē garbhaḥ prajāyatē |\nyadā tvēṣāṃ vikārō'sti garbhō naiva prajāyatē ||",
        meaning:
          "When Ritu (fertile period), Kshetra (uterus/field), Ambu (nourishing fluids), and Beeja (reproductive elements) are in proper state of equilibrium, Garbha (conception) occurs normally. When there is Vikara (abnormality) in any of these factors, the Garbha either does not form or forms abnormally.",
        clinicalNote:
          "Kshetra Vaigunya (field defect) is the most relevant concept for ectopic pregnancy. When the 'field' is defective — damaged tubes, adhesions, or anatomical abnormalities — the fertilized ovum cannot reach the normal Kshetra (uterus) and implants in an abnormal site. This provides the Ayurvedic theoretical basis for understanding ectopic implantation.",
      },
      {
        source: "Sushruta Sharira Sthana 2/33",
        devanagari:
          "अर्तवस्य वहन्ति या स्रोतांसि ताः सिराः |\nतासां मूलं गर्भाशयो अर्तववाहिन्यश्च धमन्यः ||",
        transliteration:
          "artavasya vahanti yā srōtāṃsi tāḥ sirāḥ |\ntāsāṃ mūlaṃ garbhāśayō artavavāhinyaśca dhamanyaḥ ||",
        meaning:
          "The Srotas (channels) that carry Artava (menstrual blood/ovum) are specific Siras (vessels/tubes). Their root (Moola) is the Garbhashaya (uterus) and the Artava Vahini Dhamanyas (artava-carrying channels — corresponding to fallopian tubes and ovarian vessels).",
        clinicalNote:
          "This description by Sushruta identifies the Artava Vaha Srotas with its Moola (root) at the Garbhashaya and Artava Vahini channels (fallopian tubes). Pathology in these Srotas — Sanga (obstruction), Vimarga Gamana (diversion of flow) — directly corresponds to the pathogenesis of tubal ectopic pregnancy where tubal damage prevents normal ovum transport.",
      },
      {
        source: "Charaka Vimana Sthana 5/8",
        devanagari:
          "सङ्गो विमार्गगमनं सिराग्रन्थिश्च दारुणः |\nस्रोतसां दुष्टिलिङ्गानि व्यापद्येत यथायथम् ||",
        transliteration:
          "saṅgō vimārgagamanaṃ sirāgranthiśca dāruṇaḥ |\nsrōtasāṃ duṣṭiliṅgāni vyāpadyēta yathāyatham ||",
        meaning:
          "The signs of Srotas Dushti (channel vitiation) are: Sanga (obstruction), Vimarga Gamana (flow through wrong channel/path), Sira Granthi (nodular formation in vessels), and Daruna (severe/hard growths). Disease manifests according to the specific type of channel vitiation.",
        clinicalNote:
          "This shloka on Srotas Dushti is directly applicable to ectopic pregnancy pathogenesis: Sanga in Artava Vaha Srotas = tubal obstruction (from PID, adhesions); Vimarga Gamana = embryo traveling to wrong location (tubal, ovarian, abdominal); Sira Granthi = tubal nodules/adhesions. This provides a Samprapti framework for ectopic pregnancy.",
      },
      {
        source: "Kashyapa Samhita — Khila Sthana, Garbhavyapad",
        devanagari:
          "वातेन विगुणा योनिर्गर्भमार्गं विरुध्यते |\nगर्भो मार्गाद्विचलितो व्यापदं जनयेद्ध्रुवम् ||",
        transliteration:
          "vātēna viguṇā yōnirgarbhamārgaṃ virudhyatē |\ngarbhō mārgādvicalitō vyāpadaṃ janayēddhruvam ||",
        meaning:
          "When the Yoni (reproductive tract) becomes vitiated by Vata, the Garbha Marga (path of the embryo) becomes obstructed. The Garbha (embryo), displaced from its normal path (Marga), certainly generates Vyapad (complications/emergencies).",
        clinicalNote:
          "This passage from Kashyapa is perhaps the closest classical reference to ectopic pregnancy. It describes Vata-driven displacement of the embryo from its normal Marga (path to uterus), resulting in Vyapad (emergency complications). This aligns with modern understanding of tubal ectopic where the embryo implants in the tube due to impaired transport, leading to life-threatening complications.",
      },
    ],

    dualCols: [
      {
        title: "Risk Factors & Pathogenesis",
        ayurvedaTitle: "Artava Vaha Srotas Dushti Nidana",
        modernTitle: "Modern Risk Factors",
        ayurvedaContent: `
          <p><strong>Factors causing Artava Vaha Srotas Dushti (channel damage):</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Sanga (Obstruction):</strong> Kapha-Meda accumulation in Srotas. Corresponds to tubal adhesions, endometriosis, post-inflammatory blockage</li>
            <li><strong>Vimarga Gamana:</strong> Vata drives the Beeja (ovum) into wrong channels. Embryo implants outside Garbhashaya</li>
            <li><strong>Sira Granthi:</strong> Nodular growths in Artava Vahini channels — analogous to tubal adhesions, hydrosalpinx, tubal fibrosis</li>
            <li><strong>Yoni Dosha:</strong> Infections and inflammation of the reproductive tract (Yoni Vyapad) causing Srotas Dushti</li>
            <li><strong>Shastra Karma Pariklesana:</strong> Post-surgical adhesions following previous operative interventions on the reproductive tract</li>
          </ol>
        `,
        modernContent: `
          <p><strong>Major risk factors for ectopic pregnancy:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>PID / Salpingitis (highest risk):</strong> Chlamydia, Gonorrhoea — cause tubal damage, adhesions, deciliation. 6–10x increased risk</li>
            <li><strong>Previous Ectopic:</strong> 10–15% recurrence rate. Damaged tube on opposite side too</li>
            <li><strong>Tubal Surgery:</strong> Tubal ligation reversal, salpingostomy, reconstructive surgery</li>
            <li><strong>IVF / ART:</strong> 2–5% ectopic rate. Also heterotopic risk. Related to embryo transfer technique</li>
            <li><strong>IUCD in situ:</strong> Does not increase absolute risk but higher proportion of conceptions are ectopic</li>
            <li><strong>Endometriosis:</strong> Tubal endometriotic deposits cause luminal obstruction</li>
            <li><strong>Smoking:</strong> Impairs tubal motility and ciliary function. Dose-dependent risk increase</li>
            <li><strong>Age > 35:</strong> Increased tubal pathology with age</li>
          </ol>
        `,
      },
      {
        title: "Management Approaches",
        ayurvedaTitle: "Ayurvedic Perspective",
        modernTitle: "Modern Surgical & Medical Management",
        ayurvedaContent: `
          <p><strong>Ayurvedic role in ectopic pregnancy is limited — it is a surgical emergency. However, Ayurveda contributes to:</strong></p>
          <ul class="space-y-2">
            <li><strong>Prevention (Primary):</strong> Treatment of Artava Vaha Srotas Dushti — Uttara Basti with Phala Ghrita/Shatavari Taila to maintain tubal patency. Yoni Prakshalana for reproductive tract health</li>
            <li><strong>Srotas Shodhana:</strong> Virechana and Uttara Basti as pre-conception Shodhana to clear Srotas Sanga, improve tubal function, reduce adhesions</li>
            <li><strong>Post-operative Recovery:</strong> After surgical management — Dashmoola Kashaya, Shatavari Ghrita for healing. Uttara Basti course for restoration of remaining tube function</li>
            <li><strong>Psychological Support:</strong> Manasika Chikitsa (counselling) for anxiety and grief after ectopic pregnancy loss</li>
            <li><strong>Future Fertility:</strong> Ayurvedic Shodhana + Rasayana to optimize remaining tubal function and prepare for future conception</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Modern management depends on clinical status and beta-hCG levels:</strong></p>
          <ul class="space-y-2">
            <li><strong>Expectant Management:</strong> Selected cases — declining beta-hCG < 1000 mIU/mL, no pain, stable patient. Serial monitoring until beta-hCG < 5. Success ~50–70%</li>
            <li><strong>Medical (Methotrexate):</strong> Single-dose MTX 50 mg/m2 IM. Criteria: unruptured, hemodynamically stable, beta-hCG < 5000, no fetal cardiac activity, mass < 3.5 cm. Success ~85–90%</li>
            <li><strong>Surgical — Laparoscopy (preferred):</strong> Salpingostomy (conserves tube) — for unruptured with desire for fertility. Salpingectomy (removes tube) — ruptured, recurrent ectopic, severely damaged tube</li>
            <li><strong>Emergency Laparotomy:</strong> Ruptured ectopic with haemodynamic instability. Immediate salpingectomy + resuscitation. Crossmatch blood, IV fluids, call surgeon immediately</li>
            <li><strong>Post-treatment:</strong> Serial beta-hCG until < 5. Anti-D for Rh-negative. Contraception for 3 months post-MTX. Counsel regarding recurrence risk</li>
          </ul>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Clinical Presentation of Ectopic Pregnancy",
        headers: ["Feature", "Unruptured Ectopic", "Ruptured Ectopic (Emergency)"],
        rows: [
          [
            "<strong>Amenorrhoea</strong>",
            "6–8 weeks amenorrhoea. May have irregular bleeding mistaken for period",
            "History of 6–8 weeks amenorrhoea. Often not recognized as pregnant",
          ],
          [
            "<strong>Abdominal Pain</strong>",
            "Unilateral lower abdominal/pelvic pain. Dull, constant. Adnexal tenderness",
            "Sudden severe lower abdominal pain (acute onset). Shoulder tip pain (diaphragmatic irritation from haemoperitoneum)",
          ],
          [
            "<strong>Vaginal Bleeding</strong>",
            "Scanty, dark brown (prune juice) discharge. Irregular spotting",
            "May be minimal externally despite massive internal bleeding. Passage of decidual cast possible",
          ],
          [
            "<strong>Vital Signs</strong>",
            "Stable. Normal BP and pulse. Low-grade fever occasionally",
            "Tachycardia, hypotension, pallor, cold clammy extremities — signs of hypovolaemic shock",
          ],
          [
            "<strong>Abdominal Exam</strong>",
            "Mild lower abdominal tenderness. No rigidity. No rebound (usually)",
            "Distension, rigidity, rebound tenderness. Guarding. Shifting dullness (haemoperitoneum). Board-like rigidity in severe cases",
          ],
          [
            "<strong>Vaginal Exam</strong>",
            "Cervical motion tenderness (Chandelier sign). Adnexal mass/tenderness. Uterus slightly enlarged and soft",
            "Extreme cervical excitation pain. Fullness in pouch of Douglas (boggy). Cervical os closed. Culdesac tenderness",
          ],
        ],
      },
    ],

    investigations: [
      {
        title: "Investigations in Suspected Ectopic Pregnancy",
        headers: ["Investigation", "Purpose", "Key Diagnostic Criteria", "Clinical Pearl"],
        rows: [
          [
            "<strong>Serum beta-hCG</strong>",
            "Quantitative — confirm pregnancy and monitor trend",
            "Discriminatory zone: TVS should show IUP when beta-hCG > 1500 mIU/mL. Suboptimal rise (< 66% in 48 hrs) suggests ectopic or non-viable",
            "A single value cannot diagnose ectopic. Serial levels with 48-hr doubling assessment are essential. Plateau or slow rise = ectopic until proven otherwise",
          ],
          [
            "<strong>Transvaginal USG</strong>",
            "Visualize location of pregnancy",
            "No IUP with beta-hCG above discriminatory zone = ectopic. Adnexal mass, tubal ring sign, free fluid in POD",
            "Gold standard imaging. An empty uterus with positive pregnancy test is ectopic until proven otherwise. 'Pseudogestational sac' may mimic IUP",
          ],
          [
            "<strong>Culdocentesis</strong>",
            "Detect haemoperitoneum (historical/resource-limited)",
            "Non-clotting blood aspirated from pouch of Douglas = positive = haemoperitoneum",
            "Largely replaced by USG. Still useful in emergencies where USG unavailable. Non-clotting blood (defibrinated) indicates intra-abdominal bleeding",
          ],
          [
            "<strong>Urine Pregnancy Test</strong>",
            "Quick screening to confirm pregnancy",
            "Positive in >95% of ectopic pregnancies. Negative UPT essentially rules out ectopic",
            "First step in any woman of reproductive age with abdominal pain + amenorrhoea. If positive, proceed to beta-hCG and TVS",
          ],
          [
            "<strong>CBC + Cross-match</strong>",
            "Assess anaemia, prepare for transfusion",
            "Low Hb in ruptured ectopic. Rising WBC may suggest inflammation/infection",
            "Type and cross-match 2–4 units always in suspected ruptured ectopic. Hb may be falsely normal initially before haemodilution occurs",
          ],
          [
            "<strong>Diagnostic Laparoscopy</strong>",
            "Direct visualization when diagnosis uncertain",
            "Visualize ectopic mass, haemoperitoneum. Can be therapeutic simultaneously",
            "Gold standard for definitive diagnosis. Performed when USG inconclusive and clinical suspicion high. Allows simultaneous surgical treatment",
          ],
        ],
      },
    ],

    management: {
      diagramTitle: "Clinical Decision Tree — Management of Ectopic Pregnancy (Garbhashaya Bahya Garbha)",
      diagramSvg: `
        <svg viewBox="0 0 850 700" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah9); }
            .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#ah9-g); }
            .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#ah9-r); }
            .yes-label { font-size: 11px; fill: #2E7D32; font-weight: bold; }
            .no-label { font-size: 11px; fill: #C62828; font-weight: bold; }
          </style>
          <defs>
            <marker id="ah9" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A"/></marker>
            <marker id="ah9-g" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A"/></marker>
            <marker id="ah9-r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#EF5350"/></marker>
          </defs>

          <!-- Top -->
          <rect class="box" x="245" y="10" width="350" height="45"/>
          <text class="label-bold" x="420" y="32">Amenorrhoea + Abdominal Pain + Vaginal Bleeding</text>
          <text class="label" x="420" y="48">Suspect Ectopic Pregnancy</text>

          <line class="arrow" x1="420" y1="55" x2="420" y2="80"/>

          <!-- UPT and beta-hCG -->
          <rect class="box-blue" x="290" y="80" width="260" height="40"/>
          <text class="label-bold" x="420" y="100">UPT Positive → Serum beta-hCG + TVS</text>

          <line class="arrow" x1="420" y1="120" x2="420" y2="150"/>

          <!-- Hemodynamic assessment -->
          <rect class="box" x="290" y="150" width="260" height="40"/>
          <text class="label-bold" x="420" y="175">Hemodynamically Stable?</text>

          <!-- Unstable branch -->
          <line class="arrow-no" x1="540" y1="170" x2="700" y2="210"/>
          <text class="no-label" x="640" y="195">UNSTABLE (Shock)</text>

          <rect class="box-red" x="610" y="210" width="210" height="60"/>
          <text class="label-bold" x="715" y="230">EMERGENCY</text>
          <text class="label" x="715" y="248">Resuscitate + IV fluids + blood</text>
          <text class="label" x="715" y="263">Immediate LAPAROTOMY</text>

          <line class="arrow" x1="715" y1="270" x2="715" y2="300"/>

          <rect class="box-red" x="630" y="300" width="170" height="40"/>
          <text class="label-bold" x="715" y="318">Salpingectomy</text>
          <text class="label" x="715" y="333">Save the mother</text>

          <!-- Stable branch -->
          <line class="arrow-yes" x1="300" y1="170" x2="170" y2="210"/>
          <text class="yes-label" x="215" y="195">STABLE</text>

          <rect class="box-blue" x="50" y="210" width="240" height="45"/>
          <text class="label-bold" x="170" y="230">TVS Findings + beta-hCG Level?</text>
          <text class="label" x="170" y="248">No IUP. Adnexal mass?</text>

          <!-- Three management paths -->
          <line class="arrow" x1="90" y1="255" x2="50" y2="295"/>
          <line class="arrow" x1="170" y1="255" x2="250" y2="295"/>
          <line class="arrow" x1="250" y1="255" x2="440" y2="295"/>

          <!-- Expectant -->
          <rect class="box-green" x="0" y="295" width="145" height="75"/>
          <text class="label-bold" x="72" y="315">Expectant</text>
          <text class="label" x="72" y="330">beta-hCG < 1000</text>
          <text class="label" x="72" y="345">Declining trend</text>
          <text class="label" x="72" y="360">Asymptomatic</text>

          <!-- Medical -->
          <rect class="box-blue" x="165" y="295" width="185" height="75"/>
          <text class="label-bold" x="257" y="315">Medical (MTX)</text>
          <text class="label" x="257" y="330">Unruptured, beta-hCG < 5000</text>
          <text class="label" x="257" y="345">No FHR, mass < 3.5 cm</text>
          <text class="label" x="257" y="360">MTX 50 mg/m2 IM single dose</text>

          <!-- Surgical -->
          <rect class="box" x="370" y="295" width="195" height="75"/>
          <text class="label-bold" x="467" y="315">Surgical (Laparoscopy)</text>
          <text class="label" x="467" y="330">beta-hCG > 5000, or FHR+</text>
          <text class="label" x="467" y="345">or MTX contraindicated</text>
          <text class="label" x="467" y="360">Salpingostomy / Salpingectomy</text>

          <!-- Follow-up -->
          <line class="arrow" x1="72" y1="370" x2="250" y2="410"/>
          <line class="arrow" x1="257" y1="370" x2="310" y2="410"/>
          <line class="arrow" x1="467" y1="370" x2="380" y2="410"/>

          <rect class="box-green" x="200" y="410" width="280" height="50"/>
          <text class="label-bold" x="340" y="430">Serial beta-hCG Follow-up</text>
          <text class="label" x="340" y="450">Monitor weekly until beta-hCG < 5 mIU/mL</text>

          <!-- Ayurvedic approach -->
          <rect class="box" x="50" y="500" width="740" height="80"/>
          <text class="label-bold" x="420" y="522">Ayurvedic Role — Primarily Prevention & Post-treatment Recovery</text>
          <text class="label" x="420" y="540">Prevention: Uttara Basti (Phala Ghrita/Shatavari Taila) for Artava Vaha Srotas Shodhana</text>
          <text class="label" x="420" y="556">Post-surgical: Dashmoola Kashaya, Shatavari Ghrita for healing + Rasayana for fertility restoration</text>
          <text class="label" x="420" y="572">Future fertility: Shodhana (Virechana) + Uttara Basti + Garbha Sthapana protocol</text>

          <line class="arrow" x1="340" y1="460" x2="420" y2="500"/>

          <!-- Bottom -->
          <rect class="box-green" x="125" y="610" width="590" height="50"/>
          <text class="label-bold" x="420" y="632">Key Principle: Ectopic is a SURGICAL EMERGENCY when ruptured</text>
          <text class="label" x="420" y="650">Anti-D for Rh-ve. Counsel: 10–15% recurrence. Contraception x 3 months post-MTX</text>

          <line class="arrow" x1="420" y1="580" x2="420" y2="610"/>
        </svg>
      `,
      notes: `
        <p><strong>Key clinical pearls for ectopic pregnancy:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Golden rule: Any woman of reproductive age with abdominal pain + amenorrhoea = rule out ectopic pregnancy (UPT + TVS)</li>
          <li>Discriminatory zone: beta-hCG > 1500 mIU/mL (TVS) or > 6500 (TAS) — IUP should be visible. If not seen → ectopic until proven otherwise</li>
          <li>Methotrexate criteria (medical management): hemodynamically stable, unruptured, beta-hCG < 5000, no fetal cardiac activity, mass < 3.5 cm, compliant patient for follow-up</li>
          <li>Ruptured ectopic with shock = do NOT wait for investigations — immediate laparotomy and salpingectomy. Resuscitate simultaneously</li>
          <li>Cervical motion tenderness (Chandelier sign) is highly suggestive but not diagnostic — also seen in PID and ovarian torsion</li>
          <li>After ectopic pregnancy, Ayurvedic Uttara Basti with Phala Ghrita can help restore tubal function and improve future fertility outcomes</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Srotas Pathology with Modern Ectopic Pregnancy Management</h3>
      <div class="space-y-4">
        <p>While ectopic pregnancy is fundamentally a surgical emergency requiring modern intervention, Ayurvedic Srotas theory provides a valuable framework for understanding pathogenesis and, importantly, for prevention and post-treatment rehabilitation.</p>

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Srotas Dushti theory explains tubal pathology (Sanga, Vimarga Gamana)</li>
              <li>• Uttara Basti for Artava Vaha Srotas Shodhana (tubal patency)</li>
              <li>• Pre-conception Shodhana to optimize reproductive channel health</li>
              <li>• Rasayana for post-surgical fertility restoration</li>
              <li>• Manasika Chikitsa for psychological recovery after pregnancy loss</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Rapid diagnosis with beta-hCG + TVS</li>
              <li>• Medical management with Methotrexate (tube-sparing)</li>
              <li>• Laparoscopic surgery — minimally invasive, rapid recovery</li>
              <li>• Emergency laparotomy for life-saving intervention</li>
              <li>• Serial beta-hCG monitoring for complete resolution</li>
              <li>• IVF as future fertility option when bilateral tubal damage</li>
            </ul>
          </div>
        </div>

        <div class="bg-white/60 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
          <ol class="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Prevention:</strong> Treat Yoni Vyapad (reproductive infections) promptly. Uttara Basti for Srotas health in women with risk factors</li>
            <li><strong>Diagnosis:</strong> Purely modern — UPT, serial beta-hCG, TVS. No role for Ayurvedic diagnosis in acute setting</li>
            <li><strong>Treatment:</strong> Medical (MTX) or surgical per modern criteria. Emergency laparotomy when ruptured</li>
            <li><strong>Recovery:</strong> Ayurvedic Dashmoola Kashaya + Shatavari Ghrita for post-operative healing. Uttara Basti course after recovery</li>
            <li><strong>Future Fertility:</strong> Ayurvedic Shodhana + Rasayana + Garbha Sthapana protocol. Modern: IVF if bilateral tubal damage</li>
          </ol>
        </div>
      </div>
    `,

    examBullets: [
      "Ectopic pregnancy = implantation outside uterine cavity. Most common site: ampulla of fallopian tube (70%). Overall incidence: 1–2% of pregnancies.",
      "Artava Vaha Srotas Dushti (Sanga = obstruction, Vimarga Gamana = wrong path) is the Ayurvedic Samprapti framework for ectopic pregnancy.",
      "Classical triad: amenorrhoea (6–8 weeks) + unilateral abdominal pain + vaginal bleeding (dark, scanty). Present in only ~50% of cases.",
      "Risk factors (PID is #1): previous PID/salpingitis > previous ectopic > tubal surgery > IVF/ART > IUCD > endometriosis > smoking > age > 35.",
      "Discriminatory beta-hCG: TVS > 1500 mIU/mL, TAS > 6500 mIU/mL. No IUP seen at these levels = ectopic until proven otherwise.",
      "Normal beta-hCG doubling: > 66% rise in 48 hours. Suboptimal rise (< 66%) suggests ectopic or non-viable IUP. Declining levels = resolving pregnancy.",
      "USG findings in ectopic: empty uterus, adnexal mass (tubal ring/blob sign), free fluid in POD. Pseudogestational sac (decidual reaction) can mimic IUP.",
      "Methotrexate (MTX) criteria: stable, unruptured, no FHR, beta-hCG < 5000, mass < 3.5 cm, no liver/renal/haematological disease, compliant for follow-up.",
      "MTX protocol: Single dose 50 mg/m2 IM. Day 4 and Day 7 beta-hCG. If < 15% decline between Day 4–7, give second dose. Follow weekly until beta-hCG < 5.",
      "Surgical options: Laparoscopic salpingostomy (tube-conserving, for future fertility) or salpingectomy (tube removal, for ruptured/recurrent/damaged tube).",
      "Ruptured ectopic with shock: IMMEDIATE laparotomy + salpingectomy. Do NOT delay for investigations. Simultaneous resuscitation. Cross-match 4 units.",
      "Interstitial (cornual) ectopic: most dangerous. Ruptures late (12–16 wks) with massive haemorrhage. High mortality. Requires cornual resection.",
      "Spiegelberg criteria for ovarian ectopic: (1) tube intact, (2) gestational sac in ovary, (3) sac connected to uterus by utero-ovarian ligament, (4) ovarian tissue in sac wall.",
      "After ectopic: anti-D for Rh-ve. Contraception 3 months post-MTX. Recurrence risk 10–15%. Future fertility: 60% intrauterine pregnancy rate after single ectopic.",
      "Ayurvedic post-ectopic care: Uttara Basti with Phala Ghrita for Srotas Shodhana. Shatavari Rasayana for recovery. Shodhana before next conception attempt.",
    ],

    mnemonics: [
      {
        title: "Risk Factors for Ectopic (ECTOPIC)",
        acronym: "ECTOPIC",
        expansions: [
          "Endometriosis",
          "Chlamydia / PID (pelvic inflammatory disease)",
          "Tubal surgery or previous ectopic",
          "Other — IVF/ART, DES exposure",
          "Progesterone-only pill / IUCD",
          "Increasing age (> 35 years)",
          "Cigarette smoking (impairs tubal motility)",
        ],
      },
      {
        title: "Methotrexate Criteria for Medical Management",
        acronym: "SMURF",
        expansions: [
          "Stable hemodynamically",
          "Mass < 3.5 cm (adnexal)",
          "Unruptured ectopic (intact tube)",
          "Reliable patient for follow-up",
          "Fetal heart rate absent, beta-hCG < 5000",
        ],
      },
      {
        title: "Srotas Dushti Types in Ectopic (Charaka)",
        acronym: "SVG",
        expansions: [
          "Sanga — obstruction (tubal blockage from PID, adhesions)",
          "Vimarga Gamana — flow to wrong path (embryo to tube/ovary/abdomen)",
          "Granthi — nodular growths (tubal adhesions, fibrosis, endometriosis)",
        ],
      },
      {
        title: "Clinical Triad of Ectopic",
        acronym: "APB",
        expansions: [
          "Amenorrhoea (6–8 weeks)",
          "Pain (unilateral lower abdominal/pelvic pain)",
          "Bleeding (scanty, dark brown, prune-juice discharge)",
        ],
      },
    ],
  };
}
