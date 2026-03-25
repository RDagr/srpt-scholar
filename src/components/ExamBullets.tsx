"use client";

interface ExamBulletsProps {
  title?: string;
  bullets: string[];
}

export default function ExamBullets({
  title = "15 High-Yield Exam Points",
  bullets,
}: ExamBulletsProps) {
  return (
    <div className="my-6 bg-exam-bg border border-exam-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <h3 className="font-heading font-bold text-exam-text text-xl">
          {title}
        </h3>
      </div>
      <ol className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex gap-3 items-start">
            <span className="flex-shrink-0 w-7 h-7 bg-exam-border text-white rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            <span className="text-sm text-gray-800 leading-relaxed pt-1">
              {bullet}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
