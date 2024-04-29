import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// IMPORT-PAGES
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ErrorPage from '@/pages/ErrorPage';
import FaqPage from '@/pages/FaqPage';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import BlogsPage from './pages/BlogsPage';

// IMPORT-COMPONENTS

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
