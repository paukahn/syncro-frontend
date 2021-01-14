import React, { useEffect } from 'react';
import './styles.css';
import { titles } from '../Constants/Titles';

export const SettingsList = () => {
  useEffect(() => {
    document.title = `${titles.serviceName} - ${titles.settings}`;
  });

  return (
    <div id="">
      <h1>Страница настроек</h1>
    </div>
  );
};