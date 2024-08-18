import React from 'react';
import "./index.css";

import {ProjectsData} from "../../../data/projects";
import ProjectCard from './project-card';
import Seperator from "../../Common/Seperator";

function Projects() {
  const data = ProjectsData;
  return (
    <div className='projects' >
      <Seperator /> 
      <label className='section-title' >Projects</label>
      <div>
        {
          data.map(project=> <ProjectCard key={project.id} project={project} /> ) 
        }
      </div>
    </div>
  )
};

export default Projects;