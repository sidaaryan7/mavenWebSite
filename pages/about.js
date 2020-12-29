import React, { useState } from "react";
import NavBar from "../components/Layout/Header/NavBar/NavBar";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import Footer from "../components/Layout/Footer/Footer";
import OurClient from "../components/OurClient/OurClient";
import LocationMap from "../components/LocationMap/LocationMap";
import AboutBlueComponent from "../components/AboutBlueComponent/AboutBlueComponent";
import Image from "next/image";

export default function about() {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className="">
      <div className="row about-header">
        <div className="col">
          <NavBar />
        </div>
        <div className="textbox-1">
          <p className="p1">about us</p>
          <p className="p2">Everything You will know</p>
        </div>
        <div className="textbox-2">
          <p className="">
            With cutting-edge proprietary systems and an unrivalled ability to
            address the talent, we offer expertise that is sure to align your
            organizational values and vision. Our unique approach to our
            professional, executive, and recruitment process allows us to
            address your important apprehensions and deliver proven results in a
            rapidly shifting landscape of human capital sector. Our large
            structured and process driven database along with our delivery-based
            model ensures sourcing the ideal talent for diversified industries
            at the right time and at the right cost. Hence, making it a great
            value for the investment.
          </p>
          <button>scroll down</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex d-flex justify-content-center">
            <button
              onClick={() => {
                setActive("FirstCard");
              }}
            >
              About Maven
            </button>
            <button
              onClick={() => {
                setActive("SecondCard");
              }}
            >
              Our value system
            </button>
            <button
              onClick={() => {
                setActive("ThirdCard");
              }}
            >
              industry focus
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {active === "FirstCard" && (
            <AboutBlueComponent title={"1st card"} content={"1st card"} />
          )}
          {active === "SecondCard" && (
            <AboutBlueComponent title={"2nd card"} content={"2nd card"} />
          )}
          {active === "ThirdCard" && (
            <AboutBlueComponent title={"3rd card"} content={"3rd card"} />
          )}
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
              background: url("/images/aboutusbanner.png");
              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .textbox-1 {
              color: #ffffff;
              margin-left: 4%;
            }
            .p1 {
              opacity: 0.75;
              font-family: Roboto;
              font-size: 15px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              color: #ffffff;
            }
            .p2 {
              width: 68%;

              padding: 0 648px 260px 5px;
              font-family: Poppins;
              font-size: 104px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
            .textbox-2 {
              background-color: #ff6139;
              color: #ffffff;
              font-family: Roboto-Regular;
              font-size: 15px;
              text-align: left;
              line-height: 27px;
              width: 51%;
              position: relative;
              top: -63px;
            }
            .textbox-2 p {
              padding-left: 10%;
              padding-top: 5%;
              padding-bottom: 5%;
              padding-right: 5%;
            }
          }
        `}
      </style>
    </div>
  );
}
