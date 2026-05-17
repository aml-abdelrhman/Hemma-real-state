"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import ReusableTextWithArrows from "../ReusableTextWithArrows";

const partnersData = [
  {
    src: "/images/1.png",
    ar: "تعد هذه الشراكة ركيزة أساسية في نجاحاتنا المتتالية. نعمل معاً لتطوير مشاريع سكنية فريدة تلبي تطلعات عملائنا.",
    en: "This partnership is a key pillar in our successes. Together we develop unique residential projects that meet expectations."
  },
  {
    src: "/images/2.png",
    ar: "نتعاون مع أفضل الخبرات الهندسية لضمان الجودة. تهدف هذه الشراكة إلى خلق بيئات عيش عصرية ومستدامة للنخبة.",
    en: "We collaborate with top engineering experts to ensure quality. This partnership aims to create modern living environments."
  },
  {
    src: "/images/3.png",
    ar: "رؤيتنا المشتركة هي المحرك الأساسي لمشاريعنا الطموحة. نلتزم بتقديم حلول عقارية مبتكرة تعزز من جودة الحياة الاستثمارية.",
    en: "Our shared vision is the driver of our projects. We are committed to providing innovative real estate solutions."
  },
  {
    src: "/images/4.png",
    ar: "نسعى من خلال تعاوننا الإستراتيجي لفتح آفاق جديدة. شراكتنا تعكس الثقة والاحترافية العالية في السوق العقاري.",
    en: "Through our strategic cooperation, we seek new horizons. Our partnership reflects high trust in the market."
  },
  {
    src: "/images/5.png",
    ar: "نفخر بالعمل مع شركاء يشاركوننا قيم التميز والإتقان. معاً نصنع مستقبلاً عمرانياً يجمع بين الفخامة والأمان الدائم.",
    en: "We are proud to work with partners who share our values. Together we create a future of luxury and safety."
  },
];

const Partners: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const intl = useIntl();
  const locale = intl.locale;
  const isRtl = locale === "ar";

  // نصوص مخصصة باللغتين يتم عرضها ديناميكياً حسب اختيار المستخدم
  const content = {
    firstWord: isRtl ? "شركاء" : "Our",
    secondWord: isRtl ? "النجاح" : "Partners",
    description: isRtl 
      ? "نفخر بالتعاون مع نخبة من الشركاء الإستراتيجيين والمطورين العقاريين لتقديم مشاريع استثنائية تفوق التوقعات وتصنع مستقبلاً سكنياً واستثمارياً مستداماً."
      : "We take pride in collaborating with elite strategic partners and real estate developers to deliver exceptional projects that exceed expectations and shape a sustainable future for living and investment."
  };

  return (
    <section 
      dir={isRtl ? "rtl" : "ltr"} 
      className="pt-20 pb-16 bg-[#EBECEF] overflow-hidden partners-section relative"
    >
      {/* تأثير ضوئي خلفي يعكس الفخامة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* الجزء العلوي: العنوان الفاخر مع الأسهم */}
        <div className="mb-12 text-black">
          <ReusableTextWithArrows
            firstWord={content.firstWord}
            secondWord={content.secondWord}
            showContent={true}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            className="!h-[120px] lg:!h-[100px] text-black"
          />
          
          <p className="max-w-3xl mt-4 text-xs leading-relaxed text-[#4B5563] md:text-sm font-light">
            {content.description}
          </p>
        </div>

        {/* عرض الشعارات بشكل منساب وحريري */}
        <div className="relative partners-swiper-wrapper">
          <Swiper
            key={locale}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false, 
            }}
            speed={5000} // حركة خطية ناعمة جداً ومستمرة تعكس الاستقرار والثقة
            slidesPerView={2}
            spaceBetween={24}
            loop={true} 
            onSwiper={(s) => (swiperRef.current = s)}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 32 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className="partners-swiper !py-4 transition-linear ease-linear"
          >
            {[...partnersData, ...partnersData].map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 group">
                  <div className="flex items-center justify-center h-28 p-6 transition-all duration-700 bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:bg-white group-hover:scale-[1.02] rounded-2xl">
                    <Image 
                      src={partner.src} 
                      alt={isRtl ? `شريك ${index + 1}` : `Partner ${index + 1}`} 
                      width={140} 
                      height={70} 
                      className="object-contain max-h-full transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className={`px-2 transition-all duration-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <p className="text-[10px] md:text-[11px] leading-relaxed text-[#64748B] font-light group-hover:text-[#1E3A8A]">
                      {isRtl ? partner.ar : partner.en}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Partners;