import React, { Component } from "react";
import Media from "react-media";
import Link from "next/link";

export default class NavBar extends Component {
  showingMenu = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  myFunction = function (e) {
    e.target.classList.toggle("change");
    this.showingMenu();
  };

  render() {
    return (
      <div className="">
        <Media
          queries={{
            small: "(max-width: 500px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <>
              {/* for small screens */}
              {matches.small && (
                <>
                  <div className="row">
                    {/*Logo section */}
                    <div className="col-6">
                      <a className="logo">
                        <Link href="/mainHome">
                          <img src={this.props.logosrc}></img>
                        </Link>
                      </a>
                    </div>
                    {/*nav links section */}
                    <div className="col-6">
                      <div
                        className="mobileMenu"
                        onClick={(e) => this.myFunction(e)}
                      >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                      </div>

                      <nav className="nav-area" id="myLinks">
                        <ul className="firstul">
                          <li>
                            <Link href="/">
                              <a>HOME</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>ABOUT US</a>
                            </Link>
                          </li>

                          <li>
                            <Link href="">
                              <a>SOLUTIONS</a>
                            </Link>

                            {/*drop down menu items */}
                            <ul>
                              <li>
                                <Link href="/solutions/ExecutiveSearch">
                                  <a>Executive Search</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>flexi Staffing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>It Staff Augmentation</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Proffesional Seacrh</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Recruit Outsorcing</a>
                                </Link>
                              </li>
                            </ul>
                            {/* drop down ends*/}
                          </li>
                          <li>
                            <Link href="">
                              <a>iNDUSTRY FOCUS</a>
                            </Link>
                            {/*drop down starts */}
                            <ul>
                              <li>
                                <Link href="">
                                  <a>AI and Robotics</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Fintech & Insurance</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Communication & IT</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Government</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Health care & Life Sciences</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Industrial & Manufacturing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Renewable Energy</a>
                                </Link>
                              </li>
                            </ul>
                            {/*drop down ends */}
                          </li>
                          <li>
                            <Link href="/jobs">
                              <a>JOBS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/thoughtleadership">
                              <a>THOUGHT LEADERSHIP</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              <a>CONTACT</a>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <style jsx>{`
                       {
                        .mobileMenu {
                          display: inline-block;
                          cursor: pointer;
                          width: 25.5px;
                          height: 17px;
                          margin: 18.3px 0 139.7px 156px;
                          object-fit: contain;
}
                        }
                        .bar1,
                        .bar2,
                        .bar3 {
                          width: 35px;
                          height: 5px;
                          background-color: white;
                          margin: 6px 0;
                          transition: 0.4s;
                        }
                        .change .bar1 {
                          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                          transform: rotate(-45deg) translate(-9px, 6px);
                        }
                        .change .bar2 {
                          opacity: 0;
                        }
                        .change .bar3 {
                          -webkit-transform: rotate(45deg) translate(-8px, -8px);
                          transform: rotate(45deg) translate(-8px, -8px);
                        }

                        .nav-area:after {
                          content: "";
                          clear: both;
                          display: block;
                        }

                        .nav-area > ul > li {
                          float: left;
                          position: relative;
                        }
                        .nav-area ul ul li {
                          margin: 5%;
                        }
                        .nav-area ul ul {
                          position: absolute;
                          padding: 0;
                          /*min-width:160px;*/
                          width: 300px;
                          height: 500px;
                          display: none;
                          top: 100%;
                          left: 0;
                          background-color: white;
                        }
                        .nav-area ul ul a {
                          color: black;
                        }
                        ul {
                          float: left;

                          list-style: none;
                        }
                        a {
                          color: ${this.props.color};

                          text-transform: capitalize;
                        }
                        li {
                          float: left;
                          margin: 30px;
                          font-family: Roboto;
                          font-size: 15px;
                          font-weight: 500;
                          font-stretch: normal;
                          font-style: normal;
                          line-height: 2.3;
                          letter-spacing: 2.7px;
                          text-align: left;
                          color: #ffffff;
                        }
                        .logo {
                          padding-top: 4%;
                        }
                        .logo img {
                          width: 100.8px;
                          height: 27.2px;
                          margin: 26px 217.2px 132.7px 39px;
                          object-fit: contain;
                        }
                         {
                           {
                            /* for showing drop downs when hover over the main menu */
                          }
                        }
                        .nav-area ul li:hover > ul {
                          display: block;
                        }

                        .nav-area ul li a:hover,
                        .nav-area ul li a:active {
                          border-bottom: solid 3px #ff6139;
                          color: #ff6139;
                          animation: fadeIn ease 20s;
                        }
                      }
                    `}</style>
                  </div>
                </>
              )}
              {matches.medium && <p>I am medium!</p>}
              {matches.large && (
                <>
                  <div className="row main">
                    {/*Logo section */}

                    <div className="col-4 d-flex justify-content-center logo-wrapper">
                      <a className="logo">
                        {
                          <Link href="/mainHome">
                            {/*}}
                <Image
                  className="logo-image"
                  src="/${props.logosrc}"
                  layout="fixed"
                  width={130}
                  height={35}
                ></Image>
              {{*/}

                            <img src={this.props.logosrc}></img>
                          </Link>
                        }
                      </a>
                    </div>
                    {/*navbar link sections */}

                    <div className="nav-link-wrapper col-8 ">
                      {/*  3 line menu bar  */}
                      <div
                        className="mobileMenu"
                        onClick={(e) => this.myFunction(e)}
                      >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                      </div>

                      <nav className="nav-area" id="myLinks">
                        <ul className="firstul">
                          <li>
                            <Link href="/">
                              <a>HOME</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>ABOUT US</a>
                            </Link>
                          </li>

                          <li>
                            <Link href="">
                              <a>SOLUTIONS</a>
                            </Link>

                            {/*drop down menu items */}
                            <ul>
                              <li>
                                <Link href="/solutions/ExecutiveSearch">
                                  <a>Executive Search</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>flexi Staffing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>It Staff Augmentation</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Proffesional Seacrh</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Recruit Outsorcing</a>
                                </Link>
                              </li>
                            </ul>
                            {/* drop down ends*/}
                          </li>
                          <li>
                            <Link href="">
                              <a>iNDUSTRY FOCUS</a>
                            </Link>
                            {/*drop down starts */}
                            <ul>
                              <li>
                                <Link href="">
                                  <a>AI and Robotics</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Fintech & Insurance</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Communication & IT</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Government</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Health care & Life Sciences</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Industrial & Manufacturing</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Renewable Energy</a>
                                </Link>
                              </li>
                            </ul>
                            {/*drop down ends */}
                          </li>
                          <li>
                            <Link href="/jobs">
                              <a>JOBS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/thoughtleadership">
                              <a>THOUGHT LEADERSHIP</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              <a>CONTACT</a>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/*  styling starts  */}
                  <style jsx>{`
           {
            .nav-area:after {
              content: "";
              clear: both;
              display: block;
            }

            .nav-area > ul > li {
              float: left;
              position: relative;
            }
            .nav-area ul ul li {
              margin: 5%;
            }
            .nav-area ul ul {
              position: absolute;
              padding: 0;
              /*min-width:160px;*/
              width: 300px;
              height: 500px;
              display: none;
              top: 100%;
              left: 0;
              background-color: white;
            }
            .nav-area ul ul a {
              color: black;
            }
            ul {
              float: left;

              list-style: none;
            }
            a {
              color: ${this.props.color};

              text-transform: capitalize;
            }
            li {
              float: left;
              margin: 30px;
              font-family: Roboto;
              font-size: 15px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 2.3;
              letter-spacing: 2.7px;
              text-align: left;
              color: #ffffff;
            }
            .logo {
              padding-top: 4%;
            }
             {
               {
                /* for showing drop downs when hover over the main menu */
              }
            }
            .nav-area ul li:hover > ul {
              display: block;
            }

            .nav-area ul li a:hover,
            .nav-area ul li a:active {
              border-bottom: solid 3px #ff6139;
              color: #ff6139;
              animation: fadeIn ease 20s;
            }

            
             {
               {
                /*RESPONSIVE CSS   */
              }
            }

            @media only screen and (min-width: 1806px) and (max-width: 1855px) {
              /* Styles */

              .firstul {
                padding-left: 0%;
              }
            }

            @media only screen and (min-width: 1754px) and (max-width: 1806px) {
              /* Styles */

              .firstul {
                padding-left: 0%;
              }

              .firstul li {
                margin-left: 0;
              }
            }

            @media only screen and (min-width: 1645px) and (max-width: 1754px) {
              /* Styles */

              .firstul {
                padding-left: 0;
                margin-left: -97px;
              }
            }

            @media only screen and (min-width: 1598px) and (max-width: 1645px) {
              /* Styles */

              .firstul {
                padding-left: 0px;
                margin-left: -13%;
              }
              .logo {
                padding-top: 4%;
                margin-left: -20%;
              }
            }

            @media only screen and (min-width: 1420px) and (max-width: 1597px) {
              /* Styles */

              .firstul {
                margin-left: -27%;
              }
              .logo-wrapper a {
                margin-left: -43%;
              }
            }

            @media only screen and (min-width: 1398px) and (max-width: 1420px) {
              /* Styles */

              .firstul {
                margin-left: -29%;
              }
              .logo-wrapper a {
                margin-left: -40%;
              }
            }

            

            
        `}</style>

                  <style jsx global>
                    {`
          {
  
  
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
            .row {
       --bs-gutter-x: 0; 
      --bs-gutter-y: 0;}
      
      
      
      `}
                  </style>
                </>
              )}
            </>
          )}
        </Media>
        {/*  row start */}
      </div>
    );
  }
}
