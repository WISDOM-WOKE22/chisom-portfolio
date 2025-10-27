import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 px-4">
      <div className="flex items-center justify-center w-full max-w-[1600px] border-t-1 pt-10 flex-col gap-4">
        <div className="flex justify-between items-center flex-row w-full">
          <div className="flex flex-col text-md" data-cursor="scale">
            <Link
              href="https://www.linkedin.com/in/chisom-kanu-834b42251"
              className="hover:underline"
              target="_blank"
            >
              <h1>LINKEDIN</h1>
            </Link>
            <Link
              href="https://github.com/chisommmy"
              className="hover:underline"
              target="_blank"
            >
              <h1>GITHUB</h1>
            </Link>
            <Link
              href="https://x.com/chisom_kanu01?s=21"
              className="hover:underline"
              target="_blank"
            >
              <h1>X (twitter)</h1>
            </Link>
            <Link
              href="https://dev.to/chisom_kanu01"
              className="hover:underline"
              target="_blank"
            >
              <h1>DEV-TO</h1>
            </Link>
          </div>

          <div className="w-full max-w-[250px] text-right">
            <p>LET&apos;S CONNECT</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <Link
              target="_blank"
              href="mailto:Chisomkanu2001@gmail.com"
              data-cursor="scale"
              // data-cursor-text="View"
              className="flex flex-row items-center gap-2 cursor-pointer group relative hover:scale-110"
            >
              <h1 className="text-2xl">Chisomkanu2001@gmail.com</h1>
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
