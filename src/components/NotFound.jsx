import NotFoundThunmb from '@/assets/images/error/error.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <figure className='flex items-center justify-center w-40 h-40'>
          <img src={NotFoundThunmb} alt='not-found-thumbnail' />
        </figure>
        <Link to='/' className='bg-red-400'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
