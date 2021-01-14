import React from 'react';
import { Received } from './Messages/Recieved';
import { Sent } from './Messages/Sent';
import json from '../Constants/Temp/Messages.json';

export const ChatSection = () => { // {messagesObj, receiverID}

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  // TODO: Убрать заглушку
  const messageData = () => (
      json.map((value, index) => {
        const sender = Object.keys(value)[0];
        const receiver = Object.keys(value)[1];
        if (value[sender] === "0" && value[receiver] === "1") return <Sent key={index} message={value.message} time={getTime()} />;
        if (value[sender] === "1" && value[receiver] === "0") return <Received key={index} message={value.message} time={getTime()} />;
        return null;
      })
  );

  return (
    <div id="chat-window">
      { messageData() }
    </div>
  );
};

