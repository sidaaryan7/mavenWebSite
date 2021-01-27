import React from "react";
import NavBar from "../Layout/Header/NavBar";
import Image from "next/image";
import Link from "next/link";
import Media from "react-media";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");
export default function WhoWeAre({ doSomething }) {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <div className="mainDiv">
                  {/* text box starts*/}
                  <div className="row text-box">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <p className="text-box-p1">WHO WE ARE</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="text-box-p2">
                            We help your business grow multi-folds by delivering
                            efficient staffing solutions.
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="text-box-p3">
                            We help your business grow multi-folds by delivering
                            efficient staffing solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* text box ends*/}

                  {/* icon starts */}

                  <div className="row iconrow">
                    <div className="col">
                      <div className="icon-1">
                        <img src="images/shareblack.svg"></img>
                        <p className="icon1-p1">20</p>
                        <p className="icon1-p2">Year in Business</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon-2">
                        <img src="images/globeblack.svg"></img>
                        <p className="icon2-p1">3,000+</p>
                        <p className="icon2-p2">Employees globally</p>
                      </div>
                    </div>
                  </div>

                  <div className="row iconrow">
                    <div className="col">
                      <div className="icon-3">
                        <img src="images/handsShakeBlack.svg"></img>
                        <p className="icon3-p1">50+</p>
                        <p className="icon3-p2">Fortune 500 clients</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon-4">
                        <img src="images/statsBlack.svg"></img>
                        <p className="icon4-p1">$XX+</p>
                        <p className="icon4-p2">Million Revenue</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="whitediv">
                        <div className="row whitediv-box1">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/whiteArrowRight.svg"
                            />
                          </div>
                        </div>
                        <div className="row whitediv-box2">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/blackArrowRight.svg"
                            />
                          </div>
                        </div>
                        <div className="row whitediv-box3">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/blackArrowRight.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*icons end */}
                </div>

                <style jsx>
                  {`
            
                  .mainDiv {
                    width: 100%;
                    height: 982px;
                    margin: 19px 0 0;
                    padding: 339px 15px 32px;
                    background-color: #f7f7f7;
                    margin-top: 0px;
                      }
                      .text-box{
                        padding-left:5%;
                      }

                      .text-box-p1 {
                        height: 11px;
                        margin: 0 90px 15px 0;
                        font-family: Roboto;
                        font-size: 10px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 5.4;
                        letter-spacing: 3.3px;
                        text-align: left;
                      }

                      .text-box-p2 {
                        height: 94px;
                        margin: 15px 13px 20px 0;
                        font-family: Poppins;
                        font-size: 20px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.65;
                        letter-spacing: normal;
                        text-align: left;
                      }

                      .iconrow{
                        padding-left:5%;
                        padding-right:5%;
                      }

                      .icon-1 {
                        width: 165px;
                        height: 140px;
                        margin: 22px 15px 15px 0;
                        padding: 20px 38px 13px 39px;
                        background-color: #ffffff;
                      }

                      .icon-1 img {
                        width: 47.9px;
                        height: 46px;
                        margin: 0 20.1px 10px 20px;
                        object-fit: contain;
                      }

                      .icon1-p1 {
                        width: 32px;
                        height: 36px;
                        margin: 0 28px 1px;
                        font-family: Poppins;
                        font-size: 26px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.77;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;
                        
                      }



                      .icon1-p2{
                        width: 88px;
                        height: 14px;
                        margin: 1px 0 0;
                        opacity: 0.6;
                        font-family: Roboto;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 2;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;

                      }
                      .icon-2 {
                        width: 165px;
                        height: 140px;
                        margin: 22px 0 15px 15px;
                        padding: 21px 31px 13px 32px;
                        background-color: #ffffff;
                      }

                      .icon-2 img {
                        width: 44.3px;
                        height: 44.3px;
                        margin: 0 28.7px 10.7px 29px;
                        object-fit: contain;
                      }

                      .icon2-p1 {
                        width: 90px;
                        height: 36px;
                        margin: 0 6px 1px;
                        font-family: Poppins;
                        font-size: 26px;
                        5%font-style: normal;
                        line-height: 1.77;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;
}
                        
                      }
                      .icon2-p2{
                      width: 102px;
                      height: 14px;
                      margin: 1px 0 0;
                      opacity: 0.6;
                      font-family: Roboto;
                      font-size: 12px;
                      font-weight: normal;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 2;
                      letter-spacing: normal;
                      text-align: left;
                      color: #202940;
                      }


                      .icon-3 {
                        width: 165px;
                        height: 140px;
                        margin: 15px 15px 0 0;
                        padding: 21.5px 31px 15px;
                        background-color: #ffffff;
                      }

                      .icon-3 img {
                        width: 57.3px;
                        height: 37.2px;
                        margin: 0 22.7px 15.3px 23px;
                        object-fit: contain;
                      }

                      .icon3-p1 {
                        width: 52px;
                        height: 36px;
                        margin: 0 23px 1px 28px;
                        font-family: Poppins;
                        font-size: 26px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.77;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;
}
                        
                      }

                      .icon3-p2{
                        width: 103px;
                        height: 14px;
                        margin: 1px 0 0;
                        opacity: 0.6;
                        font-family: Roboto;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 2;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;

                      }
                      .icon-4 {
                        width: 165px;
                        height: 140px;
                        margin: 15px 0 0 15px;
                        padding: 16.7px 40px 15px 41px;
                        background-color: #ffffff;
                      }

                      .icon-4 img {
                        width: 43px;
                        height: 46.4px;
                        margin: 0 21px 10.9px 20px;
                        object-fit: contain;
                      }

                      .icon4-p1 {
                        width: 66px;
                        height: 36px;
                        margin: 0 9px 1px;
                        font-family: Poppins;
                        font-size: 26px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.77;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;
}
                        
                      }

                      .icon4-p2{
                        width: 84px;
                        height: 14px;
                        margin: 1px 0 0;
                        opacity: 0.6;
                        font-family: Roboto;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 2;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;


                      }


            
            p {
              color: black;
            }
            .header {
              background-image: url("/images/aboutbannerblur.png");

              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .whitediv {
              position: relative;
              top: 30%;
              width: 303px;
              height: 344px;
              margin: -14px 0 0;
              padding: 20px 41px 0px 43px;
              background-color: #ffffff;
              z-index: -1;
            }
            .icon-text-common {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: center;
              margin: 5% 0 0 -63%;
            }
            .icon-text-common1 {
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: center;
              margin: 1% 0% 0% -68%;
              
            }
            .text-section {
              margin-top: -43%;
              position: relative;
              top: 350px;
            }
            .textbox-1 {
              position: relative;
              top: 39%;
              right: -9%;
            }
            .textbox-1-p1 {
              font-family: Roboto;
              font-size: 15px;
              height: 11px;
              margin: 0 90px 50px 0;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              color: #202940
            }

            .textbox-1-p2 {
          width: 333px;
          height: 61px;
          margin: 20px 12px 15px 0;
          
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.65;
          letter-spacing: normal;
          text-align: left;
          color: #202940;
}      
            }

            .textbox-1-p3 {
              width: 400px;
              height: 74px;
              /* margin: 23px 0px 24px 0px; */
              font-family: Roboto;
              font-size: 16px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              -webkit-letter-spacing: normal;
              -moz-letter-spacing: normal;
              -ms-letter-spacing: normal;
              letter-spacing: normal;
              text-align: left;
              
            }
            .textbox-1-p4 {
              width: 167px;
              height: 11px;
              margin: 24px 0 34.5px 0px;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              
            }

            .icon {
              position: RELATIVE;
              TOP: 40%;
              margin-left: 19%;
            }
            .icon-text{
              padding-left: 13%;
              margin: 57px 58.7px 10px 21px;
            }
            

            .whitediv-box1 {
              width: 345px;
              height: 75px;
              margin: 15px;
              padding: 23px 28.7px 23px 23px;
              background-color: #ff6139;
            }
            .whitediv-box2 {
              width: 345px;
              height: 75px;
              margin: 15px;
              padding: 22px 28.7px 24px 23px;
              background-color: #d0daf4;
            }

            .whitediv-box3 {
              width: 345px;
              height: 75px;
              margin: 15px 15px 19px;
              padding: 23px 28.7px 23px 23px;
              background-color: #f4f4f4;
              
            }
            .scroll{
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              left: 0%;
            }

            .scroll p{
              display: inline;
              width: 54px;
              height: 15px;
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #ffffff;
}
            }

            .scroll input{
              margin-left: 0.5%;
            }



            {/* responsive  */}

            @media screen and (min-width: 442px) and (max-width: 452px) { 
                .iconrow{
                  padding-left: 2%;
                }

            }


            @media screen and (min-width: 417px) and (max-width: 442px) { 
                .iconrow{
                  padding-left: 2%;
                }
                .icon-1{
                  margin: 22px -10px 15px 0;
                }

                .icon-3{
                  margin: 15px -10px 0 0;
                }

              }

              @media screen and (min-width: 407px) and (max-width: 417px) { 
                .iconrow{
                  ;
                }
                .icon-1{
                  margin:  22px -30px 15px 0;
                }

                .icon-3{
                  margin:  22px -30px 15px 0;
                  
                }

              }


              @media screen and (min-width: 380px) and (max-width: 407px) { 
                .iconrow{
                      padding-left: 0; */
                      padding-right: 0;
                  
                }
                .icon-1{
                  margin: 22px -40px 15px 0;
                  
                }

                .icon-3{
                  margin: 22px -40px 15px 0;
                  
                  
                }
               

              }
              @media screen and (min-width:280px) and (max-width:338px){
                .text-box-p2{
                  margin: 15px 13px 20% 0px;
                }

              }



              @media screen and (min-width:100px ) and (max-width: 380px) { 
                .iconrow{
                      padding-left: 0; */
                      padding-right: 0;
                  
                }
                 
                 
                 .col{
                 
                        width:50%;
                      }
              }



            
          `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <div className="row">
                  <div className="col header">
                    <NavBar color={"white"} logosrc={imgSrc} />
                  </div>
                  <div className="row text-section">
                    <div className="col-8">
                      <div className="textbox-1">
                        <p className="textbox-1-p1">WHO WE ARE</p>
                        <p className="textbox-1-p2">
                          Making an indelible mark in the human recruitment
                          industry
                        </p>
                        <p className="textbox-1-p3">
                          Maven Workforce has been advising clients globally on
                          matters involving Talent Acquisition and Staffing.
                        </p>
                        <p className="textbox-1-p4">Industry Leadership</p>
                      </div>

                      <div className="row icon">
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

                      <div className="row icon-text">
                        <div className="col">
                          <p className="icon-text-common">20</p>
                          <p className="icon-text-common1">Year in Business</p>
                        </div>
                        <div className="col">
                          <p className="icon-text-common">3,000+</p>
                          <p className="icon-text-common1">
                            Employees globally
                          </p>
                        </div>
                        <div className="col">
                          <p className="icon-text-common">50+</p>
                          <p className="icon-text-common1">
                            Fortune 500 clients
                          </p>
                        </div>
                        <div className="col">
                          <p className="icon-text-common">$XX+</p>
                          <p className="icon-text-common1">Million Revenue</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="whitediv">
                        <div className="row whitediv-box1">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/whiteArrowRight.svg"
                            />
                          </div>
                        </div>
                        <div className="row whitediv-box2">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/blackArrowRight.svg"
                            />
                          </div>
                        </div>
                        <div className="row whitediv-box3">
                          <div className="col">
                            <p>Find Your Career</p>
                          </div>
                          <div className="col">
                            <input
                              type="image"
                              src="/images/blackArrowRight.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

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
                  >
                    <input type="image" src="/images/chatbot.svg" />
                  </div>
                  <Link href="/oursolutionsHome">
                    <div className="scroll">
                      <p>SCROLL</p>
                      <input type="image" src="/images/scrolling.svg"></input>
                    </div>
                  </Link>
                  <style jsx>
                    {`
            p {
              color: white;
            }
            .header {
              background-image: url("/images/aboutbannerblur.png");

              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .whitediv {
              position: relative;
              top: 19%;
              width: 303px;
              height: 588px;
              margin: 84px 0 0;
              padding: 47px 41px 163px 43px;
              background-color: #ffffff;
            }
            .icon-text-common {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: center;
            }
            .icon-text-common1 {
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
            .text-section {
              margin-top: -43%;
            }
            .textbox-1 {
              padding-left: 21%;
            }
            .textbox-1-p1 {
              font-family: Roboto;
              font-size: 15px;
            }

            .textbox-1-p2 {
              width: 604px;
              height: 105px;
              marg padding: 35px 28.7px 34px 31px;in: 13px 254px 23px 36px;
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

            .textbox-1-p3 {
              width: 482px;
              height: 74px;
              margin: 23px 373px 24px 0px;
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
            .textbox-1-p4 {
              width: 167px;
              height: 11px;
              margin: 24px 0 34.5px 0px;
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

            .icon {
              padding-left: 20%;
              margin: 57px 58.7px 10px 21px;
            }
            .icon-text{
              padding-left: 13%;
              margin: 57px 58.7px 10px 21px;
            }
            

            .whitediv-box1 {
              height: 116px;
              width: 220px;
              background: #ff6139;
              margin: 0 0 15px;
              padding-top: 16%;
              padding-left: 15%;
            }
            .whitediv-box2 {
              height: 116px;
              width: 220px;
              background: #d0daf4;
              margin:  15px 0;
              padding-top: 16%;
              padding-left: 15%;
            }

            .whitediv-box3 {
              height: 116px;
              width: 220px;
              background: #f4f4f4;
              margin: 15px 0 0;
              padding-top: 16%;
              padding-left: 15%
              
            }
            .scroll{
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              left: 0%;
            }

            .scroll p{
              display: inline;
              width: 54px;
              height: 15px;
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #ffffff;
}
            }

            .scroll input{
              margin-left: 0.5%;
            }
            
          `}
                  </style>
                </div>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
