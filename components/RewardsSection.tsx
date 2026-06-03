'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const rewards = [
  { name: 'دراجة هوائية', image: '/gift1.jpg' },
  { name: 'قبعة', image: '/gift2.jpg' },
  { name: 'PlayStation', image: '/gift3.jpg' },
  { name: 'سيارة', image: '/gift4.jpg' },
  { name: 'AirPods', image: '/gift5.jpg' },
  { name: 'ساعة ذكية', image: '/gift6.jpg' },
  { name: 'سكوتر', image: '/gift13.jpg' },
  { name: 'حقيبة ظهر', image: '/gift8.jpg' },
  { name: 'iPhone', image: '/gift9.jpg' },
  { name: 'حاسوب محمول', image: '/gift10.jpg' },
  { name: 'Bluetooth Speaker', image: '/gift11.jpg' },
];

const CONFIG = {
  cardWidth: 190,          
  activeCardWidth: 210,    
  imageSize: 250,          
  sideImageSize: 130,      
  spacingX: 190,           
  spacingY: 55,            
  activeScale: 1.25,       
  maxVisibleDistance: 3, 
};

// تحديد زوايا الاندفاع لكل إيموجي (X, Y) خارج حدود البطاقة
const emojiVariants = {
  topLeft: { initial: { scale: 0, x: 0, y: 0, opacity: 0 }, animate: { scale: [0, 1.5, 1], x: -35, y: -35, opacity: [0, 1, 1, 0] } },
  topRight: { initial: { scale: 0, x: 0, y: 0, opacity: 0 }, animate: { scale: [0, 1.5, 1], x: 35, y: -35, opacity: [0, 1, 1, 0] } },
  bottomLeft: { initial: { scale: 0, x: 0, y: 0, opacity: 0 }, animate: { scale: [0, 1.5, 1], x: -35, y: 35, opacity: [0, 1, 1, 0] } },
  bottomRight: { initial: { scale: 0, x: 0, y: 0, opacity: 0 }, animate: { scale: [0, 1.5, 1], x: 35, y: 35, opacity: [0, 1, 1, 0] } },
};

export default function RewardsSection() {
  const [active, setActive] = useState(6);
const sectionRef = useRef(null);
const isInView = useInView(sectionRef, {
  once: true,
  amount: 0.2,
});
  const prev = () => setActive((p) => (p - 1 + rewards.length) % rewards.length);
  const next = () => setActive((p) => (p + 1) % rewards.length);

  return (
    <section className="py-36 bg-[#0F1720] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-[#34B472]/20 bg-[#34B472]/10 text-[#47DF90] text-sm mb-6">
            Yammy Rewards
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            استبدل نقاطك بـ
            <span className="bg-gradient-to-r from-[#34B472] to-[#47DF90] bg-clip-text text-transparent"> هدايا حقيقية</span>
          </h2>
        </div>

        <div className="relative h-[540px] flex items-center justify-center">
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#47DF90]/15 blur-[120px]" />

          {rewards.map((reward, index) => {
            const diff = index - active;
            let centeredDiff = diff % rewards.length;
            
            if (centeredDiff > rewards.length / 2) centeredDiff -= rewards.length;
            if (centeredDiff < -rewards.length / 2) centeredDiff += rewards.length;

            const distance = Math.abs(centeredDiff);
            const isActive = centeredDiff === 0;
            const isVisible = distance <= CONFIG.maxVisibleDistance;

            const x = centeredDiff * CONFIG.spacingX;
            const y = distance * CONFIG.spacingY;

            if (!isVisible) return null;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${isActive ? CONFIG.activeScale : 0.86 - distance * 0.09})`,
                  zIndex: 100 - distance,
                  opacity: isActive ? 1 : Math.max(0.25, 1 - distance * 0.25),
                }}
              >
                <div
                  className={`relative rounded-3xl border p-3 text-center transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#34B472] to-[#47DF90] border-transparent shadow-2xl shadow-[#47DF90]/60'
                      : 'bg-zinc-900/70 border-zinc-700'
                  }`}
                  style={{ width: isActive ? CONFIG.activeCardWidth : CONFIG.cardWidth }}
                >
                  {/* تأثير انبثاق، اندفاع، واختفاء الإيموجيات باستخدام AnimatePresence */}
                  <AnimatePresence mode="popLayout">
                    {isActive && (
                      <>
                        {/* زاوية علوية يسار */}
                        <motion.span
                          key={`tl-${active}`}
                          variants={emojiVariants.topLeft}
                          initial="initial"
                          animate="animate"
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="absolute top-0 left-0 text-2xl select-none pointer-events-none z-50"
                        >
                          🎉
                        </motion.span>
                        {/* زاوية علوية يمين */}
                        <motion.span
                          key={`tr-${active}`}
                          variants={emojiVariants.topRight}
                          initial="initial"
                          animate="animate"
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="absolute top-0 right-0 text-2xl select-none pointer-events-none z-50"
                        >
                          🥳
                        </motion.span>
                        {/* زاوية سفلية يسار */}
                        <motion.span
                          key={`bl-${active}`}
                          variants={emojiVariants.bottomLeft}
                          initial="initial"
                          animate="animate"
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="absolute bottom-0 left-0 text-2xl select-none pointer-events-none z-50"
                        >
                          ✨
                        </motion.span>
                        {/* زاوية سفلية يمين */}
                        <motion.span
                          key={`br-${active}`}
                          variants={emojiVariants.bottomRight}
                          initial="initial"
                          animate="animate"
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="absolute bottom-0 right-0 text-2xl select-none pointer-events-none z-50"
                        >
                          🎉
                        </motion.span>
                      </>
                    )}
                  </AnimatePresence>

                  <div className={`flex justify-center mb-2 ${isActive ? '-mt-20' : '-mt-16'}`}>
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="object-contain drop-shadow-2xl transition-all duration-500"
                      style={{
                        width: isActive ? `${CONFIG.imageSize}px` : `${CONFIG.sideImageSize}px`,
                        height: isActive ? `${CONFIG.imageSize}px` : `${CONFIG.sideImageSize}px`,
                      }}
                    />
                  </div>

                  <div className={`font-bold ${isActive ? 'text-lg' : 'text-sm'} min-h-[36px] flex items-center justify-center`}>
                    {reward.name}
                  </div>

                  {isActive && (
                    <div className="text-[11px] text-white/90 mt-2 animate-fade-in">
                      ⭐ متاح مع Yammy Stars
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <button onClick={prev} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors">
            <ChevronLeft size={26} />
          </button>
          <button onClick={next} className="w-14 h-14 rounded-full bg-gradient-to-r from-[#34B472] to-[#47DF90] flex items-center justify-center hover:opacity-90 transition-opacity">
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}