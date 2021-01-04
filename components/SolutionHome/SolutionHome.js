import React from "react";
import NavBar from "../Layout/Header/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function SolutionHome({ doSomething }) {
  return (
    <>
      <div className="row">
        <div className="col header">
          <NavBar />
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
              <div className="col">
                <Image
                  src="/images/Group20370.svg"
                  Layout="fix"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group20374.svg"
                  Layout="fix"
                  width={45}
                  height={47}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group20372.svg
                "
                  Layout="fix"
                  width={53}
                  height={37}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group20373.svg"
                  Layout="fix"
                  width={51}
                  height={48}
                ></Image>
              </div>
              <div className="col">
                <Image
                  src="/images/Group20375.svg"
                  Layout="fix"
                  width={53}
                  height={48}
                ></Image>
              </div>
            </div>

            <div className="row header-icontext">
              <div className="col">
                <p className="header-icon-common">PROFESSIONAL SEARCH</p>
              </div>
              <div className="col">
                <p className="header-icon-common">EXECUTIVE SEARCH</p>
              </div>
              <div className="col">
                <p className="header-icon-common">IT STAFF AUGMENTATION</p>
              </div>
              <div className="col">
                <p className="header-icon-common">
                  RECRUITMENT PROCESS OUTSOURCINg
                </p>
              </div>
              <div className="col">
                <p className="header-icon-common">Flexi Staffing</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="header-side-img">
              <Image
                src="/images/AboutSol.jpg
                "
                layout="fixed"
                width={557}
                height={557}
              ></Image>
            </div>
          </div>
        </div>

        <div className="chatbox">
          <input type="image" src="/images/chatbot.svg" />
        </div>

        <Link href="/footer">
          <div>
            <button onClick={doSomething}>SCROLL</button>
            <input type="image" src="/images/scrollimg.svg"></input>
          </div>
        </Link>
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
                padding-left: 15%;
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
            }
          `}
        </style>
      </div>
    </>
  );
}
