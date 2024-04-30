import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='bg-slate-100 sticky top-0 z-20 shadow-lg'>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
