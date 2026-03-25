"use client";

import { Module } from "@/data/modules";
import HeroBand from "@/components/HeroBand";
import UnitTabs from "@/components/UnitTabs";
import ShlokaCard from "@/components/ShlokaCard";
import DualCol from "@/components/DualCol";
import ExamBullets from "@/components/ExamBullets";
import MnemonicCard from "@/components/MnemonicCard";
import ComparisonTable from "@/components/ComparisonTable";
import CalloutBox from "@/components/CalloutBox";
import DiagramWrap from "@/components/DiagramWrap";

// Import topic-specific content
import { getTopicContent } from "./topicContent";

interface TopicPageProps {
  module: Module;
}

export default function TopicPage({ module }: TopicPageProps) {
  const content = getTopicContent(module.id);

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p>Content coming soon for this module.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* 1. Hero Band */}
      <HeroBand
        moduleNumber={module.number}
        nameAyurveda={module.nameAyurveda}
        nameDevanagari={module.nameDevanagari}
        nameEnglish={module.nameEnglish}
        paper={module.paper}
        semester={module.semester}
        units={module.units}
        references={content.references}
      />

      {/* 2. Unit Tabs */}
      <UnitTabs units={content.units} />

      {/* 3. Quick Orientation */}
      <section className="my-8">
        <h2 className="section-heading">Quick Orientation</h2>
        <div className="bg-white rounded-xl border border-saffron-100 shadow-sm p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {content.orientation.why}
          </p>
          <CalloutBox variant="exam" title="Exam Relevance">
            <p>{content.orientation.examWeight}</p>
          </CalloutBox>
        </div>
      </section>

      {/* 4. Definition and Classification */}
      <section className="my-8">
        <h2 className="section-heading">Definition &amp; Classification</h2>
        <DualCol
          title=""
          ayurvedaTitle="Ayurvedic Definition"
          modernTitle="Modern Definition"
          ayurvedaContent={content.definition.ayurveda}
          modernContent={content.definition.modern}
        />
        {content.definition.classification && (
          <ComparisonTable
            title="Classification"
            headers={content.definition.classification.headers}
            rows={content.definition.classification.rows}
          />
        )}
      </section>

      {/* 5. Shloka Section */}
      <section className="my-8">
        <h2 className="section-heading">Classical Shlokas</h2>
        {content.shlokas.map((shloka, i) => (
          <ShlokaCard
            key={i}
            source={shloka.source}
            devanagari={shloka.devanagari}
            transliteration={shloka.transliteration}
            meaning={shloka.meaning}
            clinicalNote={shloka.clinicalNote}
          />
        ))}
      </section>

      {/* 6. Dual Column Boxes */}
      <section className="my-8">
        <h2 className="section-heading">Etiology &amp; Pathophysiology</h2>
        {content.dualCols.map((dc, i) => (
          <DualCol
            key={i}
            title={dc.title}
            ayurvedaTitle={dc.ayurvedaTitle}
            modernTitle={dc.modernTitle}
            ayurvedaContent={dc.ayurvedaContent}
            modernContent={dc.modernContent}
          />
        ))}
      </section>

      {/* 7. Clinical Features Table */}
      <section className="my-8">
        <h2 className="section-heading">Clinical Features</h2>
        {content.clinicalFeatures.map((table, i) => (
          <ComparisonTable
            key={i}
            title={table.title}
            headers={table.headers}
            rows={table.rows}
          />
        ))}
      </section>

      {/* 8. Investigations Table */}
      <section className="my-8">
        <h2 className="section-heading">Investigations</h2>
        {content.investigations.map((table, i) => (
          <ComparisonTable
            key={i}
            title={table.title}
            headers={table.headers}
            rows={table.rows}
          />
        ))}
      </section>

      {/* 9. Management — Clinical Decision Tree */}
      <section className="my-8">
        <h2 className="section-heading">Management</h2>
        <DiagramWrap title={content.management.diagramTitle}>
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: content.management.diagramSvg }}
          />
        </DiagramWrap>
        {content.management.notes && (
          <CalloutBox variant="tip" title="Clinical Pearls">
            <div dangerouslySetInnerHTML={{ __html: content.management.notes }} />
          </CalloutBox>
        )}
      </section>

      {/* 10. Ayurveda-Modern Integration Box */}
      <section className="my-8">
        <h2 className="section-heading">Ayurveda–Modern Integration</h2>
        <div className="bg-gradient-to-r from-ayurveda-bg to-modern-bg rounded-xl border border-saffron-200 p-6 shadow-sm">
          <div
            className="prose prose-sm max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: content.integration }}
          />
        </div>
      </section>

      {/* 11. Exam Bullets */}
      <section className="my-8">
        <h2 className="section-heading">Exam Preparation</h2>
        <ExamBullets bullets={content.examBullets} />
      </section>

      {/* 12. Mnemonics */}
      <section className="my-8">
        <h2 className="section-heading">Mnemonics</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {content.mnemonics.map((m, i) => (
            <MnemonicCard
              key={i}
              title={m.title}
              acronym={m.acronym}
              expansions={m.expansions}
            />
          ))}
        </div>
      </section>

      {/* Back to home */}
      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-800 font-medium transition-colors"
        >
          ← Back to All Modules
        </a>
      </div>
    </div>
  );
}
