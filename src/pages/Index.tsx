import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
