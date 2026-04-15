'use client';

import { AnimatedReveal } from './AnimatedReveal';

interface Props { config: { galleryImages: string[]; galleryColumns: number; } }

export function GallerySection({ config }: Props) {
  if (!config.galleryImages?.length) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6">
        <h2 className="text-xl font-semibold text-center mb-6" style={{ fontSize: 'var(--inv-text-section)', color: 'var(--inv-text-primary)' }}>
          갤러리
        </h2>

        {/* Horizontal scroll carousel */}
        <div className="max-w-lg mx-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-3 pb-2" style={{ scrollPaddingInline: '1.5rem' }}>
          {config.galleryImages.map((url, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 overflow-hidden rounded-xl"
              style={{ width: 'min(75vw, 320px)', aspectRatio: '4/5' }}
            >
              <img
                src={url}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Grid fallback for many images */}
        {config.galleryImages.length > 4 && (
          <div className="max-w-lg mx-auto grid gap-2 mt-4" style={{ gridTemplateColumns: `repeat(${config.galleryColumns}, 1fr)` }}>
            {config.galleryImages.map((url, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={url}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </AnimatedReveal>
  );
}
