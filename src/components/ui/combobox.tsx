'use client'

import * as React from 'react'

interface ComboboxProps<T> {
  items: T[]
  itemToString?: (item: T) => string
  onSelect?: (item: T) => void
  placeholder?: string
}

export function Combobox<T extends { label: string }>(
  { items, itemToString, onSelect, placeholder }: ComboboxProps<T>
) {
  const [query, setQuery] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<T | null>(null)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredItems = query === ''
    ? items
    : items.filter(item =>
        (itemToString ? itemToString(item) : item.label)
          .toLowerCase()
          .includes(query.toLowerCase())
      )

  const handleSelect = (item: T) => {
    setSelected(item)
    setQuery(itemToString ? itemToString(item) : item.label)
    setOpen(false)
    if (onSelect) onSelect(item)
  }

  return (
    <div ref={wrapperRef} className="relative w-full md:max-w-[500px] mx-auto">
      <input
        type="text"
        value={query}
        onChange={e => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onClick={() => setOpen(true)}
        placeholder={placeholder || 'Search...'}
        className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {open && (
        <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border border-gray-200 shadow-lg max-h-72 rounded-xl">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div
                key={item.label}
                onClick={() => handleSelect(item)}
                className="px-4 py-3 transition cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                {itemToString ? itemToString(item) : item.label}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  )
}
