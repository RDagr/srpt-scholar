"use client";

import { useState } from "react";

interface UnitTabsProps {
  units: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function UnitTabs({ units }: UnitTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-6">
      {/* Tab headers */}
      <div className="flex overflow-x-auto border-b border-saffron-200 gap-1">
        {units.map((unit, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all rounded-t-lg ${
              activeTab === index
                ? "bg-saffron-500 text-white shadow-sm"
                : "text-saffron-700 hover:bg-saffron-50 hover:text-saffron-800"
            }`}
          >
            Unit {index + 1}: {unit.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-b-xl border border-t-0 border-saffron-200 p-6 shadow-sm">
        {units[activeTab]?.content}
      </div>
    </div>
  );
}
