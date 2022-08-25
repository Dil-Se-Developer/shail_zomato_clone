import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import LoginForm from "./components/Pages/LoginForm";
import SignUpForm from "./components/Pages/SignUpForm";
import Dashboard from "./components/Pages/Dashboard";
import CollectionDetails from "./components/UI/CollectionDetails";
import RestaurantDetails from "./components/UI/RestaurantDetails";
import FoodOrderForm from "./components/Pages/FoodOrderForm";
import OrderConfirmation from "./components/Pages/OrderConfirmation";
import "./App.css";

function App() {
  const [loginFormIsShown, setLoginFormIsShown] = useState(false);
  const [signUpFormIsShown, setSignUpFormIsShown] = useState(false);
  const [foodOrderFormIsShown, setfoodOrderFormIsShown] = useState(false);

  const showLoginFormHandler = () => {
    setLoginFormIsShown(true);
  };

  const hideLoginFormHandler = () => {
    setLoginFormIsShown(false);
  };

  const showSignUpFormHandler = () => {
    setSignUpFormIsShown(true);
  };

  const hideSignUpFormHandler = () => {
    setSignUpFormIsShown(false);
  };

  const showFoodOrderFormHandler = () => {
    setfoodOrderFormIsShown(true);
  };

  const hideFoodOrderFormHandler = () => {
    setfoodOrderFormIsShown(false);
  };

  return (
    <>
      {loginFormIsShown && (
        <LoginForm
          onClose={hideLoginFormHandler}
          onOpenSignUp={showSignUpFormHandler}
        />
      )}
      {signUpFormIsShown && (
        <SignUpForm
          onClose={hideSignUpFormHandler}
          onOpenLogin={showLoginFormHandler}
        />
      )}
      {foodOrderFormIsShown && (
        <FoodOrderForm
          onOpenOrderForm={showFoodOrderFormHandler}
          onClose={hideFoodOrderFormHandler}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenLogin={showLoginFormHandler}
              onOpenSignUp={showSignUpFormHandler}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/collectiondetail/:restaurantId"
          element={<CollectionDetails />}
        />
        <Route
          path="/collectiondetail/:restaurantId/restaurantdetail/:resproductId"
          element={
            <RestaurantDetails
              onOpenOrderForm={showFoodOrderFormHandler}
              onHideOrderForm={hideFoodOrderFormHandler}
            />
          }
        />
        <Route path="/confirmorder" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
