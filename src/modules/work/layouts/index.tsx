import { Footer, Header } from "@/components/commons";
import { Hero } from "../components/hero";
import { Works } from "../components/works";

export const WorkLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-[1900px]">
          <Hero />
          <div className="my-5 xl:my-20">
            <Works />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
