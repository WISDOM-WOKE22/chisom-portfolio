import SplitText from "@/components/SplitText";

export const Hero = () => {
    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="flex items-center justify-center h-full">
                <SplitText
                    text="Chisom Kanu"
                    className="text-[12rem] font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    //   onLetterAnimationComplete={handleAnimationComplete}I
                    />
            </div>
        </div>
    )
}