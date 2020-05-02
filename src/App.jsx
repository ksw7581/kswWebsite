import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {GithubIcon,
    FacebookIcon,
    YoutubeIcon,
    InstaIcon,
    Footer,
    Boxwrapper,
    Box,
    Li,
    Ul,
    Header,
    Container} from './AppStyle';
import {About} from './Menu/About';
import {Blog} from './Menu/Blog';

const manufacture = (data) => {
    const posts = [];
    const cutRawData = data.split('"hide full-text">').splice(1);
    cutRawData.map(docs => {
        posts.push(docs.split('</span>')[0]);
    })
    return posts;
}

const App = () => {
    const [MenuState, setMenuState] = useState('main');
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            axios({
                method : 'GET',
                url : 'https://www.rocketpunch.com/@b00b23e820f041a1/posts',
            }).then( res => {
                setPosts(manufacture(res.data))
            }).catch( response => { console.log(response); });
        },
        []
    );

    const Container = (props) => {
        if(props.state === 'main') {
            return(<><Boxwrapper>
                <Box Github><GithubIcon /></Box>
                <Box facebook><FacebookIcon /></Box>
            </Boxwrapper>
            <Boxwrapper>
                <Box Youtube><YoutubeIcon /></Box>
                <Box Instagram><InstaIcon /></Box>
            </Boxwrapper></>);
        } else if(props.state === 'about') {
            return(<About />);
        } else if(props.state === 'blog') {
            return(<Blog posts={posts}/>);
        }
    }

    return (<>
        <Header>
            <svg style ={{cursor : 'pointer',}}onClick = {e => {setMenuState('main');}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="150" height="72" viewBox="0 0 300.000000 144.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M0 720 l0 -720 1500 0 1500 0 0 720 0 720 -1500 0 -1500 0 0 -720z m1097 426 c105 -28 166 -81 199 -173 24 -68 21 -73 -44 -73 l-58 0 -11 43 c-15 56 -48 85 -119 104 -105 27 -217 1 -254 -59 -49 -80 -12 -140 107 -176 39 -12 76 -22 82 -22 20 0 176 -48 208 -65 79 -40 123 -112 123 -200 0 -106 -70 -199 -181 -240 -107 -39 -288 -21 -374 38 -70 48 -120 131 -126 207 l-4 45 53 3 c36 2 53 -1 56 -10 22 -78 34 -101 65 -131 49 -46 107 -67 190 -67 150 0 241 89 198 193 -20 47 -63 68 -216 107 -183 47 -229 70 -282 143 -25 34 -29 49 -29 104 0 95 43 164 127 207 72 36 199 46 290 22z m340 -106 c34 -141 91 -392 115 -502 12 -54 24 -98 27 -98 4 0 12 25 20 57 13 57 43 167 88 323 14 47 39 137 57 200 l31 115 78 3 c59 2 77 0 77 -11 0 -11 59 -227 124 -452 8 -27 22 -86 31 -130 9 -44 19 -87 22 -95 6 -17 3 -27 104 388 l74 302 57 0 c32 0 58 -3 58 -8 0 -4 -16 -66 -36 -137 -20 -72 -40 -143 -44 -160 -29 -107 -53 -198 -88 -325 -22 -80 -45 -164 -52 -187 l-11 -43 -59 0 c-57 0 -60 1 -66 28 -3 15 -12 47 -19 72 -7 25 -23 83 -35 130 -12 47 -28 105 -35 130 -8 25 -30 106 -50 180 -20 74 -42 151 -48 170 l-10 35 -9 -35 c-13 -53 -75 -276 -172 -620 l-24 -85 -60 -3 c-51 -2 -61 0 -66 15 -14 48 -58 212 -90 333 -41 160 -76 290 -110 418 l-25 93 62 -3 62 -3 22 -95z"/>
                </g>
            </svg>
            <nav>
                <Ul>
                    <Li onClick = {e => {setMenuState('about');}}>About Me</Li>
                    <Li onClick = {e => {setMenuState('blog');}}>Blog</Li>
                </Ul>
            </nav>
        </Header>
        <Container state = {MenuState}/>
        <Footer>Copyright © 2020 Kim Sang Won. All right reserved.</Footer>
    </>);
}

export default App;