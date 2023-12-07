import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import birdLottie from '@assets/images/lottie/Bird.json';
import { ItemCard } from '@components/card';
import { TRENDINGS } from '@config/mocks';
import { CarosalTitle } from './CarosalTitle';
import caroclasses from './carousal.module.css';

export function EarlyAccess() {
  return (
    <Box>
      <CarosalTitle title="Early Access" lottie={birdLottie} />

      <Carousel classNames={caroclasses}>
        {TRENDINGS.map((trending) => (
          <Carousel.Slide key={trending.title}>
            <ItemCard
              title={trending.title}
              location={trending.location}
              city={trending.city}
              time={trending.time}
              date={trending.date}
              image={trending.image}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
