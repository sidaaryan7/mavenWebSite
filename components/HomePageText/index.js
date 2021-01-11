import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ChatBot from "../ChatBot/index";

export default function HomePageText() {
  const [Hidden, setHidden] = useState(true);
  console.log(Hidden);
  return (
    <div>
      <div className="row">
        {/* orange section coloum 1 */}
        <div
          className=" col-6 textbox-1 "
          style={{ background: "#ff6139", paddingLeft: "15%" }}
        >
          <p className="textbox-1-p1">EXPERTS SINCE 1997</p>
          <p className="textbox-1-p2">We Deliver a Meaningful HR EXPERIENCE.</p>
        </div>
        {/*  orange section coloumn 2 */}
        <div className="col-3" style={{ background: "#ff6139" }}>
          <p className="textbox-1-p3">
            A passionate team of good people is working round the clock in
            Making an indelible mark in the world of Staffing and Talent
            Acquisition industry by providing efficient solutions.
          </p>
          <p className="textbox-1-p4">Know more</p>
          <div className="whitearrow">
            <Image
              src="/images/arrow.svg"
              layout="fixed"
              height={28}
              width={33}
            ></Image>
          </div>
        </div>
        {/* white section with scrollbutton and chatbot */}

        {Hidden == "false" ? (
          <div className="col-3" style={{ background: "#ffffff" }}>
            <ChatBot sethidden={setHidden} />
          </div>
        ) : (
          <Link href="/whoweareHome">
            <div className="col-3" style={{ background: "#ffffff" }}>
              <p className="textbox-2-p1">Scroll to discover</p>
              <div className="blackarrow">
                <input type="image" src="/images/blackarrow.svg" />
              </div>
            </div>
          </Link>
        )}
      </div>
      {/*  chatbot button  */}
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
        onClick={() => {
          setHidden("false");
          console.log(Hidden);
        }}
      >
        <Image
          src="/images/chatbot.svg"
          layout="fixed"
          height={78}
          width={78}
        ></Image>
      </div>
      <style jsx>
        {`
           {
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

            .whitearrow {
              position: relative;
              left: 52%;
              bottom: 12%;
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

            .blackarrow {
              position: relative;
              top: 23%;
              left: 48%;
            }
            p {
              color: white;
              font-family: Roboto;
            }
          }
        `}
      </style>
    </div>
  );
}
