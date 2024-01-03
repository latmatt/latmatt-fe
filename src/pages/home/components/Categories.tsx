import { AspectRatio, Grid, Image, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { CardLoading } from '@components/loading/CardListLoading';
import classes from './style.module.css';
import { useGetCategories } from '../queries';

export function Categories() {
  const navigate = useNavigate();
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
          <AspectRatio
            onClick={() => navigate(`/categories/${cat.id}`)}
            ratio={1 / 1}
            w="100%"
            mx="auto"
            className={classes.category}
          >
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
