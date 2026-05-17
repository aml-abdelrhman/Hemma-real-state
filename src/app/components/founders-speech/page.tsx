'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';

interface FoundersPageProps {
  locale?: 'ar' | 'en';
}

const FoundersSpeechPage: React.FC<FoundersPageProps> = ({ locale = 'ar' }) => {
  const intl = useIntl();
  const isRtl = locale === 'ar';

  return (
    <div className="w-full bg-[#F8F9FA] text-[#1E293B] min-h-screen pt-28 md:pt-40 pb-24 overflow-hidden relative font-sans">
      {/* تأثير إضاءة خلفي لؤلؤي خفيف لإعطاء لمسة فنية رخامية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#E2E8F0,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* العناوين الرئيسية للصفحة */}
        <div className={`max-w-3xl mb-16 md:mb-24 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-[0.2em] bg-[#1E3A8A]/5 px-4 py-2 rounded-md inline-block mb-4 border border-[#1E3A8A]/10">
            {intl.formatMessage({ id: 'founders.tagline' })}
          </span>
          <h1 className="text-3xl md:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
            {intl.formatMessage({ id: 'founders.title' })}
          </h1>
          <div className="w-20 h-[3px] bg-[#1E3A8A] rounded-full" />
        </div>

        {/* شبكة العرض: تجمع بين صورة المؤسس وكلمته المكتوبة */}
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* الجانب الأيمن/الأيسر: صورة المؤسس بتأثيرات فخمة كلاسيكية */}
          <div className="flex flex-col items-center lg:col-span-5 lg:items-stretch">
            <div className="relative w-full aspect-[3/4] md:max-w-[450px] lg:max-w-none rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.05)] border border-[#E2E8F0] bg-white p-3 group">
              <div className="relative w-full h-full overflow-hidden transition-all duration-700 rounded-xl">
                <Image
                  src="/images/heroo.png" // ضع صورة المؤسس هنا في مجلد public/images/
                  alt={isRtl ? 'مؤسس شركة همة العقارية' : 'Founder of Hemma Real Estate'}
                  fill
                  className="object-cover transition-transform duration-700 transform group-hover:scale-102"
                  priority
                />
              </div>
            </div>
            
            {/* بطاقة الاسم والمنصب تحت الصورة مباشرة */}
            <div className={`mt-6 w-full max-w-[450px] lg:max-w-none ${isRtl ? 'text-right pr-4' : 'text-left pl-4'}`}>
              <h3 className="text-xl font-bold text-[#0F172A]">
                {isRtl ? 'المهندس / عبد الرحمن بن علي' : 'Eng. Abdulrahman Al-Ali'}
              </h3>
              <p className="text-sm text-[#64748B] font-light mt-1">
                {isRtl ? 'المؤسس ورئيس مجلس الإدارة' : 'Founder & Chairman'}
              </p>
            </div>
          </div>

          {/* الجانب الأخر: نص الكلمة منسق بطريقة المجلات النخبوية */}
          <div className="flex flex-col justify-between h-full lg:col-span-7">
            <div className={`relative ${isRtl ? 'text-right' : 'text-left'}`}>
              
              {/* أيقونة اقتباس لؤلؤية ضخمة تضفي فخامة بصرية في الخلفية */}
              <span className={`absolute -top-10 font-serif text-8xl text-[#1E3A8A]/5 select-none pointer-events-none ${isRtl ? '-right-4' : '-left-4'}`}>
                “
              </span>

              <h2 className="text-2xl md:text-3xl font-normal text-[#1E3A8A] mb-8 leading-snug">
                {intl.formatMessage({ id: 'founders.quote' })}
              </h2>

              <div className="space-y-6 text-[#475569] text-base md:text-lg leading-relaxed font-light">
                <p>
                  {intl.formatMessage({ id: 'founders.paragraph1' })}
                </p>
                
                <p>
                  {intl.formatMessage({ id: 'founders.paragraph2' })}
                </p>

                <p>
                  {intl.formatMessage({ id: 'founders.paragraph3' })}
                </p>
              </div>
            </div>

            {/* توقيع المؤسس في نهاية الكلمة لتوثيق المصداقية */}
            <div className={`mt-12 pt-8 border-t border-[#E2E8F0] flex items-center justify-between ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
              <Link 
                href="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#0F172A] transition-colors group"
              >
                {isRtl ? 'حجز جلسة استشارية خاصة' : 'Request Private Advisory'}
                <svg className={`w-4 h-4 transform transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              {/* مساحة مخصصة لصورة التوقيع اليدوي المرسوم (اختياري) */}
              <div className="relative w-32 h-12 opacity-60 mix-blend-multiply grayscale">
                {/* <Image src="/images/signature.png" alt="Signature" fill className="object-contain" /> */}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FoundersSpeechPage;