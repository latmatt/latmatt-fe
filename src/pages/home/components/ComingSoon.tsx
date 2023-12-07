import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import rocketLottie from '@assets/images/lottie/Rocket.json';
import { ItemCard } from '@components/card';
import { TRENDINGS } from '@config/mocks';
import { CarosalTitle } from './CarosalTitle';
import classes from './carousal.module.css';

export function ComingSoon() {
  return (
    <Box>
      <CarosalTitle title="Coming Soon" lottie={rocketLottie} />

      <Carousel classNames={classes}>
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
