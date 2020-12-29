import React from "react";

export default function AboutBlueComponent({ title, content }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-left">
          <p>{title}</p>
        </div>
      </div>
      <div className="row">
        <div classNam="col d-flex justify-content-center">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
