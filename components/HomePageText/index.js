import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import ChatBot from "../ChatBot/index";
import Media from "react-media";

export default class HomePageText extends Component {
  state = {
    Hidden: "true",
  };

  onKeyUp = () => {
    console.log(e.keyCode);
  };

  render() {
    return (
      <div>
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
                  <div className="row mainDiv">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <p className="mainDiv-p1">EXPERTS SINCE 1997</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="mainDiv-p2">
                            We Deliver a Meaningful HR EXPERIENCE.
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="mainDiv-p3">
                            A passionate team of good people is working round
                            the clock in Making an indelible mark in the world
                            of Staffing and Talent Acquisition industry by
                            providing efficient solutions.
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col p4-col">
                          <p className="mainDiv-p4">Know more</p>
                          <img src="/images/arrow.svg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style jsx>
                    {`
                       {
                        .mainDiv {
                          width: 93%;
                          height: 428px;
                          padding: 50px 26px 27px 31px;
                          object-fit: contain;
                          background-color: #ff6139;
                          /* margin-top: -5%; */
                          /* margin-left: 7%; */
                          /* margin: 25% auto; */
                          margin: -5% auto 0;
}
                        }

                        .mainDiv-p1 {
                          margin: -33.3px 135px 0 -4px;
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

                        .mainDiv-p2 {
                          width: 280px;
                          height: 138px;
                          margin: 0 49px 16px 0;

                          font-size: 34px;
                          font-weight: 500;
                          font-stretch: normal;
                          font-style: normal;
                          line-height: 1.32;
                          letter-spacing: normal;
                          text-align: left;
                          color: #ffffff;
                        }

                        .mainDiv-p3 {
                          width: 288px;
                          height: 96px;
                          margin: 16px 0 20px;
                          font-family: Roboto;
                          font-size: 13px;
                          font-weight: normal;
                          font-stretch: normal;
                          font-style: normal;
                          line-height: 1.85;
                          letter-spacing: normal;
                          text-align: left;
                          color: #ffffff;
                        }

                        .mainDiv-p4 {
                          width: 88px;
                          height: 23px;
                          margin: 0 10.7px 0 0;
                          /* font-family: Poppins; */
                          font-size: 16px;
                          font-weight: 500;
                          font-stretch: normal;
                          font-style: normal;
                          line-height: 1.19;
                          letter-spacing: normal;
                          text-align: left;
                          color: #ffffff;
                          display: inline;
                        }

                         {
                          /* responsive csss */
                        }

                        @media only screen and (min-width: 466px) and (max-width: 481px) {
                          .mainDiv {
                            width: 400px;
                          }
                        }

                        @media only screen and (min-width: 450px) and (max-width: 466px) {
                          .mainDiv {
                            width: 393px;
                          }
                        }

                        @media only screen and (min-width: 440px) and (max-width: 450px) {
                          .mainDiv {
                            width: 383px;
                          }
                        }

                        @media only screen and (min-width: 400px) and (max-width: 440px) {
                          .mainDiv {
                            min-width: 400px;
                            overflow:hidden;

                          }
                        }

                        @media only screen and (min-width: 350px) and (max-width: 400px) {
                          .mainDiv-p1 {
                            margin: -12% 0 0 1%;
                          }
                          .mainDiv-p3{
                            width: 100%;
                            margin: 16px 0 41px;

                          }
                        }

                        @media only screen and (min-width: 333px) and (max-width: 350px) {
                          .p4-col{
                            padding-top: 48%;
                          }
                          
                          .mainDiv{
                            padding: 50px 26px 27px 20px;
                          }
                          
                          .mainDiv-p1 {
                            margin: -29.3px 0px 5px 1px;
                          }
                          .mainDiv-p3{
                            width: 100%;
                            height: 0;

                          }
                          .mainDiv-p4{
                            margin-right: 35%;
}
                          }
                        }


                        @media only screen and (min-width:300px ) and (max-width: 333px) {
                          
                          
                          
                          
                          .mainDiv-p1 {
                            margin: -14% auto 0;
                          }
                          .mainDiv-p2{
                            margin: 0 0px 0px -6%;
                          }
                          .mainDiv-p3{
                            width: 100%;
                            height: 0;
                            margin: 4% 1% 32% -4%;

                          }
                          .p4-col{
                            padding-top:48%;
                          }

                          
                        @media only screen and (min-width:300px ) and (max-width: 311px) {
                          
                          .mainDiv{
                            height: 533px;
                          }
                          
                          .mainDiv-p2{
                            width:200px;
                          }

                          .mainDiv-p3{
                            margin: 38% 1% 32% -4%;
                          }

                          .p4-col{
                            padding-top: 75%;
                          }
                         
                          
                        }


                        @media only screen and (min-width:280px ) and (max-width: 300px) {
                          
                          .mainDiv{
                            height: 556px;
                          }
                          
                          
                          .mainDiv-p1{
                            margin: -48px 0 0 0;
                            font-size:11px;
                          }

                          .mainDiv-p2{
                            font-size:26px;
                            margin-bottom: -65%;
                          }

                          .mainDiv-p3{
                            padding-top: 35%;
                            font-size: 15px;
                          }
                          .p4-col{
                            padding-top: 112%;
                          }
                          
                        }

                      }
                    `}
                  </style>
                </>
              )}
              {matches.medium && <p>I am medium!</p>}
              {matches.large && (
                <>
                  <div className="row orangeSection">
                    {/* orange section coloum 1 */}
                    <div
                      className=" col-6 textbox-1 "
                      style={{ background: "#ff6139", paddingLeft: "15%" }}
                    >
                      <p className="textbox-1-p1">EXPERTS SINCE 1997</p>
                      <p className="textbox-1-p2">
                        We Deliver a Meaningful HR EXPERIENCE.
                      </p>
                    </div>
                    {/*  orange section coloumn 2 */}
                    <div
                      className="col-3 orangeSection-2"
                      style={{ background: "#ff6139" }}
                    >
                      <p className="textbox-1-p3">
                        A passionate team of good people is working round the
                        clock in Making an indelible mark in the world of
                        Staffing and Talent Acquisition industry by providing
                        efficient solutions.
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

                    {this.state.Hidden == "false" ? (
                      <div className="col-3 " style={{ background: "#ffffff" }}>
                        <ChatBot hidden={this.state} />
                      </div>
                    ) : (
                      <Link href="/whoweareHome">
                        <div
                          className="col-3 scrollSection"
                          style={{ background: "#ffffff" }}
                        >
                          <p className="textbox-2-p1">Scroll to discover</p>
                          <div onKeyUp={this.onKeyUp} className="blackarrow">
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
                      this.setState({
                        Hidden: "false",
                      });
                      console.log(this.state.Hidden);
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

                         {
                          /*responsive csss */
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
}
