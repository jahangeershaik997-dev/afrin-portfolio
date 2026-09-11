import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle parallax on bg text
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgTextRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgTextRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #F4F5F7 0%, #ECEEF2 100%)',
      }}
    >
      {/* Background decorative typography */}
      <div
        ref={bgTextRef}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          lineHeight: 0.85,
          color: 'rgba(198,40,40,0.04)',
          fontSize: 'clamp(8rem, 15vw, 14rem)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          textAlign: 'right',
          transition: 'transform 0.3s ease',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        DYNAMICS<br />365<br />CRM
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,46,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          width: '3px',
          height: '30%',
          background: 'linear-gradient(180deg, transparent, #C62828, transparent)',
          transformOrigin: 'top',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px',
          padding: '0 3rem 0 3rem',
        }}
        className="hero-content"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(198,40,40,0.08)',
              border: '1px solid rgba(198,40,40,0.2)',
              color: '#C62828',
              padding: '0.4rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: '#C62828',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1A1A2E',
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            }}
          >
            {profile.name}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#C62828',
            letterSpacing: '0.01em',
            marginBottom: '1.5rem',
            lineHeight: 1.3,
          }}
        >
          Microsoft Dynamics 365<br />CRM Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: '#5C5C7A',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '1rem',
          }}
        >
          I'm Afrin Shaik, a Microsoft Dynamics 365 CRM Developer focused on building reliable, business-driven CRM solutions.
        </motion.p>

        {/* Sub copy */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '0.9rem',
            color: '#9B9BB4',
            lineHeight: 1.6,
            maxWidth: '480px',
            marginBottom: '2.5rem',
          }}
        >
          With 2+ years of experience, I specialize in Microsoft Dynamics 365 CRM, Dataverse architecture, C# plug-in development, business process automation, and API integrations.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '3', label: 'Major Projects' },
            { value: '2', label: 'Certifications Pursuing' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#C62828',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9B9BB4', fontWeight: 500, marginTop: '0.2rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#9B9BB4',
            fontSize: '0.85rem',
            marginBottom: '2.5rem',
          }}
        >
          <MapPin size={14} style={{ color: '#C62828' }} />
          {profile.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={primaryBtn}
          >
            View Experience <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={outlineBtn}
          >
            Contact Me
          </a>
          <a
            href="/resume/Afrin_Shaik_Resume.docx"
            download="Afrin_Shaik_Resume.docx"
            aria-label="Download Afrin Shaik's resume"
            style={{ ...outlineBtn, gap: '0.4rem' }}
          >
            <Download size={15} /> Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#9B9BB4',
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .hero-content {
          padding: 0 3rem !important;
        }
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 1.75rem',
  background: '#C62828',
  color: 'white',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  letterSpacing: '0.01em',
};

const outlineBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 1.75rem',
  background: 'rgba(255,255,255,0.7)',
  color: '#1A1A2E',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  border: '1px solid rgba(26,26,46,0.12)',
  transition: 'all 0.2s ease',
  backdropFilter: 'blur(8px)',
};
