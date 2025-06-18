import React, { useState, useEffect, useCallback } from "react";
import { HeaderComponent } from "@styles/style";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.onscroll = (e) => {
      if (window.scrollY === 0 && location.pathname === "/") {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
  }, [isScrolled]);

  const moveScroll = useCallback((index: number) => {
    const document_id = ["Home", "Career", "Portfolio", "Skills"];
    const id = document.getElementById(document_id[index]);
    if (id === undefined || id === null) {
      return;
    }
    const scrollOffsetY = id.offsetTop;
    window.scrollTo(0, scrollOffsetY - 80);
  }, []);

  return <HeaderComponent isScrolled={isScrolled}>
    <div>
      <img
        src={"https://yt3.googleusercontent.com/ytc/AGIKgqMxDVi0Qw4sNfz9te4eDBBRXnugZzzlefHIZoE2-A=s176-c-k-c0x00ffffff-no-rj"}
        alt={"logo"} />
    </div>
    <div>
      <li>
        <ul onClick={() => moveScroll(0)}><a>Home</a></ul>
        <ul onClick={() => moveScroll(1)}><a>Career</a></ul>
        <ul onClick={() => moveScroll(2)}><a>Portfolio</a></ul>
        <ul onClick={() => moveScroll(3)}><a>Skills</a></ul>
        {/*<ul><Link to={"/blog"}>Blog</Link></ul>*/}
      </li>
    </div>
  </HeaderComponent>;
};

export default Header;
