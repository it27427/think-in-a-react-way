import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className='text-slate-100 font-medium text-center'>
      &copy; {currentYear} All rights reserved &ndash; ReactBlog
    </p>
  );
};

export default Copyright;
