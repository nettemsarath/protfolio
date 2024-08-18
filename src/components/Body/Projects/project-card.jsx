import React from 'react';
import "./project-card.css";

import globeIcon from "../../../images/Icons/globe.png";
import gihtubIcon from "../../../images/Icons/github.png";

function ProjectCard({project}) {
  return (
    <div className='project-card' >
      <div className='project-info' >
        <label className='project-title' > {project.title} </label>
        <div className='project-links'>
          {
            project.demo && <a className='project-link' href={project.demo} target="_blank" >
                <div className='link-button' >
                  <img src={globeIcon} /> Demo
                </div>
            </a>
          }
          {
            project.github && <a className='project-link' href={project.github} >
              <div className='link-button' >
                <img src={gihtubIcon} /> Github
              </div>
            </a>
          }
        </div>
        <p className='project_description' >{project.about}</p>
          <div className='project-tags' >
            {
              project.tags.map((tag, index) => <label key={index} className='tag' > {tag} </label> )
            }
          </div>
      </div>

      <img src={project.image} className='project-photo' />
    </div>
  )
};

export default ProjectCard;