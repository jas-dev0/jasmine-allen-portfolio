'use client';

import { projects } from '@/data/content'

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-16 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <div className="section-label">Selected projects</div>

      <div
        className="grid grid-cols-2 gap-px"
        style={{ background: 'rgba(201,168,76,0.12)' }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-7 transition-colors duration-200 cursor-pointer"
            style={{ background: 'var(--nautilus)' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'var(--nautilus-mid)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'var(--nautilus)')
            }
          >
            <div
              className="text-xs tracking-widest uppercase font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              {project.tag}
            </div>

            <h3
              className="font-display text-xl font-normal leading-tight mb-2 text-white"
            >
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--muted)' }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 tracking-wide font-medium"
                  style={{
                    background: 'var(--gold-subtle)',
                    color: 'var(--gold)',
                    border: '0.5px solid var(--gold-dim)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs tracking-wide uppercase font-medium"
                style={{ color: 'var(--gold)' }}
              >
                View project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
