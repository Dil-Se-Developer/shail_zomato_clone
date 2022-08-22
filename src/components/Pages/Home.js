import React from "react";
import Header from "../UI/Header";
import OrderOnline from "../UI/OrderOnline";
import Collections from "../UI/Collections";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header/>
      <OrderOnline/>
      <Collections/>
    </>
  );
};

export default Home;
