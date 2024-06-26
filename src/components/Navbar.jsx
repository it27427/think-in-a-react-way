import Logo from './Logo';
import MainList from './MainList';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-3 px-6 lg:px-10 h-16'>
      <Logo linkPath='/' />

      <div className='hidden md:flex'>
        <MainList />
      </div>
    </nav>
  );
};

export default Navbar;
