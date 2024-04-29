import logo from '@/assets/images/logoreact.svg';
import { Link } from 'react-router-dom';

const Logo = ({ linkpath }) => {
  return (
    <Link to={linkpath} className='flex items-center gap-1'>
      <img src={logo} alt='brand-logo' width={48} height={48} />
      {logoText}
    </Link>
  );
};

Logo.defaultProps = {
  logoText: 'Think in React',
};

export default Logo;
