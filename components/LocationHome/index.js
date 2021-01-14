import React from "react";
import NavBar from "../Layout/Header/NavBar";
import Image from "next/image";
import Link from "next/link";
import Media from "react-media";

const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function LocationHome({ doSomething }) {
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
                <div className="main">
                  <p className="p1">Global Scale</p>
                  <p className="p2">
                    Making an indelible mark in the human resource
                  </p>
                  <p className="p3">
                    A passionate team of good people is working round the clock
                    in Making an indelible mark in the world of Staffing and
                    Talent Acquisition industry by providing efficient
                    solutions. Since its inception in 2008, Maven Workforce has
                    come across a long way and has become a global leader in
                    Staffing and Talent Acquisition industry. From small to
                    medium to enterprise level, Maven has been advising clients
                    globally for Talent Search and acquisition by identifying
                    ideal talent who aid in giving companies a competitive edge.
                  </p>

                  <div className="address1">
                    <p className="address1-p1">NEW JERSEY, USA</p>
                    <p className="address1-p2">
                      185 Hudson Street, Suite 2500 Jersey City, NJ: 07311, USA
                      +1 732 623 9824
                    </p>
                  </div>

                  <div className="address2">
                    <p className="address2-p1">New Delhi, India</p>
                    <p className="address2-p2">
                      7B, Nirmaan Vihar New Delhi - 110092, India +91 9650 894
                      897
                    </p>
                  </div>

                  <div className="address3">
                    <p className="address3-p1">DELAWARE, USA</p>
                    <p className="address3-p2">
                      200 Continental Drive, Suite 401 Newark, DE 19713- 4337
                      USA, +1 551 214 8937
                    </p>
                  </div>

                  <div className="address4">
                    <p className="address4-p1">LOS ANGELES, USA</p>
                    <p className="address4-p2">
                      2723 W. Vernon Ave # 1029, Los Angeles, CA 90008, USA, +1
                      323 375 9839
                    </p>
                  </div>

                  <div className="address5">
                    <p className="address5-p1">NOIDA, INDIA</p>
                    <p className="address5-p2">
                      A- 3, IInd Floor, Sector 4, Noida 201301, UP, India +91
                      9650 894 897
                    </p>
                  </div>

                  <div className="address6">
                    <p className="address6-p1">MUMBAI, INDIA</p>
                    <p className="address6-p2">
                      Ground & 1st Floor, Poddar Chambers, Mathuradas Mill
                      Compound, Senapati Bapat Marg, Lower Parel, Mumbai -
                      400013, India +91 9650 092 766
                    </p>
                  </div>
                </div>
                <style jsx>
                  {`
                     {
                      .p1 {
                        width: 106px;
                        /* height: 11px; */
                        margin: 0 254px 15px 15px;
                        font-family: Roboto;
                        font-size: 10px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 5.4;
                        letter-spacing: 3.3px;
                        text-align: left;
                        color: #000000;
                      }

                      .p2 {
                        width: 323px;
                        /* height: 61px; */
                        margin: 15px 37px 12px 15px;
                        font-family: Poppins;
                        font-size: 20px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.65;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
                      }

                      .p3{
                        width: 337px;
                        height: 226px;
                        margin: 12px 23px 0px 15px;
                        opacity: 0.75;
                        font-family: Roboto;
                        font-size: 13px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.69;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
}
                      }
                      
                      .address1{
                        padding-left: 25px;
                      }

                      .address1-p1{
                        border-left: 1px solid #ff6139;
                        pading-left: 28px;
                       padding-left: 13px;
                       font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;
                        
                      }

                  .address1-p2{
                    width: 345px;
    height: 41px;
    margin: 6.5px 0 30px 3px;
    padding: 10.9px 6.2px 11.8px 13px;
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    
                         }

                         .address2{
                          padding-left: 25px;
                          
                         }


                         .address2-p1{
                          
                          border-left: 1px solid #ff6139;
                          padding-left: 13px;
                          font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;



                         }

                         

                         .address2-p2{
                          
                          margin: 9.6px 0 30px 3px;
    
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    padding-left:13px;

                         }

                         .address3{
                          padding-left: 25px;
                          
                         }

                         .address3-p1{
                          border-left: 1px solid #ff6139;
                          padding-left: 13px;
                          height: 41px;
                          font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;
                          

                         }
                         .address3-p2{
                          width: 345px;
    height: 41px;
    margin: 6.5px 0 30px 3px;
    padding: 10.9px 6.2px 30px 13px;
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
                         }

                         .address4{
                          padding-left: 25px;
                          
                         }

                         .address4-p1{
                          border-left: 1px solid #ff6139;
                          padding-left: 13px;
                          height: 41px;
                          font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;


}

                         }

                         .address4-p2{
                          width: 345px;
    height: 41px;
    margin: 6.5px 0 30 3px;
    padding: 10.9px 6.2px 30px 13px;
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
                         }

                         .address5{
                          padding-left: 25px;
                          
                         }

                         .address5-p1{
                          border-left: 1px solid #ff6139;
                          padding-left: 13px;
                          height: 41px;
                          font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;


}

                         }

                         .address5-p2{
                          width: 345px;
    height: 41px;
    margin: 6.5px 0 30px 3px;
    padding: 10.9px 6.2px 30px 13px;
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
}

                         }
                         .address6{
                          padding-left: 25px;
                          
                         }

                         .address6-p1{
                          border-left: 1px solid #ff6139;
                          padding-left: 13px;
                          font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ff6139;


}

                         }

                         .address6-p2{
                          width: 345px;
    height: 41px;
    margin: 6.5px 0 30px 3px;
    padding: 10.9px 6.2px 30px 13px;
    opacity: 0.8;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
}

                          }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                {/* layout for big screen more than 1200px */}
                <div className="main">
                  <div className="nav">
                    <NavBar color={"white"} logosrc={imgSrc} />
                  </div>
                  <div className="content">
                    <div className="content1">
                      <div className="content1-p1">
                        <p>Global Scale</p>
                      </div>
                      <div className="content1-p2">
                        <p>Making an indelible mark in the human resource</p>
                      </div>
                      <div className="content1-p3">
                        <p>
                          A passionate team of good people is working round the
                          clock in Making an indelible mark in the world of
                          Staffing and Talent Acquisition industry by providing
                          efficient solutions. Since its inception in 2008,
                          Maven Workforce has come across a long way and has
                          become a global leader in Staffing and Talent
                          Acquisition industry. From small to medium to
                          enterprise level, Maven has been advising clients
                          globally for Talent Search and acquisition by
                          identifying ideal talent who aid in giving companies a
                          competitive edge.
                        </p>
                      </div>
                    </div>
                    <div className="content2">
                      <div className="content2-text1">
                        <p className="content2-text-p1-common">
                          NEW JERSEY, USA
                        </p>
                        <p className="content2-text-p2-common">
                          185 Hudson Street, Suite 2500 Jersey City, NJ: 07311,
                          USA +1 732 623 9824
                        </p>
                      </div>
                      <div className="content2-text2">
                        <p className="content2-text-p1-common">DELAWARE, USA</p>
                        <p className="content2-text-p2-common">
                          200 Continental Drive, Suite 401 Newark, DE 19713-
                          4337 USA, +1 551 214 8937
                        </p>
                      </div>
                      <div className="content2-text3">
                        <p className="content2-text-p1-common">
                          LOS ANGELES, USA
                        </p>
                        <p className="content2-text-p2-common">
                          2723 W. Vernon Ave # 1029, Los Angeles, CA 90008, USA,
                          +1 323 375 9839
                        </p>
                      </div>
                      <div className="content2-text4">
                        <p className="content2-text-p1-common">
                          New Delhi, India
                        </p>
                        <p className="content2-text-p2-common">
                          7B, Nirmaan Vihar New Delhi - 110092, India +91 9650
                          894 897
                        </p>
                      </div>
                      <div className="content2-text5">
                        <p className="content2-text-p1-common">DELAWARE, USA</p>
                        <p className="content2-text-p2-common">
                          200 Continental Drive, Suite 401 Newark, DE 19713-
                          4337 USA, +1 551 214 8937
                        </p>
                      </div>
                      <div className="content2-text6">
                        <p className="content2-text-p1-common">Noida, INDIA</p>
                        <p className="content2-text-p2-common">
                          A- 3, IInd Floor, Sector 4, Noida 201301, UP, India
                          +91 9650 894 897
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/footer">
                    <div className="button">
                      <p>SCROLL</p>
                      <Image
                        src="/images/scrolling.svg"
                        layout="fixed"
                        height={50}
                        width={30}
                      />
                    </div>
                  </Link>
                </div>
                <style jsx>
                  {`
           {
            .nav{
              display:grid;
            }
            p {
              color: white;
            }

            .main {
              background-image: radial-gradient(
                  rgba(32, 41, 64, 0.85),
                  rgba(32, 41, 64, 0.9)
                ),
                url("images/locationhome.svg");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
            }
            .content {
              display: grid;
              grid-template-rows: 100%;
              grid-template-columns: 50% 50%;
              padding-top:4%;
            }

            .content1{
              padding-left: 26%;
}
            }

            .content2 {
              display: grid;
              grid-template-rows: 43% 43% 43% 43%;
              grid-template-columns: 50% 50%;
              padding-top: 5%;
              padding-left: 22%;
            }

            .content1-p1 p {
              opacity: 0.5;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: left;
              color: #ffffff;
            }

            .content1-p2 {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.37;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              
            }

            .content1-p3 {
              opacity: 0.9;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.85;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }

            .content2-text-p1-common{
              font-family: Poppins;
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 2.56;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              border-left: solid 2px #ff6139;
              padding-left: 5%;
}
            }I am large!
              
              width:31%;
              opacity: 0.8;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;I am large!
              text-align: left;
              color: #ffffff;
            }

            .button{
              display:grid;I am large!
              grid-template-rows: 100%;
              grid-template-columns: 10% 50%;
              padding-top: 10%;
}


            }
           .button p{
              font-family: Poppins;
              font-size: 10px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 5.4;
              letter-spacing: 3.3px;
              text-align: center;
              color: #ffffff;
              background:none;
}
            }

          }
        `}
                </style>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
