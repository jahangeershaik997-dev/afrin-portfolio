import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { profile, socialLinks } from '../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: scrolled ? '16px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          transition: 'top 0.3s ease',
          width: 'calc(100% - 3rem)',
          maxWidth: '1100px',
        }}
      >
        <div
          style={{
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: '1px solid rgba(26,26,46,0.08)',
            boxShadow: scrolled ? '0 8px 32px rgba(26,26,46,0.12)' : '0 4px 16px rgba(26,26,46,0.06)',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#1A1A2E',
                letterSpacing: '-0.02em',
              }}
            >
              {profile.name.split(' ')[0]}{' '}
              <span style={{ color: '#C62828' }}>{profile.name.split(' ')[1]}</span>
            </span>
            <span
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9B9BB4',
                fontWeight: 500,
              }}
            >
              D365 CRM DEVELOPER
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: active === item.href ? '#C62828' : '#5C5C7A',
                  textDecoration: 'none',
                  background: active === item.href ? 'rgba(198,40,40,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (active !== item.href) {
                    (e.target as HTMLElement).style.color = '#1A1A2E';
                    (e.target as HTMLElement).style.background = 'rgba(26,26,46,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== item.href) {
                    (e.target as HTMLElement).style.color = '#5C5C7A';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={iconStyle}
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={iconStyle}
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              style={{ ...iconStyle, background: '#C62828', color: 'white' }}
            >
              <Mail size={15} />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                ...iconStyle,
                border: '1px solid rgba(26,26,46,0.08)',
                background: 'transparent',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '1.5rem',
              right: '1.5rem',
              zIndex: 999,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(26,26,46,0.08)',
              boxShadow: '0 16px 48px rgba(26,26,46,0.12)',
              overflow: 'hidden',
            }}
          >
            <nav aria-label="Mobile navigation" style={{ padding: '1.25rem' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  style={{
                    display: 'block',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1A1A2E',
                    textDecoration: 'none',
                    borderBottom: i < navItems.length - 1 ? '1px solid rgba(26,26,46,0.06)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {item.label}
                  <span style={{ float: 'right', color: '#C62828', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}
              {/* Mobile social row */}
              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(26,26,46,0.06)', marginTop: '0.5rem' }}>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(26,26,46,0.08)', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: '#5C5C7A', textDecoration: 'none' }}>
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(26,26,46,0.08)', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: '#5C5C7A', textDecoration: 'none' }}>
                  <GithubIcon size={14} /> GitHub
                </a>
                <a href={`mailto:${socialLinks.email}`} aria-label="Email" style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', background: '#C62828', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: 'white', textDecoration: 'none' }}>
                  <Mail size={14} /> Email
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const iconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '999px',
  color: '#5C5C7A',
  background: 'rgba(26,26,46,0.05)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
};
