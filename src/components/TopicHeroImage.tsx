"use client";

interface TopicHeroImageProps {
  moduleId: string;
  title: string;
}

// 3D-styled SVG illustrations for each topic — vibrant medical + Ayurvedic themed
const illustrations: Record<string, () => JSX.Element> = {
  m1: () => (
    // Garbhini Vigyana — Pregnancy diagnosis: embryo + uterus
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="m1-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#C8712A" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="m1-uterus" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F48FB1"/>
          <stop offset="100%" stopColor="#E91E63"/>
        </linearGradient>
        <filter id="m1-shadow">
          <feDropShadow dx="3" dy="3" stdDeviation="5" floodColor="#00000033"/>
        </filter>
        <filter id="m1-glow-f">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <rect width="400" height="300" fill="#1a0a2e" rx="20"/>
      {/* Stars */}
      <circle cx="30" cy="30" r="1.5" fill="#FFD54F" opacity="0.6"/>
      <circle cx="370" cy="50" r="1" fill="#FFD54F" opacity="0.5"/>
      <circle cx="80" cy="250" r="1.5" fill="#FFD54F" opacity="0.4"/>
      <circle cx="350" cy="230" r="1" fill="#FFD54F" opacity="0.7"/>
      <circle cx="150" cy="20" r="1" fill="#FFD54F" opacity="0.5"/>
      {/* Glow circle */}
      <circle cx="200" cy="150" r="120" fill="url(#m1-glow)"/>
      {/* 3D Uterus shape */}
      <path d="M160,100 Q140,80 130,100 Q120,130 140,170 Q160,200 200,210 Q240,200 260,170 Q280,130 270,100 Q260,80 240,100 Q220,120 200,110 Q180,120 160,100Z" fill="url(#m1-uterus)" filter="url(#m1-shadow)" opacity="0.85"/>
      {/* Embryo */}
      <ellipse cx="200" cy="145" rx="25" ry="30" fill="#FFCDD2" filter="url(#m1-shadow)"/>
      <ellipse cx="195" cy="135" rx="15" ry="18" fill="#FFE0B2"/>
      <circle cx="192" cy="132" r="3" fill="#5D4037" opacity="0.5"/>
      {/* Umbilical cord */}
      <path d="M210,165 Q230,180 225,200" stroke="#F48FB1" strokeWidth="3" fill="none"/>
      {/* Om symbol */}
      <text x="200" y="260" textAnchor="middle" fontSize="24" fill="#FFD54F" opacity="0.5" fontFamily="serif">ॐ</text>
      {/* Heartbeat line */}
      <path d="M80,270 L120,270 L135,250 L145,285 L155,260 L165,270 L320,270" stroke="#EF5350" strokeWidth="2" fill="none" opacity="0.7"/>
    </svg>
  ),
  m2: () => (
    // Garbha Sharira — Embryology: DNA + developing stages
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m2-dna" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C4DFF"/>
          <stop offset="100%" stopColor="#448AFF"/>
        </linearGradient>
        <filter id="m2-shadow"><feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#00000044"/></filter>
      </defs>
      <rect width="400" height="300" fill="#0d1b2a" rx="20"/>
      {/* DNA Helix */}
      <path d="M100,20 Q150,60 100,100 Q50,140 100,180 Q150,220 100,260" stroke="#7C4DFF" strokeWidth="4" fill="none" opacity="0.8"/>
      <path d="M140,20 Q90,60 140,100 Q190,140 140,180 Q90,220 140,260" stroke="#448AFF" strokeWidth="4" fill="none" opacity="0.8"/>
      {/* Rungs */}
      {[40,80,120,160,200,240].map((y,i) => <line key={i} x1={i%2===0?100:110} y1={y} x2={i%2===0?140:130} y2={y} stroke="#FFD54F" strokeWidth="2" opacity="0.6"/>)}
      {/* Development stages */}
      <circle cx="250" cy="60" r="20" fill="#FFCDD2" filter="url(#m2-shadow)"/>
      <text x="250" y="64" textAnchor="middle" fontSize="10" fill="#5D4037">Zygote</text>
      <circle cx="320" cy="110" r="25" fill="#F8BBD0" filter="url(#m2-shadow)"/>
      <circle cx="312" cy="103" r="8" fill="#FFCDD2"/><circle cx="328" cy="103" r="8" fill="#FFCDD2"/>
      <circle cx="312" cy="117" r="8" fill="#FFCDD2"/><circle cx="328" cy="117" r="8" fill="#FFCDD2"/>
      <text x="320" y="145" textAnchor="middle" fontSize="10" fill="#E0E0E0">Morula</text>
      <ellipse cx="270" cy="200" rx="35" ry="28" fill="#CE93D8" filter="url(#m2-shadow)" opacity="0.8"/>
      <ellipse cx="270" cy="200" rx="20" ry="15" fill="#E1BEE7" opacity="0.7"/>
      <text x="270" y="240" textAnchor="middle" fontSize="10" fill="#E0E0E0">Blastocyst</text>
      {/* Embryo */}
      <path d="M340,230 Q350,210 345,250 Q340,270 330,260" fill="#FFAB91" filter="url(#m2-shadow)"/>
      <text x="340" y="285" textAnchor="middle" fontSize="10" fill="#E0E0E0">Embryo</text>
      {/* Om */}
      <text x="50" y="280" fontSize="20" fill="#FFD54F" opacity="0.3" fontFamily="serif">ॐ</text>
    </svg>
  ),
  m3: () => (
    // Garbhini Paricharya — Antenatal Care: mother with care symbols
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B5E20"/>
          <stop offset="100%" stopColor="#004D40"/>
        </linearGradient>
        <filter id="m3-s"><feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000044"/></filter>
      </defs>
      <rect width="400" height="300" fill="url(#m3-bg)" rx="20"/>
      {/* Pregnant mother silhouette */}
      <circle cx="200" cy="90" r="25" fill="#FFCCBC" filter="url(#m3-s)"/>
      <path d="M175,115 Q180,130 175,170 Q170,200 185,220 L175,270" stroke="#FFCCBC" strokeWidth="3" fill="none"/>
      <path d="M225,115 Q220,130 225,170 Q230,200 215,220 L225,270" stroke="#FFCCBC" strokeWidth="3" fill="none"/>
      <ellipse cx="200" cy="180" rx="30" ry="35" fill="#FFAB91" filter="url(#m3-s)" opacity="0.8"/>
      {/* Care icons around */}
      {/* Leaf */}
      <path d="M80,80 Q100,60 110,80 Q100,100 80,80Z" fill="#66BB6A" filter="url(#m3-s)"/>
      <text x="95" y="115" textAnchor="middle" fontSize="9" fill="#E8F5E9">Pathya</text>
      {/* Moon */}
      <path d="M310,60 Q340,60 340,90 Q340,120 310,120 Q325,90 310,60Z" fill="#FFD54F" filter="url(#m3-s)"/>
      <text x="325" y="140" textAnchor="middle" fontSize="9" fill="#E8F5E9">Vihara</text>
      {/* Heart */}
      <path d="M70,180 Q70,165 85,165 Q100,165 100,180 Q100,200 85,210 Q70,200 70,180Z" fill="#EF5350" filter="url(#m3-s)"/>
      <text x="85" y="230" textAnchor="middle" fontSize="9" fill="#E8F5E9">Achara</text>
      {/* Mortar */}
      <rect x="300" y="200" width="40" height="25" rx="5" fill="#8D6E63" filter="url(#m3-s)"/>
      <line x1="320" y1="195" x2="330" y2="180" stroke="#A1887F" strokeWidth="3" strokeLinecap="round"/>
      <text x="320" y="245" textAnchor="middle" fontSize="9" fill="#E8F5E9">Aushadhi</text>
      {/* Month markers */}
      <text x="200" y="280" textAnchor="middle" fontSize="11" fill="#FFD54F" opacity="0.7">Month 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9</text>
    </svg>
  ),
  m4: () => (
    // Prasava Vigyana — Labour: pelvis + baby descent
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#311B92"/>
          <stop offset="100%" stopColor="#4A148C"/>
        </linearGradient>
        <filter id="m4-s"><feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#00000055"/></filter>
      </defs>
      <rect width="400" height="300" fill="url(#m4-bg)" rx="20"/>
      {/* Pelvis outline */}
      <ellipse cx="200" cy="140" rx="90" ry="70" fill="none" stroke="#CE93D8" strokeWidth="3" filter="url(#m4-s)"/>
      <ellipse cx="200" cy="140" rx="60" ry="50" fill="#4A148C" stroke="#AB47BC" strokeWidth="2"/>
      {/* Baby head */}
      <circle cx="200" cy="130" r="30" fill="#FFCCBC" filter="url(#m4-s)"/>
      <circle cx="192" cy="125" r="3" fill="#5D4037" opacity="0.4"/>
      <circle cx="208" cy="125" r="3" fill="#5D4037" opacity="0.4"/>
      <path d="M195,135 Q200,140 205,135" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.4"/>
      {/* Descent arrow */}
      <path d="M200,175 L200,230 L185,215 M200,230 L215,215" stroke="#FFD54F" strokeWidth="3" fill="none"/>
      {/* Stage labels */}
      <text x="60" y="60" fontSize="11" fill="#CE93D8">Stage 1: Dilation</text>
      <text x="60" y="80" fontSize="11" fill="#AB47BC">Stage 2: Expulsion</text>
      <text x="60" y="100" fontSize="11" fill="#9C27B0">Stage 3: Placenta</text>
      {/* Contractions wave */}
      <path d="M30,260 Q60,240 90,260 Q120,280 150,260 Q180,240 210,260 Q240,280 270,260 Q300,240 330,260 Q360,280 390,260" stroke="#EF5350" strokeWidth="2" fill="none" opacity="0.6"/>
      <text x="200" y="290" textAnchor="middle" fontSize="10" fill="#FFD54F" opacity="0.5">Prasava Kala — Time of Delivery</text>
    </svg>
  ),
  m5: () => (
    // Sutika Paricharya — Postnatal: mother + baby + herbs
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m5-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BF360C"/>
          <stop offset="100%" stopColor="#E65100"/>
        </linearGradient>
        <filter id="m5-s"><feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000044"/></filter>
      </defs>
      <rect width="400" height="300" fill="url(#m5-bg)" rx="20"/>
      {/* Mother resting */}
      <ellipse cx="150" cy="170" rx="60" ry="40" fill="#FFCCBC" filter="url(#m5-s)" opacity="0.7"/>
      <circle cx="120" cy="140" r="20" fill="#FFCCBC" filter="url(#m5-s)"/>
      {/* Baby */}
      <ellipse cx="170" cy="160" rx="15" ry="12" fill="#FFE0B2" filter="url(#m5-s)"/>
      <circle cx="175" cy="152" r="8" fill="#FFE0B2"/>
      {/* Herbal items */}
      <circle cx="300" cy="80" r="25" fill="#66BB6A" filter="url(#m5-s)" opacity="0.8"/>
      <text x="300" y="84" textAnchor="middle" fontSize="9" fill="#fff">Shatavari</text>
      <circle cx="340" cy="140" r="22" fill="#43A047" filter="url(#m5-s)" opacity="0.8"/>
      <text x="340" y="144" textAnchor="middle" fontSize="9" fill="#fff">Dashmoola</text>
      <circle cx="300" cy="200" r="20" fill="#2E7D32" filter="url(#m5-s)" opacity="0.8"/>
      <text x="300" y="204" textAnchor="middle" fontSize="8" fill="#fff">Pippali</text>
      {/* Warm glow */}
      <circle cx="150" cy="160" r="80" fill="#FFD54F" opacity="0.1"/>
      <text x="200" y="270" textAnchor="middle" fontSize="12" fill="#FFD54F" opacity="0.6">सूतिका परिचर्या — ६ सप्ताह</text>
    </svg>
  ),
};

// Generate a default 3D image for modules without custom illustrations
function DefaultIllustration({ moduleId, title }: { moduleId: string; title: string }) {
  const num = parseInt(moduleId.replace("m", ""));
  // Generate unique colors based on module number
  const hue1 = (num * 37) % 360;
  const hue2 = (hue1 + 40) % 360;
  const color1 = `hsl(${hue1}, 70%, 25%)`;
  const color2 = `hsl(${hue2}, 70%, 35%)`;
  const accent = `hsl(${(hue1 + 180) % 360}, 80%, 65%)`;

  // Different medical/ayurvedic symbols based on category
  const symbols = [
    "🪷", "⚕️", "🔬", "📿", "🧬", "💊", "🩺", "🌿",
    "📋", "🏥", "🧪", "🫀", "🩻", "🔮", "📖", "🕉️",
  ];
  const symbol = symbols[num % symbols.length];

  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${moduleId}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1}/>
          <stop offset="100%" stopColor={color2}/>
        </linearGradient>
        <radialGradient id={`${moduleId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0"/>
        </radialGradient>
        <filter id={`${moduleId}-s`}>
          <feDropShadow dx="2" dy="3" stdDeviation="6" floodColor="#00000055"/>
        </filter>
      </defs>
      <rect width="400" height="300" fill={`url(#${moduleId}-bg)`} rx="20"/>
      {/* Background glow */}
      <circle cx="200" cy="130" r="100" fill={`url(#${moduleId}-glow)`}/>
      {/* Decorative circles */}
      <circle cx="60" cy="60" r="30" fill={accent} opacity="0.1"/>
      <circle cx="340" cy="240" r="40" fill={accent} opacity="0.1"/>
      <circle cx="350" cy="50" r="20" fill={accent} opacity="0.08"/>
      {/* 3D floating card effect */}
      <rect x="100" y="50" width="200" height="160" rx="15" fill="white" opacity="0.08" filter={`url(#${moduleId}-s)`}/>
      <rect x="110" y="55" width="180" height="150" rx="12" fill="white" opacity="0.05"/>
      {/* Module number badge */}
      <rect x="150" y="70" width="100" height="40" rx="20" fill={accent} filter={`url(#${moduleId}-s)`} opacity="0.9"/>
      <text x="200" y="96" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold" fontFamily="sans-serif">M{num}</text>
      {/* Central symbol */}
      <text x="200" y="160" textAnchor="middle" fontSize="48" filter={`url(#${moduleId}-s)`}>{symbol}</text>
      {/* Orbit rings */}
      <ellipse cx="200" cy="140" rx="80" ry="25" fill="none" stroke={accent} strokeWidth="1" opacity="0.2" transform="rotate(-15 200 140)"/>
      <ellipse cx="200" cy="140" rx="95" ry="30" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.15" transform="rotate(10 200 140)"/>
      {/* DNA-like dots */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <circle key={i} cx={50 + i * 45} cy={240 + Math.sin(i * 0.8) * 15} r="3" fill={accent} opacity={0.3 + (i % 3) * 0.1}/>
      ))}
      {/* Title */}
      <text x="200" y="270" textAnchor="middle" fontSize="11" fill="white" opacity="0.6" fontFamily="sans-serif">{title.length > 40 ? title.substring(0, 38) + "…" : title}</text>
    </svg>
  );
}

export default function TopicHeroImage({ moduleId, title }: TopicHeroImageProps) {
  const CustomIllustration = illustrations[moduleId];

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg my-6" style={{ maxHeight: "300px" }}>
      {CustomIllustration ? (
        <CustomIllustration />
      ) : (
        <DefaultIllustration moduleId={moduleId} title={title} />
      )}
    </div>
  );
}
