// app/data/searchItems.ts
import { useTranslations } from 'next-intl';

export const getSearchItems = (t: ReturnType<typeof useTranslations>) => [
  { label: t('nav.works'), href: '/', tags: ['home', 'الرئيسية'] },
  { label: t('nav.about'), href: '/projects', tags: ['projects', 'مشاريع'] },
  { label: t('nav.contact'), href: '/off-plan-sales', tags: ['sales', 'بيع'] },
  { label: t('nav.chairman'), href: '/lands', tags: ['lands', 'أراضي'] },
  { label: t('nav.board'), href: '/events', tags: ['events', 'فعاليات'] },
  { label: t('nav.plan'), href: '/methodology', tags: ['plan', 'منهجية'] },
  { label: t('nav.work'), href: '/careers', tags: ['jobs', 'وظائف'] },
  { label: t('nav.last'), href: '/developers', tags: ['developers', 'مطورين'] },

  // أمثلة إضافية
  { label: 'Luxury Villa', href: '/projects/villa1', tags: ['luxury', 'فيلا'] },
  { label: 'Modern Apartment', href: '/projects/apartment1', tags: ['modern', 'شقة'] },
];
