import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar({ cartCount = 0, onCartOpen }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-zinc-700 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cobalt-500/30 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <a href="/" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-cobalt-500 to-cobalt-700" />
            <span className="text-lg font-semibold tracking-tight text-zinc-900">FluxPatch</span>
          </a>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-700 lg:flex">
          <a href="#products" className="hover:text-zinc-900">Products</a>
          <a href="#technology" className="hover:text-zinc-900">Technology</a>
          <a href="#science" className="hover:text-zinc-900">Science</a>
          <a href="#reviews" className="hover:text-zinc-900">Reviews</a>
        </nav>
        <button onClick={onCartOpen} className="relative inline-flex h-9 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm transition hover:border-zinc-300">
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-cobalt-600 px-1 text-xs font-medium text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
