import React from 'react';
import "./index.css";
import { SocialData } from "../../../data/social";

function SocialContact() {
  const data = SocialData;
  return (
    <div className='social-contact' >
      {
        data.map((item, index)=> {
          return (
            <a href={item.link} target="_blank" >
              <div className='social-icon-div' >
                <img src={item.icon} />
              </div>
            </a>
          )
        })
      }
    </div>
  )
};

export default SocialContact;