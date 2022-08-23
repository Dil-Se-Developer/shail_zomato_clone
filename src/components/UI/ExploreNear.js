import React from "react";
import "./ExploreNear.css";

const ExploreNear = () => {
  return (
    <div className="explore_conatainer">
      <h2>Explore options near me</h2>
      <div className="explore_cards">
        <div className="explore_card_section">
          <p>Popular cuisines near me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
          >
            <title>chevron-down</title>
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
          </svg>
        </div>
        <div className="explore_card_section">
          <p>Popular restaurant types near me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
          >
            <title>chevron-down</title>
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
          </svg>
        </div>
        <div className="explore_card_section">
          <p>Cities We Deliver To</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
          >
            <title>chevron-down</title>
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ExploreNear;
