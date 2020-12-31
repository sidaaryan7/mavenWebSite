import React, { useState } from "react";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header/Header";
import SolutionHome from "../components/SolutionHome/SolutionHome";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurClient from "../components/OurClient/OurClient";
import NavBar from "../components/Layout/Header/NavBar/NavBar";

export default function Home() {
  const [active, setActive] = useState("FirstCard");
  OurClient;
  return (
    <>
      {active === "FirstCard" && (
        <Header
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
        <>
          <Footer /> <Copywritefooter />
        </>
      )}
    </>
  );
}
