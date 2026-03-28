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
// M15 — BAHUGARBHA (Multiple Pregnancy & Malpresentations)
// ────────────────────────────────────────────────────────

const m15Content: TopicContent = {
  references: [
    "Charaka Sharira Sthana Ch. 2–4",
    "Sushruta Sharira Sthana Ch. 3 (Garbhavakranti)",
    "Sushruta Chikitsa Sthana Ch. 15 (Mudha Garbha)",
    "Kashyapa Samhita — Sharira Sthana",
    "Ashtanga Hridaya Sharira Sthana Ch. 1",
    "Harita Samhita — Tritiya Sthana",
    "Williams Obstetrics Ch. 45–47",
    "DC Dutta Ch. 25–27",
    "Ian Donald's Practical Obstetric Problems",
  ],

  units: [
    {
      title: "Classical References to Multiple Pregnancy",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers Ayurvedic concepts related to multiple pregnancy (Bahugarbha/Yugmagarbha). Classical texts describe the formation of twins and higher-order multiples through the concept of Beeja Vibhajana (division of seed) and multiple Beeja implantation. Sushruta describes Yugma Garbha (twin pregnancy) in the context of Garbhavakranti Sharira. Harita Samhita provides specific references to twin conception. The Ayurvedic understanding of how Vata Dosha can split the Beeja leading to identical twins is a remarkable classical insight."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Bahugarbha / Yugma Garbha — classical terminology for multiple pregnancy"),
          React.createElement("li", null, "Beeja Vibhajana concept — Vata-driven splitting of fertilized ovum (monozygotic)"),
          React.createElement("li", null, "Dvi-Beeja concept — two separate fertilizations (dizygotic)"),
          React.createElement("li", null, "Harita Samhita references to twin and multiple pregnancies"),
          React.createElement("li", null, "Garbhini Paricharya modifications for Bahugarbha")
        )
      ),
    },
    {
      title: "Twin Pregnancy — Types, Chorionicity & Complications",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers the modern classification of twin pregnancy: monozygotic (identical) versus dizygotic (fraternal), and the critical concept of chorionicity — dichorionic-diamniotic (DCDA), monochorionic-diamniotic (MCDA), and monochorionic-monoamniotic (MCMA). Chorionicity determination by first-trimester USG is the single most important factor determining twin pregnancy management and outcome. Complications unique to twins including TTTS, TAPS, sIUGR, preterm labour, and cord entanglement are covered."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Monozygotic vs Dizygotic — mechanism, frequency, zygosity determination"),
          React.createElement("li", null, "Chorionicity: DCDA (lambda sign), MCDA (T-sign), MCMA (no membrane)"),
          React.createElement("li", null, "TTTS (Twin-to-Twin Transfusion Syndrome) — Quintero staging"),
          React.createElement("li", null, "Selective IUGR in monochorionic twins"),
          React.createElement("li", null, "Preterm labour — most common complication of twin pregnancy")
        )
      ),
    },
    {
      title: "Malpresentations — Breech, Transverse Lie & Face",
      content: React.createElement("div", null,
        React.createElement("p", { className: "text-gray-700 leading-relaxed" },
          "This unit covers malpresentations from both Ayurvedic (Mudha Garbha classification) and modern perspectives. Breech presentation (Pada Prasrita Garbha) — types (frank, complete, footling), ECV (external cephalic version), and mode of delivery. Transverse lie (Tiryak Garbha) — causes, diagnosis, management. Face presentation (Mukha Prasrita) — mechanism of labour, mentoanterior vs mentoposterior. Compound presentation and other rare malpresentations are also discussed."
        ),
        React.createElement("ul", { className: "mt-3 space-y-2 text-sm text-gray-600" },
          React.createElement("li", null, "Breech: frank (65%), complete (25%), footling (10%) — management algorithm"),
          React.createElement("li", null, "ECV (External Cephalic Version) — technique, success rate, contraindications"),
          React.createElement("li", null, "Term Breech Trial — evidence for elective cesarean in term breech"),
          React.createElement("li", null, "Transverse lie — must deliver by cesarean if persists in labour"),
          React.createElement("li", null, "Face presentation — only mentoanterior can deliver vaginally")
        )
      ),
    },
  ],

  orientation: {
    why: "Bahugarbha (Multiple Pregnancy) and Malpresentations are high-stakes obstetric conditions requiring urgent clinical decision-making. The incidence of twins is rising due to ART (assisted reproductive technology). Malpresentations constitute a major proportion of emergency obstetric care. Sushruta's Mudha Garbha chapter provides the classical foundation for understanding and managing abnormal presentations. Integrating this knowledge with modern evidence (Term Breech Trial, chorionicity-based twin management) is essential for MD Ayurveda practice.",
    examWeight: "Very high-yield for university exams. Twin pregnancy classification, chorionicity determination, and TTTS are frequently asked as long essays (20 marks). Breech presentation management including ECV and Term Breech Trial findings appears as short notes (10 marks). Mudha Garbha shlokas from Sushruta are very commonly asked. MCQs frequently test chorionicity (lambda vs T-sign), TTTS staging, and breech management algorithms.",
  },

  definition: {
    ayurveda: `
      <p><strong>Bahugarbha</strong> (Bahu = many, Garbha = embryo) refers to the presence of more than one fetus in the uterus. The classical term <strong>Yugma Garbha</strong> specifically refers to twins.</p>
      <p class="mt-2 font-sanskrit text-saffron-800">"वायुना बीजं द्विधा विभज्यते — ततो यमौ प्रजायेते"</p>
      <p class="mt-2">Sushruta explains that when <strong>Vata</strong> splits the <strong>Beeja</strong> (fertilized seed) into two parts, <strong>Yamau</strong> (twins) are born. When two separate Beejas are fertilized simultaneously, dizygotic twins result. <strong>Mudha Garbha</strong> refers to abnormal fetal presentation causing obstructed labour — classified by Sushruta based on the presenting part.</p>
    `,
    modern: `
      <p><strong>Multiple pregnancy</strong> is defined as the presence of more than one fetus in the uterus simultaneously. <strong>Twins</strong> occur in approximately 1 in 80 pregnancies naturally (Hellin's law), with increasing rates due to ART and advanced maternal age.</p>
      <p class="mt-2"><strong>Malpresentation</strong> refers to any presentation other than vertex (cephalic with flexed head). Includes breech (3-4% at term), transverse lie (0.3%), face, brow, compound presentations.</p>
      <p class="mt-2"><strong>Chorionicity</strong> (not zygosity) determines the risk profile and management of twin pregnancies. Monochorionic twins have shared placental circulation and carry risks of TTTS, TAPS, and cord entanglement (MCMA).</p>
    `,
    classification: {
      title: "Classification of Twin Pregnancy by Chorionicity",
      headers: ["Type", "Zygosity", "Placentation", "Frequency & Risk"],
      rows: [
        [
          "<strong>DCDA</strong>",
          "Dizygotic (most common) or Monozygotic (split Day 0-3)",
          "2 placentas, 2 chorions, 2 amnions. USG: Lambda (twin peak) sign",
          "80% of all twins. Lowest risk. No TTTS. Manage as 2 separate pregnancies with growth monitoring",
        ],
        [
          "<strong>MCDA</strong>",
          "Monozygotic (split Day 4-8)",
          "1 placenta, 1 chorion, 2 amnions. USG: T-sign (thin membrane meets placenta at 90 degrees)",
          "18-20% of twins. Risk of TTTS (10-15%), TAPS, sIUGR, discordant growth. Needs 2-weekly USG from 16 wk",
        ],
        [
          "<strong>MCMA</strong>",
          "Monozygotic (split Day 8-13)",
          "1 placenta, 1 chorion, 1 amnion. No dividing membrane on USG",
          "1-2% of twins. Highest risk: cord entanglement (risk of sudden IUFD). Deliver by 32-34 wk CS. Inpatient monitoring from 26 wk",
        ],
        [
          "<strong>Conjoined</strong>",
          "Monozygotic (split after Day 13 — incomplete)",
          "Incomplete separation — fused at various sites",
          "Rarest (1 in 50,000-100,000). Thoracopagus (40%), omphalopagus (33%). Diagnose early USG. Specialized surgical separation",
        ],
      ],
    },
  },

  shlokas: [
    {
      source: "Sushruta Sharira Sthana 3/18",
      devanagari:
        "वायुना बीजं द्विधा विभज्यमानं यमौ जनयति |\nद्वयोः शुक्रशोणितयोः सम्प्रवृत्तयोः\nयुगपत् गर्भौ स्यातां तौ युग्मौ इति ||",
      transliteration:
        "vāyunā bījaṃ dvidhā vibhajyamānaṃ yamau janayati |\ndvayoḥ śukraśoṇitayoḥ sampravṛttayoḥ\nyugapat garbhau syātāṃ tau yugmau iti ||",
      meaning:
        "When the Beeja (fertilized ovum) is split into two by Vayu (Vata Dosha), it produces twins (Yamau). When two separate units of Shukra-Shonita (sperm-ovum) are activated simultaneously (Yugapat), twin embryos develop — these are called Yugma (twins).",
      clinicalNote:
        "This is a remarkably accurate description of monozygotic (MZ) and dizygotic (DZ) twinning. Vata-driven Beeja Vibhajana corresponds to the splitting of the inner cell mass producing MZ twins. Two separate fertilizations producing DZ twins is precisely the Dvi-Beeja concept. Sushruta essentially described the two mechanisms of twinning millennia before modern embryology.",
    },
    {
      source: "Sushruta Chikitsa Sthana 15/6-7",
      devanagari:
        "गर्भस्य विविधा गतयः — शिरः प्रथमं मार्गमाविशति |\nयदा पादौ प्रथमं दृश्येते स पादप्रसृतो मूढगर्भः |\nयदा पार्श्वेन तिर्यक् स्थितः स तिर्यग्गतो मूढगर्भः ||",
      transliteration:
        "garbhasya vividhā gatayaḥ — śiraḥ prathamaṃ mārgamāviśati |\nyadā pādau prathamaṃ dṛśyete sa pādaprasṛto mūḍhagarbhaḥ |\nyadā pārśvena tiryak sthitaḥ sa tiryaggato mūḍhagarbhaḥ ||",
      meaning:
        "The fetus has various presentations (Gati). Normally, the head enters the birth canal first (Shirah Prasrita — cephalic presentation). When the feet are seen first, it is called Pada Prasrita Mudha Garbha (breech presentation). When the fetus lies sideways/transversely, it is called Tiryak Gata Mudha Garbha (transverse lie).",
      clinicalNote:
        "Sushruta's classification directly maps to modern presentation terminology: Shirah Prasrita = vertex/cephalic, Pada Prasrita = breech, Tiryak Gata = transverse lie. The recognition that cephalic is normal and others require intervention is identical to modern obstetric teaching. Sushruta then describes specific management for each type — making this one of the earliest clinical algorithms for malpresentation.",
    },
    {
      source: "Harita Samhita — Tritiya Sthana 49/1-3",
      devanagari:
        "एकस्मिन् गर्भाशये द्वौ गर्भौ यदा तिष्ठतः |\nतत्र एकः शिरसा अधो वर्तते अपरश्च पादाभ्याम् |\nतयोः प्रसवकाले विशेषेण चिकित्सा कार्या ||",
      transliteration:
        "ekasmin garbhāśaye dvau garbhau yadā tiṣṭhataḥ |\ntatra ekaḥ śirasā adho vartate aparaśca pādābhyām |\ntayoḥ prasavakāle viśeṣeṇa cikitsā kāryā ||",
      meaning:
        "When two fetuses reside in a single uterus (Garbhashaya), one may present with the head down (Shirasa Adhah = cephalic) and the other with the feet (Padabhyam = breech). At the time of delivery (Prasava Kala), special management (Vishesha Chikitsa) is required for both.",
      clinicalNote:
        "Harita describes the most common twin presentation combination — first twin cephalic, second twin breech (approximately 35-40% of twin presentations). The emphasis on Vishesha Chikitsa (specialized management) reflects the understanding that twin delivery requires expertise. Modern practice: first twin cephalic — vaginal delivery attempted; second twin breech — IPV or breech extraction or CS.",
    },
    {
      source: "Charaka Sharira Sthana 4/30",
      devanagari:
        "शुक्रशोणितयोः अतिबहुत्वात् वायोश्च प्रभावात् |\nबहुगर्भता भवति स्त्रीणाम् |\nवृद्धं बीजं विभजते मारुतो बलवान् यदा ||",
      transliteration:
        "śukraśoṇitayoḥ atibahutvāt vāyośca prabhāvāt |\nbahugarbhatā bhavati strīṇām |\nvṛddhaṃ bījaṃ vibhajate māruto balavān yadā ||",
      meaning:
        "Due to an abundance (Atibahutvat) of Shukra and Shonita (reproductive elements) and under the influence (Prabhava) of Vayu, multiple pregnancies (Bahugarbhata) occur in women. The powerful Vayu (Maruta) divides the mature seed (Vriddha Beeja).",
      clinicalNote:
        "Charaka identifies two mechanisms for multiple pregnancy: (1) Atibahutvat — excess reproductive elements leading to multiple ovulations (equivalent to dizygotic twinning from superovulation, as in fertility treatments); (2) Vayu Prabhava on Beeja — wind force splitting the seed (monozygotic twinning by embryo splitting). Both mechanisms are validated by modern reproductive biology.",
    },
  ],

  dualCols: [
    {
      title: "Twin Pregnancy Management",
      ayurvedaTitle: "Bahugarbha Paricharya (Classical Care)",
      modernTitle: "Evidence-Based Twin Pregnancy Protocol",
      ayurvedaContent: `
        <p><strong>Ayurvedic approach to twin pregnancy care:</strong></p>
        <ul class="space-y-2">
          <li><strong>Enhanced Garbhini Paricharya:</strong> Increased nutritional support — double Rasa Dhatu requirements. Shatavari Ghrita, Ashwagandha, and Vidari Kanda for Bala Vardhana (strength building) and Garbha Poshana (fetal nourishment)</li>
          <li><strong>Vata Shamana focus:</strong> Twin pregnancy increases Vata due to uterine overdistension. Bala Taila Abhyanga, Dashmoola Kwatha orally, Anuvasana Basti with Til Taila for prevention of preterm labour</li>
          <li><strong>Modified Pathya:</strong> Increased caloric intake with easy-to-digest foods. Kshira Pana (milk), Ghrita (ghee), Madhura Ahara (sweet nutritive foods) in larger quantities</li>
          <li><strong>Garbha Sthapana:</strong> Risk of premature delivery is higher — Garbha Sthapana drugs (Shatavari, Ashwagandha, Aindri) for uterine relaxation and pregnancy maintenance</li>
          <li><strong>Delivery preparation:</strong> Vishesha Chikitsa (special management) anticipated — skilled Vaidya required; prepare for sequential delivery of two fetuses</li>
        </ul>
      `,
      modernContent: `
        <p><strong>Surveillance protocol by chorionicity:</strong></p>
        <ul class="space-y-2">
          <li><strong>DCDA twins:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Growth USG every 4 weeks from 20 weeks</li>
              <li>Discordance >25% in EFW: increased surveillance</li>
              <li>Delivery: 37-38 weeks (elective) if uncomplicated</li>
            </ul>
          </li>
          <li><strong>MCDA twins:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Fortnightly USG from 16 weeks (TTTS screening)</li>
              <li>Assess MCA-PSV, UA Doppler, deepest vertical pool</li>
              <li>TTTS: Quintero staging I-V, laser ablation if Stage II+</li>
              <li>Delivery: 36-37 weeks</li>
            </ul>
          </li>
          <li><strong>MCMA twins:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Inpatient monitoring from 26 weeks (cord entanglement risk)</li>
              <li>Daily CTG, weekly USG</li>
              <li>Delivery: 32-34 weeks by CS (after steroid cover)</li>
            </ul>
          </li>
          <li><strong>Nutrition:</strong> Extra 300 kcal/day, iron 100 mg/day, folic acid 5 mg/day, calcium 1500 mg/day</li>
        </ul>
      `,
    },
    {
      title: "Breech Presentation Management",
      ayurvedaTitle: "Pada Prasrita Mudha Garbha Chikitsa",
      modernTitle: "Modern Breech Management Algorithm",
      ayurvedaContent: `
        <p><strong>Sushruta's approach to breech (Pada Prasrita):</strong></p>
        <ul class="space-y-2">
          <li><strong>Conservative measures first:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Sneha-Sveda (oleation and fomentation) to relax uterine muscles</li>
              <li>Positioning of mother to encourage Garbha Parivartana (fetal turning)</li>
              <li>Basti Karma (enema therapy) for Vatanulomana — facilitating natural version</li>
            </ul>
          </li>
          <li><strong>Manual version:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Hasta Karma — external manipulation to turn the fetus (earliest ECV description)</li>
              <li>Hand lubricated with Sneha inserted for Padagra Grahana (grasping feet) during labour — internal podalic version</li>
            </ul>
          </li>
          <li><strong>Delivery in breech:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Pada Prasrita Nirharana — gentle traction on presenting feet</li>
              <li>Skilled delivery technique to protect aftercoming head</li>
            </ul>
          </li>
        </ul>
      `,
      modernContent: `
        <p><strong>Breech management algorithm:</strong></p>
        <ol class="list-decimal pl-4 mt-2 space-y-2">
          <li><strong>Identify at 36 weeks:</strong> 3-4% of term babies are breech. Confirm by Leopold maneuvers + USG</li>
          <li><strong>External Cephalic Version (ECV) at 36-37 weeks:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Success rate: 50-60% (higher in multiparous)</li>
              <li>Contraindications: placenta previa, multiple pregnancy, APH, uterine scar, severe oligohydramnios</li>
              <li>Tocolysis (terbutaline 0.25 mg SC) improves success</li>
              <li>Perform under USG guidance, CTG before and after</li>
            </ul>
          </li>
          <li><strong>If ECV fails or declined — Elective CS at 39 weeks:</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>Term Breech Trial (Hannah 2000): planned CS reduces perinatal mortality/morbidity vs planned vaginal breech delivery</li>
              <li>Vaginal breech delivery still practiced in selected cases by experienced operators</li>
            </ul>
          </li>
          <li><strong>Vaginal breech criteria:</strong> frank/complete breech, EFW 2500-3500g, adequate pelvis, flexed head on USG, experienced operator</li>
        </ol>
      `,
    },
  ],

  clinicalFeatures: [
    {
      title: "Malpresentations — Clinical Features & Diagnosis",
      headers: ["Presentation", "Ayurvedic Term", "Clinical Features", "Diagnosis & Management"],
      rows: [
        [
          "<strong>Breech</strong>",
          "Pada Prasrita Mudha Garbha — feet/buttocks presenting first",
          "Fundal hardness (head), lower pole soft and irregular (buttocks), FHR heard above umbilicus, ballottable head at fundus. Types: frank (extended legs), complete (flexed legs), footling (foot first)",
          "Diagnosis: Leopold III (soft irregular presenting part), USG confirmation. Management: ECV at 36-37 wk; if fails, elective CS at 39 wk (Term Breech Trial). Vaginal breech: only in selected cases",
        ],
        [
          "<strong>Transverse Lie</strong>",
          "Tiryak Gata Mudha Garbha — fetus lying sideways across the uterus",
          "Uterus appears broad, low fundal height for GA, no presenting part in pelvis on VE, shoulder may be felt, FHR heard at/below umbilicus in midline. Risk: cord prolapse, obstructed labour, uterine rupture",
          "Diagnosis: Leopold maneuvers (broad uterus, no pole at pelvis), USG. Management: ECV attempt if >36 wk; unstable lie: admit at 37 wk. If persists in labour: CS mandatory. NEVER allow vaginal delivery",
        ],
        [
          "<strong>Face Presentation</strong>",
          "Mukha Prasrita — face presenting due to complete head extension (deflexion)",
          "Per vaginal: orbital ridges, nose, mouth felt. Mentum (chin) is the denominator. Edematous face may mimic breech (distinguish: mouth has hard alveolar ridges vs anus has soft sphincter). Incidence: 1 in 500",
          "Mento-anterior (MA): vaginal delivery possible — chin rotates under symphysis. Mento-posterior (MP): CS mandatory — cannot deliver vaginally (chin cannot negotiate sacral curve). Confirm by USG if doubt",
        ],
        [
          "<strong>Brow Presentation</strong>",
          "Lalata Prasrita — forehead presenting (partial extension between vertex and face)",
          "Largest presenting diameter (mentovertical = 13.5 cm). Per vaginal: anterior fontanelle, orbital ridges, root of nose. Cannot deliver vaginally unless converts to face or vertex",
          "Diagnosed on VE: supraorbital ridges + anterior fontanelle felt simultaneously. Management: observe — may flex to vertex (70%) or extend to face. If persistent: CS. Most unstable presentation",
        ],
        [
          "<strong>Compound Presentation</strong>",
          "Saha Prasrita — hand or limb alongside the presenting part (head + hand most common)",
          "Per vaginal: hand/arm felt alongside head. Usually occurs with preterm, small baby, polyhydramnios. Often hand retracts spontaneously as head descends",
          "If hand retracts: allow vaginal delivery. If hand prevents descent: gently push hand above head during contraction. If fails: CS. Never pull on prolapsed arm",
        ],
      ],
    },
  ],

  investigations: [
    {
      title: "Investigations for Multiple Pregnancy & Malpresentations",
      headers: ["Investigation", "Purpose", "Timing", "Key Findings"],
      rows: [
        [
          "<strong>First Trimester USG</strong>",
          "Determine chorionicity & amnionicity",
          "11-14 weeks (most accurate)",
          "Lambda sign = DCDA (twin peak between membranes); T-sign = MCDA (membrane meets placenta at 90 degrees); No membrane = MCMA. Chorionicity CANNOT be reliably determined in 2nd/3rd trimester",
        ],
        [
          "<strong>Serial Growth USG</strong>",
          "Monitor fetal growth, discordance",
          "DCDA: 4-weekly from 20 wk; MCDA: 2-weekly from 16 wk",
          "EFW discordance >25% = significant. Check UA Doppler, MCA-PSV, DVP for each twin. Plot growth on twin-specific charts (not singleton charts)",
        ],
        [
          "<strong>MCA-PSV Doppler</strong>",
          "Screen for TAPS (Twin Anemia Polycythemia Sequence)",
          "2-weekly in MCDA twins from 16 weeks",
          "Donor twin: MCA-PSV >1.5 MoM (anemic). Recipient: MCA-PSV <1.0 MoM (polycythemic). TAPS is a chronic form of inter-twin transfusion",
        ],
        [
          "<strong>Leopold Maneuvers</strong>",
          "Clinical determination of lie, presentation, position",
          "Every antenatal visit from 28 weeks",
          "4 maneuvers: fundal grip (identifies which pole is at fundus), lateral grip (fetal back), Pawlik grip (presenting part), pelvic grip (descent/engagement). Confirms breech, transverse lie clinically",
        ],
        [
          "<strong>USG for Malpresentation</strong>",
          "Confirm presentation, assess EFW, AFI, placental position",
          "When malpresentation suspected clinically",
          "Confirms breech type (frank/complete/footling), head attitude (flexed/deflexed), cord position, placental site. Essential before ECV attempt",
        ],
        [
          "<strong>CTG (Cardiotocography)</strong>",
          "Fetal wellbeing in labour, twin monitoring",
          "Intrapartum, and for surveillance in MCMA twins",
          "Simultaneous dual CTG monitoring for twins in labour. Each twin must have separate tracing. Baseline, variability, accelerations, decelerations assessed individually",
        ],
      ],
    },
  ],

  management: {
    diagramTitle: "Clinical Decision Tree — Twin Delivery & Breech Management",
    diagramSvg: `
      <svg viewBox="0 0 820 720" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl">
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

        <!-- Title -->
        <rect class="box" x="230" y="10" width="360" height="40" />
        <text class="label-bold" x="410" y="35">TWIN PREGNANCY — Delivery Planning</text>

        <line class="arrow" x1="410" y1="50" x2="410" y2="80" />

        <!-- Chorionicity -->
        <rect class="box-blue" x="260" y="80" width="300" height="40" />
        <text class="label-bold" x="410" y="100">Determine Chorionicity (1st Tri USG)</text>

        <line class="arrow" x1="310" y1="120" x2="150" y2="160" />
        <text class="label" x="210" y="143">DCDA</text>
        <line class="arrow" x1="410" y1="120" x2="410" y2="160" />
        <text class="label" x="445" y="143">MCDA</text>
        <line class="arrow" x1="510" y1="120" x2="680" y2="160" />
        <text class="label" x="610" y="143">MCMA</text>

        <!-- DCDA -->
        <rect class="box-green" x="40" y="160" width="220" height="50" />
        <text class="label-bold" x="150" y="178">DCDA Management</text>
        <text class="label" x="150" y="195">Growth USG 4-weekly from 20 wk</text>
        <text class="label" x="150" y="208">Deliver 37-38 wk</text>

        <!-- MCDA -->
        <rect class="box" x="290" y="160" width="240" height="50" />
        <text class="label-bold" x="410" y="178">MCDA Management</text>
        <text class="label" x="410" y="195">Fortnightly USG from 16 wk (TTTS)</text>
        <text class="label" x="410" y="208">Deliver 36-37 wk</text>

        <!-- MCMA -->
        <rect class="box-red" x="570" y="160" width="220" height="50" />
        <text class="label-bold" x="680" y="178">MCMA Management</text>
        <text class="label" x="680" y="195">Admit 26 wk, daily CTG</text>
        <text class="label" x="680" y="208">CS at 32-34 wk</text>

        <!-- Delivery mode -->
        <line class="arrow" x1="410" y1="230" x2="410" y2="260" />

        <rect class="box-blue" x="240" y="260" width="340" height="40" />
        <text class="label-bold" x="410" y="278">Presentation of Twin 1 at Delivery?</text>

        <line class="arrow-yes" x1="310" y1="300" x2="170" y2="340" />
        <text class="yes-label" x="220" y="325">Cephalic</text>

        <line class="arrow-no" x1="510" y1="300" x2="650" y2="340" />
        <text class="no-label" x="590" y="325">Non-cephalic</text>

        <!-- Twin 1 cephalic -->
        <rect class="box-green" x="50" y="340" width="240" height="45" />
        <text class="label-bold" x="170" y="358">Vaginal delivery of Twin 1</text>
        <text class="label" x="170" y="375">Then assess Twin 2 presentation</text>

        <!-- Twin 1 non-cephalic -->
        <rect class="box-red" x="560" y="340" width="200" height="40" />
        <text class="label-bold" x="660" y="365">Cesarean Section</text>

        <line class="arrow" x1="170" y1="385" x2="170" y2="420" />

        <!-- Twin 2 assessment -->
        <rect class="box" x="50" y="420" width="240" height="35" />
        <text class="label-bold" x="170" y="442">Twin 2 Presentation?</text>

        <line class="arrow-yes" x1="120" y1="455" x2="80" y2="495" />
        <text class="yes-label" x="80" y="478">Cephalic</text>

        <line class="arrow-no" x1="220" y1="455" x2="290" y2="495" />
        <text class="no-label" x="270" y="478">Breech/Transverse</text>

        <rect class="box-green" x="10" y="495" width="160" height="40" />
        <text class="label-bold" x="90" y="512">Vaginal delivery</text>
        <text class="label" x="90" y="528">of Twin 2</text>

        <rect class="box" x="200" y="495" width="220" height="45" />
        <text class="label-bold" x="310" y="510">IPV + Breech extraction</text>
        <text class="label" x="310" y="525">or ECV of Twin 2</text>
        <text class="label" x="310" y="537">CS if fails</text>

        <!-- Breech management -->
        <rect class="box-blue" x="480" y="420" width="310" height="120" />
        <text class="label-bold" x="635" y="440">SINGLETON BREECH Algorithm</text>
        <text class="label" x="635" y="458">Confirm at 36 wk by USG</text>
        <text class="label" x="635" y="475">Offer ECV at 36-37 wk</text>
        <text class="label" x="635" y="492">ECV successful: await spontaneous labour</text>
        <text class="label" x="635" y="509">ECV failed/declined: Elective CS at 39 wk</text>
        <text class="label" x="635" y="526">Vaginal breech: only if criteria met +</text>
        <text class="label" x="635" y="536">experienced operator</text>

        <!-- Ayurvedic box -->
        <rect class="box" x="40" y="580" width="740" height="75" />
        <text class="label-bold" x="410" y="600">Ayurvedic Approach (Mudha Garbha & Bahugarbha Chikitsa)</text>
        <text class="label" x="410" y="618">Conservative: Sneha-Sveda + positioning for Garbha Parivartana (version)</text>
        <text class="label" x="410" y="636">Bahugarbha: Enhanced Garbhini Paricharya — double nutrition, Vata Shamana, Garbha Sthapana drugs</text>
        <text class="label" x="410" y="650">Delivery: Vishesha Chikitsa — skilled management; Padagra Grahana for breech twin</text>
      </svg>
    `,
    notes: `
      <p><strong>Key clinical pearls for twin pregnancy and malpresentations:</strong></p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Chorionicity determination in the first trimester is the single most important investigation in twin pregnancy — it dictates the entire management plan</li>
        <li>Lambda sign = DCDA (safe), T-sign = MCDA (needs close surveillance), no membrane = MCMA (highest risk). Cannot reliably determine after first trimester</li>
        <li>TTTS complicates 10-15% of MCDA twins. Quintero staging: I (discordant AFV), II (absent bladder in donor), III (abnormal Doppler), IV (hydrops), V (IUFD). Laser ablation is definitive treatment for Stage II+</li>
        <li>Breech at term (3-4%): ECV at 36-37 weeks (success 50-60%). If unsuccessful, elective CS at 39 weeks per Term Breech Trial evidence</li>
        <li>Transverse lie in labour = absolute indication for CS. Never attempt vaginal delivery. ECV may be attempted before labour if conditions favorable</li>
        <li>Face presentation: mentoanterior delivers vaginally (chin under symphysis), mentoposterior requires CS (chin cannot negotiate sacral curve). Never apply vacuum to face</li>
        <li>Twin delivery in OT: combined (vaginal Twin 1, CS for Twin 2) delivery may be needed. Decision-to-delivery interval for Twin 2 should be <30 minutes</li>
      </ul>
    `,
  },

  integration: `
    <h3 class="font-heading text-xl font-semibold text-saffron-800 mb-3">Bridging Classical Bahugarbha Concepts & Modern Twin/Malpresentation Management</h3>
    <div class="space-y-4">
      <p>The classical Ayurvedic understanding of multiple pregnancy and malpresentations provides a surprisingly accurate embryological and clinical framework that complements modern evidence-based obstetric management.</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-ayurveda-text mb-2">Ayurvedic Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>Beeja Vibhajana concept accurately describes monozygotic twinning mechanism</li>
            <li>Enhanced Garbhini Paricharya for twin pregnancy — nutritional optimization</li>
            <li>Sneha-Sveda before operative intervention — conservative first approach</li>
            <li>Padagra Grahana — earliest description of breech extraction technique</li>
            <li>Vata Shamana approach for preventing preterm labour in overdistended uterus</li>
          </ul>
        </div>
        <div class="bg-white/60 p-4 rounded-lg">
          <h4 class="font-semibold text-modern-text mb-2">Modern Strengths</h4>
          <ul class="space-y-1 text-sm">
            <li>First-trimester chorionicity determination by USG — critical for management</li>
            <li>TTTS screening and laser ablation therapy for MCDA complications</li>
            <li>ECV under USG guidance and tocolysis for breech at term</li>
            <li>Term Breech Trial evidence guiding delivery mode decisions</li>
            <li>NICU preparedness for preterm twins and growth-restricted babies</li>
          </ul>
        </div>
      </div>

      <div class="bg-white/60 p-4 rounded-lg mt-4">
        <h4 class="font-semibold text-gray-800 mb-2">Integrated Management Protocol</h4>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li><strong>Step 1:</strong> Early (11-14 wk) USG for chorionicity determination + Prakriti assessment and enhanced dietary plan</li>
          <li><strong>Step 2:</strong> Chorionicity-based surveillance protocol + Vata Shamana measures (Bala Taila Abhyanga, Dashmoola) for preterm prevention</li>
          <li><strong>Step 3:</strong> Breech at 36 wk — attempt ECV (modern) with pre-procedural Sneha-Sveda (Ayurvedic relaxation)</li>
          <li><strong>Step 4:</strong> Delivery planning per evidence (CS for persistent breech, vaginal for cephalic twin 1) with Ayurvedic Sutika Paricharya post-delivery</li>
          <li><strong>Step 5:</strong> Enhanced postpartum care for twin mothers — Shatavari for lactation, Dashmoola for recovery, closely monitored involution</li>
        </ol>
      </div>
    </div>
  `,

  examBullets: [
    "Bahugarbha (Sushruta Sha. 3): Vata splits Beeja into two = monozygotic twins. Two separate Shukra-Shonita simultaneously = dizygotic twins. Both mechanisms of twinning accurately described.",
    "Hellin's law: twins 1:80, triplets 1:80^2 (6400), quadruplets 1:80^3 (512,000). Incidence of DZ twins varies by race, maternal age, parity, family history, ART use. MZ rate is constant (3-4 per 1000).",
    "Chorionicity determination: Lambda sign (twin peak) = DCDA at 11-14 wk USG. T-sign (thin membrane at 90 degrees) = MCDA. No membrane = MCMA. Must be determined in FIRST trimester — unreliable later.",
    "MCDA complications: TTTS (10-15%), TAPS (twin anemia-polycythemia sequence), selective IUGR, discordant anomaly, co-twin demise. All due to shared placental vascular anastomoses.",
    "TTTS Quintero staging: I (discordant AFV — polyhydramnios/oligohydramnios), II (absent bladder in donor), III (abnormal Doppler — absent/reversed AEDV in UA or DV), IV (hydrops in either twin), V (IUFD). Laser ablation for Stage II+.",
    "Twin delivery timing: DCDA 37-38 wk, MCDA 36-37 wk, MCMA 32-34 wk. MCMA must be CS (cord entanglement risk). Inpatient from 26 wk for MCMA with daily CTG.",
    "Breech presentation: 3-4% at term. Types: Frank/extended (65%), Complete/flexed (25%), Footling/incomplete (10%). Frank breech most favorable for vaginal delivery if attempted.",
    "ECV (External Cephalic Version): offered at 36-37 wk. Success: 50-60%. Contraindications: placenta previa, APH, uterine scar, severe oligohydramnios, multiple pregnancy, non-reassuring CTG. Use tocolysis (terbutaline) to improve success.",
    "Term Breech Trial (Hannah 2000): planned CS reduced perinatal mortality from 1.3% to 0.3% in term singleton breech. Established elective CS as standard of care for term breech. Subsequent follow-up showed no difference in maternal outcomes at 2 years.",
    "Transverse lie (Tiryak Gata): 0.3% at term. Causes: multiparity, polyhydramnios, placenta previa, uterine anomaly, prematurity. If persists in labour: mandatory CS. Never allow vaginal delivery — risk of obstructed labour and uterine rupture.",
    "Face presentation: 1 in 500. Mento-anterior (60-70%): vaginal delivery possible — chin delivers under symphysis. Mento-posterior (30-40%): CS mandatory — largest diameter (mentovertical 13.5 cm) cannot negotiate pelvis.",
    "Mudha Garbha classification (Sushruta): Pada Prasrita (breech), Tiryak Gata (transverse), Hasta Prasrita (hand prolapse), Mukha Prasrita (face), Parshva (shoulder). Each has specific Hasta and Yantra Karma management.",
    "Twin pregnancy complications: preterm delivery (50% deliver before 37 wk), IUGR (25-30%), pre-eclampsia (3x singleton risk), GDM (2x risk), anemia (increased demand), PPH (uterine overdistension), malpresentation (40%).",
    "Second twin management: if cephalic — await descent and deliver vaginally. If breech — IPV (internal podalic version) + breech extraction by experienced operator. If transverse — IPV to breech, then extraction. If none possible — CS for twin 2.",
    "Sushruta's Padagra Grahana = earliest described internal podalic version technique. Grasping the feet of fetus through the birth canal and converting to breech presentation for delivery — still used for second twin today.",
  ],

  mnemonics: [
    {
      title: "Chorionicity Determination (Twin USG Signs)",
      acronym: "LTN",
      expansions: [
        "Lambda sign = DCDA (twin peak sign — thick membrane with chorionic tissue)",
        "T-sign = MCDA (thin membrane meets placenta at 90 degrees, no twin peak)",
        "No membrane = MCMA (single amniotic cavity — highest risk, cord entanglement)",
      ],
    },
    {
      title: "TTTS Quintero Staging",
      acronym: "FABDH",
      expansions: [
        "Fluid discordance — polyhydramnios (recipient) / oligohydramnios (donor)",
        "Absent bladder in donor twin (Stage II)",
        "Bad Doppler — abnormal UA/DV in either twin (Stage III)",
        "Dropsy (Hydrops) in either twin (Stage IV)",
        "Heart stops — IUFD of one or both twins (Stage V)",
      ],
    },
    {
      title: "ECV Contraindications",
      acronym: "PROUMS",
      expansions: [
        "Placenta previa / low-lying placenta",
        "Rupture of membranes (PROM)",
        "Oligohydramnios (severe) / multiple pregnancy",
        "Uterine scar (previous CS / myomectomy)",
        "Maternal conditions (APH, pre-eclampsia, coagulation disorders)",
        "Suspicious CTG / non-reassuring fetal status",
      ],
    },
    {
      title: "Breech Types (Frequency)",
      acronym: "FCF",
      expansions: [
        "Frank / Extended breech — 65% (legs extended, feet near face)",
        "Complete / Flexed breech — 25% (legs folded, sitting cross-legged)",
        "Footling / Incomplete — 10% (one or both feet presenting first)",
      ],
    },
  ],
};

export function getM15Content() {
  return m15Content;
}
