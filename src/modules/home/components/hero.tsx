import SplitText from "@/components/SplitText";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="flex items-center justify-center h-full flex-col">
                <SplitText
                    text="Chisom Kanu"
                    className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-semibold text-center px-4"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    data-cursor="scale"
                    tag="h1"
                    // data-cursor-text="View"
                    />
            </div>
        </div>
    )
}