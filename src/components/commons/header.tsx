"use client";

import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-20 px-3 lg:px-6 xl:px-10 w-full fixed left-0 right-0 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex items-center justify-center flex-row z-20">
      <div className="flex items-center justify-between w-full max-w-[1800px]">
        <h1
          onClick={() => push("/")}
          className={`cursor-pointer transition-colors ${pathname === "/" ? "font-bold text-primary" : ""}`}
          data-cursor="scale"
        >
          Chisom-Kanu
        </h1>

        <div className="flex items-center justify-between gap-4">
          <p
            className={`cursor-pointer transition-colors ${pathname === "/work" ? "font-bold text-primary border-b-2 border-primary" : ""}`}
            onClick={() => push("/work")}
          >
            Work
          </p>
          <p
            className={`cursor-pointer transition-colors ${pathname === "/#contact" || (pathname === "/" && typeof window !== "undefined" && window.location.hash === "#contact") ? "font-bold text-primary" : ""}`}
            onClick={() => push("/#contact")}
          >
            Contact
          </p>
        </div>
        {/* <ModeToggle/> */}
      </div>
    </div>
  );
};
