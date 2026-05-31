'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import YammyStarsSection from '@/components/YammyStarsSection';
import CategoriesSection from '@/components/CategoriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import ServicesSection from '@/components/ServicesSection';
import RewardsSection from '@/components/RewardsSection';
import BannerSection from '@/components/BannerSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-white bg-[#0F1720]">

      <HeroSection />


      <AboutSection />
      <YammyStarsSection />
      <RewardsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <ServicesSection />
      <BannerSection />


    </div>
  );
}