import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

export default function ChatBot() {
  return (
    <div className="main">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />

      <style jsx>
        {`
           {
            .main {
            }
          }
        `}
      </style>
    </div>
  );
}
