import React from "react";
import Image from "next/image";

export default function OurClient() {
  return (
    <div className="container">
      <div className="row top-buffer">
        <div className="col-3 ">
          <p>our client</p>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
      <div className="row  top-buffer border">
        <div className="col-3 justify-content-center ">
          <Image src="/images/TATA.jpg" height={64} width={137}></Image>
        </div>
        <div className="col-3  justify-content-center">
          <Image src="/images/cap_gemini.jpg" height={30} width={129}></Image>
        </div>
        <div className="col-3  justify-content-center">
          <Image src="/images/deloite.jpg" height={70} width={171}></Image>
        </div>
        <div className="col-3  justify-content-center">
          <Image src="/images/pwc.jpg" height={90} width={68}></Image>
        </div>
      </div>
      <div className="row top-buffer ">
        <div className="col-3  justify-content-center">
          <Image
            src="/images/public_sapient.jpg"
            height={50}
            width={100}
          ></Image>
        </div>
        <div className="col-3 justify-content-center">
          <Image src="/images/bristle.jpg" height={15} width={131}></Image>
        </div>
        <div className="col-3 justify-content-center">
          <Image src="/images/ibm.jpg" height={48} width={110}></Image>
        </div>
        <div className="col-3">
          <Image src="/images/macquire.jpg" height={30} width={144}></Image>
        </div>
      </div>
      <div className="row top-buffer ">
        <div className="col-3 justify-content-center">
          <Image src="/images/Bytedance.jpg" height={61} width={154}></Image>
        </div>
        <div className="col-3 justify-content-center">
          <Image src="/images/stanza.jpg" height={68} width={151}></Image>
        </div>
        <div className="col-3 justify-content-center">
          <Image
            src="/images/proptiger+250.jpg"
            height={110}
            width={110}
          ></Image>
        </div>
        <div className="col-3 justify-content-center">
          <Image src="/images/rambol.jpg" height={26} width={125}></Image>
        </div>
      </div>
      <style jsx>
        {`
          .top-buffer {
            margin-top: 50px;
            margin-bottom: 50px;
          }
          p {
            width: 88px;
            height: 23px;
            margin: 78.5px 124.5px 94px 86.5px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.19;
            letter-spacing: normal;
            text-align: center;
            color: #202940;
          }
        `}
      </style>
    </div>
  );
}
