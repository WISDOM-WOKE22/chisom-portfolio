import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chisom Kanu - Technical Writer & Content Marketing Specialist",
    short_name: "Chisom Kanu",
    description:
      "Technical writer and content marketing specialist with expertise in API documentation, developer tutorials, and SEO-optimized content for developers and tech audiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
