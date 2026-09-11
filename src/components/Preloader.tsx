import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Simulate system boot — fast and elegant
    const steps = [0, 20, 45, 70, 88, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [onComplete]);

  const line: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0f0f14',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            gap: '2rem',
          }}
        >
          {/* Boot label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C62828',
              fontWeight: 600,
            }}
          >
            // SYSTEM BOOT SEQUENCE
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            AFRIN SHAIK
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            MICROSOFT DYNAMICS 365 CRM DEVELOPER
          </motion.p>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ width: 'min(320px, 80vw)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {/* Track */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: '1px', overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: '#C62828',
                  borderRadius: '1px',
                  transition: 'width 0.25s ease',
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Percentage */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
                INITIALIZING
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: '#C62828',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={line}
            initial="hidden"
            animate="visible"
            style={{ width: 'min(320px, 80vw)', height: '1px', background: 'rgba(198,40,40,0.3)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
