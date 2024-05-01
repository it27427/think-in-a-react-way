import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import InputField from './InputField';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='bg-slate-100 border border-slate-200 rounded p-6 w-full lg:p-12 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <InputField
          type='text'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='fullname'
          placeholder='Enter Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          type='email'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='email'
          placeholder='Enter Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type='tel'
          classes='border border-slate-300 w-full h-10 py-3 px-4 rounded transition focus:border-slate-700'
          id='phone'
          placeholder='Enter Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        Sign Up
      </Button>

      <div className='flex items-center justify-center'>
        <p className='text-center font-medium text-slate-800'>
          Already have an account?{' '}
          <Link to='/sign-in' className='underline font-bold text-teal-900'>
            Login Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
