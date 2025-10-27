// "use client";

import { WorkLayout } from "@/modules/work/layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Chisom Kanu's portfolio of technical writing and content marketing work. Featured articles on CSS frameworks, GitHub guides, MySQL optimization, and developer tutorials.",
  keywords: [
    "Chisom Kanu work",
    "technical writing portfolio",
    "content marketing examples",
    "developer tutorials",
    "API documentation samples",
    "technical articles",
    "CSS frameworks guide",
    "GitHub tutorials",
    "MySQL optimization",
    "programming content",
  ],
  openGraph: {
    title: "Work - Chisom Kanu's Technical Writing Portfolio",
    description:
      "Explore Chisom Kanu's portfolio of technical writing and content marketing work. Featured articles on CSS frameworks, GitHub guides, MySQL optimization, and developer tutorials.",
    url: "https://chisomkanu.com/work",
    images: [
      {
        url: "/og-work.jpg",
        width: 1200,
        height: 630,
        alt: "Chisom Kanu's Technical Writing Work Portfolio",
      },
    ],
  },
  twitter: {
    title: "Work - Chisom Kanu's Technical Writing Portfolio",
    description:
      "Explore Chisom Kanu's portfolio of technical writing and content marketing work. Featured articles on CSS frameworks, GitHub guides, MySQL optimization, and developer tutorials.",
    images: ["/og-work.jpg"],
  },
};

export default function WorkPage() {
  return <WorkLayout />;
}
