import React from "react";
import Profile from "./component/profile/Profile";
import Fullname from "./component/profile/Fullname";
import Adress from "./component/profile/Adress";
import "./App.css";

function App() {
  return (
    <h2>
      <Fullname />
      <Adress />
      <Profile />
      
      
      </h2>
  );
}

export default App;
