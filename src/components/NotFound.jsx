import NotFoundThunmb from '@/assets/images/error/error.svg';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <figure className='w-80 h-80'>
          <img src={NotFoundThunmb} alt='not-found-thumbnail' />
        </figure>

        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-3xl font-bold text-center text-red-600'>
            Page Not Found!
          </h2>
          <Link
            to='/'
            className='bg-red-400 text-white flex items-center gap-2 rounded py-3 px-5 font-semibold transition hover:bg-red-700'
          >
            <FaHome />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
