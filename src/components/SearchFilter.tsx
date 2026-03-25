"use client";

import { useState } from "react";
import { Module } from "@/data/modules";
import ModuleCard from "./ModuleCard";

interface SearchFilterProps {
  modules: Module[];
}

export default function SearchFilter({ modules }: SearchFilterProps) {
  const [search, setSearch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = modules.filter((m) => {
    const matchesSearch =
      search === "" ||
      m.nameAyurveda.toLowerCase().includes(search.toLowerCase()) ||
      m.nameEnglish.toLowerCase().includes(search.toLowerCase()) ||
      m.nameDevanagari.includes(search) ||
      m.number.toLowerCase().includes(search.toLowerCase());

    const matchesSemester =
      selectedSemester === null || m.semester === selectedSemester;
    const matchesPaper = selectedPaper === null || m.paper === selectedPaper;
    const matchesCategory =
      selectedCategory === null || m.category === selectedCategory;

    return matchesSearch && matchesSemester && matchesPaper && matchesCategory;
  });

  return (
    <div>
      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search modules by name, number, or topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-saffron-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {/* Semester filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-semibold text-gray-500 self-center mr-1">
            Semester:
          </span>
          {[3, 4, 5, 6].map((sem) => (
            <button
              key={sem}
              onClick={() =>
                setSelectedSemester(selectedSemester === sem ? null : sem)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedSemester === sem
                  ? "bg-saffron-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-saffron-300"
              }`}
            >
              Sem {sem}
            </button>
          ))}
        </div>

        {/* Paper filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-semibold text-gray-500 self-center mr-1">
            Paper:
          </span>
          {[1, 2, 3, 4].map((paper) => (
            <button
              key={paper}
              onClick={() =>
                setSelectedPaper(selectedPaper === paper ? null : paper)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPaper === paper
                  ? "bg-saffron-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-saffron-300"
              }`}
            >
              Paper {paper}
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-semibold text-gray-500 self-center mr-1">
            Category:
          </span>
          {(
            [
              ["prasuti", "Prasuti Tantra"],
              ["streeroga", "Stree Roga"],
              ["basic", "Basic Sciences"],
              ["research", "Research"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() =>
                setSelectedCategory(selectedCategory === key ? null : key)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === key
                  ? "bg-saffron-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-saffron-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Clear all */}
        {(selectedSemester || selectedPaper || selectedCategory || search) && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedSemester(null);
              setSelectedPaper(null);
              setSelectedCategory(null);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-all"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} of {modules.length} modules
      </p>

      {/* Module grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No modules found.</p>
          <p className="text-gray-400 text-sm mt-1">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
