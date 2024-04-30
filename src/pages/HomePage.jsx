import HeroSlider from '@/components/HeroSlider';
import slides from '@/db/slider.json';
import RootLayout from '@/layouts/RootLayout';

const HomePage = () => {
  return (
    <RootLayout>
      <HeroSlider slides={slides} />
    </RootLayout>
  );
};

export default HomePage;
