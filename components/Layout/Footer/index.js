import React from "react";
import MainFooter from "./MainFooter";
import Copywritefooter from "./Copywritefooter/index";
import Media from "react-media";

export default function Footer() {
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
            {matches.small && (
              <>
                <MainFooter />
                <Copywritefooter />
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <MainFooter />
                <Copywritefooter />
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
