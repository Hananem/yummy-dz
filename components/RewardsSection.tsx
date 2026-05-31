'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const rewards = [
  { name: 'AirPods', image: '/gift1.png' },
  { name: 'Smart Watch', image: '/gift2.png' },
  { name: 'iPhone', image: '/gift3.png' },
  { name: 'T-shirts', image: '/gift4.png' },
  { name: 'Casquettes', image: '/gift5.png' },
  { name: 'Bons d’achat', image: '/gift6.png' },
  { name: 'Invitations Restaurants', image: '/gift1.png' },
];

export default function RewardsSection() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((prev) => (prev - 1 + rewards.length) % rewards.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % rewards.length);
  };

  return (
    <section className="py-32 bg-[#0F1720] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 rounded-full border border-[#34B472]/20 bg-[#34B472]/10 text-[#47DF90] text-sm mb-6">
            Yammy Rewards
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            استبدل نقاطك بـ
            <span className="bg-gradient-to-r from-[#34B472] to-[#47DF90] bg-clip-text text-transparent">
              {' '}هدايا حقيقية
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            اجمع Yammy Stars واستمتع بهدايا ومكافآت حقيقية من شركائنا.
          </p>
        </div>

        {/* Rewards Arc */}
        <div className="relative h-[450px] flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-[#47DF90]/20 blur-[120px]" />

          {rewards.map((reward, index) => {
            const total = rewards.length;

            const relativeIndex = (index - active + total) % total;

            const centeredIndex =
              relativeIndex > total / 2
                ? relativeIndex - total
                : relativeIndex;

            // حساب الإحداثيات
            const x = centeredIndex * 190; // زدت المسافة قليلاً لمنع التداخل العنيف
            const y = Math.abs(centeredIndex) * 55;

            const isActive = centeredIndex === 0;
            
            // حساب المسافة عن المركز (0 يعني في المنتصف تماماً، 1 يعني خطوة واحدة يمين أو يسار.. وهكذا)
            const distanceFromCenter = Math.abs(centeredIndex);

            // إخفاء العناصر التي تقفز في الخلف تماماً لمنع التشوه البصري
            const isHidden = distanceFromCenter > 2; 

            // ترتيب الطبقات: كلما كان قريب للمنتصف يكون z-index أعلى
            const zIndex = 50 - distanceFromCenter * 10;

            return (
              <div
                key={reward.name}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: zIndex,
                }}
              >
                <div
                  className={`
                    relative rounded-3xl px-8 py-10 border transition-all duration-750 overflow-visible w-[220px]
                    ${
                      isActive
                        ? 'scale-125 bg-gradient-to-br from-[#34B472] to-[#47DF90] border-transparent shadow-[0_0_80px_rgba(71,223,144,.6)] opacity-100'
                        : isHidden 
                        ? 'scale-50 opacity-0 pointer-events-none' // اختفاء ناعم للعنصر القافز خلف الكواليس
                        : 'scale-90 bg-white/5 border-white/10 opacity-40 hover:opacity-70'
                    }
                  `}
                >
                  {/* IMAGE */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="w-32 h-32 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="relative z-10 text-center mt-8">
                    <div className="text-xl font-bold truncate">
                      {reward.name}
                    </div>

                    {isActive && (
                      <div className="mt-2 text-xs text-white/90 whitespace-nowrap">
                        Disponible avec Yammy Stars ⭐
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#34B472] to-[#47DF90] flex items-center justify-center shadow-[0_0_40px_rgba(71,223,144,.4)]"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}