'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/reviews/', label: 'Casino Reviews' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(45,10,107,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,180,216,0.12)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: '#F0EBE3', letterSpacing: '-0.02em' }}
        >
          Edge<span style={{ color: '#00B4D8' }}>Bet</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold transition-colors duration-150 hover:text-gas-blue"
              style={{ color: 'rgba(240,235,227,0.7)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/reviews/"
          className="hidden md:inline-block rounded-xl px-5 py-2 text-sm font-bold text-deep-purple transition-all duration-200 hover:shadow-glow-blue"
          style={{ background: '#00B4D8' }}
        >
          Top Casinos
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2"
        >
          <span
            className="block h-0.5 w-6 rounded transition-all duration-200"
            style={{
              background: '#F0EBE3',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-200"
            style={{ background: '#F0EBE3', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-200"
            style={{
              background: '#F0EBE3',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(240,235,227,0.06)' }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold py-1"
              style={{ color: 'rgba(240,235,227,0.8)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reviews/"
            onClick={() => setMenuOpen(false)}
            className="inline-block rounded-xl px-5 py-2.5 text-sm font-bold text-center"
            style={{ background: '#00B4D8', color: '#2D0A6B' }}
          >
            Top Casinos
          </Link>
        </div>
      )}
    </header>
  )
}
