import React from 'react';
import { SearchSection } from '../search/SearchSection';
import { UsersList } from '../usersList/UsersList';
import './PStyles.css';

export const Panel = () => {
    return (
        <div class="panel">
            <div class="panel_socials"></div>
            <div class="panel_info_list">
                <SearchSection />
                <UsersList />
            </div>
            <div class="panel_chat"></div>
        </div>
    );
};