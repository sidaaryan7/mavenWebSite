import React, { useState, useEffect } from "react";

import Header from "../components/Layout/Header/Header";
import SplashScreen from "../components/SplashScreen/index";
import Media from "react-media";
import WhoWeAre from "../components/WhoWeAre/index";
import SolutionHome from "../components/SolutionHome/index";
import OurClient from "../components/OurClient/index";
import LocationHome from "../components/LocationHome";
import Footer from "../components/Layout/Footer/index";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
            {/* LAYOUT FOR SMALL DEVICES STARTS */}
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
            {/* LAYOUT FOR SMALL DEVICES ENDS */}

            {/*LAYOUT FOR MEDIUM DEVICES STARTS */}
            {matches.medium && (
              <>
                <div className="medHeader">
                  <Header />
                </div>
              </>
            )}
            {/*LAYOUT FOR MEDIUM DEVICES ENDS */}

            {/*LAYOUT FOR LARGE DEVICES STARTS */}

            {matches.large && (
              <>
                <>{loading ? <SplashScreen /> : <Header />}</>;
              </>
            )}

            {/*LAYOUT FOR LARGE DEVICES ENDS */}
          </>
        )}
      </Media>
    </>
  );
}
