"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntl } from "react-intl";
import { getSearchItems } from "../data/searchItems";

interface NavbarProps {
  locale: "ar" | "en";
  setLocale: React.Dispatch<React.SetStateAction<"ar" | "en">>;
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

const SearchBar: React.FC<SearchBarProps> = ({
  items,
  searchOpen,
  setSearchOpen,
}) => {
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered =
    items?.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase()),
        ),
    ) || [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  return (
    <div
      ref={wrapperRef}
      className="absolute left-1/2 -translate-x-1/2 z-[60] top-[90px] w-[92vw] md:max-w-[700px]"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border border-gray-200 bg-white shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-gray-800 placeholder-gray-400"
        placeholder={
          query === "" ? "Search for projects, properties, locations..." : ""
        }
        autoFocus
      />

      <div className="mt-2 overflow-y-auto bg-white border border-gray-100 shadow-2xl rounded-2xl max-h-80">
        {filtered.length > 0
          ? filtered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSearchOpen(false)}
                className="block px-6 py-4 font-medium transition-colors hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A] text-gray-700 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </Link>
            ))
          : query !== "" && (
              <div className="p-6 text-center text-gray-500">
                No results found
              </div>
            )}
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ locale, setLocale }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = getSearchItems(intl);

  const navLinks = [
    { key: "works", href: "/" },
    { key: "about", href: "/components/founders-speech" },

    { key: "projects", href: "/LatestProjects" },
    { key: "plan", href: "/components/Partners" },
    { key: "off-plan-sales", href: "/projects/project1" },
  ];

  const switchLanguage = () => setLocale(locale === "ar" ? "en" : "ar");

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-4 py-3 md:px-12 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] flex-shrink-0"
        >
          <div
            className={`w-full h-full transition-colors duration-300 bg-current ${scrolled ? "text-gray-700" : "text-white"}`}
            style={{
              maskImage: "url(/images/logo.svg)",
              WebkitMaskImage: "url(/images/logo.svg)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
            aria-label="Logo"
            role="img"
          />
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-[15px] font-semibold transition-all duration-200 ${scrolled ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "text-white hover:bg-white/10"}`}
              >
                {intl.formatMessage({ id: `nav.${link.key}` })}
              </Link>
            ))}
          </div>

          <div className="items-center hidden gap-2 pl-4 border-l lg:flex border-gray-200/20 rtl:border-l-0 rtl:border-r rtl:pr-4">
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.927 17.04L20.4 20.4M19.28 11.44 C19.28 15.77 15.77 19.28 11.44 19.28 C7.11 19.28 3.6 15.77 3.6 11.44 C3.6 7.11 7.11 3.6 11.44 3.6 C15.77 3.6 19.28 7.11 19.28 11.44Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              onClick={switchLanguage}
              className={`flex items-center gap-1 text-[14px] font-bold px-4 py-2 rounded-xl border transition ${scrolled ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-white/20 text-white hover:bg-white/10"}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${locale === "ar" ? "" : "rotate-180"}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {locale === "ar" ? "EN" : "AR"}
            </button>

            <Link
              href="/components/ContactUs"
              className={`px-5 py-2.5 text-[14px] font-bold rounded-xl transition-all shadow-sm ${scrolled ? "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90" : "bg-white text-gray-900 hover:bg-white/90"}`}
            >
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="flex items-center justify-center text-white w-9 h-9 rounded-xl hover:bg-white/10"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.927 17.04L20.4 20.4M19.28 11.44 C19.28 15.77 15.77 19.28 11.44 19.28 C7.11 19.28 3.6 15.77 3.6 11.44 C3.6 7.11 7.11 3.6 11.44 3.6 C15.77 3.6 19.28 7.11 19.28 11.44Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col items-center justify-center gap-1 text-white w-9 h-9 rounded-xl hover:bg-white/10"
            >
              <span
                className={`block w-5 h-[2px] bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`block w-5 h-[2px] bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-[2px] bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <SearchBar
        items={items}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      {open && (
        <div className="absolute flex flex-col gap-2 p-4 mt-2 duration-200 bg-white border border-gray-100 shadow-2xl top-full left-4 right-4 rounded-2xl lg:hidden animation-fade-in animate-in fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 rounded-xl"
            >
              {intl.formatMessage({ id: `nav.${link.key}` })}
            </Link>
          ))}

          <div className="h-[1px] bg-gray-100 my-2" />

          <button
            onClick={() => {
              switchLanguage();
              setOpen(false);
            }}
            className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50 rounded-xl"
          >
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2C14.5013 4.73831 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2617 12 22C9.49872 19.2617 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73831 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              {locale === "ar" ? "English" : "العربية"}
            </span>
          </button>

          <Link
            href="/components/ContactUs"
            onClick={() => setOpen(false)}
            className="w-full text-center py-3 bg-[#1E3A8A] text-white font-bold rounded-xl shadow-sm hover:bg-[#1E3A8A]/90 transition"
          >
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
