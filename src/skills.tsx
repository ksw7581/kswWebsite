import React from 'react';
import {SkillsSection} from "@styles/style";
import {MySkills} from "./const";

const Skills = () => {
    return <SkillsSection id={'Skills'}>
        <div>Skills</div>
        <div>{
            Object.entries(MySkills).map(([key, value], index) => {
                return <div key={index}>
                    {
                        Object.entries(value).map(([key2, value2], index2) => {
                            return <div key={index2} onClick={() => {window.open(value2.url, 'blank')}}>
                                <img src={`https://raw.githubusercontent.com/ksw7581/kswWebsite/master/src/images/skills/${key2}.png`} alt={key2}/>
                            </div>
                        })
                    }
                </div>
            })
        }</div>
    </SkillsSection>
}

export default Skills;
