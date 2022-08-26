import React from "react";
import logo from "../../assets/logo_2.avif";
import "./NavModal.css";

const NavModal = (props) => {
  const { onClose, onClickLogin, onClickSignUp } = props;
  return (
    <nav className="nav_modal">
      <div className="login_txt_section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#1C1C1C"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          aria-labelledby="icon-svg-title- icon-svg-desc-"
          role="img"
          onClick={onClose}
        >
          <title>cross</title>
          <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
        </svg>
        <img src={logo} alt="zomato logo" />
      </div>
      <ul className="navmodal_menu_section">
        <li>Investor Relations</li>
        <li>Add restaurant</li>
        <li onClick={onClickLogin}>Log in</li>
        <li onClick={onClickSignUp}>Sign up</li>
      </ul>
    </nav>
  );
};

export default NavModal;
