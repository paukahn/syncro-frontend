import React from 'react';
import { Chat } from '../chat/Chat';
import { SearchSection } from '../search/SearchSection';
import { UsersList } from '../usersList/UsersList';
import '../css/Panel.css';

export const Panel = () => {
    return (
        <div class="panel">
            <div class="panel_socials"></div>
            <div class="panel_info_list">
                <SearchSection />
                <UsersList />
            </div>
            <div class="panel_chat">
                <Chat />
            </div>
        </div>
    );
};