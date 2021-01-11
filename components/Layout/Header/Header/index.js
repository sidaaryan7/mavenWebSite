import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar/index";

import HomePageText from "../../../HomePageText/index";

{
  /* PROPS FOR NAVNBAR LOGO IMAGE*/
}
const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function Header() {
  {
    /*  state for keeping track of white section and chatbot */
  }

  useEffect(() => {});

  return (
    <>
      {/* row start */}
      <div className="row">
        {/* Navbar section  */}
        <div className="col-12 header">
          <NavBar color={"white"} logosrc={imgSrc} />

          {/*  orange & white text section  */}

          <div className="text-banner-section">
            <HomePageText />
          </div>
        </div>
      </div>

      {/* row end */}
      <style jsx>
        {`
           {
            .header {
              background-image: radial-gradient(
                  rgba(255, 255, 255, -0.15),
                  rgba(0, 0, 0, 0.9)
                ),
                url("images/MaskGroup.png");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }

            .text-banner-section {
              width: 80%;
              margin-top: 24.5%;
            }
            p {
              color: white;
              font-family: Roboto;
            }

            .textbox-2 {
              width: 303px;
              height: 266px;
              margin: 123px 0 0;
              padding: 87px 32px 0 52px;
              object-fit: contain;
              background-color: #ffffff;
            }
            .textbox-1-p1 {
              height: 11px;
              margin: 41.5px 317px 13px 0;
              opacity: 0.75;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              color: #ffffff;
              margin-bottom: 10%;
            }
            .textbox-1-p2 {
              width: 267px;
              height: 145px;
              margin: 13px 203px 54.5px 0;
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
            .textbox-1-p3 {
              width: 473px;

              margin: 123px -146px 0;
              padding: 0.5px 85px 0.5px 156px;
              object-fit: contain;
            }
            .textbox-1-p4 {
              margin-left: 44%;
              margin-top: 12%;
              position: relative;
              /* left: -41%; */
              right: 41%;
            }
            .textbox-2-p1 {
              color: #ff6139;
              height: 42px;
              width: 70px;
              position: relative;
              left: 43%;
              top: 19%;
              font-family: "POPPINS";
            }
            .whitearrow {
              position: relative;
              left: 52%;
              bottom: 12%;
            }
            .bg-col-1 {
              background: #ff6139;
            }
            .bg-col-2 {
              background: #ffffff;
            }
            .blackarrow {
              position: relative;
              top: 23%;
              left: 48%;
            }
            .chatbot {
              width: 78px;
              height: 78px;
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              left: 1759px;
            }
            .react-chatbot-kit-chat-container {
    
              width: 379px;
          }


{/* RESPONSIVE CSS */}

@media screen 
  and (min-width: 1560px) 
  and (max-width: 1812px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:30%;
    }

}

@media screen 
  and (min-width: 1529px) 
  and (max-width: 1560px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:31%;
    }

}

@media screen 
  and (min-width: 1497px) 
  and (max-width: 1529px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:31.5%;
    }

}

@media screen 
  and (min-width:1455px ) 
  and (max-width: 1497px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:32.5%;
    }

}

@media screen 
  and (min-width: 1421px) 
  and (max-width: 1455px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:33.5%;
    }

}

@media screen 
  and (min-width: 1398px) 
  and (max-width: 1421px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:34.5%;
    }

}

@media screen 
  and (min-width: 1371px) 
  and (max-width: 1398px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .text-banner-section{
      margin-top:27.5%;
    }

}


        `}
      </style>
    </>
  );
}
