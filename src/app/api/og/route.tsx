import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

export async function GET() {
  const emoji = {
    gathering: '\u{1F389}',
    birthday: '\u{1F382}',
    wedding: '\u{1F48D}',
    baby: '\u{1F476}',
    celebration: '\u{1F389}',
    corporate: '\u{1F3E2}',
    custom: '\u{2728}',
  }[siteConfig.eventType] || '\u{2728}';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(160deg, ${siteConfig.gradientFrom} 0%, ${siteConfig.gradientTo} 100%)`,
          fontFamily: 'sans-serif',
          padding: '48px',
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '12px' }}>{emoji}</div>
        <div style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', textAlign: 'center' }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.85)', marginTop: '16px', textAlign: 'center' }}>
          {siteConfig.subtitle}
        </div>
        <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginTop: '24px' }}>
          {siteConfig.eventDateLabel}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
