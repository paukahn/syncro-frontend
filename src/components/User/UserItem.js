import React from 'react';

export const UserItem = ({name, userID}) => {
  const openChat = () => {
    console.log(userID); // in dispatch
  };

  return (
    <div id="users-list-item">
      <div id="info-panel">
        <div id="list-avatar" />
        <span id="name">{name}</span>
      </div>
      <div id="controls-panel">
        <input id="write-button" type="button" onClick={() => openChat()} value="Написать сообщение" />
      </div>
    </div>
  );
};