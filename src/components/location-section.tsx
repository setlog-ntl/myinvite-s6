'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { venueName: string; venueAddress: string; kakaoMapUrl: string; naverMapUrl: string; parkingInfo: string; transitInfo: string; } }

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LocationSection({ config }: Props) {
  if (!config.venueName && !config.venueAddress) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-6" style={{ fontSize: 'var(--inv-text-section)', color: 'var(--inv-text-primary)' }}>
          장소 안내
        </h2>
        <div className="max-w-md mx-auto rounded-2xl p-6 inv-card">
          {config.venueName && (
            <div className="flex items-center gap-2">
              <MapPinIcon />
              <p className="font-semibold text-lg" style={{ color: 'var(--inv-text-primary)' }}>{config.venueName}</p>
            </div>
          )}
          {config.venueAddress && <p className="mt-1 text-sm ml-6" style={{ color: 'var(--inv-text-secondary)' }}>{config.venueAddress}</p>}

          <div className="flex gap-3 mt-5">
            {config.kakaoMapUrl && (
              <a href={config.kakaoMapUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium transition-transform btn-press"
                style={{ background: '#FEE500', color: '#191919', boxShadow: 'var(--inv-shadow-sm)' }}>
                카카오맵
              </a>
            )}
            {config.naverMapUrl && (
              <a href={config.naverMapUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium text-white transition-transform btn-press"
                style={{ background: '#03C75A', boxShadow: 'var(--inv-shadow-sm)' }}>
                네이버맵
              </a>
            )}
          </div>

          {(config.parkingInfo || config.transitInfo) && (
            <div className="mt-5 pt-4 space-y-2" style={{ borderTop: '1px solid var(--inv-card-border)' }}>
              {config.parkingInfo && (
                <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--inv-text-secondary)' }}>
                  <span>{'\u{1F17F}\u{FE0F}'}</span> {config.parkingInfo}
                </p>
              )}
              {config.transitInfo && (
                <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--inv-text-secondary)' }}>
                  <span>{'\u{1F68C}'}</span> {config.transitInfo}
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </AnimatedReveal>
  );
}
