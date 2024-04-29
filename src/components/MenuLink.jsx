import { NavLink } from 'react-router-dom';

const MenuLink = ({ linkPath, linkText }) => {
  const activeClass = (isActive) => (isActive ? 'active' : '');

  return (
    <>
      <NavLink to={linkPath} className={activeClass}>
        {linkText}
      </NavLink>
    </>
  );
};

export default MenuLink;
