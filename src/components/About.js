import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const cards = [
  {
    emoji:'🌐', title:'MERN Stack',      color:'#7c6aff',
    desc:'Full-stack web apps using MongoDB, Express, React & Node.js — from REST APIs to polished UIs.',
  },
  {
    emoji:'📱', title:'App Development', color:'#ff6a9b',
    desc:'Cross-platform iOS & Android apps built with React Native, delivering smooth native experiences.',
  },
  {
    emoji:'🎮', title:'Game Development',color:'#6affce',
    desc:'3D survival games and interactive experiences using Unity & C# — currently building Dead Zone.',
  },
  {
    emoji:'🤖', title:'AI & ML',          color:'#ffbb6a',
    desc:'Automation tools, ML models, and LLM-powered apps built with Python, scikit-learn & LangChain.',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding:'8rem 0', position:'relative' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 3.5rem' }}>

        {/* top label */}
        <Reveal>
          <p style={{ fontFamily:'DM Mono', fontSize:'0.73rem', color:'var(--accent)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'1.2rem' }}>
            // who am i
          </p>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>

          {/* ── left: text ── */}
          <div>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize:'clamp(2.4rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.05, letterSpacing:'-0.03em', marginBottom:'1.6rem' }}>
                I turn ideas into<br/>
                <span style={{ fontFamily:'Instrument Serif', fontStyle:'italic', fontWeight:400, color:'var(--accent)' }}>
                  working software
                </span>
                .
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p style={{ color:'var(--muted)', lineHeight:1.82, fontSize:'0.98rem', marginBottom:'1.4rem' }}>
                Hey! I'm a self-driven software developer with a passion for building things that actually work.
                Whether it's a full-stack web app, a mobile experience, a game world, or a Python automation script —
                I love the whole process of going from <em style={{ color:'var(--text)' }}>zero to shipped</em>.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p style={{ color:'var(--muted)', lineHeight:1.82, fontSize:'0.98rem', marginBottom:'2.4rem' }}>
                I'm always learning. Right now I'm deep in the <strong style={{ color:'var(--text)' }}>MERN stack</strong>,
                shipping my first survival game <strong style={{ color:'var(--green)' }}>Dead Zone</strong>,
                and exploring how AI can automate real-world tasks.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <motion.a href="cv.pdf"
                  whileHover={{ scale:1.04, boxShadow:'0 0 28px rgba(124,106,255,0.3)' }}
                  style={{
                    padding:'0.75rem 1.8rem',
                    background:'rgba(124,106,255,0.1)', border:'1px solid rgba(124,106,255,0.32)',
                    borderRadius:'100px', color:'#a89fff',
                    fontFamily:'Syne', fontWeight:600, fontSize:'0.85rem',
                  }}>
                  Download CV
                </motion.a>
                <motion.button
                  whileHover={{ scale:1.04 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
                  style={{
                    padding:'0.75rem 1.8rem',
                    background:'transparent', border:'1px solid rgba(255,255,255,0.08)',
                    borderRadius:'100px', color:'var(--muted)',
                    fontFamily:'Syne', fontWeight:600, fontSize:'0.85rem',
                  }}>
                  See Projects →
                </motion.button>
              </div>
            </Reveal>
          </div>

          {/* ── right: 4 cards ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {cards.map(({ emoji, title, desc, color }, i) => (
              <Reveal key={title} delay={0.12 * i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ y:-6, borderColor:`${color}45` }}
                  style={{
                    padding:'1.6rem', background:'var(--surface)',
                    border:'1px solid var(--border)', borderRadius:'18px',
                    transition:'border-color .3s',
                  }}
                >
                  <div style={{
                    width:44, height:44, borderRadius:'12px', marginBottom:'1rem',
                    background:`${color}14`, border:`1px solid ${color}30`,
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem',
                  }}>{emoji}</div>
                  <h3 style={{ fontSize:'0.95rem', fontWeight:700, marginBottom:'0.5rem', color:'var(--text)' }}>{title}</h3>
                  <p  style={{ fontSize:'0.78rem', color:'var(--muted)', lineHeight:1.65 }}>{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
