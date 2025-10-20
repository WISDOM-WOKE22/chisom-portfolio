import { Header, Footer } from "@/components/commons"
import { Hero } from "../components/hero"
import { SelectedWorks } from "../components/selected-works"
import { AboutMe } from "../components/about-me"
import { Contact } from "../components/contact"

export const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <SelectedWorks/>
            <div className="mt-50">
                <AboutMe/>
            </div>
            <div className="my-20">
                <Contact/>
            </div>
        </>
    )
}