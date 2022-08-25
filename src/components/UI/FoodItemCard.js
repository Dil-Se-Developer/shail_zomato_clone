import React from "react";
import "./FoodItemCard.css";

const FoodItemCard = ({ restaurantsdata, onOpenOrderForm }) => {
  const { fooditem } = restaurantsdata;
  // console.log(fooditem);

  return (
    <div className="restaurantcard_container">
      {fooditem?.map((foodproduct) => (
        <div key={foodproduct.id} className="foodrestaurant_card">
          <img src={foodproduct.fooditemimg} alt="restaurantimag" />
          <div className="foodrestaurant_card_txt">
            <h4>{foodproduct.fooditemname}</h4>
            <p className="foodrestaurant_card_txt_foodname">
              &#8377; {foodproduct.price}
            </p>
            <p className="foodrestaurant_card_txt_resaddress">
              {foodproduct.fooditemcontain}
            </p>
          </div>
          <div className="restaurantcard_order_btn">
            <button onClick={onOpenOrderForm}>Order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItemCard;
