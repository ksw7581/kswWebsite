import React from 'react';
import {HeaderComponent} from "@styles/style";

const Header = () => {
    return <HeaderComponent>
        <div>
            <img src={'https://yt3.googleusercontent.com/ytc/AGIKgqMxDVi0Qw4sNfz9te4eDBBRXnugZzzlefHIZoE2-A=s176-c-k-c0x00ffffff-no-rj'} alt={'logo'}/>
        </div>
        <div>
            <li>
                <ul><a>Home</a></ul>
                <ul><a>Career</a></ul>
                <ul><a>Portfolio</a></ul>
                <ul><a>Skills</a></ul>
            </li>
        </div>
    </HeaderComponent>
}

export default Header;
