import React from 'react'
import About from './About';
import Skills from "./Skills";
import Contact from './Contact';
import Projects from './Projects';
import TeckStacks from './TechStacks';
import Work from './Work';
import Acheivements from "./Acheivements";

import "./body.css";

function Body() {
  return (
    <div className='body' >
      <section id="about" >
        <About />
      </section>
      <section id="skills"> 
        <Skills />
      </section>
      <section id="projects"> 
        <Projects />
      </section>
      <section id="techstack" >
        <TeckStacks />
      </section>
      <section id="work" >
        <Work />
      </section>
      <section id="awards" >
        <Acheivements />
      </section>
      <section id="contact" >
        <Contact />
      </section>
    </div>
  )
};

export default Body;