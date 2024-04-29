import ErrorLayout from '@/components/layouts/ErrorLayout';
import NotFound from '@/components/NotFound';

const ErrorPage = () => {
  return (
    <ErrorLayout>
      <NotFound />
    </ErrorLayout>
  );
};

export default ErrorPage;
