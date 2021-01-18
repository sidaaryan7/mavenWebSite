import React from "react";
import Media from "react-media";
import Header from "../components/Layout/Header/Header";
import WhoWeAre from "../components/WhoWeAre/index";
import SolutionHome from "../components/SolutionHome/index";
import OurClient from "../components/OurClient/index";
import LocationHome from "../components/LocationHome/index";
import Footer from "../components/Layout/Footer/index";

export default function mainHome() {
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
                <div className="mHeader">
                  <Header />
                </div>
                <div className="mWhoweare">
                  <WhoWeAre />
                </div>
                <div className="mSolutionhome">
                  <SolutionHome />
                </div>

                <div className="mOurclients">
                  <p>Our Clients</p>
                  <OurClient />
                </div>
                <div className="mlocationHome">
                  <LocationHome />
                </div>
                <div className="mFooter">
                  <Footer />
                </div>

                <style jsx>
                  {`
                     {
                      .mlocationHome {
                        margin-top: 5%;
                        background: #ffffff;
                        padding-bottom: 5%;
                      }
                      .mSolutionhome {
                        padding-top: 20%;
                      }

                      .mOurclients {
                        background: #f2f3f5;
                      }
                      .mOurclients p {
                        width: 111px;
                        height: 28px;
                        /* margin: 0 102px 49px 98px; */
                        /* font-family: Poppins; */
                        font-size: 20px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.65;
                        letter-spacing: normal;
                        /* text-align: left; */
                        color: #000000;
                        margin-bottom: 10%;

                        margin-left: 40%;
                        padding-top: 5%;
                      }
                      .mFooter {
                        background-color: #f2f3f5;
                        padding-top: 5%;
                      }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <>
                  <Header />
                </>
                ;
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
