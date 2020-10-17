import styled from 'styled-components';
import media from "styled-media-query";

export const Myprofile = styled.section`      
    width: 100%;
    padding: 80px 0 80px;
    margin: auto;
    text-align: center;
    color: #fff;
    background: url('../images/mainimage.jpg') no-repeat 50% 0% fixed;
    background-size: 100vw;
    
    ${this} > div:nth-child(1) {        
        font-size : 24px;
        font-weight : bold;
        margin : auto;
    } 
        
    ${media.lessThan("medium")`
        width: 100vw;
        padding: 4em 0 4em;
        background-position: 50% 0%;
        background: url('../images/mainimage.jpg')
        background-attachment: scroll;    
    `}
   
}`;

export const Mainprofile = styled.section`
    width : 100%;           
    background-size: cover;
    background-attachment: scroll;
    
    ${this} > div:nth-child(1) {          
        background: url('../images/aboutimage2.jpg') no-repeat 50% fixed;
        background-size: cover !important;
        padding: 60px 100px; 60px;
        color : white;
    }
     
    ${this} > div {
        width : 50%;       
        margin : 20px auto;
    }
    ${this} > div > p {
        font-size : 18px;
        font-weight : bold;
        margin : 4px;
    }
    
    ${this} > div > div > div {
        margin : 10px 2px 10px 2px;
    }
`;

export const BlogWrapper = styled.div`
    margin : 20px;
`;

export const BlockWrapper = styled.div`
    height : 200px;
`;

export const Block = styled.div`
    height : 40px;
    outline : 1px solid black;
`;
