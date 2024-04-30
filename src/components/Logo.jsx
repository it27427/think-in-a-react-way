import logo from '@/assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ linkPath }) => {
  return (
    <Link to={linkPath} className='flex items-center'>
      <img src={logo} alt='brand-logo' width={128} height={40} />
    </Link>
  );
};

export default Logo;
