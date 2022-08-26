import React from "react";
import orderimg1 from "../../assets/order_online.avif";
import orderimg2 from "../../assets/dining.avif";
import "./OrderOnline.css";

const OrderOnline = () => {
  return (
    <div className="orderonline_section">
      <div className="orderonline_card">
        <img src={orderimg1} alt="OrderOnline" />
        <div className="orderonline_card_text">
          <h3>Order Online</h3>
          <p>Stay home and order to your doorstep</p>
        </div>
      </div>
      <div className="orderonline_card">
        <img src={orderimg2} alt="Dinning" />
        <div className="orderonline_card_text">
          <h3>Dinning</h3>
          <p>View the city's favourite dinning</p>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
