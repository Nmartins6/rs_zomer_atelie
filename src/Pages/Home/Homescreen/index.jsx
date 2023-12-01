import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
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
            <ContactUs />
            <Footer />
        </>
    )
}