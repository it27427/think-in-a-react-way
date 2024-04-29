import MainLink from './MainLink';

const FooterMenu = () => {
  return (
    <div className='container px-6 lg:px-10'>
      <ul>
        <li>
          <MainLink path='/faq' text='Faq' />
        </li>
        <li>
          <MainLink path='/privary-policy' text='Privacy & Policy' />
        </li>
        <li>
          <MainLink path='/tarms' text='Terms & Conditions' />
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
