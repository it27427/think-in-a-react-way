import Footer from '@/components/Footer';
import Header from '@/components/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <div className='container py-3 px-6 lg:px-10'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
