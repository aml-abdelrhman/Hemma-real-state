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
          )}
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 py-2 md:px-10 md:h-[80px] py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="relative w-[96px] h-[32px] md:w-[180px] md:h-[60px] flex-shrink-0">
        <Image src="/images/nav-logo.png" alt="Logo" fill className="object-contain" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center max-w-[800px] gap-10 flex-1 justify-center bg-gray-200/40 backdrop-blur-[25px] rounded-2xl px-8 py-3">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="flex items-center gap-2 font-semibold text-white hover:text-gray-700 transition"
          >
            {link.label}
            <span className="inline-block transform rotate-45 transition-transform group-hover:rotate-90">↑</span>
          </Link>
        ))}

        {/* Separator */}
        <div className="w-px h-6 bg-white mx-2" />
  <div className="flex items-center gap-4 flex-shrink-0">

        {/* Search Icon */}
        <div className="w-6 h-6 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.927 17.04L20.4001 20.4M19.2801 11.44C19.2801 15.7699 15.77 19.28 11.4401 19.28C7.11019 19.28 3.6001 15.7699 3.6001 11.44C3.6001 7.11006 7.11019 3.59998 11.4401 3.59998C15.77 3.59998 19.2801 7.11006 19.2801 11.44Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

      
        <button
          onClick={switchLanguage}
          className="w-[46px] h-[24px] flex items-center justify-center"
        >
          {locale === 'ar' ? (
            <span className="text-white font-semibold">EN</span>
          ) : (
            <span className="text-white font-semibold">AR</span>
          )}
        </button>
      </div>
</div>
      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center gap-4">
        {/* Search */}
        <div className="w-6 h-6 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.927 17.04L20.4001 20.4M19.2801 11.44C19.2801 15.7699 15.77 19.28 11.4401 19.28C7.11019 19.28 3.6001 15.7699 3.6001 11.44C3.6001 7.11006 7.11019 3.59998 11.4401 3.59998C15.77 3.59998 19.2801 7.11006 19.2801 11.44Z"
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
            <span className="text-white font-semibold">EN</span>
          ) : (
            <span className="text-white font-semibold">AR</span>
          )}
        </button>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1 p-2 rounded-lg text-white"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-transform ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-transform ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-gray-700/70 backdrop-blur-sm rounded-xl flex flex-col md:hidden gap-3 border border-white z-40">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.key} href={link.href} className="text-white font-semibold">
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
