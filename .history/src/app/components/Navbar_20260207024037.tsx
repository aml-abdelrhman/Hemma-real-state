'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../context/LangContext';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { locale, t, setLocale } = useLang();

   const switchLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');


  const navLinks = [
    { key: 'works', label: t?.nav?.works || 'Home', href: '/' },
    { key: 'about', label: t?.nav?.about || 'Projects', href: '/projects' },
    { key: 'contact', label: t?.nav?.contact || 'Off-Plan Sales', href: '/off-plan-sales' },
    { key: 'chairman', label: t?.nav?.chairman || 'Lands', href: '/lands' },
    { key: 'board', label: t?.nav?.board || 'Events', href: '/events' },
    { key: 'plan', label: t?.nav?.plan || 'Our Work Methodology', href: '/methodology' },
    { key: 'work', label: t?.nav?.work || 'Careers', href: '/careers' },
    { key: 'last', label: t?.nav?.last || 'Developers', href: '/developers' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-3 flex items-center justify-between bg-transparent">

      {/* ================= Logo ================= */}
      <div className="relative w-[96px] h-[32px] md:w-[180px] md:h-[60px] flex-shrink-0">
        <Image
          src="/images/nav-logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ================= Desktop Navbar ================= */}
      <div
        className="
          hidden md:flex flex-1 items-center justify-center
          flex-nowrap gap-8
          bg-gray-200/40 backdrop-blur-[25px]
          rounded-2xl px-8 py-3 md:w-[945px] md:h-[80px]
          max-w-[1100px]
        "
      >
        {/* Links */}
        {navLinks.map(link => (
          <Link
            key={link.key}
            href={link.href}
            className="
              flex items-center gap-1
              whitespace-nowrap
              text-[16px] font-medium
              text-white hover:text-gray-200
              transition
            "
          >
            {link.label}
          </Link>
        ))}

        {/* Separator */}
        <div className="hidden md:block h-8 w-[1px] bg-white/60 mx-4" />

        {/* Search + Language */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Search */}
          <div className="w-5 h-5 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.927 17.04L20.4 20.4M19.28 11.44
                   C19.28 15.77 15.77 19.28 11.44 19.28
                   C7.11 19.28 3.6 15.77 3.6 11.44
                   C3.6 7.11 7.11 3.6 11.44 3.6
                   C15.77 3.6 19.28 7.11 19.28 11.44Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Language */}
          <button
  onClick={switchLanguage}
  className="w-[46px] h-[24px] flex items-center justify-center"
>
  {locale === 'ar' ? (
    // أيقونة الإنجليزية (EN)
    <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.952 17H1.52V5.576H7.952V7.048H3.248V10.312H7.664V11.768H3.248V15.512H7.952V17ZM19.8023 17H17.7063L11.9303 7.768H11.8663C11.8769 7.98133 11.8876 8.21067 11.8983 8.456C11.9196 8.70133 11.9356 8.96267 11.9463 9.24C11.9569 9.50667 11.9676 9.784 11.9783 10.072C11.9889 10.3493 11.9943 10.632 11.9943 10.92V17H10.4263V5.576H12.5063L18.2663 14.76H18.3142C18.3036 14.6 18.2929 14.4027 18.2823 14.168C18.2716 13.9227 18.2609 13.6613 18.2503 13.384C18.2503 13.1067 18.2449 12.824 18.2343 12.536C18.2236 12.248 18.2129 11.976 18.2023 11.72V5.576H19.8023V17Z" fill="white"/>
      <path d="M38.8 9.60002L34 14.4L29.2 9.60002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    // أيقونة العربية (AR) بنفس تصميم SVG
    <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17H1V5H7V7H3V10H7V12H3V15H7V17ZM20 17H17L12 8H12.05C12.05 8.2 12.05 8.45 12.05 8.7C12.05 8.95 12.05 9.2 12.05 9.45C12.05 9.7 12.05 9.95 12.05 10.2V17H10.5V5H12.5L18 14H18.05C18.05 13.8 18.05 13.55 18.05 13.3C18.05 13.05 18.05 12.8 18.05 12.55C18.05 12.3 18 12 18 11.75V5H20V17Z" fill="white"/>
      <path d="M39 10L34 15L29 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )}
</button>
      {/* ================= Mobile Navbar ================= */}
      <div className="flex md:hidden items-center gap-4">
        {/* Search */}
        <div className="w-5 h-5 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.927 17.04L20.4 20.4M19.28 11.44
                 C19.28 15.77 15.77 19.28 11.44 19.28
                 C7.11 19.28 3.6 15.77 3.6 11.44
                 C3.6 7.11 7.11 3.6 11.44 3.6
                 C15.77 3.6 19.28 7.11 19.28 11.44Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Language */}
         <button
  onClick={switchLanguage}
  className="w-[46px] h-[24px] flex items-center justify-center"
>
  {locale === 'ar' ? (
    // أيقونة الإنجليزية (EN)
    <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.952 17H1.52V5.576H7.952V7.048H3.248V10.312H7.664V11.768H3.248V15.512H7.952V17ZM19.8023 17H17.7063L11.9303 7.768H11.8663C11.8769 7.98133 11.8876 8.21067 11.8983 8.456C11.9196 8.70133 11.9356 8.96267 11.9463 9.24C11.9569 9.50667 11.9676 9.784 11.9783 10.072C11.9889 10.3493 11.9943 10.632 11.9943 10.92V17H10.4263V5.576H12.5063L18.2663 14.76H18.3142C18.3036 14.6 18.2929 14.4027 18.2823 14.168C18.2716 13.9227 18.2609 13.6613 18.2503 13.384C18.2503 13.1067 18.2449 12.824 18.2343 12.536C18.2236 12.248 18.2129 11.976 18.2023 11.72V5.576H19.8023V17Z" fill="white"/>
      <path d="M38.8 9.60002L34 14.4L29.2 9.60002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    // أيقونة العربية (AR) بنفس تصميم SVG
    <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17H1V5H7V7H3V10H7V12H3V15H7V17ZM20 17H17L12 8H12.05C12.05 8.2 12.05 8.45 12.05 8.7C12.05 8.95 12.05 9.2 12.05 9.45C12.05 9.7 12.05 9.95 12.05 10.2V17H10.5V5H12.5L18 14H18.05C18.05 13.8 18.05 13.55 18.05 13.3C18.05 13.05 18.05 12.8 18.05 12.55C18.05 12.3 18 12 18 11.75V5H20V17Z" fill="white"/>
      <path d="M39 10L34 15L29 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )}
</button>
        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 p-2 text-white"
        >
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-transform ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-transform ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4
                        bg-gray-700/70 backdrop-blur-sm
                        rounded-xl border border-white
                        flex flex-col gap-3 md:hidden z-40">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
