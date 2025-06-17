import styled from '@emotion/styled';

export const HeaderComponent = styled.header<{
    isScrolled: boolean,
}>`
  position: fixed;
  top: 0;
  height: 80px;
  background: ${props => props.isScrolled ? '#FFFFFF' : '#161617'};
  opacity: 0.7;
  z-index: 2;
  width: 100%;
  max-width: 1440px;

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
          font-weight: 700;
          font-size: 28px;
          line-height: 20px;
          align-items: center;
          text-align: center;
          color: ${props => props.isScrolled ? '#161617' : '#FFFFFF'};
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
    slideIndex: number,
}>`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${this} > div:nth-of-type(1) {
    position: absolute;
    width: max-content;
    display: flex;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;

    ${this} > div {
      width: 100%;
      min-width: 1440px;
      max-width: 1440px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      ${this} > img {
        max-width: 100%;
        width: 100%;
      }
    }
  }

  ${this} > div:nth-of-type(2) {
    position: absolute;
    bottom: 40px;
    left: 40px;

    ${this} > div:nth-of-type(1) {
      margin-right: 10px;
    }

    ${this} > div {
      box-sizing: border-box;
      text-align: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      color: white;
      text-align: left;
    }

  }

  ${this} > div:nth-of-type(3) {
    position: absolute;
    right: 20px;
    bottom: 20px;

    ${this} > div {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      margin: 5px 0;
      cursor: pointer;
      background-color: #CECECE;
    }

    ${this} > div:nth-of-type(${props => props.slideIndex + 1}) {
      background-color: #FFFFFF;
    }
  }


  @media (max-width: 768px) {
    height: 470px;
    background: no-repeat 50% 0%;
    background-size: 100% 100%;
    ${this} > div:nth-of-type(1) {

    }

    ${this} > div:nth-of-type(2) {
      bottom: 20px;
      left: 20px;
      width: 60%;

      ${this} > div {
        font-size: 14px;
      }
    }

    ${this} > div:nth-of-type(3) {
      bottom: 20px;
      right: 20px;

      ${this} > div {
        width: 12px;
        height: 12px;
        border-radius: 12px;
      }
    }

  }
`
const sectionTitle = `
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 20px;
    color: #FFFFFF;
    border-bottom : 5px solid white;
    width : fit-content;
    height : 40px;
    margin-bottom : 20px;
`

const sectionTitleMobile = `
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 12px;
  color: #FFFFFF;
  border-bottom : 2px solid white;
  width : fit-content;
  height : 20px;
  margin-bottom : 10px;
`;

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
          width: 40px;
          margin-right: 20px;
        }

        ${this} > div:nth-of-type(2) {

        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    ${this} > div:nth-of-type(1) {
      ${sectionTitleMobile}
    }

    ${this} > div:nth-of-type(2) {
      width: 100%;

      ${this} > div {
   
        ${this} > div:nth-of-type(1) {
          font-size: 16px;
        }

        ${this} > div:not(:nth-of-type(1)) {
          display: flex;
          margin-bottom: 5px;
          font-size: 12px;

          ${this} > div:nth-of-type(1) {
            width: 40px;
            margin-right: 20px;
          }

          ${this} > div:nth-of-type(2) {

          }
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
      display: inline-block;

      ${this} > div {
        display: inline-block;
        background: white;
        margin-right: 20px;
        vertical-align: text-top;
        width: calc(33% - 13.333px);
        padding: 20px;
        margin-bottom: 20px;
        box-sizing: border-box;
        border-radius: 20px;
        cursor: pointer;

        ${this} > div:nth-of-type(1) {
          margin-bottom: 10px;
          ${this} > img {
            max-width: 120px;
          }
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

  @media (max-width: 768px) {
    padding: 30px 20px;
    ${this} > div:nth-of-type(1) {
      ${sectionTitleMobile}
    }

    ${this} > div:nth-of-type(2) {
      width: 100%;

      ${this} > div:nth-of-type(1) {
        display: block;

        ${this} > div {
          width: 100%;
          margin-right : 0;
          margin-bottom : 20px;
        }
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
        cursor: pointer;

        ${this} > img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    ${this} > div:nth-of-type(1) {
      ${sectionTitleMobile}
    }

    ${this} > div:nth-of-type(2) {
      width: 100%;

      ${this} > div {
        margin-bottom: 0;

        ${this} > div {
          width : 60px;
          height : 60px;
          margin-bottom: 10px;
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
      margin-right: 10px;

      ${this} > img {
        width: 100%;
      }
    }

    ${this} > div:nth-of-type(2) {
      color: white;
      padding-top: 5px;

      ${this} > div:nth-of-type(1) {
        margin-bottom: 5px;
      }

      ${this} > div:nth-of-type(2) {
      }
    }
  }

  ${this} > div:nth-of-type(2) {
    display: flex;
    width: 600px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    ${this} > div {
      cursor: pointer;
      margin-right: 60px;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    display: flex;

    ${this} > div:nth-of-type(1) {
      width: 60%;
      position: relative;
      top: auto;
      left: auto;

      ${this} > div:nth-of-type(2) {
        ${this} > div {
          font-size: 12px;
        }
      }
    }

    ${this} > div:nth-of-type(2) {
      width: 40%;
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;

      ${this} > div {
        width: 36px;
        height: 36px;
        cursor: pointer;
        margin-right: 20px;

        ${this} > svg {
          width: 36px;
          height: 36px;
        }
      }

      ${this} > div:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
