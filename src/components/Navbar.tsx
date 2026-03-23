'use client';

import { personal, navLinks } from '@/data/content'

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 border-b"
      style={{
        borderColor: 'var(--gold-dim)',
        background: 'rgba(22,40,57,0.97)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <span
        className="font-display text-xl font-semibold tracking-wide"
        style={{ color: 'var(--gold)' }}
      >
        {personal.initials}
      </span>

      <div className="flex gap-7">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs tracking-widest uppercase font-medium transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
