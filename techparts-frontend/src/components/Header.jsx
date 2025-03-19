import React from 'react';
import { Link } from 'react-router-dom'; // Для навигации
import '../styles/Header.css'; // Импорт стилей

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/" className="header-logo">TechParts</Link>
        <div className="header-links">
          <Link to="/">Главная</Link>
          <Link to="/products">Товары</Link>
          <Link to="/configurator">Конфигуратор</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;