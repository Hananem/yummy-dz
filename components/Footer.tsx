'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="bg-[#0F1720] text-white border-t border-white/5 mt-20"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 🟢 العمود 1 - تعريف التطبيق */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Yammy" width={36} height={36} />
            <span className="font-bold text-lg">Yammy Dz</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            تطبيقك الذكي لتجربة أفضل وأسهل في إدارة وطلب الخدمات بطريقة حديثة وسريعة.
          </p>
        </div>

        {/* 🔵 العمود 2 - روابط */}
        <div>
          <h3 className="font-semibold mb-4">روابط سريعة</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#hero" className="hover:text-white">الرئيسية</Link></li>
            <li><Link href="#about" className="hover:text-white">من نحن</Link></li>
            <li><Link href="#yammy-stars" className="hover:text-white">Yammy Stars</Link></li>
            <li><Link href="#how-it-works" className="hover:text-white">كيف يعمل</Link></li>
            <li><Link href="#services" className="hover:text-white">خدماتنا</Link></li>
          </ul>

        
        </div>

        {/* 🟣 العمود 3 - تحميل + QR */}
        <div>
          <h3 className="font-semibold mb-4">حمّل التطبيق</h3>

          <p className="text-gray-400 text-sm mb-4">
            امسح الرمز لتحميل التطبيق مباشرة على هاتفك
          </p>

          {/* QR Code */}
          <div className="bg-white p-3 inline-block rounded-xl mb-4">
            <Image
              src="/qr-code.png"
              alt="QR Code"
              width={120}
              height={120}
            />
          </div>

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
      </div>

      {/* 📞 التواصل + السوشيال */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-gray-400 text-sm">
            contact@yammydz.com
          </div>

         {/* 
  <div className="flex gap-4 text-gray-400 text-sm">
    <a href="#" className="hover:text-white">Instagram</a>
    <a href="#" className="hover:text-white">Facebook</a>
    <a href="#" className="hover:text-white">TikTok</a>
  </div> 
*/}

          <div className="text-gray-500 text-xs">
            © 2026 Yammy Dz. جميع الحقوق محفوظة.
          </div>

        </div>
      </div>
    </footer>
  );
}