import React from 'react';
import { frontendImages, backendImages, otherImages } from './skillsIndex.js';
import '../styles/Skills.scss';

function getSkills(images, skills) {
  images.map( image => {
    skills.push(
      <img className="mx-1 mb-2 p-1 border border-dark rounded skill"
        src={image.source} alt={image.name}
        key={image.id}
        />
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
        <div className="col-sm-12 col-lg-5 col-md-4">
          <h3>Front End</h3>
          <div className='d-flex flex-wrap flex-lg-nowrap'>
            { frontendSkills }
          </div>
        </div>

        <div className="col-sm-12 col-lg-2 col-md-4">
          <h3 className="text-lg-left text-md-center">Back End</h3>
          <div className="d-flex justify-content-md-center">
            { backendSkills }
          </div>
        </div>

        <div className="col-sm-12 col-lg-5 col-md-4">
          <h3 className="text-md-right">Miscellaneous</h3>
          <div className="d-flex justify-content-md-end flex-wrap flex-lg-nowrap">
            { otherSkills }
          </div>
        </div>
      </div>

    </div>
  )
}
