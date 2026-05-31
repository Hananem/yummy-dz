'use client';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import YammyStarsSection from '@/components/YammyStarsSection';
import RewardsSection from '@/components/RewardsSection';
import ServicesSection from '@/components/ServicesSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import BannerSection from '@/components/BannerSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-white bg-[#0F1720]">
      {/* 1. الانطباع الأول — ما هو التطبيق */}
      <HeroSection />

      {/* 2. من نحن — بناء الثقة */}
      <AboutSection />

      {/* 3. ماذا يجد المستخدم — الفئات والمحتوى */}
      <CategoriesSection />

      {/* 4. كيف يعمل التطبيق — خطوات واضحة */}
      <HowItWorksSection />

      {/* 5. نظام النجوم — ميزة المستخدم الأساسية */}
      <YammyStarsSection />

      {/* 6. المكافآت — تفاصيل النجوم للمستخدم والمطعم */}
      <RewardsSection />

      {/* 7. لماذا تختارنا — موجّه لأصحاب المطاعم */}
      <ServicesSection />

      {/* 8. لقطات التطبيق — إثبات بصري قبل القرار */}
      <ScreenshotsSection />

      {/* 9. CTA نهائي — تحميل أو تسجيل */}
      <BannerSection />
    </div>
  );
}