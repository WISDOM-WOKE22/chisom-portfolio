"use client";

import dynamic from 'next/dynamic';

// Disable SSR for the cursor component
const CustomCursor = dynamic(
  () => import('./gsap/custom-cursor'),
  { ssr: false }
);

export default function CursorWrapper() {
  return <CustomCursor />;
}
