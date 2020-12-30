import React, { useState } from "react";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header/Header";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

export default function Home() {
  const [active, setActive] = useState("FirstCard");

  return (
    <>
      {active === "FirstCard" && (
        <Header
          doSomething={() => {
            setActive("SecondCard");
          }}
        />
      )}
      {active === "SecondCard" && <WhoWeAre />}

      <Footer />
      <Copywritefooter />
    </>
  );
}
