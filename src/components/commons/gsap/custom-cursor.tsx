"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isClient = typeof window !== "undefined";

  useEffect(() => {
    // Ensure we're on the client side and cursor ref is available
    if (!isClient || !cursorRef.current) return;

    const cursor = cursorRef.current;

    // Set initial cursor position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // Animation for cursor movement
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    // Show/hide cursor
    const show = () => gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
    const hide = () => gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });

    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      show();
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Handle hover effects
    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const type = target.getAttribute("data-cursor") || "default";

      if (type === "scale") {
        gsap.to(cursor, { scale: 4, backgroundColor: "#fff", duration: 0.25 });
      } else if (type === "link") {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "#fff",
          duration: 0.25,
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#fff", duration: 0.25 });
    };

    // Add event listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", hide);

    const interactiveElements =
      document.querySelectorAll<HTMLElement>("[data-cursor]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", hide);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [isClient]);

  // Only render on client side
  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white opacity-0 pointer-events-none mix-blend-difference z-[999999]"
    />
  );
};

export default CustomCursor;
