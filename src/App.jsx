import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';
import ProductsPage from '@/pages/ProductsPage';
import ErrorPage from '@/pages/ErrorPage';

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
