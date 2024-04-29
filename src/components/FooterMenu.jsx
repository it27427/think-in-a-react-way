import MainLink from './MainLink';

const FooterMenu = () => {
  return (
    <ul className='flex flex-col gap-3'>
      <li>
        <MainLink
          path='/blogs'
          text='Blogs'
          textColor='text-white transition hover:text-teal-200 hover:underline underline-offset-4'
        />
      </li>
      <li>
        <MainLink
          path='/faq'
          text='Faq'
          textColor='text-white transition hover:text-teal-200 hover:underline underline-offset-4'
        />
      </li>
      <li>
        <MainLink
          path='/privary-policy'
          text='Privacy Policy'
          textColor='text-white transition hover:text-teal-200 hover:underline underline-offset-4'
        />
      </li>
      <li>
        <MainLink
          path='/tarms'
          text='Terms &amp; Conditions'
          textColor='text-white transition hover:text-teal-200 hover:underline underline-offset-4'
        />
      </li>
    </ul>
  );
};

export default FooterMenu;
