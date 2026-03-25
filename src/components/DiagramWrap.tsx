"use client";

interface DiagramWrapProps {
  title: string;
  children: React.ReactNode;
}

export default function DiagramWrap({ title, children }: DiagramWrapProps) {
  return (
    <div className="my-6 rounded-xl border border-saffron-200 overflow-hidden shadow-sm">
      {/* Title bar */}
      <div className="bg-saffron-500 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-lg">📊</span>
        <h4 className="font-heading font-semibold text-base">{title}</h4>
      </div>
      {/* Diagram content */}
      <div className="bg-white p-6 flex items-center justify-center overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
