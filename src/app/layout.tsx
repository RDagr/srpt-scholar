import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRPT Scholar — Stree Roga & Prasuti Tantra Study Portal",
  description:
    "Comprehensive study portal for postgraduate Ayurveda students specializing in Stree Roga and Prasuti Tantra (Obstetrics & Gynaecology). Integrating classical Ayurvedic knowledge with modern medicine.",
  keywords: [
    "Ayurveda",
    "Stree Roga",
    "Prasuti Tantra",
    "OBGYN",
    "PG Ayurveda",
    "Garbhini",
    "Streeroga",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-warmwhite text-gray-900 font-body min-h-screen">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-saffron-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">
                    S
                  </span>
                </div>
                <div>
                  <h1 className="text-lg font-heading font-bold text-saffron-800 leading-tight">
                    SRPT Scholar
                  </h1>
                  <p className="text-xs text-saffron-600 leading-tight">
                    स्त्रीरोग प्रसूतितन्त्र
                  </p>
                </div>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="/"
                  className="text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors"
                >
                  All Modules
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors"
                >
                  Semester 3
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors"
                >
                  Semester 4
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors"
                >
                  Semester 5
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors"
                >
                  Semester 6
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-saffron-900 text-saffron-100 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  SRPT Scholar
                </h3>
                <p className="text-saffron-300 text-sm">
                  A comprehensive study resource for PG Ayurveda scholars in
                  Stree Roga & Prasuti Tantra, bridging classical wisdom with
                  modern medicine.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-3">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-saffron-300">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      All Modules
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Paper 1 — Prasuti Tantra
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Paper 2 — Stree Roga
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-3">
                  References
                </h4>
                <ul className="space-y-2 text-sm text-saffron-300">
                  <li>Charaka Samhita</li>
                  <li>Sushruta Samhita</li>
                  <li>Ashtanga Hridaya</li>
                  <li>Williams Obstetrics</li>
                  <li>DC Dutta&apos;s Textbook</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-saffron-800 mt-8 pt-8 text-center text-sm text-saffron-400">
              <p>
                © {new Date().getFullYear()} SRPT Scholar. Built for PG
                Ayurveda scholars. Content is for educational purposes only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
