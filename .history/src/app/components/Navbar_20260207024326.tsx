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
    { key: 'plan', label: t?.nav?.plan || 'Methodology', href: '/methodology' },
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
      <div className="hidden md:flex items-center gap-8 bg-white/20 backdrop-blur-xl rounded-2xl px-8 py-3">

        {/* Links */}
        {navLinks.map(link => (
          <Link
            key={link.key}
            href={link.href}
            className="text-[16px] font-medium text-white whitespace-nowrap hover:text-gray-200 transition"
          >
            {link.label}
          </Link>
        ))}

        {/* Separator */}
        <div className="h-6 w-px bg-white/60 mx-2" />

        {/* Search */}
        <button className="w-5 h-5">
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

        {/* Separator */}
        <div className="h-6 w-px bg-white/60 mx-2" />

        {/* Language */}
        <button
          onClick={switchLanguage}
          className="flex items-center gap-1 text-white text-sm font-medium"
        >
          {locale === 'ar' ? 'EN' : 'AR'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* ================= Mobile Controls ================= */}
      <div className="flex md:hidden items-center gap-4">

        {/* Search */}
        <button className="w-5 h-5">
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
          className="flex items-center gap-1 text-white text-sm"
        >
          {locale === 'ar' ? 'EN' : 'AR'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1"
        >
          <span className={`w-5 h-[2px] bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-[2px] bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[2px] bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-black/70 backdrop-blur-xl rounded-xl flex flex-col gap-3 md:hidden z-40">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
