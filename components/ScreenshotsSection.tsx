'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const screenshots = [
  '/screenshots1.png',
  '/screenshots2.png',
  '/screenshots4.png',
  '/screenshots5.png',
  '/screenshots7.png',
  '/screenshots8.png',
  '/screenshots4.png',
  '/screenshots5.png',
  '/screenshots7.png',
  '/screenshots8.png',
  '/screenshots5.png',
  '/screenshots7.png',
  '/screenshots8.png',
];

export default function ScreenshotsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // مرجع لحساب قيود السحب في السلايدر الخاص بالهاتف
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // حساب المسافة القابلة للتمرير لمنع السلايدر من الخروج عن الشاشة عند السحب
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-[#0F1720] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          لمحة من التطبيق
        </h2>

        {/* السلايدر المتجاوب */}
        {/* في أجهزة الكمبيوتر (lg): يظهر كقائمة مرنة عادية مع تأثير الهوفر */}
        {/* في الهواتف: يتحول إلى سلايدر سحب ناعم جداً يدعم اللمس */}
        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing lg:cursor-default overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            // تفعيل السحب فقط على الشاشات الأصغر من lg (الكمبيوتر لا يحتاج سحب)
            dragListener={typeof window !== 'undefined' && window.innerWidth < 1024}
            className="flex gap-4 lg:justify-center w-max lg:w-full pb-8"
          >
            {screenshots.map((src, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 select-none"
                style={{
                  // في الهاتف نثبت العرض على 220px ليظهر السلايدر بشكل متناسق، وفي الكمبيوتر يعود للتأثير الأصلي
                  width: typeof window !== 'undefined' && window.innerWidth >= 1024 
                    ? (hoveredIndex === index ? '280px' : '60px') 
                    : '220px',
                  height: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '500px' : '400px',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover pointer-events-none" // منع افتراضيات المتصفح لتسهيل السحب
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* MODAL (NOT FULLSCREEN) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* modal box */}
            <motion.div
              className="relative bg-[#0F1720] rounded-3xl shadow-2xl p-4 w-[320px] md:w-[420px]"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white/70 hover:text-white z-20"
              >
                <X size={22} />
              </button>

              {/* image slider */}
              <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={screenshots[currentIndex]}
                      alt="preview"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* controls */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prev}
                  className="text-white/70 hover:text-white transition"
                >
                  <ChevronLeft />
                </button>

                <div className="text-white/50 text-sm">
                  {currentIndex + 1} / {screenshots.length}
                </div>

                <button
                  onClick={next}
                  className="text-white/70 hover:text-white transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}