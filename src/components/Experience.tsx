'use client';

import { experience } from '@/data/content'

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-10 py-16 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <div className="section-label">Experience</div>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid gap-6 py-6 border-b"
            style={{
              gridTemplateColumns: '180px 1fr',
              borderColor: 'rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="text-xs tracking-wide pt-1"
              style={{ color: 'var(--muted)' }}
            >
              {job.dates}
            </div>

            <div>
              <div className="font-display text-xl font-normal text-white mb-1">
                {job.role}
              </div>

              <div className="flex items-center gap-2 text-sm mb-2">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--gold)' }}
                />
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--gold)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'var(--gold-light)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'var(--gold)')
                    }
                  >
                    {job.company}
                  </a>
                ) : (
                  <span style={{ color: 'var(--gold)' }}>{job.company}</span>
                )}
              </div>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
