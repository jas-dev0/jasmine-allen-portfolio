'use client';

import { personal } from '@/data/content'

const contactLinks = [
  { label: 'Email',      value: personal.email,      href: `mailto:${personal.email}`                        },
  { label: 'LinkedIn',   value: personal.linkedin,   href: `https://${personal.linkedin}`                    },
  { label: 'GitHub',     value: personal.github,     href: `https://${personal.github}`                      },
  { label: 'Consulting', value: personal.consulting, href: `https://${personal.consulting}`                   },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-16"
    >
      <div
        className="grid gap-12"
        style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}
      >
        {/* Left */}
        <div>
          <h2
            className="font-display font-light text-white leading-tight mb-4"
            style={{ fontSize: '44px' }}
          >
            Let&apos;s work
            <br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>
              together.
            </em>
          </h2>
          <p
            className="text-sm leading-relaxed mb-7"
            style={{ color: 'var(--muted)' }}
          >
            Open to full-time engineering and application support roles.
            Based in Southfield, MI — open to remote.
          </p>
          <a href={`mailto:${personal.email}`}>
            <button
              className="px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Send a message
            </button>
          </a>
        </div>

        {/* Right — links */}
        <div
          className="flex flex-col gap-px"
          style={{ background: 'var(--gold-dim)' }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between px-4 py-4 text-sm transition-colors duration-200"
              style={{ background: 'var(--nautilus)', color: 'var(--cream)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'var(--nautilus-mid)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'var(--nautilus)')
              }
            >
              <div>
                <div
                  className="text-xs tracking-widest uppercase mb-0.5"
                  style={{ color: 'var(--muted)' }}
                >
                  {link.label}
                </div>
                <div>{link.value}</div>
              </div>
              <span style={{ color: 'var(--gold)' }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
