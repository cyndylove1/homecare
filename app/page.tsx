import AboutSection from "./components/ui/about";
import CTA from "./components/ui/cta";
import FAQ from "./components/ui/faq";
import Hero from "./components/ui/hero";
import Services from "./components/ui/services";
import Staffing from "./components/ui/staffing";
import Testimonial from "./components/ui/testimonial";
import WhyUs from "./components/ui/whyus";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyUs />
      <Services />
      <Staffing />
      <FAQ/>
      <Testimonial />
      <CTA/>
    </>
  );
}
