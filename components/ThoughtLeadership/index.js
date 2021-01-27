import React from "react";
import NavBar from "../Layout/Header/NavBar/index";
import Media from "react-media";
import AboutusMobileCard from "../AboutusMobileCard/index";
import Footer from "../Layout/Footer/index";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");
export default function ThoughtLeadership() {
  return (
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
              <div className="mMain">
                <div className="mNavbar">
                  <NavBar color={"white"} logosrc={imgSrc} />
                </div>
                <div className="mTextBlock">
                  <p className="mTextBlock-p1">Thought Leadership</p>
                  <p className="mTextBlock-p2">
                    Some line for this Area to make it awesome
                  </p>
                </div>
                <div className="mCardContainer">
                  <div className="mCard1">
                    <div className="mCardImg1">
                      <img src="/images/thoughtLeadershipBox.jpg" alt=""></img>
                    </div>
                    <div className="mCard1-p1">
                      Maintaining ‘Management Employee’ Relations
                    </div>
                    <div className="mCard1-p2">
                      Ever wondered why some unexpected attritions take place in
                      an organization? Money can be one reason where an employee
                      tends to bend towards
                    </div>
                    <div className="mCard1-p3">Priyanka Choudhary</div>
                  </div>

                  <div className="mCard2">
                    <div className="mCardImg2">
                      <img src="/images/thoughtLeadershipBox.jpg" alt=""></img>
                    </div>
                    <div className="mCard2-p1">
                      Maintaining ‘Management Employee’ Relations
                    </div>
                    <div className="mCard2-p2">
                      Ever wondered why some unexpected attritions take place in
                      an organization? Money can be one reason where an employee
                      tends to bend towards
                    </div>
                    <div className="mCard2-p3">Priyanka Choudhary</div>
                  </div>

                  <div className="mCard3">
                    <div className="mCardImg3">
                      <img src="/images/thoughtLeadershipBox.jpg" alt=""></img>
                    </div>
                    <div className="mCard3-p1">
                      Maintaining ‘Management Employee’ Relations
                    </div>
                    <div className="mCard3-p2">
                      Ever wondered why some unexpected attritions take place in
                      an organization? Money can be one reason where an employee
                      tends to
                    </div>
                    <div className="mCard3-p3">Priyanka Choudhary</div>
                  </div>

                  <div className="mCard4">
                    <div className="mCardImg4">
                      <img src="/images/thoughtLeadershipBox.jpg" alt=""></img>
                    </div>
                    <div className="mCard4-p1">
                      Maintaining ‘Management Employee’ Relations
                    </div>
                    <div className="mCard4-p2">
                      Ever wondered why some unexpected attritions take place in
                      an organization? Money can be one reason where an employee
                      tends to bend towards
                    </div>
                    <div className="mCard4-p3">Priyanka Choudhary</div>
                  </div>
                </div>

                <div className="mFooter">
                  <Footer />
                </div>
              </div>
              <style jsx>
                {`
                   {
                    .mMain {
                      background-image: url(images/thoughtleadershipbanner.jpg);
                      background-repeat: no-repeat;
                      background-size: 100%;
                      height: 966px;
                      object-fit: cover;
                    }
                    .mNavbar {
                      padding-top: 5%;
                    }
                    .mTextBlock {
                      width: 87%;
                      height: 27%;
                      /* margin: 156px 15px 1643px; */
                      padding: 26px 33px 29px 29px;
                      object-fit: contain;
                      background-color: #ff6139;
                      margin: 15% auto 0;
                    }

                    .mTextBlock-p1 {
                      width: 163px;
                      height: 11px;
                      /* margin: 0 119px 11px 1px; */
                      font-family: Roboto;
                      font-size: 12px;
                      font-weight: normal;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 5.4;
                      letter-spacing: 3.3px;
                      text-align: left;
                      color: #ffffff;
                    }
                  }

                  .mTextBlock-p2 {
                    width: 283px;
                    height: 135px;
                    /* margin: 11px 0 0; */

                    font-size: 32px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.41;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ffffff;
                    margin: 10% 0% 0%;
                  }
                  .mCardContainer {
                    padding-top: 5%;
                    padding-bottom: 5%;
                    background: #f7f7f7;
                  }
                  .mCard1 {
                    width: 87%;

                    height: 385px;
                    margin: 0 auto 15px;
                    padding: 0 0 18px;
                    background-color: #ffffff;
                  }

                  .mCard1-p1 {
                    width: 100%;
                    height: 67px;
                    margin: 16px auto 14px;
                    /* font-family: Poppins; */
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.61;
                    letter-spacing: normal;
                    text-align: left;
                    color: #202940;
                  }

                  .mCard1-p2 {
                    width: 99%;
                    height: 91px;
                    margin: 0px auto 14px;
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                  }

                  .mCard1-p3 {
                    /* width: 124px; */
                    /* height: 18px; */
                    /* margin: 84px 207px 0 14px; */
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ff6139;
                  }

                  .mCard2 {
                    width: 87%;
                    height: 385px;
                    margin: 0 auto 15px;
                    padding: 0 0 18px;
                    background-color: #ffffff;
                  }

                  .mCard2-p1 {
                    width: 100%;
                    height: 67px;
                    margin: 16px auto 14px;
                    /* font-family: Poppins; */
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.61;
                    letter-spacing: normal;
                    text-align: left;
                    color: #202940;
                  }

                  .mCard2-p2 {
                    width: 99%;
                    height: 91px;
                    margin: 0px auto 14px;
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                  }

                  .mCard2-p3 {
                    /* width: 124px; */
                    /* height: 18px; */
                    /* margin: 84px 207px 0 14px; */
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ff6139;
                  }

                  .mCard3 {
                    width: 87%;

                    height: 385px;
                    margin: 0 auto 15px;

                    padding: 0 0 18px;
                    background-color: #ffffff;
                  }

                  .mCard3-p1 {
                    width: 100%;
                    height: 67px;
                    margin: 16px auto 14px;
                    /* font-family: Poppins; */
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.61;
                    letter-spacing: normal;
                    text-align: left;
                    color: #202940;
                  }

                  .mCard3-p2 {
                    width: 99%;
                    height: 91px;
                    margin: 0px auto 14px;
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                  }

                  .mCard3-p3 {
                    /* width: 124px; */
                    /* height: 18px; */
                    /* margin: 84px 207px 0 14px; */
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ff6139;
                  }

                  .mCard4 {
                    width: 87%;
                    margin: 0 auto 15px;
                    height: 385px;

                    padding: 0 0 18px;
                    background-color: #ffffff;
                  }

                  .mCard4-p1 {
                    width: 100%;
                    height: 67px;
                    margin: 16px auto 14px;
                    /* font-family: Poppins; */
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.61;
                    letter-spacing: normal;
                    text-align: left;
                    color: #202940;
                  }

                  .mCard4-p2 {
                    width: 99%;
                    height: 91px;
                    margin: 0px auto 14px;
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                  }

                  .mCard4-p3 {
                    /* width: 124px; */
                    /* height: 18px; */
                    /* margin: 84px 207px 0 14px; */
                    font-family: Roboto;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.85;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ff6139;
                  }
                  .mFooter {
                    background-color: #f2f3f5;
                  }
                `}
              </style>
            </>
          )}
          {matches.medium && <p>I am medium!</p>}
          {matches.large && (
            <>
              <div className="main">
                <NavBar color={"white"} logosrc={imgSrc} />
                <div className="orangeDiv">
                  <p className="orangeDiv-p1">Thought Leadership</p>
                  <p className="orangeDiv-p2">
                    Some line for this Area to make it awesome
                  </p>
                </div>

                <div className="whitecard">
                  <div className="whitecard-1">
                    <div>
                      <img src="/images/thoughtLeadershipBox.jpg"></img>
                    </div>
                    <div>
                      <p className="whitecard-1-p1">
                        Maintaining ‘Management Employee’ Relations
                      </p>
                      <p className="whitecard-1-p2">
                        Ever wondered why some unexpected attritions take place
                        in an organization? Money can be one reason where an
                        employee tends to bend towards
                      </p>
                      <p className="whitecard-1-p3">Priyanka Choudhary</p>
                    </div>
                  </div>

                  <div className="whitecard-2">
                    <div>
                      <img src="/images/thoughtLeadershipBox.jpg"></img>
                    </div>
                    <div>
                      <p className="whitecard-2-p1">
                        Maintaining ‘Management Employee’ Relations
                      </p>
                      <p className="whitecard-2-p2">
                        Ever wondered why some unexpected attritions take place
                        in an organization? Money can be one reason where an
                        employee tends to bend towards
                      </p>
                      <p className="whitecard-2-p3">Priyanka Choudhary</p>
                    </div>
                  </div>

                  <div className="whitecard-3">
                    <div>
                      <img src="/images/thoughtLeadershipBox.jpg"></img>
                    </div>
                  </div>

                  <div className="whitecard-4">
                    <div>
                      <img src="/images/thoughtLeadershipBox.jpg"></img>
                    </div>
                    <div>
                      <p className="whitecard-4-p1">Maintaining Management</p>
                    </div>
                  </div>
                </div>

                <style jsx>
                  {`
           {
            .main {
              background-image: url(images/thoughtleadershipbanner.jpg);
              background-repeat: no-repeat;
              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }

            .orangeDiv {
              height: 266px;
              margin: 193px 0 0;
              padding: 0.5px 155px 0 156px;
              background-color: #ff6139;
              position: relative;
              top: 39%;
            }

            .orangeDiv-p1 {
              margin: 41.5px 307px 0 0;
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

            .orangeDiv-p2 {
              width: 359px;
              height: 145px;
              margin: 13px 111px 55px 0;
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

            .whitecard {
              display: grid;
              grid-template-rows: 60% 50%;
              grid-template-columns: 47% 50%;
              grid-row-gap: 5%;
              width: 37%;
              position: relative;
              bottom: 26%;
              left: 57%;
            }

            .whitecard-1 {
              width: 303px;
              height: 390px;
              margin: 41px 28px 0 0;
              padding: 15px 14px 22px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-1-p1 {
              width: 248px;
              height: 67px;
              margin: 20px 13px 0 14px;
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.61;
              letter-spacing: normal;
              text-align: left;
              color: #202940;
            }

            .whitecard-1-p2 {
              width: 240px;
              height: 91px;
              margin: 2px 21px 13px 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .whitecard-1-p3 {
              width: 124px;
              height: 18px;
              margin: 13px 137px 0 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }

            .whitecard-2 {
              width: 303px;
              height: 390px;
              margin: 0 0 41px 28px;
              padding: 15px 14px 22px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-2-p1 {
              width: 248px;
              height: 67px;
              margin: 20px 13px 0 14px;
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.61;
              letter-spacing: normal;
              text-align: left;
              color: #202940;
            }

            .whitecard-2-p2 {
              width: 240px;
              height: 91px;
              margin: 0px 21px 13px 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .whitecard-2-p3 {
              width: 124px;
              height: 18px;
              margin: 13px 137px 0 14px;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }

            .whitecard-3 {
              width: 303px;
              height: 172px;
              margin: 41px 28px 0 0px;
              padding: 15px 14px 0;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-4 {
              width: 303px;
              height: 213px;
              margin: 0.5px 0 0 28px;
              padding: 15px 0 0 14px;
              background-color: #ffffff;
              border: 1px solid black;
            }

            .whitecard-4-p1{
              width: 248px;
    height: 34px;
    margin: 20px 13px 0 14px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: normal;
    text-align: left;
    color: #202940;
}
            }
          }
        `}
                </style>
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
}
