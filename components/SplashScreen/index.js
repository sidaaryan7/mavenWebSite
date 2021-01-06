import Image from "next/image";
import React from "react";
import { useSpring, animated } from "react-spring";

export default function SplashScreen() {
  const props = useSpring({ opacity: 0, from: { opacity: 1 } });
  return (
    <animated.div style={props}>
      <div>
        <h1>loading</h1>
      </div>
      <style jsx>
        {`
           {
            h1 {
              color: red;
            }
          }
        `}
      </style>
    </animated.div>
  );
}
