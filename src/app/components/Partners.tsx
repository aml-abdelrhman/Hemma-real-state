"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // استيراد موديل الحركة التلقائية
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import ReusableTextWithArrows from "./ReusableTextWithArrows";

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];

const Partners: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const intl = useIntl();
  const locale = intl.locale;
  const isRtl = locale === "ar";

  return (
    <section 
      dir={isRtl ? "rtl" : "ltr"} 
      className="partners-section py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        
        {/* الجزء العلوي: العنوان مع الأسهم */}
        <div className="mb-12">
          <ReusableTextWithArrows
            firstWord={intl.formatMessage({ id: "mixx.first" })}
            secondWord={intl.formatMessage({ id: "mixx.second" })}
            showContent={true}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
          
          <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base opacity-80">
            {intl.formatMessage({ id: "partners.description" })}
          </p>
        </div>

        <div className="partners-swiper-wrapper relative">
          <Swiper
            key={locale}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500, 
              disableOnInteraction: false, 
            }}
            speed={800}
            slidesPerView={2}
            spaceBetween={20}
            loop={true} 
            onSwiper={(s) => (swiperRef.current = s)}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="partners-swiper !py-10" // إضافة padding لإظهار تأثير الـ Hover
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-6 h-32 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 bg-gray-50 rounded-2xl border border-transparent hover:border-[#C9AA7B]/20">
                  <Image 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    width={150} 
                    height={75} 
                    className="object-contain max-h-full"
                  />
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