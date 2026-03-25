import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="font-heading text-5xl font-bold text-saffron-800 mb-4">
        404
      </h1>
      <p className="font-sanskrit text-2xl text-saffron-600 mb-2">
        विषय उपलब्ध नहीं
      </p>
      <p className="text-gray-600 mb-8">
        This topic page hasn&apos;t been created yet, or the URL is incorrect.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-saffron-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-saffron-600 transition-colors"
      >
        ← Back to All Modules
      </Link>
    </div>
  );
}
