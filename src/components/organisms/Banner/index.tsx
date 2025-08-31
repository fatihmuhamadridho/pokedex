import BannerImage from '@/components/atoms/BannerImage';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import PokeballImage from '@/components/atoms/PokeballImage';
import { Box } from '@mantine/core';
import ButtonExplore from '@/components/molecules/ButtonExplore';
import BannerTopContent from '@/components/molecules/BannerTopContent';
import Logo from '@/components/atoms/Logo';

const Banner = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Box>
      <Logo className="absolute top-[2vw] left-[8vw] z-10" />
      <ButtonExplore />
      <Carousel
        className="absolute"
        height={'70vw'}
        emblaOptions={{ loop: true }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        withIndicators={false}
        withControls={false}
      >
        <CarouselSlide>
          <BannerTopContent />
          <PokeballImage variant="pokeball" />
          <BannerImage variant="red" />
        </CarouselSlide>
        <CarouselSlide>
          <BannerTopContent />
          <PokeballImage variant="masterball" />
          <BannerImage variant="blue" />
        </CarouselSlide>
      </Carousel>
    </Box>
  );
};

export default Banner;
