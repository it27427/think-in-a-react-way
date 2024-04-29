import React from 'react';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <footer className='bg-teal-950 py-6'>
      <div className='flex flex-col'>
        <FooterMenu />
        <hr className='border-b-1 border-teal-700 my-6' />
      </div>
    </footer>
  );
};

export default Footer;
