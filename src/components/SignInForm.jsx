import React from 'react';
import InputField from './InputField';

const SignInForm = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <InputField
        type='text'
        classes='test'
        id='test'
        placeholder='test'
        onChange={handleChange}
      />
    </form>
  );
};

export default SignInForm;
