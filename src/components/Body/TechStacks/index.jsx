import React from 'react'
import "./techstack.css";
import Seperator from '../../Common/Seperator';
import {TechStackData} from "../../../data/techStack";
import TechStackCard from './techstack-card';

function TechStacks() {
  const data = TechStackData;
  return (
    <div className='techstacks' >
      <Seperator />
      <label className='section-title' >
        TechStack
      </label>
      <div className="techstacks-container">
        {
          data.map(item=> (
            <div key={item.id} className="techstacks-section">
              <label className="techstacks-section-title"> {item.type} </label>
              <div className="techstacks-list">
                {
                  item.list.map( techStack=> <TechStackCard key={techStack.id} techStack={techStack} /> )
                }
              </div>
            </div>
          ) )
        }
      </div>
    </div>
  )
}

export default TechStacks;