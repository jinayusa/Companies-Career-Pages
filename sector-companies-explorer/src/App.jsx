import React, { useMemo, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { SectorSelect } from './components/SectorSelect.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { CompanyGrid } from './components/CompanyGrid.jsx'
import { getSectors, getCompanies } from './data'

export default function App() {
  const sectors = getSectors()
  const all = getCompanies()
  const [sector, setSector] = useState(sectors[0])
  const [query, setQuery] = useState('')
  const [remoteOnly, setRemoteOnly] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return all
      .filter(c => c.sector === sector)
      .filter(c => (remoteOnly ? c.remote : true))
      .filter(c => (q ? c.name.toLowerCase().includes(q) || c.hq.toLowerCase().includes(q) : true))
  }, [all, sector, query, remoteOnly])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container max-w-6xl py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <SectorSelect value={sector} onChange={setSector} sectors={sectors} />
          <div className="flex gap-3">
            <SearchBar value={query} onChange={setQuery} placeholder="Search companies or locations" />
            <label className="inline-flex items-center gap-2 text-sm px-3 py-2 border rounded-2xl cursor-pointer select-none">
              <input type="checkbox" className="accent-black" checked={remoteOnly} onChange={e => setRemoteOnly(e.target.checked)} />
              Remote only
            </label>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">Showing {filtered.length} companies in <span className="font-medium">{sector}</span>.</p>

        <CompanyGrid items={filtered} />
      </main>

      <Footer />
    </div>
  )
}