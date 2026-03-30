"use client";

interface ModuleCardImageProps {
  moduleId: string;
  category: string;
}

export default function ModuleCardImage({ moduleId, category }: ModuleCardImageProps) {
  const num = parseInt(moduleId.replace("m", ""));

  // Category-based color schemes
  const schemes: Record<string, { bg1: string; bg2: string; accent: string }> = {
    prasuti: { bg1: "#C8712A", bg2: "#E8A040", accent: "#FFD54F" },
    streeroga: { bg1: "#7B1FA2", bg2: "#AB47BC", accent: "#CE93D8" },
    basic: { bg1: "#2E7D32", bg2: "#43A047", accent: "#81C784" },
    research: { bg1: "#1565C0", bg2: "#1E88E5", accent: "#64B5F6" },
  };

  const scheme = schemes[category] || schemes.prasuti;

  // Medical/Ayurvedic symbols
  const symbols = [
    "🪷", "🧬", "🌿", "👶", "🍼", "⚠️", "🔄", "💉",
    "📍", "🫀", "🩸", "👣", "🔪", "🏥", "👥", "🤱",
    "🩺", "💧", "🔮", "🦠", "🧫", "🏋️", "🔬", "⬇️",
    "🌙", "✂️", "💊", "📐", "🔄", "🧘", "📊", "⚖️",
  ];
  const symbol = symbols[(num - 1) % symbols.length];

  return (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-t-xl">
      <defs>
        <linearGradient id={`mc-${moduleId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={scheme.bg1}/>
          <stop offset="100%" stopColor={scheme.bg2}/>
        </linearGradient>
        <radialGradient id={`mc-g-${moduleId}`} cx="80%" cy="50%" r="50%">
          <stop offset="0%" stopColor={scheme.accent} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={scheme.accent} stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="280" height="100" fill={`url(#mc-${moduleId})`}/>
      <circle cx="230" cy="50" r="60" fill={`url(#mc-g-${moduleId})`}/>
      {/* Decorative elements */}
      <circle cx="20" cy="20" r="15" fill={scheme.accent} opacity="0.1"/>
      <circle cx="260" cy="80" r="20" fill={scheme.accent} opacity="0.08"/>
      {/* Floating dots */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={30 + i * 55} cy={85 - Math.sin(i * 1.2) * 10} r="2" fill={scheme.accent} opacity={0.2 + i * 0.05}/>
      ))}
      {/* Module number */}
      <rect x="15" y="15" width="50" height="26" rx="13" fill="white" opacity="0.2"/>
      <text x="40" y="33" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold" fontFamily="sans-serif">M{num}</text>
      {/* Symbol */}
      <text x="230" y="60" textAnchor="middle" fontSize="36">{symbol}</text>
      {/* Subtle line pattern */}
      <line x1="80" y1="90" x2="180" y2="90" stroke={scheme.accent} strokeWidth="0.5" opacity="0.2"/>
    </svg>
  );
}
