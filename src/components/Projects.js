import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const GITHUB   = "https://github.com/theAliMurtaza";
const LINKEDIN = "https://www.linkedin.com/in/ali-murtaza-6348ba3b0?utm_source=share_via&utm_content=profile&utm_medium=member_android";

const projects = [
  /* ── MERN ── */
  {
    id:1, category:'MERN Stack', color:'#7c6aff', emoji:'📄',
    title:'AI Resume Builder & Analyzer',
    desc:'A full-stack AI-powered resume builder and analyzer. Create your resume using an intuitive form, then get instant AI feedback — ATS compatibility score, keyword suggestions, and improvement tips — all powered by the OpenAI API.',
    what_i_learned:'Integrating OpenAI with a MERN stack, handling PDF generation on the server, building a multi-step form in React, and deploying a full-stack app to Vercel.',
    stack:['React.js','Node.js','Express.js','MongoDB','OpenAI API','Tailwind CSS'],
    status:'Completed',
    liveUrl:'https://mega-projects.vercel.app/',
    githubUrl: GITHUB,
    featured: true,
  },
  {
    id:2, category:'MERN Stack', color:'#7c6aff', emoji:'🔍',
    title:'Code Clone Detector',
    desc:'An FYP-grade tool that detects code plagiarism and clone patterns across multiple uploaded files. Supports multiple programming languages and shows a side-by-side similarity diff with percentage scores.',
    what_i_learned:'AST-based code comparison algorithms, chunked file uploads in Express, integrating a diff viewer in React, and taking a project from university idea to a deployed production URL.',
    stack:['React.js','Node.js','Express.js','MongoDB','AST Parsing','Python'],
    status:'Completed',
    liveUrl:'https://code-clone-fyp.vercel.app/',
    githubUrl: GITHUB,
    featured: true,
  },
  /* ── App Dev ── */
  {
    id:3, category:'App Development', color:'#ff6a9b', emoji:'💪',
    title:'FitTrack — Workout Tracker',
    desc:'A React Native mobile app to log daily workouts, track personal bests, and visualise weekly progress with charts. Works on both iOS and Android via Expo.',
    what_i_learned:'React Native navigation stacks, AsyncStorage for offline-first data, and rendering data charts on mobile devices.',
    stack:['React Native','Expo','AsyncStorage','React Navigation','Victory Charts'],
    status:'Completed',
    githubUrl: GITHUB,
  },
  {
    id:4, category:'App Development', color:'#ff6a9b', emoji:'💬',
    title:'ChatBuddy — Real-time Chat App',
    desc:'A mobile messaging app with real-time chat rooms, user profiles, and push notifications. Firebase powers the backend with zero-server setup.',
    what_i_learned:'Firebase Realtime Database, Firestore security rules, FCM push notifications, and managing real-time state in React Native.',
    stack:['React Native','Firebase','Firestore','FCM','Expo'],
    status:'Completed',
    githubUrl: GITHUB,
  },
  /* ── Game Dev ── */
  {
    id:5, category:'Game Development', color:'#6affce', emoji:'☣️',
    title:'Dead Zone — Survival Game',
    desc:'A 3D open-world zombie survival game built in Unity. Players scavenge resources, craft weapons, build shelters, and battle enemy AI in a post-apocalyptic environment. Features a full day/night cycle, hunger & thirst mechanics, and procedural loot spawns.',
    what_i_learned:'Unity NavMesh enemy AI, inventory & crafting systems, C# OOP in a real game context, procedural generation, and how to scope a game project so it actually gets finished.',
    stack:['Unity','C#','NavMesh AI','Unity Physics','Blender','ProBuilder'],
    status:'In Progress',
    featured: true,
    githubUrl: GITHUB,
  },
  /* ── AI / ML ── */
  {
    id:6, category:'AI / ML', color:'#ffbb6a', emoji:'🤖',
    title:'AutoApply — Job Application Bot',
    desc:'A Python automation tool that scrapes job listings from multiple platforms, filters by your keywords and location, auto-fills applications, and sends a daily email digest of new matches.',
    what_i_learned:'Selenium browser automation, HTML parsing with BeautifulSoup, scheduling Python scripts, and sending emails programmatically with smtplib.',
    stack:['Python','Selenium','BeautifulSoup','smtplib','Schedule','pandas'],
    status:'Completed',
    githubUrl: GITHUB,
  },
  {
    id:7, category:'AI / ML', color:'#ffbb6a', emoji:'📄',
    title:'SmartSummarizer — AI Doc Tool',
    desc:'Upload any PDF or text document and get an AI-generated summary, key bullet points, and a Q&A chatbot that answers questions about your document. Powered by LangChain and OpenAI.',
    what_i_learned:'LangChain document loaders, text chunking strategies, vector embeddings with FAISS, and building a Streamlit UI for an AI app quickly.',
    stack:['Python','LangChain','OpenAI API','FAISS','Streamlit','PyPDF2'],
    status:'Completed',
    githubUrl: GITHUB,
  },
  {
    id:8, category:'AI / ML', color:'#ffbb6a', emoji:'📊',
    title:'PricePulse — E-commerce Price Tracker',
    desc:'Monitors product prices on e-commerce sites and fires a WhatsApp or email alert the moment the price drops below your target. Runs 24/7 on a Raspberry Pi.',
    what_i_learned:'Scheduled Python scraping, Twilio WhatsApp API, lightweight SQLite storage, and deploying Python scripts on hardware.',
    stack:['Python','Selenium','Twilio','Schedule','SQLite','Raspberry Pi'],
    status:'Completed',
    githubUrl: GITHUB,
  },
];

const CATEGORIES = ['All', 'MERN Stack', 'App Development', 'Game Development', 'AI / ML'];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { color, emoji, title, desc, what_i_learned, stack, status, featured, category, liveUrl, githubUrl } = project;

  return (
    <Reveal delay={0.08 * (index % 4)}>
      <motion.div
        layout
        whileHover={{ y:-4, borderColor:`${color}35` }}
        style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:'20px', overflow:'hidden', transition:'border-color .3s',
          outline: featured ? `1px solid ${color}28` : 'none',
          boxShadow: featured ? `0 0 40px ${color}10` : 'none',
          height:'100%', display:'flex', flexDirection:'column',
        }}
      >
        {/* top colour bar */}
        <div style={{ height:3, background:`linear-gradient(90deg,${color},${color}55)`, flexShrink:0 }}/>

        <div style={{ padding:'1.6rem', display:'flex', flexDirection:'column', flex:1 }}>

          {/* header */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.85rem' }}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:'0.65rem', flex:1 }}>
              <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{emoji}</span>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.45rem', flexWrap:'wrap', marginBottom:'0.3rem' }}>
                  <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)', lineHeight:1.3 }}>{title}</h3>
                  {featured && (
                    <span style={{
                      padding:'0.13rem 0.52rem', fontFamily:'DM Mono', fontSize:'0.6rem',
                      background:`${color}15`, border:`1px solid ${color}30`,
                      borderRadius:'100px', color, whiteSpace:'nowrap',
                    }}>⭐ Featured</span>
                  )}
                </div>
                <span style={{
                  display:'inline-block',
                  padding:'0.12rem 0.52rem', fontFamily:'DM Mono', fontSize:'0.62rem',
                  background:`${color}10`, border:`1px solid ${color}25`,
                  borderRadius:'100px', color,
                }}>{category}</span>
              </div>
            </div>
            <span style={{
              padding:'0.2rem 0.6rem', fontFamily:'DM Mono', fontSize:'0.62rem',
              background: status === 'Completed' ? 'rgba(106,255,206,0.08)' : 'rgba(255,187,106,0.08)',
              border: status === 'Completed' ? '1px solid rgba(106,255,206,0.25)' : '1px solid rgba(255,187,106,0.25)',
              borderRadius:'100px',
              color: status === 'Completed' ? '#6affce' : '#ffbb6a',
              whiteSpace:'nowrap', flexShrink:0, marginLeft:'0.5rem',
            }}>{status === 'Completed' ? '✓ Done' : '⚙ WIP'}</span>
          </div>

          {/* desc */}
          <p style={{ color:'var(--muted)', fontSize:'0.86rem', lineHeight:1.72, marginBottom:'1rem', flex:1 }}>{desc}</p>

          {/* expand: what I learned */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
                transition={{ duration:0.3 }}
                style={{ overflow:'hidden' }}
              >
                <div style={{
                  padding:'0.9rem 1rem',
                  background:`${color}08`, border:`1px solid ${color}20`,
                  borderRadius:'10px', marginBottom:'1rem',
                }}>
                  <p style={{ fontFamily:'DM Mono', fontSize:'0.68rem', color, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.4rem' }}>
                    💡 What I Learned
                  </p>
                  <p style={{ color:'var(--muted)', fontSize:'0.83rem', lineHeight:1.68 }}>{what_i_learned}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* stack pills */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', marginBottom:'1.1rem' }}>
            {stack.map(t => (
              <span key={t} style={{
                padding:'0.18rem 0.55rem', fontFamily:'DM Mono', fontSize:'0.68rem',
                background:'rgba(255,255,255,0.03)', border:'1px solid var(--border)',
                borderRadius:'4px', color:'var(--subtle)',
              }}>{t}</span>
            ))}
          </div>

          {/* action row */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem' }}>
            <div style={{ display:'flex', gap:'0.8rem', alignItems:'center' }}>

              {/* GitHub */}
              <motion.a
                href={githubUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ y:-2, color:'var(--accent)' }}
                style={{ color:'var(--muted)', display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.78rem', fontFamily:'DM Mono' }}
              >
                <Github size={14}/> Code
              </motion.a>

              {/* Live — only shown when liveUrl exists */}
              {liveUrl && (
                <motion.a
                  href={liveUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y:-2, scale:1.05 }}
                  style={{
                    display:'flex', alignItems:'center', gap:'0.35rem',
                    fontSize:'0.78rem', fontFamily:'DM Mono', fontWeight:700,
                    color:'#fff',
                    padding:'0.28rem 0.75rem',
                    background:`linear-gradient(135deg,${color},${color}aa)`,
                    borderRadius:'100px',
                    boxShadow:`0 0 12px ${color}40`,
                  }}
                >
                  <ExternalLink size={13}/> Live ↗
                </motion.a>
              )}
            </div>

            <motion.button
              onClick={() => setExpanded(e => !e)}
              whileHover={{ color:'var(--text)' }}
              style={{
                background:'none', border:'none', color:'var(--muted)',
                display:'flex', alignItems:'center', gap:'0.3rem',
                fontSize:'0.73rem', fontFamily:'DM Mono',
              }}
            >
              {expanded ? 'Less' : 'Details'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration:0.25 }}>
                <ChevronDown size={13}/>
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="grid-bg" style={{ padding:'8rem 0', position:'relative' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 3.5rem' }}>

        <Reveal>
          <p style={{ fontFamily:'DM Mono', fontSize:'0.73rem', color:'var(--accent)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'1rem' }}>// my projects</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontSize:'clamp(2.4rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.05, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
            Things I've{' '}
            <span style={{ fontFamily:'Instrument Serif', fontStyle:'italic', fontWeight:400, color:'var(--green)' }}>built</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p style={{ color:'var(--muted)', fontSize:'0.98rem', maxWidth:560, marginBottom:'1.5rem' }}>
            Real projects across web, mobile, games & AI. The <strong style={{ color:'var(--green)' }}>Live ↗</strong> button takes you straight to the deployed app.
            Hit <strong style={{ color:'var(--text)' }}>Details</strong> to see what I learned building each one.
          </p>
        </Reveal>

        {/* live project highlight banner */}
        <Reveal delay={0.18}>
          <div style={{
            display:'flex', flexWrap:'wrap', gap:'0.9rem', marginBottom:'3rem',
            padding:'1rem 1.4rem',
            background:'rgba(106,255,206,0.04)', border:'1px solid rgba(106,255,206,0.18)',
            borderRadius:'14px', alignItems:'center',
          }}>
            <span style={{ fontFamily:'DM Mono', fontSize:'0.72rem', color:'var(--green)' }}>🟢 Live deployments:</span>
            <motion.a href="https://mega-projects.vercel.app/" target="_blank" rel="noopener noreferrer"
              whileHover={{ y:-2 }}
              style={{ fontFamily:'DM Mono', fontSize:'0.78rem', color:'#a89fff', display:'flex', alignItems:'center', gap:'0.3rem' }}>
              <ExternalLink size={12}/> AI Resume Builder
            </motion.a>
            <span style={{ color:'var(--subtle)', fontSize:'0.7rem' }}>·</span>
            <motion.a href="https://code-clone-fyp.vercel.app/" target="_blank" rel="noopener noreferrer"
              whileHover={{ y:-2 }}
              style={{ fontFamily:'DM Mono', fontSize:'0.78rem', color:'#a89fff', display:'flex', alignItems:'center', gap:'0.3rem' }}>
              <ExternalLink size={12}/> Code Clone Detector
            </motion.a>
          </div>
        </Reveal>

        {/* filter tabs */}
        <Reveal delay={0.2}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.55rem', marginBottom:'3rem' }}>
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
                style={{
                  padding:'0.45rem 1.1rem',
                  background: active === cat ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
                  border: active === cat ? 'none' : '1px solid var(--border)',
                  borderRadius:'100px',
                  color: active === cat ? '#fff' : 'var(--muted)',
                  fontFamily:'Syne', fontWeight:600, fontSize:'0.78rem',
                  transition:'all .2s',
                }}
              >
                {cat}
                {cat !== 'All' && (
                  <span style={{ fontFamily:'DM Mono', fontSize:'0.65rem', opacity:0.7, marginLeft:'0.3rem' }}>
                    ({projects.filter(p => p.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* project grid */}
        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'1.4rem' }}>
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id} layout
                initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.95 }}
                transition={{ duration:0.3 }}
              >
                <ProjectCard project={p} index={i}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
