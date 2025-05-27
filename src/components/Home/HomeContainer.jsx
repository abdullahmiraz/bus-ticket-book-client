import React from "react";
import Hero from "./Hero/Hero";
import Search from "./Hero/Search";
import Category from "./Category/Category";
import Offer from "../Pages/Offer";

const HomeContainer = () => {
  return (
    <div>
      {/* Hero Section and other home related content */}
      <Hero />

      <Search />

      {/* <Category/> */}

      <Offer />
    </div>
  );
};

export default HomeContainer;
