import React, {useState} from 'react'
import "./header.css";

import Web from "./web";
import Mobile from "./mobile";

import appsIcon from "../../images/apps.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header' >
      <div className="logo"> Sarath Nettem </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={ () => setIsOpen(!isOpen) } >
            <img src={appsIcon} alt="" className="mobile-menu_icon" />
          </div>
          { isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} /> }
        </div>
      </div>
    </div>
  )
};

export default Header;