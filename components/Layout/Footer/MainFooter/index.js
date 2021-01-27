import React from "react";
import Image from "next/image";
import Link from "next/link";
import Media from "react-media";

export default function MainFooter() {
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
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="textbox">
                        <p className="p1">
                          Don’t be shy,<span> Say Hi.</span>
                        </p>
                        <p className="p2">Contact us</p>
                        <img src="/images/orangearrowRight.svg"></img>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col navlinks">
                      <div className="row nav-r">
                        <div className=" ">
                          <p>About us</p>
                          <ul>
                            <li>
                              <Link href="/about">
                                <a>Who We are</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Value System</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Work With Us</a>
                              </Link>
                            </li>
                          </ul>

                          <p>Solutions</p>
                          <ul>
                            <li>
                              <Link href="">
                                <a>Proffesional Seacrh</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/ExecutiveSearch">
                                <a>Executive Search</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>It Staff Augmentation</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Flexi Staffing</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="">
                                <a>RPO</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <p>Industry focus</p>
                          <ul>
                            <li>
                              <Link href="">
                                <a>Artificial Intelligence &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Communication &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Information technology</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Government</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Banking Finance &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>insurance</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Healthcare & Life Science</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Industrial & Manufacturing</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Renewal Energy</a>
                              </Link>
                            </li>
                          </ul>
                          <h6>
                            view more
                            <input
                              type="image"
                              src="/images/orangearrowRight.svg"
                            ></input>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`
                     {
                      .textbox {
                        padding-left: 6%;
                      }
                      .p1 {
                        width: 321px;
                        height: 45px;
                        margin: 0 0 15px;
                        font-family: Poppins;
                        font-size: 32px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 2.22;
                        letter-spacing: normal;
                        text-align: left;
                        color: #202940;
                      }
                      span {
                        color: #ff6139;
                      }

                      .nav-r p {
                        border-left: solid #ff6139;
                        padding-left: 10px;
                      }

                      .p2 {
                        idth: 88px;
                        height: 23px;
                        margin: 0 16.7px 0 0;
                        font-family: Poppins;
                        font-size: 16px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
                        display: inline;
                      }
                      ul {
                        list-style: none;
                      }
                      .navlinks {
                        padding-top: 14%;
                      }

                      .nav-r p {
                        border-left: solid #ff6139;
                        padding-left: 10px;
                        margin-left: 6%;
                        font-size: 18px;
                      }

                      h6 {
                        width: 200px;
                        height: 17px;
                        margin: 0 15.5px 0 0;
                        font-family: Poppins;
                        font-size: 20px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #000000;
                      }

                      h6 input {
                        margin-left: 10%;
                      }

                      h6 {
                        padding-top: 10%;
                        margin-left: 6%;
                      }
                      li a {
                        font-size: 13px;
                      }
                    }
                  `}
                </style>
              </>
            )}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && (
              <>
                <div className="container main">
                  <div className="row footer-r">
                    <div className="col">
                      <div className="row icon">
                        <div className="col">
                          <Link href="/">
                            <Image
                              src="/images/logoFooter.svg"
                              width={100}
                              height={50}
                            ></Image>
                          </Link>
                        </div>
                      </div>
                      <p className="text2">
                        Don’t be shy, <span>Say Hi.</span>
                      </p>

                      <div className="text3">
                        <p className="text3-1">Start a conversation</p>
                        <p className="text3-2">Contact us</p>
                        <input
                          type="image"
                          src="/images/orangearrowRight.svg"
                        ></input>
                      </div>
                    </div>

                    <div className="col navlinks">
                      <div className="row nav-r">
                        <div className="col ">
                          <p>About us</p>
                          <ul>
                            <li>
                              <Link href="">
                                <a>Who We are</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Value System</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Work With Us</a>
                              </Link>
                            </li>
                          </ul>

                          <p>Solutions</p>
                          <ul>
                            <li>
                              <Link href="">
                                <a>Proffesional Seacrh</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Executive Search</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>It Staff Augmentation</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Flexi Staffing</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="">
                                <a>RPO</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <p>Industry focus</p>
                          <ul>
                            <li>
                              <Link href="">
                                <a>Artificial Intelligence &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Communication &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Information technology</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Government</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Banking Finance &</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>insurance</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Healthcare & Life Science</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Industrial & Manufacturing</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a>Renewal Energy</a>
                              </Link>
                            </li>
                          </ul>
                          <h6>
                            view more
                            <input
                              type="image"
                              src="/images/orangearrowRight.svg"
                            ></input>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="goup">
                      <img src="/images/blackArrowup.svg" />
                      <p>Go Up</p>
                    </div>
                  </div>

                  <style jsx>
                    {`
           {
            
            .main{
              margin-bottom: 0.5%;
            }
            
            .text2 {
              font-size: 77px;
              align: left;
              width: 80%;
              padding-bottom: 5%;
            }
            span {
              color: #ff6139;
            }
            Link {
              float: right;
            }
            .text3-1{
              width: 200px;
  height: 20px;
  margin: 31.5px 380px 11.5px 0;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 7%;
}
.text3-2{
  display:inline;
  width: 88px;
  height: 30px;
  margin: 0 16.7px 0 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.footer-r{
  padding:10% 10%;
  padding-bottom:20%;
}
ul{
  list-style:none;
}

.navlinks{
  padding-top:14%;
}

.nav-r p{
  border-left:solid #ff6139;
  padding-left:10px;


}
h6{
  width: 200px;
  height: 17px;
  margin: 0 15.5px 0 0;
  font-family: Poppins;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
h6 input{
  margin-left: 10%;
}
.icon{
  padding-bottom: 9%;
}
h6{
  padding-top: 10%;
}

.goup{
  position: absolute;
    left: 94%;
    width: 100px;
    top: 770px;
    height: 100px;
}

.goup p{
  font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    /* text-align: center; */
    color: #ff6139;
}
            }
          }
        `}
                  </style>
                </div>
                );
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}
