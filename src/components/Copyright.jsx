import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <p>&copy; {currentYear} All rights reserved &ndash; - ReactBlog</p>;
};

export default Copyright;
