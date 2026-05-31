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
  '/screenshots8.png','/screenshots4.png',
  '/screenshots5.png',
  '/screenshots7.png',
  '/screenshots8.png','/screenshots5.png',
  '/screenshots7.png',
  '/screenshots8.png',
];

export default function ScreenshotsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="py-20 bg-[#0F1720]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          لمحة من التطبيق
        </h2>

        {/* thumbnails */}
        <div className="flex gap-3 justify-center overflow-x-auto pb-8 scrollbar-hide">
          {screenshots.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
              style={{
                width: hoveredIndex === index ? '280px' : '60px',
                height: '500px',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
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
                className="absolute top-3 right-3 text-white/70 hover:text-white"
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