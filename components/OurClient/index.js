import React from "react";
import Image from "next/image";

export default function OurClient() {
  return (
    <div className="container">
      <div className="row  top-buffer">
        <div className="col-3 justify-content-center  ">
          <img
            className="tata"
            src="/images/TATA.jpg"
            height={64}
            width={137}
          ></img>
        </div>
        <div className="col-3  justify-content-center">
          <img
            className="capg"
            src="/images/cap_gemini.jpg"
            height={30}
            width={129}
          ></img>
        </div>
        <div className="col-3  justify-content-center">
          <img
            className="deloite"
            src="/images/deloite.jpg"
            height={70}
            width={171}
          ></img>
        </div>
        <div className="col-3  justify-content-center">
          <img
            className="pwc"
            src="/images/pwc.jpg"
            height={90}
            width={68}
          ></img>
        </div>
      </div>
      <div className="row top-buffer ">
        <div className="col-3  justify-content-center">
          <img
            className="pblcsapinet"
            src="/images/public_sapient.jpg"
            height={50}
            width={100}
          ></img>
        </div>
        <div className="col-3 justify-content-center">
          <img
            className="bristle"
            src="/images/bristle.jpg"
            height={15}
            width={131}
          ></img>
        </div>
        <div className="col-3 justify-content-center">
          <img
            className="ibm"
            src="/images/ibm.jpg"
            height={48}
            width={110}
          ></img>
        </div>
        <div className="col-3">
          <img
            className="macquire"
            src="/images/macquire.jpg"
            height={30}
            width={144}
          ></img>
        </div>
      </div>
      <div className="row top-buffer ">
        <div className="col-3 justify-content-center">
          <img
            className="bytdance"
            src="/images/Bytedance.jpg"
            height={61}
            width={154}
          ></img>
        </div>
        <div className="col-3 justify-content-center">
          <img
            className="stanza"
            src="/images/stanza.jpg"
            height={68}
            width={151}
          ></img>
        </div>
        <div className="col-3 justify-content-center">
          <img
            className="proptiger"
            src="/images/proptiger+250.jpg"
            height={110}
            width={110}
          ></img>
        </div>
        <div className="col-3 justify-content-center">
          <img
            className="rambol"
            src="/images/rambol.jpg"
            height={26}
            width={125}
          ></img>
        </div>
      </div>
      <style jsx>
        {`
          .top-buffer {
            margin-top: 50px;
            margin-bottom: 50px;
          }
          p {
            width: 88px;
            height: 23px;
            margin: 78.5px 124.5px 94px 86.5px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.19;
            letter-spacing: normal;
            text-align: center;
            color: #202940;
          }

          .pblcsapinet {
            margin-left: 6%;
          }

          .capg {
            margin-left: 30%;
          }

          .bristle {
            margin-left: 30%;
          }

          .stanza {
            margin-left: 30%;
          }

          .deloite {
            margin-left: 30%;
            margin-top: -8%;
          }

          .ibm {
            margin-left: 42%;
          }
          .proptiger {
            margin-left: 41%;
          }

          .macquire {
            margin-left: 30%;
          }

          .rambol {
            margin-left: 30%;
            margin-bottom: -22%;
          }

          .pwc {
            margin-left: 45%;
            margin-top: -20%;
          }
        `}
      </style>
    </div>
  );
}