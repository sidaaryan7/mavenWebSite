import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="h-main">
      <NavBar />

      {/*red color div below nav bar */}
      <div className="row header-red">
        <div className="col-6">
          <div className="text-1">
            <p>EXPERT SINCE 1997</p>
          </div>

          <div className="text-2">
            <p>We Deliver a Meaningful Hr Experience.</p>
          </div>
        </div>
        <div class="col-6  justify-content-center">
          <div className="row">
            <div className="col ">
              <div className="text-3">
                <p>
                  A passionate team of good people is working round the clock in
                  Making an indelible mark in the world of Staffing and Talent
                  Acquisition industry by providing efficient solutions. Since
                  its inception in 2008, Maven Workforce has come across a long
                  way and has become a global leader in Staffing and Talent
                  Acquisition industry. From small to medium to enterprise
                  level, Maven has been advising clients globally for Talent
                  Search and acquisition by identifying ideal talent who aid in
                  giving companies a competitive edge.
                </p>
              </div>

              <div className="text-4">
                <p>Know More</p>

                <div className="text-4-img">
                  <Image
                    src="/images/arrow.svg"
                    layout="fixed"
                    width={35}
                    height={30}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="text-5">
                <p>Scroll To Discover</p>
                <div className="text-5-img">
                  <Image
                    src="/images/blackarrow.svg"
                    layout="fixed"
                    width={100}
                    height={50}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*inlinie stylin*/}
      <style jsx>
        {`.h-main{
          background-Image:url("/images/MaskGroup.png");
          background-size:100%;
          
          height:966px;

          
          object-fit:cover;
          
          
    
        }
          
          
          
          
          .header-red {
            background-color: rgba(255,97,57);
            width: 90%;
            height:400px;
            margin-top: 440px;
            

          }
          .text-1{
              margin-left:190px;
          }
          .text-1 p {
            width: 153px;
            height: 11px;
            margin: 41.5px 317px 13px 0;
            opacity: 0.75;
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
          .text-2{
            width: 267px;
           height: 145px;
           margin: 13px 203px 54.5px 0;
           font-family: Poppins;
            font-size: 38px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.21;
             letter-spacing: normal;
            text-align: left;
            color: #ffffff;
        margin-left:190px;
          }
        .text-3{
           
            width: 253px;
            height: 119px;
            margin: 41.5px 0 22px 50px;
            font-family: Roboto;
            font-size: 13px;
            font-weight: normal;
             font-stretch: normal;
            font-style: normal;
            line-height: 1.85;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
            /*margin-left: 900px;*/
           /* margin-top: -225px;*/
        }
        
        .text-4{

   
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-left: 51px;
    margin-top: 200px;
    
} 

.text-4-img{
  margin-left:100px;
  margin-top: -40px;
}
.text-5{
  width: 303px;
  height: 266px;
  margin: 123px 0 0;
  padding: 87px 32px 0 52px;
  object-fit: contain;
  background-color: #ffffff;
  margin-left: 543px;
  height:400px;
  margin-top: -390px;

}
.text2 p{
  
}
        }
        `}
      </style>
    </div>
  );
}
