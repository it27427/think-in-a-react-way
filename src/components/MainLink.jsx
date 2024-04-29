import { Link } from 'react-router-dom';

const MainLink = ({ path, text }) => {
  return <Link to={path}>{text}</Link>;
};

export default MainLink;
