'use client';

import Image from 'next/image';

const categories = [
  { src: '/fast-food.jpg', alt: 'Fast Food', label: 'Fast Food 🍔', tag: 'Yammy Category', color: 'text-[#36C275]' },
  { src: '/cafe.jpg', alt: 'Cafés', label: 'Cafés ☕', tag: 'Premium Cafés', color: 'text-[#E6B325]' },
  { src: '/traditional-food.jpg', alt: 'Traditional Food', label: 'Traditional Food 🇩🇿', tag: 'Algerian Taste', color: 'text-[#F04D43]' },
  { src: '/seafood.jpg', alt: 'Seafood', label: 'Seafood 🦞', tag: 'Fresh Seafood', color: 'text-cyan-400' },
  { src: '/dessert.jpg', alt: 'Desserts', label: 'Desserts 🍰', tag: 'Sweet Moments', color: 'text-pink-400' },
];

export default function CategoriesSection() {
  return (
    <section className="py-32 px-6 bg-[#0F1720] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm mb-5">
            فئات المطاعم
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            اكتشف مختلف أنواع
            <span className="text-[#36C275]"> المطاعم والمقاهي </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            من الوجبات السريعة إلى المطاعم الفاخرة والمأكولات التقليدية الجزائرية.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

          {categories.map((cat, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[32px] cursor-pointer">
              
              {/* Image */}
              <Image 
                src={cat.src} 
                alt={cat.alt} 
                fill
                className="object-cover lg:group-hover:scale-110 transition duration-700" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Info Box */}
              {/* التعديل هنا: في الهاتف التموضع ثابت في الأسفل (bottom-0)، وفي الشاشات الكبيرة يبدأ من الأسفل ويصعد بالهوفر */}
              <div className="absolute bottom-0 lg:bottom-[-100px] left-0 w-full p-4 md:p-6 lg:group-hover:bottom-0 transition-all duration-500">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5">
                  <p className={`${cat.color} text-xs md:text-sm mb-1 md:mb-2`}>{cat.tag}</p>
                  <h3 className="text-xl md:text-2xl font-bold">{cat.label}</h3>
                </div>
              </div>

            </div>
          ))}

          {/* CARD 6 (تحميل التطبيق) */}
          {/* التعديل هنا: ألغينا التدوير المزعج بالهاتف وجعلناه مفعلاً فقط بالكمبيوتر عبر lg:rotate-3 */}
          <div className="relative group rounded-[32px] bg-gradient-to-br from-[#34B472] to-[#47DF90] flex items-center justify-center overflow-hidden lg:rotate-3 lg:hover:rotate-0 transition-transform duration-500 cursor-pointer p-6">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">نزل التطبيق الآن</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-[240px] mx-auto">
                استكشف باقي المطاعم والأصناف المتوفرة في منطقتك
              </p>
              <div className="mt-4 inline-block px-5 py-2 rounded-full bg-black/20 border border-white/20 text-white text-sm font-medium transition-all group-hover:bg-black/30">
                تحميل التطبيق ←
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}