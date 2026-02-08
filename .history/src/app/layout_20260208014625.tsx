// app/[locale]/layout.tsx
import Navbar from './components/Navbar';
import Footer from '../../components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { messages } from '../../i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: 'ar' | 'en' };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale === 'ar' ? 'ar' : 'en';

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <Navbar locale={locale} setLocale={() => {}} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
