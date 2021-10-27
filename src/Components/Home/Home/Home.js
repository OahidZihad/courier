import React from "react";
import Navbar from "../Navbar/Navbar";
import ShopCreation from "../ShopCreation/ShopCreation";

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)", height: "100vh" }}>
      <Navbar></Navbar>
      <ShopCreation></ShopCreation>
    </div>
  );
};

export default Home;
