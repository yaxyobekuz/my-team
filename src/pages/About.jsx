import React from "react";

// Components
import Cta from "../components/Cta";
import Hero from "../components/AboutPageHero";
import ClientsInfo from "../components/AboutPageClientsInfo";
import DirectorsInfo from "../components/AboutPageDirectorsInfo";

const About = () => {
  return (
    <>
      <Hero />
      <DirectorsInfo />
      <ClientsInfo />
      <Cta />
    </>
  );
};

export default About;
