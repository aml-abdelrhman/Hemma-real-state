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
      className="
        relative
        max-w-[1512px]
        mx-auto
        bg-[#AB957E]
        overflow-hidden
        flex
        flex-col
      "
    >
      {/* ================= TOP SECTION ================= */}
      <div className="relative flex flex-col md:flex-row h-[855px] md:h-[378px]">
        {/* Image 1 */}
        <div className="relative flex-1 h-[226px] md:h-full">
          <Image
            src="/images/footer1.png"
            alt="Footer Image 1"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient from your code */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(171,149,126,0) 92.88%, #AB957E 100%)",
            }}
          />
        </div>

        {/* Center Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(0deg, #AB957E 8.45%, rgba(171,149,126,0) 63.87%),
              linear-gradient(90deg, #AB957E 0%, rgba(171,149,126,0) 30%),
              linear-gradient(90deg, rgba(171,149,126,0) 70%, #AB957E 100%)
            `,
          }}
        />

        {/* Content Box */}
        <div
          className="
            absolute
            z-20
            top-10
            md:top-14
            left-1/2
            -translate-x-1/2
            w-full
            max-w-[739px]
            p-4
            flex
            flex-col
            gap-5
          "
        >
          {/* Logo */}
          <div className="relative w-[120px] h-[40px] md:w-[170px] md:h-[55px] lg:w-[200px] lg:h-[70px]">
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

          {/* Text */}
          <p className="text-white text-[20px] md:text-[22px] leading-relaxed">
            {locale === "ar" ? (
              <>
                <span>
                  همه العقارية تتميز في التسويق الحديث للعقارات، مستفيدة من قاعدة
                  بيانات واسعة{" "}
                </span>
                <span>
                  للعملاء وفريق خبراء لترويج المشاريع بشكل فعال وجذاب، ومخصص
                  لتلبية احتياجات العملاء.
                </span>
              </>
            ) : (
              <>
                <span>
                  Hemma Real Estate excels in modern marketing, leveraging a vast
                  database{" "}
                </span>
                <span>and expert team.</span>
              </>
            )}
          </p>

          {/* Button */}
          <button className="w-fit mx-auto md:mx-0 px-8 py-2.5 border border-white text-white rounded-md underline underline-offset-2 hover:bg-white/10 transition">
            {locale === "ar" ? "سجل اهتمامك" : "Register your interest"}
          </button>
        </div>

        {/* Image 2 */}
        <div className="relative flex-1 h-[319px] md:h-full">
          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover scale-y-[-1]"
          />
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div
        className="
          w-full
          max-w-[1342px]
          mx-auto
          px-3
          py-4
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          text-white
          opacity-80
        "
      >
        {/* Social Icons */}
        <div className="flex items-center gap-2 order-4 md:order-1">
          {/* نفس الأيقونات SVG بتاعتك — زي ما هي */}
          {/* Instagram / X / Snapchat / YouTube / TikTok */}
          {/* (مقصود أسيبهم زي ما هم من غير أي تعديل) */}
        </div>

        {/* Rights */}
        <div className="text-[16px] md:text-[14px] text-center order-3">
          جميع الحقوق محفوظة © 2018 - 2026
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3 text-[14px] order-2">
          <span>رقم الدائرة / الخدمة: 920014659</span>
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
    </footer>
  );
};

export default FooterCustom;
