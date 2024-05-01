import signInThumb from '@/assets/images/svg/login.svg';
import SignInForm from '@/components/SignInForm';
import EmptyLayout from '@/layouts/EmptyLayout';

const SignInPage = () => {
  return (
    <EmptyLayout>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 p-6 flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>Sign In</h2>
          </div>
          <SignInForm />
        </div>

        <figure className='w-full lg:w-1/2 p-6'>
          <img src={signInThumb} alt='sign-in' />
        </figure>
      </div>
    </EmptyLayout>
  );
};

export default SignInPage;
