import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import ContactForm from "../components/ContactForm";

import NavBar from "../components/Layout/Header/NavBar/NavBar";
import Image from "next/image";
import LocationMap from "../components/LocationMap";

export default function contact() {
  return (
    <div className="">
      <div className="row header">
        <div className="col">
          <NavBar />
          <div className="textbox-1">
            <p className="textbox-1-p-1">Contact Us </p>
            <p className="textbox-1-p-2">Don’t be shy, Say Hi.</p>
          </div>
          <div className="textbox-2">
            <p className="">
              A passionate team of good people is working round the clock in
              Making an indelible mark in the world of Staffing and Talent
              Acquisition industry by providing efficient solutions.
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
        <div className="col-12">
          <Footer />
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <Copywritefooter />
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
        `}
      </style>
    </div>
  );
}
