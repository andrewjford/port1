import React from 'react';
import headshot from './images/headshot2.jpg';

const About = () =>
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p className="about-p">I am a software developer with the majority of my experience in Salesforce development, Javascript, and Ruby on Rails. I work for Bluewolf, an IBM company that provides consulting services for Salesforce.</p>
    <p className="about-p">In a previous career I worked in public accounting as an auditor. I still hold a CPA license in the state of Washington. </p>
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>Salesforce development</li>
      <li>Apex</li>
      <li>Salesforce Lightning</li>
      <li>Javascript</li>
      <li>Ruby</li>
      <li>React.js</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL</li>
      <li>Git</li>
      <li>Python</li>
      <li>Ruby on Rails</li>
      <li>jQuery</li>
      <li>TDD</li>
    </ul>
    <h2>Education</h2>
    <p>Flatiron School - August 2017</p>
    <ul><li>Full Stack Web Development, Ruby on Rails and Javascript online program</li></ul>
    <p>Florida Atlantic University - Boca Raton, FL - May 2011</p>
    <ul>
      <li>Master of Accounting and Bachelor of Business Administration with Scholars Distinction</li>
      <li>Graduated Summa Cum Laude</li>
    </ul>
    <p>University of Florida - Gainesville, FL - May 2008</p>
    <ul>
      <li>Bachelor of Arts in History</li>
    </ul>
  </div>

export default About;
