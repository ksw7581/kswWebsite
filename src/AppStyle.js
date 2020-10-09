import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {Menu} from '@styled-icons/entypo/Menu';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';

export const Header = styled.div`
    display : flex;
    padding : 10px 20px;
    width : calc(100% - 40px);
    background-color : #82bb00;
`

export const Ul = styled.ul`   
    display: flex;
    list-style-type: none;
    margin : 10px 0 10px 0;
    transition: all .3s ease 0s;
    ${this} > a {
        text-decoration : none;
        color : black;
    } 
    ${media.lessThan('medium')`
        left : 0;
        top : 85px;
        z-index : 10;
        width : 100vw;
        position : absolute;
        line-height : 40px;
        display : inline-block;
        opacity : ${props => props.menuon ? '0' : '1'};
    `}
`;


export const Li = styled.li`
    color : white;
    cursor : pointer;
    font-size: x-large;
    padding : 10px 20px 10px 20px;
    border-radius : 5px;
    transition: all .3s ease 0s;
    box-sizing : border-box;
    &:hover {
        background-color : white;
        color : #82bb00;
    }
    ${media.lessThan('medium')`
        margin : 5px 0;
        background-color : #2ecc71;
    `}
`;

export const Logo = styled.div`
    ${media.lessThan('medium')`
        margin : auto;
    `}
`;


export const Menuicon = styled(Menu)`
  ${media.lessThan('medium')`
    top : 20px;
    right : 20px;
    width : 40px;
    height : 40px;
    position : absolute;
    cursor : pointer;
    color : white;
  `}
  width : 0px;
  height : 0px;
  cursor : pointer;
`


export const Container = styled.div`
    margin: auto;   
    background-size: cover;
    background: url('/images/mainImage.jpg') no-repeat 50% 0 fixed;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width : 100vw;
        padding : 4em 0;
    `}
    ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
        width : 100%;
    `}
    ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
        width : 100%;
    `}
    
    
`;

export const Boxwrapper = styled.div`
    margin : auto;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width : 100vw;
        display : block;
    `}
    ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
        width : 100vw;
        display : flex;
    `}
    ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
        width : 1080px;
        display : flex;
    `}   
`

export const Box = styled.div`
    text-align : center;
    border-radius: 60px;
    background: ${props => props.Instagram ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)' : 'none'};
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
    position : relative;
    ${this} > a > svg {
        transition: all .3s ease 0s;
        opacity: 1;
    }
    
    ${this} > a > div {
        transition: all .3s ease 0s;
        opacity: 0;
        position : absolute;
        height : 40px;
        bottom : 160px;
        margin : 0 auto;
        width : 100%;
        color : white;
        font-size : 36px;
        line-height : 36px;
        font-weight: 600;
    }   
       
    background-color: ${props => {
    if (props.Github) {
        return '#211F1F';
    } else if (props.LinkedinIcon) {
        return '#0072b1';
    } else if (props.Youtube) {
        return '#FF0000';
    } else if (props.Instagram) {
        return '#d6249f';
    }
}};
    ${media.lessThan("medium")`
        width : 60%;       
        margin : 4em auto;    
        height : 60%;    
       
         ${this} > a > div {
            bottom: 0;            
            height: calc(50% + 1.2rem);
            font-size : 2.4em;
            line-height : 1em;
        }   
    `}
    
    ${media.between("medium", "large")`
        width : 50%;
        margin : 30px 60px 30px 60px;
        height : 360px;
    `}
    ${media.greaterThan("large")`
        width : 360px;
        margin : 30px auto;
        height : 360px;
        line-height : 360px;
    `}
    
    &:hover {
       ${this} > a > svg {
            opacity: 0;
       }
       
       ${this} > a > div {
            opacity: 1;
       }
    }      
`;

export const GithubIcon = styled(Github)`
    color: white;
    width: 100%;
    height: 100%;
`

export const LinkedinIcon = styled(LinkedinSquare)`
    color: white;
    width: 100%;
    height: 100%;
`;

export const YoutubeIcon = styled(Youtube)`
    color: white;
    width: 100%;
    height: 100%;
`

export const InstaIcon = styled(Instagram)`
    color: white;
    width: 100%;
    height: 100%;
`;


export const Footer = styled.footer`
    padding : 20px;
    color : white;        
    background-color : #82bb00;
    ${this} > div {
        margin : 20px 0;
    }
`

