import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import FlowDemo from "@/components/FlowDemo";
import Valor from "@/components/Valor";
import Sectors from "@/components/Sectors";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <FlowDemo />
      <Valor />
      <Sectors />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
