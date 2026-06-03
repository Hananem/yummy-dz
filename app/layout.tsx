import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Yammy Dz | أفضل تطبيق مطاعم في الجزائر",
    template: "%s | Yammy Dz",
  },
  description:
    "اكتشف أفضل المطاعم والمقاهي والأكلات في الجزائر. قيّم تجربتك، اجمع نقاط Yammy Stars، واربح هدايا حقيقية.",
  keywords: [
    "تطبيق مطاعم الجزائر",
    "أفضل مطاعم الجزائر",
    "Yammy Dz",
    "Yammy Stars",
    "Food App Algeria",
    "مطاعم الجزائر",
    "تقييم المطاعم",
    "هدايا ونقاط",
    "Restaurants Algeria",
    "تطبيق أكل الجزائر",
  ],
  authors: [{ name: "Yammy Dz" }],
  creator: "Yammy Dz",
  //metadataBase: new URL("https://yammydz.com"), // ← ضع رابط موقعك الحقيقي
  openGraph: {
    title: "Yammy Dz | أفضل تطبيق مطاعم في الجزائر",
    description:
      "اكتشف أفضل المطاعم والمقاهي في الجزائر، قيّم واربح هدايا حقيقية مع Yammy Dz",
  //  url: "https://yammydz.com",
    siteName: "Yammy Dz",
    locale: "ar_DZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // ← صورة 1200x630 ضعها في /public
        width: 1200,
        height: 630,
        alt: "Yammy Dz - أفضل تطبيق مطاعم في الجزائر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yammy Dz | أفضل تطبيق مطاعم في الجزائر",
    description:
      "اكتشف أفضل المطاعم في الجزائر واربح هدايا حقيقية مع Yammy Dz",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json", // اختياري لكن مفيد
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className={`${cairo.className} min-h-full flex flex-col bg-[#0F1720]`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}