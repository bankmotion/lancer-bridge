import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TechPartner from "./TechPartner";
import GlobalFootprinter from "./GlobalFootprinter";
import TechnologiesSection from "./TechnologiesSection";
import PortfolioSection from "./PortfolioSection";

const Home: React.FC = () => {
  return (
    <main className="text-gray-800 bg-black">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      {/* Global Presence */}
      <section id="global-presence">
      <GlobalFootprinter />
      </section>

      {/* Tech Partners */}
      <section id="tech-partners">
      <TechPartner />
      </section>

      {/* Technologies */}
      <section id="technologies">
        <TechnologiesSection />
      </section>
    </main>
  );
};

export default Home;
