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
        <div className="relative h-[320px] md:h-[378px]">
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

          <div className="absolute  left-4 right-4 md:left-8 md:top-20 md:right-8 bg-white/15 backdrop-blur-md rounded-2xl p-5 md:p-6">
          
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
          
                      <p className="text-sm md:text-base leading-relaxed mb-4">
                        {locale === "ar" ? (
                          <>
                            همه العقارية تتميز في التسويق الحديث للعقارات، مستفيدة من قاعدة
                            بيانات واسعة وفريق خبراء لترويج المشاريع بشكل فعال وجذاب.
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
      <div className="absolute bottom-5 left-0 w-full md:px-20 py-2 z-40 border border-white">
        <div className="max-w-[1342px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-90">

          

          {/* Rights */}
          <div className="order-1 md:order-2 text-center">
            جميع الحقوق محفوظة © 2018 - 2026
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 order-2 md:order-3">
            <span>رقم الدائرة / الخدمة: 920014659</span>
            <a href="#" className="underline">سياسة الخصوصية</a>
            <a href="#" className="underline">الشروط والأحكام</a>
            <a href="#" className="underline">موقع الشركة</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
