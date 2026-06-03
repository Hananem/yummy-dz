'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const viewport = { once: true, margin: '-100px' };

  return (
    <section id="about" className="py-24 px-6 bg-[#0F1720] text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* RIGHT SIDE TEXT */}
        <div className="w-full lg:w-1/2 space-y-6 text-right">

          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            من نحن
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            تجربة مطاعم جزائرية
            <span className="text-[#36C275]"> عصرية وفاخرة </span>
            داخل تطبيق واحد
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base leading-relaxed"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Yammy Dz ليس مجرد تطبيق مطاعم عادي، بل منصة متكاملة تساعدك على
            اكتشاف أفضل المطاعم والمقاهي في الجزائر، تقييم تجاربك، وجمع نقاط
            ومكافآت حقيقية عبر نظام
            <span className="text-[#E6B325] font-semibold"> Yammy Stars ⭐</span>.
          </motion.p>

          <motion.p
            className="text-gray-400 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.42 }}
          >
            نهدف إلى بناء مجتمع Food Lovers جزائري حديث يجمع بين جودة المطاعم،
            التقييمات الحقيقية، وتجربة استخدام فاخرة مستوحاة من أفضل تطبيقات
            العالم.
          </motion.p>
        </div>

        {/* LEFT SIDE IMAGES */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center" style={{ height: '480px' }}>

          {/* خلفية دائرية */}
          {/* خلفية دائرية */}
<motion.div
  className="absolute rounded-full bg-[#36C275]/15"
  style={{ width: '340px', height: '340px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
/>

         {/* هاتف كبير — الخلف */}
<motion.div
  className="absolute z-10"
  style={{ top: '20px', left: '50%', transform: 'translateX(-20%)' }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
>
  <Image
    src="/screen1.png"
    alt="Yammy App"
    width={200}
    height={400}
    className="rounded-[28px] shadow-2xl border border-white/10"
  />
</motion.div>

{/* هاتف صغير — الأمام أسفل اليسار */}
<motion.div
  className="absolute z-20"
  style={{ bottom: '10px', left: '50%', transform: 'translateX(-90%)' }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
>
  <Image
    src="/screen2.png"
    alt="Yammy Rewards"
    width={160}
    height={320}
    className="rounded-[22px] shadow-2xl border border-white/10"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
}