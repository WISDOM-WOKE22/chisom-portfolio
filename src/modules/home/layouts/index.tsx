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
      <main>
        <section className="pt-50" aria-label="About Chisom Kanu">
          <AboutMe />
        </section>
        <section aria-label="Resume and Skills">
          <Resume />
        </section>
        <section className="mt-50" aria-label="Selected Works and Portfolio">
          <SelectedWorks />
        </section>
        <section className="my-20" id="contact" aria-label="Contact Information">
          <Contact />
        </section>
        <section aria-label="Hero Section">
          <Hero />
        </section>
      </main>
      <Footer />
    </>
  );
};
