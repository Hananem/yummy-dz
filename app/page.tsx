'use client';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import YammyStarsSection from '@/components/YammyStarsSection';
import RewardsSection from '@/components/RewardsSection';
import ServicesSection from '@/components/ServicesSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BannerSection from '@/components/BannerSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-white bg-[#0F1720]">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <HowItWorksSection />
      <YammyStarsSection />
      <RewardsSection />
      <ServicesSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <BannerSection />
    </div>
  );
}