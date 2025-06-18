import React from "react";
import Header from "./header";
import Main from "./main";
import Career from "./career";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Footer from "./footer";
import { Route, Routes } from "react-router";
import Blog from "./blog";

const App = () => {
  return <Routes>
    <Route path={"/"} element={<>
      <Header />
      <Main />
      <Career />
      <Portfolio />
      <Skills />
      <Footer />
    </>} />
    <Route path={"/blog"} element={<Blog />} />
    <Route path={"/kswWebsite"} element={<>
      <div>React Router Dom 테스트</div>
    </>} />
  </Routes>;
};

export default App;
