import { Link } from 'react-router-dom';

const MainLink = ({ path, text, textColor }) => {
  return (
    <Link to={path} className={`${textColor}`}>
      {text}
    </Link>
  );
};

export default MainLink;
