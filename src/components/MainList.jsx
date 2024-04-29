import React from 'react';
import MenuLink from './MenuLink';

const MainList = () => {
  return (
    <ul className='flex items-center gap-6'>
      <li>
        <MenuLink linkPath={'/'} linkText='Home' />
      </li>
      <li>
        <MenuLink linkPath={'/about'} linkText='About' />
      </li>
      <li>
        <MenuLink linkPath={'/blogs'} linkText='Blogs' />
      </li>
      <li>
        <MenuLink linkPath={'/contact'} linkText='Contact' />
      </li>
      <li>
        <MenuLink linkPath={'/products'} linkText='Products' />
      </li>
      <li>
        <MenuLink linkPath={'/faq'} linkText='Faq' />
      </li>
    </ul>
  );
};

export default MainList;
