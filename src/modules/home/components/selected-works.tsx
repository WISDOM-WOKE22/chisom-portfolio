import { Button } from "@/components/ui/button"
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"

interface WorkItemProps {
    src: string | StaticImageData
    alt: string
    title: string
    date: string
    size: "small" | "large"
    dataCursor?: string,
    link: string
}

const WorkItem = ({ src, alt, title, date, size, dataCursor, link }: WorkItemProps) => {
    const isSmall = size === "small"
    
    return (
        <Link target="_blank" href={link}>
        <div className="w-full md:w-auto cursor-pointer group" data-cursor={dataCursor}>
            <div className={`relative w-full ${isSmall ? "md:w-[600px] md:h-[420px]" : "md:w-full md:h-[850px]"} h-[100%] border overflow-hidden`}>
                <Image 
                    src={src} 
                    className="absolute inset-0 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    alt={alt}
                    layout="fill"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-[85%] h-[85%]"></div>
                </div>
            </div>
            <div className="mt-3 md:mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">{title}</h1>
                <h1 className="mt-2 text-sm md:text-base text-gray-300">{date}</h1>
            </div>
        </div>
        </Link>
    )
}

export const SelectedWorks = () => {
    return (
        <div className="px-3 lg:px-6 xl:px-14 mt-10 md:mt-20" data-magnetic >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Selected Works</h1>

            <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-15">  
                <WorkItem 
                    src="https://framerusercontent.com/images/jmGsErVaXE9HMnmsIjHDba05DSg.png?width=1600&height=900"
                    alt="image1"
                    title="A beginner's guide to getting started 
                    with GitHub"
                    date="Published on Mar 3, 2025"
                    size="small"
                    // data-cursor="text"
                    // data-cursor-text="Read"
                    // dataCursor="text"
                    // data-cursor-text="Read"
                    link="https://pieces.app/blog/beginners-guide-github"
                />
                <WorkItem 
                    src="https://framerusercontent.com/images/GIkvBzU82yfYdq6OPbfQ6p6I3w.png?scale-down-to=2048&width=3833&height=2156"
                    alt="image1"
                    title="7 Best CSS frameworks for scalable, LLM-driven apps"
                    date="Published on Feb 18, 2025"
                    size="large"
                    dataCursor=""
                    data-cursor="text"
                    data-cursor-text="Read"
                    link="https://pieces.app/blog/top-5-best-css-frameworks-for-responsive-web-design-in-2024"
                />
            </div>
            <div className="mt-20 md:mt-40 lg:mt-60 flex flex-col md:flex-row-reverse gap-6 md:gap-10 lg:gap-15">  
                <WorkItem 
                    src="https://blog.openreplay.com/images/maximizing-user-experience--the-importance-of-pre-caching/images/hero.png"
                    alt="image1"
                    title="Maximizing user experience: The importance of pre-caching"
                    date="Published on Jun 24, 2024S"
                    size="small"
                    link="https://blog.openreplay.com/maximizing-user-experience--the-importance-of-pre-caching/"
                />
                <WorkItem 
                    src="https://www.red-gate.com/simple-talk/wp-content/uploads/2025/04/shutterstock_2411207597-2048x1152.jpg"
                    alt="image1"
                    title="MySQL Shell Basic Configuration Management (Part 4 – Optimizing MySQL Performance)"
                    date="Published on 15th May 2025"
                    size="large"
                    link="https://www.red-gate.com/simple-talk/databases/mysql/mysql-shell-basic-configuration-management-part-4-optimizing-mysql-performance/"
                />
            </div>
            <div className="mt-20 md:mt-40 lg:mt-60 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-15">  
                <WorkItem 
                    src="https://framerusercontent.com/images/oyf1FaA8kyZa0Y22FvN9UPQyEk.png?scale-down-to=2048&width=3833&height=2156"
                    alt="image1"
                    title="A deep dive into asynchronous vs synchronous programming"
                    date="Published on Jan 17, 2025"
                    size="small"
                    link="https://pieces.app/blog/synchronous-and-asynchronous-programming-in-javascript"
                />
                <WorkItem 
                    src="https://www.red-gate.com/simple-talk/wp-content/uploads/2024/12/shutterstock_601616840-2048x1365.jpg"
                    alt="image1"
                    title="MySQL Shell Basic Configuration Management (Part 4 – Optimizing MySQL Performance)"
                    date="Published on Jan 17, 2025"
                    size="large"
                    link="https://www.red-gate.com/simple-talk/databases/mysql/memory-and-cpu-configuration-using-mysql-shell/"
                />
            </div>

            <div className="mt-20 md:mt-40 lg:mt-60 flex flex-row justify-center items-center">
                <Button className="rounded-3xl text-sm md:text-md px-6 py-2" data-cursor="scale">SEE THEM ALL</Button>
            </div>
        </div>
    )
}