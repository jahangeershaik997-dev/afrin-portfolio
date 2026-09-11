import { Mail, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { profile, socialLinks } from '../data/portfolio';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const specialties = [
  'Dynamics 365', 'Dataverse', 'Plug-ins', 'Automation', 'Integration',
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#1A1A2E',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
      aria-label="Site footer"
    >
      {/* Ticker */}
      <div
        style={{
          background: '#C62828',
          padding: '0.6rem 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'footerTicker 20s linear infinite',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{ marginRight: '4rem' }}>
              // CRM SYSTEM ONLINE · DYNAMICS 365 · DATAVERSE · PLUG-INS · AUTOMATION ·
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                {profile.name}
              </span>
              <br />
              <span style={{ fontSize: '0.8rem', color: '#C62828', fontWeight: 600 }}>
                {profile.title}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
              <MapPin size={13} />
              {profile.location}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={footerIcon}
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={footerIcon}
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Email"
                style={{ ...footerIcon, background: '#C62828' }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Specialties
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {specialties.map((s) => (
                <span
                  key={s}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', fontWeight: 500 }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
            © {year} {profile.name} · Microsoft Dynamics 365 CRM Developer · Hyderabad, India
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            Built with React · Vite · Framer Motion · GSAP
          </p>
        </div>
      </div>

      <style>{`
        @keyframes footerTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

const footerIcon: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  transition: 'all 0.2s',
};
