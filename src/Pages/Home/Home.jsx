import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import waveimg from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="relative">
      <Hero></Hero>

      <div className="absolute w-full bottom-0">
        <img src={waveimg} alt=""  className="w-full"/>
      </div>
    </div>
  );
};

export default Home;
