/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: [
    'bg-card', 'bg-card-foreground', 'bg-border', 'bg-muted', 'bg-muted-foreground',
    'bg-primary', 'bg-accent', 'bg-primary-dark', 'bg-background', 'bg-foreground',
    'border-card', 'border-border', 'border-muted', 'border-primary', 'border-accent',
    'text-card-foreground', 'text-muted-foreground', 'text-primary', 'text-accent',
    'text-background', 'text-foreground'
  ],
  theme: {
    extend: {
      colors: {
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        'primary-dark': 'hsl(var(--primary-dark))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  // plugins: [],
}
