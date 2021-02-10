import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <h1 style={{fontSize: 70}}>James Williams</h1>
      <div className="row mb-5">
        <div className="float-left ml-md-4 col-md-4">
          <img src="/placeholder.png" alt="Placeholder" className="profile-pic float-left rounded mr-3"></img>
        </div>
        <div className="col">
          <h3>About Me</h3>
          <p>I'm a 25 year old full stack web developer, graphic designer and audio engineer from Houston, Texas. Currently taking classes for an Associates Degree in Computer Science at Houston Community College. The tech guy that you need to succeed lol help me write dis shit gahdamnit idk wtf to say on dis shit, but I do need something here preferably about this long!</p>
        </div>
      </div>
    </div>
  )
}
