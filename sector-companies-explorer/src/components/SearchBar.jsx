// components/SearchBar.jsx
import React from 'react'
import { Search, X } from 'lucide-react'

export function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="relative block group">
  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] group-focus-within:text-[hsl(var(--primary))] transition-colors duration-200">
        <Search size={18} />
      </div>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
  className="w-full pl-12 pr-10 py-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] focus:border-[hsl(var(--primary))] transition-all duration-200 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
        >
          <X size={16} />
        </button>
      )}
    </label>
  )
}
