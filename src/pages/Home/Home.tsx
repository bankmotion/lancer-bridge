import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TechPartner from "./TechPartner";
import GlobalFootprinter from "./GlobalFootprinter";
import TechnologiesSection from "./TechnologiesSection";

const Home: React.FC = () => {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>
      {/* Global Footprinter */}
      <GlobalFootprinter />

      {/* Tech Partners */}
      <TechPartner />

      {/* Technologes */}
      <section id="services">
        <TechnologiesSection />
      </section>
    </main>
  );
};

export default Home;
