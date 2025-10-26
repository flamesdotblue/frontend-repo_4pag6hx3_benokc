import { useState } from 'react';
import { ShoppingCart, Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500">
            <Rocket className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold tracking-tight">NeoCommerce</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-2 text-sm transition-colors">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/15 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
