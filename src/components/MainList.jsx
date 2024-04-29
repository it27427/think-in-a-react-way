import React from 'react';
import MenuLink from './MenuLink';

const MainList = () => {
  return (
    <ul className='flex items-center gap-6'>
      <li>
        <MenuLink linkPath={'/'} linkText='Home' />
      </li>
    </ul>
  );
};

export default MainList;
