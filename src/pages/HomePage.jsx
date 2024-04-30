import RootLayout from '@/layouts/RootLayout';

import HeroSlider from '@/components/HeroSlider';
import slides from '@/db/slider.json';

const HomePage = () => {
  return (
    <RootLayout>
      <HeroSlider slides={slides} />
    </RootLayout>
  );
};

export default HomePage;
