import { Link } from 'react-router-dom';

const MainLink = ({ path, text, classes }) => {
  return (
    <Link to={path} className={`${classes}`}>
      {text}
    </Link>
  );
};

export default MainLink;
