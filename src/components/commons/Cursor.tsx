"use client";

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import('./gsap/custom-cursor'),
  {
    ssr: false,
  }
);

export default function Cursor() {
  if (typeof window === 'undefined') {
    return null;
  }
  
  return <CustomCursor />;
}
