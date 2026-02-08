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
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full max-w-[1512px] mx-auto bg-[#AB957E] text-white overflow-hidden relative"
    >
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1  md:grid-cols-2">
        {/* Image 1 */}
        <div className="relative h-[260px] md:h-[378px]">
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
                "linear-gradient(270deg, rgba(171, 149, 126, 0) 92.88%, #AB957E 100%)",
            }}
          />
        </div>

        {/* Image 2 + Content */}
        <div className="relative md:h-[378px] h-auto">
          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover scale-y-[-1]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(0deg, #AB957E 8.45%, rgba(171, 149, 126, 0) 63.87%),
                linear-gradient(0deg, rgba(171, 149, 126, 0) 84.1%, rgba(171, 149, 126, 0.86) 100%),
                linear-gradient(90deg, #AB957E 0%, rgba(171, 149, 126, 0) 25.46%),
                linear-gradient(90deg, rgba(171, 149, 126, 0) 71.61%, #AB957E 100.02%)
              `,
            }}
          />

          <div className="md:absolute relative left-4 right-4 md:left-10 md:top-10 md:p-6 p-4">
          
                      <div className="relative w-[140px] h-[45px] mb-4">
                        <Image
                          src="/images/footer-logo.png"
                          alt="Logo"
                          fill
                          className={`object-contain ${
                            locale === "ar" ? "object-right" : "object-left"
                          }`}
                        />
                      </div>
          
                      <p className="text-[16px] md:text-[16px] leading-relaxed mb-4">
                        {locale === "ar" ? (
                          <>
                            همه العقارية تتميز في التسويق الحديث للعقارات، مستفيدة من قاعدة
                            بيانات واسعة <br /> وفريق خبراء لترويج المشاريع بشكل فعال وجذاب.
                          </>
                        ) : (
                          <>
                            Hemma Real Estate excels in modern marketing, leveraging a vast
                            database and an expert team.
                          </>
                        )}
                      </p>
          
                      <button className="border border-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-[#AB957E] transition">
                        {locale === "ar" ? "سجل اهتمامك" : "Register your interest"}
                      </button>
                    </div>
                  </div>
                
       
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className=" px-4 py-6
  relative md:absolute md:bottom-5 md:left-0 w-full md:px-20 md:py-0 z-40 border border-white">
        <div className="max-w-[1342px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-90">

          {/* Social Icons */}
          <div className="flex items-center gap-2 order-4 md:order-1">
            {/* Instagram */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="22.05" height="22.05" rx="11.025" stroke="white"/>
                <path d="M5.56787 11.5252C5.56787 8.71708 5.56787 7.31242 6.44014 6.44014C7.31242 5.56787 8.71646 5.56787 11.5252 5.56787C14.3332 5.56787 15.7379 5.56787 16.6102 6.44014C17.4825 7.31242 17.4825 8.71646 17.4825 11.5252C17.4825 14.3332 17.4825 15.7379 16.6102 16.6102C15.7379 17.4825 14.3339 17.4825 11.5252 17.4825C8.71708 17.4825 7.31242 17.4825 6.44014 16.6102Z"
                  stroke="white" strokeWidth="0.940625"/>
                <path d="M14.979 8.07617H14.9727" stroke="white" strokeWidth="0.940625"/>
              </svg>
            </a>

            {/* X */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="22.05" height="22.05" rx="11.025" stroke="white"/>
                <path d="M5.88135 17.1688L10.6146 12.4356M10.6146 12.4356L5.88135 5.88135H9.01676L12.4356 10.6146"
                  stroke="white" strokeWidth="0.940625"/>
              </svg>
            </a>

            {/* Snapchat */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="22.05" height="22.05" rx="11.025" stroke="white"/>
                <path d="M8.12393 8.65569C8.12393 7.75361 8.48228 6.88848 9.12015 6.25061C9.75801 5.61274 10.6231 5.25439 11.5252 5.25439C12.4273 5.25439 13.2924 5.61274 13.9303 6.25061C14.5682 6.88848 14.9265 7.75361 14.9265 8.65569C14.9265 11.6331 15.0751 13.1218 17.7961 14.312C16.4027 14.6606 16.054 15.0093 15.706 16.4027C13.2666 16.4027 12.9186 17.7961 11.5252 17.7961C10.1318 17.7961 9.78319 16.4027 7.34446 16.4027C6.99643 15.0093 6.6484 14.6606 5.25439 14.312C7.97531 13.1218 8.12393 11.6331 8.12393 8.65569Z"
                  stroke="white" strokeWidth="0.940625"/>
                <path d="M5.25439 14.0336C7.65236 12.7274 7.65236 11.4939 5.85389 9.64404M17.7961 14.0336C15.3981 12.7274 15.3981 11.4939 17.1966 9.64404"
                  stroke="white" strokeWidth="0.940625"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="22.05" height="22.05" rx="11.025" stroke="white"/>
                <path d="M5.56787 11.5252C5.56787 8.71708 5.56787 7.31242 6.44014 6.44014C7.31242 5.56787 8.71646 5.56787 11.5252 5.56787C14.3332 5.56787 15.7379 5.56787 16.6102 6.44014C17.4825 7.31242 17.4825 8.71646 17.4825 11.5252C17.4825 14.3332 17.4825 15.7379 16.6102 16.6102C15.7379 17.4825 14.3339 17.4825 11.5252 17.4825C8.71708 17.4825 7.31242 17.4825 6.44014 16.6102C5.56787 15.7379 5.56787 14.3339 5.56787 11.5252Z"
                  stroke="white" strokeWidth="0.940625"/>
                <path d="M10.6069 10.9033C10.0927 10.8306 8.92007 10.9504 8.34566 12.0133C7.77125 13.0762 8.35005 14.1823 8.71187 14.6025C9.06869 14.9957 10.2031 15.74 11.4065 15.0132C11.7049 14.8333 12.0768 14.6984 12.4982 13.2906L12.4493 7.75098C12.3678 8.36113 13.0419 9.79213 14.9601 9.96145"
                  stroke="white" strokeWidth="0.940625"/>
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="22.05" height="22.05" rx="11.025" stroke="white"/>
                <polygon points="10,8 16,12 10,16" fill="white"/>
              </svg>
            </a>
          </div>

          {/* Rights */}
          <div className="order-3 md:order-4 text-center">
            جميع الحقوق محفوظة © 2018 - 2026
          </div>

<div className="flex flex-wrap justify-center gap-4 order-2 md:order-3 items-center">
  <span className="order-2 md:order-1">رقم الدائرة / الخدمة: 920014659</span>
  {/* Links */}
  <div className="flex gap-3 order-1 md:order-2">
    <a href="#" className="underline">سياسة الخصوصية</a>
    <a href="#" className="underline">الشروط والأحكام</a>
    <a href="#" className="underline">موقع الشركة</a>
  </div>

</div>
        </div>
        
       </div>
    </footer>
  );
};

export default FooterCustom;
