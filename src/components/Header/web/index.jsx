import React from 'react'
import "./web.css";

import breifcaseIcon from "../../../images/briefcase.png";
import editIcon from "../../../images/edit.png";
import laptopIcon from "../../../images/laptop.png";
import contactIcon from "../../../images/user.png";
import acheivementIcon from "../../../images/acheivements.png"

function Web() {
  return (
    <div className='web' >
      <div className="web_option">
        <a href='#skills' >
          <img src={editIcon} alt="" className="web_option-icon" />
          Skills
        </a>
      </div>

      <div className="web_option">
        <a href='#projects' >
          <img src={editIcon} alt="" className="web_option-icon" />
          Projects
        </a>
      </div>

      <div className="web_option">
        <a href='#techstack'>
          <img src={laptopIcon} alt="" className="web_option-icon" />
          Techstack
        </a>
      </div>

      <div className="web_option">
        <a href='#work' >
          <img src={breifcaseIcon} alt="" className="web_option-icon" />
          Work
        </a>
      </div>

      <div className="web_option">
        <a href='#awards'>
          <img src={acheivementIcon} alt="" className="web_option-icon" />
          Awards
        </a>
      </div>

      <div className="web_option">
        <a href='#contact'>
          <img src={contactIcon} alt="" className="web_option-icon" />
          Contact
        </a>
      </div>

    </div>
  )
}

export default Web;