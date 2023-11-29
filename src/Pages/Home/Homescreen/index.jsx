import AboutUs from "../AboutUs";
import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";
import ServicesOffered from "../ServicesOffered";
import Testimonials from "../Testimonials";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesOffered />
            <AboutUs />
            <Portfolio />
            <Testimonials />
        </>
    )
}