// app/layout.tsx
import './style-globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { messages } from './i18n';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Next.js',
};

export default function RootLayout({
  children,
  params, // لو عندك dynamic route /[locale]
}: {
  children: React.ReactNode;
  params?: { locale?: 'en' | 'ar' };
}) {
  const locale: 'ar' | 'en' = params?.locale === 'ar' ? 'ar' : 'en'; // افتراضي عربي

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="antialiased bg-white text-black">
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <Navbar locale={locale} setLocale={() => {}} /> {/* لو هتعمل switch */}
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
