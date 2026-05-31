const steps = [
  {
    number: '01',
    title: 'اكتشف المطاعم',
    desc: 'ابحث حسب المدينة، نوع الطعام، التقييم أو قرب المطعم منك.',
    rotate: '-rotate-6',
    hover: 'hover:-rotate-3',
  },
  {
    number: '02',
    title: 'قيّم تجربتك',
    desc: 'شارك رأيك الحقيقي واحصل على نقاط Yammy Stars ⭐.',
    rotate: 'rotate-6',
    hover: 'hover:rotate-3',
  },
  {
    number: '03',
    title: 'اربح مكافآت حقيقية',
    desc: 'خصومات، هدايا، وتجارب VIP للمستخدمين الأكثر نشاطًا.',
    rotate: '-rotate-6',
    hover: 'hover:-rotate-3',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="py-32 px-6 bg-[#0F1720] text-white overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* النص */}
        <div className="lg:sticky top-32 text-right">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm mb-6">
            كيف يعمل التطبيق؟
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            اكتشف، قيّم،
            <span className="bg-gradient-to-r from-[#34B472] to-[#47DF90] bg-clip-text text-transparent">
              {' '}واربح بسهولة
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">
            Yammy Dz يمنحك تجربة حديثة لاكتشاف أفضل المطاعم والمقاهي
            في الجزائر مع نظام نقاط ومكافآت حقيقي داخل تطبيق واحد.
          </p>
        </div>

        {/* البطاقات */}
        <div className="flex flex-col gap-10 mt-90">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`${step.rotate} ${step.hover} transition duration-300`}
            >
              <div
                className={`rounded-[32px] p-8 backdrop-blur-md shadow-2xl ${
                  i === 1
                    ? 'bg-gradient-to-br from-[#34B472] to-[#47DF90]'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-5 flex-row-reverse">

                  {/* الرقم */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 ${
                      i === 1
                        ? 'bg-white/20 border border-white/20 text-white'
                        : 'bg-white/5 border border-white/10 text-white'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* المحتوى */}
                  <div className="text-right">
                    <h3 className="text-2xl font-bold mb-2">
                      {step.title}
                    </h3>

                    <p
                      className={`leading-relaxed ${
                        i === 1
                          ? 'text-white/90'
                          : 'text-gray-400'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}