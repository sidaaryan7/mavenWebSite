import React from "react";

export default function AboutBlueComponent({ title, content }) {
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col d-flex justify-content-left">
          <p className="title">{title}</p>
        </div>
      </div>
      <div className="row">
        <div classNam="col d-flex justify-content-center ">
          <p className="content ">{content}</p>
        </div>
      </div>
      <style jsx>
        {`
           {
            
            .main{
              padding-left: 19%;
}


            }
            p {
              color: white;
            }
            .title {
              height: 53px;
              margin: 85px 223px 34px 0;
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

            .content {
              width: 1052px;
              height: 389px;
              margin: 34px 104px 0 0;
              opacity: 0.9;
              font-family: Roboto;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
          }
        `}
      </style>
    </div>
  );
}
