"use client";

import React from "react";
import Image from "next/image";
import { useIntl } from "react-intl";

const FooterCustom: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale;

  return (
    <footer
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full max-w-[1512px] mx-auto bg-[#AB957E] text-white overflow-hidden relative"
    >
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[378px]">
        {/* Image 1 */}
        <div className="relative h-[260px] md:h-[378px]">
          <Image
            src="/images/footer1.png"
            alt={intl.formatMessage({ id: "footer.image1Alt" })}
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
            src="/images/bg_removal [Background removed].png"
            alt={intl.formatMessage({ id: "footer.image2Alt" })}
            fill
            className="object-cover object-top scale-y-[-1]"
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

          <div className="relative w-full p-3 lg:absolute lg:top-10 lg:left-10 lg:right-10 lg:p-6">
            <div className="relative w-[140px] h-[45px] mb-4">
              <Image
                src="/images/footer-logo.png"
                alt={intl.formatMessage({ id: "footer.logoAlt" })}
                fill
                className={`object-contain ${locale === "ar" ? "object-right" : "object-left"}`}
              />
            </div>

            <p className="text-[20px] md:text-[16px] font-normal leading-relaxed mb-4">
              {intl.formatMessage({ id: "footer.descriptionLine1" })}
              <br />
              {intl.formatMessage({ id: "footer.descriptionLine2" })}
            </p>

            <button className="border border-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-[#AB957E] transition">
              {intl.formatMessage({ id: "footer.cta" })}
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="relative z-40 w-full px-4 py-6 md:absolute md:bottom-10 md:left-0 md:px-20 md:py-0">
        <div className="max-w-[1342px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-90">
          {/* Social Icons */}
          <div className="flex items-center order-4 gap-2 md:order-1">
            {/* Instagram */}
            {/* Instagram */}
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
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
                  stroke-width="0.940625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.979 8.07617H14.9727M14.3469 11.5251C14.3469 12.2735 14.0496 12.9913 13.5204 13.5205C12.9912 14.0497 12.2734 14.347 11.525 14.347C10.7766 14.347 10.0588 14.0497 9.52963 13.5205C9.00043 12.9913 8.70313 12.2735 8.70313 11.5251C8.70312 10.7767 9.00043 10.059 9.52963 9.52976C10.0588 9.00056 10.7766 8.70326 11.525 8.70326C12.2734 8.70326 12.9912 9.00056 13.5204 9.52976C14.0496 10.059 14.3469 10.7767 14.3469 11.5251Z"
                  stroke="white"
                  stroke-width="0.940625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            {/* X */}
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              aria-label="X"
            >
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
                  stroke-width="0.940625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            {/* Snapchat */}
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              aria-label="Snapchat"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                />
                <path
                  d="M5.25439 14.0336C7.65236 12.7274 7.65236 11.4939 5.85389 9.64404M17.7961 14.0336C15.3981 12.7274 15.3981 11.4939 17.1966 9.64404"
                  stroke="white"
                  strokeWidth="0.940625"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              aria-label="YouTube"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                />
                <path
                  d="M10.6069 10.9033C10.0927 10.8306 8.92007 10.9504 8.34566 12.0133C7.77125 13.0762 8.35005 14.1823 8.71187 14.6025C9.06869 14.9957 10.2031 15.74 11.4065 15.0132C11.7049 14.8333 12.0768 14.6984 12.4982 13.2906L12.4493 7.75098C12.3678 8.36113 13.0419 9.79213 14.9601 9.96145"
                  stroke="white"
                  strokeWidth="0.940625"
                />
              </svg>
            </a>

            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              aria-label="TikTok"
            >
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
                  d="M11.5252 16.8553C12.6602 16.8553 13.7482 16.743 14.7566 16.5373C16.017 16.2802 16.6466 16.1523 17.221 15.4136C17.7961 14.6743 17.7961 13.8258 17.7961 12.1289V10.9212C17.7961 9.22429 17.7961 8.37522 17.221 7.63651C16.6466 6.89781 16.017 6.76926 14.7566 6.51278C13.6927 6.29954 12.6102 6.19304 11.5252 6.19485C10.3902 6.19485 9.30222 6.30709 8.29387 6.51278C7.03343 6.76988 6.40384 6.89781 5.82943 7.63651C5.25439 8.37584 5.25439 9.22429 5.25439 10.9212V12.1289C5.25439 13.8258 5.25439 14.6749 5.82943 15.4136C6.40384 16.1523 7.03343 16.2809 8.29387 16.5373C9.30222 16.743 10.3902 16.8553 11.5252 16.8553Z"
                  stroke="white"
                  stroke-width="0.940625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0089 11.721C13.9161 12.1009 13.4208 12.373 12.4309 12.9191C11.3537 13.5129 10.8152 13.8094 10.3795 13.6947C10.2343 13.6572 10.0986 13.5894 9.98134 13.4959C9.64404 13.2232 9.64404 12.6571 9.64404 11.5248C9.64404 10.3925 9.64404 9.82636 9.98134 9.55363C10.0955 9.46147 10.2321 9.39313 10.3795 9.35489C10.8152 9.24016 11.3537 9.53671 12.4309 10.1304C13.4214 10.6759 13.9161 10.9486 14.0089 11.3285C14.0402 11.4577 14.0402 11.5919 14.0089 11.721Z"
                  stroke="white"
                  stroke-width="0.940625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Rights */}
          <div className="order-3 text-center md:order-2">
            {intl.formatMessage({ id: "footer.rights" })}
          </div>

          {/* Links & Contact */}
          <div className="flex flex-wrap items-center justify-center order-2 gap-4 md:order-3">
            <span className="order-2 md:order-3">
              {intl.formatMessage({ id: "footer.contactNumber" })}
            </span>
            <div className="flex order-1 gap-3 md:order-4">
              <a href="#" className="underline">
                {intl.formatMessage({ id: "footer.privacy" })}
              </a>
              <a href="#" className="underline">
                {intl.formatMessage({ id: "footer.terms" })}
              </a>
              <a href="#" className="underline">
                {intl.formatMessage({ id: "footer.website" })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
