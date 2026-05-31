import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#0F1720] text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* RIGHT SIDE TEXT */}
        <div className="w-full lg:w-1/2 space-y-6 text-right">
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
            <span className="text-[#E6B325] font-semibold"> Yammy Stars ⭐</span>.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            نهدف إلى بناء مجتمع Food Lovers جزائري حديث يجمع بين جودة المطاعم،
            التقييمات الحقيقية، وتجربة استخدام فاخرة مستوحاة من أفضل تطبيقات
            العالم.
          </p>
        </div>

        {/* LEFT SIDE IMAGES */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center" style={{ height: '480px' }}>

          {/* خلفية دائرية */}
          <div
            className="absolute rounded-full bg-[#36C275]/15"
            style={{ width: '340px', height: '340px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          {/* هاتف كبير — الخلف */}
          <div className="absolute z-10" style={{ top: '20px', left: '50%', transform: 'translateX(-20%)' }}>
            <Image
              src="/screen1.png"
              alt="Yammy App"
              width={200}
              height={400}
              className="rounded-[28px] shadow-2xl border border-white/10"
            />
          </div>

          {/* هاتف صغير — الأمام أسفل اليسار */}
          <div className="absolute z-20" style={{ bottom: '10px', left: '50%', transform: 'translateX(-90%)' }}>
            <Image
              src="/screen2.png"
              alt="Yammy Rewards"
              width={160}
              height={320}
              className="rounded-[22px] shadow-2xl border border-white/10"
            />
          </div>

        </div>

      </div>
    </section>
  );
}