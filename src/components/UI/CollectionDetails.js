import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CollectionHeader from "./CollectionHeader";
import RestaurantCard from "./RestaurantCard";
import ExploreNear from "./ExploreNear";
import Footer from "./Footer";
import "./CollectionDetails.css";

const CollectionDetails = () => {
  const { restaurantId } = useParams();
  const [restaurantsdata, setrestaurantsdata] = useState({});
  //   const collectionsData = useSelector(
  //     (state) => state.collectionsData.collectionsData
  //   );

  useEffect(() => {
    axios
      .get(`http://localhost:5000/collections/${restaurantId}`)
      .then((res) => setrestaurantsdata(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

//   console.log(restaurantsdata);

  return (
    <>
      <CollectionHeader restaurantsdata={restaurantsdata} />
      <RestaurantCard restaurantsdata={restaurantsdata} />
      <ExploreNear />
      <Footer />
    </>
  );
};

export default CollectionDetails;
