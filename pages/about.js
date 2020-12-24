import React from "react";
import NavBar from "../components/Layout/Header/NavBar/NavBar";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import Footer from "../components/Layout/Footer/Footer";
import OurClient from "../components/OurClient/OurClient";
import LocationMap from "../components/LocationMap/LocationMap";

export default function about() {
  return (
    <div className="about-header">
      <div className="row">
        <div className="col">
          <h1>header</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>ABOUT</h1>
          <h1>value system</h1>
          <h1>industry</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <OurClient />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <LocationMap />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Copywritefooter />
        </div>
      </div>
      <style jsx>
        {`
           {
            .about-header {
              background-url: ;
            }
          }
        `}
      </style>
    </div>
  );
}
