import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({ id }) {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          <a className="logo">
            <Link href="/mainHome">
              <Image
                className="logo-image"
                src="/images/Logo.png"
                layout="fixed"
                width={130}
                height={35}
              ></Image>
            </Link>
          </a>
        </div>
        <div className="col-8 d-flex  justify-content-center">
          <nav className="nav-area">
            <ul>
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
              </li>
              <li>
                <Link href="">
                  <a>iNDUSTRY FOCUS</a>
                </Link>
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
              </li>
              <li>
                <Link href="">
                  <a>JOBS</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>THOUGHT LEADERSHIP</a>
                </Link>
              </li>
              <li>
                <Link href="contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/*navbar*/}
      <nav className="navbar">
        {/*navlogo image*/}
        <div className="logowrapper"></div>
        {/*navbar link*/}
      </nav>

      <style jsx>{`
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
          color: white;

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

        .nav-area ul li:hover > ul {
          display: block;
        }
        .nav-area ul li a:active,
        .nav-area ul li a:hover {
          border-bottom: solid 3px red;
        }
      `}</style>
    </div>
  );
}
