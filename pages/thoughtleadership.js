import React from "react";
import ThoughtLeadership from "../components/ThoughtLeadership";
import Media from "react-media";

export default function thoughtleadership() {
  return (
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
              <div className="">
                <ThoughtLeadership />
              </div>
            </>
          )}
          {matches.medium && <p>I am medium!</p>}
          {matches.large && (
            <>
              <div className="">
                <ThoughtLeadership />
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
}
