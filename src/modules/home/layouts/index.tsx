import { Header, Footer } from "@/components/commons";
import { Hero } from "../components/hero";
import { SelectedWorks } from "../components/selected-works";
import { AboutMe } from "../components/about-me";
import { Contact } from "../components/contact";
import { Resume } from "../components/resume";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-50">
        <AboutMe />
      </div>
      <Resume />
      <div className="mt-50">
        <SelectedWorks />
      </div>
      <div className="my-20" id="contact">
        <Contact />
      </div>
      <Hero />
      <Footer />
    </>
  );
};
