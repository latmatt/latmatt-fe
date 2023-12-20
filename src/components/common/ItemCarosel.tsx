import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import { ItemCard } from '@components/card';
import { CardLoading } from '@components/loading/CardListLoading';
import { ItemCarosalTitle } from './ItemCarosalTitle';

interface Props {
  data: Event[];
  title: string;
  lottieGif: Record<string, unknown>;
  isLoading: boolean;
}

export function ItemCarosel({ data = [], title, lottieGif, isLoading }: Props) {
  if (isLoading)
    return <CardLoading countNumber={4} span={{ base: 12, sm: 4, md: 3 }} />;

  return (
    <Box>
      <ItemCarosalTitle title={title} lottie={lottieGif} />

      <Carousel>
        {data.map((trending: Event) => (
          <Carousel.Slide key={trending.title}>
            <ItemCard item={trending} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
