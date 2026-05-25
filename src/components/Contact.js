import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const socials = [
  { Icon:Github,   label:'GitHub',   handle:'github.com/theAliMurtaza', href:'https://github.com/theAliMurtaza', color:'#f0f0f5', bg:'rgba(240,240,245,0.06)' },
  { Icon:Linkedin, label:'LinkedIn', handle:'Ali Murtaza on LinkedIn',  href:'https://www.linkedin.com/in/ali-murtaza-6348ba3b0?utm_source=share_via&utm_content=profile&utm_medium=member_android', color:'#0a66c2', bg:'rgba(10,102,194,0.08)'  },
  { Icon:Mail,     label:'Email',    handle:'ali.murtaza@email.com',    href:'mailto:ali.murtaza@email.com', color:'#ff6a9b', bg:'rgba(255,106,155,0.08)' },
];

export default function Contact() {
  const [form,  setForm]  = useState({ name:'', email:'', subject:'', message:'' });
  const [sent,  setSent]  = useState(false);
  const [busy,  setBusy]  = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setSent(true); setBusy(false); setForm({ name:'', email:'', subject:'', message:'' }); }, 1200);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="grid-bg" style={{ padding:'8rem 0', position:'relative' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 3.5rem' }}>

        <Reveal>
          <p style={{ fontFamily:'DM Mono', fontSize:'0.73rem', color:'var(--accent)', letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'1rem' }}>// get in touch</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontSize:'clamp(2.4rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.05, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
            Let's build something{' '}
            <span style={{ fontFamily:'Instrument Serif', fontStyle:'italic', fontWeight:400, background:'linear-gradient(135deg,#7c6aff,#ff6a9b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              together
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p style={{ color:'var(--muted)', fontSize:'0.98rem', lineHeight:1.78, maxWidth:480, marginBottom:'4rem' }}>
            Whether you want to collaborate on a project, have a job opportunity, or just want to say hi — my inbox is always open.
          </p>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>

          {/* ── form ── */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                {[
                  { label:'Your Name',    name:'name',    type:'text',  placeholder:'Alex Johnson' },
                  { label:'Your Email',   name:'email',   type:'email', placeholder:'alex@email.com' },
                ].map(f => (
                  <label key={f.name} style={{ display:'flex', flexDirection:'column', gap:'0.38rem' }}>
                    <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.08em' }}>{f.label}</span>
                    <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                      placeholder={f.placeholder} required />
                  </label>
                ))}
              </div>

              <label style={{ display:'flex', flexDirection:'column', gap:'0.38rem' }}>
                <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.08em' }}>Subject</span>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project collaboration / Job offer / Just saying hi" required />
              </label>

              <label style={{ display:'flex', flexDirection:'column', gap:'0.38rem' }}>
                <span style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.08em' }}>Message</span>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project, idea, or how I can help..." required />
              </label>

              <motion.button
                type="submit"
                disabled={busy}
                whileHover={{ scale: sent || busy ? 1 : 1.03, boxShadow: sent || busy ? 'none' : '0 0 32px rgba(124,106,255,0.35)' }}
                whileTap={{ scale:0.97 }}
                style={{
                  padding:'1rem 2rem',
                  background: sent ? 'rgba(106,255,206,0.15)' : 'linear-gradient(135deg,#7c6aff,#ff6a9b)',
                  border: sent ? '1px solid rgba(106,255,206,0.35)' : 'none',
                  borderRadius:'100px', color:'#fff',
                  fontFamily:'Syne', fontWeight:600, fontSize:'0.9rem',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                  transition:'background .4s',
                }}
              >
                {busy ? '⏳ Sending…' : sent ? '✓ Message Sent!' : <><Send size={15}/> Send Message</>}
              </motion.button>
            </form>
          </Reveal>

          {/* ── right side ── */}
          <div>
            <Reveal delay={0.24}>
              <div style={{ marginBottom:'2.5rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--muted)', fontSize:'0.85rem', marginBottom:'0.5rem' }}>
                  <MapPin size={14}/> Available remotely — worldwide
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--muted)', fontSize:'0.85rem' }}>
                  <MessageCircle size={14}/> Usually replies within 24 hours
                </div>
              </div>
            </Reveal>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              {socials.map(({ Icon, label, handle, href, color, bg }, i) => (
                <Reveal key={label} delay={0.28 + i * 0.09}>
                  <motion.a href={href || "#"} target="_blank" rel="noopener noreferrer"
                    whileHover={{ x:8, borderColor:`${color}30` }}
                    style={{
                      display:'flex', alignItems:'center', gap:'1rem',
                      padding:'1rem 1.2rem', background:'var(--surface)',
                      border:'1px solid var(--border)', borderRadius:'14px',
                      transition:'all .2s',
                    }}
                  >
                    <div style={{ width:38, height:38, borderRadius:'10px', background:bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Icon size={17} color={color}/>
                    </div>
                    <div>
                      <div style={{ fontFamily:'DM Mono', fontSize:'0.7rem', color:'var(--muted)' }}>{label}</div>
                      <div style={{ fontSize:'0.88rem', fontWeight:600, color:'var(--text)' }}>{handle}</div>
                    </div>
                  </motion.a>
                </Reveal>
              ))}
            </div>

            {/* fun note */}
            <Reveal delay={0.55}>
              <div style={{
                marginTop:'2rem', padding:'1.2rem 1.4rem',
                background:'rgba(124,106,255,0.05)', border:'1px solid rgba(124,106,255,0.15)',
                borderRadius:'14px',
              }}>
                <p style={{ fontFamily:'DM Mono', fontSize:'0.73rem', color:'var(--accent)', marginBottom:'0.35rem' }}>// beginner? yes. passionate? absolutely.</p>
                <p style={{ fontSize:'0.83rem', color:'var(--muted)', lineHeight:1.7 }}>
                  I'm early in my career but I bring <strong style={{ color:'var(--text)' }}>curiosity, dedication,</strong> and a{' '}
                  <strong style={{ color:'var(--text)' }}>genuine love for building things.</strong> Let's grow together!
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
