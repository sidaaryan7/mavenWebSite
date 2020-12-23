import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          <a className="logo">
            <Image
              className="logo-image"
              src="/images/Logo.png"
              layout="fixed"
              width={200}
              height={50}
            ></Image>
          </a>
        </div>
        <div className="col-8 d-flex justify-content-center">
          <ul>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="about">
                <a>ABOUT US</a>
              </Link>
            </li>

            <li>
              <Link href="">
                <a>SOLUTIONS</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>iNDUSTRY FOCUS</a>
              </Link>
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
              <Link href="">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*navbar*/}
      <nav className="navbar">
        {/*navlogo image*/}
        <div className="logowrapper"></div>
        {/*navbar link*/}
      </nav>

      <style jsx>{`
        ul {
          float: left;

          list-style: none;
        }
        a {
            color: white;}
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
          }
          .logo{
              padding-top:4%;
          }
      `}</style>
    </div>
  );
}
