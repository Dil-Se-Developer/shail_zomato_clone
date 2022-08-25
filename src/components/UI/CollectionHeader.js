import React from "react";
import logo from "../../assets/logo_2.avif";
import "./CollectionHeader.css";

const CollectionHeader = ({ restaurantsdata }) => {
//   console.log(restaurantsdata);

  const {collectionimg, name, places} = restaurantsdata;

  return (
    <header className="collection_header_container">
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
      <div className="collection_header_banner">
        <img src={collectionimg} alt="collection banner" />
        <div className="collection_header_banner_txt">
          <h3>{name}</h3>
          <p>Most Popular Restaurants in town this week</p>
          <span>{places}</span>
        </div>
      </div>
    </header>
  );
};

export default CollectionHeader;
