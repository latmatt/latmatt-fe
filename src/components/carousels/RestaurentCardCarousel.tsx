import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import rocket from '@assets/images/lottie/rocket.json';
import { RestaurantCard } from '@components/card';
import { CardLoading } from '@components/loading/CardListLoading';
import { CarouselTitle } from './CarouselTitle';

interface Props {
  isLoading?: boolean;
  title: string;
}

export function RestaurentCardCarousel({ isLoading = false, title }: Props) {
  if (isLoading)
    return <CardLoading countNumber={4} span={{ base: 12, sm: 4, md: 3 }} />;

  return (
    <Box>
      <CarouselTitle title={title} lottie={rocket} />

      <Carousel>
        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>

        <Carousel.Slide>
          <RestaurantCard />
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}
