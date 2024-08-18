import React from 'react'

import Seperator from "../../Common/Seperator";
import SocialContact from '../../Common/Social-Contact';
import downloadIcon from "../../../images/assets/download.png"
import {resumeLink} from "../../../data/contact";

import "./contact.css";

function Contact() {
  return (
    <div className='contact' >
      <Seperator />
      <div className='contact_details' >
        <div>
          <p> Want to get in Touch ? contact me on any of the platform </p>
          <SocialContact />
        </div>

        <div>
          <a href={resumeLink} target="_blank" className='contact_downloadresume' >
            <img src={downloadIcon} alt="" />
            <span> Download Resume  </span>
          </a>
        </div>

      </div>

    </div>
  )
};

export default Contact;