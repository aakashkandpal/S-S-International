import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeatureCards />
      <ServicesSection />
      <PartnersSection />
    </div>
  );
}
