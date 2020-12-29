import React from "react";
import NavBar from "../Layout/Header/NavBar/NavBar";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <>
      <div className="container-fluid header">
        <NavBar />
        <div className="row">
          <div className="col-8 textbox-col ">
            <div className="">
              <p className="commonstyle">WHO WE ARE</p>
              <p className="commonstyle">
                Making an indelible mark in the human recruitment industry
              </p>
              <p className="commonstyle">
                Maven Workforce has been advising clients globally on matters
                involving Talent Acquisition and Staffing.
              </p>
            </div>
            <div>
              <div>
                <p className="commonstyle">Industry Leadership</p>
              </div>
              <div className="row icon">
                <div className="col-3">
                  <Image
                    src="/images/Group19070.svg"
                    width={100}
                    height={50}
                  ></Image>
                  <p>20</p>
                  <p>Year in Business</p>
                </div>
                <div className="col-3 ">
                  <Image
                    src="/images/Group19068.svg"
                    width={100}
                    height={50}
                  ></Image>
                  <p>3,000+</p>
                  <p>Employees globally</p>
                </div>
                <div className="col-3 commonstyle1">
                  <Image
                    src="/images/Group19067.svg"
                    width={100}
                    height={50}
                  ></Image>
                  <p>50+</p>
                  <p>Fortune 500 clients</p>
                </div>
                <div className="col-3  ">
                  <Image
                    src="/images/Group19069.svg"
                    width={100}
                    height={50}
                  ></Image>
                  <p className="">$XX+</p>
                  <p>Million Revenue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <div>
                <p>find your carrer</p>
              </div>
              <div>
                <p>our value system</p>
              </div>
              <div>
                <p>industry focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
           {
            .header {
              background-image: linear-gradient(to right, black, white),
                url("/images/MaskGroup.png");

              background-size: 100%;

              height: 966px;

              object-fit: cover;
            }
            p {
              color: white;
            }
            .textbox-col {
              margin-top: 5%;
            }
            .commonstyle {
              margin-left: 17%;
            }
            .icon {
              margin-top: 10%;
              margin-left: 10%;
            }
            .col-3 {
              text-align: center;
            }
            .col-4 {
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  );
}
