import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import Media from "react-media";
import NavBar from "../components/Layout/Header/NavBar/index";

export default function whoweareHome() {
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
              <WhoWeAre />
            </>
          )}
          {matches.medium && <p>I am medium!</p>}
          {matches.large && (
            <>
              <div>
                <WhoWeAre />
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
}
