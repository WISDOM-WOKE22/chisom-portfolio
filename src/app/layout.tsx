import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import CursorWrapper from "@/components/commons/CursorWrapper";
import ClientOnly from "@/components/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    template: "%s | Chisom Kanu",
  },
  description:
    "Technical writer and content marketing specialist with expertise in API documentation, developer tutorials, and SEO-optimized content for developers and tech audiences.",
  keywords: [
    "technical writer",
    "content marketing",
    "API documentation",
    "developer tutorials",
    "technical content",
    "SEO writing",
    "developer content",
    "tech writing",
    "content strategy",
    "documentation",
  ],
  authors: [{ name: "Chisom Kanu", url: "https://chisomkanu.com" }],
  creator: "Chisom Kanu",
  publisher: "Chisom Kanu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chisomkanu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chisomkanu.com",
    siteName: "Chisom Kanu Portfolio",
    title: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    description:
      "Technical writer and content marketing specialist with expertise in API documentation, developer tutorials, and SEO-optimized content for developers and tech audiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    description:
      "Technical writer and content marketing specialist with expertise in API documentation, developer tutorials, and SEO-optimized content for developers and tech audiences.",
    images: ["/og-image.jpg"],
    creator: "@chisom_kanu01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chisom Kanu",
    jobTitle: "Technical Writer & Content Marketing Specialist",
    description:
      "Technical writer and content marketing specialist with expertise in API documentation, developer tutorials, and SEO-optimized content for developers and tech audiences.",
    url: "https://chisomkanu.com",
    image: "https://chisomkanu.com/og-image.jpg",
    sameAs: [
      "https://www.linkedin.com/in/chisom-kanu-834b42251",
      "https://github.com/chisommmy",
      "https://x.com/chisom_kanu01",
      "https://dev.to/chisom_kanu01",
    ],
    email: "Chisomkanu2001@gmail.com",
    knowsAbout: [
      "Technical Writing",
      "Content Marketing",
      "API Documentation",
      "Developer Tutorials",
      "SEO Writing",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Technical Writer",
      description:
        "Creating clear, engaging, and user-centered content for developers and tech audiences",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientOnly>
            <CursorWrapper />
          </ClientOnly>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
