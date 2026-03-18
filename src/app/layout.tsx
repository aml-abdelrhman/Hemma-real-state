'use client';

import './styles/globals.css';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [currentLocale, setCurrentLocale] = useState<'en' | 'ar'>('ar');
  const messages = currentLocale === 'ar' ? arMessages : enMessages;

  return (
    <html lang={currentLocale} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <IntlProvider locale={currentLocale} messages={messages} defaultLocale="en">
          <Navbar locale={currentLocale} setLocale={setCurrentLocale} />
          <main>{children}</main>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
