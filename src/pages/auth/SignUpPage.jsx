import SignUpForm from '@/components/SignUpForm';
import EmptyLayout from '@/layouts/EmptyLayout';

import signUpThumb from '@/assets/images/svg/sign-up.svg';

const SignUpPage = () => {
  return (
    <EmptyLayout>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 p-6 flex flex-col items-center justify-center gap-6'>
          <h2 className='text-2xl uppercase text-center font-bold text-teal-500'>
            Sign Up
          </h2>
          <SignUpForm />
        </div>

        <figure className='w-full lg:w-1/2 p-6'>
          <img src={signUpThumb} alt='sign-up' />
        </figure>
      </div>
    </EmptyLayout>
  );
};

export default SignUpPage;
