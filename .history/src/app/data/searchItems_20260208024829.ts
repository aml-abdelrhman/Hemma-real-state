import { useTranslations } from 'next-intl';

export const getSearchItems = (t: ReturnType<typeof useTranslations>) => [
  { label: t('nav.works'), href: '/', tags: ['home', 'main', 'الرئيسية'] },
  { label: t('nav.about'), href: '/projects', tags: ['projects', 'portfolio', 'مشاريع'] },
  { label: t('nav.contact'), href: '/off-plan-sales', tags: ['sales', 'off-plan', 'بيع'] },
  { label: t('nav.chairman'), href: '/lands', tags: ['lands', 'properties', 'أراضي'] },
  { label: t('nav.board'), href: '/events', tags: ['events', 'calendar', 'فعاليات'] },
  { label: t('nav.plan'), href: '/methodology', tags: ['plan', 'process', 'منهجية'] },
  { label: t('nav.work'), href: '/careers', tags: ['jobs', 'careers', 'وظائف'] },
  { label: t('nav.last'), href: '/developers', tags: ['developers', 'team', 'مطورين'] },

  // أمثلة إضافية من المشروع
  { label: 'Luxury Villa', href: '/projects/villa1', tags: ['luxury', 'villa', 'فيلا'] },
  { label: 'Modern Apartment', href: '/projects/apartment1', tags: ['modern', 'apartment', 'شقة'] },
];
