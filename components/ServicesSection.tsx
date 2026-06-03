'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'زيادة عدد الزبائن',
    desc: 'اجعل مطعمك يظهر أمام آلاف المستخدمين الباحثين عن أفضل أماكن الأكل في الجزائر.',
  },
  {
    title: 'نظام تقييم موثوق',
    desc: 'احصل على تقييمات حقيقية تساعدك على بناء الثقة وتحسين سمعة مطعمك.',
  },
 {
  title: 'تصنيف Yammy Stars',
  desc: 'ارتقِ في التصنيفات واحصل على نجوم مميزة تزيد من جاذبية مطعمك للعملاء.',
},
  {
    title: 'عروض وحملات تسويقية',
    desc: 'أنشئ عروضًا خاصة وحقق انتشارًا أكبر من خلال الحملات والإعلانات داخل التطبيق.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0F1720] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm mb-4"
          >
            لأصحاب المطاعم
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            لماذا تختار Yammy Dz؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            منصة متكاملة تمنح مطعمك الظهور والثقة والنمو الحقيقي
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">

          {/* LEFT CARDS */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:mt-24">
            {services.slice(0, 2).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-[360px] h-[480px] flex-shrink-0 hidden lg:flex items-center justify-center"
          >
            {/* GLOW CIRCLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute z-0"
              style={{
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: '#36C275',
                boxShadow:
                  '0 0 30px 12px rgba(54,194,117,0.55), 0 0 70px 30px rgba(54,194,117,0.25)',
              }}
            />

            {/* 3D PHONE (NO CHANGE) */}
            <div
              style={{ perspective: '1200px' }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div
                style={{
                  transform: 'rotateY(20deg) rotateX(10deg) rotateZ(-15deg)',
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(-15px 25px 35px rgba(0,0,0,0.65))',
                }}
              >
                <div
                  className="relative bg-[#1c1c1e] rounded-[44px] overflow-hidden"
                  style={{
                    width: '220px',
                    height: '440px',
                    border: '8px solid #3a3a3c',
                    boxShadow: 'inset 0 0 0 1px #555',
                  }}
                >
                  <Image
                    src="/screen3.png"
                    alt="شاشة التطبيق"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1c1c1e] rounded-full z-10" />
                </div>

                <div
                  className="absolute top-[8px] -right-[10px] bg-[#2a2a2c]"
                  style={{
                    width: '10px',
                    height: 'calc(100% - 16px)',
                    borderRadius: '0 8px 8px 0',
                    transform: 'rotateY(90deg) translateZ(-5px)',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:-mt-24">
            {services.slice(2, 4).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}