import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Copywritefooter from "../components/Layout/Footer/Copywritefooter";
import ContactForm from "../components/Contactus/ContactForm/ContactForm";

export default function contact() {
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <h1>header</h1>
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <ContactForm />
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          map
          <div>adresse</div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <Footer />
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <Copywritefooter />
        </div>
      </div>
      <style jsx>
        {`
          
          }
        `}
      </style>
    </div>
  );
}
