'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface NavbarProps {
  locale: 'ar' | 'en';
  setLocale: (locale: 'ar' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ locale, setLocale }) => {
  const t = useTranslations(); // next-intl hook
  const [open, setOpen] = useState(false);

  const switchLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');

const navLinks = [
  { key: 'works', label: t('nav.works'), href: '/' },
  { key: 'about', label: t('nav.about'), href: '/projects' },
  { key: 'contact', label: t('nav.contact'), href: '/off-plan-sales' },
  { key: 'chairman', label: t('nav.chairman'), href: '/lands' },
  { key: 'board', label: t('nav.board'), href: '/events' },
  { key: 'plan', label: t('nav.plan'), href: '/methodology' },
  { key: 'work', label: t('nav.work'), href: '/careers' },
  { key: 'last', label: t('nav.last'), href: '/developers' },
];


  return (
<nav className="
  fixed top-10 left-1/2 -translate-x-1/2
  w-full max-w-[371px]
  z-50 rounded-[20px]
  bg-[#C1C2C266] backdrop-blur-[50px]
  px-5 py-7 flex items-center justify-between
   md:top-11 
  md:bg-transparent md:max-w-[1311px] md:h-[80px]
">
  
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
      <div className="hidden md:flex flex-1 items-center justify-between bg-gray-200/40 backdrop-blur-[25px] rounded-2xl px-8 py-3 md:max-w-[945px] md:h-[80px] ">
        
        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="relative group whitespace-nowrap text-[16px] font-medium text-white hover:text-gray-200 transition"
            >
              {link.label}

              {/* Hover underline SVG */}
              <span className="pointer-events-none absolute w-[56px] h-[13px] left-1/2 -translate-x-1/2 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="57" height="13" viewBox="0 0 57 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.25 0C15 0 13.25 13 0 13H56.5C43.25 13 41.5 0 28.25 0Z" fill="white" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="h-6 w-[2px] bg-white/60 mx-4" />

        {/* Search + Language */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="w-5 h-5 text-white">
            <svg viewBox="0 0 24 24" fill="none">
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
          </button>

          {/* Language */}
          <button
            onClick={switchLanguage}
            className="flex items-center gap-1 text-white text-[14px] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" />
            </svg>
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="flex md:hidden items-center gap-3">
        {/* Search */}
        <button className="w-5 h-5 text-white">
          <svg viewBox="0 0 24 24" fill="none">
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
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 p-2"
        >
          <span className={`block w-5 h-[2px] bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-gray-700/80 backdrop-blur-sm rounded-xl flex flex-col gap-3 md:hidden z-40">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white font-medium"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={switchLanguage}
            className="flex items-center gap-1 text-white text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" />
            </svg>
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
