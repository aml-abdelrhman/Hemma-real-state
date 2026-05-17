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
      className="pt-16 pb-8 mt-12 overflow-hidden bg-white partners-section"
    >
      <div className="container px-4 mx-auto">
        
        {/* الجزء العلوي: العنوان مع الأسهم */}
        <div className="mb-4">
          <ReusableTextWithArrows
            firstWord={intl.formatMessage({ id: "mixx.first" })}
            secondWord={intl.formatMessage({ id: "mixx.second" })}
            showContent={true}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            className="!h-[120px] lg:!h-[100px]"
          />
          
          <p className="max-w-2xl mt-1 text-xs leading-relaxed text-gray-500 md:text-sm opacity-80">
            {intl.formatMessage({ id: "partners.description" })}
          </p>
        </div>

        <div className="relative partners-swiper-wrapper">
          <Swiper
            key={locale}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false, 
            }}
            speed={4000}
            slidesPerView={2}
            spaceBetween={20}
            loop={true} 
            onSwiper={(s) => (swiperRef.current = s)}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="partners-swiper !py-6 transition-linear"
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24 p-4 transition-all duration-500 bg-white border shadow-sm hover:scale-105 rounded-xl border-gray-50">
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