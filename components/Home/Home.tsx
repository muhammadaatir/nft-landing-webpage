"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import HotBids from "./Hotbids/HotBids";
import TopCollection from "./TopCollection/TopCollection";
import Category from "./Category/Category";
import CreateSellNft from "./CreateSellNft/CreateSellNft";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <Hero />
      <HotBids />
      <TopCollection />
      <Category />
      <CreateSellNft />
    </div>
  );
};

export default Home;
