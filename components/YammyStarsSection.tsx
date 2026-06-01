'use client';

import Image from 'next/image';

export default function RewardsSection() {
  return (
    <section className="py-32 bg-[#0F1720] text-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        {/* === القسم الأول === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 xl:gap-36 mb-32">

          {/* المستطيل الأخضر */}
          <div className="relative flex justify-center">
            <div className="relative flex-shrink-0" style={{ width: '320px', height: '580px' }}>
              <div className="absolute inset-0 bg-[#34B472]" />

              <div className="absolute" style={{ top: '60px', left: '-50px', zIndex: 10 }}>
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero1.png" alt="طبق 1" width={140} height={140} className="object-cover" />
                </div>
              </div>

              <div className="absolute" style={{ top: '40px', left: '80px', zIndex: 10 }}>
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero2.png" alt="طبق 2" width={120} height={120} className="object-cover" />
                </div>
              </div>

              <div className="absolute" style={{ top: '170px', left: '10px', zIndex: 10 }}>
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image src="/hero3.png" alt="طبق 3" width={160} height={160} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* النص */}
          <div className="text-right space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#36C275]/10 border border-[#36C275]/30 text-[#36C275] text-sm">
              للمستخدمين
            </div>
           <h3 className="text-3xl md:text-5xl font-bold leading-tight">
  اجمع النقاط، نقاطك = هداياك 🎁
  <br />
  <span className="text-[#47DF90]">واحصل على شارات مميزة 🏅</span>
</h3>

            <div className="flex flex-col gap-3">
              {[
                { icon: '✍️', title: 'قيّم المطاعم', desc: 'شاركنا رأيك واكسب نقاطاً لكل تقييم', badge: null, yellow: false },
{ icon: '👥', title: 'دعوة الأصدقاء', desc: 'ادعُ أصدقاءك واحصل على نقاط إضافية', badge: '+50 نقطة', yellow: false },
{ icon: '🏅', title: 'اجمع الشارات', desc: 'كلما تفاعلت أكثر، حصلت على شارات أعلى مستوى', badge: 'حصري', yellow: true },
              ].map((card, i) => (
                <div key={i} className={`bg-[#1A2535] border rounded-2xl p-4 ${i === 1 ? 'border-[#36C275]/30' : 'border-white/10'}`}>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === القسم الثاني === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 xl:gap-36 mb-32">

          {/* النص — يسار */}
          <div className="text-right space-y-6 order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-[#36C275]/10 border border-[#36C275]/30 text-[#36C275] text-sm">
              للمطاعم
            </div>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
  اجمع النجوم وارتقِ في التصنيفات
  <br />
  <span className="text-[#E63946]">واحصل على شارة Yammy Stars ⭐</span>
</h3>

            <div className="flex flex-col gap-3">
              <div className="bg-[#1A2535] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#36C275]/10 flex items-center justify-center text-lg flex-shrink-0">🏆</div>
                  <div className="text-right flex-1">
                    <h4 className="font-bold text-sm mb-0.5">جودة الخدمة</h4>
                    <p className="text-gray-400 text-xs">معدل رضا الزبائن</p>
                  </div>
                  <div className="text-xl font-bold text-[#36C275] flex-shrink-0">98%</div>
                </div>
              </div>

              <div className="bg-[#1A2535] border border-[#36C275]/30 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-lg flex-shrink-0">⭐</div>
                  <div className="text-right flex-1">
                    <h4 className="font-bold text-sm mb-0.5">تقييمات العملاء</h4>
                    <p className="text-gray-400 text-xs">متوسط التقييم العام</p>
                  </div>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#36C275]/20 to-[#1A2535] border border-[#36C275]/40 rounded-2xl p-4">
                <div className="space-y-2 text-right">
                  {[
                    { stars: '⭐',     label: 'مطعم موصى به',  color: 'text-gray-300' },
                    { stars: '⭐⭐',   label: 'جودة ممتازة',   color: 'text-gray-300' },
                    { stars: '⭐⭐⭐', label: 'Yammy Premium', color: 'text-[#36C275] font-bold' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-end gap-2 text-sm">
                      <span className={item.color}>{item.label}</span>
                      <span>{item.stars}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* المستطيل الأحمر — يمين */}
          <div className="relative flex justify-end order-1 lg:order-2">
            <div className="relative flex-shrink-0" style={{ width: '200px', height: '580px' }}>
              <div className="absolute inset-0 bg-[#E63946]" />

              <div
                className="absolute"
                style={{ top: '50%', right: '-55px', transform: 'translateY(-50%)', zIndex: 10 }}
              >
                <div
                  className="relative bg-[#1a1a2e] rounded-[36px] border-[6px] border-[#2a2a3e] overflow-hidden shadow-2xl"
                  style={{ width: '210px', height: '420px' }}
                >
                  <Image src="/screen1.png" alt="App Screen" fill className="object-cover" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a2e] rounded-full z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}