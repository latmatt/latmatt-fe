import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import birdLottie from '@assets/images/lottie/Bird.json';
import { ItemCard } from '@components/card';
import { CardLoading } from '@components/loading/CardListLoading';
import { CarosalTitle } from './CarosalTitle';
import caroclasses from './carousal.module.css';
import { useGetEarlyAccessEvents } from '../queries';

export function EarlyAccess() {
  const { data, isLoading } = useGetEarlyAccessEvents({ size: 6 });

  if (isLoading)
    return <CardLoading countNumber={4} span={{ base: 12, sm: 4, md: 3 }} />;

  return (
    <Box>
      <CarosalTitle title="Early Access" lottie={birdLottie} />

      <Carousel classNames={caroclasses}>
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
