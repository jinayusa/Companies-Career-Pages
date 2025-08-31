import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Link } from 'lucide-react'

export function CompanyGrid({ items }) {
  if (!items?.length) {
    return (
      <div className="mt-8 rounded-2xl border p-10 text-center text-gray-600 bg-gray-50">
        <p className="text-sm">No results for this search.</p>
        <p className="mt-1 text-xs">Try clearing the search or pick a different sector.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((c) => (
        <motion.article
          key={c.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border p-4 md:p-5 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-lg leading-tight">
              {c.name}
            </h3>
            <span className="text-xs rounded-full px-2 py-1 border bg-white">
              {c.remote ? 'Remote' : 'Onsite'}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-1">
            <MapPin size={14} /> {c.hq}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a className="text-sm underline underline-offset-4 inline-flex items-center gap-1" href={c.careers} target="_blank" rel="noreferrer">
              Careers <ExternalLink size={14} />
            </a>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500"><Link size={12} /> {c.sector}</span>
          </div>
        </motion.article>
      ))}
    </div>
  )
}