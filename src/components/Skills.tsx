'use client';

import { skillGroups } from '@/data/content'

export default function Skills() {
  return (
    <section
      className="px-10 py-16 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <div className="section-label">Skills</div>

      <div className="grid grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-6"
            style={{
              background: 'var(--nautilus)',
              border: '0.5px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="text-xs tracking-widest uppercase font-medium mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {group.title}
            </div>

            <div className="flex flex-col gap-2.5">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between gap-3">
                  <span className="text-sm" style={{ color: 'var(--cream)', whiteSpace: 'nowrap' }}>
                    {skill.name}
                  </span>
                  <div
                    className="flex-1 max-w-[80px]"
                    style={{ height: '2px', background: 'rgba(255,255,255,0.06)' }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
