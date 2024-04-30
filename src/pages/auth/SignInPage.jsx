import SignInForm from '@/components/SignInForm';
import EmptyLayout from '@/layouts/EmptyLayout';

const SignInPage = () => {
  return (
    <EmptyLayout>
      <div className='flex'>
        <SignInForm />
      </div>
    </EmptyLayout>
  );
};

export default SignInPage;
