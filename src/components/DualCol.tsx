"use client";

interface DualColProps {
  title: string;
  ayurvedaTitle?: string;
  modernTitle?: string;
  ayurvedaContent: string;
  modernContent: string;
}

export default function DualCol({
  title,
  ayurvedaTitle = "Ayurveda View",
  modernTitle = "Modern View",
  ayurvedaContent,
  modernContent,
}: DualColProps) {
  return (
    <div className="my-6">
      {title && (
        <h3 className="subsection-heading">{title}</h3>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Ayurveda Side */}
        <div className="bg-ayurveda-bg border border-ayurveda-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🪷</span>
            <h4 className="font-heading font-semibold text-ayurveda-text text-lg">
              {ayurvedaTitle}
            </h4>
          </div>
          <div
            className="text-sm text-gray-800 leading-relaxed prose-sm"
            dangerouslySetInnerHTML={{ __html: ayurvedaContent }}
          />
        </div>

        {/* Modern Side */}
        <div className="bg-modern-bg border border-modern-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🔬</span>
            <h4 className="font-heading font-semibold text-modern-text text-lg">
              {modernTitle}
            </h4>
          </div>
          <div
            className="text-sm text-gray-800 leading-relaxed prose-sm"
            dangerouslySetInnerHTML={{ __html: modernContent }}
          />
        </div>
      </div>
    </div>
  );
}
