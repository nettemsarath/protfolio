import React from 'react'
import "./mobile.css";

import crossIcon from "../../../images/cross-circle.png"
import breifcaseIcon from "../../../images/briefcase.png";
import editIcon from "../../../images/edit.png";
import laptopIcon from "../../../images/laptop.png";
import contactIcon from "../../../images/user.png";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile' >
      <div className="close_icon" onClick={ ()=> setIsOpen(!isOpen) } >
        <img src={crossIcon} alt="" className='mobile_close-icon' />
      </div>
      <div className="mobile_options">
      <div className="mobile_option">
          <a href='#skills' >
            <img src={editIcon} alt="" className="mobile_option-icon" />
            Skills
          </a>
        </div>

        <div className="mobile_option">
          <a href='#projects' >
            <img src={editIcon} alt="" className="mobile_option-icon" />
            Projects
          </a>
        </div>

        <div className="mobile_option">
          <a href='#projects' >
            <img src={editIcon} alt="" className="mobile_option-icon" />
            Projects
          </a>
        </div>

        <div className="mobile_option">
          <a href='#techstack'>
            <img src={laptopIcon} alt="" className="mobile_option-icon" />
            Techstack
          </a>
        </div>

        <div className="mobile_option">
          <a href='#work' >
            <img src={breifcaseIcon} alt="" className="mobile_option-icon" />
            Work
          </a>
        </div>

        <div className="mobile_option">
          <a href='#contact'>
            <img src={contactIcon} alt="" className="mobile_option-icon" />
            Contact
          </a>
        </div>

      </div>
    </div>
  )
};

export default Mobile;