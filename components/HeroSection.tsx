'use client';
import Image from 'next/image';

const leftDishes = [
  { src: '/hero1.png', size: 130, top: '8%',  left: '0%',  delay: '0s',   duration: '6s'  },
  { src: '/hero2.png', size: 110, top: '25%', left: '5%',  delay: '1.5s', duration: '7s'  },
  { src: '/hero3.png', size: 155, top: '48%', left: '-1%', delay: '0.8s', duration: '8s'  },
  { src: '/hero4.png', size: 120, top: '68%', left: '7%',  delay: '2s',   duration: '6.5s'},
  { src: '/hero5.png', size: 100, top: '85%', left: '2%',  delay: '1s',   duration: '7.5s'},
];

const rightDishes = [
  { src: '/hero3.png', size: 140, top: '6%',  right: '0%',  delay: '0.5s', duration: '7s'  },
  { src: '/hero5.png', size: 115, top: '22%', right: '5%',  delay: '1.8s', duration: '6s'  },
  { src: '/hero1.png', size: 150, top: '45%', right: '-1%', delay: '1.2s', duration: '8.5s'},
  { src: '/hero7.png', size: 110, top: '65%', right: '6%',  delay: '0.3s', duration: '7s'  },
  { src: '/hero6.png', size: 125, top: '82%', right: '1%',  delay: '2.2s', duration: '6.5s'},
];
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(2deg); }
          66%       { transform: translateY(7px) rotate(-2deg); }
        }
        .dish-float {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          animation: float ease-in-out infinite;
          opacity: 0.8;
          box-shadow: 0 8px 32px rgba(0,0,0,0.45);
          border: 2px solid rgba(255,255,255,0.08);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      {/* صور اليسار */}
      {leftDishes.map((img, i) => (
        <div
          key={`l-${i}`}
          className="dish-float"
          style={{
            width: img.size,
            height: img.size,
            top: img.top,
            left: img.left,
            animationDelay: img.delay,
            animationDuration: img.duration,
          }}
        >
          <Image src={img.src} alt="" fill className="object-cover" />
        </div>
      ))}

      {/* صور اليمين */}
      {rightDishes.map((img, i) => (
        <div
          key={`r-${i}`}
          className="dish-float"
          style={{
            width: img.size,
            height: img.size,
            top: img.top,
            right: img.right,
            animationDelay: img.delay,
            animationDuration: img.duration,
          }}
        >
          <Image src={img.src} alt="" fill className="object-cover" />
        </div>
      ))}

      {/* المحتوى الرئيسي - كاملاً كما كان */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center px-6 py-20">

        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#36C275] shadow-[0_0_12px_#36C275]" />
          <p className="text-sm text-gray-300">Yammy Dz — Food Discovery App</p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          أفضل المطاعم والطهاة في الجزائر داخل تطبيق واحد
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mt-6">
          اكتشف، قيّم، واربح نقاط وهدايا حقيقية مع نظام
          <span className="text-[#E6B325] font-semibold"> Yammy Stars ⭐</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button className="bg-[#36C275] hover:brightness-110 transition px-6 py-3 rounded-2xl font-medium shadow-lg shadow-[#36C275]/20">
            تحميل من Google Play
          </button>
          <button className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-2xl font-medium">
            App Store
          </button>
          <button className="border border-[#F04D43] text-[#F04D43] hover:bg-[#F04D43] hover:text-white transition px-6 py-3 rounded-2xl font-medium">
            سجل مطعمك الآن
          </button>
        </div>

        {/* الصور الثلاث - محفوظة كما كانت */}
        <div className="relative flex items-center justify-center gap-6 mt-20 flex-wrap">
          {/* neon glow */}
          <div className="absolute w-[500px] h-[300px] bg-[#36C275] blur-[150px] opacity-20 rounded-full" />

          <div className="relative rotate-[-10deg] hover:rotate-[-6deg] transition duration-300">
            <Image
              src="/screen1.png"
              alt="Yammy Screen 1"
              width={260}
              height={520}
              className="rounded-[32px] shadow-2xl border border-white/10"
            />
          </div>

          <div className="relative z-10 scale-110">
            <Image
              src="/screen2.png"
              alt="Yammy Screen 2"
              width={300}
              height={600}
              className="rounded-[36px] shadow-2xl border border-white/10"
            />
            <div className="absolute -top-4 right-6 bg-[#E6B325] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Yammy Stars ⭐
            </div>
          </div>

          <div className="relative rotate-[10deg] hover:rotate-[6deg] transition duration-300">
            <Image
              src="/screen3.png"
              alt="Yammy Screen 3"
              width={260}
              height={520}
              className="rounded-[32px] shadow-2xl border border-white/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}