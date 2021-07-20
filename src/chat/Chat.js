import React from 'react';
import Textarea from 'react-textarea-autosize';
import { ReactComponent as Send } from '../svg/send.svg';
import { ReactComponent as Smile } from '../svg/smile.svg';
import { ReactComponent as Paperclip } from '../svg/paperclip.svg';
import './CStyles.css';

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
                <Paperclip class="files_button" />
                <Smile class="smile_button" />
                <Textarea class="input_element" minRows="1" maxRows="5" placeholder="Написать сообщение..." />
                <Send class="send_button" />
            </div>
        </div>
    );
};