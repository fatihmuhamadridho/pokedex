import BannerImage from '@/components/atoms/BannerImage';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const Banner = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      height={706}
      emblaOptions={{ loop: true }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      withIndicators={true}
      withControls={false}
    >
      <CarouselSlide>
        <BannerImage variant="red" />
      </CarouselSlide>
      <CarouselSlide>
        <BannerImage variant="blue" />
      </CarouselSlide>
    </Carousel>
  );
};

export default Banner;
