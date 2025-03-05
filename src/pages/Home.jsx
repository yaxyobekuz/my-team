import React from "react";

// Components
import Cta from "../components/Cta";
import Hero from "../components/IndexHero";
import MainTop from "../components/IndexMainTopSection";
import MainBottom from "../components/IndexMainBottomSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MainTop />
      <MainBottom />
      <Cta />
    </>
  );
};

export default Home;
