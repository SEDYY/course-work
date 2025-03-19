import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +7 (978) 685-47-14</p>
          <p>Email: info@techparts.ru</p>
        </div>
        <div className="footer-section">
          <h3>Мы в соцсетях</h3>
          <p>VK</p>
          <p>Telegram</p>
        </div>
        <div className="footer-section">
          <h3>Адрес</h3>
          <p>г. Севастополь, Пр-кт Генерала Острякова д.92, 1 этаж.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;