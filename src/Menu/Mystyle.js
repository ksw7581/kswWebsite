import styled from 'styled-components';

export const Myprofile = styled.div`
    margin : 20px auto 50px auto;
    ${this} > div {
        text-align: center;
    }
}`;

export const Mainprofile = styled.div`
    width : 100%;
    display : flex;
    ${this} > div {
        width : 50%;
        margin : 20px;
    }
    ${this} > div > p {
        font-size : 18px;
        font-weight : bold;
    }
    
    ${this} > div > div > div {
        margin : 10px 0 10px 0;
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