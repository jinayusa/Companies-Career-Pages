import React from 'react'
import { BriefcaseBusiness, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="container max-w-6xl py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={22} />
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Sector → Companies Explorer</h1>
        </div>
        <a className="text-sm underline underline-offset-4" href="https://github.com/" target="_blank" rel="noreferrer">
          Star on GitHub
        </a>
      </div>
    </header>
  )
}