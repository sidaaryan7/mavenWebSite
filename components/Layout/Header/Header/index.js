import React, { useState, useEffect } from "react";
import Media from "react-media";

import NavBar from "../NavBar/index";

import HomePageText from "../../../HomePageText/index";

{
  /* PROPS FOR NAVNBAR LOGO IMAGE*/
}
const imgSrc = require("/home/maven/aaa/public/images/Logo.png");

export default function Header() {
  {
    /*  state for keeping track of white section and chatbot */
  }

  useEffect(() => {});

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
            {/* LAYOUT FOR SMALL DEVICES START */}
            {matches.small && (
              <>
                <div className="row">
                  <div className="col-12 header">
                    {/* Navbar section  */}

                    <NavBar color={"white"} logosrc={imgSrc} />

                    {/*  orange & white text section  */}

                    <div className="text-banner-section">
                      <HomePageText />
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`
                     {
                      .header {
                        background-image: radial-gradient(
                            rgba(255, 255, 255, -0.15),
                            rgba(0, 0, 0, 0.9)
                          ),
                          url("images/MaskGroup.png");
                        background-repeat: no-repeat;

                        background-size: 100%;

                        object-fit: cover;
                        width: 100%;
                        height: 272px;
                        padding: 24.1px 15.5px 77px 16px;
                        object-fit: contain;
                      }
                      .text-banner-section {
                        width: 93%;
                        /* margin-top: 24.5%; */
                        /* margin: 25% auto; */
                        margin: 18% auto 0;
                      }
                    }
                  `}
                </style>
              </>
            )}

            {/* LAYOUT FOR SMALL DEVICES ENDS */}

            {/* LAYOUT FOR MEDIUM DEVICES START */}

            {matches.medium && (
              <>
                {/* row start */}
                <div className="row">
                  {/* Navbar section  */}
                  <div className="col-12 header">
                    <NavBar color={"white"} logosrc={imgSrc} />

                    {/*  orange & white text section  */}

                    <div className="text-banner-section">
                      <HomePageText />
                    </div>
                  </div>
                </div>

                {/* row end */}
                <style jsx>
                  {`
                  {
                   .header {
                     background-image: radial-gradient(
                         rgba(255, 255, 255, -0.15),
                         rgba(0, 0, 0, 0.9)
                       ),
                       url("images/MaskGroup.png");
                     background-repeat: no-repeat;
                      
                     background-size: 100%;
                     height: 610px;
                     object-fit: cover;
                   }
                 
                   .text-banner-section {
                     width: 80%;
                     margin-top: 24.5%;
                   }
                   
                 
                   
                 
                 
                      {/* RESPONSIVE CSS */}
                 
                      @media screen 
                        and (min-width: 1560px) 
                        and (max-width: 1812px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:30%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width: 1529px) 
                        and (max-width: 1560px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:31%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width: 1497px) 
                        and (max-width: 1529px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:31.5%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width:1455px ) 
                        and (max-width: 1497px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:32.5%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width: 1421px) 
                        and (max-width: 1455px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:33.5%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width: 1398px) 
                        and (max-width: 1421px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:34.5%;
                          }
                        
                      }
                    
                      @media screen 
                        and (min-width: 1371px) 
                        and (max-width: 1398px) 
                        and (-webkit-min-device-pixel-ratio: 1) { 
                          .text-banner-section{
                            margin-top:27.5%;
                          }
                        
                      }
                    
                    
                  `}
                </style>
              </>
            )}

            {/* LAYOUT FOR MEDIUM DEVICES ENDS */}

            {/* LAYOUT FOR LARGE DEVICES START */}

            {matches.large && (
              <>
                {/* row start */}
                <div className="row">
                  {/* Navbar section  */}
                  <div className="col-12 header">
                    <NavBar color={"white"} logosrc={imgSrc} />

                    {/*  orange & white text section  */}

                    <div className="text-banner-section">
                      <HomePageText />
                    </div>
                  </div>
                </div>

                {/* row end */}
                <style jsx>
                  {`
                    {
                     .header {
                       background-image: radial-gradient(
                           rgba(255, 255, 255, -0.15),
                           rgba(0, 0, 0, 0.9)
                         ),
                         url("images/MaskGroup.png");
                       background-repeat: no-repeat;
                        
                       background-size: 100%;
                       height: 966px;
                       object-fit: cover;
                     }
                   
                     .text-banner-section {
                       width: 80%;
                       margin-top: 24.5%;
                     }
                     
                   
                     
                   
                   
                        {/* RESPONSIVE CSS */}

                        @media screen 
                          and (min-width: 1560px) 
                          and (max-width: 1812px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:30%;
                            }
                          
                        }

                        @media screen 
                          and (min-width: 1529px) 
                          and (max-width: 1560px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:31%;
                            }
                          
                        }

                        @media screen 
                          and (min-width: 1497px) 
                          and (max-width: 1529px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:31.5%;
                            }
                          
                        }

                        @media screen 
                          and (min-width:1455px ) 
                          and (max-width: 1497px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:32.5%;
                            }
                          
                        }

                        @media screen 
                          and (min-width: 1421px) 
                          and (max-width: 1455px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:33.5%;
                            }
                          
                        }

                        @media screen 
                          and (min-width: 1398px) 
                          and (max-width: 1421px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:34.5%;
                            }
                          
                        }

                        @media screen 
                          and (min-width: 1371px) 
                          and (max-width: 1398px) 
                          and (-webkit-min-device-pixel-ratio: 1) { 
                            .text-banner-section{
                              margin-top:27.5%;
                            }
                          
                        }


                    `}
                </style>
              </>
            )}
            {/* LAYOUT FOR LARGE DEVICES ENDS */}
          </>
        )}
      </Media>
    </>
  );
}
