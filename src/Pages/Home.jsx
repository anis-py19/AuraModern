import React from "react";
import HeroCarousel from "../Components/sections/HeroCarousel";
import QuickCards from "../Components/sections/QuickCards";
import AboutSection from "../Components/sections/AboutSection";
import ServicesSection from "../Components/sections/ServicesSection";
import SpecialOffer from "../Components/sections/SpecialOffer";
import PricingSection from "../Components/sections/PricingSection";
import TestimonialsSection from "../Components/sections/TestimonialsSection";
import TeamSection from "../Components/sections/TeamSection";
import FacilityGallery from "../Components/sections/FacilityGallery";
import AppointmentSection from "../Components/sections/AppointmentSection";
import FAQSection from "../Components/sections/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <QuickCards />
      <AboutSection />
      <ServicesSection />
      <AppointmentSection />
      <SpecialOffer />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <FacilityGallery />
      <FAQSection />
    </main>
  );
}
