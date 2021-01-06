import Link from "next/link";
import React from "react";
import NavBar from "../components/Layout/Header/NavBar/index.js";
import OurClient from "../components/OurClient";
import Image from "next/image";

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
      <div className="last-row">
        <Link href="/locationHome">
          <div className="scroll">
            <p style={{ display: "inline" }}> scroll</p>
            <img src="/images/scrolling.svg"></img>
          </div>
        </Link>

        <div className="chatbot">
          <Image
            src="/images/chatbot.svg"
            Layout="fixed"
            height={78}
            width={78}
          ></Image>
        </div>
      </div>
      <style jsx>
        {`
           {
            .main {
              display: grid;
              grid-template-rows: 50% 70% 10%;
              grid-template-columns: 100%;
            }

            .last-row {
              display: grid;
              grid-template-rows: 100%;
              grid-template-columns: 50% 50%;
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

            .scroll {
              height: 78px;
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              right: 1759px;
            }
            .scroll p {
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #000000;
            }
            .scroll img {
            }
          }
        `}
      </style>
    </div>
  );
}
