import React, { useEffect } from 'react';
import { titles } from './Constants/Titles';

export const Welcome = () => {
  useEffect(() => {
    document.title = `${titles.serviceName} - ${titles.welcome}`;
  });

  return <h1>Добро пожаловать! Слева выводится информация о зашедшем пользователе</h1>
};