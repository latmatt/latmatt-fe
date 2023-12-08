import { AspectRatio, Grid, Image, Text } from '@mantine/core';
import { CATEGORIES } from '@config/mocks';
import { useGetAllEvents } from '../queries';

export function Categories() {
  const { data } = useGetAllEvents();

  console.log('all events', data);

  return (
    <Grid>
      {CATEGORIES.map((cat) => (
        <Grid.Col key={cat.name} span={{ base: 4, sm: 4, md: 2 }}>
          <AspectRatio ratio={1 / 1} w="100%" mx="auto">
            <Image src={cat.img} radius="lg" />
            <Text fw="bold" fz={{ md: 'xl', sm: 'md' }} c="neutral.0">
              {cat.name}
            </Text>
          </AspectRatio>
        </Grid.Col>
      ))}
    </Grid>
  );
}
