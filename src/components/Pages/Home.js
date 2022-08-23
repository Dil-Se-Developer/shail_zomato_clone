import React from "react";
import Header from "../UI/Header";
import OrderOnline from "../UI/OrderOnline";
import Collections from "../UI/Collections";
import Places from "../UI/Places";
import GetApp from "../UI/GetApp";
import ExploreNear from "../UI/ExploreNear";
import Footer from "../UI/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header/>
      <OrderOnline/>
      <Collections/>
      <Places/>
      <GetApp/>
      <ExploreNear/>
      <Footer/>
    </>
  );
};

export default Home;
