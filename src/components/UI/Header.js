import React from "react";
import Navbar from "./Navbar";
import SubHeader from "./SubHeader";
import "./Header.css";

const Header = (props) => {
  const { onShowLoginForm, onShowSignForm } = props;

  return (
    <header className="header_section">
      <Navbar onClickLogin={onShowLoginForm} onClickSignUp={onShowSignForm} />
      <SubHeader />
    </header>
  );
};

export default Header;
