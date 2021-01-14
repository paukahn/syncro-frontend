import React from 'react';

export const LSidebar = () => {
    const i = 5;
    return (
      <div id="sidebar">
        <div id="information">
          <div className="avatar" />
          <div className="name">ScreaMacOSX</div>
          <div id="status-info">
            <div className="status" />
            <div className="info">online</div>
          </div>
          <div className="name" title="Васерпастельян Детермомультиевкакьевич">
            Васерпастельян Детермомультиевкакьевич
          </div>
          <div id="credo">
            I like fresww www www wwww ww wwwww www www wwww www w wwwwww wwwwww wwww wwwwwww of this fucking world
          </div>
          <ul id="contact-ul">
            <li className="contact">Россия, Мухосранск</li>
            <li className="contact">+7(962)485-07-64</li>
            <li className="contact">aaaa555555aaa@bbbbbb555555bbbbb.com</li>
          </ul>
        </div>
      </div>
    );
};