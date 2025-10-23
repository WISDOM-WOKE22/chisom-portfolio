"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const show = () => gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
    const hide = () => gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });

    const onPointerMove = (e: PointerEvent | MouseEvent) => {
      show();
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleEnter = (el: HTMLElement) => {
      const type = el.getAttribute("data-cursor") || "default";
      const text = el.getAttribute("data-cursor-text") || "";
      const img = el.getAttribute("data-cursor-img") || "";

      cursor.innerHTML = ""; // reset content

      if (type === "text") {
        const span = document.createElement("span");
        span.className =
          "text-[10px] leading-none text-white font-semibold whitespace-nowrap";
        span.textContent = text || "View";
        cursor.appendChild(span);
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: "#111",
          duration: 0.25,
        });
      } else if (type === "icon") {
        const span = document.createElement("span");
        span.className = "text-white";
        span.textContent = "🔗";
        cursor.appendChild(span);
        gsap.to(cursor, { scale: 2, backgroundColor: "#333", duration: 0.25 });
      } else if (type === "image" && img) {
        const image = document.createElement("img");
        image.src = img;
        image.alt = "cursor";
        image.className = "w-12 h-12 object-cover rounded-full";
        cursor.appendChild(image);
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "transparent",
          duration: 0.25,
        });
      } else if (type === "scale") {
        // ✅ NEW: dramatically enlarge cursor 4×
        gsap.to(cursor, {
          scale: 4,
          backgroundColor: "#fff",
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: "#fff", duration: 0.25 });
      }
    };

    const handleLeave = () => {
      cursor.innerHTML = "";
      gsap.to(cursor, { scale: 1, backgroundColor: "#fff", duration: 0.25 });
    };

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor]"),
    );
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleEnter(el));
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("pointermove", onPointerMove as any);
    window.addEventListener("mousemove", onPointerMove as any);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("pointermove", onPointerMove as any);
      window.removeEventListener("mousemove", onPointerMove as any);
      window.removeEventListener("mouseleave", hide);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleEnter(el));
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white opacity-0 pointer-events-none mix-blend-difference z-[999999] flex items-center justify-center"
    />
  );
}
