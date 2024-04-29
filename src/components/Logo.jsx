import logo from '@/assets/images/logo/react.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ linkPath, logoText }) => {
  return (
    <Link to={linkPath} className='flex items-center gap-1'>
      <img src={logo} alt='brand-logo' width={40} height={40} />
      {logoText}
    </Link>
  );
};

Logo.defaultProps = {
  logoText: 'ReactBlog',
};

Logo.propTypes = {
  logoText: PropTypes.string,
};

export default Logo;
