import React from 'react'
import "./about.css";

import codingImg from "../../../images/assets/coding.png";
import SocialContact from '../../Common/Social-Contact';

function About() {
  return (
    <div className='about' >
      <div className="about-top">
        <div className="about-info">
          Hello there iam a 
          <br />
          <span className='info-name' > Web Developer. </span> 
          <br /> i love to learn and experiment with Tech
        </div>
        <div className="about-photo">
           <img src={codingImg} alt="" />
        </div>
      </div>
      <SocialContact />
    </div>
  )
};

export default About;