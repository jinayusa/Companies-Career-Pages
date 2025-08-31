import React from 'react'
import { Search } from 'lucide-react'

export function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="relative block">
      <span className="absolute left-3 top-1/2 -translate-y-1/2"><Search size={16} /></span>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-72 pl-9 pr-3 py-2.5 rounded-2xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </label>
  )
}