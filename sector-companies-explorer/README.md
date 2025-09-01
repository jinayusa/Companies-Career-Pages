# Sector → Companies Explorer

A modern, responsive React app for discovering companies by sector with search, filters, and quick links to career pages. Built with **Vite + React**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**. Data lives in a simple JSON file so you can extend sectors and companies without touching code.

---

## ✨ Features

- **Sector browser** – Select an industry and instantly see representative companies.
- **Full‑text search** – Filter by company name, HQ/city, or tags.
- **Remote‑only toggle** – Show only companies that regularly offer remote roles.
- **1‑click Careers** – Direct links to official career pages.
- **CSV export** – Export the current filtered list for tracking or sharing.
- **Light / Dark theme** – Toggle via a button, persisted to `localStorage`.
- **Polished UI** – Glassy cards, subtle gradients, motion on hover/entrance.
- **Data‑driven** – All entities come from `src/data/companies.json`.

---

## 🧰 Tech Stack

- **React** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **lucide-react** (icons)

---

## 🚀 Quick Start

> Requires **Node 18+**.

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

Open the dev URL (Vite prints it, usually `http://localhost:5173`).

---

## 🗂️ Project Structure

```
sector-companies-explorer/
├─ index.html
├─ package.json
├─ postcss.config.js        # (if using the PostCSS plugin route)
├─ tailwind.config.(cjs|js) # Tailwind config (choose ONE)
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ data/
│  │  ├─ companies.json     # ← your sectors & companies
│  │  └─ index.js           # simple getters
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ SectorSelect.jsx
│  │  ├─ SearchBar.jsx
│  │  └─ CompanyGrid.jsx
│  └─ utils/
│     └─ exportCsv.js
└─ ...
```

---

## 📦 Data Model (edit me)

All content comes from `src/data/companies.json`. Minimal schema:

```jsonc
{
  "sectors": [
    "Tech & Product Companies",
    "Finance & FinTech"
    // ... add more
  ],
  "companies": [
    {
      "name": "Stripe",
      "sector": "Finance & FinTech",
      "careers": "https://stripe.com/jobs",
      "hq": "San Francisco, CA",
      "remote": true,
      "tags": ["payments", "infra"]
    }
    // ... add more
  ]
}
```

Tips:
- Ensure each company’s `sector` matches one of the strings in the `sectors` array.
- Add optional `tags` to improve search quality (skills, stacks, markets).

---

## 🎛️ Theming & Styling

This project supports **two** ways to style with Tailwind v4. Use whichever works best in your environment.

### Option A — Arbitrary values with design tokens (robust & zero config)

`src/index.css` defines **HSL CSS variables** (tokens) for colors. Use them directly in classes:

```jsx
<div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]">
  ...
</div>

<button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white">Apply</button>
```

This approach avoids Tailwind config complexity while keeping a themable design system.  
Dark mode works by toggling an attribute on `<html>`:

```js
// App.jsx
document.documentElement.setAttribute('data-theme', 'dark') // or removeAttribute for light
```

### Option B — Named utilities via Tailwind config (requires config to load)

If you prefer classes like `bg-background`, `border-border`, etc., extend Tailwind colors in your `tailwind.config.(cjs|js)` and use the **v4 PostCSS plugin**:

**tailwind.config.cjs**
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class','[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))' },
        accent: 'hsl(var(--accent))',
      },
    },
  },
  plugins: [],
}
```

**postcss.config.js**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

> If you see “Unknown utility `bg-background`,” your config isn’t being read. Use **Option A** or ensure you have exactly one config file at project root and the plugin installed.

---

## 🧪 How to Verify Tailwind Works

Drop this in `App.jsx`:
```jsx
<div className="p-3 rounded-xl bg-[hsl(var(--card))] border-[hsl(var(--border))] shadow">
  If this box is rounded with a border and shadow, Tailwind is working.
</div>
```

If you still see plain HTML:
- Ensure `import './index.css'` exists in `src/main.jsx`.
- Restart dev server after installing Tailwind or changing configs.
- Hard refresh the browser (Empty Cache and Hard Reload).
- If using Option B, confirm tailwind config filename/syntax and that only one config exists.

---

## 🧭 Usage

- Pick a **sector** from the dropdown or chips.
- Use **search** to filter by name, HQ/city, or tags.
- Toggle **Remote only** for work‑from‑home roles.
- Click **Careers** to go straight to official job listings.
- **Export CSV** to save your filtered list.
- Toggle **theme** (☀️/🌙) — it’s remembered for next time.

---

## 🛠️ Scripts

```jsonc
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 🌐 Deploy

- **Vercel**: Import the repo → Framework preset: Vite → Deploy.
- **Netlify**: Build command `npm run build`, publish directory `dist/`.
- **GitHub Pages**: `npm run build` then push `dist/` to a `gh-pages` branch (using e.g. `gh-pages` package).

---

## 🐛 Troubleshooting

- **Unknown utility `bg-background` / `border-border`**  
  Use Option A (arbitrary values), or ensure Tailwind config is loaded (Option B). Don’t keep both `tailwind.config.js` and `tailwind.config.cjs`.

- **No styles at all**  
  Make sure:
  - `src/main.jsx` imports `./index.css`,
  - dev server restarted after installing Tailwind,
  - `postcss.config.js` uses `@tailwindcss/postcss`,
  - only one Tailwind config exists at project root,
  - `content` globs include `./index.html` and `./src/**/*.{js,jsx,ts,tsx}`.

---

## 🤝 Contributing

PRs welcome! Add sectors/companies in `src/data/companies.json` or improve components and docs.

---

## 📄 License

MIT — use it freely in your job‑hunt toolkit.
