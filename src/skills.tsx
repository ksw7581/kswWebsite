import React from 'react';
import {SkillsSection} from "@styles/style";
import {MySkills} from "./const";

const Skills = () => {
    return <SkillsSection>
        <div>Skills</div>
        <div>{
            Object.entries(MySkills).map(([key, value], index) => {
                return <div key={index}>
                    {
                        Object.entries(value).map(([key2, value2], index2) => {
                            return <div key={index2} onClick={() => {window.open(value2.url, 'blank')}}>
                                <img src={`/src/images/skills/${key2}.png`} alt={key2}/>
                            </div>
                        })
                    }
                </div>
            })
        }</div>
    </SkillsSection>
}

export default Skills;
