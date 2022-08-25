import React from "react";
import logo from "../../assets/logo_2.avif";
import Footer from "../UI/Footer";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const orderConfirmImg =
    "https://c.tenor.com/Di3lr0r5b6MAAAAi/pharmacy128-128.gif";
  return (
    <>
      <header className="restaurant_header_container">
        <nav className="collection_navbar">
          <div className="collection_navbar_logo">
            <img src={logo} alt="zomato logo" />
          </div>
          <ul className="collection_navbar_end">
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </nav>
        <hr className="collection_header_hr" />
      </header>
      <div className="order_confirmation_section">
        <img src={orderConfirmImg} alt="order_confirmaiton" />
      </div>
      <Footer/>
    </>
  );
};

export default OrderConfirmation;
