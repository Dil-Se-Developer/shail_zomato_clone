import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RestauranHeader from "./RestauranHeader";
import FoodItemCard from "./FoodItemCard.js";
import Footer from "./Footer";
import "./ReataurantDetail.css";

const RestaurantDetails = (props) => {
  const { onOpenOrderForm } = props;
  const { restaurantId } = useParams();
  //   console.log(resproductId);
  const [restaurantsdata, setrestaurantsdata] = useState({});

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
      <RestauranHeader restaurantsdata={restaurantsdata} />
      <FoodItemCard restaurantsdata={restaurantsdata} onOpenOrderForm={onOpenOrderForm}/>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
