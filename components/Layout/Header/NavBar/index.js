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
      x.style.position = "absolute";
    }
  };

  myFunction = function (e) {
    e.target.classNameList.toggle("change");

    this.showingMenu();
  };

  componentDidMount() {}
  render() {
    return (
      <div className="">
        <Media
          queries={{
            small: "(max-width: 599px)",
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
                      <div className="toggle">
                        <a href="#">
                          <i className="fas fa-bars fa-2x"> </i>
                        </a>
                      </div>
                      {/* *}
                      <nav>
                        <ul className="menu">
                          <li className="item">
                            <a href="#">Home</a>
                          </li>
                          <li className="item">
                            <a href="#">About</a>
                          </li>
                          <li className="item has-submenu">
                            <a tabindex="0">SOLUTIONS</a>
                            <ul className="submenu">
                              <li className="subitem">
                                <a href="#">Executve search</a>
                              </li>
                              <li className="subitem">
                                <a href="#">Flexi Staffing</a>
                              </li>
                              <li className="subitem">
                                <a href="#">IT Staff Augmentation</a>
                              </li>
                              <li className="subitem">
                                <a href="#">Proffesional Search</a>
                              </li>
                              <li className="subitem">
                                <a href="#">Recruit Outsourcing</a>
                              </li>
                            </ul>
                          </li>
                          <li className="item has-submenu">
                            <a tabindex="0">Plans</a>
                            <ul className="submenu">
                              <li className="subitem">
                                <a href="#">Freelancer</a>
                              </li>
                              <li className="subitem">
                                <a href="#">Startup</a>
                              </li>
                              <li className="subitem">
                                <a href="#">Enterprise</a>
                              </li>
                            </ul>
                          </li>
                          <li className="item">
                            <a href="#">Blog</a>
                          </li>
                          <li className="item">
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </nav>
                      {*/}
                      <script></script>
                    </div>

                    <style jsx>{`
                       {
                        .toggle {
                          margin-left: 69%;
                          color: white;
                        }
                        .logo {
                          margin-left: 14%;
                        }
                      }
                    `}</style>
                  </div>
                </>
              )}
              {matches.medium && (
                <>
                  {/* layout for medium devices starts */}
                  <div className="row main">
                    {/*Logo section */}

                    <div className="col-4  logo-wrapper d-flex justify-content-center">
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
                      {/* menu icon 3 bar */}

                      <a href="#">
                        <i className="fas fa-bars fa-2x"> </i>
                      </a>

                      {/* menu icon 3 bar */}

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

            @media only screen and (min-width: 500px) and (max-width: 1200px) {
              /* Styles */

              #myLinks {
                  display: none;
                      }

                      .main{
                padding-top: 5%;
              }
              .fas {
                MARGIN-LEFT: 77%;
                MARGIN-TOP: 2%;
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

              {/* layout for medium device ends */}
              {matches.large && (
                <>
                  {/*layout for large devices starts */}
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


            @media only screen and (min-width: 1200px) and (max-width: 1397px) {
              /* Styles */
                .firstul{
                  margin-left: -19%;
                }

                .logo{
                  margin-left: -28%;
                  margin-top: 3%;
                }

                .firstul li{
                  margin-right: 0;
                  margin-left: 22px;
                }
              .fas{
                display:none
              }

                      

              
              
            }



            


            @media only screen and (min-width: 1397px) and (max-width: 1460px) {
              /* Styles */
                li{
                  margin-left:0
                }
                .firstul {
                   margin-left: -8%;
                }

                .logo{
                  margin-top: 2%;
                }

              
              
            }



            @media only screen and (min-width: 1460px) and (max-width: 1700px) {
              /* Styles */
                li{
                  margin-left: -7px;
                }
                .firstul {
                  margin-left: -11%;
                }

                .logo {
                  margin-left: -15%;
                  margin-top: 0.5%;
                }

              
              
            }


            @media only screen and (min-width: 1700px) and (max-width: 1803px) {
              /* Styles */
                li{
                  margin-right: 19px;
                  margin-left: 0;
                }
                .firstul {
                  margin-left: -16%;
                }

                .logo {
                  padding-top: 4%;
                  margin-left: -19%;
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
