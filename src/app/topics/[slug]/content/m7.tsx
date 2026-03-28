import React from "react";

export function getM7Content() {
  return {
    references: [
      "Sushruta Nidana Sthana Ch. 8",
      "Sushruta Chikitsa Sthana Ch. 15",
      "Charaka Sharira Sthana Ch. 8",
      "Ashtanga Hridaya Sharira Sthana Ch. 2",
      "Kashyapa Samhita — Jatisutriya Adhyaya",
      "Williams Obstetrics Ch. 20–23 (Abnormal Labour)",
      "DC Dutta Ch. 26–30 (Obstructed Labour & Operative Delivery)",
    ],

    units: [
      {
        title: "Mudha Garbha — Classical Concepts & Classification",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers the classical Ayurvedic description of Mudha Garbha (malpresentation and obstructed labour) as described by Sushruta in Nidana Sthana Chapter 8 and Chikitsa Sthana Chapter 15. Sushruta classified abnormal presentations based on the presenting part and described specific manipulative procedures for each type."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Definition and etymology of Mudha Garbha (obstructed/impacted fetus)"),
            React.createElement("li", null, "• Sushruta's classification: four types based on presenting part"),
            React.createElement("li", null, "• Nidana (etiology): Vata Prakopa, abnormal fetal movements, maternal factors"),
            React.createElement("li", null, "• Purvarupa and Rupa of obstructed labour"),
            React.createElement("li", null, "• Comparison with modern malpresentation classification")
          )
        ),
      },
      {
        title: "Modern Malpresentation & Obstructed Labour",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit covers modern obstetric understanding of malpresentation (breech, transverse lie, face, brow), malposition (occipito-posterior), and obstructed labour. Includes partograph interpretation, signs of obstruction, and maternal-fetal complications."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Breech presentation: types (frank, complete, footling), diagnosis, risks"),
            React.createElement("li", null, "• Transverse lie and shoulder presentation"),
            React.createElement("li", null, "• Face and brow presentation: mechanism, management"),
            React.createElement("li", null, "• Partograph: active phase arrest, action line crossing"),
            React.createElement("li", null, "• Bandl's ring, maternal exhaustion, fetal distress — signs of obstruction")
          )
        ),
      },
      {
        title: "Instrumental & Operative Delivery",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "Covers Sushruta's Yantra (instruments) for Mudha Garbha extraction and their modern equivalents — forceps delivery, vacuum extraction, and caesarean section. Includes indications, contraindications, and complications of each method."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Sushruta's Yantra for Mudha Garbha: specific instruments for extraction"),
            React.createElement("li", null, "• Forceps delivery: types, prerequisites (ABCDEFGH), application technique"),
            React.createElement("li", null, "• Vacuum extraction (Ventouse): indications, cup placement, complications"),
            React.createElement("li", null, "• Caesarean section: indications, types, surgical steps"),
            React.createElement("li", null, "• Internal podalic version and destructive operations (historical context)")
          )
        ),
      },
      {
        title: "Management Decision-Making & Integrated Protocol",
        content: React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-gray-700 leading-relaxed" },
            "This unit integrates Ayurvedic management principles with modern obstetric decision-making for abnormal labour. Covers when to attempt vaginal delivery vs operative intervention, and the role of Ayurvedic Garbhini Paricharya in prevention."
          ),
          React.createElement(
            "ul",
            { className: "mt-3 space-y-2 text-sm text-gray-600" },
            React.createElement("li", null, "• Sushruta's principle: Jeeva Garbha vs Mrita Garbha management"),
            React.createElement("li", null, "• External cephalic version (ECV) — classical and modern approaches"),
            React.createElement("li", null, "• Trial of labour vs elective LSCS decision-making"),
            React.createElement("li", null, "• Ayurvedic Garbhini Paricharya for prevention of malpresentation"),
            React.createElement("li", null, "• Post-operative care: Sutika Paricharya after operative delivery")
          )
        ),
      },
    ],

    orientation: {
      why: "Mudha Garbha (Abnormal/Obstructed Labour) is a critical topic in Prasuti Tantra representing Sushruta's extraordinary contributions to operative obstetrics. Sushruta described specific manipulative techniques for different malpresentations over 2500 years ago, many of which parallel modern obstetric manoeuvres. This module is essential for understanding both classical surgical heritage and contemporary management of complicated deliveries.",
      examWeight:
        "Very high-yield for university exams. Long essays (20 marks) on Mudha Garbha classification and management, Sushruta's operative techniques, and modern management of malpresentation are extremely common. Short notes on breech management, forceps prerequisites, and partograph interpretation appear frequently. Expect integration questions comparing Sushruta's approaches with modern operative obstetrics.",
    },

    definition: {
      ayurveda: `
        <p><strong>Mudha Garbha</strong> is defined by Acharya Sushruta in Nidana Sthana Chapter 8 as a condition where the fetus becomes impacted or obstructed during delivery due to abnormal presentation or position.</p>
        <p class="mt-2 font-sanskrit text-saffron-800">"मूढगर्भ इति — गर्भो मार्गमुत्सृज्य हस्तपादशिरःपार्श्वैर्मूढो भवति"</p>
        <p class="mt-2">The term <strong>Mudha</strong> literally means "confused" or "deviated" — the fetus deviates from the normal passage (Garbha Marga) and presents with hands (Hasta), feet (Pada), head in abnormal position (Shiras), or side (Parshva), leading to impaction.</p>
        <p class="mt-2">Sushruta identified <strong>Vata Prakopa</strong> as the primary etiological factor, with provoked Apana Vayu causing the fetus to assume abnormal positions during labour.</p>
      `,
      modern: `
        <p><strong>Malpresentation</strong> refers to any presentation of the fetus other than vertex (cephalic with well-flexed head). <strong>Obstructed labour</strong> occurs when despite adequate uterine contractions, the fetus cannot descend through the birth canal due to mechanical obstruction.</p>
        <p class="mt-2"><strong>Normal presentation:</strong> Vertex (occiput) — occurs in ~96% of term deliveries. The remaining ~4% present as breech (~3%), transverse (~0.5%), or face/brow (~0.5%).</p>
        <p class="mt-2"><strong>Obstructed labour</strong> is diagnosed when the cervix is fully dilated but there is no descent of the presenting part despite good contractions, often with signs of maternal distress (Bandl's ring, maternal tachycardia) and fetal compromise.</p>
      `,
      classification: {
        title: "Classification of Mudha Garbha (Sushruta) & Modern Malpresentations",
        headers: ["Sushruta's Type", "Presenting Part", "Modern Equivalent", "Frequency"],
        rows: [
          [
            "<strong>Shiro Mudha</strong>",
            "Head with abnormal extension/deflexion",
            "Brow presentation, Face presentation, Occipito-posterior",
            "Face: 0.2%, Brow: 0.07%",
          ],
          [
            "<strong>Hasta Mudha</strong>",
            "Hand/arm prolapse alongside head",
            "Compound presentation, Hand prolapse",
            "~0.1–0.5%",
          ],
          [
            "<strong>Pada Mudha</strong>",
            "Feet presenting first",
            "Footling breech presentation",
            "Part of breech ~3–4%",
          ],
          [
            "<strong>Parshva Mudha</strong>",
            "Side/trunk presenting",
            "Transverse lie, Shoulder presentation",
            "~0.3–0.5%",
          ],
        ],
      },
    },

    shlokas: [
      {
        source: "Sushruta Nidana Sthana 8/2",
        devanagari:
          "गर्भो वातप्रकोपेण मार्गमुत्सृज्य तिष्ठति |\nहस्तपादशिरःपार्श्वैर्मूढो भवति दारुणः ||",
        transliteration:
          "garbho vātaprakopēṇa mārgamutsṛjya tiṣṭhati |\nhastapādaśiraḥpārśvairmūḍho bhavati dāruṇaḥ ||",
        meaning:
          "Due to provocation of Vata, the fetus leaves the normal birth passage (Marga) and becomes Mudha (impacted/obstructed) — presenting with hands, feet, head (in abnormal position), or side. This condition is severe (Daruna).",
        clinicalNote:
          "This shloka establishes Vata as the primary etiopathological factor in malpresentation. Modern understanding attributes abnormal presentation to factors like prematurity, polyhydramnios, uterine anomalies, and placenta praevia — all of which can be understood through Vata Vaishamya (Vata imbalance affecting fetal mobility and positioning).",
      },
      {
        source: "Sushruta Chikitsa Sthana 15/5–6",
        devanagari:
          "जीवन्तं चेद्भवेद्गर्भं स्नेहस्वेदोपचारतः |\nप्रणिधाय करं योनौ शनैः शनैः प्रवर्तयेत् ||\nमूर्धानमवनामय्य गर्भमाकृष्य निर्हरेत् ||",
        transliteration:
          "jīvantaṃ cedbhavedgarbhaṃ snehasvedopacārataḥ |\npraṇidhāya karaṃ yonau śanaiḥ śanaiḥ pravartayet ||\nmūrdhānamavānāmayya garbhamākṛṣya nirhareta ||",
        meaning:
          "If the fetus is alive (Jeeva Garbha), first apply Sneha (oleation) and Sveda (sudation) therapies. Then, gently introducing the hand into the birth canal (Yoni), gradually reposition the fetus. Turn the head (Murdhana) downward and carefully extract the fetus.",
        clinicalNote:
          "This remarkable description from Sushruta outlines a procedure akin to internal podalic version and cephalic manipulation. The prior Sneha-Sveda therapy parallels modern use of tocolytics and anaesthesia for uterine relaxation before manipulative procedures. The principle of gentle manipulation with the fetus alive remains valid in modern ECV (External Cephalic Version).",
      },
      {
        source: "Sushruta Chikitsa Sthana 15/10",
        devanagari:
          "मृतश्चेद्गर्भ आशङ्क्यस्तदा शस्त्रेण निर्हरेत् |\nमातुः प्राणान् परिरक्षेत् सर्वथा कुशलो भिषक् ||",
        transliteration:
          "mṛtaścedgarbha āśaṅkyastadā śastreṇa nirharet |\nmātuḥ prāṇān parirakṣet sarvathā kuśalo bhiṣak ||",
        meaning:
          "If the fetus is suspected to be dead (Mrita Garbha), then it should be extracted using surgical instruments (Shastra). The skilled physician must protect the life of the mother above all else.",
        clinicalNote:
          "This establishes the fundamental obstetric principle of maternal priority in cases of fetal demise with obstruction. Sushruta's destructive operations for dead fetus (Mrita Garbha) parallel the historical use of craniotomy, embryotomy, and decapitation hooks in pre-caesarean era Western obstetrics. Today, these are largely replaced by caesarean section.",
      },
      {
        source: "Sushruta Nidana Sthana 8/5",
        devanagari:
          "विषमासनशयनाद्यैर्गर्भिण्याः प्रकुपितोऽनिलः |\nगर्भं विमार्गगं कृत्वा मूढगर्भं करोति हि ||",
        transliteration:
          "viṣamāsanaśayanādyairgarbhiṇyāḥ prakupito'nilaḥ |\ngarbhaṃ vimārgagaṃ kṛtvā mūḍhagarbhaṃ karoti hi ||",
        meaning:
          "Due to improper postures (Vishama Asana), improper sleeping positions (Vishama Shayana), and other such factors in the pregnant woman, Vata becomes provoked. This aggravated Vata displaces the fetus from the normal path (Vimargaga) and causes Mudha Garbha.",
        clinicalNote:
          "This etiological description emphasizes maternal lifestyle factors in causing malpresentation. Modern evidence supports that maternal positioning can influence fetal lie — techniques like optimal fetal positioning (hands-and-knees posture) are used to encourage cephalic presentation, echoing Sushruta's emphasis on proper Asana and Shayana during pregnancy.",
      },
    ],

    dualCols: [
      {
        title: "Types of Malpresentation",
        ayurvedaTitle: "Sushruta's Mudha Garbha Classification",
        modernTitle: "Modern Malpresentation Types",
        ayurvedaContent: `
          <p><strong>Sushruta classifies Mudha Garbha into four types based on presenting part:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Shiro Mudha:</strong> Head presents but in abnormal attitude — deflexed or extended. The Murdhana (vertex) does not lead. Requires gentle flexion and correction of position</li>
            <li><strong>Hasta Mudha:</strong> One or both hands (Hasta) prolapse alongside or ahead of the head. The hand must be gently pushed back (Pratilomakarana) before delivery</li>
            <li><strong>Pada Mudha:</strong> Feet (Pada) present first. The fetus is in Adho Gati (downward path) with lower limbs leading. Extraction by grasping the feet described</li>
            <li><strong>Parshva Mudha:</strong> Side (Parshva) or trunk presents. Most dangerous type. Requires complete version — turning the fetus to present either head or feet first</li>
          </ol>
          <p class="mt-3">Sushruta also described compound presentations where multiple parts present simultaneously.</p>
        `,
        modernContent: `
          <p><strong>Modern classification of malpresentation:</strong></p>
          <ol class="list-decimal pl-4 mt-2 space-y-2">
            <li><strong>Breech (3–4%):</strong> Frank (extended legs), Complete (flexed legs), Footling (one/both feet). Risks: cord prolapse, head entrapment, birth asphyxia</li>
            <li><strong>Transverse Lie (0.3%):</strong> Long axis of fetus perpendicular to maternal axis. Shoulder presents. Delivery impossible vaginally — requires ECV or LSCS</li>
            <li><strong>Face Presentation (0.2%):</strong> Complete extension of head. Mento-anterior can deliver vaginally; mento-posterior requires LSCS</li>
            <li><strong>Brow Presentation (0.07%):</strong> Partial extension. Largest diameter (mento-vertical = 13.5 cm) presents. Cannot deliver vaginally unless converts to face/vertex</li>
            <li><strong>Compound Presentation:</strong> Extremity alongside presenting part (usually hand with head). Mild cases: hand retracts during descent</li>
          </ol>
        `,
      },
      {
        title: "Management of Obstructed Labour",
        ayurvedaTitle: "Sushruta's Management Protocol",
        modernTitle: "Modern Obstetric Management",
        ayurvedaContent: `
          <p><strong>Sushruta's systematic approach to Mudha Garbha Chikitsa:</strong></p>
          <ul class="space-y-2">
            <li><strong>Step 1 — Assess Viability:</strong> Determine if Garbha is Jeeva (alive) or Mrita (dead) based on fetal movements, heartbeat, and maternal signs</li>
            <li><strong>Step 2 — Jeeva Garbha:</strong> Apply Sneha (ghee/oil lubrication) to birth canal; apply Sveda (fomentation) to abdomen. Gently introduce hand and reposition fetus (Hasta Karsha)</li>
            <li><strong>Step 3 — Mrita Garbha:</strong> When fetus is dead, use Yantras (instruments) — Sanku (hooks), Anguli Shastra (finger-blades) for extraction. Protect maternal tissues</li>
            <li><strong>Step 4 — Post-delivery:</strong> Uttara Basti with medicated oils. Yoni Dhupana (vaginal fumigation). Specific Sutika Paricharya (postnatal care)</li>
          </ul>
        `,
        modernContent: `
          <p><strong>Modern stepwise management:</strong></p>
          <ul class="space-y-2">
            <li><strong>Prevention:</strong> Identify malpresentation antenatally by Leopold manoeuvres and USG. Offer ECV for breech at 36–37 weeks</li>
            <li><strong>During Labour — Diagnosis:</strong> Partograph monitoring. Alert line crossing = augmentation. Action line crossing = intervention. Vaginal exam for presentation confirmation</li>
            <li><strong>Active Management:</strong> Breech — assisted breech delivery (Burns-Marshall, Lovset, Mauriceau-Smellie-Veit) or LSCS. Transverse lie — LSCS mandatory. Face — mento-anterior: allow vaginal; mento-posterior: LSCS</li>
            <li><strong>Obstructed Labour:</strong> Emergency LSCS if fetus alive. Symphysiotomy in resource-limited settings. Destructive operations only for dead fetus when LSCS not available</li>
            <li><strong>Post-operative:</strong> Monitor for PPH, sepsis, fistula. Antibiotics, oxytocics, bladder care</li>
          </ul>
        `,
      },
    ],

    clinicalFeatures: [
      {
        title: "Clinical Features of Malpresentation & Obstructed Labour",
        headers: ["Condition", "Clinical Signs", "Diagnostic Findings"],
        rows: [
          [
            "<strong>Breech Presentation</strong>",
            "Fundal grip: hard round head felt at fundus. First pelvic grip: soft irregular mass (buttocks). FHR best heard above umbilicus. Limbs felt on one side",
            "Per vaginal: soft irregular mass, sacrum as landmark, feet/buttocks felt. USG confirms. X-ray: fetal spine orientation",
          ],
          [
            "<strong>Transverse Lie</strong>",
            "Uterus broader than expected. No presenting part in pelvis on palpation. Fundal height less than dates. Shoulder felt on vaginal exam in labour",
            "USG: fetal spine horizontal. On VE: shoulder with acromion process, hand/arm may prolapse. Leopold: empty pelvis, head on one side",
          ],
          [
            "<strong>Face Presentation</strong>",
            "High head on abdominal palpation with prominent occiput on same side as back. Deep groove between occiput and back",
            "VE: orbital ridges, nose, mouth, malar bones palpable. Mentum as landmark. Mouth and malar bones form a triangle. No suture lines felt",
          ],
          [
            "<strong>Brow Presentation</strong>",
            "Head palpable on both sides abdominally. Prominent forehead felt on one side. Head not engaged despite good contractions",
            "VE: anterior fontanelle, orbital ridges, root of nose felt. Frontal suture palpable. Cannot feel mouth or chin (cf. face) or posterior fontanelle (cf. vertex)",
          ],
          [
            "<strong>Obstructed Labour</strong>",
            "Maternal distress: dehydration, tachycardia, fever. Continuous pain. Restlessness. Vulval oedema. Blood-stained urine (bladder compression). Bandl's ring visible",
            "VE: large caput succedaneum, excessive moulding (3+). No descent despite full dilatation and strong contractions. Bandl's ring: oblique ridge rising across abdomen (retraction ring)",
          ],
        ],
      },
    ],

    investigations: [
      {
        title: "Investigations in Abnormal Labour & Malpresentation",
        headers: ["Investigation", "Purpose", "Key Findings", "Clinical Significance"],
        rows: [
          [
            "<strong>Ultrasonography (USG)</strong>",
            "Confirm presentation, lie, and position",
            "Fetal orientation, placental location, amniotic fluid volume, estimated fetal weight",
            "Gold standard for antenatal diagnosis of malpresentation. Also detects placenta praevia and polyhydramnios as causative factors",
          ],
          [
            "<strong>Partograph</strong>",
            "Monitor progress of labour",
            "Cervical dilatation and descent plotted against time. Alert and action lines",
            "Alert line crossing: reassess. Action line crossing: intervention needed. Arrests diagnosis: no progress for 2–4 hours in active phase",
          ],
          [
            "<strong>CTG / EFM</strong>",
            "Monitor fetal heart rate pattern",
            "Baseline rate, variability, accelerations, decelerations",
            "Detect fetal distress in prolonged/obstructed labour. Late decelerations and reduced variability indicate compromise",
          ],
          [
            "<strong>Vaginal Examination</strong>",
            "Identify presenting part and landmarks",
            "Breech: sacrum. Face: mentum. Brow: frontal suture. Vertex: posterior fontanelle",
            "Essential for confirming presentation in labour. Assess station, position, moulding, caput, and cervical dilatation",
          ],
          [
            "<strong>Leopold Manoeuvres</strong>",
            "Abdominal palpation to determine lie, presentation, position, engagement",
            "4 manoeuvres: fundal grip, lateral grip, first pelvic grip (Pawlik), second pelvic grip",
            "Non-invasive first-line assessment. Should be performed at every antenatal visit from 28 weeks. May miss malpresentation in obese patients",
          ],
        ],
      },
    ],

    management: {
      diagramTitle: "Clinical Decision Tree — Management of Mudha Garbha / Malpresentation",
      diagramSvg: `
        <svg viewBox="0 0 850 700" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
          <style>
            .box { fill: #FFF8E1; stroke: #C8712A; stroke-width: 2; rx: 10; }
            .box-blue { fill: #E3F2FD; stroke: #42A5F5; stroke-width: 2; rx: 10; }
            .box-green { fill: #E8F5E9; stroke: #66BB6A; stroke-width: 2; rx: 10; }
            .box-red { fill: #FFEBEE; stroke: #EF5350; stroke-width: 2; rx: 10; }
            .label { font-family: 'DM Sans', sans-serif; font-size: 12px; fill: #333; text-anchor: middle; }
            .label-bold { font-family: 'DM Sans', sans-serif; font-size: 13px; fill: #333; font-weight: bold; text-anchor: middle; }
            .arrow { stroke: #C8712A; stroke-width: 2; fill: none; marker-end: url(#ah); }
            .arrow-yes { stroke: #66BB6A; stroke-width: 2; fill: none; marker-end: url(#ah-g); }
            .arrow-no { stroke: #EF5350; stroke-width: 2; fill: none; marker-end: url(#ah-r); }
            .yes-label { font-size: 11px; fill: #2E7D32; font-weight: bold; }
            .no-label { font-size: 11px; fill: #C62828; font-weight: bold; }
          </style>
          <defs>
            <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#C8712A"/></marker>
            <marker id="ah-g" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#66BB6A"/></marker>
            <marker id="ah-r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#EF5350"/></marker>
          </defs>

          <!-- Top: Malpresentation Detected -->
          <rect class="box" x="280" y="10" width="280" height="45"/>
          <text class="label-bold" x="420" y="37">Malpresentation Detected (Mudha Garbha)</text>

          <line class="arrow" x1="420" y1="55" x2="420" y2="80"/>

          <!-- Antenatal or in Labour? -->
          <rect class="box-blue" x="310" y="80" width="220" height="40"/>
          <text class="label-bold" x="420" y="105">Antenatal or In Labour?</text>

          <line class="arrow-yes" x1="330" y1="120" x2="180" y2="155"/>
          <text class="yes-label" x="235" y="140">Antenatal</text>

          <line class="arrow-no" x1="510" y1="120" x2="650" y2="155"/>
          <text class="no-label" x="600" y="140">In Labour</text>

          <!-- Antenatal branch -->
          <rect class="box-green" x="60" y="155" width="240" height="45"/>
          <text class="label-bold" x="180" y="175">Breech at 36–37 wks?</text>
          <text class="label" x="180" y="192">Offer ECV (External Cephalic Version)</text>

          <line class="arrow-yes" x1="100" y1="200" x2="60" y2="240"/>
          <text class="yes-label" x="60" y="228">ECV Success</text>

          <line class="arrow-no" x1="260" y1="200" x2="300" y2="240"/>
          <text class="no-label" x="300" y="228">ECV Failed</text>

          <rect class="box-green" x="10" y="240" width="130" height="40"/>
          <text class="label-bold" x="75" y="257">Await vaginal</text>
          <text class="label" x="75" y="272">delivery</text>

          <rect class="box-red" x="220" y="240" width="160" height="40"/>
          <text class="label-bold" x="300" y="257">Plan Elective LSCS</text>
          <text class="label" x="300" y="272">at 39 weeks</text>

          <!-- In Labour branch -->
          <rect class="box" x="560" y="155" width="230" height="45"/>
          <text class="label-bold" x="675" y="175">Assess Presentation Type</text>
          <text class="label" x="675" y="192">+ Fetal Viability</text>

          <line class="arrow" x1="600" y1="200" x2="500" y2="240"/>
          <line class="arrow" x1="675" y1="200" x2="675" y2="240"/>
          <line class="arrow" x1="750" y1="200" x2="830" y2="240"/>

          <!-- Breech in labour -->
          <rect class="box-blue" x="420" y="240" width="160" height="55"/>
          <text class="label-bold" x="500" y="258">Breech</text>
          <text class="label" x="500" y="273">Assisted breech</text>
          <text class="label" x="500" y="286">or emergency LSCS</text>

          <!-- Transverse in labour -->
          <rect class="box-red" x="600" y="240" width="150" height="55"/>
          <text class="label-bold" x="675" y="258">Transverse Lie</text>
          <text class="label" x="675" y="273">LSCS mandatory</text>
          <text class="label" x="675" y="286">(no vaginal option)</text>

          <!-- Face/Brow -->
          <rect class="box" x="770" y="240" width="130" height="55"/>
          <text class="label-bold" x="835" y="258">Face/Brow</text>
          <text class="label" x="835" y="273">Mento-ant: vaginal</text>
          <text class="label" x="835" y="286">Mento-post: LSCS</text>

          <!-- Obstructed labour -->
          <line class="arrow" x1="500" y1="295" x2="420" y2="340"/>
          <line class="arrow" x1="675" y1="295" x2="560" y2="340"/>

          <rect class="box-red" x="370" y="340" width="280" height="50"/>
          <text class="label-bold" x="510" y="360">Signs of Obstruction? (Bandl's Ring)</text>
          <text class="label" x="510" y="380">Fetus Alive → Emergency LSCS</text>

          <!-- Sushruta's approach box -->
          <rect class="box" x="60" y="430" width="730" height="85"/>
          <text class="label-bold" x="425" y="455">Ayurvedic Approach (Sushruta Chikitsa Sthana 15)</text>
          <text class="label" x="425" y="475">1. Jeeva Garbha: Sneha-Sveda → gentle manual repositioning (Hasta Karma) → deliver cephalic</text>
          <text class="label" x="425" y="492">2. Mrita Garbha: Instrumental extraction with Yantras — prioritize maternal safety (Matru Raksha)</text>
          <text class="label" x="425" y="509">3. Post-delivery: Uttara Basti, Yoni Dhupana, Sutika Paricharya for recovery</text>

          <line class="arrow" x1="425" y1="390" x2="425" y2="430"/>

          <!-- Integrated Protocol -->
          <rect class="box-green" x="140" y="545" width="570" height="55"/>
          <text class="label-bold" x="425" y="568">Integrated Protocol: Antenatal Prevention + Modern Decision-Making</text>
          <text class="label" x="425" y="588">Garbhini Paricharya for positioning + USG monitoring + timely ECV/LSCS</text>

          <line class="arrow" x1="425" y1="515" x2="425" y2="545"/>
        </svg>
      `,
      notes: `
        <p><strong>Key clinical pearls for Mudha Garbha management:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Sushruta's differentiation between Jeeva Garbha and Mrita Garbha management parallels the modern principle: live fetus = LSCS, dead fetus = consider destructive operations</li>
          <li>External Cephalic Version (ECV) success rate is approximately 50–60% and should be offered at 36–37 weeks for breech presentation</li>
          <li>Prerequisites for forceps (mnemonic ABCDEFGH): Abdomen — head 0/5 palpable; Bladder empty; Cervix fully dilated; Descent — station +2 or below; Engagement confirmed; Forceps available; Good contractions; Handling (experienced operator)</li>
          <li>Bandl's ring (pathological retraction ring) is a sign of impending uterine rupture in obstructed labour — URGENT caesarean needed</li>
          <li>Transverse lie in active labour with ruptured membranes is an absolute indication for emergency LSCS — never attempt vaginal delivery</li>
        </ul>
      `,
    },

    integration: `
      <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Sushruta's Operative Obstetrics with Modern Practice</h3>
      <div class="space-y-4">
        <p>Mudha Garbha management represents one of Sushruta's most remarkable contributions to obstetric surgery. His systematic classification and operative protocols demonstrate surgical sophistication that predated European obstetric practice by centuries.</p>

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• Systematic classification of malpresentation types</li>
              <li>• Clear differentiation of Jeeva/Mrita Garbha management</li>
              <li>• Pre-procedure preparation with Sneha-Sveda</li>
              <li>• Emphasis on maternal safety as paramount principle</li>
              <li>• Comprehensive post-operative Sutika Paricharya</li>
              <li>• Preventive approach through Garbhini Paricharya</li>
            </ul>
          </div>
          <div class="bg-white/60 p-4 rounded-lg">
            <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
            <ul class="space-y-1 text-sm">
              <li>• USG for precise antenatal diagnosis of malpresentation</li>
              <li>• Continuous electronic fetal monitoring during labour</li>
              <li>• Safe caesarean section with anaesthesia</li>
              <li>• Evidence-based ECV protocols with tocolysis</li>
              <li>• Partograph for objective labour monitoring</li>
              <li>• NICU support for compromised neonates</li>
            </ul>
          </div>
        </div>

        <div class="bg-white/60 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Integrated Clinical Protocol</h4>
          <ol class="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Antenatal:</strong> Garbhini Paricharya with proper Asana and Vihara guidance for optimal fetal positioning + USG at 36 weeks for presentation</li>
            <li><strong>36–37 weeks breech:</strong> Offer ECV. Pre-procedure Sneha Abhyanga (oil massage) for relaxation aligns with tocolysis concept</li>
            <li><strong>Intrapartum:</strong> Partograph monitoring + prompt recognition of malpresentation. Apply Sushruta's principle of assessing fetal viability first</li>
            <li><strong>Operative delivery:</strong> Modern LSCS with safe anaesthesia. Apply Ayurvedic Sutika Paricharya principles in post-operative recovery</li>
            <li><strong>Post-delivery:</strong> Integration of Uttara Basti and wound care with standard post-LSCS protocols for optimal recovery</li>
          </ol>
        </div>
      </div>
    `,

    examBullets: [
      "Mudha Garbha = fetus deviating from normal birth passage due to Vata Prakopa (Su. Ni. 8/2). Four types: Shiro Mudha, Hasta Mudha, Pada Mudha, Parshva Mudha.",
      "Sushruta's approach: Jeeva Garbha (alive) = Sneha-Sveda + manual repositioning. Mrita Garbha (dead) = instrumental extraction with Yantras. Maternal safety paramount.",
      "Sneha-Sveda before manipulation parallels modern tocolysis (Terbutaline/Nifedipine) and anaesthesia used before ECV and version procedures.",
      "Breech presentation types: Frank (extended legs, 65%), Complete (flexed legs, 10%), Footling (one/both feet, 25%). Overall incidence ~3–4% at term.",
      "Diagnosis of breech: fundal grip = hard round ballottable head at fundus. FHR heard above umbilicus. VE: soft irregular mass, sacrum as denominator.",
      "ECV (External Cephalic Version) offered at 36–37 weeks. Contraindications: APH, ruptured membranes, uterine scar, oligohydramnios, IUGR, multiple pregnancy.",
      "Assisted breech delivery manoeuvres: Burns-Marshall (aftercoming head), Lovset (delivery of arms by rotation), Mauriceau-Smellie-Veit (aftercoming head flexion).",
      "Transverse lie: shoulder presentation in labour. Absolutely requires LSCS if alive. Neglected shoulder = hand prolapse, cord prolapse, uterine rupture risk.",
      "Face presentation: mentum is denominator. Mento-anterior (60%) can deliver vaginally; Mento-posterior (40%) MUST have LSCS. Mento-transverse: wait for rotation.",
      "Brow presentation: largest presenting diameter = mento-vertical (13.5 cm). Cannot pass through pelvis. Most convert to face or vertex; persistent brow = LSCS.",
      "Partograph: cervicograph plots cervical dilatation. Alert line = 1 cm/hr. Crossing action line (4 hrs right of alert) = intervention needed — LSCS or augmentation.",
      "Signs of obstructed labour: Bandl's ring (visible pathological retraction ring), vulval oedema, haematuria, maternal tachycardia, hot dry vagina, caput 3+, moulding 3+.",
      "Forceps prerequisites (ABCDEFGH): Abdomen 0/5 head palpable, Bladder empty, Cervix fully dilated, Descent to station +2, Engagement confirmed, Forceps ready, Good contractions, Handling by experienced operator.",
      "Complications of obstructed labour: uterine rupture, VVF (vesicovaginal fistula), PPH, cervical tears, birth asphyxia, neonatal injury, maternal sepsis, maternal death.",
      "Sushruta's Yantras for Mrita Garbha extraction: Sanku (hook), Anguli Shastra (finger-blade), Mandalagra Shastra (circular blade) — historical precursors of obstetric instruments.",
    ],

    mnemonics: [
      {
        title: "Mudha Garbha Types (Sushruta)",
        acronym: "SHPP",
        expansions: [
          "Shiro Mudha — Head malposition (face, brow, OP)",
          "Hasta Mudha — Hand prolapse / compound presentation",
          "Pada Mudha — Foot presentation / footling breech",
          "Parshva Mudha — Side / transverse lie",
        ],
      },
      {
        title: "Forceps Prerequisites",
        acronym: "ABCDEFGH",
        expansions: [
          "Abdomen — head 0/5 palpable per abdomen",
          "Bladder — must be empty (catheterize)",
          "Cervix — fully dilated (10 cm)",
          "Descent — station +2 or below",
          "Engagement — confirmed (biparietal past inlet)",
          "Forceps — correct type available and checked",
          "Good contractions — adequate uterine activity",
          "Handling — experienced operator with consent",
        ],
      },
      {
        title: "Causes of Malpresentation",
        acronym: "MALPRESENT",
        expansions: [
          "Multiple pregnancy",
          "Anomalies of uterus (bicornuate, septate)",
          "Lax abdominal wall (multiparity)",
          "Placenta praevia",
          "Reduced amniotic fluid (oligohydramnios)",
          "Excess fluid (polyhydramnios)",
          "Short umbilical cord",
          "Engaged tumour (fibroid, ovarian cyst)",
          "Narrow pelvis (contracted pelvis)",
          "Tumour of fetus (hydrocephalus, teratoma)",
        ],
      },
      {
        title: "Signs of Obstructed Labour",
        acronym: "BANDL",
        expansions: [
          "Bandl's retraction ring visible",
          "Anxious and dehydrated mother",
          "No descent despite full dilatation",
          "Distress of fetus (late decelerations)",
          "Large caput and excessive moulding",
        ],
      },
    ],
  };
}
