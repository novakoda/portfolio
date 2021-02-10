import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/App.css';
import './styles/default.scss';

export default function App() {
  return (
    <div className="container">
      <About />
      <hr></hr>
      <Skills />
      <hr></hr>
      <Projects />
    </div>
  );
}
