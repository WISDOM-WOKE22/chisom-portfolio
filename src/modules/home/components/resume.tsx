import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Resume = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="">
        <Link
          target="_blank"
          href="https://docs.google.com/document/d/1FIUwIA8cuAO49g4uPb-gcZL0RcjW44yw/edit"
          data-cursor="scale"
          // data-cursor-text="View"
          className="flex flex-row items-center gap-2 cursor-pointer group relative hover:scale-110"
        >
          <h1 className="text-2xl">My Resume</h1>
          <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};
