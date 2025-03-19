import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ConfiguratorPage = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);

  return (
    <div>
      <Header />
      <h1>Конфигуратор ПК</h1>
      <div>
        {/* Здесь будет форма выбора компонентов */}
      </div>
      <Footer />
    </div>
  );
};

export default ConfiguratorPage;