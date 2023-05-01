import React from 'react';
import {Footer} from "@styles/style";
import {GithubIcon, LinkedInIcon, RocketPunchIcon} from "@styles/svgs";

const footer = () => {
    return <Footer>
        <div>
            <div>
                <img src={'https://yt3.googleusercontent.com/ytc/AGIKgqMxDVi0Qw4sNfz9te4eDBBRXnugZzzlefHIZoE2-A=s176-c-k-c0x00ffffff-no-rj'} alt={'logo'}/>
            </div>
            <div>
                <div>2023 All Rights Reserved. James Kim</div>
                <div>Email : ksw75811@gmail.com</div>
            </div>
        </div>
        <div>
            <div onClick={() => {window.open('https://github.com/ksw7581', 'blank')}}><GithubIcon/></div>
            <div onClick={() => {window.open('https://www.linkedin.com/in/james-kim-41b4671b3/', 'blank')}}><LinkedInIcon/></div>
            <div onClick={() => {window.open('https://www.rocketpunch.com/@b00b23e820f041a1', 'blank')}}><RocketPunchIcon/></div>
        </div>
    </Footer>
}


export default footer;
