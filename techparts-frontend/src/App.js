import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import ConfiguratorPage from './pages/ConfiguratorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
      </Routes>
    </Router>
  );
}

export default App;