'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { getSearchItems } from '../data/searchItems';
import  './SearchBar';

interface NavbarProps {
  locale: 'ar' | 'en';
  setLocale: React.Dispatch<React.SetStateAction<'ar' | 'en'>>;
}

interface SearchItem {
  label: string;
  href: string;
  tags: string[];
}

interface SearchBarProps {
  items: SearchItem[];
  searchOpen: boolean;
  setSearchOpen: (val: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ items, searchOpen, setSearchOpen }) => {
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = items.filter(
    item =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  return (
    <div
      ref={wrapperRef}
      className="absolute left-0 right-0 z-50 mt-2 top-full md:max-w-[500px] mx-auto"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search projects, events..."
        autoFocus
      />

      <div className="mt-1 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-xl max-h-72">
        {filtered.length > 0 ? (
          filtered.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSearchOpen(false)}
              className="block px-4 py-3 font-medium transition-colors hover:bg-blue-500 hover:text-white"
            >
              {item.label}
            </Link>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ locale, setLocale }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const items = getSearchItems(intl);

  const navLinks = [
    { key: 'works', href: '/' },
    { key: 'about', href: '/LatestProjects' },
        { key: 'board', href: '/projects/project1' },
    { key: 'plan', href: '/#partners' },

    { key: 'contact', href: '/off-plan-sales' },
    { key: 'chairman', href: '/methodology' },
    { key: 'work', href: '/careers' },
    { key: 'last', href: '/developers' },
  ];

  const switchLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-full max-w-[371px] z-50 rounded-[20px] bg-[#C1C2C266] backdrop-blur-[50px] px-5 py-7 flex items-center justify-between md:top-11 md:bg-transparent md:backdrop-blur-none md:max-w-[1311px] md:h-[80px]">
      {/* Logo */}
      <div className="relative w-[96px] h-[32px] md:w-[180px] md:h-[60px] flex-shrink-0">
        <Image
          src="/images/hemma-logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex flex-1 items-center justify-between bg-gray-200/40 backdrop-blur-[25px] rounded-2xl px-8 py-3 md:max-w-[945px] md:h-[80px]">
        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="relative group whitespace-nowrap text-[16px] font-medium text-white hover:text-gray-200 transition"
            >
              {intl.formatMessage({ id: `nav.${link.key}` })}
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
{/* Search Icon */}
<button
  className="w-5 h-5 text-white"
  onClick={() => setSearchOpen(!searchOpen)}
>
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


<SearchBar
  items={getSearchItems(intl)}
  searchOpen={searchOpen}
  setSearchOpen={setSearchOpen}
/>
          <button onClick={switchLanguage} className="flex items-center gap-1 text-white text-[14px] font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" />
            </svg>
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-3 lg:hidden">
{/* Search Icon */}
<button
  className="w-5 h-5 text-white"
  onClick={() => setSearchOpen(!searchOpen)}
>
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


<SearchBar
  items={getSearchItems(intl)}
  searchOpen={searchOpen}
  setSearchOpen={setSearchOpen}
/>

        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1 p-2">
          <span className={`block w-5 h-[2px] bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute z-40 flex flex-col gap-3 p-4 mt-2 top-full left-4 right-4 bg-gray-700/80 backdrop-blur-sm rounded-xl lg:hidden">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-medium text-white"
            >
              {intl.formatMessage({ id: `nav.${link.key}` })}
            </Link>
          ))}

          <button onClick={switchLanguage} className="flex items-center gap-1 text-sm text-white">
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
