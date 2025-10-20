import Image from "next/image"
import Image3 from "@/assets/image3.jpg"
import Me from "@/assets/me"

export const AboutMe = () => {
    return (
        <div className="px-20 flex flex-row gap-10s justify-between">
            <div className="w-full max-w-[700px]">
                <div className="text-[6rem]">
                    <h1>Hello there</h1>
                    <h1>I'm Chisom Kanu</h1>
                </div>
                <p className="text-uppercase mt-5 text-gray-500">LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT. RERUM FUGIAT AT IURE ADIPISCI SOLUTA. DOLOREM, IURE CUPIDITATE INVENTORE DOLORQUE ILLUM SIMILIQUE, UNDE ELIGENDI MAGNAM QUAM OFFICIA IPSUM REICIENDI, MINUS SOLUTA.</p>

                <div className="mt-10">
                    <h1 className="italic text-gray-50">-SKILLS-</h1>

                    <div className="mt-5">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                        <p>TECHNICAL WRITER</p>
                    </div>
                </div>
            </div>

            {/* <Image
                src={Image3}
                alt="image3"
                width={800}
                height={820}
                className="w-[800px] h-[1020px] border"
            /> */}
            <div className="w-[800px] h-[1020px] flex fledx-row items-center justify-center">
                <Me className="size-180 animate-spin animation-duration-13000 animate-infinite animate-ease-linear"/>
            </div>
        </div>
    )
}