import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="container">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
