import { Footer, Header } from "@/components/commons";
import { Hero } from "../components/hero";
import { Works } from "../components/works";

export const WorkLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="my-5 xl:my-20">
        <Works />
      </div>
      <Footer />
    </>
  );
};
