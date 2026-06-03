'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    images: ['/cat1.jpg'],
    alt: 'Fast Food', labelAr: 'وجبات سريعة', tag: 'فئة يامي',
    subcategories: [
      { ar: 'برغر' }, { ar: 'دجاج مقلي' }, { ar: 'بيتزا' }, { ar: 'شاورما' },
      { ar: 'ساندويتشات' }, { ar: 'تاكو' }, { ar: 'هوت دوغ' }, { ar: 'بطاطا مقلية' },
      { ar: 'وجبات كومبو' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat7.jpg', '/cat8.jpg'],
    alt: 'Traditional Food', labelAr: 'أكل تقليدي', tag: 'طعم جزائري',
    subcategories: [
      { ar: 'أكلات جزائرية' }, { ar: 'كسكس' }, { ar: 'طاجين' }, { ar: 'شوربات' },
      { ar: 'مقبلات تقليدية' }, { ar: 'مخبوزات تقليدية' }, { ar: 'أطباق منزلية' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat11.jpg'],
    alt: 'Seafood', labelAr: 'مأكولات بحرية', tag: 'طازج دائماً',
    subcategories: [
      { ar: 'أسماك مشوية' }, { ar: 'مقليات بحرية' }, { ar: 'جمبري' }, { ar: 'محار' },
      { ar: 'حساء بحري' }, { ar: 'أطباق بحرية مختلطة' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat2.jpg', '/cat4.jpg', '/cat5.jpg', '/cat6.jpg'],
    alt: 'Desserts & Drinks', labelAr: 'حلويات ومشروبات', tag: 'لحظات حلوة',
    subcategories: [
      { ar: 'حلويات' }, { ar: 'آيس كريم' }, { ar: 'كريب' }, { ar: 'وافل' },
      { ar: 'عصائر' }, { ar: 'مشروبات غازية' }, { ar: 'سموثي' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat13.jpg'],
    alt: 'Healthy Food', labelAr: 'أكل صحي', tag: 'عيش بصحة',
    subcategories: [
      { ar: 'سلطات' }, { ar: 'وجبات دايت' }, { ar: 'نباتي' }, { ar: 'فيغان' },
      { ar: 'عصائر طبيعية' }, { ar: 'أطعمة منخفضة السعرات' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat3.jpg', '/cat14.jpg'],
    alt: 'Cafés & Tea', labelAr: 'مقاهي وشاي', tag: 'مقاهي مميزة',
    subcategories: [
      { ar: 'قهوة' }, { ar: 'شاي' }, { ar: 'حلويات خفيفة' },
      { ar: 'مشروبات ساخنة' }, { ar: 'مشروبات باردة' }, { ar: 'أخرى' },
    ]
  },
  {
    images: ['/cat12.jpg', '/cat10.jpg'],
    alt: 'Buffet & Events', labelAr: 'بوفيه ومناسبات', tag: 'مناسبات خاصة',
    subcategories: [
      { ar: 'بوفيه مفتوح' }, { ar: 'وجبات جماعية' }, { ar: 'ولائم' },
      { ar: 'خدمات مناسبات' }, { ar: 'تجهيز حفلات' },
    ]
  },
];

const viewport = { once: true, margin: '-80px' };

export default function CategoriesSection() {
  const [active, setActive] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const cat = categories[active];

  useEffect(() => {
    setImgIndex(0);
    setFade(true);
  }, [active]);

  useEffect(() => {
    if (cat.images.length <= 1) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex(prev => (prev + 1) % cat.images.length);
        setFade(true);
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, [active, cat.images.length]);

  return (
    <section className="py-32 px-6 bg-[#0F1720] text-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            فئات المطاعم
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            اكتشف مختلف أنواع
            <span className="text-[#36C275]"> المطاعم والمقاهي </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            من الوجبات السريعة إلى المطاعم الفاخرة والمأكولات التقليدية الجزائرية.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`عرض فئة ${c.labelAr}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === i
                  ? 'bg-[#36C275] border-[#36C275] text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {c.labelAr}
            </button>
          ))}
        </motion.div>

        {/* Active Card */}
        <motion.div
          className="relative w-full h-[480px] md:h-[560px] rounded-[32px] overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              key={cat.images[imgIndex]}
              src={cat.images[imgIndex]}
              alt={cat.alt}
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

          {cat.images.length > 1 && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {cat.images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`عرض الصورة ${i + 1}`}
                  onClick={() => { setFade(false); setTimeout(() => { setImgIndex(i); setFade(true); }, 400); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === imgIndex ? 'bg-white w-5' : 'bg-white/40 w-2'}`}
                />
              ))}
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6">
              <p className="text-[#36C275] text-sm mb-1">{cat.tag}</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{cat.labelAr}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.subcategories.map((sub, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-white backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"
                  >
                    {sub.ar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          className="mt-6 rounded-[32px] bg-gradient-to-br from-[#34B472] to-[#47DF90] flex items-center justify-center overflow-hidden p-8 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-white">نزل التطبيق الآن</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-[240px] mx-auto">
              استكشف باقي المطاعم والأصناف المتوفرة في منطقتك
            </p>
           <a 
             href="#"
              aria-label="تحميل تطبيق Yammy Dz"
              className="mt-4 inline-block px-5 py-2 rounded-full bg-black/20 border border-white/20 text-white text-sm font-medium hover:bg-black/30 transition-all cursor-pointer"
            >
              تحميل التطبيق ←
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}