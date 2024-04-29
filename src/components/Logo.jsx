import logo from '@/assets/images/logo/react.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ linkPath, logoText = 'ReactBlog' }) => {
  return (
    <Link to={linkPath} className='flex items-center gap-2'>
      <img src={logo} alt='brand-logo' width={40} height={40} />
      <span className='text-slate-100 font-bold uppercase'>{logoText}</span>
    </Link>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string,
};

export default Logo;
