import React from "react";

export default function AboutusMobileCard(props) {
  return (
    <>
      <div>
        <p className="p1">demo</p>
        <p className="p2">demo subtext</p>
        <style jsx>
          {`
             {
               .p1{
                width: 276px;
                
                font-family: Poppins;
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.83;
                letter-spacing: normal;
                text-align: left;
                color: ${props.color}
}
               }
               .p2{
                 
                width: 304px;
                
                
                font-family: Roboto;
                font-size: 13px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.85;
                letter-spacing: normal;
                text-align: left;
                color: ${props.color};
               }
            }
          `}
        </style>
      </div>
    </>
  );
}
