import { Card, Image, Text, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';

export function RestaurantCard() {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate('/restaurants/wef')}
      className={classes.card}
      withBorder
      radius="lg"
    >
      <Card.Section className={classes.imageSection}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          h={200}
          alt="No way!"
        />
        <Box className={classes.imageSlideup}>
          <Text c="neutral.0" fw="bold">
            Check Details
          </Text>
        </Box>
      </Card.Section>

      <Text fw="bold" fz="lg" my="md">
        Title
      </Text>

      <Text>Detail</Text>
    </Card>
  );
}
