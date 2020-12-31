import React from "react";
import NavBar from "../../components/Layout/Header/NavBar/NavBar";

export default function ExecutiveSeacrh() {
  return (
    <>
      <div className="row">
        <div className="col header">
          <NavBar />
        </div>
      </div>
      <div className="row ex-search">
        <div className="col">
          <p>
            Executive <span>Search</span>
          </p>
        </div>
      </div>

      <div className="chatbot">
        <input type="image" src="/images/chatbot.svg" />
      </div>

      <div className="row white-section">
        <div className="col-10">
          <div className="row white-section-row1">
            <div className="col-9">
              <p className="white-section-p1">
                EXECUTIVE SEARCH FIRM AND EXECUTIVE RECRUITING CONSULTANTS INDIA
                .
              </p>
            </div>
            <div className="col-3">
              <p className="white-section-p2">Scroll to discover</p>
              <div className="blackarrow">
                <input type="image" src="/images/blackarrow.svg" />
              </div>
            </div>
          </div>

          <div className="row textbox1">
            <div className="col">
              <p className="textbox-common white-section-p3">
                Simplify and accelerate your quest to find the top talent with
                our most corroborated search approach. We know how the result
                oriented top leadership can be the most strategic asset for any
                organization and that is why we provide high-quality, executive
                search services which focuses on the combined power of
                innovative and thorough research. With our honed judgement,
                understanding and experience of a wide range of sectors and
                functions, we integrate dynamic research with practical
                knowledge along with industry/functional expertise to identify
                and recruit talent for leadership positions.
              </p>
              <p className="textbox-common white-section-p4">
                Our Executive Search is primarily focused on top and cream level
                leadership hiring. Our goal is to deliver value to each client
                and to help you attract top talent so as to build adaptive,
                diverse people organizations that are prepared to fulfil
                strategic business objectives. Our executive recruiting
                consultants possess the expertise and contacts to best support
                our search. We draw on our high-level professional networks,
                industry knowledge and internal research resources to identify
                the right people. To stay on the cutting edge of talent
                strategy, we constantly track key trends in the global market
                for talent, and continually innovate our services and approach.
                We represent you professionally to candidates; the whole process
                ensuring confidentiality, time bound efficiency and cost
                effectiveness. We ensure that the results are swift, sure and
                outstanding, as it is witnessed through our client portfolio and
                success record. Given the highly intensive research led
                operations to our executive search model and a personalized
                candidate contact approach, we have demonstrated consistent
                results across Multinational, Transnational, start-up, complex
                and even unique or novel talent requirement demands, specific to
                each client organization. We have successfully closed senior
                level searches for CEOs, CFOs, CMOs, Business Heads and VOs for
                various consumer, services, internet, retail and start up
                companies across India.
              </p>
            </div>
          </div>

          <div className="row icon-row">
            <div className="col">
              <div className="box-common box-1"></div>
            </div>
            <div className="col ">
              <div className="box-common box-2"></div>
            </div>
            <div className="col ">
              <div className="box-common box-3"></div>
            </div>
          </div>

          <div className="row white-section-row4">
            <div className="col">
              <p className="textbox-common white-section-p5">
                We represent you professionally to candidates; the whole process
                ensuring confidentiality, time bound efficiency and cost
                effectiveness. We ensure that the results are swift, sure and
                outstanding, as it is witnessed through our client portfolio and
                success record. Given the highly intensive research led
                operations to our executive search model and a personalized
                candidate contact approach, we have demonstrated consistent
                results across Multinational, Transnational, start-up, complex
                and even unique or novel talent requirement demands, specific to
                each client organization. We have successfully closed senior
                level searches for CEOs, CFOs, CMOs, Business Heads and VOs for
                various consumer, services, internet, retail and start up
                companies across India.
              </p>
            </div>
          </div>

          <div className="row">
            <div classNam="col">
              <p className="textbox-common white-section-p6">
                We represent you professionally to candidates; the whole process
                ensuring confidentiality, time bound efficiency and cost
                effectiveness. We ensure that the results are swift, sure and
                outstanding, as it is witnessed through our client portfolio and
                success record. Given the highly intensive research led
                operations to our executive search model and a personalized
                candidate contact approach, we have demonstrated consistent
                results across Multinational, Transnational, start-up, complex
                and even unique or novel talent requirement demands, specific to
                each client organization. We have successfully closed senior
                level searches for CEOs, CFOs, CMOs, Business Heads and VOs for
                various consumer, services, internet, retail and start up
                companies across India.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="exploremore-p">Explore More Solutions</p>
            </div>
          </div>

          <div className="row pic-box">
            <div className="col  pic-box1"></div>
            <div className="col  pic-box2"></div>
            <div className="col  pic-box3"></div>
          </div>

          <div className="row">
            <div className="col pic-text-box1">
              <p>Flexi Staffing</p>
            </div>
            <div className="col pic-text-box2">
              <p>IT Staff Augmentation</p>
            </div>
            <div className="col pic-text-box3">
              <p>Professional Search</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col blacksection"></div>
        </div>
      </div>
      <style jsx>
        {`
          .blacksection {
            background: black;
          }

           {
            .header {
              background-repeat: no-repeat;
              background-image: linear-gradient(
                  to bottom,
                  #000000,
                  rgba(0, 0, 0, 0.2) 58%,
                  rgba(0, 0, 0, 0.04) 71%,
                  rgba(0, 0, 0, 0.01) 81%,
                  rgba(0, 0, 0, 0) 89%
                ),
                url("/images/executivesearchbanner.png");
              background-repeat: no-repeat;

              background-size: 100%;
              height: 966px;
              object-fit: cover;
              z-index: -1;
            }
            .ex-search {
              margin-top: -30%;
              padding-left: 13%;
              color: #ffffff;
            }

            .ex-search p {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: left;
            }

            span {
              color: #ff6139;
            }
            .chatbot {
              width: 78px;
              height: 78px;
              margin: 360px 20px 21px 24.5px;
              padding: 11px;
              position: absolute;
              top: 493px;
              left: 1759px;
            }

            .textbox-common {
              font-family: Roboto;
              font-size: 13px;
              text-align: left;
              line-height: 24px;
            }
            .textbox1 {
              padding-right: 34%;
            }
            .white-section {
              border: 1px solid black;
              width: 90%;
              padding-left: 13%;
              margin-top: 2%;
              background-color: #ffffff;
            }
            .white-section-row1 {
              margin-top: 5%;
            }

            .white-section-row4 {
              padding-right: 34%;
            }
            .white-section-p1 {
              font-family: Poppins;
              font-size: 38px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.37;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .white-section-p2 {
              width: 70px;
              height: 42px;
              margin: 0 0 16.2px;
              font-family: Poppins;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.19;
              letter-spacing: normal;
              text-align: center;
              color: #ff6139;
              margin-left: 74%;
            }
            .blackarrow input {
              margin-left: 80%;
            }
            .white-section-p3 {
            }
            .white-section-p4 {
            }
            .white-section-p5 {
            }
            .white-section-p6 {
            }
            .box-common {
              width: 219px;
              height: 116px;
            }

            .box-1 {
              background-color: #ff6139;
            }
            .box-2 {
              background-color: #d0daf4;
            }

            .box-3 {
              background-color: #f4f4f4;
            }

            .exploremore-p {
              font-family: Poppins;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.19;
              letter-spacing: normal;
              text-align: left;
              color: #ff6139;
            }

            .pic-box1 {
              width: 273px;
              height: 144px;
              margin: 38px 40px 15px 39px;
              border: 1px solid black;
            }

            .pic-box2 {
              width: 273px;
              height: 144px;
              margin: 38px 40px 15px 39px;
              border: 1px solid black;
            }

            .pic-box3 {
              width: 272px;
              height: 144px;
              margin: 38px 0 15px 40px;
              border: 1px solid black;
            }

            .pic-text-box1 {
              width: 93px;
              height: 21px;
              margin: 15px 180px 0 0px;
              font-family: Poppins;
              font-size: 15px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 2;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }

            .pic-text-box2 {
              width: 162px;
              height: 21px;
              margin: 15px 28px 0 39px;
              font-family: Poppins;
              font-size: 15px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 2;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }
            .pic-text-box3 {
              width: 147px;
              height: 21px;
              margin: 15px 125px 0 40px;
              font-family: Poppins;
              font-size: 15px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 2;
              letter-spacing: normal;
              text-align: left;
              color: #000000;
            }
          }
        `}
      </style>
    </>
  );
}
