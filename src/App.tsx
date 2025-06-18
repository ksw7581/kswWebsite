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
  // return <Routes>
  //   <Route path={"/"} element={<>
  //
  //   </>} />
  //   <Route path={"/blog"} element={<Blog />} />
  // </Routes>;
  return <>
    <Header />
    <Main />
    <Career />
    <Portfolio />
    <Skills />
    <Footer />
  </>
};

export default App;
