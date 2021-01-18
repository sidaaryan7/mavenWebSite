import React from "react";
import NavBar from "../components/Layout/Header/NavBar/index";
import Media from "react-media";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function jobs() {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 500px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <div className="mMain">
                  <NavBar color={"white"} logosrc={imgSrc} />

                  <div className="mTextbox">
                    <p>Job Openings in Maven</p>
                  </div>
                </div>

                <div className="mIframe">
                  <div>
                    <h1>iframe daTA</h1>
                  </div>
                </div>

                <style jsx>
                  {`
                     {
                      .mMain {
                        background-image: radial-gradient(
                            rgba(255, 255, 255, -0.15),
                            rgba(0, 0, 0, 0.9)
                          ),
                          url("images/MaskGroup.png");
                        background-repeat: no-repeat;

                        background-size: 100%;
                        height: 254px;
                        object-fit: cover;
                        padding-top: 5%;
                      }
                      .mIframe {
                        margin-top: 36%;
                      }
                    }

                    .mTextbox {
                      width: 86%;
                      height: 136px;
                      margin: 156px auto 313px;
                      padding: 22px 84px 24px 29px;
                      object-fit: contain;
                      background-color: #ff6139;
                    }
                    .mTextbox p {
                      width: 232px;
                      height: 90px;
                      font-family: Poppins;
                      font-size: 32px;
                      font-weight: 500;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 1.41;
                      letter-spacing: normal;
                      text-align: left;
                      color: #ffffff;
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
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
            )}
          </>
        )}
      </Media>
    </>
  );
}
