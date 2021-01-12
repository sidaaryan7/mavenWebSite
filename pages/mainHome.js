import React from "react";
import Media from "react-media";
import Header from "../components/Layout/Header/Header";
import WhoWeAre from "../components/WhoWeAre/index";
import SolutionHome from "../components/SolutionHome/index";

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
                <Header />
                <WhoWeAre />
                <SolutionHome />
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
