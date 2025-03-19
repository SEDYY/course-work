import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div>
          <h1>Собери свой идеальный компьютер</h1>
          <p>Более 10 000 комплектующих в наличии</p>
          <button className="btn">Подобрать сборку</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;