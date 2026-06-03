'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const testimonials = [
  {
    name: 'أمين بوزيد',
    role: 'زبون دائم',
    city: 'الجزائر العاصمة',
    avatar: '🧑‍🍳',
    rating: 5,
    text: 'أخيراً تطبيق يفهم ذوقي! اكتشفت مطاعم ما كنت نعرفها وكسبت نجوم بسرعة. Yammy Dz غيّر طريقة أكلي برا.',
  },
  {
    name: 'سارة مزياني',
    role: 'محبة الطعام',
    city: 'وهران',
    avatar: '👩‍💼',
    rating: 5,
    text: 'التقييمات حقيقية ومفيدة، مش كيف التطبيقات الأخرى. ونظام Yammy Stars حماسني نقيّم كل مرة!',
  },
  {
    name: 'كريم حداد',
    role: 'صاحب مطعم',
    city: 'قسنطينة',
    avatar: '🍽️',
    rating: 5,
    text: 'من وقت سجلت مطعمي، زاد عدد الزبائن بشكل واضح. الواجهة سهلة وفريق الدعم سريع الاستجابة.',
  },
  {
    name: 'ياسمين بلحاج',
    role: 'مدوّنة طعام',
    city: 'عنابة',
    avatar: '📸',
    rating: 5,
    text: 'كتطبيق food blogger، Yammy Dz هو المنصة المثالية لمشاركة تجاربي وبناء متابعين يحبون الأكل الجزائري.',
  },
  {
    name: 'رضا بن علي',
    role: 'زبون',
    city: 'تيزي وزو',
    avatar: '👨‍💻',
    rating: 5,
    text: 'بسيط، سريع، وفيه كل المطاعم القريبة مني. النجوم اللي كسبتهم استبدلتهم بخصم حقيقي — هذا مش عادي!',
  },
  {
    name: 'نور الهدى',
    role: 'طالبة جامعية',
    city: 'سطيف',
    avatar: '🎓',
    rating: 5,
    text: 'حتى بميزانية محدودة، Yammy Dz يساعدني نلقى أحسن عروض. التطبيق فاهم الشباب الجزائري.',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  // desktop: 3 cards, mobile: 1 card only
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const visible = isMobile
    ? [active]
    : [0, 1, 2].map((offset) => (active + offset) % total);

  return (
    <section className="py-28 text-white" dir="rtl">
      {/* header */}
      <div className="text-center mb-16 px-6">
        <div className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm mb-4">
          آراء المستخدمين
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          ماذا يقولون عنّا
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          آلاف الجزائريين يثقون في Yammy Dz يومياً
        </p>
      </div>

      {/* cards */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 0;

            return (
              <div
                key={`${idx}-${pos}`}
                onClick={() => goTo(idx)}
                className={`cursor-pointer rounded-3xl p-6 flex flex-col gap-4 transition-all duration-500 ${
                  isMobile ? 'mx-auto w-full max-w-md' : ''
                }`}
                style={{
                  background: isCenter
                    ? 'linear-gradient(135deg, rgba(54,194,117,0.15) 0%, rgba(15,23,32,0.9) 100%)'
                    : 'rgba(15,23,32,0.6)',
                  border: isCenter
                    ? '1px solid rgba(54,194,117,0.35)'
                    : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: isCenter
                    ? '0 8px 40px rgba(54,194,117,0.12)'
                    : '0 4px 24px rgba(0,0,0,0.3)',
                  transform: isCenter ? 'scale(1.03)' : 'scale(0.97)',
                  opacity: isCenter ? 1 : 0.7,
                }}
              >
                {/* stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-[#E6B325] text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>

                <div className="h-px bg-white/6" />

                <div className="flex items-center gap-3">
                <div
  className={`w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ${
    isCenter
      ? 'border border-[#36C275]/30'
      : 'border border-white/10'
  }`}
>
  <Image
    src="/profile.webp"
    alt={t.name}
    width={40}
    height={40}
    className="w-full h-full object-cover"
  />
</div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                height: '8px',
                width: active === i ? '28px' : '8px',
                background: '#36C275',
                opacity: active === i ? 1 : 0.35,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}