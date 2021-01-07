import React from "react";
import NavBar from "../components/Layout/Header/NavBar/index";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function jobs() {
  return (
    <>
      <div className="row main">
        <div className="col">
          <NavBar color={"white"} logosrc={imgSrc} />
        </div>
        <div className="row orange-section">
          <div className="col">
            <div>
              <p>Job Openings in Maven</p>
            </div>
            <div className="row white-section">
              <div className="col">
                <iframe></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
           {
            .main {
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

            .orange-section {
              width: 90%;
              border: 1px solid black;
              background-color: #ff6139;
}

            }

            .orange-section p {
              width: 449px;
              height: 53px;
              margin: 114px 14.9px 0 0;
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
            .white-section {
              border: solid 1px #707070;
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  );
}
