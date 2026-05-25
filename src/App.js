import React from 'react';
import Cursor     from './components/Cursor';
import Nav        from './components/Nav';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
