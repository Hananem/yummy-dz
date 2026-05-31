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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

          {categories.map((cat, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[32px]">
              <Image src={cat.src} alt={cat.alt} fill
                className="object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-[-100px] left-0 w-full p-6 group-hover:bottom-0 transition-all duration-500">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                  <p className={`${cat.color} text-sm mb-2`}>{cat.tag}</p>
                  <h3 className="text-2xl font-bold">{cat.label}</h3>
                </div>
              </div>
            </div>
          ))}

          {/* CARD 6 */}
         {/* CARD 6 */}
<div className="relative group rounded-[32px] bg-gradient-to-br from-[#34B472] to-[#47DF90] flex items-center justify-center overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
  <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#36C275]/10 rounded-full blur-2xl" />
  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#36C275]/10 rounded-full blur-2xl" />

  <div className="relative z-10 text-center px-6">
    <h3 className="text-2xl font-bold mb-2">نزل التطبيق الآن</h3>

    <p className="text-gray-400 text-sm leading-relaxed">
      استكشف باقي المطاعم والأصناف المتوفرة في منطقتك
    </p>

    <div className="mt-4 inline-block px-4 py-2 rounded-full bg-[#36C275]/20 border border-[#36C275]/40 text-[#36C275] text-sm">
      تحميل التطبيق ←
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}