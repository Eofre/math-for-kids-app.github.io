import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header className="header" onClick={props.showSidebar}>
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navigation />
          {/* <Navbar sidebar={props.sidebar} showSidebar={props.showSidebar} /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
