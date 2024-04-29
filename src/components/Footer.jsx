import Copyright from './Copyright';
import FooterMenu from './FooterMenu';
import SocialMenu from './SocialMenu';

const Footer = () => {
  return (
    <footer className='bg-teal-950 py-6'>
      <div className='flex flex-col'>
        <div className='container px-6 lg:px-10'>
          <div className='flex items-start justify-between'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-lg uppercase text-white'>
                About Us
              </h2>
              <FooterMenu />
            </div>

            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-lg uppercase text-white'>
                Follow Us
              </h2>
              <SocialMenu />
            </div>
          </div>
        </div>

        <hr className='border-b-1 border-teal-700 my-6' />

        <div className='container px-6 lg:px-10'>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
