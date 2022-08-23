import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ placeData }) => {
  const { placesname, noofplaces } = placeData;
  return (
    <div className="place_card_section">
      <h4>{placesname}</h4>
      <p>{noofplaces} places</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#1C1C1C"
        width="15"
        height="15"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
      >
        <title>chevron-right</title>
        <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
      </svg>
    </div>
  );
};

export default PlaceCard;
