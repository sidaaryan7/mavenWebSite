import React from "react";

export default function ChatBot({ sethidden }) {
  return (
    <div>
      <div className="maindiv">
        <div className="header">
          <div>icon</div>
          <p className="header-p1">Myra</p>
          <p className="header-p2">Maven's Virtual Assistance</p>
          <button
            onClick={() => {
              sethidden("true");
            }}
          >
            cross
          </button>
        </div>
        <div className="chat">
          <p className="chat-p1">Hi I Am Myra</p>
          <p className="chat-p2">Please tell me how can I help you today?</p>
        </div>
        <div className="optionbox">
          <div className="box-1">
            <p>Looking for job</p>
          </div>
          <div className="box-2">
            <p>Looking for job</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
           {

            .maindiv{
              background:white;
              position: relative;
              bottom: 200px;
              transition: bottom  linear;
            }


            .header {
              
              height: 59px;
              margin: 0 0 26px;
              padding: 5px 5px 15px 23.8px;
              border-radius: 14px;
              background-color: #202940;
            }

            .header-p1 {
              
              font-family: Poppins;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 0.95;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              margin-top: -2%;
            }
            .header-p2 {
              width: 68px;
              height: 24px;
              margin: 13px 72px 2px 14px;
              opacity: 0.51;
              font-family: Roboto;
              font-size: 10px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.3;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
              position: relative;
              bottom: 115%;
              left: 25%;
            }
            button{
              position: relative;
              bottom: 177%;
              left: 82%;
            }
            .chat{
              width: 260.5px;
              height: 89px;
              margin: 0 0 15px;
              padding: 13px 56px 14px 28.5px;
              background-color: #ebebeb;
}
            }

            .chat-p1 {
              width: 107px;
              height: 24px;
              margin: 0 69px 5px 0;
              font-family: Poppins;
              font-size: 17px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 0.65;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }
            .chat-p2 {
              width: 176px;
              height: 33px;
              margin: 5px 0 0;
              font-family: Roboto;
              font-size: 13px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.38;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }
            .box-1{
              width: 122px;
              height: 39px;
              margin: 15px 9px 0 8.5px;
              padding: 11px 14px;
              border-radius: 5px;
              background-color: #ff6139;
              display: inline-block;
              
}
            }

            .box-1 p{
              width: 94px;
              height: 17px;
              font-family: Poppins;
              font-size: 12px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 0.92;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
            .box-2{
              width: 121px;
              height: 39px;
              margin: 15px 0 0 9px;
              padding: 11px 15px;
              border-radius: 5px;
              background-color: #ff6139;
              display: inline-block;
}
            }

            .box-2 p{
              width: 94px;
              height: 17px;
              font-family: Poppins;
              font-size: 12px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 0.92;
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
