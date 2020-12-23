import React from "react";
import Image from "next/image";

export default function Copywritefooter() {
  return (
    <div className="cfooter">
      <div>
        <p>COPYWRITE &copy; 2008-2020 MAVEN WORKFORCE LIMITED</p>
      </div>

      <div className="socialicon">
        <Image
          src="/images/fb.svg"
          layout={"fixed"}
          height={20}
          width={50}
        ></Image>
        <Image
          src="/images/linkdin.svg"
          layout={"fixed"}
          height={20}
          width={50}
        ></Image>
        <Image
          src="/images/twitter.svg"
          layout={"fixed"}
          height={20}
          width={50}
        ></Image>
      </div>
      <style jsx>
        {`
          .cfooter {
            background-color: #ff6139;
            width: 100%;
            height: 100px;
          }
          .cfooter p {
            height: 15px;
            margin: 0px 0px 0px 10%;
            opacity: 0.75;
            font-family: Roboto;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 4.1;
            letter-spacing: 2.2px;
            text-align: left;
            color: #ffffff;
          }
          .socialicon {
            margin-left: 80%;
          }
        `}
      </style>
    </div>
  );
}
