import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { ANNOUNCEMENTS } from '@config/mocks';

export function BannerCarosal() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      withIndicators
      withControls={false}
      slideSize="100%"
      slideGap="md"
      loop
      slidesToScroll="auto"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {ANNOUNCEMENTS.map((anno) => (
        <Carousel.Slide key={anno.image}>
          <Image radius="lg" src={anno.image} alt="anno" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
