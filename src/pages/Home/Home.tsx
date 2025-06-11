import React from "react";
import ArticlesSection from "./ArticlesSection";
import BlogSection from "./BlogSection";
import CaseStudySection from "./CaseStudySection";
import ClientLogoSection from "./ClientLogoSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import TechPartner from "./TechPartner";

const Home: React.FC = () => {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <FeatureSection />

      {/* Services */}
      <ServicesSection />

      {/* Stats */}
      <StatsSection />

      {/* Case Study Preview */}
      <CaseStudySection />

      {/* Client Logo */}
      <ClientLogoSection />

      {/* Tech Partners */}
      <TechPartner />

      {/* Blog / News */}
      <BlogSection />

      {/* Latest Articles */}
      <ArticlesSection />
    </main>
  );
};

export default Home;
