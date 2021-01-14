import React from 'react';
import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';
import { ChatContent } from './Chat/ChatContent';
import { UsersList } from './UsersList/UsersList';
import { SettingsList } from '../../components/Settings/SettingsList';
import { Welcome } from '../../components/Welcome';

export const ContentRight = () => (
  <div id="panel">
    <div id="content">
      <Switch>
        <Route path="/logged" exact component={Welcome} />
        <Route path="/logged/chat" component={ChatContent} />
        <Route path="/logged/users" component={UsersList} />
        <Route path="/logged/settings" component={SettingsList} />
      </Switch>
    </div>
    <nav id="menu">
      <Link className="menu-item" to="/logged/chat">Сообщения</Link>
      <Link className="menu-item" to="/logged/users">Поиск людей</Link>
      <Link className="menu-item" to="/logged/friends">Друзья</Link>
      <Link className="menu-item" to="/logged/settings">Настройки</Link>
      <Link className="menu-item" to="/logged/logout">Выйти</Link>
    </nav>
  </div>
);
