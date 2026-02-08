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
      className="w-full bg-[#AB957E] text-white overflow-hidden relative"
    >
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image 1 */}
        <div className="relative h-[260px] md:h-[378px] w-full">
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
        <div className="relative w-full h-[378px] md:h-[378px]">
          <Image
            src="/images/footer2.png"
            alt="Footer Image 2"
            fill
            className="object-cover object-top scale-y-[-1]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(0deg, #AB957E 8%, rgba(171,149,126,0) 64%),
                linear-gradient(0deg, rgba(171,149,126,0) 84%, rgba(171,149,126,0.86) 100%),
                linear-gradient(90deg, #AB957E 0%, rgba(171,149,126,0) 25%),
                linear-gradient(90deg, rgba(171,149,126,0) 72%, #AB957E 100%)
              `,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 py-4 md:py-6">
            <div className="relative w-[140px] h-[45px] mb-4 mx-auto md:mx-0">
              <Image
                src="/images/footer-logo.png"
                alt="Logo"
                fill
                className={`object-contain ${
                  locale === "ar" ? "object-right" : "object-left"
                }`}
              />
            </div>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-relaxed mb-4 text-center md:text-left">
              {locale === "ar" ? (
                <>
                  همه العقارية تتميز في التسويق الحديث للعقارات، مستفيدة من قاعدة
                  بيانات واسعة <br /> للعملاء وفريق خبراء لترويج المشاريع بشكل فعال
                  وجذاب، ومخصص لتلبية احتياجات العملاء
                </>
              ) : (
                <>Hemma Real Estate excels in modern marketing, leveraging a vast database and an expert team.</>
              )}
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="border border-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-[#AB957E] transition">
                {locale === "ar" ? "سجل اهتمامك" : "Register your interest"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="w-full px-4 py-6 md:px-20 md:py-8">
        <div className="max-w-[1342px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm opacity-90">

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            {["instagram","x","snapchat","youtube","tiktok"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="22" height="22" rx="11" stroke="white" />
                  {/* ضع هنا path الخاص بكل أيقونة */}
                  {/* لاحظ أن هذه مجرد إطار أيقونة، يمكن وضع path حقيقية لكل أيقونة */}
                </svg>
              </a>
            ))}
          </div>

          {/* Rights */}
          <div className="text-center md:text-left">
            جميع الحقوق محفوظة © 2018 - 2026
          </div>

          {/* Contact & Links */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-end gap-3 text-center md:text-right">
            <span>رقم الدائرة / الخدمة: 920014659</span>
            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
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
