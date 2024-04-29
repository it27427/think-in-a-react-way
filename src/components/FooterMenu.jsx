import MainLink from './MainLink';

const FooterMenu = () => {
  return (
    <div className='container px-6 lg:px-10'>
      <ul>
        <li>
          <MainLink
            path='/faq'
            text='Faq'
            textColor='text-white underline underline-offset-4'
          />
        </li>
        <li>
          <MainLink
            path='/privary-policy'
            text='Privacy & Policy'
            textColor='text-white underline underline-offset-4'
          />
        </li>
        <li>
          <MainLink
            path='/tarms'
            text='Terms & Conditions'
            textColor='text-white underline underline-offset-4'
          />
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
