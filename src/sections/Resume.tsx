import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import { profile } from '../data/portfolio';

const coreExpertise = [
  'Microsoft Dynamics 365 CRM',
  'Dataverse',
  'C# / .NET',
  'JavaScript',
  'Plug-ins',
  'Web API / REST',
  'SQL Server',
  'FetchXML',
  'Power Apps',
  'Power Automate',
  'Ribbon Workbench',
  'Security Roles',
  'Solution Import / Export',
  'Dynamics 365 Portal',
];

const DOCX_URL = '/resume/Afrin_Shaik_Resume.docx';
const PDF_URL = '/resume/Afrin_Shaik_Resume.pdf';
const HAS_PDF = true; // Set to false if PDF does not exist

export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="resume"
      ref={ref}
      aria-labelledby="resume-heading"
      style={{
        padding: '7rem 0',
        background: '#F4F5F7',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '1rem' }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C62828',
            }}
          >
            06 / RESUME
          </span>
        </motion.div>

        <motion.h2
          id="resume-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1A2E',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
          }}
        >
          Professional resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1rem', color: '#9B9BB4', marginBottom: '3.5rem', maxWidth: '520px' }}
        >
          Download or view the full resume for a complete picture of Afrin's Dynamics 365 CRM experience, projects, and skills.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="resume-grid"
        >
          {/* LEFT — Profile card + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Profile card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              {/* Accent top strip */}
              <div
                style={{ height: '4px', background: 'linear-gradient(90deg, #C62828, #B71C1C88)' }}
                aria-hidden="true"
              />
              <div style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9B9BB4', marginBottom: '0.5rem' }}>
                    Professional Profile
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#1A1A2E',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {profile.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#C62828', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {profile.title}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={statChip}>
                      <span style={{ color: '#C62828', fontWeight: 700 }}>2+</span> Years Experience
                    </span>
                    <span style={statChip}>
                      📍 {profile.location}
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {HAS_PDF && (
                    <a
                      href={PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Afrin Shaik's resume PDF in a new tab"
                      style={primaryCTA}
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      View Resume
                    </a>
                  )}
                  <a
                    href={DOCX_URL}
                    download="Afrin_Shaik_Resume.docx"
                    aria-label="Download Afrin Shaik's resume as a Word document"
                    style={HAS_PDF ? outlineCTA : primaryCTA}
                  >
                    <Download size={15} aria-hidden="true" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Experience snapshot */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Briefcase size={16} style={{ color: '#C62828' }} aria-hidden="true" />
                <h3 style={sectionHead}>Experience Snapshot</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Current */}
                <ExperienceItem
                  period="Aug 2026 – Present"
                  current
                  company="APTSOL GLOBAL TECH PRIVATE LIMITED"
                  role="Dynamics 365 CRM Developer"
                  projects={['Hospital Management System']}
                />
                {/* Previous */}
                <ExperienceItem
                  period="Mar 2024 – Jul 2026"
                  company="Starlite Infotech"
                  role="Dynamics 365 CRM Developer"
                  projects={['Unilever OPSO HD 0.1 / PPM', 'SIS K-12 Product Development']}
                />
              </div>
            </div>

            {/* Education */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={16} style={{ color: '#C62828' }} aria-hidden="true" />
                <h3 style={sectionHead}>Education</h3>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1A1A2E' }}>Bachelor of Computer Science</p>
                <p style={{ fontSize: '0.82rem', color: '#5C5C7A' }}>ASN Degree College · 2021–2024</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Expertise + Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Core expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <h3 style={{ ...sectionHead, marginBottom: '1.25rem' }}>Core Expertise</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {coreExpertise.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                    style={skillTag}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Award size={16} style={{ color: '#C62828' }} aria-hidden="true" />
                <h3 style={sectionHead}>Certifications</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { code: 'PL-400', name: 'Microsoft Power Platform Developer Associate' },
                  { code: 'MB-230', name: 'Dynamics 365 Customer Service Functional Consultant Associate' },
                ].map((cert) => (
                  <div
                    key={cert.code}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      padding: '1rem 1.25rem',
                      background: '#F4F5F7',
                      borderRadius: '12px',
                      border: '1px solid rgba(26,26,46,0.06)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '3px',
                        background: '#C62828',
                        borderRadius: '12px 0 0 12px',
                      }}
                      aria-hidden="true"
                    />
                    <div style={{ paddingLeft: '0.25rem', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            color: '#C62828',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {cert.code}
                        </span>
                        <span
                          style={{
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                            background: '#C62828',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '999px',
                            flexShrink: 0,
                          }}
                        >
                          Pursuing
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#1A1A2E', fontWeight: 600, lineHeight: 1.4 }}>
                        {cert.name}
                      </p>
                      <p style={{ fontSize: '0.72rem', color: '#9B9BB4', marginTop: '0.2rem', fontStyle: 'italic' }}>
                        Microsoft Certification — In Progress
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Final download CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                background: '#1A1A2E',
                borderRadius: '20px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Ready to connect?
              </p>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.45 }}>
                Get the full resume with detailed responsibilities and tech stack.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {HAS_PDF && (
                  <a
                    href={PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume PDF in new tab"
                    style={{ ...primaryCTA, background: '#C62828' }}
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    View Resume
                  </a>
                )}
                <a
                  href={DOCX_URL}
                  download="Afrin_Shaik_Resume.docx"
                  aria-label="Download resume as Word document"
                  style={{
                    ...outlineCTA,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                  }}
                >
                  <Download size={15} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ExperienceItem({
  period,
  current,
  company,
  role,
  projects,
}: {
  period: string;
  current?: boolean;
  company: string;
  role: string;
  projects: string[];
}) {
  return (
    <div
      style={{
        borderLeft: `2px solid ${current ? '#C62828' : 'rgba(198,40,40,0.2)'}`,
        paddingLeft: '1rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-5px',
          top: '4px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: current ? '#C62828' : '#FFFFFF',
          border: '2px solid #C62828',
        }}
        aria-hidden="true"
      />
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.72rem', color: '#C62828', fontWeight: 600, letterSpacing: '0.03em' }}>
          {period}
        </span>
        {current && (
          <span
            style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C62828',
              background: 'rgba(198,40,40,0.1)',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
            }}
          >
            Current
          </span>
        )}
      </div>
      <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.15rem' }}>
        {company}
      </p>
      <p style={{ fontSize: '0.8rem', color: '#5C5C7A', marginBottom: '0.5rem' }}>{role}</p>
      {projects.map((p) => (
        <p key={p} style={{ fontSize: '0.75rem', color: '#9B9BB4', fontStyle: 'italic' }}>
          · {p}
        </p>
      ))}
    </div>
  );
}

/* ─── Shared styles ─── */
const statChip: React.CSSProperties = {
  fontSize: '0.78rem',
  color: '#5C5C7A',
  background: '#F4F5F7',
  border: '1px solid rgba(26,26,46,0.07)',
  padding: '0.3rem 0.75rem',
  borderRadius: '999px',
  fontWeight: 500,
};

const primaryCTA: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
  padding: '0.75rem 1.4rem',
  background: '#C62828',
  color: '#FFFFFF',
  borderRadius: '10px',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  letterSpacing: '0.01em',
};

const outlineCTA: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
  padding: '0.75rem 1.4rem',
  background: '#F4F5F7',
  color: '#1A1A2E',
  borderRadius: '10px',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  border: '1px solid rgba(26,26,46,0.1)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const sectionHead: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 700,
  color: '#1A1A2E',
  margin: 0,
};

const skillTag: React.CSSProperties = {
  fontSize: '0.775rem',
  fontWeight: 600,
  color: '#1A1A2E',
  background: '#F4F5F7',
  border: '1px solid rgba(26,26,46,0.07)',
  padding: '0.3rem 0.75rem',
  borderRadius: '8px',
  letterSpacing: '0.01em',
  display: 'inline-block',
};
