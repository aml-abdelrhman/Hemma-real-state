"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "../../context/LangContext";
import ar from "../i18n/ar";
import en from "../i18n/en";

const FooterCustom: React.FC = () => {
  const { locale } = useLang();
  const t = locale === "ar" ? ar : en;

  return (
    <footer
      className="relative flex flex-col gap-40 border border-white md:flex-row w-[402px] h-[855px] md:w-full md:h-[378px] max-w-[1512px] mx-auto bg-[#AB957E] overflow-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* ===== TOP SECTION ===== */}
      <div className="relative w-full  flex flex-col  md:flex-row h-[378px]">
        {/* Image 1 */}
        <div className="relative flex-1 h-[226px]">
          <Image
            src="/images/footer1.png"
            alt="Footer Image 1"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(171,149,126,0) 92.88%, #AB957E 100%)",
            }}
          />
        </div>


         <div
            className="absolute inset-0 "
            style={{
              background: `
                linear-gradient(0deg, #AB957E 8.45%, rgba(171,149,126,0) 63.87%),
                linear-gradient(90deg, #AB957E 0%, rgba(171,149,126,0) 30%),
                linear-gradient(90deg, rgba(171,149,126,0) 70%, #AB957E 100%)
              `,
            }}
          />
                   <div className="absolute z-20 top-10 border border-white
 w-[370px] h-[319px] items-start md:top-14 p-4 w-full max-w-[739px] flex flex-col gap-5">
            <div className="relative z-100 w-[120px] h-[40px] md:w-[170px] md:h-[55px] lg:w-[200px] lg:h-[70px]  p-2 md:p-4 lg:p-6">
              <Image
                src="/images/footer-logo.png"
                alt="Logo"
                fill
                className={`object-contain ${
                  locale === "ar" ? "object-right" : "object-left"
                }`}
                priority
              />
            </div>

            <p className="text-white z-20 text-[20px] md:text-[22px] leading-relaxed">
              {locale === "ar" ? (
                <>
                  <span>
                    همه العقارية تتميز في التسويق الحديث للعقارات، مستفيدة من
                    قاعدة بيانات واسعة{" "}
                  </span>
                  <span>
                    للعملاء وفريق خبراء لترويج المشاريع بشكل فعال وجذاب، ومخصص
                    لتلبية احتياجات العملاء.
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Hemma Real Estate excels in modern marketing, leveraging a
                    vast database{" "}
                  </span>
                  <span>and expert team.</span>
                </>
              )}
            </p>

            <button className="bg-transparent text-white  border border-white px-8 py-2.5 rounded-md w-fit mx-auto md:mx-0 underline decoration-white underline-offset-2 hover:bg-gray-100 transition">
              {locale === "ar" ? "سجل اهتمامك" : "Register your interest"}
            </button>
          </div>
        {/* Image 2 */}
        <div className="relative  h-[319px] md: flex-1 ">

          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover scale-y-[-1]"
          />

          

        </div>
      </div>

      {/* ===== BOTTOM SECTION (SOURCE: FOOTER) ===== */}
      <div
        className="
          relative
         
          w-full
          max-w-[1342px]
          h-[198px]
          mx-auto
          px-3
          pb-3
          flex flex-col md:flex-row
          items-center md:items-center
          justify-between
          gap-6
          text-white
          opacity-80
          border border-primary
        "
      >
        <div className="w-full max-w-[1342px] mx-auto px2 py-2 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-opacity-90">
          {/* Column 1: Social Icons */}
          <div className=" w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 py-2 px-2 md:px-0">
            <div className="flex items-center  order-4 gap-2">
              {/* Instagram */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.05"
                    height="22.05"
                    rx="11.025"
                    stroke="white"
                  />
                  <path
                    d="M5.56787 11.5252C5.56787 8.71708 5.56787 7.31242 6.44014 6.44014C7.31242 5.56787 8.71646 5.56787 11.5252 5.56787C14.3332 5.56787 15.7379 5.56787 16.6102 6.44014C17.4825 7.31242 17.4825 8.71646 17.4825 11.5252C17.4825 14.3332 17.4825 15.7379 16.6102 16.6102C15.7379 17.4825 14.3339 17.4825 11.5252 17.4825C8.71708 17.4825 7.31242 17.4825 6.44014 16.6102C5.56787 15.7379 5.56787 14.3339 5.56787 11.5252Z"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.979 8.07617H14.9727M14.3469 11.5251C14.3469 12.2735 14.0496 12.9913 13.5204 13.5205C12.9912 14.0497 12.2734 14.347 11.525 14.347C10.7766 14.347 10.0588 14.0497 9.52963 13.5205C9.00043 12.9913 8.70313 12.2735 8.70313 11.5251C8.70312 10.7767 9.00043 10.059 9.52963 9.52976C10.0588 9.00056 10.7766 8.70326 11.525 8.70326C12.2734 8.70326 12.9912 9.00056 13.5204 9.52976C14.0496 10.059 14.3469 10.7767 14.3469 11.5251Z"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.05"
                    height="22.05"
                    rx="11.025"
                    stroke="white"
                  />
                  <path
                    d="M5.88135 17.1688L10.6146 12.4356M10.6146 12.4356L5.88135 5.88135H9.01676L12.4356 10.6146M10.6146 12.4356L14.0334 17.1688H17.1688L12.4356 10.6146M17.1688 5.88135L12.4356 10.6146"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Snapchat */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.05"
                    height="22.05"
                    rx="11.025"
                    stroke="white"
                  />
                  <path
                    d="M8.12393 8.65569C8.12393 7.75361 8.48228 6.88848 9.12015 6.25061C9.75801 5.61274 10.6231 5.25439 11.5252 5.25439C12.4273 5.25439 13.2924 5.61274 13.9303 6.25061C14.5682 6.88848 14.9265 7.75361 14.9265 8.65569C14.9265 11.6331 15.0751 13.1218 17.7961 14.312C16.4027 14.6606 16.054 15.0093 15.706 16.4027C13.2666 16.4027 12.9186 17.7961 11.5252 17.7961C10.1318 17.7961 9.78319 16.4027 7.34446 16.4027C6.99643 15.0093 6.6484 14.6606 5.25439 14.312C7.97531 13.1218 8.12393 11.6331 8.12393 8.65569Z"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25439 14.0336C7.65236 12.7274 7.65236 11.4939 5.85389 9.64404M17.7961 14.0336C15.3981 12.7274 15.3981 11.4939 17.1966 9.64404"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* YouTube (Camera Icon from User) */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.05"
                    height="22.05"
                    rx="11.025"
                    stroke="white"
                  />
                  <path
                    d="M5.56787 11.5252C5.56787 8.71708 5.56787 7.31242 6.44014 6.44014C7.31242 5.56787 8.71646 5.56787 11.5252 5.56787C14.3332 5.56787 15.7379 5.56787 16.6102 6.44014C17.4825 7.31242 17.4825 8.71646 17.4825 11.5252C17.4825 14.3332 17.4825 15.7379 16.6102 16.6102C15.7379 17.4825 14.3339 17.4825 11.5252 17.4825C8.71708 17.4825 7.31242 17.4825 6.44014 16.6102C5.56787 15.7379 5.56787 14.3339 5.56787 11.5252Z"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6069 10.9033C10.0927 10.8306 8.92007 10.9504 8.34566 12.0133C7.77125 13.0762 8.35005 14.1823 8.71187 14.6025C9.06869 14.9957 10.2031 15.74 11.4065 15.0132C11.7049 14.8333 12.0768 14.6984 12.4982 13.2906L12.4493 7.75098C12.3678 8.36113 13.0419 9.79213 14.9601 9.96145"
                    stroke="white"
                    strokeWidth="0.940625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* TikTok (Standard Path) */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.05"
                    height="22.05"
                    rx="11.025"
                    stroke="white"
                  />
                  <polygon points="10,8 16,12 10,16" fill="white" />
                </svg>
              </a>
            </div>

            {/* Rights */}
            <div className="text-[16px] order-3 md:text-[14px] text-center">
              جميع الحقوق محفوظة © 2018 - 2026
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-0 text-[14px] md:text-[14px]">
              <span className="order-2 ">رقم الدائرة / الخدمة: 920014659</span>
              <div className="order-1 flex gap-3 md:gap-1 ">
                <a href="#" className="underline">
                  سياسة الخصوصية
                </a>
                <a href="#" className="underline">
                  الشروط والأحكام
                </a>
                <a href="#" className="underline">
                  موقع الشركة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
