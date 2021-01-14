import React, { useEffect } from 'react';
import { InputSection } from '../../../components/Chat/InputSection';
import { ChatSection } from '../../../components/Chat/ChatSection';
import { titles } from '../../../components/Constants/Titles';
import './styles.css';

export const ChatContent = () => {
  useEffect(() => {
    document.title = `${titles.serviceName} - ${titles.chat}`;
  });
  
  return (
    <div>
      <InputSection />
      <ChatSection />
    </div>
  );
};