'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const rewards = [
  { name: 'سماعات AirPods', image: '/gift1.jpg' },
  { name: 'ساعة ذكية', image: '/gift2.jpg' },
  { name: 'هاتف iPhone', image: '/gift3.jpg' },
  { name: 'جهاز PlayStation 5', image: '/gift4.jpg' },
  { name: 'حاسوب محمول', image: '/gift5.jpg' },
  { name: 'حقيبة ظهر', image: '/gift6.jpg' },
  { name: 'سكوتر', image: '/gift7.jpg' },
  { name: 'دراجة هوائية', image: '/gift8.jpg' },
  { name: 'سيارة', image: '/gift9.jpg' },
  { name: 'قمصان', image: '/gift10.jpg' },
  { name: 'قبعات', image: '/gift11.jpg' },
  { name: 'دعوة إلى مطعم', image: '/gift12.jpg' },
];

const CONFIG = {
  cardWidth: 158,
  activeCardWidth: 172,
  imageSize: 185,
  sideImageSize: 90,
  spacingX: 152,
  spacingY: 50,
  activeScale: 1.23,
  maxVisibleDistance: 3,     // عدد العناصر المرئية من كل جانب
};

export default function RewardsSection() {
  const [active, setActive] = useState(6);

  const prev = () => setActive((p) => (p - 1 + rewards.length) % rewards.length);
  const next = () => setActive((p) => (p + 1) % rewards.length);

  return (
    <section className="py-32 bg-[#0F1720] text-white overflow-hidden">
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

        <div className="relative h-[560px] flex items-center justify-center">
          <div className="absolute w-[380px] h-[380px] rounded-full bg-[#47DF90]/15 blur-[110px]" />

          {rewards.map((reward, index) => {
            const diff = index - active;
            let centeredDiff = diff % rewards.length;
            
            // تحسين حساب المسافة لتقليل القفزة
            if (centeredDiff > rewards.length / 2) centeredDiff -= rewards.length;
            if (centeredDiff < -rewards.length / 2) centeredDiff += rewards.length;

            const distance = Math.abs(centeredDiff);
            const isActive = centeredDiff === 0;
            const isVisible = distance <= CONFIG.maxVisibleDistance;

            const x = centeredDiff * CONFIG.spacingX;
            const y = distance * CONFIG.spacingY;

            if (!isVisible) return null; // إخفاء كامل للعناصر البعيدة (يمنع القفز)

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
                  className={`rounded-3xl border p-3 text-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-[#34B472] to-[#47DF90] border-transparent shadow-2xl shadow-[#47DF90]/60'
                      : 'bg-zinc-900/70 border-zinc-700'
                  }`}
                  style={{ width: isActive ? CONFIG.activeCardWidth : CONFIG.cardWidth }}
                >
                  <div className="flex justify-center -mt-10 mb-3">
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className={`object-contain drop-shadow-2xl transition-all ${
                        isActive 
                          ? `w-[${CONFIG.imageSize}px] h-[${CONFIG.imageSize}px]` 
                          : `w-[${CONFIG.sideImageSize}px] h-[${CONFIG.sideImageSize}px]`
                      }`}
                    />
                  </div>

                  <div className={`font-bold ${isActive ? 'text-lg' : 'text-sm'} min-h-[44px]`}>
                    {reward.name}
                  </div>

                  {isActive && (
                    <div className="text-xs text-white/90 mt-3">
                      ⭐ متاح مع Yammy Stars
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button onClick={prev} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center">
            <ChevronLeft size={26} />
          </button>
          <button onClick={next} className="w-14 h-14 rounded-full bg-gradient-to-r from-[#34B472] to-[#47DF90] flex items-center justify-center">
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}