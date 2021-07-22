import React from 'react';
import { ReactComponent as Send } from '../svg/send.svg';
import { ReactComponent as Smile } from '../svg/smile.svg';
import { ReactComponent as Paperclip } from '../svg/paperclip.svg';
import '../css/Chat.css';

export const Chat = () => {
    return (
        <div class="chat">
            <div class="chat_header_section">Header</div>
            <div class="chat_body_section">
                <div class="chat_body_wrap">
                    <div class="">1</div>
                    <div class="">2</div>
                    <div class="">3</div>
                </div>
            </div>
            <div class="chat_input_section">
                <div class="input_element" contenteditable="true" placeholder="Написать сообщение..."></div>
                <div className="input_buttons">
                    <Paperclip class="files_button" />
                    <Smile class="smile_button" />
                    <Send class="send_button" />
                </div>
            </div>
        </div>
    );
};