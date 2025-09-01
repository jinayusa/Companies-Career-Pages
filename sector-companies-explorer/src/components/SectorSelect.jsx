// components/SectorSelect.jsx
import React from 'react'
import { ChevronDown } from 'lucide-react'

export function SectorSelect({ value, onChange, sectors }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Select sector"
        className="w-72 pl-4 pr-10 py-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] focus:border-[hsl(var(--primary))] transition-all duration-200 text-[hsl(var(--foreground))] appearance-none cursor-pointer"
      >
        {sectors.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] pointer-events-none" />
    </div>
  )
}
