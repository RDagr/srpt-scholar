import { modules, getModuleBySlug } from "@/data/modules";
import { notFound } from "next/navigation";
import TopicPage from "./TopicPage";

// Generate static params for all modules
export async function generateStaticParams() {
  return modules
    .filter((m) => m.hasContent)
    .map((m) => ({
      slug: m.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return { title: "Not Found" };
  return {
    title: `${mod.nameAyurveda} — ${mod.nameEnglish} | SRPT Scholar`,
    description: `Study ${mod.nameAyurveda} (${mod.nameDevanagari}) — ${mod.nameEnglish}. Paper ${mod.paper}, Semester ${mod.semester}. Ayurvedic and modern perspectives for PG scholars.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod || !mod.hasContent) {
    notFound();
  }

  return <TopicPage module={mod} />;
}
