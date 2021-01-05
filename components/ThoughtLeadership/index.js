import React from "react";
import NavBar from "../Layout/Header/NavBar/index";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");
export default function ThoughtLeadership() {
  return (
    <div className="main">
      <NavBar color={"white"} logosrc={imgSrc} />
      <div className="orangeDiv">
        <p className="orangeDiv-p1">Thought Leadership</p>
        <p className="orangeDiv-p2">
          Some line for this Area to make it awesome
        </p>
      </div>

      <div className="whitecard">
        <div className="whitecard-1">
          <div>
            <img src="/images/thoughtLeadershipBox.jpg"></img>
          </div>
          <div>
            <p className="whitecard-1-p1">
              Maintaining ‘Management Employee’ Relations
            </p>
            <p className="whitecard-1-p2">
              Ever wondered why some unexpected attritions take place in an
              organization? Money can be one reason where an employee tends to
              bend towards
            </p>
            <p className="whitecard-1-p3">Priyanka Choudhary</p>
          </div>
        </div>

        <div className="whitecard-2">
          <div>
            <img src="/images/thoughtLeadershipBox.jpg"></img>
          </div>
          <div>
            <p className="whitecard-2-p1">
              Maintaining ‘Management Employee’ Relations
            </p>
            <p className="whitecard-2-p2">
              Ever wondered why some unexpected attritions take place in an
              organization? Money can be one reason where an employee tends to
              bend towards
            </p>
            <p className="whitecard-2-p3">Priyanka Choudhary</p>
          </div>
        </div>

        <div className="whitecard-3">
          <div>
            <img src="/images/thoughtLeadershipBox.jpg"></img>
          </div>
        </div>

        <div className="whitecard-4">
          <div>
            <img src="/images/thoughtLeadershipBox.jpg"></img>
          </div>
          <div>
            <p className="whitecard-4-p1">Maintaining Management</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
           {
            .main {
              background-image: url(images/thoughtleadershipbanner.jpg);
              background-repeat: no-repeat;
              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }

            .orangeDiv {
              height: 266px;
              margin: 193px 0 0;
              padding: 0.5px 155px 0 156px;
              background-color: #ff6139;
              position: relative;
              top: 39%;
            }

            .orangeDiv-p1 {
              margin: 41.5px 307px 0 0;
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

            .orangeDiv-p2 {
              width: 359px;
              height: 145px;
              margin: 13px 111px 55px 0;
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

            .whitecard {
              display: grid;
              grid-template-rows: 60% 50%;
              grid-template-columns: 47% 50%;
              grid-row-gap: 5%;
              width: 37%;
              position: relative;
              bottom: 26%;
              left: 57%;
            }

            .whitecard-1 {
              width: 303px;
              height: 390px;
              margin: 41px 28px 0 0;
              padding: 15px 14px 22px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-1-p1 {
              width: 248px;
              height: 67px;
              margin: 20px 13px 0 14px;
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.61;
              letter-spacing: normal;
              text-align: left;
              color: #202940;
            }

            .whitecard-1-p2 {
              width: 240px;
              height: 91px;
              margin: 2px 21px 13px 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .whitecard-1-p3 {
              width: 124px;
              height: 18px;
              margin: 13px 137px 0 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }

            .whitecard-2 {
              width: 303px;
              height: 390px;
              margin: 0 0 41px 28px;
              padding: 15px 14px 22px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-2-p1 {
              width: 248px;
              height: 67px;
              margin: 20px 13px 0 14px;
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.61;
              letter-spacing: normal;
              text-align: left;
              color: #202940;
            }

            .whitecard-2-p2 {
              width: 240px;
              height: 91px;
              margin: 0px 21px 13px 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .whitecard-2-p3 {
              width: 124px;
              height: 18px;
              margin: 13px 137px 0 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }

            .whitecard-3 {
              width: 303px;
              height: 172px;
              margin: 41px 28px 0 0px;
              padding: 15px 14px 0;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-4 {
              width: 303px;
              height: 213px;
              margin: 0.5px 0 0 28px;
              padding: 15px 0 0 14px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-4-p1{
              width: 248px;
    height: 34px;
    margin: 20px 13px 0 14px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: normal;
    text-align: left;
    color: #202940;
}
            }
          }
        `}
      </style>
    </div>
  );
}
