'use client';

import { useEffect, useState } from 'react';

interface Props { config: { title: string; titleEn?: string; subtitle: string; subtitleEn?: string; heroImageUrl: string; gradientFrom: string; gradientTo: string; eventType: string; } }

const EVENT_EMOJI: Record<string, string> = {
  gathering: '\u{1F389}',
  birthday: '\u{1F382}',
  wedding: '\u{1F48D}',
  baby: '\u{1F476}',
  celebration: '\u{1F389}',
  corporate: '\u{1F3E2}',
  custom: '\u{2728}',
};

export function HeroSection({ config }: Props) {
  const emoji = EVENT_EMOJI[config.eventType] || EVENT_EMOJI.custom;
  const [scrollFade, setScrollFade] = useState({ opacity: 1, translateY: 0 });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const maxScroll = window.innerHeight * 0.6;
        const progress = Math.min(y / maxScroll, 1);
        setScrollFade({
          opacity: 1 - progress * 0.8,
          translateY: y * 0.3,
        });
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgStyle = config.heroImageUrl
    ? { backgroundImage: `url(${config.heroImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: `linear-gradient(160deg, ${config.gradientFrom}, ${config.gradientTo})` };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ ...bgStyle, minHeight: '100svh' }}>
      {config.heroImageUrl && <div className="absolute inset-0 bg-black/30" />}

      <div
        className="relative z-10 max-w-md mx-auto"
        style={{
          opacity: scrollFade.opacity,
          transform: `translateY(${scrollFade.translateY}px)`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="animate-fade-up text-5xl mb-6" style={{ animationDuration: '2s' }}>{emoji}</div>

        <h1
          className="animate-fade-up-d1 font-bold text-white leading-snug whitespace-pre-line drop-shadow-sm"
          style={{ fontSize: 'var(--inv-text-hero)' }}
        >
          {config.title}
        </h1>

        {config.subtitle && (
          <p className="animate-fade-up-d2 mt-5 text-base md:text-lg text-white/80 leading-relaxed">
            {config.subtitle}
          </p>
        )}

        <div className="animate-fade-up-d3 mt-8 w-12 h-px mx-auto bg-white/40" />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float" style={{ opacity: scrollFade.opacity }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
