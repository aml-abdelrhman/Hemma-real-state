'use client';

import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Cairo, Playfair_Display } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';

// إعداد الخط العربي العقاري الفاخر
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

// إعداد الخط الإنجليزي النخبوي المعاصر للمشاريع الفاخرة
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [currentLocale, setCurrentLocale] = useState<'en' | 'ar'>('ar');
  const messages = currentLocale === 'ar' ? arMessages : enMessages;

  // تحديث اتجاه الصفحة ديناميكياً لضمان سلاسة التصفح (RTL / LTR)
  useEffect(() => {
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  return (
    <html 
      lang={currentLocale} 
      dir={currentLocale === 'ar' ? 'rtl' : 'ltr'} 
      className={`${cairo.variable} ${playfair.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body 
        className="bg-[#F8F9FA] text-[#1E293B] antialiased selection:bg-[#1E3A8A] selection:text-white"
        style={{ 
          fontFamily: currentLocale === 'ar' 
            ? 'var(--font-cairo), sans-serif' 
            : 'var(--font-playfair), serif' 
        }}
      >
        <IntlProvider locale={currentLocale} messages={messages} defaultLocale="ar">
          {/* الـ Navbar يأخذ حالة اللغة الحالية ليقوم بتبديلها عند الضغط على زر التغيير */}
          <Navbar locale={currentLocale} setLocale={setCurrentLocale} />
          
          {/* محتوى الصفحات مع حماية الهيكل العام وتأمين خلفية فاخرة ولؤلؤية */}
          <main className="min-h-screen relative z-10 bg-gradient-to-b from-[#FFFFFF] via-[#F4F5F7] to-[#ECEFF1]">
            {children}
          </main>
          
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}