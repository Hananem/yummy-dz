'use client';

import Image from 'next/image';
import { Smartphone, Download } from 'lucide-react';

export default function BannerSection() {
  return (
    <section className="py-24 bg-[#0F1720]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-6">

        <div className="relative bg-[#36C275] rounded-3xl overflow-visible min-h-[420px] flex items-center">

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 left-1/3 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

          {/* Content */}
          <div className="relative z-10 flex-1 px-12 py-12">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={18} className="text-white/70" />
              <p className="text-white/80 text-sm font-medium">
                متاح على Android و iOS
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              حمّل Yammy الآن
              <br />
              وابدأ رحلتك الغذائية
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
              اكتشف أفضل المطاعم، قيّم الأطباق، واحصل على مكافآت حقيقية مع كل تجربة.
            </p>

           <div className="flex items-center gap-3">
            <a href="#">
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={180}
                height={54}
                className="hover:opacity-90 transition"
              />
            </a>
          
            <a href="#">
              <Image
                      src="/toppng.com-download-on-the-app-store-badge-vector-400x400.png"
                      alt="App Store"
                      width={138}
                      height={39}
                      className="block"
                    />
            </a>
          </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative z-20 flex-shrink-0 px-16 hidden md:block">
            <div
              className="
                relative
                bg-[#1a1a2e]
                rounded-[42px]
                border-[8px]
                border-[#2a2a3e]
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                rotate-[-12deg]
                -translate-y-20
                hover:rotate-[-8deg]
                transition-transform
                duration-500
              "
              style={{
                width: '280px',
                height: '560px',
              }}
            >
              <Image
                src="/screen2.png"
                alt="Yammy App"
                fill
                className="object-cover"
                priority
              />

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a2e] rounded-full z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}