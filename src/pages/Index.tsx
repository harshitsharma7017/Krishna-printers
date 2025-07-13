import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { HowItWorks } from "@/components/HowItWorks";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { CustomizationOptions } from "@/components/CustomizationOptions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Catalog />
      <CustomizationOptions />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
