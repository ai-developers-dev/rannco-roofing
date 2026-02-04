import { Hero } from "@/components/sections/hero";
import { ProjectsSlider } from "@/components/sections/projects-slider";
import { AboutPreview } from "@/components/sections/about-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSlider />
      <AboutPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
