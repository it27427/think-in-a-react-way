import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

const HeroSlider = ({ slides }) => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={(true, { delay: 5000 })}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.img}
              className='w-full h-96 object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
