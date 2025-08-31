import React from 'react'
import { motion } from 'framer-motion'

export function SectorSelect({ value, onChange, sectors }) {
  return (
    <div className="flex flex-wrap gap-2">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-64 rounded-2xl border px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10"
      >
        {sectors.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <div className="hidden md:flex flex-wrap gap-2">
        {sectors.map(s => (
          <motion.button
            key={s}
            whileHover={{ y: -1 }}
            onClick={() => onChange(s)}
            className={
              'rounded-full px-3 py-1.5 text-sm border shadow-sm transition ' +
              (value === s ? 'bg-black text-white border-black' : 'bg-white hover:bg-gray-50')
            }
            title={s}
          >
            {s.replace(' & ', ' · ')}
          </motion.button>
        ))}
      </div>
    </div>
  )
}