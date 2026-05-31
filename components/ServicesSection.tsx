import Image from 'next/image';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'زيادة عدد الزبائن', desc: 'اجعل مطعمك يظهر أمام آلاف المستخدمين الباحثين عن أفضل أماكن الأكل في الجزائر.' },
  { title: 'نظام تقييم موثوق', desc: 'احصل على تقييمات حقيقية تساعدك على بناء الثقة وتحسين سمعة مطعمك.' },
  { title: 'تصنيف Yammy Stars', desc: 'ارتقِ في التصنيفات واحصل على شارات مميزة تزيد من جاذبية مطعمك للعملاء.' },
  { title: 'عروض وحملات تسويقية', desc: 'أنشئ عروضًا خاصة وحقق انتشارًا أكبر من خلال الحملات والإعلانات داخل التطبيق.' },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0F1720] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-[#36C275]/30 bg-[#36C275]/10 text-[#36C275] text-sm mb-4">
            لأصحاب المطاعم
          </div>
          <h2 className="text-5xl font-bold mb-4">لماذا تختار Yammy Dz؟</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            منصة متكاملة تمنح مطعمك الظهور والثقة والنمو الحقيقي
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">

          {/* البطاقات اليسار */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:mt-24">
            {services.slice(0, 2).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

          {/* الهاتف - المنتصف */}
          <div className="relative w-[360px] h-[480px] flex-shrink-0 flex items-center justify-center">

            {/* الدائرة الخضراء الصلبة مع neon حولها فقط */}
            <div
              className="absolute z-0"
              style={{
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: '#36C275',
                boxShadow:
                  '0 0 30px 12px rgba(54,194,117,0.55), 0 0 70px 30px rgba(54,194,117,0.25)',
              }}
            />

            {/* perspective container */}
            <div style={{ perspective: '1200px' }} className="relative z-10 w-full h-full flex items-center justify-center">
              <div
                style={{
                  transform: 'rotateY(20deg) rotateX(10deg) rotateZ(-15deg)',
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(-15px 25px 35px rgba(0,0,0,0.65))',
                }}
              >
                <div
                  className="relative bg-[#1c1c1e] rounded-[44px] overflow-hidden"
                  style={{
                    width: '220px',
                    height: '440px',
                    border: '8px solid #3a3a3c',
                    boxShadow: 'inset 0 0 0 1px #555',
                  }}
                >
                  <Image src="/screen3.png" alt="شاشة التطبيق" fill className="object-cover" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1c1c1e] rounded-full z-10" />
                </div>
                <div
                  className="absolute top-[8px] -right-[10px] bg-[#2a2a2c]"
                  style={{
                    width: '10px',
                    height: 'calc(100% - 16px)',
                    borderRadius: '0 8px 8px 0',
                    transform: 'rotateY(90deg) translateZ(-5px)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* البطاقات اليمين */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:-mt-24">
            {services.slice(2, 4).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}