import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactsPage = () => {
  return (
    <div>
      <Header />
      <section className="contacts-section">
        <h2>Наши контакты</h2>
        <p>Телефон: +7 (978) 685-47-14</p>
        <p>Email: info@techparts.ru</p>
      </section>
      <Footer />
    </div>
  );
};

export default ContactsPage;