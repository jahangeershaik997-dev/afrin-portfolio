import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="education"
      ref={ref}
      aria-labelledby="education-heading"
      style={{
        padding: '7rem 0',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
            05 / EDUCATION
          </span>
        </motion.div>

        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1A2E',
            marginBottom: '3.5rem',
            lineHeight: 1.15,
          }}
        >
          Education & certifications
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="edu-grid"
        >
          {/* Education timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
              <GraduationCap size={20} style={{ color: '#C62828' }} />
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1A1A2E',
                }}
              >
                Academic Background
              </h3>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Vertical line */}
              <div
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #C62828, rgba(198,40,40,0.1))',
                }}
                aria-hidden="true"
              />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  style={{
                    position: 'relative',
                    marginBottom: i < education.length - 1 ? '2rem' : 0,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2rem',
                      top: '6px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: i === 0 ? '#C62828' : '#FFFFFF',
                      border: '2px solid #C62828',
                    }}
                    aria-hidden="true"
                  />

                  <div
                    style={{
                      background: '#F4F5F7',
                      borderRadius: '14px',
                      padding: '1.25rem 1.5rem',
                      border: '1px solid rgba(26,26,46,0.06)',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#1A1A2E',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#5C5C7A', fontWeight: 500, marginBottom: '0.25rem' }}>
                      {edu.institution}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: '#C62828', fontWeight: 600, letterSpacing: '0.02em' }}>
                      {edu.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
              <Award size={20} style={{ color: '#C62828' }} />
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1A1A2E',
                }}
              >
                Certifications
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  style={{
                    background: '#F4F5F7',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid rgba(26,26,46,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Left accent */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: cert.color,
                    }}
                    aria-hidden="true"
                  />

                  <div style={{ paddingLeft: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: cert.color,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {cert.code}
                      </span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#FFFFFF',
                          background: cert.color,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#1A1A2E',
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      {cert.name}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#9B9BB4', marginTop: '0.35rem', fontStyle: 'italic' }}>
                      Microsoft Certification — Pursuing
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Focus areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(26,26,46,0.07)',
                }}
              >
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B9BB4', marginBottom: '1rem' }}>
                  Professional Focus
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {[
                    'D365 CRM', 'Dataverse', 'CRM Automation', 'Plug-in Development',
                    'CRM Customization', 'API Integration', 'CRM Security',
                    'Business Process Automation', 'Technical Documentation',
                  ].map((focus) => (
                    <span
                      key={focus}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#5C5C7A',
                        background: '#F4F5F7',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(26,26,46,0.07)',
                      }}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
