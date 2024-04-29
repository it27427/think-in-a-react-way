import { Link } from 'react-router-dom';
import logo from '';

const Logo = ({ linkpath }) => {
  return <Link to={linkpath}>Think in React</Link>;
};

Logo.defaultProps = {
  logoText: 'Think in React',
};

export default Logo;
