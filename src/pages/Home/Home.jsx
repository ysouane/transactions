import React from "react";
import "./Home.css";
import banniere from "../../assets/banniere-homepage.svg";

const Home = () => {
  return (
    <div className="home">
      <img src={banniere} alt="banniere" />
    </div>
  );
};

export default Home;
