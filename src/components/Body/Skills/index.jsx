import React from 'react'
import Seperator from "../../Common/Seperator";
import {SkillsData} from "../../../data/skills";

import "./skills.css";

function Skills() {
    return (
        <div className='skills' >
        <Seperator /> 
        <label className='skills-title' >Skills</label>

            <SkillCard skills={SkillsData.FrameWorks} />
            <SkillCard skills={SkillsData.AWS_Services} />
            <SkillCard skills={SkillsData.Others} isOtherSkill={true} />
        </div>
    )
};

const SkillCard = ({skills, isOtherSkill}) => {
    return (
    <div className='skill' >
        { isOtherSkill && <span>Others:</span>  } { skills }
    </div>
    )
};

export default Skills;