import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const highlights = [
  { value: '2+', label: 'YEARS', sub: 'DYNAMICS 365' },
  { value: '3', label: 'PROJECTS', sub: 'ENTERPRISE CRM' },
  { value: '9+', label: 'MODULES', sub: 'DATAVERSE' },
  { value: 'C# / .NET', label: 'CORE', sub: 'DEVELOPMENT' },
];

const expertise = [
  'Dynamics 365 CRM customization and configuration',
  'Dataverse table design with advanced field types',
  'C# / .NET plug-in development and debugging',
  'JavaScript form customizations and validations',
  'Business Process Flows and workflow automation',
  'Power Automate for enterprise automation',
  'Dynamics 365 Web API and REST integrations',
  'FetchXML and SQL reporting',
  'Security roles, user admin, and access control',
  'Ribbon Workbench and Command Bar customization',
  'Dynamics 365 Portal / Power Apps Portal',
  'Solution import/export and environment management',
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      style={{
        padding: '7rem 0',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C62828',
            }}
          >
            01 / ABOUT
          </span>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              id="about-heading"
              variants={item}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#1A1A2E',
                lineHeight: 1.15,
                marginBottom: '1.75rem',
              }}
            >
              CRM engineering with a{' '}
              <span style={{ color: '#C62828' }}>business-first</span> mindset.
            </motion.h2>

            <motion.p variants={item} style={bodyText}>
              I'm a Microsoft Dynamics 365 CRM Developer based in Hyderabad, India,
              with 2+ years of hands-on experience designing, developing, and deploying
              enterprise CRM solutions on Microsoft Dynamics 365 and Dataverse.
            </motion.p>

            <motion.p variants={item} style={{ ...bodyText, marginTop: '1rem' }}>
              Working across domains like healthcare and enterprise operations,
              I build end-to-end CRM solutions involving Dataverse table architecture,
              C# / .NET plug-in development, JavaScript form automations, Web API integrations,
              FetchXML reporting, and Power Automate workflows. I also configure Ribbon Workbench
              commands, SQL Server stored procedures, and role-based CRM security.
            </motion.p>

            <motion.p variants={item} style={{ ...bodyText, marginTop: '1rem' }}>
              My approach combines strong technical expertise across the Dynamics 365 platform
              with direct client interaction and requirements analysis — translating complex business
              processes into robust, scalable, and maintainable CRM applications.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              variants={item}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
              }}
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    background: '#F4F5F7',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid rgba(26,26,46,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#C62828',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {h.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1A2E', marginTop: '0.3rem' }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#9B9BB4', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.1rem' }}>
                    {h.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Expertise list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9B9BB4',
                marginBottom: '1.5rem',
              }}
            >
              Core Expertise
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: '#F4F5F7',
                    borderRadius: '10px',
                    border: '1px solid rgba(26,26,46,0.04)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#C62828',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: '0.875rem', color: '#1A1A2E', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const bodyText: React.CSSProperties = {
  fontSize: '1rem',
  color: '#5C5C7A',
  lineHeight: 1.75,
};

