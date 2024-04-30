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

// TERMS AND PRIVACY-POLICY
import PrivacyPolicyPage from '@/pages/policy/PrivacyPolicyPage';
import TermsConditionsPage from '@/pages/policy/TermsConditionsPage';

// COMPONENTS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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

          {/* TERMS-AND-PRIVACY PAGES */}
          <Route path='/terms' element={<TermsConditionsPage />} />
          <Route path='/privary-policy' element={<PrivacyPolicyPage />} />

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
