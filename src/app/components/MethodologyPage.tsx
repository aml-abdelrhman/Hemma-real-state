'use client';

import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

interface MethodologyPageProps {
  locale?: 'ar' | 'en';
}

const MethodologyPage: React.FC<MethodologyPageProps> = ({ locale }) => {
  const intl = useIntl();
  const activeLocale = locale || intl.locale;
  const isRtl = activeLocale === 'ar';

  const steps = [
    {
      number: 'I',
      title: isRtl ? 'الاستقصاء الجيومكاني ورسم الاستراتيجية' : 'Geospatial Intelligence & Strategic Mapping',
      subtitle: isRtl ? 'فرص استثمارية منتقاة سيادياً' : 'Sovereign-Selected Investment Opportunities',
      description: isRtl 
        ? 'تبدأ رحلتنا ببروتوكول فحص نافٍ للجهالة يدمج بين التحليل الديموغرافي والذكاء الجغرافي المعقد، لتحويل مسارات النمو عمرانياً إلى أصول استثمارية نادرة تضمن تحصين الثروات.' 
        : 'Our journey begins with a rigorous due diligence protocol that merges demographic analysis with complex geospatial intelligence, transforming urban growth paths into rare investment assets that ensure wealth preservation.',
      badge: isRtl ? 'التحليل الجغرافي' : 'Macro Underwriting'
    },
    {
      number: 'II',
      title: isRtl ? 'الهندسة الطليعية وصياغة الأثر' : 'Avant-Garde Architecture & Impact Design',
      subtitle: isRtl ? 'تجاوز الأنماط السائدة' : 'Transcending Conventional Patterns',
      description: isRtl 
        ? 'بالشراكة مع نوابغ العمارة العالمية، نصيغ كتل هندسية تتحدى المألوف، ندمج فيها بين الفلسفة الجمالية التقليلية (Minimalism) والوظائف البيئية المستدامة لتشييد معالم لؤلؤية.' 
        : 'In partnership with global architectural visionaries, we craft geometric structures that challenge the status quo, blending minimalist aesthetics with sustainable environmental functionality to erect iconic landmarks.',
      badge: isRtl ? 'المفهوم البصري' : 'Iconic Conception'
    },
    {
      number: 'III',
      title: isRtl ? 'الحوكمة الإنشائية والتنفيذ الفني' : 'Structural Governance & Technical Execution',
      subtitle: isRtl ? 'الدرجة الأولى الفائقة' : 'Ultra-Tier 1 Materiality',
      description: isRtl 
        ? 'نخضع مواقع التشييد لرقابة صارمة وحوكمة متعددة الطبقات، مع استيراد أجود الخامات لضمان تحويل المخططات إلى واقع يتحدى الزمن.' 
        : 'We enforce absolute corporate governance across the construction lifecycle, sourcing elite raw materials to transition blueprints into timeless legacy landmarks.',
      badge: isRtl ? 'المطابقة الحجمية' : 'Precision Engineering'
    },
    {
      number: 'IV',
      title: isRtl ? 'إدارة الأصول والرفاهية الممتدة' : 'Asset Management & Extended Luxury',
      subtitle: isRtl ? 'استدامة القيمة العابرة للأجيال' : 'Intergenerational Value Sustainability',
      description: isRtl 
        ? 'تبدأ علاقتنا الحقيقية عند تسليم المفتاح، حيث نتولى إدارة الأملاك وضيافتها الوقائية بمعايير الفندقة النخبوية لضمان النمو الرأسمالي المستمر وصيانة الأثر المعماري للأصل.' 
        : 'Our true relationship begins at handover. We manage properties with elite hospitality standards to ensure continuous capital growth and the preservation of the asset’s architectural heritage.',
      badge: isRtl ? 'استدامة العوائد' : 'Yield Preservation'
    }
  ];

  const metrics = [
    { value: isRtl ? '٪١٠٠' : '100%', label: isRtl ? 'امتثال صارم بالجداول' : 'Delivery Precision' },
    { value: isRtl ? '٪٣٢+' : '+32%', label: isRtl ? 'مستهدف النمو الرأسمالي' : 'Alpha Appreciation' },
    { value: isRtl ? 'صنف أ' : 'Class A', label: isRtl ? 'المعيار المؤسسي للمواد' : 'Institutional Ranking' }
  ];

  const leftSideSteps = [steps[0], steps[1]];
  const rightSideSteps = [steps[2], steps[3]];

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full bg-[#EBECEF] text-[#1E293B] min-h-screen pt-32 md:pt-40 pb-32 overflow-hidden relative font-sans selection:bg-[#000000] selection:text-white"
    >
      
      {/* شبكة الديكور المعمارية */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1D5DB_1px,transparent_1px),linear-gradient(to_bottom,#D1D5DB_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_50%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= قطاع العنوان الرئيسي ================= */}
        <div className="max-w-4xl mx-auto mb-16 text-center md:mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border rounded-full shadow-sm bg-white/60 backdrop-blur-md border-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#000000] animate-pulse" />
            <span className="text-[#4B5563] font-semibold text-[10px] md:text-xs uppercase tracking-[0.3em]">
              {isRtl ? 'الميثاق التطويري لشركة همة' : 'The Hemma Architectural Protocol'}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extralight text-[#000000] tracking-tight leading-[1.2] mb-6">
            {isRtl ? 'هندسة المعالم وصناعة ' : 'Composing Architectural '}
            <span className="font-semibold block md:inline text-transparent bg-clip-text bg-gradient-to-r from-[#000000] via-[#374151] to-[#4B5563]">
              {isRtl ? 'القيمة السيادية الأبدية' : 'Sovereign Value'}
            </span>
          </h1>
          
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto">
            {isRtl 
              ? 'نهج استراتيجي متكامل يوازن بعبقرية بين الريادة التشكيلية والأمان الاستثماري طويل الأجل، خاضع لأعلى معايير الحوكمة الفنية العالمية مخصصة للنخبة.'
              : 'An integrated strategic methodology, balancing avant-garde conceptual design with absolute asset security under rigorous institutional frameworks.'}
          </p>
        </div>

        {/* ================= لوحة العرض المركزية (الصورة بألوانها الطبيعية) ================= */}
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-12 lg:gap-8">
          
          {/* الجانب الأول من النصوص */}
          <div className="order-2 space-y-10 lg:col-span-3 lg:order-1">
            {leftSideSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`group relative transition-all duration-500 ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-serif italic text-[#C9AA7B]/30 group-hover:text-[#C9AA7B] transition-colors duration-500 font-bold">
                    {step.number}
                  </span>
                  <div className="h-[1px] w-8 bg-[#C9AA7B]/20 group-hover:bg-[#C9AA7B]/50 transition-colors duration-500" />
                  <span className="text-[9px] font-bold text-[#683C21] tracking-wider uppercase bg-[#F9F6F2] border border-[#C9AA7B]/20 px-2 py-0.5 rounded shadow-sm">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#683C21] mb-3 transition-colors duration-300 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#683C21]/60 text-xs md:text-sm leading-relaxed font-light group-hover:text-[#683C21] transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* الصورة الفنية الحية بالمنتصف */}
          <div className="order-1 px-0 lg:col-span-6 lg:order-2 lg:px-6">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[40px] overflow-hidden border border-[#C9AA7B]/30 shadow-[0_40px_90px_rgba(104,60,33,0.08)] bg-white p-3 group">
              <div className="w-full h-full relative rounded-[30px] overflow-hidden">
                <Image
                  src="/images/pic2.jpeg"
                  alt="Hemma Elite Architectural Monument"
                  fill
                  className="object-cover transform scale-100 group-hover:scale-102 transition-transform duration-[2s] ease-out"
                  priority
                />
                {/* ظل حماية سفلي ناعم جداً لبروز أرقام الحوكمة */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#683C21]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* بطاقة الحوكمة العائمة أسفل الصورة */}
              <div className={`absolute bottom-8 bg-white/95 backdrop-blur-md border border-[#C9AA7B]/20 py-4 px-6 rounded-2xl flex items-center gap-6 shadow-xl z-20 ${isRtl ? 'left-8' : 'right-8'}`}>
                {metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="flex flex-col border-r last:border-0 border-[#C9AA7B]/20 pr-4 last:pr-0">
                    <span className="text-xl font-bold text-[#683C21] font-mono">{m.value}</span>
                    <span className="text-[9px] text-[#683C21]/70 font-bold whitespace-nowrap uppercase tracking-tighter">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* الجانب الثاني من النصوص */}
          <div className="order-3 space-y-10 lg:col-span-3">
            {rightSideSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`group relative transition-all duration-500 ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-serif italic text-[#C9AA7B]/30 group-hover:text-[#C9AA7B] transition-colors duration-500 font-bold">
                    {step.number}
                  </span>
                  <div className="h-[1px] w-8 bg-[#C9AA7B]/20 group-hover:bg-[#C9AA7B]/50 transition-colors duration-500" />
                  <span className="text-[9px] font-bold text-[#683C21] tracking-wider uppercase bg-[#F9F6F2] border border-[#C9AA7B]/20 px-2 py-0.5 rounded shadow-sm">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#683C21] mb-3 transition-colors duration-300 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#683C21]/60 text-xs md:text-sm leading-relaxed font-light group-hover:text-[#683C21] transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

       

      </div>
    </div>
  );
};

export default MethodologyPage;