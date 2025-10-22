import Me from "@/assets/me"

export const AboutMe = () => {
    return (
        <div className="lg:px-20 px-5 flex flex-row gap-20 justify-between">
            <div className="w-full max-w-[700px]">
                <div className="lg:text-[6rem] text-[3rem]">
                    <h1>Hello there</h1>
                    <h1>I'm Chisom Kanu</h1>
                </div>
                <p className="text-uppercase mt-5 text-gray-500" data-cursor="scale">I’M A TECHNICAL WRITER AND CONTENT MARKETING WRITER WITH A STRONG FOCUS ON CREATING CLEAR, ENGAGING, AND USER-CENTERED CONTENT FOR DEVELOPERS AND TECH AUDIENCES. I WRITE API DOCUMENTATION, DEVELOPER TUTORIALS, AND CONTENT MARKETING PIECES THAT NOT ONLY EXPLAIN HOW PRODUCTS WORK BUT ALSO HIGHLIGHT THEIR VALUE THROUGH STORYTELLING AND SEO.</p>

                <div className="mt-10">
                    <h1 className="italic text-gray-50">-SKILLS-</h1>

                    <div className="mt-5" data-cursor="scale">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                        <p>TECHNICAL WRITER</p>
                    </div>
                </div>
            </div>

            <div className="w-[800px] h-[1020px] flex-row items-center justify-center hidden xl:flex relative -top-50">
                <Me className="size-180 animate-spin animation-duration-13000 animate-infinite animate-ease-linear"/>
            </div>
        </div>
    )
}