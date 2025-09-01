// components/Header.jsx
import React from 'react'
import { BriefcaseBusiness, Github, Sparkles } from 'lucide-react'

export function Header() {
  return (
<header className="sticky top-0 z-10 bg-[hsl(var(--card)/0.8)] backdrop-blur-lg border-b border-[hsl(var(--border)/0.5)] shadow-sm">
      <div className="container max-w-7xl py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-xl blur opacity-30"></div>
            <div className="relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-2">
              <BriefcaseBusiness size={24} className="text-[hsl(var(--primary))]" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Sector Explorer
            </h1>
            <p className="text-sm text-[hsl(var(--muted-foreground))] hidden md:block">Discover companies by industry</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <Sparkles size={16} />
            <span>Modern UI</span>
          </div>
          <a
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted)/0.8)] text-[hsl(var(--foreground))] transition-colors duration-200 text-sm font-medium"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
