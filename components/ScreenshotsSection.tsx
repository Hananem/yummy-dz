'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  '/screenshots4.png',
  '/screenshots5.png',
];

export default function ScreenshotsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // mobile slider index
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

  // mobile arrows control
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
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          لمحة من التطبيق
        </h2>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex gap-3 justify-center pb-8">
          {screenshots.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
              style={{
                width: hoveredIndex === index ? '280px' : '60px',
                height: '500px',
              }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* ================= MOBILE (ARROWS ONLY) ================= */}
        <div className="md:hidden relative flex items-center justify-center gap-2">
          
          {/* left arrow */}
          <button
            onClick={prevMobile}
            className="z-10 bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* 4 images */}
          <div className="flex gap-2">
            {mobileVisible.map((src, index) => (
              <div
                key={index}
                onClick={() => openModal(index + mobileIndex)}
                className="relative w-[70px] h-[260px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* right arrow */}
          <button
            onClick={nextMobile}
            className="z-10 bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
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
              {/* close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white/70 hover:text-white"
              >
                <X size={22} />
              </button>

              {/* image */}
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                  >
                    <Image
                      src={screenshots[currentIndex]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* controls */}
              <div className="flex justify-between mt-4">
                <button onClick={prevModal}>
                  <ChevronLeft className="text-white/70" />
                </button>

                <div className="text-white/50 text-sm">
                  {currentIndex + 1} / {screenshots.length}
                </div>

                <button onClick={nextModal}>
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