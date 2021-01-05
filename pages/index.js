import React, { useState } from "react";

import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header/Header";
import SolutionHome from "../components/SolutionHome";
import WhoWeAre from "../components/WhoWeAre";
import OurClient from "../components/OurClient";

import LocationHome from "../components/LocationHome";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
export default function Home() {
  const [active, setActive] = useState("FirstCard");
  OurClient;
  return (
    <>
      {active === "FirstCard" && (
        <Header
          id="header"
          doSomething={() => {
            setActive("SecondCard");
          }}
        />
      )}
      {active === "SecondCard" && (
        <WhoWeAre
          doSomething={() => {
            setActive("ThirdCard");
          }}
        />
      )}
      {active === "ThirdCard" && (
        <SolutionHome
          doSomething={() => {
            setActive("FourthCard");
          }}
        />
      )}
      {active === "FourthCard" && (
        <LocationHome
          doSomething={() => {
            setActive("FifthCard");
          }}
        />
      )}
      {active === "FifthCard" && (
        <>
          <Footer
            doSomething={() => {
              setActive("");
            }}
          />{" "}
          <Copywritefooter />
        </>
      )}
    </>
  );
}
