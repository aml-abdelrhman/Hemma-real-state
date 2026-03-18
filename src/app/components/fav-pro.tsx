"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import ReusableTextWithArrows from "./ReusableTextWithArrows";

const FavouriteProjects = () => {
  const intl = useIntl();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#EADEC6] lg:py-16">
      <div className="w-full max-w-[1500px] h-full lg:h-[650px] mx-auto px-4 md:px-16">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start relative top-[-70px]">

              <div className="flex flex-col flex-1 gap-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center lg:w-[88%] gap-2">
                    <Image
                      src="/images/H-icon.png"
                      alt="H Icon"
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                    <ReusableTextWithArrows
                      firstWord={intl.formatMessage({
                        id: "favouriteProjects.title.firstWord",
                      })}
                      secondWord={intl.formatMessage({
                        id: "favouriteProjects.title.secondWord",
                      })}
                      showArrows={false}
                      showBackground={false}
                      showIcon={false}
                    />
                  </div>
                  <div className="text-right w-[11%]">
                    <p className="text-[#8F6126] text-sm">
                      {intl.formatMessage({
                        id: "favouriteProjects.counter.slide1",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-10">
                  <div className="flex flex-col w-full gap-4 md:w-1/2">
                    <div className="relative w-full h-[371px] md:w-[270px] md:h-[311px] rounded-xl overflow-hidden mt-[-70px] lg:mt-0">
                      <Image
                        src="/images/fav1.png"
                        alt="Small Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[#8F6126] text-sm leading-relaxed">
                      {intl.formatMessage({
                        id: "favouriteProjects.slide1.smallText",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col w-full gap-4 md:w-1/2">
                    <div>
                      <h3 className="text-xl font-semibold text-[#8F6126]">
                        {intl.formatMessage({
                          id: "favouriteProjects.slide1.projectTitle",
                        })}
                      </h3>
                      <p className="mt-2 text-[#8F6126] text-sm leading-relaxed">
                        {intl.formatMessage({
                          id: "favouriteProjects.slide1.projectDescription",
                        })}
                      </p>
                    </div>

                    <div className="hidden lg:block relative w-full h-[320px] rounded-xl overflow-hidden">
                      <Image
                        src="/images/bg_removal [Background removed].png"
                        alt="Project Image"
                        fill
                        className="object-cover scale-x-[-1] object-bottom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#EADEC6] via-[#EADEC6]/95 via-[#EADEC6]/80 to-transparent" />
                      <div className="relative w-[98%] top-[100px]">
                        <ReusableTextWithArrows
                          showBackground={false}
                          showArrows={true}
                          showIcon={false}
                          onNext={() => swiperRef.current?.slideNext()}
                          onPrev={() => swiperRef.current?.slidePrev()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-1 mt-6 md:justify-end lg:block lg:mt-0">
                <div className="relative w-full h-[300px] lg:h-[700px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/fav2.png"
                    alt="Large Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ================== Slide 2 ================== */}
          <SwiperSlide>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex flex-col flex-1 gap-6">
                <div className="flex items-center justify-between w-full">
                  <div className="w-[88%]">
                    <ReusableTextWithArrows
                      firstWord={intl.formatMessage({
                        id: "favouriteProjects.title.firstWord",
                      })}
                      secondWord={intl.formatMessage({
                        id: "favouriteProjects.title.secondWord",
                      })}
                      showArrows={false}
                      showBackground={false}
                    />
                  </div>
                  <div className="w-[11%] text-right">
                    <p className="text-[#8F6126] text-sm">
                      {intl.formatMessage({
                        id: "favouriteProjects.counter.slide2",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-10">
                  {/* الصورة الصغيرة + نص */}
                  <div className="flex flex-col w-full gap-4 md:w-1/2">
                    <div className="relative w-full h-[311px] md:w-[270px] md:h-[311px] rounded-xl overflow-hidden">
                      <Image
                        src="/images/fav2.png"
                        alt="Small Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[#8F6126] text-sm leading-relaxed">
                      {intl.formatMessage({
                        id: "favouriteProjects.slide2.smallText",
                      })}
                    </p>
                  </div>

                  {/* عنوان + وصف + الصورة الكبيرة داخل العمود الأول */}
                  <div className="flex flex-col w-full gap-4 md:w-1/2">
                    <div>
                      <h3 className="text-xl font-semibold text-[#8F6126]">
                        {intl.formatMessage({
                          id: "favouriteProjects.slide2.projectTitle",
                        })}
                      </h3>
                      <p className="mt-2 text-[#8F6126] text-sm leading-relaxed">
                        {intl.formatMessage({
                          id: "favouriteProjects.slide2.projectDescription",
                        })}
                      </p>
                    </div>
                    <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
                      <Image
                        src="/images/bg_removal [Background removed].png"
                        alt="Project Image"
                        fill
                        className="object-cover scale-x-[-1] object-bottom"
                      />
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#EADEC6] via-[#EADEC6]/95 via-[#EADEC6]/80 to-transparent" />
                      <div className="relative w-[98%] top-[100px]">
                        <ReusableTextWithArrows
                          showBackground={false}
                          showArrows={true}
                          showIcon={false}
                          onNext={() => swiperRef.current?.slideNext()}
                          onPrev={() => swiperRef.current?.slidePrev()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* العمود الثاني - الصورة الكبيرة */}
              <div className="flex justify-center flex-1 mt-6 md:justify-end lg:block lg:mt-0">
                <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/fav1.png"
                    alt="Large Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FavouriteProjects;
