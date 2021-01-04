import React from "react";
import NavBar from "../Layout/Header/NavBar/NavBar";
import Image from "next/image";

export default function index({ doSomething }) {
  return (
    <>
      <div className="main">
        <div className="nav">
          <NavBar />
        </div>
        <div className="content">
          <div className="content1">
            <div className="content1-p1">
              <p>Global Scale</p>
            </div>
            <div className="content1-p2">
              <p>Making an indelible mark in the human resource</p>
            </div>
            <div className="content1-p3">
              <p>
                A passionate team of good people is working round the clock in
                Making an indelible mark in the world of Staffing and Talent
                Acquisition industry by providing efficient solutions. Since its
                inception in 2008, Maven Workforce has come across a long way
                and has become a global leader in Staffing and Talent
                Acquisition industry. From small to medium to enterprise level,
                Maven has been advising clients globally for Talent Search and
                acquisition by identifying ideal talent who aid in giving
                companies a competitive edge.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="content2-text1">
              <p className="content2-text-p1-common">NEW JERSEY, USA</p>
              <p className="content2-text-p2-common">
                185 Hudson Street, Suite 2500 Jersey City, NJ: 07311, USA +1 732
                623 9824
              </p>
            </div>
            <div className="content2-text2">
              <p className="content2-text-p1-common">DELAWARE, USA</p>
              <p className="content2-text-p2-common">
                200 Continental Drive, Suite 401 Newark, DE 19713- 4337 USA, +1
                551 214 8937
              </p>
            </div>
            <div className="content2-text3">
              <p className="content2-text-p1-common">LOS ANGELES, USA</p>
              <p className="content2-text-p2-common">
                2723 W. Vernon Ave # 1029, Los Angeles, CA 90008, USA, +1 323
                375 9839
              </p>
            </div>
            <div className="content2-text4">
              <p className="content2-text-p1-common">New Delhi, India</p>
              <p className="content2-text-p2-common">
                7B, Nirmaan Vihar New Delhi - 110092, India +91 9650 894 897
              </p>
            </div>
            <div className="content2-text5">
              <p className="content2-text-p1-common">DELAWARE, USA</p>
              <p className="content2-text-p2-common">
                200 Continental Drive, Suite 401 Newark, DE 19713- 4337 USA, +1
                551 214 8937
              </p>
            </div>
            <div className="content2-text6">
              <p className="content2-text-p1-common">Noida, INDIA</p>
              <p className="content2-text-p2-common">
                A- 3, IInd Floor, Sector 4, Noida 201301, UP, India +91 9650 894
                897
              </p>
            </div>
          </div>
        </div>

        <div className="button">
          <button onClick={doSomething}>SCROLL</button>
          <Image
            src="/images/scrolling.svg"
            layout="fixed"
            height={50}
            width={30}
          />
        </div>
      </div>
      <style jsx>
        {`
           {
            p {
              color: white;
            }

            .main {
              background-image: radial-gradient(
                  rgba(32, 41, 64, 0.85),
                  rgba(32, 41, 64, 0.9)
                ),
                url("images/locationhome.svg");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .content {
              display: grid;
              grid-template-rows: 100%;
              grid-template-columns: 50% 50%;
            }

            .content1{
              padding-left: 26%;
}
            }

            .content2 {
              display: grid;
              grid-template-rows: 43% 43% 43% 43%;
              grid-template-columns: 50% 50%;
              padding-top: 5%;
              padding-left: 22%;
            }

            .content1-p1 p {
              opacity: 0.5;
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

            .content1-p2 {
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

            .content1-p3 {
              opacity: 0.9;
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

            .content2-text-p1-common{
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 2.56;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              border-left: solid 2px #ff6139;
              padding-left: 5%;
}
            }

            .content2-text-p2-common{
              
              width:26%;
              opacity: 0.8;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.46;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }

            .button{
              display:grid;
              grid-template-rows: 100%;
              grid-template-columns: 10% 50%;
              padding-top: 10%;
}


            }
            button{
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #ffffff;
              background:none;
}
            }

          }
        `}
      </style>
    </>
  );
}
