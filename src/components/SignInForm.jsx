import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import InputField from './InputField';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='px-6 w-full lg:px-12 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <InputField
          type='email'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='email'
          placeholder='Enter Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type='password'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-teal-600'
          id='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        type='submit'
        classes='bg-teal-500 text-white font-semibold rounded text-center h-10 transition hover:bg-teal-600'
      >
        Sign In
      </Button>

      <div className='flex items-center justify-center'>
        <p className='text-center font-medium text-slate-800'>
          Don't have any account?{' '}
          <Link to='/sign-up' className='underline font-bold text-teal-900'>
            Register Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
