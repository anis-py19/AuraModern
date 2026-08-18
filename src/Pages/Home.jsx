import React from "react";
import HeroCarousel from "../Components/sections/HeroCarousel";
import QuickCards from "../Components/sections/QuickCards";
import AboutSection from "../Components/sections/AboutSection";
import ServicesSection from "../Components/sections/ServicesSection";
import SpecialOffer from "../Components/sections/SpecialOffer";
import TeamSection from "../Components/sections/TeamSection";
import FacilityGallery from "../Components/sections/FacilityGallery";
import FAQSection from "../Components/sections/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <QuickCards />
      <AboutSection />
      <ServicesSection />
      <SpecialOffer />
      <TeamSection />
      <FacilityGallery />
      <FAQSection />
    </main>
  );
}
