import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import ExperienceMarketplaceSection from "./components/ExperienceMarketplaceSection";

import ImpactSection from "./components/ImpactSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <FeaturesSection />
            <FeaturedProductsSection />
            <ExperienceMarketplaceSection />

            <ImpactSection />
            <CallToAction />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
