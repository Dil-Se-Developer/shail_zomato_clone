import React from "react";
import logo from "../../assets/zomato_logo";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subheader_section">
      <img className="subheader_logo" src={logo} alt="zomato_logo"></img>
      <h2 className="subheader_txt">
        Discover the best food & drinks in Vadodara
      </h2>
      <div className="subheader_search_section">
        <div className="subheader_dropdown_section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF7E8B"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iRDDBk"
          >
            <title>location-fill</title>
            <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
          </svg>
          <select name="cityname" id="cityname">
            <option value="Alkapuri">Alkapuri</option>
            <option value="Karelibaug">Karelibaug</option>
            <option value="Vasna">Vasna</option>
            <option value="Chani">Chani</option>
          </select>
        </div>
        <span className="subheder_vertical">|</span>
        <div className="subheder_input_section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#828282"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iwHbVQ"
          >
            <title>Search</title>
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
          </svg>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
