import { useState } from 'react';
import InputField from './InputField';

const SignInForm = () => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => setInputData(e.target.value);

  return (
    <form className='px-6 w-full lg:px-12'>
      <InputField
        type='email'
        classes='border border-slate-500 w-full'
        id='email'
        placeholder='Enter Email Address'
        value={inputData}
        onChange={handleChange}
      />
    </form>
  );
};

export default SignInForm;
