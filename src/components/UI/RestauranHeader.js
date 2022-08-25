import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo_2.avif";
import "./RestaurantHeader.css";

const RestauranHeader = ({ restaurantsdata }) => {
  const { restaurantimg } = restaurantsdata;
  const { resproductId } = useParams();
  // console.log(resproductId);
//   const restaurantimg = foodcollection[resproductId - 1].foodimg;
  

  return (
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
      <div className="collection_header_banner restaurant_header_banner">
        <img src={restaurantimg} alt="collection banner" />
        <div className="collection_header_banner_txt restaurant_header_banner_txt">
        </div>
      </div>
    </header>
  );
};

export default RestauranHeader;
