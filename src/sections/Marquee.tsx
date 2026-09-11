import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { marqueeRow1, marqueeRow2 } from '../data/portfolio';

function MarqueeTrack({ items, direction = 1 }: { items: string[]; direction?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const tl = gsap.to(el, {
      x: direction > 0 ? -totalWidth : totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const parsed = parseFloat(x);
          return direction > 0
            ? `${((parsed % totalWidth) - totalWidth) % totalWidth}px`
            : `${((parsed % totalWidth) + totalWidth) % totalWidth}px`;
        },
      },
    });

    // Pause on hover
    el.addEventListener('mouseenter', () => tl.pause());
    el.addEventListener('mouseleave', () => tl.play());

    return () => {
      tl.kill();
    };
  }, [direction]);

  const doubled = [...items, ...items, ...items];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '0',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            style={{
              padding: '0 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1A1A2E',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#C62828',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Technology stack marquee"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid rgba(26,26,46,0.06)',
        borderBottom: '1px solid rgba(26,26,46,0.06)',
        padding: '1.75rem 0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <MarqueeTrack items={marqueeRow1} direction={1} />
      <MarqueeTrack items={marqueeRow2} direction={-1} />
    </section>
  );
}
