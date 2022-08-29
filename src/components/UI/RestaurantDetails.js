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
  const [searchString, setSearchString] = useState("");
  const [sortValue, setSortValue] = useState("none");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/collections/${restaurantId}`)
      .then((res) => setrestaurantsdata(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(restaurantsdata);

  const handleSearchChange = (searchProduct) => {
    setSearchString(searchProduct);

    // console.log(searchString);
  };

  const searchProducts = (products) => {
    if (searchString === "") {
      return products;
    } else {
      return products.filter((product) =>
        product.fooditemname.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  };

  const handleSortingChange = (event) => {
    let { value } = event.target;
    setSortValue(value);
  };

  const sortData = (sortType, products) => {
    let sortedArray = [];
    if (sortType === "none") {
      sortedArray = products?.sort((prod1, prod2) => {
        return prod1.id - prod2.id;
      });
    } else if (sortType === "lowtohigh") {
      sortedArray = products?.sort((prod1, prod2) => {
        return prod1.price - prod2.price;
      });
    } else if (sortType === "hightolow") {
      sortedArray = products?.sort((prod1, prod2) => {
        return prod2.price - prod1.price;
      });
    }
    return sortedArray; 
  };

  let filterRestaurantsData = sortData(sortValue, restaurantsdata.fooditem)
  filterRestaurantsData = searchProducts(filterRestaurantsData);
  // console.log(filterRestaurantsData);

  return (
    <>
      <RestauranHeader
        restaurantsdata={restaurantsdata}
        handleSearch={handleSearchChange}
        searchString={searchString}
        handleSortingSelect={handleSortingChange}
      />
      <FoodItemCard
        restaurantsdata={filterRestaurantsData}
        onOpenOrderForm={onOpenOrderForm}
      />
      <Footer />
    </>
  );
};

export default RestaurantDetails;
