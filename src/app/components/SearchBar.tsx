'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface SearchItem {
  label: string;
  href: string;
}

interface SearchBarProps {
  items: SearchItem[];
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ items, isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  // يغلق الدروب داون لما تضغطي برة
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div ref={wrapperRef} className="absolute z-50 w-full max-w-md mx-auto mt-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 shadow rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />

      <div className="mt-1 overflow-auto bg-white border border-gray-200 shadow-lg rounded-xl max-h-60">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 transition hover:bg-blue-500 hover:text-white"
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
