import { defineConfig } from "tinacms";

// Your hosting provider - Tina Cloud (free tier)
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get these from tina.io after setting up your project
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  // Schema defines the shape of content that editors can manage
  schema: {
    collections: [
      {
        name: "topic",
        label: "Topics",
        path: "content/topics",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return (values?.slug || "new-topic")
                .toLowerCase()
                .replace(/\s+/g, "-");
            },
          },
          router: ({ document }) => {
            return `/topics/${document._sys.filename}`;
          },
        },
        fields: [
          // ── Basic Module Info ──
          {
            type: "string",
            name: "moduleNumber",
            label: "Module Number",
            description: "e.g., M1, M2, M3...",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            description:
              "URL-friendly name, e.g., m1-garbhini-vigyana (lowercase, hyphens only)",
            required: true,
          },
          {
            type: "string",
            name: "nameAyurveda",
            label: "Ayurveda Name",
            description: "e.g., Garbhini Vigyana",
            required: true,
          },
          {
            type: "string",
            name: "nameDevanagari",
            label: "Devanagari Name",
            description: "e.g., गर्भिणी विज्ञान",
            required: true,
          },
          {
            type: "string",
            name: "nameEnglish",
            label: "English Name",
            description: "e.g., Diagnosis of Pregnancy",
            required: true,
          },
          {
            type: "number",
            name: "paper",
            label: "Paper Number",
            description: "1, 2, 3, or 4",
            required: true,
          },
          {
            type: "number",
            name: "semester",
            label: "Semester",
            description: "3, 4, 5, or 6",
            required: true,
          },
          {
            type: "number",
            name: "units",
            label: "Number of Units",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "prasuti", label: "Prasuti Tantra (Obstetrics)" },
              { value: "streeroga", label: "Stree Roga (Gynaecology)" },
              { value: "basic", label: "Basic Sciences" },
              { value: "research", label: "Research & Legal" },
            ],
          },
          {
            type: "string",
            name: "references",
            label: "Source References",
            description: "Comma-separated list of textbook references",
            list: true,
          },

          // ── Quick Orientation ──
          {
            type: "object",
            name: "orientation",
            label: "Quick Orientation",
            fields: [
              {
                type: "string",
                name: "why",
                label: "Why This Topic Matters",
                description:
                  "Explain clinical importance in 2-3 sentences",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "examWeight",
                label: "Exam Relevance",
                description: "How often this appears in exams and in what format",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },

          // ── Definitions ──
          {
            type: "object",
            name: "definition",
            label: "Definition & Classification",
            fields: [
              {
                type: "rich-text",
                name: "ayurveda",
                label: "Ayurvedic Definition",
                description: "Classical Ayurvedic definition with Sanskrit terms",
              },
              {
                type: "rich-text",
                name: "modern",
                label: "Modern Definition",
                description: "Modern medical definition",
              },
            ],
          },

          // ── Shlokas ──
          {
            type: "object",
            name: "shlokas",
            label: "Classical Shlokas",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.source || "New Shloka",
              }),
            },
            fields: [
              {
                type: "string",
                name: "source",
                label: "Source Reference",
                description:
                  "e.g., Charaka Sharira Sthana 4/16",
                required: true,
              },
              {
                type: "string",
                name: "devanagari",
                label: "Devanagari Text",
                description: "The shloka in Devanagari script",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "transliteration",
                label: "IAST Transliteration",
                description: "Romanized transliteration",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "meaning",
                label: "Word-by-Word Meaning",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "clinicalNote",
                label: "Clinical Relevance",
                description: "How this shloka relates to modern clinical practice",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },

          // ── Dual Columns ──
          {
            type: "object",
            name: "dualCols",
            label: "Dual Column Sections (Ayurveda vs Modern)",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Section",
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "rich-text",
                name: "ayurvedaContent",
                label: "Ayurveda Content",
              },
              {
                type: "rich-text",
                name: "modernContent",
                label: "Modern Content",
              },
            ],
          },

          // ── Exam Bullets ──
          {
            type: "string",
            name: "examBullets",
            label: "High-Yield Exam Points",
            description: "15 most important points for exams",
            list: true,
          },

          // ── Mnemonics ──
          {
            type: "object",
            name: "mnemonics",
            label: "Mnemonics",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Mnemonic",
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Mnemonic Title",
                required: true,
              },
              {
                type: "string",
                name: "acronym",
                label: "Acronym",
                required: true,
              },
              {
                type: "string",
                name: "expansions",
                label: "Expansions (one per letter)",
                list: true,
              },
            ],
          },

          // ── Main content body (MDX) ──
          {
            type: "rich-text",
            name: "body",
            label: "Additional Content",
            description:
              "Any extra content — this appears at the bottom of the topic page. You can add tables, images, and more.",
            isBody: true,
          },
        ],
      },
    ],
  },
});
