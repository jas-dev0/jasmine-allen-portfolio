'use client';

import { personal } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="flex items-center justify-between px-10 py-6 border-t"
      style={{
        borderColor: 'var(--gold-dim)',
        background: 'var(--nautilus-deep)',
      }}
    >
      <span className="text-xs" style={{ color: 'var(--muted)' }}>
        © {year} {personal.name}
      </span>
      <span
        className="font-display text-sm tracking-widest"
        style={{ color: 'var(--gold)' }}
      >
        {personal.initials}
      </span>
    </footer>
  )
}
