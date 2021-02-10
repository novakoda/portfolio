import React from 'react';
import projectData from './projectData.js';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [];

  projectData.map(p => {
    projects.push(
      <div key={p.id} className="card d-inline-block m-2 p-2 border rounded">
        <img src={p.pic} className="card-img-top w-100" alt={p.name}></img>
        <div className="card-body p-3">
          <h5 className="mx-auto text-center">{p.name}</h5>
          <div className="project-btns mt-2 d-flex row justify-content-between gap-2">
            <a href={p.demo} target="_blank" className="project-demo col btn btn-primary btn-lg">Demo</a>
            <a href={p.github} target="_blank" className="project-code col btn btn-outline-secondary btn-lg">Source Code</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="card-columns">
        {projects}
      </div>
    </div>
  )
}
