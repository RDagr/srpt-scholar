"use client";

interface HeroBandProps {
  moduleNumber: string;
  nameAyurveda: string;
  nameDevanagari: string;
  nameEnglish: string;
  paper: number;
  semester: number;
  units: number;
  references?: string[];
}

export default function HeroBand({
  moduleNumber,
  nameAyurveda,
  nameDevanagari,
  nameEnglish,
  paper,
  semester,
  units,
  references = [],
}: HeroBandProps) {
  return (
    <div className="bg-gradient-to-r from-saffron-700 via-saffron-600 to-saffron-500 text-white py-10 px-6 md:px-10 rounded-2xl my-6 shadow-lg">
      <div className="max-w-4xl">
        {/* Module badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
            {moduleNumber}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            Paper {paper}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            Semester {semester}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {units} Units
          </span>
        </div>

        {/* Title area */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {nameAyurveda}
        </h1>
        <p className="font-sanskrit text-2xl md:text-3xl text-saffron-100 mb-2">
          {nameDevanagari}
        </p>
        <p className="text-saffron-100 text-lg md:text-xl font-light">
          {nameEnglish}
        </p>

        {/* References */}
        {references.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {references.map((ref, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-sm text-saffron-100 px-3 py-1 rounded-full text-xs"
              >
                📚 {ref}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
