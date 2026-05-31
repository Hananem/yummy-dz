'use client';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';

const leftDishes = [
  { src: '/hero1.png', size: 130, top: '8%',  left: '0%',  floatDelay: 0,   floatDur: 6   },
  { src: '/hero2.png', size: 110, top: '27%', left: '4%',  floatDelay: 1.5, floatDur: 7   },
  { src: '/hero3.png', size: 155, top: '50%', left: '-2%', floatDelay: 0.8, floatDur: 8   },
  { src: '/hero4.png', size: 120, top: '70%', left: '6%',  floatDelay: 2,   floatDur: 6.5 },
  { src: '/hero5.png', size: 100, top: '86%', left: '2%',  floatDelay: 1,   floatDur: 7.5 },
];

const rightDishes = [
  { src: '/hero3.png', size: 140, top: '6%',  right: '0%',  floatDelay: 0.5, floatDur: 7   },
  { src: '/hero5.png', size: 115, top: '24%', right: '4%',  floatDelay: 1.8, floatDur: 6   },
  { src: '/hero1.png', size: 150, top: '47%', right: '-2%', floatDelay: 1.2, floatDur: 8.5 },
  { src: '/hero7.png', size: 110, top: '67%', right: '5%',  floatDelay: 0.3, floatDur: 7   },
  { src: '/hero6.png', size: 125, top: '83%', right: '1%',  floatDelay: 2.2, floatDur: 6.5 },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function useSmoothScroll(ref: React.RefObject<HTMLElement | null>, output: [number, number]) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const raw = useTransform(scrollYProgress, [0, 1], output);
  return useSpring(raw, { stiffness: 45, damping: 18, mass: 0.8 });
}

function SplitReveal({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className} style={{ display: 'inline' }}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            paddingBottom: '0.2em',
            marginBottom: '-0.2em',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '115%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: delay + i * 0.07, duration: 0.85, ease: EASE }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const phonesRef  = useRef<HTMLDivElement>(null);

  const isInView     = useInView(sectionRef, { once: true, amount: 0.15 });
  const phonesInView = useInView(phonesRef,  { once: true, amount: 0.25 });

  const dishesY  = useSmoothScroll(sectionRef, [0, -160]);
  const phonesY  = useSmoothScroll(sectionRef, [0, -60]);
  const contentY = useSmoothScroll(sectionRef, [0, -30]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const glowScale = useTransform(scrollYProgress, [0, 0.6], [1, 2.2]);

  const dishEnter = (side: 'left' | 'right', i: number) => ({
    initial: {
      opacity: 0, scale: 0.4,
      x: side === 'left' ? -200 : 200,
      rotate: side === 'left' ? -25 : 25,
    },
    animate: isInView
      ? { opacity: 0.82, scale: 1, x: 0, rotate: 0 }
      : { opacity: 0, scale: 0.4, x: side === 'left' ? -200 : 200, rotate: side === 'left' ? -25 : 25 },
    transition: { delay: 0.3 + i * 0.11, duration: 1.3, ease: EASE },
  });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden min-h-screen">

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33%      { transform: translateY(-18px) rotate(2.5deg) scale(1.03); }
          66%      { transform: translateY(9px) rotate(-2deg) scale(0.98); }
        }
        .dish-shell {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          box-shadow: 0 12px 40px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(255,255,255,0.09);
        }
        .dish-inner { width: 100%; height: 100%; animation: float ease-in-out infinite; }
        @keyframes ring-pulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50%      { transform: scale(1.18); opacity: 0.2; }
        }
      `}</style>

      {/* background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: glowScale, transformOrigin: 'center 60%' }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '30%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(54,194,117,0.13) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* floating dish images */}
      <motion.div style={{ y: dishesY }} className="absolute inset-0 pointer-events-none">
        {leftDishes.map((img, i) => (
          <motion.div
            key={`l-${i}`}
            className="dish-shell"
            style={{ width: img.size, height: img.size, top: img.top, left: img.left }}
            {...dishEnter('left', i)}
          >
            <div className="dish-inner" style={{ animationDelay: `${img.floatDelay}s`, animationDuration: `${img.floatDur}s` }}>
              <Image src={img.src} alt="" fill className="object-cover" />
            </div>
          </motion.div>
        ))}
        {rightDishes.map((img, i) => (
          <motion.div
            key={`r-${i}`}
            className="dish-shell"
            style={{ width: img.size, height: img.size, top: img.top, right: img.right }}
            {...dishEnter('right', i)}
          >
            <div className="dish-inner" style={{ animationDelay: `${img.floatDelay}s`, animationDuration: `${img.floatDur}s` }}>
              <Image src={img.src} alt="" fill className="object-cover" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* main content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center px-6 pt-16 pb-8"
      >

        {/* badge */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
        >
          <span className="relative flex items-center justify-center w-4 h-4">
            <span className="absolute rounded-full bg-[#36C275]" style={{ width: 16, height: 16, animation: 'ring-pulse 2.2s ease-in-out infinite' }} />
            <span className="relative w-3 h-3 rounded-full bg-[#36C275]" />
          </span>
          <p className="text-sm tracking-widest uppercase text-gray-400 font-medium">
            Yammy Dz — Food Discovery App
          </p>
        </motion.div>

        {/* headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] max-w-3xl mb-0" dir="rtl">
          <SplitReveal text="أفضل المطاعم والطهاة في الجزائر" delay={0.2} />
          <br />
          <SplitReveal text="داخل تطبيق واحد" delay={0.65} className="text-[#36C275]" />
        </h1>

        {/* subtitle */}
        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mt-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.9, ease: EASE }}
          dir="rtl"
        >
          اكتشف، قيّم، واربح نقاط وهدايا حقيقية مع نظام{' '}
          <motion.span
            className="text-[#E6B325] font-bold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Yammy Stars ⭐
          </motion.span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
          }}
        >
          {[
            { label: 'تحميل من Google Play', cls: 'bg-[#36C275] shadow-[0_8px_32px_rgba(54,194,117,0.35)]' },
            { label: 'App Store',             cls: 'bg-white text-black' },
            { label: 'سجل مطعمك الآن',       cls: 'border border-[#F04D43] text-[#F04D43]' },
          ].map((btn, i) => (
            <motion.button
              key={i}
              className={`${btn.cls} px-7 py-3 rounded-2xl font-semibold text-sm tracking-wide transition-all`}
              variants={{
                hidden: { opacity: 0, scale: 0.75, y: 16 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
              }}
              whileHover={{
                scale: 1.07, y: -4,
                boxShadow: i === 0
                  ? '0 16px 40px rgba(54,194,117,0.45)'
                  : i === 2
                    ? '0 8px 24px rgba(240,77,67,0.3)'
                    : '0 8px 24px rgba(255,255,255,0.15)',
                transition: { type: 'spring', stiffness: 360, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* phones */}
        <motion.div
          ref={phonesRef}
          style={{ y: phonesY }}
          className="relative flex items-end justify-center gap-4 mt-10 flex-wrap"
        >
          {/* glow blob */}
          <motion.div
            className="absolute pointer-events-none"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{
              width: 560, height: 320,
              left: '50%', top: '40%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(54,194,117,0.22) 0%, transparent 70%)',
              filter: 'blur(60px)',
              scale: glowScale,
            }}
          />

          {/* phone left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 120, rotate: -22, x: -40 }}
            animate={phonesInView ? { opacity: 1, y: 0, rotate: -11, x: 0 } : { opacity: 0, y: 120, rotate: -22, x: -40 }}
            transition={{ delay: 0.15, duration: 1.3, ease: EASE }}
            whileHover={{ y: -14, rotate: -7, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
            style={{ cursor: 'pointer', transformOrigin: 'bottom center' }}
          >
            <Image src="/screen1.png" alt="Yammy Screen 1" width={200} height={400} className="rounded-[28px] shadow-2xl border border-white/10" />
            <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)' }} />
          </motion.div>

          {/* phone center */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 140, scale: 0.75 }}
            animate={phonesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 140, scale: 0.75 }}
            transition={{ delay: 0, duration: 1.4, ease: EASE }}
            whileHover={{ y: -18, scale: 1.04, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
            style={{ cursor: 'pointer' }}
          >
            <Image src="/screen2.png" alt="Yammy Screen 2" width={230} height={460} className="rounded-[34px] shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/10" />
            <div className="absolute inset-0 rounded-[34px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }} />
            <motion.div
              className="absolute -top-5 right-4 bg-[#E6B325] text-black px-4 py-2 rounded-full text-sm font-black shadow-xl shadow-[#E6B325]/30"
              initial={{ opacity: 0, scale: 0.3, y: 20, rotate: -15 }}
              animate={phonesInView ? { opacity: 1, scale: 1, y: 0, rotate: 0 } : { opacity: 0, scale: 0.3, y: 20, rotate: -15 }}
              transition={{ delay: 1.1, duration: 0.65, type: 'spring', stiffness: 400, damping: 18 }}
            >
              Yammy Stars ⭐
            </motion.div>
          </motion.div>

          {/* phone right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 120, rotate: 22, x: 40 }}
            animate={phonesInView ? { opacity: 1, y: 0, rotate: 11, x: 0 } : { opacity: 0, y: 120, rotate: 22, x: 40 }}
            transition={{ delay: 0.15, duration: 1.3, ease: EASE }}
            whileHover={{ y: -14, rotate: 7, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
            style={{ cursor: 'pointer', transformOrigin: 'bottom center' }}
          >
            <Image src="/screen3.png" alt="Yammy Screen 3" width={200} height={400} className="rounded-[28px] shadow-2xl border border-white/10" />
            <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)' }} />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}