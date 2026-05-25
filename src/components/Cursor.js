import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [dot,  setDot]  = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [down, setDown] = useState(false);

  useEffect(() => {
    let raf;
    let target = { x: -100, y: -100 };

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
    };
    const onDown = () => setDown(true);
    const onUp   = () => setDown(false);

    const tick = () => {
      setRing(prev => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  const dotSize  = down ? 14 : 8;
  const ringSize = down ? 44 : 32;

  return (
    <>
      {/* inner dot */}
      <div style={{
        position: 'fixed',
        left: dot.x - dotSize / 2,
        top:  dot.y - dotSize / 2,
        width: dotSize, height: dotSize,
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'screen',
        transition: 'width .1s, height .1s',
      }} />
      {/* outer ring */}
      <div style={{
        position: 'fixed',
        left: ring.x - ringSize / 2,
        top:  ring.y - ringSize / 2,
        width: ringSize, height: ringSize,
        border: '1.5px solid rgba(124,106,255,0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99998,
        mixBlendMode: 'screen',
        transition: 'width .15s, height .15s',
      }} />
    </>
  );
}
