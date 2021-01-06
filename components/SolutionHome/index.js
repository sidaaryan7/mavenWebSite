import React from "react";
import NavBar from "../Layout/Header/NavBar";

import Link from "next/link";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function SolutionHome({ doSomething }) {
  return (
    <>
      <div className="row">
        <div className="col header">
          <NavBar color={"white"} logosrc={imgSrc} />
        </div>
        <div className="row header-text">
          <div className="col-8">
            <div className="textbox">
              <p className="textbox-p1">OUR SOLUTIONS</p>
              <p className="textbox-p2">
                We help your business grow multi-folds by delivering efficient
                staffing solutions.
              </p>
              <p className="textbox-p3">
                We help your business grow multi-folds by delivering efficient
                staffing solutions.
              </p>
            </div>

            <div className="row header-icon">
              <div className="col header-icon-1">
                <img src="/images/Group20370.svg" width={50} height={50}></img>
              </div>
              <div className="col header-icon-2">
                <img src="/images/Group20374.svg" width={45} height={47}></img>
              </div>
              <div className="col header-icon-3">
                <img src="/images/Group20372.svg" width={53} height={37}></img>
              </div>
              <div className="col header-icon-4">
                <img src="/images/Group20373.svg" width={51} height={48}></img>
              </div>
              <div className="col header-icon-5">
                <img src="/images/Group20375.svg" width={53} height={48}></img>
              </div>
            </div>

            <div className="row header-icontext">
              <div className="col header-icontext-1">
                <p className="header-icon-common">PROFESSIONAL SEARCH</p>
              </div>
              <div className="col header-icontext-2">
                <p className="header-icon-common">EXECUTIVE SEARCH</p>
              </div>
              <div className="col header-icontext-3">
                <p className="header-icon-common">IT STAFF AUGMENTATION</p>
              </div>
              <div className="col header-icontext-4">
                <p className="header-icon-common">
                  RECRUITMENT PROCESS OUTSOURCINg
                </p>
              </div>
              <div className="col header-icontext-5">
                <p className="header-icon-common">Flexi Staffing</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="header-side-img">
              <img src="/images/AboutSol.jpg" width={557} height={557}></img>
            </div>
          </div>
        </div>

        <Link href="/ourclients">
          <div>
            <p className="scroll">scroll</p>
            <img className="scrollicon" src="/images/scrolling.svg"></img>
          </div>
        </Link>

        <div className="chatbox">
          <input type="image" src="/images/chatbot.svg" />
        </div>

        <style jsx>
          {`
             {
              p {
                color: white;
              }
              .header {
                background: url("/images/solutionsHome.jpg");
                background-repeat: no-repeat;

                background-size: 100%;
                height: 966px;
                object-fit: cover;
              }
              .header-icon {
                padding-left: 21%;
                margin-top: 8%;
              }
              .header-icontext {
                padding-left: 22%;
              }
              .header-text {
                margin-top: -40%;
              }
              .chatbox {
                width: 78px;
                height: 78px;
                margin: 360px 20px 21px 24.5px;
                padding: 11px;
                position: absolute;
                top: 493px;
                left: 1759px;
              }
              .textbox {
                padding-left: 21%;
              }
              .textbox-p1 {
                height: 11px;
                margin: 0 442px 70px 0;
                opacity: 0.5;
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
              .textbox-p2 {
                width: 631px;
                height: 157px;
                margin: 24px 0 42px;
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
              .textbox-p3 {
                width: 554px;
                height: 19px;
                margin: -45px 0 0 3px;
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
              .header-icon-common {
                font-family: Roboto;
                font-size: 13px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                padding-top: 15%;
              }

              .header-icon-1 img {
                margin-left: 13%;
              }

              .header-icon-2 img {
                margin-left: 3%;
              }

              .header-icon-3 img {
                margin-left: 26%;
              }

              .header-icon-4 img {
                margin-left: 9%;
              }

              .header-icontext-1 p {
                width: 72px;
                height: 34px;
                margin: 11.1px 0 0;
              }

              .header-icontext-2 p {
                width: 56px;
                height: 34px;
                margin: 12px 0 0;
              }

              .header-icontext-3 p {
                width: 82px;
                height: 34px;
                margin: 12px 1px 43px 64px;
              }

              .header-icontext-4 p {
                width: 120px;
                height: 34px;
                margin: 12px 45px 43px 32px;
              }

              .header-icontext-5 p {
                width: 46px;
                height: 34px;
                margin: 12px 151.6px 43px 49px;
              }
              .scroll {
                display: inline;
                width: 54px;
                height: 15px;
                margin: 0 6.5px 0 0;
                font-family: Poppins;
                font-size: 10px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 5.4;
                letter-spacing: 3.3px;
                text-align: center;
                color: #ffffff;
                position: relative;
                bottom: 196%;
                padding: 0 0 0 3%;
              }

              .scrollicon {
                display: inline;
                position: relative;
                bottom: 195%;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
