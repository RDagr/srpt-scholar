"use client";

import { Module, categoryLabels, categoryColors } from "@/data/modules";
import Link from "next/link";

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      href={module.hasContent ? `/topics/${module.slug}` : "#"}
      className={`block card-hover ${
        module.hasContent ? "cursor-pointer" : "cursor-default opacity-70"
      }`}
    >
      <div className="bg-white rounded-xl border border-saffron-100 shadow-sm p-5 h-full flex flex-col">
        {/* Top row: module number + category */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-saffron-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">
            {module.number}
          </span>
          <span className={`badge ${categoryColors[module.category]}`}>
            {categoryLabels[module.category]}
          </span>
        </div>

        {/* Devanagari name */}
        <p className="font-sanskrit text-lg text-saffron-800 mb-1">
          {module.nameDevanagari}
        </p>

        {/* Ayurveda name */}
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
          {module.nameAyurveda}
        </h3>

        {/* English subtitle */}
        <p className="text-sm text-gray-500 mb-4 flex-grow">
          {module.nameEnglish}
        </p>

        {/* Bottom badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            Paper {module.paper}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            Sem {module.semester}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {module.units} units
          </span>
          {module.hasContent && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              Content Ready
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
