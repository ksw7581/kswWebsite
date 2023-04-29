import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const reset = css`

  //@font-face {
  //  font-family: 'Noto Sans KR';
  //  font-style: normal;
  //  font-weight: 100;
  //  src: local('Noto Sans KR'),
  //  url( /fonts/NotoSansKR-Thin.woff2) format('woff2');
  //url( /fonts/NotoSansKR-Thin.woff) format('woff');
  //url( /fonts/NotoSansKR-Thin.otf) format('otf');
  //}
  //
  //@font-face {
  //  font-family: 'Noto Sans KR';
  //  font-style: normal;
  //  font-weight: 300;
  //  src: local('Noto Sans KR'),
  //  url( /fonts/NotoSansKR-Regular.woff2) format('woff2');
  //url( /fonts/NotoSansKR-Regular.woff) format('woff');
  //url( /fonts/NotoSansKR-Regular.otf) format('otf');
  //}
  //
  //@font-face {
  //  font-family: 'Noto Sans KR';
  //  font-style: normal;
  //  font-weight: 500;
  //  src: local('Noto Sans KR'),
  //  url( /fonts/NotoSansKR-Medium.woff2) format('woff2');
  //url( /fonts/NotoSansKR-Medium.woff) format('woff');
  //url( /fonts/NotoSansKR-Medium.otf) format('otf');
  //}
  //
  //@font-face {
  //  font-family: 'Noto Sans KR';
  //  font-style: normal;
  //  font-weight: 700;
  //  src: local('Noto Sans KR'),
  //  url( /fonts/NotoSansKR-Bold.woff2) format('woff2');
  //url( /fonts/NotoSansKR-Bold.woff) format('woff');
  //url( /fonts/NotoSansKR-Bold.otf) format('otf');
  //}

  * {
    margin: 0;
    padding: 0;
    font-family: initial;
    font-style: normal;
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
