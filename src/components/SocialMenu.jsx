import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const SocialMenu = () => {
  return (
    <ul className='flex items-center gap-2'>
      <li>
        <a href='https://facebook.com' target='_blank' id='facebook'>
          <FaFacebookF className='text-white text-xl hover:text-cyan-200' />
        </a>
        <Tooltip anchorSelect='#facebook' place='top'>
          Follow us on facebook
        </Tooltip>
      </li>
      <li>
        <a href='https://twitter.com' target='_blank' id='twitter'>
          <FaTwitter className='text-white text-xl hover:text-cyan-200' />
        </a>
        <Tooltip anchorSelect='#twitter' place='top'>
          Follow us on twitter
        </Tooltip>
      </li>
      <li>
        <a href='https://instagram.com' target='_blank' id='instagram'>
          <FaInstagram className='text-white text-xl hover:text-cyan-200' />
        </a>
        <Tooltip anchorSelect='#instagram' place='top'>
          Follow us on instagram
        </Tooltip>
      </li>
      <li>
        <a href='https://linkedin.com' target='_blank' id='linkedin'>
          <FaLinkedin className='text-white text-xl hover:text-cyan-200' />
        </a>
        <Tooltip anchorSelect='#linkedin' place='top'>
          Follow us on linkedin
        </Tooltip>
      </li>
    </ul>
  );
};

export default SocialMenu;
