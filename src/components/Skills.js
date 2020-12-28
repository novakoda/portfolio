import React from 'react';
import { frontendImages, backendImages, otherImages } from './skillsIndex.js';

function getSkills(images, skills) {
  images.map( image => {
    skills.push(
      <img src={image.source} alt={image.name} key={image.id} style={{width: 50, height: 50}}/>
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
      <h3>front-end</h3>
      <div class>
        { frontendSkills }
      </div>

      <h3>back-end</h3>
      { backendSkills }
      <h3>misc</h3>
      { otherSkills }
    </div>
  )
}
