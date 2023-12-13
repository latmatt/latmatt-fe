import { AspectRatio, Grid, Image, Text } from '@mantine/core';
import { CardLoading } from '@components/loading/CardListLoading';
import { useGetCategories } from '../queries';

export function Categories() {
  const { data, isLoading } = useGetCategories();

  if (isLoading)
    return (
      <CardLoading
        height={200}
        countNumber={6}
        span={{ base: 6, sm: 3, md: 2 }}
      />
    );

  return (
    <Grid>
      {data?.data.data.map((cat: Category) => (
        <Grid.Col key={cat.name} span={{ base: 4, sm: 4, md: 2 }}>
          <AspectRatio ratio={1 / 1} w="100%" mx="auto">
            <Image src={cat.image} radius="lg" />
            <Text fw="bold" fz={{ md: 'xl', sm: 'md' }} c="neutral.0">
              {cat.name}
            </Text>
          </AspectRatio>
        </Grid.Col>
      ))}
    </Grid>
  );
}
