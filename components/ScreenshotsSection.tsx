'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  easeOut,
  type Variants,
} from 'framer-motion';

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
  '/screenshots4.png',
  '/screenshots5.png',
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function ScreenshotsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const VISIBLE = 4;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextModal = () => {
    setCurrentIndex((p) => (p + 1) % screenshots.length);
  };

  const prevModal = () => {
    setCurrentIndex((p) =>
      p === 0 ? screenshots.length - 1 : p - 1
    );
  };

  const nextMobile = () => {
    setMobileIndex((p) =>
      p + VISIBLE >= screenshots.length ? 0 : p + 1
    );
  };

  const prevMobile = () => {
    setMobileIndex((p) =>
      p === 0 ? screenshots.length - VISIBLE : p - 1
    );
  };

  const mobileVisible = screenshots.slice(
    mobileIndex,
    mobileIndex + VISIBLE
  );

  return (
    <section className="py-20 bg-[#0F1720] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          لمحة من التطبيق
        </motion.h2>

        {/* ================= DESKTOP ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:flex gap-3 justify-center pb-8"
        >
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              onClick={() => openModal(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
              style={{
                width: hoveredIndex === index ? '280px' : '60px',
                height: '500px',
              }}
            >
              {/* ✅ alt واضح */}
              <Image
                src={src}
                alt={`لقطة شاشة من تطبيق Yammy Dz ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= MOBILE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden relative flex items-center justify-center gap-2"
        >
          {/* ✅ aria-label */}
          <button
            onClick={prevMobile}
            aria-label="الصورة السابقة"
            className="z-10 bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-2">
            {mobileVisible.map((src, index) => (
              <div
                key={index}
                onClick={() => openModal(index + mobileIndex)}
                className="relative w-[70px] h-[260px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* ✅ alt واضح */}
                <Image
                  src={src}
                  alt={`لقطة شاشة من تطبيق Yammy Dz ${index + mobileIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* ✅ aria-label */}
          <button
            onClick={nextMobile}
            aria-label="الصورة التالية"
            className="z-10 bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </motion.div>

      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#0F1720] rounded-3xl shadow-2xl p-4 w-[320px] md:w-[420px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* ✅ aria-label */}
              <button
                onClick={closeModal}
                aria-label="إغلاق"
                className="absolute top-3 right-3 text-white/70 hover:text-white"
              >
                <X size={22} />
              </button>

              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* ✅ alt واضح */}
                    <Image
                      src={screenshots[currentIndex]}
                      alt={`لقطة شاشة من تطبيق Yammy Dz ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between mt-4">
                {/* ✅ aria-label */}
                <button onClick={prevModal} aria-label="الصورة السابقة">
                  <ChevronLeft className="text-white/70" />
                </button>

                <div className="text-white/50 text-sm">
                  {currentIndex + 1} / {screenshots.length}
                </div>

                {/* ✅ aria-label */}
                <button onClick={nextModal} aria-label="الصورة التالية">
                  <ChevronRight className="text-white/70" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}