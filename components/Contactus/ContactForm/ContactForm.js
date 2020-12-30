import React from "react";

export default function ContactForm() {
  return (
    <div className=" main">
      <div className="row">
        <div className="col-6  justify-content-center">
          <p className="t-1">
            <span>Some line for this </span>
            Area to make it awesome
          </p>

          <p className="t-2">
            A passionate team of good people is working round the clock in
            Making an indelible mark in the world of Staffing and Talent
            Acquisition industry by providing efficient solutions.
          </p>
          <p className="t-3">
            Since its inception in 2008, Maven Workforce has come across a long
            way and has become a global leader in Staffing and Talent
            Acquisition industry. From small to medium to enterprise level,
            Maven has been advising clients globally for Talent Search and
            acquisition by identifying ideal talent who aid in giving companies
            a competitive edge.
          </p>
        </div>
        <div className="col-6 justify-content-center">
          <div>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
              <label>Phone No.</label>
              <input type="text" placeholder="Phone No."></input>
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main {
          width: 100%;
          height: 900px;
          margin: 0 0 0;
          padding: 128px 206px 128px 161px;
          background-color: #202940;
        }
        p {
          color: white;
        }
        .t-1 {
          width: 45%;
          height: 145px;
          margin: 0 214px 33px 0;
          font-family: Poppins;
          font-size: 38px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.21;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
        }
        .t-2 {
          width: 45%;
        }
        .t-3 {
          width: 45%;
        }
        span {
          color: #ff6139;
        }
        input,
        textarea {
          display: block;
          width: 500px;
          height: 50px;
          margin: 0 0 20px;
          border: solid 1px #ffffff;
          background-color: #202940;
          color:white;
          text-align:left;
        }
        textarea{
            display: block;
          width: 500px;
          height: 160px;
          margin: 0 0 20px;
          border: solid 1px #ffffff;
          background-color: #202940;
        }
        input[type=submit]{
            width: 500px;
  height: 85px;
  margin: 31px 0 0;
  padding: 31px 34.8px 32px 35px;
        }
        }
      `}</style>
    </div>
  );
}
