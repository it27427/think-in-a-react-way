import EmptyLayout from '@/layouts/EmptyLayout';

import signInThumb from '@/assets/images/svg/login.svg';

const SignUpPage = () => {
  return (
    <EmptyLayout>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 p-6 flex flex-col items-center justify-center gap-6'>
          <h2 className='text-2xl uppercase text-center font-bold text-teal-500'>
            Sign In
          </h2>
          <SignInForm />
        </div>

        <figure className='w-full lg:w-1/2 p-6'>
          <img src={signInThumb} alt='sign-in' />
        </figure>
      </div>
    </EmptyLayout>
  );
};

export default SignUpPage;
