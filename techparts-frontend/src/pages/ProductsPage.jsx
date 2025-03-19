import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard'; // Компонент карточки товара
import products from '../data/products.json'; // Данные о товарах

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      <Header />
      <h1>Все товары</h1>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;