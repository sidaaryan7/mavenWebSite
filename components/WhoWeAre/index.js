import React from "react";
import NavBar from "../Layout/Header/NavBar";
import Image from "next/image";
import Link from "next/link";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");
export default function WhoWeAre({ doSomething }) {
  return (
    <>
      <div className="row">
        <div className="col header">
          <NavBar color={"white"} logosrc={imgSrc} />
        </div>
        <div className="row text-section">
          <div className="col-8">
            <div className="textbox-1">
              <p className="textbox-1-p1">WHO WE ARE</p>
              <p className="textbox-1-p2">
                Making an indelible mark in the human recruitment industry
              </p>
              <p className="textbox-1-p3">
                Maven Workforce has been advising clients globally on matters
                involving Talent Acquisition and Staffing.
              </p>
              <p className="textbox-1-p4">Industry Leadership</p>
            </div>

            <div className="row icon">
              <div className="col">
                <Image
                  src="/images/Group19070.svg"
                  layout="fixed"
                  height={57}
                  width={60}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group19068.svg"
                  layout="fixed"
                  height={56}
                  width={56}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group19067.svg"
                  layout="fixed"
                  height={41}
                  width={65}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group19069.svg"
                  layout="fixed"
                  height={64}
                  width={60}
                ></Image>
              </div>
            </div>

            <div className="row icon-text">
              <div className="col">
                <p className="icon-text-common">20</p>
                <p className="icon-text-common1">Year in Business</p>
              </div>
              <div className="col">
                <p className="icon-text-common">3,000+</p>
                <p className="icon-text-common1">Employees globally</p>
              </div>
              <div className="col">
                <p className="icon-text-common">50+</p>
                <p className="icon-text-common1">Fortune 500 clients</p>
              </div>
              <div className="col">
                <p className="icon-text-common">$XX+</p>
                <p className="icon-text-common1">Million Revenue</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="whitediv">
              <div className="row whitediv-box1">
                <div className="col">
                  <p>Find Your Career</p>
                </div>
                <div className="col">
                  <input type="image" src="/images/whiteArrowRight.svg" />
                </div>
              </div>
              <div className="row whitediv-box2">
                <div className="col">
                  <p>Find Your Career</p>
                </div>
                <div className="col">
                  <input type="image" src="/images/blackArrowRight.svg" />
                </div>
              </div>
              <div className="row whitediv-box3">
                <div className="col">
                  <p>Find Your Career</p>
                </div>
                <div className="col">
                  <input type="image" src="/images/blackArrowRight.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="chatbox"
          style={{
            width: "78px",
            height: "78px",
            margin: "360px 20px 21px 24.5px",
            padding: "11px",
            position: "absolute",
            top: "493px",
            left: "1759px",
          }}
        >
          <input type="image" src="/images/chatbot.svg" />
        </div>
        <Link href="/oursolutionsHome">
          <div className="scroll">
            <p>SCROLL</p>
            <input type="image" src="/images/scrolling.svg"></input>
          </div>
        </Link>
        <style jsx>
          {`
            p {
              color: white;
            }
            .header {
              background-image: url("/images/aboutbannerblur.png");

              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .whitediv {
              position: relative;
              top: 19%;
              width: 303px;
              height: 588px;
              margin: 84px 0 0;
              padding: 47px 41px 163px 43px;
              background-color: #ffffff;
            }
            .icon-text-common {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: center;
            }
            .icon-text-common1 {
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
            .text-section {
              margin-top: -43%;
            }
            .textbox-1 {
              padding-left: 21%;
            }
            .textbox-1-p1 {
              font-family: Roboto;
              font-size: 15px;
            }

            .textbox-1-p2 {
              width: 604px;
              height: 105px;
              marg padding: 35px 28.7px 34px 31px;in: 13px 254px 23px 36px;
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.37;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }

            .textbox-1-p3 {
              width: 482px;
              height: 74px;
              margin: 23px 373px 24px 0px;
              font-family: Roboto;
              font-size: 16px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
            .textbox-1-p4 {
              width: 167px;
              height: 11px;
              margin: 24px 0 34.5px 0px;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              color: #ffffff;
            }

            .icon {
              padding-left: 20%;
              margin: 57px 58.7px 10px 21px;
            }
            .icon-text{
              padding-left: 13%;
              margin: 57px 58.7px 10px 21px;
            }
            

            .whitediv-box1 {
              height: 116px;
              width: 220px;
              background: #ff6139;
              margin: 0 0 15px;
              padding-top: 16%;
              padding-left: 15%;
            }
            .whitediv-box2 {
              height: 116px;
              width: 220px;
              background: #d0daf4;
              margin:  15px 0;
              padding-top: 16%;
              padding-left: 15%;
            }

            .whitediv-box3 {
              height: 116px;
              width: 220px;
              background: #f4f4f4;
              margin: 15px 0 0;
              padding-top: 16%;
              padding-left: 15%
              
            }
            .scroll{
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              left: 0%;
            }

            .scroll p{
              display: inline;
              width: 54px;
              height: 15px;
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #ffffff;
}
            }

            .scroll input{
              margin-left: 0.5%;
            }
            
          `}
        </style>
      </div>
    </>
  );
}