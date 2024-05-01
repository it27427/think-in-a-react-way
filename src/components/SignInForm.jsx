import { useState } from 'react';
import InputField from './InputField';

const SignInForm = () => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => setInputData(e.target.value);

  return (
    <form className='px-6 w-full lg:px-12 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <InputField
          type='email'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='email'
          placeholder='Enter Email Address'
          value={inputData}
          onChange={handleChange}
        />

        <InputField
          type='password'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='password'
          placeholder='Enter Password'
          value={inputData}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SignInForm;
