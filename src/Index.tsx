import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./globalStyle";
import { RecoilRoot } from "recoil";

render(<BrowserRouter>
    <Global styles={reset} />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.querySelector("#root")
);
