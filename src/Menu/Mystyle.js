import styled from 'styled-components';
import media from "styled-media-query";

export const Myprofile = styled.section`      
    width: 100%;
    padding: 80px 0 80px;
    margin: auto;
    text-align: center;
    color: black;    
    background: ${props => props.mode === 'development' ?  `url('/images/mainImage.jpg') no-repeat 50% 0 fixed;` : `url('https://raw.githubusercontent.com/ksw7581/kswWebsite/master/images/mainImage.jpg') no-repeat 50% 0 fixed;`};
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
        background: ${props => props.mode === 'development' ?  `url('../images/aboutimage2.jpg') no-repeat 50% fixed;` : `url('https://raw.githubusercontent.com/ksw7581/kswWebsite/master/images/aboutimage2.jpg') no-repeat 50% 0 fixed;`};          
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
    padding : 20px;
    display : inline-block;
    width : calc(100% - 40px);
    background-color : #ecf0f1;
    ${this} > div {
        margin : 5px 10px;
        height : 270px;
        cursor : pointer;
        display : inline-block;
        width : calc(25% - 20px);
        transition: all .3s ease 0s;
        box-sizing : border-box;
        &:hover {
           filter : blur(5px);
        }
        
         ${this} > div:nth-child(1) {
            height : 250px;
            ${media.lessThan("medium")`
                height : 100%;
            `}
         }
        
        ${this} > div:nth-child(1) > img {
           margin : 3px;
           width : calc(100% - 6px);
           height : calc(100% - 6px);
           border-radius : 5px;
          
        }
        
        ${this} > div:nth-child(2) > div {
           font-size : 24px;
           font-weight : 600;
           overflow: hidden;
           color : #27ae60;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
        
        ${media.between("medium", "large")`
            margin : 5px 10px;
            width : calc(50% - 40px);
    `   }
        
        ${media.lessThan("medium")`
            margin : 1em 2em;
            width : calc(100% - 4em);
            height : 100%;
        `}
    }
    
`;

export const BlockWrapper = styled.div`
    height : 200px;
`;

export const Block = styled.div`
    height : 40px;
    outline : 1px solid black;
`;
