import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#0F1720] text-white mt-22">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGES */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="absolute w-[350px] h-[350px] bg-[#36C275] opacity-20 blur-[120px] rounded-full" />

          <div className="absolute top-0 left-4 -rotate-[16deg] hover:-rotate-[22deg] transition duration-300 z-10">
            <Image
              src="/screen1.png"
              alt="Yammy App"
              width={220}
              height={440}
              className="rounded-[28px] shadow-2xl border border-white/10"
            />
          </div>

          <div className="absolute bottom-0 right-4 rotate-[14deg] hover:rotate-[12deg] transition duration-300">
            <Image
              src="/screen2.png"
              alt="Yammy Rewards"
              width={220}
              height={440}
              className="rounded-[28px] shadow-2xl border border-white/10"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="space-y-6 text-right">
          <div className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm">
            من نحن
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            تجربة مطاعم جزائرية
            <span className="text-[#36C275]"> عصرية وفاخرة </span>
            داخل تطبيق واحد
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Yammy Dz ليس مجرد تطبيق مطاعم عادي، بل منصة متكاملة تساعدك على
            اكتشاف أفضل المطاعم والمقاهي في الجزائر، تقييم تجاربك، وجمع نقاط
            ومكافآت حقيقية عبر نظام
            <span className="text-[#E6B325] font-semibold">
              {' '}
              Yammy Stars ⭐
            </span>
            .
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            نهدف إلى بناء مجتمع Food Lovers جزائري حديث يجمع بين جودة المطاعم،
            التقييمات الحقيقية، وتجربة استخدام فاخرة مستوحاة من أفضل تطبيقات
            العالم.
          </p>
        </div>

      </div>
    </section>
  );
}