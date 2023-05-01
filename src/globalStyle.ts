import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const reset = css`

  @font-face {
    font-family: 'SF-Pro';
    font-style: normal;
    font-weight: 100;
    src: local('SF-Pro'),
  url( /src/fonts/SF-Pro-Display-Thin.otf) format('otf');
  }

  @font-face {
    font-family: 'SF-Pro';
    font-style: normal;
    font-weight: 300;
    src: local('SF-Pro'),
    url( /src/fonts/SF-Pro-Display-Regular.otf) format('otf');
  }

  @font-face {
    font-family: 'SF-Pro';
    font-style: normal;
    font-weight: 500;
    src: local('SF-Pro'),
    url( /src/fonts/SF-Pro-Display-Medium.otf) format('otf');
  url( /fonts/NotoSansKR-Medium.woff) format('woff');
  url( /fonts/NotoSansKR-Medium.otf) format('otf');
  }

  @font-face {
    font-family: 'SF-Pro';
    font-style: normal;
    font-weight: 700;
    src: local('SF-Pro'),
    url( /src/fonts/SF-Pro-Display-Bold.otf) format('otf');
  }

  * {
    margin: 0;
    padding: 0;
    font-family: initial;
    font-style: normal;
    font-weight: bold;
  }

  body {
    margin: auto;
    font-size: 16px;
    font-weight: 400;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #FFFFFF;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  #root {
    width: 100%;
    max-width: 1440px;
    margin : auto;
  }

  span {
    font-weight: bold;
  }
`

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  min-width: 1440px;
  margin: auto;
  background-color: #fafafa;
  position: relative;
`;
