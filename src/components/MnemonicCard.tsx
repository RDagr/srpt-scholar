"use client";

interface MnemonicCardProps {
  title: string;
  acronym: string;
  expansions: string[];
}

export default function MnemonicCard({
  title,
  acronym,
  expansions,
}: MnemonicCardProps) {
  return (
    <div className="bg-mnemonic-bg border border-mnemonic-border rounded-xl p-5 my-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🧠</span>
        <h4 className="font-heading font-semibold text-mnemonic-text text-lg">
          {title}
        </h4>
      </div>

      <div className="bg-white/60 rounded-lg p-4 mb-3">
        <p className="text-2xl font-bold text-mnemonic-text tracking-wider text-center font-heading">
          {acronym}
        </p>
      </div>

      <ul className="space-y-1.5">
        {expansions.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="font-bold text-mnemonic-text text-base leading-5">
              {acronym[index]}
            </span>
            <span className="text-gray-700">— {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
