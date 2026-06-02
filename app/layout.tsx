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
  title: "Yammy Dz",
  description: "أفضل المطاعم والطهاة في الجزائر داخل تطبيق واحد",
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