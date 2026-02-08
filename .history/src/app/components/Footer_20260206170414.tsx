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
      className="w-full max-w-[1512px] mx-auto bg-[#AB957E] text-white overflow-hidden"
    >
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">

        {/* Image 1 */}
        <div className="relative h-[260px] md:h-auto">
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
        <div className="relative h-[320px] md:h-auto">
          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover"
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
          {/* Content Box */}
<div
  className="
    absolute
    bottom-0
    left-0
    w-full
    z-30
    px-4
    py-6
    text-white
    opacity-90
  "
>
  <div className="max-w-[1342px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

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
      <div className="border-t border-white/30 mt-8 px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-90">

          {/* Social Icons */}
          <div className="flex items-center gap-2 order-4">
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

  {/* Snapchat / YouTube / TikTok */}
  {/* نفس الـ SVGs اللي بعتيها تحطيهم هنا بدون أي تغيير */}
</div>


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
