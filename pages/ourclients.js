import React from "react";
import NavBar from "../components/Layout/Header/NavBar/index.js";
import Image from "next/image";
import OurClient from "../components/OurClient";
const imgSrc = require("/home/maven/aaa/public/images/logoFooter.svg");
export default function ourclients() {
  return (
    <div className="main">
      <div>
        <NavBar color={"black"} logosrc={imgSrc} />
      </div>
      <div>
        <OurClient />
      </div>
    </div>
  );
}
