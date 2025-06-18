import React from "react";
import Header from "./header";
import Main from "./main";
import Career from "./career";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Footer from "./footer";
import { Route, Routes } from "react-router";
import Blog from "./blog";

export const defaultUrlPrefix: "/kswWebsite" = "/kswWebsite";

const App = () => {
  return <Routes>
    <Route path={"/"} element={<></>} />
    {/*<Route path={defaultUrlPrefix + '/blog'} element={<Blog />} />*/}
    <Route path={defaultUrlPrefix} element={<>
      <Header />
      <Main />
      <Career />
      <Portfolio />
      <Skills />
      <Footer />
    </>} />
  </Routes>;
};

export default App;
