import { NavLink } from 'react-router-dom';

const MenuLink = ({ linkPath, linkText }) => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'active text-teal-300 font-semibold inline-block p-2'
      : 'text-white inline-block p-2';

  return (
    <>
      <NavLink to={linkPath} className={linkClasses}>
        {linkText}
      </NavLink>
    </>
  );
};

export default MenuLink;
