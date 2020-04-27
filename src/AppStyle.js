import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'

export const Header = styled.div`
    display : flex;
    padding : 20px;
`

export const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    margin : 10px 0 10px 0;
    
`;

export const Li = styled.li`
    cursor : pointer;
    font-size: x-large;
    font-family: sans-serif;
    padding : 10px 20px 10px 20px;
`;

export const Container = styled.div`
    width : 100vw;
    padding : 20px;
    height : 100vh;
`;

export const Boxwrapper = styled.div`
    display : flex;
`

export const Box = styled.div`
    width : 50%;
    text-align : center;
    height : 360px;
    line-height : 360px;
`;

export const GithubIcon = styled(Github)`
    color: #211F1F;
    width: 100%;
    height: 100%;
`

export const FacebookIcon = styled(Facebook)`
    color: #3b5998;
    width: 100%;
    height: 100%;
`

export const YoutubeIcon = styled(Youtube)`
    color: #FF0000;
    width: 100%;
    height: 100%;
`

export const InstaIcon = styled(Instagram)`
    color: radial-gradient(circle at center, red 0, blue 100%);
    width: 100%;
    height: 100%;
`;


export const Footer = styled.footer`
    padding : 20px;
`

