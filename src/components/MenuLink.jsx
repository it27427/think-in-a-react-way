import { NavLink } from 'react-router-dom';

const MenuLink = ({ linkPath, linkText }) => {
  return (
    <>
      <NavLink to={linkPath}>{linkText}</NavLink>
    </>
  );
};

export default MenuLink;
