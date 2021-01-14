import React from 'react';

export const Received = ({message, time}) => (
  <div className="message-container-receive">
    <div className="received-message">
      <div className="text">{message}</div>
      <div className="date">{time}</div>
    </div>
  </div>
  );