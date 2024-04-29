import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// IMPORT-PAGES
import AboutPage from '@/pages/AboutPage';
import BlogsPage from '@/pages/BlogsPage';
import ContactPage from '@/pages/ContactPage';
import ErrorPage from '@/pages/ErrorPage';
import FaqPage from '@/pages/FaqPage';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';

// AUTH
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';

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

          {/* AUTHENTICATION-PAGES */}
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
