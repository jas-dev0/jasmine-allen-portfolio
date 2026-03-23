'use client';

import { personal, stats } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-10 pt-20 pb-16 border-b"
      style={{
        borderColor: 'rgba(255,255,255,0.07)',
        background: 'linear-gradient(160deg, var(--nautilus-deep) 0%, var(--nautilus) 100%)',
      }}
    >
      {/* Watermark */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-semibold leading-none pointer-events-none select-none"
        style={{ fontSize: '160px', color: 'rgba(201,168,76,0.06)' }}
        aria-hidden="true"
      >
        ALLEN
      </span>

      {/* Eyebrow */}
      <div
        className="animate-fade-up inline-flex items-center gap-2.5 text-xs tracking-widest uppercase font-medium mb-6"
        style={{ color: 'var(--gold)', animationDelay: '0.1s' }}
      >
        <span className="inline-block w-8" style={{ height: '0.5px', background: 'var(--gold)' }} />
        {personal.availability}
      </div>

      {/* Name */}
      <h1
        className="animate-fade-up font-display font-light leading-none mb-2 text-white"
        style={{ fontSize: '68px', letterSpacing: '-0.01em', animationDelay: '0.2s' }}
      >
        {personal.name.split(' ')[0]}
        <br />
        <em className="not-italic" style={{ color: 'var(--gold)' }}>
          {personal.name.split(' ')[1]}
        </em>
      </h1>

      {/* Summary */}
      <p
        className="animate-fade-up text-base font-light leading-relaxed mb-9 max-w-lg"
        style={{ color: 'var(--muted)', animationDelay: '0.3s' }}
      >
        {personal.summary}
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up flex gap-3"
        style={{ animationDelay: '0.4s' }}
      >
        <a href="#projects">
          <button
            className="px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            View Projects
          </button>
        </a>
        <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
          <button
            className="px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{
              background: 'transparent',
              color: 'var(--gold)',
              border: '0.5px solid var(--gold-dim)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
          >
            Download Resume
          </button>
        </a>
      </div>

      {/* Stats */}
      <div
        className="animate-fade-up flex gap-10 mt-12 pt-8 border-t"
        style={{ borderColor: 'var(--gold-dim)', animationDelay: '0.5s' }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display font-light leading-none"
              style={{ fontSize: '34px', color: 'var(--gold)' }}
            >
              {stat.number}
            </div>
            <div
              className="text-xs tracking-widest uppercase mt-1"
              style={{ color: 'var(--muted)' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
