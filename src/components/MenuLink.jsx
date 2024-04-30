import { NavLink } from 'react-router-dom';

const MenuLink = ({ linkPath, linkText }) => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'active text-cyan-700 font-semibold inline-block p-2'
      : 'text-black inline-block p-2 transition hover:text-cyan-700 font-semibold';

  return (
    <>
      <NavLink to={linkPath} className={linkClasses}>
        {linkText}
      </NavLink>
    </>
  );
};

export default MenuLink;
