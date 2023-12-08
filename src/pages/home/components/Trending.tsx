import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import fireLottie from '@assets/images/lottie/fire.json';
import { ItemCard } from '@components/card';
import { TRENDINGS } from '@config/mocks';
import { CarosalTitle } from './CarosalTitle';
import classes from './carousal.module.css';
import { useGetTrendingEvents } from '../queries';

export function Trending() {
  const { data } = useGetTrendingEvents({ size: 6 });
  console.log('trending', data);

  return (
    <Box>
      <CarosalTitle title="Trending" lottie={fireLottie} />

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
