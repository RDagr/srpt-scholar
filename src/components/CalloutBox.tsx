"use client";

type CalloutVariant = "warn" | "tip" | "exam";

interface CalloutBoxProps {
  variant: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variantStyles: Record<
  CalloutVariant,
  { bg: string; border: string; icon: string; titleColor: string }
> = {
  warn: {
    bg: "bg-amber-50",
    border: "border-amber-400",
    icon: "⚠️",
    titleColor: "text-amber-800",
  },
  tip: {
    bg: "bg-emerald-50",
    border: "border-emerald-400",
    icon: "💡",
    titleColor: "text-emerald-800",
  },
  exam: {
    bg: "bg-blue-50",
    border: "border-blue-400",
    icon: "📝",
    titleColor: "text-blue-800",
  },
};

export default function CalloutBox({
  variant,
  title,
  children,
}: CalloutBoxProps) {
  const style = variantStyles[variant];
  const defaultTitles: Record<CalloutVariant, string> = {
    warn: "Important",
    tip: "Clinical Tip",
    exam: "Exam Alert",
  };

  return (
    <div
      className={`${style.bg} border-l-4 ${style.border} rounded-r-xl p-5 my-5`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{style.icon}</span>
        <h4
          className={`font-heading font-semibold ${style.titleColor} text-base`}
        >
          {title || defaultTitles[variant]}
        </h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
