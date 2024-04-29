import { NavLink } from 'react-router-dom';

const MenuLink = ({ linkPath, linkText }) => {
  const linkClasses = (isActive) => (isActive ? 'active' : '');

  return (
    <>
      <NavLink to={linkPath} className={linkClasses}>
        {linkText}
      </NavLink>
    </>
  );
};

export default MenuLink;
