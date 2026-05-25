import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ padding:'2.4rem 0', background:'var(--bg)', borderTop:'1px solid var(--border)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 3.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>

        <div style={{ fontFamily:'DM Mono', fontSize:'0.78rem' }}>
          <span style={{ color:'var(--muted)' }}>{'< '}</span>
          <span style={{ color:'var(--accent)' }}>dev</span>
          <span style={{ color:'var(--pink)'   }}>.portfolio</span>
          <span style={{ color:'var(--muted)' }}>{' />'}</span>
        </div>

        <p style={{ fontFamily:'DM Mono', fontSize:'0.72rem', color:'var(--subtle)' }}>
          Built with React.js · No TypeScript · Just vibes ☕
        </p>

        <div style={{ display:'flex', gap:'1rem' }}>
          <motion.a href='https://github.com/theAliMurtaza' target='_blank' rel='noopener noreferrer'
            whileHover={{ y:-3, color:'var(--accent)' }}
            style={{ color:'var(--subtle)', transition:'color .2s' }}>
            <Github size={16}/>
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/ali-murtaza-6348ba3b0?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel='noopener noreferrer'
            whileHover={{ y:-3, color:'#0a66c2' }}
            style={{ color:'var(--subtle)', transition:'color .2s' }}>
            <Linkedin size={16}/>
          </motion.a>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          whileHover={{ y:-3, color:'var(--accent)' }}
          style={{
            background:'none', border:'1px solid var(--border)',
            borderRadius:'100px', padding:'0.4rem 1rem',
            color:'var(--subtle)', fontFamily:'DM Mono', fontSize:'0.72rem',
            transition:'color .2s',
          }}
        >↑ back to top</motion.button>
      </div>
    </footer>
  );
}
