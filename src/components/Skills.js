import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';

/* ─── skill data ──────────────────────────────────── */
const categories = [
  {
    label:'MERN Stack',  color:'#7c6aff', emoji:'🌐',
    skills:[
      { name:'MongoDB',    level:78, note:'Atlas, CRUD, aggregation' },
      { name:'Express.js', level:80, note:'REST APIs, middleware'     },
      { name:'React.js',   level:85, note:'Hooks, Router, state mgmt' },
      { name:'Node.js',    level:80, note:'Server, npm, file system'  },
    ],
  },
  {
    label:'App Development', color:'#ff6a9b', emoji:'📱',
    skills:[
      { name:'React Native',  level:75, note:'Expo, navigation'   },
      { name:'UI / UX',       level:72, note:'Responsive design'  },
      { name:'REST APIs',     level:80, note:'Fetch, Axios, async' },
      { name:'Firebase',      level:65, note:'Auth, Firestore'    },
    ],
  },
  {
    label:'Game Development', color:'#6affce', emoji:'🎮',
    skills:[
      { name:'Unity',    level:70, note:'3D scenes, physics'        },
      { name:'C#',       level:68, note:'Scripts, OOP'              },
      { name:'Blender',  level:55, note:'Basic 3D modeling'         },
      { name:'Game AI',  level:62, note:'Pathfinding, enemy logic'  },
    ],
  },
  {
    label:'AI / ML', color:'#ffbb6a', emoji:'🤖',
    skills:[
      { name:'Python',       level:82, note:'Core language'         },
      { name:'scikit-learn', level:68, note:'Classification, regression' },
      { name:'LangChain',    level:65, note:'LLM chains, agents'    },
      { name:'Automation',   level:80, note:'Selenium, scripts'     },
    ],
  },
];

const tools = [
  '⚛ React.js','🍃 MongoDB','⬡ Node.js','🐍 Python','🎮 Unity',
  '📱 React Native','🔥 Firebase','🐳 Docker','☁ AWS','⎇ Git',
  '🤖 LangChain','💅 Tailwind CSS',
];

/* ─── animated bar ────────────────────────────────── */
function Bar({ name, level, note, color, delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-40px' });
  return (
    <div ref={ref} style={{ marginBottom:'1.15rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'0.38rem' }}>
        <div>
          <span style={{ fontSize:'0.86rem', fontWeight:600, color:'var(--text)' }}>{name}</span>
          <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--subtle)', marginLeft:'0.55rem' }}>{note}</span>
        </div>
        <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color }}>{level}%</span>
      </div>
      <div style={{ height:4, background:'rgba(255,255,255,0.05)', borderRadius:4, overflow:'hidden' }}>
        <motion.div
          initial={{ width:0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration:1.3, delay, ease:[0.22,0.4,0.22,1] }}
          style={{ height:'100%', background:`linear-gradient(90deg,${color}80,${color})`, borderRadius:4, boxShadow:`0 0 10px ${color}55` }}
        />
      </div>
    </div>
  );
}

/* ─── component ───────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" style={{ padding:'8rem 0', background:'var(--surface)', position:'relative' }}>
      {/* top rule */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(124,106,255,0.4),transparent)' }}/>

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 3.5rem' }}>

        <Reveal>
          <p style={{ fontFamily:'DM Mono', fontSize:'0.73rem', color:'var(--accent)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'1rem' }}>// skills & tools</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontSize:'clamp(2.4rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.05, letterSpacing:'-0.03em', marginBottom:'0.9rem' }}>
            What I{' '}
            <span style={{ fontFamily:'Instrument Serif', fontStyle:'italic', fontWeight:400, color:'var(--pink)' }}>know</span>
            {' '}& can do
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p style={{ color:'var(--muted)', fontSize:'0.98rem', maxWidth:480, marginBottom:'4rem' }}>
            My skills span four areas — each one backed by real projects and lots of hands-on practice.
          </p>
        </Reveal>

        {/* skill category cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:'1.5rem', marginBottom:'5rem' }}>
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={0.09 * ci}>
              <div style={{
                padding:'1.8rem', background:'var(--bg)',
                border:'1px solid var(--border)', borderRadius:'20px',
              }}>
                {/* header */}
                <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'1.4rem' }}>
                  <span style={{ fontSize:'1.25rem' }}>{cat.emoji}</span>
                  <span style={{ fontFamily:'DM Mono', fontSize:'0.76rem', color:cat.color, letterSpacing:'0.12em', textTransform:'uppercase' }}>
                    {cat.label}
                  </span>
                </div>
                {/* bars */}
                {cat.skills.map((s, si) => (
                  <Bar key={s.name} {...s} color={cat.color} delay={0.18 + si * 0.1 + ci * 0.06}/>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* tools row */}
        <Reveal>
          <p style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--subtle)', letterSpacing:'0.16em', textTransform:'uppercase', textAlign:'center', marginBottom:'1.4rem' }}>
            Tools & technologies
          </p>
        </Reveal>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.65rem', justifyContent:'center' }}>
          {tools.map((t, i) => (
            <Reveal key={t} delay={0.05 * i}>
              <motion.div
                whileHover={{ y:-4, borderColor:'rgba(124,106,255,0.42)' }}
                style={{
                  padding:'0.55rem 1.1rem', fontFamily:'DM Mono', fontSize:'0.8rem',
                  background:'rgba(255,255,255,0.02)', border:'1px solid var(--border)',
                  borderRadius:'100px', color:'var(--muted)', transition:'border-color .2s',
                }}
              >{t}</motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* bottom rule */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(124,106,255,0.4),transparent)' }}/>
    </section>
  );
}
