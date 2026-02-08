'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../context/LangContext';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { locale, t, setLocale } = useLang();

  const switchLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');

  const navLinks = [
    { key: 'works', label: t?.nav?.works || 'Works', href: '/' },
    { key: 'about', label: t?.nav?.about || 'About', href: '/company' },
    { key: 'board', label: t?.nav?.board || 'Board', href: '/InvestorsRelations' },
    { key: 'chairman', label: t?.nav?.chairman || 'Chairman', href: '/Achievements' },
    { key: 'last', label: t?.nav?.last || 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-11 left-1/2 -translate-x-1/2 max-w-[1311px] h-20 flex justify-between items-center px-0 gap-[213px] z-20 transition-all }`}>
      {/* Logo */}
      <div className="absolute w-[180px] h-[60px] top-2 md:w-[180px] md:h-[60px] bg-white flex items-center justify-center rounded-md">
        <Image
          src={'/images/logo.png'}
          alt="Logo"
          width={61}
          height={61}
        />
      </div>

      {/* Links Container */}
      <div className="hidden md:flex justify-center items-center gap-16 w-[944px] h-20 bg-gray-200/40 backdrop-blur-[25px] rounded-2xl px-8">
        {navLinks.map((link) => (
          <Link key={link.key} href={link.href} className="flex items-center gap-2 font-semibold text-black hover:text-gray-700 transition">
            {link.label}
            <span className="inline-block transform rotate-45 transition-transform group-hover:rotate-90">↑</span>
          </Link>
        ))}

        {/* Separator */}
        <div className="w-px h-6 bg-white mx-2" />

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

        {/* Language Button */}
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

      </div>

      {/* Hamburger */}
      <button
        className={`md:hidden flex flex-col gap-1 p-2 rounded-lg z-50 ${
          open ? 'text-gray-800' : 'text-white'
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-5 h-[2px] bg-white rounded transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-5 h-[2px] bg-white rounded transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-5 h-[2px] bg-white rounded transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full inset-x-4 mt-2 p-4 bg-gray-700/70 backdrop-blur-sm rounded-xl flex flex-col gap-4 z-40 border border-white">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.href} className="text-white font-semibold">
              {link.label}
            </Link>
          ))}
          <div className="w-full h-px bg-white my-2" />
          <div className="flex items-center justify-center gap-2">
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
        {/* Language Button */}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
