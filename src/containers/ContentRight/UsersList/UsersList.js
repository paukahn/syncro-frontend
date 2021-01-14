import React, { useEffect } from 'react';
import { UserItem } from '../../../components/User/UserItem';
import './styles.css';
import json from '../../../components/Constants/Temp/Users.json';
import { titles } from '../../../components/Constants/Titles';

export const UsersList = () => {
  const [searchStr, setSearchStr] = React.useState('');

  useEffect(() => {
    document.title = `${titles.serviceName} - ${titles.users}`;
  });

  const getName = (obj) => {
    const {firstname} = obj;
    const {lastname} = obj;
    const {secondname} = obj;
    return `${lastname} ${firstname} ${secondname}`;
  };

  // TODO: Найти другое решение (map)
  const usersData = () => json.map((value) => {
    const {id} = value;
    const fullName = getName(value);
    const item = <UserItem key={id} name={fullName} userID={id} />;

    // TODO: Добавить Debounce
    if (fullName.indexOf(searchStr) !== -1)
      return item;
    
    return null;
  });

  return (
    <div id="users">
      <input type="text" onChange={(e) => setSearchStr(e.target.value)} id="search-users" placeholder="Поиск людей..." />
      {usersData()}
    </div>
  );
};