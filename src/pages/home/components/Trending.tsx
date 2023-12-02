import { Carousel } from '@mantine/carousel';
import { Box, Title } from '@mantine/core';
import { ItemCard } from '@components/card';
import { TRENDINGS } from '@config/mocks';
import classes from './carousal.module.css';

export function Trending() {
  return (
    <Box>
      <Title order={4} ta="center" mb="xl">
        Trending
      </Title>

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
