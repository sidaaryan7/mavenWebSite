import React from "react";
import NavBar from "../Layout/Header/NavBar/NavBar";
import Image from "next/image";
import index from "../Layout/Header/index";

export default function WhoWeAre() {
  return (
    <>
      <div className="row">
        <div className="col header">
          <NavBar />
        </div>
        <div className="row">
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

            <div className="row">
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
          </div>
          <div className="col-4">hello</div>
        </div>
        <style jsx>
          {`
            .header {
              background-image: linear-gradient(
                to left,
                rgba(255, 255, 255, -0.15),
                rgba(0, 0, 0, 0.9)
              );

              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .whitediv {
              width: 303px;
              height: 588px;
              margin: 84px 0 0;
              padding: 47px 41px 163px 43px;
              background-color: #ffffff;
            }
          `}
        </style>
      </div>
    </>
  );
}
