"use client";

import { modules } from "@/data/modules";
import SearchFilter from "@/components/SearchFilter";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-saffron-800 mb-4">
          SRPT Scholar
        </h1>
        <p className="font-sanskrit text-2xl md:text-3xl text-saffron-600 mb-4">
          स्त्रीरोग एवं प्रसूतितन्त्र अध्ययन पोर्टल
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Comprehensive study resource for PG Ayurveda scholars — bridging
          classical Ayurvedic wisdom with modern Obstetrics &amp; Gynaecology.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white rounded-xl border border-saffron-100 shadow-sm px-6 py-4 text-center">
            <p className="text-3xl font-heading font-bold text-saffron-600">
              32
            </p>
            <p className="text-xs text-gray-500 mt-1">Modules</p>
          </div>
          <div className="bg-white rounded-xl border border-saffron-100 shadow-sm px-6 py-4 text-center">
            <p className="text-3xl font-heading font-bold text-saffron-600">
              4
            </p>
            <p className="text-xs text-gray-500 mt-1">Semesters</p>
          </div>
          <div className="bg-white rounded-xl border border-saffron-100 shadow-sm px-6 py-4 text-center">
            <p className="text-3xl font-heading font-bold text-saffron-600">
              4
            </p>
            <p className="text-xs text-gray-500 mt-1">Papers</p>
          </div>
          <div className="bg-white rounded-xl border border-saffron-100 shadow-sm px-6 py-4 text-center">
            <p className="text-3xl font-heading font-bold text-saffron-600">
              104
            </p>
            <p className="text-xs text-gray-500 mt-1">Total Units</p>
          </div>
        </div>
      </div>

      {/* Search + Filter + Cards */}
      <SearchFilter modules={modules} />
    </div>
  );
}
