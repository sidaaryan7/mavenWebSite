import React from "react";
import Footer from "../components/Layout/Footer";
import Media from "react-media";
import ContactForm from "../components/ContactForm";
import NavBar from "../components/Layout/Header/NavBar";
import Image from "next/image";
import LocationMap from "../components/LocationMap";
import LocationHome from "../components/LocationHome/index";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");
export default function contact() {
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
                  <div className="mNavbar">
                    <NavBar color={"white"} logosrc={imgSrc} />
                  </div>
                </div>

                <div className="textbox">
                  <p className="textbox-p1">Don’t be shy, Say Hi.</p>
                  <p className="textbox-p2">
                    A passionate team of good people is working round the clock
                    in Making an indelible mark in the world of Staffing and
                    Talent Acquisition industry by providing efficient
                    solutions.
                  </p>
                  <p className="textbox-p3">Send Message</p>
                  <button>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="mContactform">
                  <ContactForm />
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
                      .mNavbar {
                        padding-top: 5%;
                      }
                      .mainHeader {
                        background-image: radial-gradient(
                            rgba(255, 255, 255, -0.15),
                            rgba(0, 0, 0, 0.9)
                          ),
                          url("images/contactbanner.png");
                        background-repeat: no-repeat;

                        background-size: 100%;
                        height: 255px;
                        object-fit: cover;
                      }

                      .textbox {
                        
                        background-color: #ff6139;
                        margin-left: 5%;
                        margin-right: 5%;
                        margin-top: -24%;
                        padding-left: 10%;
                        padding-top: 5%;
                        padding-bottom: 5%;
                      }

                      .textbox-p1 {
                        width: 206px;
                        height: 90px;
                        margin: 0 82px 17px 0;
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

                      .textbox-p2 {
                        width: 288px;
                        height: 96px;
                        margin: 17px 0 15px;
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
                      .textbox-p3 {
                        height: 17px;
                        margin: 0 8.5px 0 0;
                        font-family: Poppins;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffffff;
                        display: inline;
                      }

                      button {
                        background: none;
                        border: none;
                      }

                      .mLocation {
                        padding-top: 2%;
                      }
                      .mFooter {
                        background: #f2f3f5;
                        padding-top: 2%;
                      }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <div className="row header">
                  <div className="col">
                    <NavBar color={"white"} logosrc={imgSrc} />
                    <div className="textbox-1">
                      <p className="textbox-1-p-1">Contact Us </p>
                      <p className="textbox-1-p-2">Don’t be shy, Say Hi.</p>
                    </div>
                    <div className="textbox-2">
                      <p className="">
                        A passionate team of good people is working round the
                        clock in Making an indelible mark in the world of
                        Staffing and Talent Acquisition industry by providing
                        efficient solutions.
                      </p>
                      <button>Send Message</button>
                    </div>
                    <div className="chatboticon">
                      <Image
                        src="/images/chatbot.svg"
                        layout="fixed"
                        height={100}
                        width={100}
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <ContactForm />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <LocationMap />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12 footerrow">
                    <Footer />
                  </div>
                </div>

                <style jsx>
                  {`
           {
            .header {
              background-image: radial-gradient(
                  rgba(255, 255, 255, -0.15),
                  rgba(0, 0, 0, 0.9)
                ),
                url("images/contactbanner.png");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            p {
              color: white;
            }
            .textbox-1-p-1{
              width: 95px;
  height: 11px;
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
  margin-left: 14%;
  margin-top:170px;
}

.textbox-1-p-2{
  width:68%;
  height: 271px;
  margin: 229.5px 197.5px 228.5px 0;
  padding: 0 569px 260px 5px;
  font-family: Poppins;
  font-size: 104px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-left: 13%;
  margin-top:0;
}
.textbox-2{
  width: 465px;
  height: 266px;
  margin: 193px 877px 0 0;
  padding: 0.5px 51px 0.5px 120px;
  background-color: #ff6139;
  position: relative;
    bottom: 21%;
    padding-top: 50px;
}
.textbox-2 button{
  background: #ff6139;
    color: white;
    border: none;
    padding-top: 22px;
    margin-left: -7px;
}
            }
          }
          .textbox-2 p{
            font-family: Poppins;
          }
          .chatboticon{
            width: 78px;
  height: 78px;
  margin: 360px 20px 21px 24.5px;
  padding: 11px;
  
  
  position: absolute;
    top: 493px;
    left: 1759px;
          }
          .main{
            margin:0px;
          }

          .footerrow{
            position:relative;
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
