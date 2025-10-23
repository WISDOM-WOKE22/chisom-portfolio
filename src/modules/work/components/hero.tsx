import SplitText from "@/components/SplitText";

export const Hero = () => {
  return (
    <div className="py-10 xl:py-20 px-3 xl:px-10">
      <div className="flex flex-row items-center justify-center my-30">
        <SplitText
          text="My Works"
          className="text-4xl xl:text-8xl font-semibold text-center px-4"
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
  );
};
