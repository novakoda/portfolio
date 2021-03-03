import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <div className="row mb-5 mt-4">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <img src="/pic.jpg" alt="James Williams" className="profile-pic float-md-left rounded pl-md-4 mx-auto align-self-sm-center"></img>
        </div>
        <div className="align-self-center col-md-6 col-lg-8 pl-lg-3">
          <h1 style={{fontSize: 70}} className="text-center text-sm-left">James Williams</h1>
          <h3>About Me</h3>
          <p>I'm a 25 year old full stack web developer, graphic designer and audio engineer from Houston, Texas. Currently taking classes for an Associates Degree in Computer Science at Houston Community College. The tech guy that you need to succeed lol help me write dis shit gahdamnit idk wtf to say on dis shit, but I do need something here preferably about this long!</p>
        </div>
      </div>
    </div>
  )
}
