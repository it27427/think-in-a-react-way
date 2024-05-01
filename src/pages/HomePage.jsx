import axios from 'axios';
import { useEffect, useState } from 'react';

import RootLayout from '@/layouts/RootLayout';

import HeroSlider from '@/components/HeroSlider';
import slides from '@/db/slider.json';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const categories = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products/categories'
        );
        setCategories(response.data);
      } catch (error) {
        setIsError(error.message);
      }
    };

    categories();
  }, []);

  return (
    <RootLayout>
      <HeroSlider slides={slides} />

      <ul>
        {isError === '' && <h2>{isError}</h2>}
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </RootLayout>
  );
};

export default HomePage;
