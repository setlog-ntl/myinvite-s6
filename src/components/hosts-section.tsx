'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface HostItem { name: string; nameEn?: string; role: string; roleEn?: string; phone?: string; avatarUrl?: string; }
interface Props { config: { hostsTitle: string; hostsTitleEn?: string; hosts: HostItem[]; } }

export function HostsSection({ config }: Props) {
  if (!config.hosts?.length) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-8" style={{ fontSize: 'var(--inv-text-section)', color: 'var(--inv-text-primary)' }}>
          {config.hostsTitle}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-lg mx-auto">
          {config.hosts.map((host, i) => (
            <div
              key={i}
              className="animate-fade-up flex flex-col items-center text-center rounded-2xl px-6 py-5 inv-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {host.avatarUrl ? (
                <img
                  src={host.avatarUrl}
                  alt={host.name}
                  className="w-20 h-20 rounded-full object-cover mb-3 ring-2"
                  style={{ '--tw-ring-color': 'var(--inv-accent-glow)' } as React.CSSProperties}
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-3 ring-2"
                  style={{ background: 'var(--inv-accent-glow)', color: 'var(--inv-accent)', '--tw-ring-color': 'var(--inv-accent-glow)' } as React.CSSProperties}
                >
                  {host.name.charAt(0)}
                </div>
              )}
              <p className="text-sm" style={{ color: 'var(--inv-text-secondary)' }}>{host.role}</p>
              <p className="font-semibold" style={{ color: 'var(--inv-text-primary)' }}>{host.name}</p>
              {host.phone && (
                <a
                  href={`tel:${host.phone}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-1.5 btn-press"
                  style={{ background: 'var(--inv-accent-glow)', color: 'var(--inv-accent)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {host.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
