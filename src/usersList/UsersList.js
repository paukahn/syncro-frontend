import React from 'react';
import '../css/UserList.css';

export const UsersList = () => {
    return (
        <div class="info_list_users">
            <div class="list_element">
                <div class="list_element_wrap">
                    <div class="element_image"></div>
                    <div class="right_wrap">
                        <div class="up_wrap">
                            <div class="element_user">Мухолов Ван Хельсинг</div>
                            <div class="element_time">20:04</div>
                        </div>
                        <p class="element_message">From: Нормальный вариант</p>
                    </div>
                </div>
            </div>

            <div class="list_element">
                <div class="list_element_wrap">
                    <div class="element_image"></div>
                    <div class="right_wrap">
                        <div class="up_wrap">
                            <div class="element_user">Борис Леонидович Качерговский</div>
                            <div class="element_time">00:01</div>
                        </div>
                        <p class="element_message">To: Длинное имя</p>
                    </div>
                </div>
            </div>

            <div class="list_element">
                <div class="list_element_wrap">
                    <div class="element_image"></div>
                    <div class="right_wrap">
                        <div class="up_wrap">
                            <div class="element_user">Денис Денисов</div>
                            <div class="element_time">15:30</div>
                        </div>
                        <p class="element_message">To: Очень длинный текст, который нифига не помещается</p>
                    </div>
                </div>
            </div>
        </div>
    );
};