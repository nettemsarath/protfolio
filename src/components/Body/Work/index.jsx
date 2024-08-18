import React from 'react';

import Seperator from '../../Common/Seperator';
import WorkCard from "./work-card";
import {CompaniesData} from "../../../data/work";

import "./work.css";

function Work() {
  return (
    <div className='work' >
      <Seperator />
      <label className='section-title' >
        Work
      </label>
      <div className='work-container' >
        {
          CompaniesData.map( company => <WorkCard key={company.id} company={company} /> )
        }
      </div>
      <div>

      </div>
    </div>
  )
};

export default Work;