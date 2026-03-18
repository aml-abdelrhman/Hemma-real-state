'use client';

import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import enMessages from '../locales/en.json';
import arMessages from '../locales/ar.json';

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const messages = locale === 'ar' ? arMessages : enMessages;

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      <Navbar locale={locale} setLocale={setLocale} />
      {children}
    </IntlProvider>
  );
}
