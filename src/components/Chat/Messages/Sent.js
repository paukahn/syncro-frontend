import React from 'react';

export const Sent = ({message, time}) => (
  <div className="message-container-send">
    <div id="message-status" />
    <div className="sent-message">
      <div className="text">{message}</div>
      <div className="date">{time}</div>
    </div>
  </div>
);
