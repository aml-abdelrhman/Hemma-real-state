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
<div className="absolute inset-0" style={{ background: "linear-gradient(270deg, rgba(171,149,126,0) 92.88%, #AB957E 100%)", }} /> </div>

        {/* Image 2 + Content */}
        <div className="relative h-[320px] md:h-auto">
          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#AB957E]/90 via-[#AB957E]/40 to-transparent" />

          {/* Content Box */}
          <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 bg-white/15 backdrop-blur-md rounded-2xl p-5 md:p-6">

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
          <div className="flex gap-3 order-3 md:order-1">
            {[
              "instagram",
              "x",
              "snapchat",
              "youtube",
              "tiktok",
            ].map((icon, i) => (
              <a key={i} href="#" className="hover:opacity-70 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            ))}
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
