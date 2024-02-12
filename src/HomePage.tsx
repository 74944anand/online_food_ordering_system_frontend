import React from "react";
import Hero from "./Hero";
import HeadlineCard from "./HeadlineCard";
import Food from "./Food";
import Category from "./Category";

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <HeadlineCard />
        <Food />
        <Category />
      </div>
    </>
  );
};

export default HomePage;
