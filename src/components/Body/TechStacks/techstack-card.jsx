import React from 'react';
import "./techstack-card.css";

function TechStackCard({techStack}) {
  return (
    <div className='techstack-card' >
        <div className="techstack-icon">
            <img src={techStack.icon} />
        </div>
        <label className=""> {techStack.name} </label>
    </div>
  )
};

export default TechStackCard;