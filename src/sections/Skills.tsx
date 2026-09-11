import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const bentoConfig = [
  { key: 'crmPlatform', span: 2, accent: true },
  { key: 'development', span: 1 },
  { key: 'customization', span: 1, tall: true },
  { key: 'integration', span: 1 },
  { key: 'data', span: 1 },
  { key: 'administration', span: 1 },
  { key: 'ui', span: 1 },
  { key: 'portals', span: 1 },
  { key: 'quality', span: 1 },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      style={{
        padding: '7rem 0',
        background: '#F4F5F7',
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
            04 / TECHNICAL STACK
          </span>
        </motion.div>

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1A2E',
            marginBottom: '3rem',
            lineHeight: 1.15,
          }}
        >
          Technology & expertise
        </motion.h2>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            gridAutoRows: 'auto',
          }}
          className="skills-bento"
        >
          {bentoConfig.map(({ key, span, accent, tall }, i) => {
            const cat = skills[key as keyof typeof skills];
            if (!cat) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                style={{
                  gridColumn: `span ${span}`,
                  background: accent ? '#C62828' : '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: accent ? 'none' : '1px solid rgba(26,26,46,0.07)',
                  boxShadow: accent ? '0 8px 32px rgba(198,40,40,0.2)' : '0 2px 8px rgba(26,26,46,0.05)',
                  minHeight: tall ? '200px' : 'auto',
                }}
              >
                <h3
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: accent ? 'rgba(255,255,255,0.65)' : '#9B9BB4',
                    marginBottom: '0.875rem',
                  }}
                >
                  {cat.label}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: accent ? '#FFFFFF' : '#1A1A2E',
                        background: accent ? 'rgba(255,255,255,0.12)' : '#F4F5F7',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '999px',
                        border: accent ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(26,26,46,0.07)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CRM Development Lifecycle */}
        <LifecycleSection isInView={isInView} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-bento {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .skills-bento > div[style*="span 2"] {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 600px) {
          .skills-bento {
            grid-template-columns: 1fr !important;
          }
          .skills-bento > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

const lifecycleStages = [
  { num: '01', stage: 'Requirement', skills: ['Client Interaction', 'Requirement Analysis'] },
  { num: '02', stage: 'Design', skills: ['Dataverse Modeling', 'Entity Relationships', 'Field Design'] },
  { num: '03', stage: 'Configuration', skills: ['Tables', 'Forms', 'Views', 'Business Rules', 'BPF'] },
  { num: '04', stage: 'Development', skills: ['C# / .NET', 'Plug-ins', 'JavaScript', 'Web API'] },
  { num: '05', stage: 'Integration', skills: ['Web API', 'REST API', 'FetchXML', 'SQL'] },
  { num: '06', stage: 'Testing', skills: ['Unit Testing', 'Debugging', 'UAT Support'] },
  { num: '07', stage: 'Deployment', skills: ['Solutions', 'Import / Export', 'Environments'] },
  { num: '08', stage: 'Support', skills: ['Troubleshooting', 'Documentation', 'Administration'] },
];

function LifecycleSection({ isInView }: { isInView: boolean }) {
  return (
    <div style={{ marginTop: '5rem' }}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1A1A2E',
          marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
        }}
      >
        CRM Development Lifecycle
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        style={{ color: '#9B9BB4', fontSize: '0.9rem', marginBottom: '2.5rem' }}
      >
        End-to-end delivery of Microsoft Dynamics 365 CRM solutions.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          position: 'relative',
        }}
        className="lifecycle-grid"
      >
        {lifecycleStages.map((stage, i) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.07 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              padding: '1.25rem',
              border: '1px solid rgba(26,26,46,0.07)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(198,40,40,0.06)',
                position: 'absolute',
                top: '-0.5rem',
                right: '0.5rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              {stage.num}
            </div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C62828', marginBottom: '0.5rem' }}>
              {stage.stage}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {stage.skills.map((s) => (
                <span key={s} style={{ fontSize: '0.78rem', color: '#5C5C7A', fontWeight: 500 }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lifecycle-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .lifecycle-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
