'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'Yammy Stars', href: '#yammy-stars' },
  { label: 'كيف يعمل', href: '#how-it-works' },
  { label: 'خدماتنا', href: '#services' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0F1720]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* اللوغو */}
        <Link href="#hero" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Yammy" width={36} height={36} />
          <span className="font-bold text-lg text-white">Yammy Dz</span>
        </Link>

        {/* روابط - ديسكتوب */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* زر CTA */}
        <div className="hidden md:block">
          <Link
            href="#hero"
            className="bg-[#36C275] hover:brightness-110 transition px-5 py-2 rounded-xl text-sm font-medium text-white shadow-lg shadow-[#36C275]/20"
          >
            تحميل التطبيق
          </Link>
        </div>

        {/* زر الموبايل */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* قائمة الموبايل */}
      {open && (
        <div className="md:hidden bg-[#0F1720] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#hero"
            onClick={() => setOpen(false)}
            className="bg-[#36C275] hover:brightness-110 transition px-5 py-2 rounded-xl text-sm font-medium text-white text-center shadow-lg shadow-[#36C275]/20"
          >
            تحميل التطبيق
          </Link>
        </div>
      )}
    </nav>
  );
}