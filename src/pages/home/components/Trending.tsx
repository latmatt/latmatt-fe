import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import fireLottie from '@assets/images/lottie/fire.json';
import { ItemCard } from '@components/card';
import { CardLoading } from '@components/loading/CardListLoading';
import { CarosalTitle } from './CarosalTitle';
import classes from './carousal.module.css';
import { useGetTrendingEvents } from '../queries';

export function Trending() {
  const { data, isLoading } = useGetTrendingEvents({ size: 6 });

  if (isLoading)
    return <CardLoading countNumber={4} span={{ base: 12, sm: 4, md: 3 }} />;

  return (
    <Box>
      <CarosalTitle title="Trending" lottie={fireLottie} />

      <Carousel classNames={classes}>
        {data?.data.data.map((trending: Event) => (
          <Carousel.Slide key={trending.title}>
            <ItemCard
              title={trending.title}
              location={trending.location.state}
              city={trending.location.city}
              time={trending.startTime}
              date={trending.startDate}
              image={trending.image}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
