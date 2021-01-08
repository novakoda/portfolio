import React from 'react';
import projectData from './projectData.js';

export default function Projects() {
  const projects = [];

  projectData.map(p => {
    projects.push(
      <div>
        <h2>{p.name}</h2>
        <img src={p.source}></img>
        <a href={p.github}>GitHub</a>
        <a href={p.demo}>Demo</a>
      </div>
    )
  });
  
  return (
    <div>
      {projects}
    </div>
  )
}
