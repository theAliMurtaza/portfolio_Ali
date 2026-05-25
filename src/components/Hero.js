import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

/* word-by-word stagger heading */
const HeadWord = ({ word, delay, outline }) => (
  <motion.span
    initial={{ opacity:0, y:55 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ duration:0.8, delay, ease:[0.22,0.4,0.22,1] }}
    style={{
      display:'block',
      fontSize:'clamp(3.2rem,8.5vw,7.5rem)',
      fontWeight:800, lineHeight:0.95, letterSpacing:'-0.03em',
      color: outline ? 'transparent' : 'var(--text)',
      WebkitTextStroke: outline ? '2px rgba(124,106,255,0.55)' : 'none',
    }}
  >{word}{!outline && <span style={{ color:'var(--accent)' }}>.</span>}</motion.span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] });
  const yOrbs    = useTransform(scrollYProgress, [0,1], ['0%','28%']);
  const opacity  = useTransform(scrollYProgress, [0,0.75], [1,0]);

  return (
    <section
      ref={ref} id="hero" className="grid-bg"
      style={{ minHeight:'100vh', position:'relative', display:'flex', alignItems:'center', overflow:'hidden' }}
    >
      {/* ── floating orbs ── */}
      <motion.div style={{ y:yOrbs, position:'absolute', inset:0, pointerEvents:'none' }}>
        <div className="float" style={{
          position:'absolute', top:'12%', right:'8%', width:420, height:420,
          background:'radial-gradient(circle, rgba(124,106,255,0.13) 0%, transparent 68%)',
          borderRadius:'50%', filter:'blur(40px)',
        }}/>
        <div className="floatB" style={{
          position:'absolute', bottom:'18%', left:'4%', width:320, height:320,
          background:'radial-gradient(circle, rgba(255,106,155,0.09) 0%, transparent 68%)',
          borderRadius:'50%', filter:'blur(40px)',
        }}/>
        <div className="floatC" style={{
          position:'absolute', top:'55%', left:'42%', width:220, height:220,
          background:'radial-gradient(circle, rgba(106,255,206,0.07) 0%, transparent 68%)',
          borderRadius:'50%', filter:'blur(30px)',
        }}/>
        {/* decorative rings */}
        <div className="spin" style={{
          position:'absolute', top:'8%', right:'4%', width:320, height:320,
          border:'1px solid rgba(124,106,255,0.1)', borderRadius:'50%',
        }}/>
        <div className="spinR" style={{
          position:'absolute', top:'10.5%', right:'6.5%', width:270, height:270,
          border:'1px dashed rgba(255,106,155,0.07)', borderRadius:'50%',
        }}/>
      </motion.div>

      {/* ── content ── */}
      <motion.div style={{ opacity, position:'relative', zIndex:10, width:'100%', maxWidth:1280, margin:'0 auto', padding:'7rem 3.5rem 4rem' }}>

        {/* available badge */}
        <motion.div
          initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.18 }}
          style={{
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            padding:'0.38rem 1rem',
            background:'rgba(106,255,206,0.07)', border:'1px solid rgba(106,255,206,0.22)',
            borderRadius:'100px', marginBottom:'2rem',
          }}
        >
          <span className="blink" style={{ width:6, height:6, background:'var(--green)', borderRadius:'50%', display:'inline-block' }}/>
          <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--green)', letterSpacing:'0.1em' }}>
            Open to work — available now
          </span>
        </motion.div>

        {/* heading */}
        <div style={{ marginBottom:'1.8rem' }}>
          <HeadWord word="Software Engineer"  delay={0.35} outline={false} />
          <HeadWord word="Developer"   delay={0.50} outline={true}  />
          <HeadWord word="& Builder"   delay={0.65} outline={false} />
        </div>

        {/* sub-copy */}
        <motion.p
          initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.85 }}
          style={{ color:'var(--muted)', fontSize:'1.05rem', lineHeight:1.75, maxWidth:540, marginBottom:'2rem' }}
        >
          I build web apps with the <strong style={{ color:'var(--text)' }}>MERN stack</strong>,
          cross-platform <strong style={{ color:'var(--text)' }}>mobile apps</strong>,
          immersive <strong style={{ color:'var(--text)' }}>games</strong>, and smart{' '}
          <strong style={{ color:'var(--text)' }}>AI/ML</strong> tools — one project at a time.
        </motion.p>

        {/* tech pills */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.0 }}
          style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'2.2rem' }}
        >
          {['MongoDB','Express.js','React.js','Node.js','React Native','Unity / C#','Python','AI & ML'].map((t,i) => (
            <motion.span
              key={t}
              initial={{ opacity:0, scale:0.82 }} animate={{ opacity:1, scale:1 }} transition={{ delay:1.1 + i*0.07 }}
              style={{
                padding:'0.28rem 0.9rem',
                background:'rgba(124,106,255,0.08)', border:'1px solid rgba(124,106,255,0.22)',
                borderRadius:'100px', fontSize:'0.73rem', fontFamily:'DM Mono', color:'#a89fff', letterSpacing:'0.04em',
              }}
            >{t}</motion.span>
          ))}
        </motion.div>

        {/* CTAs + socials */}
        <motion.div
          initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.3 }}
          style={{ display:'flex', alignItems:'center', gap:'1.5rem', flexWrap:'wrap' }}
        >
          <motion.button
            whileHover={{ scale:1.04, boxShadow:'0 0 32px rgba(124,106,255,0.38)' }}
            whileTap={{ scale:0.96 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
            style={{
              padding:'0.88rem 2.2rem',
              background:'linear-gradient(135deg,#7c6aff 0%,#ff6a9b 100%)',
              border:'none', borderRadius:'100px',
              color:'#fff', fontFamily:'Syne', fontWeight:600, fontSize:'0.9rem', letterSpacing:'0.04em',
            }}
          >View My Work</motion.button>

          <motion.button
            whileHover={{ scale:1.04 }}
            whileTap={{ scale:0.96 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
            style={{
              padding:'0.88rem 2.2rem',
              background:'transparent', border:'1px solid rgba(124,106,255,0.35)',
              borderRadius:'100px', color:'var(--accent)',
              fontFamily:'Syne', fontWeight:600, fontSize:'0.9rem',
            }}
          >Get In Touch</motion.button>

          <div style={{ display:'flex', gap:'1rem', marginLeft:'0.5rem' }}>
            {[
              { Icon:Github,   href:'https://github.com/theAliMurtaza' },
              { Icon:Linkedin, href:'https://www.linkedin.com/in/ali-murtaza-6348ba3b0?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
              { Icon:Mail,     href:'mailto:ali.murtaza@email.com' },
            ].map(({ Icon, href }, i) => (
              <motion.a key={i} href={href} whileHover={{ y:-3, color:'var(--accent)' }}
                target='_blank' rel='noopener noreferrer' style={{ color:'var(--subtle)', transition:'color .2s' }}>
                <Icon size={20}/>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.55 }}
          style={{ display:'flex', gap:'3rem', marginTop:'4.5rem', paddingTop:'3rem', borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap' }}
        >
          {[
            { n:'4+',  label:'Domains Mastered'  },
            { n:'10+', label:'Projects Shipped'   },
            { n:'1',   label:'Survival Game Built' },
            { n:'∞',   label:'Problems Solved'    },
          ].map(({ n, label }) => (
            <div key={label}>
              <div style={{ fontSize:'2.4rem', fontWeight:800, background:'linear-gradient(135deg,#7c6aff,#ff6a9b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{n}</div>
              <div style={{ fontFamily:'DM Mono', fontSize:'0.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}
        initial={{ opacity:0 }}
        animate={{ opacity:1, y:[0,7,0] }}
        transition={{ delay:2, repeat:Infinity, duration:2.2, ease:'easeInOut' }}
        whileHover={{ borderColor:'rgba(124,106,255,0.5)', color:'var(--text)' }}
        style={{
          position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
          background:'none', border:'1px solid rgba(124,106,255,0.22)', borderRadius:'100px',
          padding:'0.55rem 1.2rem', color:'var(--muted)',
          display:'flex', alignItems:'center', gap:'0.5rem',
          fontFamily:'DM Mono', fontSize:'0.7rem',
        }}
      ><ArrowDown size={12}/> scroll</motion.button>
    </section>
  );
}
