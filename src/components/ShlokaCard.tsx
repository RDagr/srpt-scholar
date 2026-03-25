"use client";

interface ShlokaCardProps {
  source: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  clinicalNote?: string;
}

export default function ShlokaCard({
  source,
  devanagari,
  transliteration,
  meaning,
  clinicalNote,
}: ShlokaCardProps) {
  return (
    <div className="bg-parchment border-l-4 border-ayurveda-border rounded-r-xl p-6 my-6 shadow-sm">
      {/* Source badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="badge badge-saffron text-xs font-semibold">
          📜 {source}
        </span>
      </div>

      {/* Devanagari text */}
      <div className="mb-4">
        <p className="font-sanskrit text-xl md:text-2xl leading-relaxed text-saffron-900">
          {devanagari}
        </p>
      </div>

      {/* IAST Transliteration */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wider text-saffron-600 mb-1 font-semibold">
          Transliteration (IAST)
        </p>
        <p className="italic text-saffron-800 text-sm leading-relaxed">
          {transliteration}
        </p>
      </div>

      {/* Word meaning */}
      <div className="mb-4 bg-white/60 rounded-lg p-4">
        <p className="text-xs uppercase tracking-wider text-saffron-600 mb-1 font-semibold">
          Meaning
        </p>
        <p className="text-gray-800 text-sm leading-relaxed">{meaning}</p>
      </div>

      {/* Clinical relevance */}
      {clinicalNote && (
        <div className="bg-modern-bg/50 rounded-lg p-4 border border-modern-border/30">
          <p className="text-xs uppercase tracking-wider text-modern-text mb-1 font-semibold">
            🏥 Clinical Relevance
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {clinicalNote}
          </p>
        </div>
      )}
    </div>
  );
}
