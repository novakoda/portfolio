import React from 'react';
import { frontendImages, backendImages, otherImages } from './skillsIndex.js';

function getSkills(images, skills) {
  images.map( image => {
    skills.push(
      <img className="mx-1 mb-2 p-1 border border-dark rounded" src={image.source} alt={image.name} key={image.id} style={{width: 50, height: 50}}/>
    );
  });
}

export default function Skills() {
  const frontendSkills = [];
  const backendSkills = [];
  const otherSkills = [];

  getSkills(frontendImages, frontendSkills);
  getSkills(backendImages, backendSkills);
  getSkills(otherImages, otherSkills);

  return (
    <div>
      <h2>Skills</h2>
      <div className="row">
        <div className="col-sm">
          <h3>front-end</h3>
          <div>
            { frontendSkills }
          </div>
        </div>

        <div className="col-sm">
          <h3>back-end</h3>
          <div>
            { backendSkills }
          </div>
        </div>

        <div className="col-sm">
          <h3>misc</h3>
          <div>
            { otherSkills }
          </div>
        </div>
      </div>

    </div>
  )
}
