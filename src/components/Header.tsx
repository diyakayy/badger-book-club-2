'use client';

import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-wide text-charcoal hover:text-burgundy transition-colors">
          Badger Book Club
        </Link>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-6 py-2 rounded-full border border-charcoal/20 bg-cream hover:bg-charcoal/5 transition-all shadow-sm hover:shadow-md text-sm tracking-wide"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
