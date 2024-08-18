import React from 'react'

import Seperator from "../../Common/Seperator";
import {acheivements_data} from "../../../data/acheivements";

import "./Acheivements.css";

const Acheivement_Card = ({acheivement})=>{
  const {title, tags_list, url} = acheivement;
  return (
    <li>
      {/* <div>  {title} </div> */}
      <div
      dangerouslySetInnerHTML={{ __html: title }}
      style={{ padding: '20px', fontSize: '18px' }}
    />
      <span> {url} </span>
      { tags_list && tags_list.length > 0 ? 
        <ul> { tags_list.map( tag => <li> {tag} </li> ) } </ul> : null 
      }
    </li>
  )
};

function Acheivements() {
  return (
    <div className='acheivements' >
        <Seperator />

        <div className='acheivements_title' >Awards</div>
        <ol className='acheivements_list' >
          {
            acheivements_data.map(acheivement => <Acheivement_Card acheivement={acheivement} /> )
          }
        </ol>

    </div>
  )
};

export default Acheivements;