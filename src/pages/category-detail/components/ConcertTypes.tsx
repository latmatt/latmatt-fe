import { Grid, Stack, Image, AspectRatio, Text } from '@mantine/core';
import { CardLoading } from '@components/loading/CardListLoading';

interface Props {
  data: Genres[];
  isLoading: boolean;
}

export function ConcertTypes({ data, isLoading }: Props) {
  if (isLoading)
    return (
      <CardLoading
        height={200}
        countNumber={8}
        span={{ base: 3, sm: 1.5, md: 1.5 }}
      />
    );

  return (
    <Grid>
      {data.map((genre) => (
        <Grid.Col key={genre.id} span={{ base: 3, sm: 1.5, md: 1.5 }}>
          <Stack align="center">
            <AspectRatio ratio={1 / 1} w="100%">
              <Image radius="100%" fit="cover" src={genre.image} />
            </AspectRatio>

            <Text fw="bold">{genre.name}</Text>
          </Stack>
        </Grid.Col>
      ))}
    </Grid>
  );
}
