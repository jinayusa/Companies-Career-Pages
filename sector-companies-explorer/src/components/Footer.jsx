// components/Footer.jsx
import React from 'react'
import { Heart, Github, FileText, Search, Settings } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card)/0.5)] backdrop-blur-sm mt-16">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tips Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[hsl(var(--foreground))] flex items-center gap-2">
              <Settings size={18} className="text-[hsl(var(--primary))]" />
              Pro Tips
            </h3>
            <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              <li className="flex items-start gap-2">
                <Search size={14} className="mt-0.5 text-[hsl(var(--accent))]" />
                Use search to find specific companies or skills
              </li>
              <li className="flex items-start gap-2">
                <Settings size={14} className="mt-0.5 text-[hsl(var(--accent))]" />
                Toggle remote filter for work-from-home opportunities
              </li>
              <li className="flex items-start gap-2">
                <FileText size={14} className="mt-0.5 text-[hsl(var(--accent))]" />
                Export results to CSV for easy sharing
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[hsl(var(--foreground))]">Resources</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <Github size={14} />
                Contribute on GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <FileText size={14} />
                Add Company Data
              </a>
            </div>
          </div>

          {/* Stats/Info Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[hsl(var(--foreground))]">About</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Discover career opportunities across different industries.
              Updated regularly with the latest company information.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[hsl(var(--border))]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Built with <Heart size={14} className="inline text-red-500 mx-1" /> for job seekers
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              Data sourced from public company career pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
