import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import OurClient from "../components/OurClient";
import LocationMap from "../components/LocationMap";
import AboutBlueComponent from "../components/AboutBlueComponent";
import NavBar from "../components/Layout/Header/NavBar";
import Media from "react-media";
import LocationHome from "../components/LocationHome/index";

import AboutusMobileCard from "../components/AboutusMobileCard/index";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function about() {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className="">
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
                <div className="mainHeader">
                  <div className="mnavbar">
                    <NavBar logosrc={imgSrc} />
                  </div>
                  {/*CARD ROWS START HERE */}
                  <div className="cards row">
                    <div className=" col">
                      <div className="row">
                        <div className="col">
                          <div className=" firstCard">
                            <div>
                              <p className="firstCard-p">About Maven</p>
                              <button
                                className="dropbtn1"
                                onClick={() => {
                                  setActive("FirstCard");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                            </div>
                            <div className="cardcommon">
                              {active === "FirstCard" && (
                                <AboutusMobileCard color={"#ffffff"} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*second card starts */}

                      <div className="row">
                        <div className="col">
                          <div className="secondCard">
                            <div>
                              ￼￼<p className="secondCard-p">Our Value System</p>
                              <button
                                className="dropbtn2"
                                onClick={() => {
                                  setActive("SecondCard");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                            </div>
                            <div>
                              {active === "SecondCard" && (
                                <AboutusMobileCard color={"#000000"} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*second card ends */}

                      {/* THIRD CARD STARTS HERE */}

                      <div className="row">
                        <div className="col">
                          <div className="thirdCard">
                            <div>
                              <p className="thirdCard-p">Industry Focus</p>
                              <button
                                className="dropbtn3"
                                onClick={() => {
                                  setActive("ThirdCard");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                            </div>
                            <div>
                              {active === "ThirdCard" && (
                                <AboutusMobileCard color={"#000000"} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* THIRD CARD ENDS HERE */}
                    </div>
                  </div>
                  {/*CARD ROWS ENDS HERE */}
                </div>

                <div className="mOurclient">
                  <p>our clients</p>
                  <OurClient />
                </div>

                <div className="mLocation">
                  <LocationHome />
                </div>
                <div className="mFooter">
                  <Footer />
                </div>
                <style jsx>
                  {`
                     {
                      .mainHeader {
                        width: 100%;

                        background-image: radial-gradient(
                            rgba(255, 255, 255, -0.15),
                            rgba(0, 0, 0, 0.9)
                          ),
                          url("images/aboutusbanner.png");
                        background-repeat: no-repeat;

                        background-size: 100%;

                        object-fit: cover;
                        height:247px;
                      }
                     
                      .mnavbar {
                        padding-top: 5%;
                      }
                      .firstCard-p {
                        font-size: 26px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.73;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffffff;
                        display:inline-block;
}
                      }

                      .secondCard-p{
                        
                        height: 29px;
                        
                        font-family: Poppins;
                        font-size: 21px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.14;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
                        display:inline-block;
                      }

                      .thirdCard-p{
                      
                        height: 29px;
                        
                        font-family: Poppins;
                        font-size: 21px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.14;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
                        display:inline-block;
                      }
                      .cards {
                        margin-top: 25%;
                        margin-left: 9%;
                        margin-right: 9%;
                      }
                      .firstCard {
                        width: 100%;
                        margin: 8px auto 15px;
                        padding: 22px 21.5px 24px 23px;
                        background-color: #ff6139;
                        overflow: hidden;
                        min-height: 75px;
                      }
                      .dropbtn1 {
                        margin-left: 50%;
                        border: none;
                        background: #ff6139;
                      }

                      .dropbtn2 {
                        margin-left: 31%;
                        border: none;
                        background: #d0daf4;
                      }

                      .dropbtn3 {
                        margin-left: 50%;
                        border: none;
                        background: #f4f4f4;
                      }

                      .secondCard {
                        width: 100%;

                        margin: 8px auto 15px;
                        padding: 22px 21.5px 24px 23px;
                        background-color: #d0daf4;
                        overflow: hidden;
                        min-height: 75px;
                      }
                      .thirdCard {
                        width: 100%;
                        min-height: 75px;
                        overflow: hidden;
                        margin: 15px auto 20px;
                        padding: 23px 21.5px 23px 23px;
                        background-color: #f4f4f4;
                      }

                      .mOurclient {
                        background: #f2f3f5;
                        padding-top: 5%;
                        margin-top:87%;
                      }

                      .mOurclient p {
                        margin-left: 40%;

                        margin-bottom: 10%;
                      }
                      .mLocation {
                        background: #ffffff;
                      }
                      .mFooter {
                        background: #f2f3f5;
                      }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <div className="row about-header">
                  <div className="col">
                    <NavBar color={"white"} logosrc={imgSrc} />
                  </div>
                  <div className="textbox-1">
                    <p className="p1">about us</p>
                    <p className="p2">Everything You will know</p>
                  </div>
                  <div className="textbox-2">
                    <p className="">
                      With cutting-edge proprietary systems and an unrivalled
                      ability to address the talent, we offer expertise that is
                      sure to align your organizational values and vision. Our
                      unique approach to our professional, executive, and
                      recruitment process allows us to address your important
                      apprehensions and deliver proven results in a rapidly
                      shifting landscape of human capital sector. Our large
                      structured and process driven database along with our
                      delivery-based model ensures sourcing the ideal talent for
                      diversified industries at the right time and at the right
                      cost. Hence, making it a great value for the investment.
                    </p>
                    <button className="headerButton">scroll down</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex d-flex justify-content-center blue-section">
                      <button
                        className="blue-button"
                        onClick={() => {
                          setActive("FirstCard");
                        }}
                      >
                        About Maven
                      </button>
                      <button
                        className="blue-button"
                        onClick={() => {
                          setActive("SecondCard");
                        }}
                      >
                        Our value system
                      </button>
                      <button
                        className="blue-button"
                        onClick={() => {
                          setActive("ThirdCard");
                        }}
                      >
                        industry focus
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row blue-section">
                  <div className="col">
                    {active === "FirstCard" && (
                      <AboutBlueComponent
                        title={"GOOD PEOPLE & GREAT PRECISION"}
                        content={
                          "A passionate team of good people is working round the clock in Making an indelible mark in the world of Staffing and Talent Acquisition industry by providing efficient solutions.Since its inception in 2008, Maven Workforce has come across a long way and has become a global leader in Staffing and Talent Acquisition industry. From small to medium to enterprise level, Maven has been advising clients globally for Talent Search and acquisition by identifying ideal talent who aid in giving companies a competitive edge.It’s all about precision. We take pride in identifying and finding the perfect talent. Our client-centred, technological driven and holistic solutions engulf every aspect of talent acquisition process.With cutting-edge proprietary systems and an unrivalled ability to address the talent, we offer expertise that is sure to align your organizational values and vision. Our unique approach to our professional, executive, and recruitment process allows us to address your important apprehensions and deliver proven results in a rapidly shifting landscape of human capital sector.Our large structured and process driven database along with our delivery-based model ensures sourcing the ideal talent for diversified industries at the right time and at the right cost. Hence, making it a great value for the investment."
                        }
                      />
                    )}
                    {active === "SecondCard" && (
                      <AboutBlueComponent
                        title={"2nd card"}
                        content={"2nd card"}
                      />
                    )}
                    {active === "ThirdCard" && (
                      <AboutBlueComponent
                        title={"3rd card"}
                        content={"3rd card"}
                      />
                    )}
                  </div>
                </div>
                x;{" "}
                <div className="row">
                  <div className="col">
                    <div>
                      <p className="ourclient-text">our client</p>
                    </div>
                  </div>
                </div>
                <div className="row ourclient">
                  <div className="col">
                    <OurClient />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <LocationMap />
                  </div>
                </div>
                <div className="row">
                  <div className="col footer">
                    <Footer />
                  </div>
                </div>
                <div className="row">
                  <div className="col"></div>
                </div>
                <style jsx>
                  {`
           {
            .about-header {
               {
                /*}
              background-image:
    linear-gradient(to left, rgba(0, 0, 0, 0.52), rgba(255, 255, 255, 0.73)),
    url('images/MaskGroup.png');{*/
              }
              background-image: radial-gradient(
                  rgba(255, 255, 255, -0.15),
                  rgba(0, 0, 0, 0.9)
                ),
                url("images/aboutusbanner.png");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }

            .textbox-1{
              padding-left: 10%;
              padding-left: 10%;
    margin-bottom: -93px;
}
            }
            .textbox-1 p{
              color: #ffffff;
              margin-left: 4%;
            }
            .p1 {
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
            .p2 {
              width: 75%;

              padding: 0 573px 260px 5px;
              font-family: Poppins;
              font-size: 104px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              padding-bottom:0;
            }
            .textbox-2 {
              background-color: #ff6139;
              color: #ffffff;
              font-family: Roboto-Regular;
              font-size: 15px;
              text-align: left;
              line-height: 27px;
              width: 51%;
              position: relative;
              top: -63px;
              margin-bottom: -62px;
            }
            .textbox-2 p {
              padding-left: 27%;
              padding-top: 5%;
              padding-bottom: 5%;
              padding-right: 5%;
            }
            .blue-section {
              background-color: #202940;
              padding-top: 5%;
            }
            .blue-button {
              width: 351px;
              height: 116px;
              margin: 0 52px 85px 0;
              padding: 41.2px 36.5px 41.2px 31px;
              border: solid 1px #ff6139;
              background-color: rgba(255, 97, 57, 0.08);
              color:white;
            }
            .headerButton{
              margin-left: 26%;
              background: #ff6139;
              color: white;
              border: none;
              text-transform: capitalize;
}
            }

            .ourclient{
              padding-bottom: 4%;
            }
            .ourclient-text{
              padding-left: 17%;
              padding-top: 5%;
              padding-bottom: 3%;ont-family: Poppins;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.19;
              letter-spacing: normal;
              color: #202940;
            }
            .footer{
              position:relative;
            }
          }
        `}
                </style>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
}
