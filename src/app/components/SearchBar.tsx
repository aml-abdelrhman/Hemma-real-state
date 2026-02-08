import React, { useState } from 'react';
import Link from 'next/link';

interface SearchItem {
  label: string;
  href: string;
  tags?: string[];
}

interface SearchBarProps {
  items: SearchItem[];
}

export default function SearchBar({ items }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
  );

  return (
    <div className="relative">
      <button className="p-2 bg-gray-200 rounded" onClick={() => setOpen(!open)}>🔍</button>

      {open && (
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded w-64 mt-2"
        />
      )}

      {query && (
        <ul className="absolute bg-white border rounded w-64 mt-1 z-50 max-h-64 overflow-y-auto">
          {filteredItems.map(item => (
            <li key={item.href} className="p-2 hover:bg-gray-100">
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          {filteredItems.length === 0 && <li className="p-2 text-gray-400">No results</li>}
        </ul>
      )}
    </div>
  );
}
