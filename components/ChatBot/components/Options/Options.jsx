import React from "react";



const Options = (props) => {
  const options = [
    {
      text: "Looking for Job",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Looking for hire", handler: () => {}, id: 2 },
    
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button" style={{width: "122px",
      height: "39px",
      margin: "15px 9px 0 8.5px",
      padding: "11px 14px",
      "border-radius": "5px",
      "background-color": "#ff6139",
      "font-size": "11px",
      color: "white"}}>
      {option.text}
    </button>
  ));

  return (
  
  <div className="options-container">{buttonsMarkup}
  
  
  
  </div>);
};

export default Options;
