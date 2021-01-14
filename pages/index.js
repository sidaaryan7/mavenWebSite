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
          small: "(max-width: 500px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <Header />
                <WhoWeAre />
                <SolutionHome />
                <div>
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
                        margin-top: 30%;
                      }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <>{loading ? <SplashScreen /> : <Header />}</>;
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
