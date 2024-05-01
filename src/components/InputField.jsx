import React from 'react';

const InputField = ({ type, classes, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className={`${classes}`}
      id={`${id}`}
      placeholder={`${placeholder}`}
      value={`${value}`}
      onChange={onChange}
      autoComplete='off'
    />
  );
};

export default InputField;
