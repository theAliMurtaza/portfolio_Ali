import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── main bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.1rem 3rem',
          background:    scrolled ? 'rgba(5,5,8,0.88)'          : 'transparent',
          backdropFilter:scrolled ? 'blur(18px)'                 : 'none',
          borderBottom:  scrolled ? '1px solid rgba(124,106,255,0.12)' : '1px solid transparent',
          transition: 'all 0.35s ease',
        }}
      >
        {/* logo */}
        <div style={{ fontFamily:'DM Mono', fontSize:'0.9rem', letterSpacing:'0.08em' }}>
          <span style={{ color:'var(--muted)' }}>{'< '}</span>
          <span style={{ color:'var(--accent)' }}>dev</span>
          <span style={{ color:'var(--pink)'   }}>.portfolio</span>
          <span style={{ color:'var(--muted)' }}>{' />'}</span>
        </div>

        {/* desktop links */}
        <div style={{ display:'flex', gap:'2.5rem', alignItems:'center' }}>
          {LINKS.map((l, i) => (
            <motion.button
              key={l}
              initial={{ opacity:0, y:-8 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              whileHover={{ color:'var(--text)' }}
              onClick={() => go(l)}
              style={{
                background:'none', border:'none',
                color:'var(--muted)', fontFamily:'Syne', fontWeight:500,
                fontSize:'0.78rem', letterSpacing:'0.13em', textTransform:'uppercase',
              }}
            >{l}</motion.button>
          ))}

          <motion.button
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8 }}
            whileHover={{ scale:1.05, boxShadow:'0 0 28px rgba(124,106,255,0.4)' }}
            whileTap={{ scale:0.95 }}
            onClick={() => go('Contact')}
            style={{
              padding:'0.48rem 1.3rem',
              background:'linear-gradient(135deg,#7c6aff,#ff6a9b)',
              border:'none', borderRadius:'100px',
              color:'#fff', fontFamily:'Syne', fontWeight:600,
              fontSize:'0.76rem', letterSpacing:'0.07em',
            }}
          >Hire Me</motion.button>
        </div>

        {/* mobile burger — shown via inline media query workaround */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{ background:'none', border:'none', display:'none', flexDirection:'column', gap:5, padding:4 }}
          className="burger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block', width:22, height:2,
              background: menuOpen ? 'var(--accent)' : 'var(--text)',
              borderRadius:2, transition:'all .3s',
              transform: menuOpen && i===0 ? 'rotate(45deg) translate(5px,5px)' :
                         menuOpen && i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity:    menuOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* ── mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
            style={{
              position:'fixed', top:68, left:0, right:0, zIndex:999,
              background:'rgba(5,5,8,0.97)', backdropFilter:'blur(20px)',
              padding:'1.8rem 2rem',
              borderBottom:'1px solid rgba(124,106,255,0.1)',
              display:'flex', flexDirection:'column', gap:'1.2rem',
            }}
          >
            {LINKS.map(l => (
              <button key={l} onClick={() => go(l)}
                style={{ background:'none', border:'none', color:'var(--text)', fontFamily:'Syne', fontSize:'1.1rem', textAlign:'left' }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* burger responsive helper */}
      <style>{`@media(max-width:768px){.burger{display:flex!important} nav>div:nth-child(2){display:none!important}}`}</style>
    </>
  );
}
