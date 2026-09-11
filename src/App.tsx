import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import './styles/global.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Skip preloader for users who prefer reduced motion
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <a
            href="#about"
            style={{
              position: 'absolute',
              top: '-100px',
              left: 0,
              background: '#C62828',
              color: 'white',
              padding: '0.5rem 1rem',
              zIndex: 9999,
              borderRadius: '0 0 8px 0',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
            onFocus={(e) => (e.currentTarget.style.top = '0')}
            onBlur={(e) => (e.currentTarget.style.top = '-100px')}
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            <Hero />
            <Marquee />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
