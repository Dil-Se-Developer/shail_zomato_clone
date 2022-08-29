import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo_2.avif";
import { AiFillFilter } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import "./RestaurantHeader.css";

const RestauranHeader = ({
  restaurantsdata,
  handleSearch,
  searchString,
  handleSortingSelect,
}) => {
  const { restaurantimg } = restaurantsdata;
  const { resproductId } = useParams();
  // console.log(resproductId);
  //   const restaurantimg = foodcollection[resproductId - 1].foodimg;

  return (
    <header className="restaurant_header_container">
      <nav className="collection_navbar restaurantheader_navbar">
        <div className="collection_navbar_logo">
          <img src={logo} alt="zomato logo" />
        </div>
        <div className="restaurant_header_search_section">
          <div className="restaurant_header_dropdown_section">
            <AiFillFilter size={"1.2rem"} color={"#EF4F5F"} />

            <select
              name="sort"
              id="sort"
              onChange={(event) => {
                handleSortingSelect(event);
              }}
            >
              <option value="none">None</option>
              <option value="lowtohigh">Price: Low to High</option>
              <option value="hightolow">Price: High to Low</option>
            </select>
          </div>
          <span className="restaurant_header_vertical">|</span>
          <div className="restaurant_header_input_section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#828282"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
            >
              <title>Search</title>
              <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
            </svg>
            <input
              type="search"
              placeholder="Search Resturant Food..."
              value={searchString}
              onChange={(event) => {
                handleSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <ul className="collection_navbar_end">
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </nav>
      <nav className="restaurantheader_ham_section">
        <FiMenu size={"1.2rem"} color={"#000"} />
      </nav>
      <hr className="collection_header_hr" />
      <div className="collection_header_banner restaurant_header_banner">
        <img src={restaurantimg} alt="collection banner" />
        <div className="collection_header_banner_txt restaurant_header_banner_txt"></div>
      </div>
    </header>
  );
};

export default RestauranHeader;
