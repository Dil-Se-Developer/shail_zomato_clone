import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import LoginForm from "./components/Pages/LoginForm";
import SignUpForm from "./components/Pages/SignUpForm";
import Dashboard from './components/Pages/Dashboard';
import "./App.css";

function App() {
  const [loginFormIsShown, setLoginFormIsShown] = useState(false);
  const [signUpFormIsShown, setSignUpFormIsShown] = useState(false);

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

  return (
    <>
      {loginFormIsShown && <LoginForm onClose={hideLoginFormHandler} onOpenSignUp={showSignUpFormHandler}/>}
      {signUpFormIsShown && <SignUpForm onClose={hideSignUpFormHandler} onOpenLogin={showLoginFormHandler}/>}
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
        <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
