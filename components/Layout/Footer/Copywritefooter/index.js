import React from "react";
import Image from "next/image";
import Media from "react-media";

export default function Copywritefooter() {
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
                <div className="cpr">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center social-icon">
                      <p>COPYWRITE &copy; 2008-2020 MAVEN WORKFORCE LIMITED</p>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                   {
                    .cpr {
                      margin-top: 17%;
                      background: #ff6139;
                    }
                    p {
                      opacity: 0.85;
                      font-family: Roboto;
                      font-size: 10px;
                      font-weight: normal;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 4.1;
                      letter-spacing: 2.2px;
                      text-align: left;
                      color: #ffffff;
                      padding-top: 3%;
                    }
                    .socialicon {
                      padding-top: 3%;
                    }
                  }
                `}</style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <div className="cfooter">
                  <div className="copywrite-text">
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
                        padding-top: 1.5%;
                      }
                      .socialicon {
                        margin-left: 80%;
                        padding-top: 1%;
                      }
                    `}
                  </style>
                </div>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
