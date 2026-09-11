import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import { profile, socialLinks } from '../data/portfolio';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'A valid email address is required.';
  if (!form.message.trim())
    errors.message = 'Message is required.';
  return errors;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const WHATSAPP_NUMBER = '919381742436'; // +91 9381742436 — international format, no + or spaces

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Build the WhatsApp message text
    const text =
      `Hello Afrin,\n\n` +
      `Name: ${form.firstName.trim()} ${form.lastName.trim()}\n` +
      `Email: ${form.email.trim()}\n\n` +
      `Message:\n${form.message.trim()}\n\n` +
      `Sent from Afrin Shaik's portfolio.`;

    // Safely encode — preserves line breaks as %0A
    const encoded = encodeURIComponent(text);
    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Open WhatsApp Web / app in a new tab
    window.open(waURL, '_blank', 'noopener,noreferrer');

    // Show confirmation and reset form
    setStatus('success');
    setTimeout(() => {
      setForm({ firstName: '', lastName: '', email: '', message: '' });
      setTouched({});
      setStatus('idle');
    }, 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
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
            07 / CONTACT
          </span>
        </motion.div>

        <motion.h2
          id="contact-heading"
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
          Let's build better<br />CRM experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1rem', color: '#9B9BB4', marginBottom: '3.5rem', maxWidth: '480px' }}
        >
          Open to opportunities involving Microsoft Dynamics 365 CRM, Dataverse,
          customization, development, automation and integrations.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <Mail size={18} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: <Phone size={18} />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
                { icon: <MapPin size={18} />, label: 'Location', value: profile.location },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    border: '1px solid rgba(26,26,46,0.07)',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(198,40,40,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C62828',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9B9BB4', marginBottom: '0.2rem' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ fontSize: '0.9rem', color: '#1A1A2E', fontWeight: 600, textDecoration: 'none' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.9rem', color: '#1A1A2E', fontWeight: 600 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={socialBtn}
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={socialBtn}
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(26,26,46,0.07)',
              boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3rem 1rem',
                  gap: '1rem',
                  textAlign: 'center',
                }}
                role="status"
                aria-live="polite"
              >
                <CheckCircle size={48} style={{ color: '#16A34A' }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#1A1A2E' }}>
                  WhatsApp opened!
                </h3>
                <p style={{ color: '#9B9BB4', fontSize: '0.9rem' }}>
                  Your message is ready in WhatsApp. Press <strong>Send</strong> to deliver it to Afrin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <FormField
                    id="firstName"
                    label="First Name"
                    value={form.firstName}
                    error={errors.firstName}
                    onChange={(v) => handleChange('firstName', v)}
                    onBlur={() => handleBlur('firstName')}
                  />
                  <FormField
                    id="lastName"
                    label="Last Name"
                    value={form.lastName}
                    error={errors.lastName}
                    onChange={(v) => handleChange('lastName', v)}
                    onBlur={() => handleBlur('lastName')}
                  />
                </div>

                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => handleChange('email', v)}
                  onBlur={() => handleBlur('email')}
                  style={{ marginBottom: '1rem' }}
                />

                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    htmlFor="message"
                    style={labelStyle}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px',
                      border: errors.message ? '1.5px solid #EF4444' : inputStyle.border,
                    }}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" style={errorStyle}>
                      <AlertCircle size={12} style={{ flexShrink: 0 }} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div role="alert" style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    background: status === 'loading' ? '#9B9BB4' : '#C62828',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                  }}
                  aria-busy={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: 'white',
                          borderRadius: '50%',
                          animation: 'spin 0.7s linear infinite',
                        }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function FormField({
  id,
  label,
  value,
  error,
  type = 'text',
  onChange,
  onBlur,
  style: extraStyle,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <div style={extraStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={`Your ${label.toLowerCase()}`}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        style={{
          ...inputStyle,
          border: error ? '1.5px solid #EF4444' : inputStyle.border,
        }}
      />
      {error && (
        <p id={`${id}-error`} role="alert" style={errorStyle}>
          <AlertCircle size={12} style={{ flexShrink: 0 }} />
          {error}
        </p>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#5C5C7A',
  marginBottom: '0.4rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: '#F4F5F7',
  border: '1.5px solid transparent',
  borderRadius: '10px',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  color: '#1A1A2E',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const errorStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.75rem',
  color: '#EF4444',
  marginTop: '0.3rem',
};

const socialBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.7rem 1.2rem',
  background: '#FFFFFF',
  border: '1px solid rgba(26,26,46,0.1)',
  borderRadius: '12px',
  fontFamily: 'inherit',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#1A1A2E',
  textDecoration: 'none',
  transition: 'all 0.2s',
};
