import styled from '@emotion/styled';

export const HeaderComponent = styled.header`
  height: 80px;
  background: #161617;
  position: relative;

  ${this} > div:nth-of-type(1) {
    position: absolute;
    top: 10px;
    left: 40px;
    width: 50px;

    ${this} > img {
      width: 100%;
    }
  }

  ${this} > div:nth-of-type(2) {
    position: absolute;
    top: 28px;
    right: 40px;

    ${this} > li {
      display: flex;

      ${this} > ul {
        padding: 0 30px;
        cursor: pointer;

        ${this} > a {
          text-decoration: none;
          font-style: normal;
          font-weight: 400;
          font-size: 48px;
          line-height: 20px;
          align-items: center;
          text-align: center;
          color: #FFFFFF;
        }
      }
    }
  }

  @media (max-width: 768px) {
    ${this} > div:nth-of-type(2) {
      display: none;
    }
  }
`;


export const MainSection = styled.section<{
    img: string,
}>`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.img});

  ${this} > div {
    display: flex;

    ${this} > div:nth-child(1) {
      margin-right: 10px;
    }

    ${this} > div {
      box-sizing: border-box;
      text-align: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 56px;
      color: white;
    }

  }


  @media (max-width: 768px) {
    height: 470px;
    background: url(${props => props.img}) no-repeat 50% 0%;
    background-size: 100% 100%;
    ${this} > div {
      display: block;

      ${this} > div {
        font-size: 36px;
      }
    }

  }
`
const sectionTitle = `
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 20px;
    color: #FFFFFF;
    border-bottom : 5px solid white;
    width : fit-content;
    height : 40px;
    margin-bottom : 20px;
`

export const CareerSection = styled.section`
  padding: 60px 40px;
  box-sizing: border-box;
  background: #86868B;

  ${this} > div:nth-of-type(1) {
    ${sectionTitle}
  }

  ${this} > div:nth-of-type(2) {
    width: 960px;
    margin: 0 auto;

    ${this} > div {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0);
      background-position: 50% 0px;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-image: url("https://raw.githubusercontent.com/ksw7581/kswWebsite/master/images/aboutimage2.jpg");
      background-origin: padding-box;
      background-clip: border-box;
      background-size: cover !important;
      color: white;
      margin-bottom: 20px;

      ${this} > div:nth-of-type(1) {
        font-size: 24px;
        margin-bottom: 5px;
      }

      ${this} > div:not(:nth-of-type(1)) {
        display: flex;
        margin-bottom: 5px;
        font-size: 18px;

        ${this} > div:nth-of-type(1) {
          width : 40px;
          margin-right: 20px;
        }

        ${this} > div:nth-of-type(2) {

        }
      }
    }
  }


`;

export const PortfolioSection = styled.section`
  padding: 60px 40px;
  box-sizing: border-box;
  background: #000000;

  ${this} > div:nth-of-type(1) {
    ${sectionTitle}
  }

  ${this} > div:nth-of-type(2) {
    ${this} > div:nth-of-type(1) {
      display: flex;

      ${this} > div {
        background: white;
        margin-right: 20px;
        width: calc(33% - 13.333px);
        padding: 20px;
        box-sizing: border-box;
        border-radius: 20px;
        cursor: pointer;

        ${this} > div:nth-of-type(1) {
          margin-bottom: 10px;
        }

        ${this} > div:nth-of-type(2) {
          margin-bottom: 10px;

          ${this} > img {
            width: 100%;
          }
        }

        ${this} > div:nth-of-type(3) {
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: bold;
        }

        ${this} > div:nth-of-type(4) {
          font-size: 18px;
          font-weight: 300;
        }
      }

      ${this} > div:nth-of-type(3n - 3) {
        margin-right: 0;
      }

    }

  }
`;

export const SkillsSection = styled.section`
  padding: 60px 40px;
  box-sizing: border-box;
  background: #1D1D1F;

  ${this} > div:nth-of-type(1) {
    ${sectionTitle}
  }

  ${this} > div:nth-of-type(2) {
    ${this} > div {
      display: inline-block;
      margin-bottom: 10px;

      ${this} > div {
        width: 80px;
        height: 80px;
        vertical-align: text-top;
        background: white;
        border-radius: 20px;
        margin-right: 10px;
        padding: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor : pointer;

        ${this} > img {
          width: 100%;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 60px 40px;
  box-sizing: border-box;
  background: #161617;
  position: relative;

  ${this} > div:nth-of-type(1) {
    position: absolute;
    top: 75px;
    left: 40px;
    display: flex;

    ${this} > div:nth-of-type(1) {
      width: 50px;
      margin-right : 10px;

      ${this} > img {
        width: 100%;
      }
    }

    ${this} > div:nth-of-type(2) {
      color : white;
      padding-top : 5px;
      
      ${this} > div:nth-of-type(1) {
        margin-bottom : 5px;
      }

      ${this} > div:nth-of-type(2) {
      }
    }
  }

  ${this} > div:nth-of-type(2) {
    display: flex;
    width : 600px;
    margin : 0 auto;
    align-items : center;
    justify-content: center;
    ${this} > div {
      cursor : pointer;
      margin-right : 60px;
    }
  }
`;
