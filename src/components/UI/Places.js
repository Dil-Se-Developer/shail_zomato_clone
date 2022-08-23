import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlacesData } from "../../redux_toolkit/slices/collectionDataSlice";
import PlaceCard from "./PlaceCard";
import "./Places.css";

const Places = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlacesData());
  }, []);

  const placesData = useSelector((state) => state.collectionsData.placesData);

  //   console.log(placesData);

  return (
    <div className="places_conatainer">
      <h2>
        Popular localities in and around <span> Vadodara </span>
      </h2>
      <div className="places_cards">
        {placesData.map((placeData) => (
          <PlaceCard placeData={placeData} key={placeData.id} />
        ))}
        <div className="see_more_card">
          <h4>see more</h4>
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

export default Places;
