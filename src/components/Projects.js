import React from 'react';
import projectData from './projectData.js';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [];

  projectData.map(p => {
    projects.push(
      <div className="col-md-6 col-sm-12 col-lg-4">
        <div key={p.id} className="card d-inline-block m-2 p-2 border rounded">
          <img src={p.pic} className="card-img-top w-100" alt={p.name}
              onMouseOver={e => ( e.currentTarget.src = p.gif )}
              onMouseOut={e => ( e.currentTarget.src = p.pic )}
            ></img>
          <div className="card-body p-3">
            <h5 className="card-title text-center">{p.name}</h5>
              { p.id === 0 &&
                <div>
                  <div class="text-info">
                    <p class="card-title">Example Profile Login</p>
                    <p class="card-text my-0">Email: john@doe.com</p>
                    <p class="card-text my-0">Password: password</p>
                  </div>
                  <div class="text-danger">
                    <p class="card-text">Note - Due to limitations with Heroku hosting, profile pictures are only saved for the duration of the session</p>
                  </div>
                </div>
              }
            <div className="project-btns mt-2 row justify-content-between gap-2">
              <a href={p.demo} target="_blank" className="project-demo col-xl col-md-12 col-sm btn btn-primary align-middle btn-lg">Live Demo</a>
              <a href={p.github} target="_blank" className="project-code col-xl col-md-12 col-sm btn btn-outline-secondary btn-lg">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="row">
        {projects}
      </div>
    </div>
  )
}
