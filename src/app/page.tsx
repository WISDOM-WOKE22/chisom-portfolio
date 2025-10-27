import { HomeLayout } from "@/modules/home/layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Chisom Kanu's portfolio. Technical writer and content marketing specialist creating clear, engaging, and user-centered content for developers and tech audiences.",
  keywords: [
    "Chisom Kanu",
    "technical writer portfolio",
    "content marketing specialist",
    "API documentation writer",
    "developer content creator",
    "technical writing services",
    "content strategy consultant",
  ],
  openGraph: {
    title: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    description:
      "Welcome to Chisom Kanu's portfolio. Technical writer and content marketing specialist creating clear, engaging, and user-centered content for developers and tech audiences.",
    url: "https://chisomkanu.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Chisom Kanu - Technical Writer Portfolio",
      },
    ],
  },
  twitter: {
    title: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    description:
      "Welcome to Chisom Kanu's portfolio. Technical writer and content marketing specialist creating clear, engaging, and user-centered content for developers and tech audiences.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  return <HomeLayout />;
}
