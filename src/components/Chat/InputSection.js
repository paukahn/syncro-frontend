import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export const InputSection = () => (
  <div id="input-section">
    <div id="input-menu" />
    <TextareaAutosize id="input-message" placeholder="Начните вводить ваше сообщение..." />
  </div>
);
