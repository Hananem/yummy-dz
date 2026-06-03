'use client';

import Image from 'next/image';
import { motion, type Variants, easeOut } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export default function RewardsSection() {
  return (
    <section
      id="yammy-stars"
      className="py-32 bg-[#0F1720] text-white overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION 1 ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 xl:gap-36 mb-32"
        >

          {/* IMAGE LEFT */}
          <motion.div
            variants={imageAnim}
            className="relative flex justify-center"
          >
            <div className="relative flex-shrink-0" style={{ width: '320px', height: '580px' }}>
              <div className="absolute inset-0 bg-[#34B472]" />

              <motion.div
                variants={item}
                className="absolute"
                style={{ top: '60px', left: '-50px', zIndex: 10 }}
              >
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero1.png" alt="طبق 1" width={140} height={140} className="object-cover" />
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="absolute"
                style={{ top: '40px', left: '80px', zIndex: 10 }}
              >
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero2.png" alt="طبق 2" width={120} height={120} className="object-cover" />
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="absolute"
                style={{ top: '170px', left: '10px', zIndex: 10 }}
              >
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero3.png" alt="طبق 3" width={160} height={160} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div variants={container} className="text-right space-y-6">
            <motion.div variants={item} className="inline-block px-3 py-1 rounded-full bg-[#36C275]/10 border border-[#36C275]/30 text-[#36C275] text-sm">
              للمستخدمين
            </motion.div>

            <motion.h3 variants={item} className="text-3xl md:text-5xl font-bold leading-tight">
              اجمع النقاط، نقاطك = هداياك 🎁
              <br />
              <span className="text-[#47DF90]">واحصل على شارات مميزة 🏅</span>
            </motion.h3>

            <motion.div variants={container} className="flex flex-col gap-3">
              {[
                { icon: '✍️', title: 'قيّم المطاعم', desc: 'شاركنا رأيك واكسب نقاطاً لكل تقييم', badge: null, yellow: false },
                { icon: '👥', title: 'دعوة الأصدقاء', desc: 'ادعُ أصدقاءك واحصل على نقاط إضافية', badge: '+50 نقطة', yellow: false },
                { icon: '🏅', title: 'اجمع الشارات', desc: 'كلما تفاعلت أكثر، حصلت على شارات أعلى مستوى', badge: 'حصري', yellow: true },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className={`bg-[#1A2535] border rounded-2xl p-4 ${i === 1 ? 'border-[#36C275]/30' : 'border-white/10'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${card.yellow ? 'bg-yellow-400/10' : 'bg-[#36C275]/10'}`}>
                      {card.icon}
                    </div>

                    <div className="text-right flex-1">
                      <h4 className="font-bold text-sm mb-0.5">{card.title}</h4>
                      <p className="text-gray-400 text-xs">{card.desc}</p>
                    </div>

                    {card.badge && (
                      <div className={`px-2 py-1 rounded-full border text-xs flex-shrink-0 ${
                        card.yellow
                          ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
                          : 'bg-[#36C275]/10 border-[#36C275]/30 text-[#36C275]'
                      }`}>
                        {card.badge}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= SECTION 2 ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 xl:gap-36 mb-32"
        >

          {/* TEXT LEFT */}
          <motion.div variants={container} className="text-right space-y-6 order-2 lg:order-1">

            <motion.div variants={item} className="inline-block px-3 py-1 rounded-full bg-[#36C275]/10 border border-[#36C275]/30 text-[#36C275] text-sm">
              للمطاعم
            </motion.div>

            <motion.h3 variants={item} className="text-3xl md:text-5xl font-bold leading-tight">
              اجمع النجوم وارتقِ في التصنيفات
              <br />
              <span className="text-[#E63946]">واحصل على شارة Yammy Stars ⭐</span>
            </motion.h3>

            <motion.div variants={container} className="flex flex-col gap-3">

              {[
                { icon: '🏆', title: 'جودة الخدمة', desc: 'معدل رضا الزبائن', value: '98%' },
                { icon: '⭐', title: 'تقييمات العملاء', desc: 'متوسط التقييم العام', value: '★★★★★' },
                { icon: '🌟', title: 'مطعم موصى به', desc: 'Yammy Premium', value: '' },
              ].map((card, i) => (
                <motion.div key={i} variants={item} className="bg-[#1A2535] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#36C275]/10 flex items-center justify-center text-lg flex-shrink-0">
                      {card.icon}
                    </div>

                    <div className="text-right flex-1">
                      <h4 className="font-bold text-sm mb-0.5">{card.title}</h4>
                      <p className="text-gray-400 text-xs">{card.desc}</p>
                    </div>

                    <div className="flex-shrink-0 text-[#36C275] font-bold">
                      {card.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* RED BLOCK RIGHT */}
          <motion.div variants={imageAnim} className="relative flex justify-end order-1 lg:order-2">
            <div className="relative flex-shrink-0" style={{ width: '200px', height: '580px' }}>
              <div className="absolute inset-0 bg-[#E63946]" />

             <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="absolute top-1/2 -translate-y-1/2 right-[-55px] z-10"
>
                <div className="relative bg-[#1a1a2e] rounded-[36px] border-[6px] border-[#2a2a3e] overflow-hidden shadow-2xl"
                  style={{ width: '210px', height: '420px' }}
                >
                  <Image src="/screen1.png" alt="App Screen" fill className="object-cover" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a2e] rounded-full z-10" />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}